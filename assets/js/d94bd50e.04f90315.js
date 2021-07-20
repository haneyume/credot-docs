(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(156)),c={title:"setting",sidebar_position:1},i={unversionedId:"advanced/GKE/setting",id:"advanced/GKE/setting",isDocsHomePage:!1,title:"setting",description:"drone",source:"@site/docs/advanced/GKE/setting.md",sourceDirName:"advanced/GKE",slug:"/advanced/GKE/setting",permalink:"/credot-docs/docs/advanced/GKE/setting",editUrl:"https://github.com/skynocover/credot-docs/tree/documentation/docs/advanced/GKE/setting.md",version:"current",sidebarPosition:1,frontMatter:{title:"setting",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\u5be6\u9ad4\u6a5fdb\u5099\u4efd",permalink:"/credot-docs/docs/advanced/dbdump/\u5be6\u9ad4\u6a5f"},next:{title:"Readmd",permalink:"/credot-docs/docs/advanced/godot/ReadMe"}},d=[{value:"drone",id:"drone",children:[]},{value:"\u53c3\u8003\u9023\u7d50",id:"\u53c3\u8003\u9023\u7d50",children:[]}],s={toc:d};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"drone"},"drone"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-docker"},"steps: #\u5de5\u4f5c\u5217\u8868\n  - name: publish\n    when:\n      event: tag\n    image: plugins/gcr\n    settings:\n      registry: asia.gcr.io\n      repo: k8sbeta/pemen_be #project_id/imagename\n      dockerfile: Dockerfile\n      json_key:\n        from_secret: jsonsecret\n      tags:\n        - latest\n        - ${DRONE_TAG}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"project_id \u70ba\u5efa\u7acbgcr\u7684project\u540d\u7a31")),Object(a.b)("h2",{id:"\u53c3\u8003\u9023\u7d50"},"\u53c3\u8003\u9023\u7d50"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",{parentName:"p",href:"https://cloud.google.com/container-registry/docs/advanced-authentication?hl=zh-tw#gcloud_3"},"Authentication methods"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",{parentName:"p",href:"https://cloud.google.com/container-registry/docs/pushing-and-pulling?hl=zh-tw&_ga=2.185577710.-679657367.1622080954&_gac=1.61359070.1622096055.CjwKCAjw47eFBhA9EiwAy8kzNBouAPjcFv4yrz8hGcUEtTwY5geZEJ_EtRGYTFB4rk3uuj-S5er0-RoCDhMQAvD_BwE"},"push image")))))}u.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,m=l["".concat(c,".").concat(b)]||l[b]||p[b]||a;return n?o.a.createElement(m,i(i({ref:t},s),{},{components:n})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);