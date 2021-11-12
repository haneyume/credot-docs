(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(164)),c={title:"\u4f7f\u7528 TailwindCSS",sidebar_position:1},s={unversionedId:"using-libs/tailwindcss/tailwindcss",id:"using-libs/tailwindcss/tailwindcss",isDocsHomePage:!1,title:"\u4f7f\u7528 TailwindCSS",description:"install",source:"@site/docs/using-libs/tailwindcss/tailwindcss.md",sourceDirName:"using-libs/tailwindcss",slug:"/using-libs/tailwindcss/tailwindcss",permalink:"/credot-docs/docs/using-libs/tailwindcss/tailwindcss",editUrl:"https://github.com/skynocover/credot-docs/tree/documentation/docs/using-libs/tailwindcss/tailwindcss.md",version:"current",sidebarPosition:1,frontMatter:{title:"\u4f7f\u7528 TailwindCSS",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\u4f7f\u7528 GraphQL Code Generator",permalink:"/credot-docs/docs/using-libs/graphql/graphql-code-generator"},next:{title:"\u5e38\u7528\u8a9e\u6cd5",permalink:"/credot-docs/docs/using-libs/tailwindcss/useful"}},o=[{value:"install",id:"install",children:[]},{value:"initial",id:"initial",children:[]},{value:"\u52a0\u5230\u5c08\u6848\u5167",id:"\u52a0\u5230\u5c08\u6848\u5167",children:[]}],l={toc:o};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"install"},"install"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://tailwindcss.com/docs/installation"},"install")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://tailwindcss.com/docs/guides/nextjs"},"with_nextjs"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest\n")),Object(a.b)("h2",{id:"initial"},"initial"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npx tailwindcss init -p\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u5c07\u6703\u7522\u751f config \u6a94 tailwind.config.js")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"module.exports = {\n  purge: [],\n  darkMode: false, // or 'media' or 'class'\n  theme: {\n    extend: {},\n  },\n  variants: {},\n  plugins: [],\n}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"purge \u9700\u8981\u52a0\u5165\u9700\u8981 tailwind \u7684\u8def\u5f91 eg:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},"purge:['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],\n")),Object(a.b)("h2",{id:"\u52a0\u5230\u5c08\u6848\u5167"},"\u52a0\u5230\u5c08\u6848\u5167"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"import 'tailwindcss/tailwind.css';\n")))}u.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||a;return n?i.a.createElement(m,s(s({ref:t},l),{},{components:n})):i.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);