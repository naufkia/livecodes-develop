"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3467],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),v=o,f=p["".concat(c,".").concat(v)]||p[v]||u[v]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=v;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},4177:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i="Services",s={unversionedId:"advanced/services",id:"advanced/services",title:"Services",description:"LiveCodes (being a client-side app) uses multiple services (for example for authentication, sharing, module resolution, etc).",source:"@site/docs/advanced/services.md",sourceDirName:"advanced",slug:"/advanced/services",permalink:"/docs/advanced/services",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/advanced/services.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Custom Settings",permalink:"/docs/advanced/custom-settings"},next:{title:"Data Collection",permalink:"/docs/advanced/data-collection"}},c={},l=[],d={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"services"},"Services"),(0,o.kt)("p",null,"LiveCodes (being a client-side app) uses multiple services (for example for authentication, sharing, module resolution, etc)."),(0,o.kt)("p",null,"These services are ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/live-codes/livecodes/tree/develop/src/livecodes/services"},"defined here"),"."),(0,o.kt)("p",null,"If you ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started#self-hosting"},"self-host")," your app and need to change any of these services, start by following the ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started#self-hosting"},"guide described there"),"."),(0,o.kt)("p",null,"Then, edit the services you want (in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/livecodes/services"),"). The used services need to have the same API."),(0,o.kt)("p",null,"The app then needs to be re-built using the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build\n")),(0,o.kt)("p",null,"The built app is in ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," directory. This can be hosted on any static file server. It needs to be served from the root of the domain/subdomain."))}p.isMDXComponent=!0}}]);