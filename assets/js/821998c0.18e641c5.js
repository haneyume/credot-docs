(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),i=(n(0),n(170)),c={title:"modelApi",sidebar_position:1},l={unversionedId:"project-settings/strapi/modelApi",id:"project-settings/strapi/modelApi",isDocsHomePage:!1,title:"modelApi",description:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html",source:"@site/docs/project-settings/strapi/modelApi.md",sourceDirName:"project-settings/strapi",slug:"/project-settings/strapi/modelApi",permalink:"/credot-docs/docs/project-settings/strapi/modelApi",editUrl:"https://github.com/skynocover/credot-docs/tree/documentation/docs/project-settings/strapi/modelApi.md",version:"current",sidebarPosition:1,frontMatter:{title:"modelApi",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"using",permalink:"/credot-docs/docs/project-settings/preact/using"},next:{title:"customApi",permalink:"/credot-docs/docs/project-settings/strapi/customApi"}},b=[{value:"end point",id:"end-point",children:[{value:"collection type",id:"collection-type",children:[]},{value:"single type",id:"single-type",children:[]}]},{value:"params",id:"params",children:[{value:"sort",id:"sort",children:[]},{value:"filters",id:"filters",children:[]},{value:"populate",id:"populate",children:[]},{value:"fields",id:"fields",children:[]},{value:"pagination",id:"pagination",children:[]},{value:"publicationState",id:"publicationstate",children:[]},{value:"locale",id:"locale",children:[]}]}],p={toc:b};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html"},"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html"))),Object(i.b)("h2",{id:"end-point"},"end point"),Object(i.b)("h3",{id:"collection-type"},"collection type"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"model name: restaurants")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"get /api/restaurants"),Object(i.b)("li",{parentName:"ul"},"post /api/restaurants"),Object(i.b)("li",{parentName:"ul"},"get /api/restaurants/:id"),Object(i.b)("li",{parentName:"ul"},"delete /api/restaurants/:id"),Object(i.b)("li",{parentName:"ul"},"put /api/restaurants/:id")),Object(i.b)("h3",{id:"single-type"},"single type"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"model name: restaurant")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"get /api/restaurant"),Object(i.b)("li",{parentName:"ul"},"delete /api/restaurant"),Object(i.b)("li",{parentName:"ul"},"put /api/restaurant")),Object(i.b)("h2",{id:"params"},"params"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u53ef\u4f7f\u7528",Object(i.b)("a",{parentName:"p",href:"https://skynocover.github.io/qs-parser/"},"\u5de5\u5177"),"\u4f86\u7d44Query String")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"#sort"},"sort"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"#filters"},"filters"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"#populate"},"populate"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"#fields"},"fields"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"#pagination"},"pagination"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"#publicationstate"},"publicationState"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"#locale"},"locale")))),Object(i.b)("h3",{id:"sort"},"sort"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"/api/orders?sort=createdAt:desc"),Object(i.b)("li",{parentName:"ul"},"/api/orders?sort","[0]","=createdAt:desc&sort","[1]","=id:asc")),Object(i.b)("h3",{id:"filters"},"filters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},Object(i.b)("strong",{parentName:"th"},"Operator")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"$eq / $ne")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"$lt / $lte / $gt / $gte")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"$in / $notIn")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"$contains / $notContains (\u5927\u5c0f\u5beb\u654f\u611f)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"$containsi / $notContainsi")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"$null / $notNull")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"$between")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"$startsWith / $endsWith")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"$or / $and")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"/api/orders?filters","[description][$contains]","=Test")),Object(i.b)("h3",{id:"populate"},"populate"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u95dc\u806f\u8cc7\u6599")),Object(i.b)("h4",{id:"\u53d6\u5f97\u4e00\u5c64\u5168\u90e8\u95dc\u806f\u8cc7\u6599"},"\u53d6\u5f97\u4e00\u5c64\u5168\u90e8\u95dc\u806f\u8cc7\u6599"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"/api/orders?populate=","*")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "id": 1,\n      "attributes": {\n        "description": "test",\n        "createdAt": "2021-12-10T03:38:11.333Z",\n        "updatedAt": "2021-12-10T04:15:27.413Z",\n        "start": "2021-12-01",\n        "end": "2021-12-04",\n        "room": {\n          "data": {\n            "id": 1,\n            "attributes": {\n              "type": "regular",\n              "roomNo": 102,\n              "beds": 1,\n              "createdAt": "2021-12-09T10:15:50.429Z",\n              "updatedAt": "2021-12-10T03:43:22.206Z",\n              "checkIn": false\n            }\n          }\n        },\n        "users_permissions_user": {\n          "data": {\n            "id": 1,\n            "attributes": {\n              "username": "test",\n              "email": "skynocover@gmail.com",\n              "provider": "local",\n              "confirmed": false,\n              "blocked": false,\n              "createdAt": "2021-12-08T16:23:59.531Z",\n              "updatedAt": "2021-12-09T16:53:11.861Z"\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n')),Object(i.b)("h4",{id:"\u53d6\u5f97\u67d0\u9805\u95dc\u806f"},"\u53d6\u5f97\u67d0\u9805\u95dc\u806f"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"/api/orders?populate","[0]","=room")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "id": 1,\n      "attributes": {\n        "description": "test",\n        "createdAt": "2021-12-10T03:38:11.333Z",\n        "updatedAt": "2021-12-10T04:15:27.413Z",\n        "start": "2021-12-01",\n        "end": "2021-12-04",\n        "room": {\n          "data": {\n            "id": 1,\n            "attributes": {\n              "type": "regular",\n              "roomNo": 102,\n              "beds": 1,\n              "createdAt": "2021-12-09T10:15:50.429Z",\n              "updatedAt": "2021-12-10T03:43:22.206Z",\n              "checkIn": false\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n')),Object(i.b)("h4",{id:"\u591a\u5c64\u95dc\u806f"},"\u591a\u5c64\u95dc\u806f"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"/api/orders?populate","[users_permissions_user][populate]","=role")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "id": 1,\n      "attributes": {\n        "description": "test",\n        "createdAt": "2021-12-10T03:38:11.333Z",\n        "updatedAt": "2021-12-10T04:15:27.413Z",\n        "start": "2021-12-01",\n        "end": "2021-12-04",\n        "users_permissions_user": {\n          "data": {\n            "id": 1,\n            "attributes": {\n              "username": "test",\n              "email": "skynocover@gmail.com",\n              "provider": "local",\n              "confirmed": false,\n              "blocked": false,\n              "createdAt": "2021-12-08T16:23:59.531Z",\n              "updatedAt": "2021-12-09T16:53:11.861Z",\n              "role": {\n                "data": {\n                  "id": 1,\n                  "attributes": {\n                    "name": "Authenticated",\n                    "description": "Default role given to authenticated user.",\n                    "type": "authenticated",\n                    "createdAt": "2021-12-08T15:22:52.884Z",\n                    "updatedAt": "2021-12-11T16:01:44.504Z"\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ]\n}\n')),Object(i.b)("h3",{id:"fields"},"fields"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u53ea\u53d6\u5f97\u67d0\u4e9b\u6b04\u4f4d")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"/api/orders?fields","[0]","=description&fields","[1]","=start")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "id": 1,\n      "attributes": {\n        "description": "test",\n        "start": "2021-12-01"\n      }\n    }\n  ]\n}\n')),Object(i.b)("h3",{id:"pagination"},"pagination"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"Parameter"),Object(i.b)("th",{parentName:"tr",align:"center"},"Type"),Object(i.b)("th",{parentName:"tr",align:"center"},"\u9810\u8a2d"),Object(i.b)("th",{parentName:"tr",align:"center"},"\u63cf\u8ff0"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"pagination","[page]"),Object(i.b)("td",{parentName:"tr",align:"center"},"int"),Object(i.b)("td",{parentName:"tr",align:"center"},"1"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u9801\u6578")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"pagination","[pageSize]"),Object(i.b)("td",{parentName:"tr",align:"center"},"int"),Object(i.b)("td",{parentName:"tr",align:"center"},"25"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u6bcf\u9801\u6578\u91cf")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"pagination","[withCount]"),Object(i.b)("td",{parentName:"tr",align:"center"},"boolean"),Object(i.b)("td",{parentName:"tr",align:"center"},"true"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u662f\u5426\u56de\u50b3 pageCount/total")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"/api/articles?pagination","[page]","=1&pagination","[pageSize]","=10"),Object(i.b)("li",{parentName:"ul"},"/api/articles?pagination","[withCount]","=true")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [...],\n  "meta": {\n    "pagination": {\n      "page": 1,\n      "pageSize": 10,\n      "pageCount": 1,\n      "total": 5\n    }\n  }\n}\n')),Object(i.b)("h3",{id:"publicationstate"},"publicationState"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u662f\u5426\u53d6\u5f97\u70ba\u8349\u7a3f\u7684\u8cc7\u6599")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"/api/articles?publicationState=live (\u53ea\u53d6\u5f97\u975e\u8349\u7a3f\u8cc7\u6599,\u9810\u8a2d)"),Object(i.b)("li",{parentName:"ul"},"/api/articles?publicationState=preview (\u4e0d\u8ad6\u662f\u5426\u70ba\u8349\u7a3f\u90fd\u53d6\u5f97)")),Object(i.b)("h3",{id:"locale"},"locale"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"i18n \u7528")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",{parentName:"p",href:"https://docs.strapi.io/developer-docs/latest/plugins/i18n.html#getting-localized-entries-with-the-locale-parameter"},"https://docs.strapi.io/developer-docs/latest/plugins/i18n.html#getting-localized-entries-with-the-locale-parameter"))))}o.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=o(n),u=a,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||i;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<i;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);