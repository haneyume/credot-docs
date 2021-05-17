---
title: CICD
---


## ngrok

> https://dashboard.ngrok.com

> [ubuntu intall link](https://snapcraft.io/install/ngrok/ubuntu)

### intall

```
sudo snap install ngrok
```



### forwarding

> ngrok http 8081

得到網址

```
Session Status                online
Account                       EricWu (Plan: Free)
Version                       2.3.35
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://524c5b23a4f8.ngrok.io -> http://localhost:8081
Forwarding                    https://524c5b23a4f8.ngrok.io -> http://localhost:8081

Connections                   ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

### connect

- authtoken: 註冊的ngrok的帳號頒發的token

```
ngrok authtoken 1ndC6jZveOOtfz0TzEFFdiNBuzM_EuRAumdYrAt117huUoFr
```

## github

### 建立新的 OAuth

- [前往並建立](https://github.com/settings/applications/new)
- Homepage URL http://524c5b23a4f8.ngrok.io (ngrok產生的)
- Authorization callback URL http://524c5b23a4f8.ngrok.io/login (ngrok產生的)
- 產生 Client secrets 並記錄
- 紀錄 Client ID

## drone

> https://www.drone.io

## install

- docker-compose.yml

```yaml
version: "3"

services:
  drone-server:
    image: drone/drone:latest #指定server為drone最新版
    ports:
      - 8081:80
    volumes:
      - ./:/data
    restart: always
    environment:
      - DRONE_SERVER_HOST=${DRONE_SERVER_HOST} #Drone server url 填寫在.env檔案中
      - DRONE_SERVER_PROTO=${DRONE_SERVER_PROTO} #Drone server protocol 填寫在.env檔案中
      - DRONE_RPC_SECRET=${DRONE_RPC_SECRET} #自定義隨機碼，填寫在.env檔案中
      - DRONE_AGENTS_ENABLED=true
      # Github Config
      - DRONE_GITHUB_CLIENT_ID=${DRONE_GITHUB_CLIENT_ID} #github client ID，填寫在.env檔案中
      - DRONE_GITHUB_CLIENT_SECRET=${DRONE_GITHUB_CLIENT_SECRET} #github client secret，填寫在.env檔案中
  drone-agent:
    image: drone/drone-runner-docker:latest
    ports:
      - 3000:3000
    restart: always
    depends_on:
      - drone-server
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      - DRONE_RPC_PROTO=http
      - DRONE_RPC_HOST=drone-server
      - DRONE_RPC_SECRET=${DRONE_RPC_SECRET}
      - DRONE_RUNNER_NAME=${DRONE_HOSTNAME} #自訂host name 填寫在.env檔案中
      - DRONE_RUNNER_CAPACITY=2
```

- env

```
DRONE_SERVER_HOST=524c5b23a4f8.ngrok.io
DRONE_SERVER_PROTO=http
DRONE_RPC_SECRET=gEY6Ys1knt3fJnAsda
DRONE_GITHUB_CLIENT_ID=4292f3927a2166d960c9
DRONE_GITHUB_CLIENT_SECRET=97106a15a3929c8b79d5cce7cae4261f535d4c69
DRONE_HOSTNAME=test_host
```

- DRONE_SERVER_HOST ngrok 給的 host 或 ip port (不需要 http://)
- DRONE_RPC_SECRET 自定義亂數
- DRONE_GITHUB_CLIENT_ID
- DRONE_GITHUB_CLIENT_SECRET
- DRONE_HOSTNAME

## 佈署

### active

- 針對每一個 repo 前往剛剛產生的ngrok網址進行 active 並 SAVE
- 設定secret (hubname,hubsecret) 讓dockerhub帳號跟密碼不會在yaml檔中顯示

### yaml

- 於每個專案內加入.drone.yml檔

- .drone.yml

```yaml
kind: pipeline
type: docker #在docker環境中執行
name: test #自定義pipleline名稱

steps: #工作列表
  - name: tsc
    when:
      event: tag
    pull: if-not-exists #要不要pull指定的image
    image: node:current-alpine3.12
    commands: # 需執行的指令
      - yarn global add typescript
      - yarn install
      - yarn bundle

  - name: build-image #自訂工作名稱
    when:
      event: tag
    pull: if-not-exists #要不要pull指定的image
    image: plugins/docker #指定要拿來執行command的image或者plugin
    settings:
      registry: registry.hub.docker.com #dockerhub registry url
      repo: registry.hub.docker.com/skynocover/amber-server #打包完要上傳的docker repo名稱
      dockerfile: dockerfile #根據指定的Docker file打包image
      #auto_tag: true #自動下tag
      username:
        from_secret: hubname
      password:
        from_secret: hubsecret
      tags:
        - latest
        - ${DRONE_TAG}
```

### dockerfile

```dockerfile
FROM node:current-alpine3.12
RUN mkdir /src
COPY dist /src
COPY .env /src
WORKDIR /src
CMD ["node","-r","dotenv/config","/src/index.min.js"]
```

### 對commit下tag

- 格式 vX.X.X

## ubuntu service部署

> 自動部署

### service

> sudo vim /etc/systemd/system/projectName.service

- projectName: amber

```
[Unit]
Description=projectName Container
Requires=docker.service
After=docker.service
[Service]
Restart=always
ExecStart=/usr/bin/docker run --name=projectName -p 3000:3000 stu60610/projectName
ExecStop=/usr/bin/docker stop -t 2 projectName
ExecStopPost=/usr/bin/docker rm -f projectName
[Install]
WantedBy=default.target
```

> systemctl daemon-reload

> systemctl enable projectName.service

### script

> vim deploy.sh

```sh
#!/bin/bash
echo “Updating staging Server”
echo “stopping projectName.service”
sudo systemctl stop projectName.service
# remove all outdated images and containers
echo “removing outdated/dangling images and containers”
sudo docker rmi stu60610/projectName:latest
# create new image for projectName
echo “create new image for projectName”
cd /home/stu60610/projectName
git pull origin master
sudo docker build -t=”stu60610/projectName” .
# restart service which will use the newly pulled image
echo “restarting projectName service”
sudo systemctl start projectName.service
# App is updated!
echo “projectName successfuly updated!”
```

> sudo chmod +x deploy.sh

> sh deploy.sh

### drone設定

```yaml
- name: ssh-deploy
  when:
    event: tag
  image: appleboy/drone-ssh
  settings:
    host:
      from_secret: sshhost
    username:
      from_secret: sshname
    password:
      from_secret: sshkey
    port: 22
    command_timeout: 2m
    script:
      - cd /root/temp # or whereever you put your `deploy.sh`
      - sh deploy.sh
```

## slack

> 使用slack發送channela

> [link](https://medium.com/@stu60610/%E4%BD%BF%E7%94%A8-docker-drone-%E5%BB%BA%E7%AB%8B%E7%B0%A1%E6%98%93%E8%87%AA%E5%8B%95%E9%83%A8%E7%BD%B2%E6%B5%81%E7%A8%8B-part2-7d250e926bd8)

### 建立webhook

[slack websock](https://my.slack.com/services/new/incoming-webhook)

### yaml

```yaml
  - name: notify
    when:
      event: tag
    image: plugins/slack
    settings:
      webhook: https://hooks.slack.com/services/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
      channel: drone
      username: drone
      template: >
        {{#success build.status}}
          build {{build.number}} succeeded. Good job.
        {{else}}
          build {{build.number}} failed. Fix me please.
        {{/success}}
```


## secret

> 純記錄 非必要

> drone secret -h

```
NAME:
   drone secret - manage secrets

USAGE:
   drone secret command [command options] [arguments...]

COMMANDS:
     add     adds a secret
     rm      remove a secret
     update  update a secret
     info    display secret info
     ls      list secrets

OPTIONS:
   --help, -h  show help
```

新增 secret 並綁定 image 及 repository

```
drone secret add \
  --name ssh-password \
  --data 1234567890 \
  --image appleboy/drone-ssh \
  --repository go-training/drone-workshop
```

新增檔案

@後面為檔案路徑

```
drone secret add \
  --name ssh-key \
  --data @/etc/server.pem \
  --image appleboy/drone-ssh \
  --repository go-training/drone-workshop
```

## P.S.

> github 目標 repo >settings >Webhooks

檢查 url 是否正確

> 若webhooks錯誤

在drone介面內重新enable

### 參考連結

- [link](https://medium.com/starbugs/%E5%BE%9E%E9%9B%B6%E9%96%8B%E5%A7%8B%E5%AD%B8-devops-%E9%82%A3%E5%B0%B1%E9%81%B8%E6%93%87%E6%9C%80%E7%B0%A1%E5%96%AE%E7%9A%84-drone-ci-%E9%96%8B%E5%A7%8B%E5%90%A7-931126671139)
- [link](https://blog.wu-boy.com/2019/04/cicd-drone-1-0-feature/)
