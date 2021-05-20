(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{141:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),p=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,m=b["".concat(c,".").concat(u)]||b[u]||s[u]||l;return n?a.a.createElement(m,o(o({ref:t},d),{},{components:n})):a.a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var d=2;d<l;d++)c[d]=n[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(141)),c={title:"manual",sidebar_position:2},o={unversionedId:"utils/caddy/manual",id:"utils/caddy/manual",isDocsHomePage:!1,title:"manual",description:"\u57fa\u672c\u4f7f\u7528",source:"@site/docs/utils/caddy/manual.md",sourceDirName:"utils/caddy",slug:"/utils/caddy/manual",permalink:"/credot-docs/docs/utils/caddy/manual",editUrl:"https://github.com/skynocover/credot-docs/tree/documentation/docs/utils/caddy/manual.md",version:"current",sidebarPosition:2,frontMatter:{title:"manual",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"install",permalink:"/credot-docs/docs/utils/caddy/install"},next:{title:"install",permalink:"/credot-docs/docs/utils/nginx/install"}},i=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",children:[]},{value:"\u6307\u4ee4",id:"\u6307\u4ee4",children:[{value:"tls",id:"tls",children:[]},{value:"redir",id:"redir",children:[]}]},{value:"\u8a2d\u5b9a\u6a94",id:"\u8a2d\u5b9a\u6a94",children:[{value:"\u67e5\u770b\u7576\u524d\u8a2d\u5b9a\u6a94",id:"\u67e5\u770b\u7576\u524d\u8a2d\u5b9a\u6a94",children:[]},{value:"\u8a2d\u5b9a\u6a94\u683c\u5f0f",id:"\u8a2d\u5b9a\u6a94\u683c\u5f0f",children:[]}]},{value:"api",id:"api",children:[{value:"\u66f4\u65b0\u8a2d\u5b9a\u6a94",id:"\u66f4\u65b0\u8a2d\u5b9a\u6a94",children:[]}]},{value:"patterns",id:"patterns",children:[{value:"static file",id:"static-file",children:[]},{value:"reverse proxy",id:"reverse-proxy",children:[]},{value:"load balance",id:"load-balance",children:[]}]}],d={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://caddyserver.com/docs/getting-started"},"link"),Object(l.b)("br",{parentName:"p"}),"\n",Object(l.b)("a",{parentName:"p",href:"https://caddyserver.com/docs/conventions#placeholders"},"placeholders"),Object(l.b)("br",{parentName:"p"}),"\n",Object(l.b)("a",{parentName:"p",href:"https://caddyserver.com/docs/v2-upgrade"},"v1-v2")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"caddy start // \u80cc\u666f\u57f7\u884c\ncaddy run   // \u524d\u666f\u57f7\u884c\ncaddy stop  // \u505c\u6b62\n")),Object(l.b)("h2",{id:"\u6307\u4ee4"},"\u6307\u4ee4"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"railgun.moe gzip log /var/log/caddy/access.log tls lengz@lengzzz.com root /var/www/\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"log \u8868\u793a\u958b\u555f log \u529f\u80fd"),Object(l.b)("li",{parentName:"ul"},"tls \u8868\u793a\u958b\u555f https \u4e26\u81ea\u52d5\u7533\u8acb\u8b49\u66f8"),Object(l.b)("li",{parentName:"ul"},"email \u8868\u793a\u544a\u77e5 CA \u7533\u8acb\u4eba\u7684\u4fe1\u7bb1")),Object(l.b)("h3",{id:"tls"},"tls"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528\u81ea\u7c3d")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"tls /etc/ssl/cert.pem /etc/ssl/key.pem\n")),Object(l.b)("h3",{id:"redir"},"redir"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528 301 \u8f49\u5c0e\u5411")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"redir / https://lengzzz.com/archive/{uri} 301\n")),Object(l.b)("h2",{id:"\u8a2d\u5b9a\u6a94"},"\u8a2d\u5b9a\u6a94"),Object(l.b)("h3",{id:"\u67e5\u770b\u7576\u524d\u8a2d\u5b9a\u6a94"},"\u67e5\u770b\u7576\u524d\u8a2d\u5b9a\u6a94"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"curl localhost:2019/config/\n")),Object(l.b)("h3",{id:"\u8a2d\u5b9a\u6a94\u683c\u5f0f"},"\u8a2d\u5b9a\u6a94\u683c\u5f0f"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"json")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "apps": {\n    "http": {\n      "servers": {\n        "example": {\n          "listen": [":2015"],\n          "routes": [\n            {\n              "handle": [\n                {\n                  "handler": "static_response",\n                  "body": "Hello, world!"\n                }\n              ]\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'curl localhost:2019/load \\\n    -X POST \\\n    -H "Content-Type: application/json" \\\n    -d @caddy.json\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Caddyfile")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-caddyfile"},':2015\n\nrespond "Hello, world!"\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"caddy adapt\ncaddy adapt --config /path/to/Caddyfile\n")),Object(l.b)("p",null,"or"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"caddy run --config /path/to/Caddyfile\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'localhost {\n    respond "Hello, world!"\n}\n\nlocalhost:2016 {\n    respond "Goodbye, world!"\n}\n')),Object(l.b)("h2",{id:"api"},"api"),Object(l.b)("h3",{id:"\u66f4\u65b0\u8a2d\u5b9a\u6a94"},"\u66f4\u65b0\u8a2d\u5b9a\u6a94"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'curl localhost:2019/load \\\n    -X POST \\\n    -H "Content-Type: text/caddyfile" \\\n    --data-binary @Caddyfile\n')),Object(l.b)("h2",{id:"patterns"},"patterns"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://caddyserver.com/docs/caddyfile/patterns"},"link")),Object(l.b)("h3",{id:"static-file"},"static file"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"example.com\nencode gzip # \u8868\u793a\u4f7f\u7528gzip\u58d3\u7e2e\nroot * /var/www\nfile_server\n")),Object(l.b)("p",null,"or"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'yourdomain.com {      # \u586b\u5beb\u7db2\u57df\u624d\u6703\u81ea\u52d5\u7522\u751f SSL \u6191\u8b49\uff0c\u5982\u679c\u4e0d\u5bebport\u6703\u540c\u6642\u958b80\u8ddf443\n    root * /home/www    # \u7db2\u7ad9\u6839\u76ee\u9304\n    encode gzip              # \u7db2\u9801\u58d3\u7e2e\n    header /assets {  # \u52a0\u5165\u6a94\u982d\uff0c\u6307\u5b9a assets \u8def\u5f91\u4e0b\n      Cache-Control "max-age=604800"   # \u63a7\u5236\u700f\u89bd\u5668\u5feb\u53d6\uff0c\u58fd\u547d\u4e00\u9031\n    }\n}\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"path matchers")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"redir /old.html /new.html\n")),Object(l.b)("h3",{id:"reverse-proxy"},"reverse proxy"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"example.com\n\nreverse_proxy localhost:5000\n")),Object(l.b)("p",null,"proxy /api/ \u5176\u9918\u4f7f\u7528 static files"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"example.com\n\nroot * /var/www\nreverse_proxy /api/* localhost:5000\nfile_server\n")),Object(l.b)("h3",{id:"load-balance"},"load balance"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"reverse_proxy / web1.local:80 web2.local:90 web3.local:100\n")))}p.isMDXComponent=!0}}]);