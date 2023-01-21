"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3084],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(o),m=a,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||r;return o?n.createElement(f,l(l({ref:t},d),{},{components:o})):n.createElement(f,l({ref:t},d))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<r;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1262:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(7294),a=o(2389);function r(e){let{children:t,fallback:o}=e;return(0,a.Z)()?n.createElement(n.Fragment,null,t?.()):o??null}},5162:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(7294),a=o(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:o,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,l),hidden:o},t)}},5488:(e,t,o)=>{o.d(t,{Z:()=>m});var n=o(7462),a=o(7294),r=o(6010),l=o(2389),s=o(7392),i=o(7094),c=o(2466);const d="tabList__CuJ",p="tabItem_LNqP";function u(e){const{lazy:t,block:o,defaultValue:l,values:u,groupId:m,className:f}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=u??h.map((e=>{let{props:{value:t,label:o,attributes:n}}=e;return{value:t,label:o,attributes:n}})),g=(0,s.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===l?l:l??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:w}=(0,i.U)(),[k,E]=(0,a.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=m){const e=b[m];null!=e&&e!==k&&y.some((t=>t.value===e))&&E(e)}const T=e=>{const t=e.currentTarget,o=C.indexOf(t),n=y[o].value;n!==k&&(N(t),E(n),null!=m&&w(m,String(n)))},x=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const o=C.indexOf(e.currentTarget)+1;t=C[o]??C[0];break}case"ArrowLeft":{const o=C.indexOf(e.currentTarget)-1;t=C[o]??C[C.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},f)},y.map((e=>{let{value:t,label:o,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>C.push(e),onKeyDown:x,onClick:T},l,{className:(0,r.Z)("tabs__item",p,l?.className,{"tabs__item--active":k===t})}),o??t)}))),t?(0,a.cloneElement)(h.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function m(e){const t=(0,l.Z)();return a.createElement(u,(0,n.Z)({key:String(t)},e))}},7778:(e,t,o)=>{o.d(t,{Z:()=>y});var n=o(7462),a=o(7294);const r=async function(e,t){void 0===t&&(t={});const{appUrl:o="https://livecodes.io/",params:n={},config:a={},import:r,lite:l=!1,loading:s="lazy",template:i,view:c="split"}=t;let d,p;if(d="string"==typeof e?document.querySelector(e):e,!e)throw new Error("Container element is required.");if(!d)throw new Error(`Cannot find element: "${e}"`);try{p=new URL(o)}catch{throw new Error(`"${o}" is not a valid URL.`)}const u=p.origin;if("object"==typeof n&&Object.keys(n).forEach((e=>{p.searchParams.set(e,String(n[e]))})),"string"==typeof a)p.searchParams.set("config",a);else if("object"==typeof a&&Object.keys(a).length>0)try{const e=btoa(JSON.stringify(a));p.searchParams.set("config","data:application/json;base64,"+e)}catch{throw new Error("Invalid configuration object.")}i&&p.searchParams.set("template",i),r&&p.searchParams.set("x",r),p.searchParams.set(l?"lite":"embed","true"),p.searchParams.set("loading",s),p.searchParams.set("view",c);let m=!1,f=!1;const h="Cannot call API methods after calling `destroy()`.",y=await new Promise((e=>{if(!d)return;const t=d.dataset.height||d.style.height;if(t){const e=isNaN(Number(t))?t:t+"px";d.style.height=e}"false"!==d.dataset.defaultStyles&&(d.style.backgroundColor||="#fff",d.style.border||="1px solid black",d.style.borderRadius||="5px",d.style.boxSizing||="border-box",d.style.padding||="0",d.style.width||="100%",d.style.height||=d.style.height||"300px",d.style.minHeight="200px",d.style.overflow||="hidden",d.style.resize||="vertical");const o=document.createElement("iframe");o.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),o.setAttribute("allowtransparency","true"),o.setAttribute("allowpaymentrequest","true"),o.setAttribute("allowfullscreen","true"),o.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const n="eager"===s?"eager":"lazy";o.setAttribute("loading",n),o.classList.add("livecodes"),o.style.height="100%",o.style.minHeight="200px",o.style.width="100%",o.style.margin="0",o.style.border="0",o.style.borderRadius=d.style.borderRadius,o.src=p.href,o.onload=()=>{addEventListener("message",(function e(t){t.source===o.contentWindow&&t.origin===u&&"livecodes-ready"===t.data?.type&&(removeEventListener("message",e),m=!0)})),e(o)},d.innerHTML="",d.appendChild(o)})),g=function(e){return void 0===e&&(e=100),new Promise((t=>{setTimeout(t,e)}))},v=()=>f?Promise.reject(h):new Promise((async e=>{for(y.contentWindow?.postMessage({type:"livecodes-load"},u);!m;)await g();e()})),b=(e,t)=>new Promise((async(o,n)=>{if(f)return n(h);m||await v(),addEventListener("message",(function t(a){if(a.source===y.contentWindow&&a.origin===u&&"livecodes-api-response"===a.data?.type&&a.data.method===e){removeEventListener("message",t);const e=a.data.payload;e?.error?n(e.error):o(e)}})),y.contentWindow?.postMessage({method:e,args:t},u)}));let w=[];addEventListener("message",(async e=>{if(e.source!==y.contentWindow||e.origin!==u||"livecodes-change"!==e.data?.type)return;const t=await b("getCode"),o=await b("getConfig");w.forEach((e=>{e({code:t,config:o})}))}));const k=()=>{w.length=0,d&&(d.innerHTML=""),f=!0};if("lazy"===s&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await v(),t.unobserve(d))}))}),{rootMargin:"150px"}).observe(d)}return{load:()=>v(),run:()=>b("run"),format:e=>b("format",[e]),getShareUrl:e=>b("getShareUrl",[e]),getConfig:e=>b("getConfig",[e]),setConfig:e=>b("setConfig",[e]),getCode:()=>b("getCode"),show:(e,t)=>b("show",[e,t]),runTests:()=>b("runTests"),onChange:e=>(e=>{if(f)throw new Error(h);return w.push(e),{remove:()=>{w=w.filter((t=>t!==e))}}})(e),exec:function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];return b("exec",[e,...o])},destroy:()=>m?b("destroy").then(k):f?Promise.reject(h):(k(),Promise.resolve())}};function l(e){const{className:t,style:o,height:n,sdkReady:l,...s}=e,i=(0,a.useRef)(null);let c;return(0,a.useEffect)((()=>{if(i.current)return r(i.current,s).then((e=>{c=e,"function"==typeof l&&l(e)})),()=>{c?.destroy()}}),[]),a.createElement("div",{ref:i,className:t,style:o,"data-height":n})}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const o=e.dataset.options;if(o)try{t=JSON.parse(o)}catch{}let n;const a=e.dataset.config||e.dataset.prefill;if(a)try{n=JSON.parse(a)}catch{}r(e,{import:"dom/"+encodeURIComponent(e.outerHTML),...t,...n?{config:n}:{}})}))}));var s=o(1446),i=o(1262),c=o(452),d=o(5488),p=o(5162),u=o(2134),m=o(420);function f(e){const t="3.7rem",[o,n]=(0,a.useState)(!0),[r,l]=(0,a.useState)(t),s=(0,a.useRef)(null),f=()=>{setTimeout((()=>{l(`calc(${s.current.offsetHeight}px + ${t})`)}),5),setTimeout((()=>{l(`calc(${s.current.offsetHeight}px + ${t})`)}),255)},h=()=>{n(!o),f()};return a.createElement(i.Z,null,(()=>{const n=function(e,t){return void 0===t&&(t="js"),window.prettier.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})};return a.createElement("details",{className:`alert alert--info ${u.Z.details} ${m.Z.details}`,"data-collapsed":o,style:{height:o?t:r,overflow:"hidden",willChange:"height",transition:`height ${o?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},a.createElement("summary",{onClick:h},"show code"),a.createElement("div",{ref:s,style:{display:"block",overflow:"hidden"}},a.createElement("div",{className:u.Z.collapsibleContent},a.createElement(d.Z,{groupId:"sdk-code"},a.createElement(p.Z,{value:"js",label:"JS",attributes:{onMouseDown:f}},a.createElement(c.Z,{language:"js"},n(e.js,"js"))),a.createElement(p.Z,{value:"ts",label:"TS",attributes:{onMouseDown:f}},a.createElement(c.Z,{language:"ts"},n(e.ts,"ts"))),a.createElement(p.Z,{value:"react",label:"React",attributes:{onMouseDown:f}},a.createElement(c.Z,{language:"jsx"},n(e.react,"jsx"))),a.createElement(p.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:f}},a.createElement(c.Z,{language:"html"},n(e.vue,"html")))))))}))}const h="container_Egsj";function y(e){const{className:t,style:o,showCode:r,...i}=e,c=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${JSON.stringify(i,null,2)};\ncreatePlayground('#container', options);\n\n`.trimStart(),d=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${JSON.stringify(i,null,2)};\ncreatePlayground('#container', options);\n\n`.trimStart(),p=`\nimport LiveCodes from 'livecodes/react';\nexport default function App() {\n  const options = ${JSON.stringify(i,null,2)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),u=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\nconst options = ${JSON.stringify(i,null,2)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`;return a.createElement(a.Fragment,null,a.createElement(l,(0,n.Z)({className:`${h} ${e.className}`,style:{height:"50vh",...e.style},appUrl:s.G},e)),!1!==e.showCode&&a.createElement(f,{js:c,ts:d,react:p,vue:u}))}},1446:(e,t,o)=>{o.d(t,{G:()=>n});const n=globalThis.location?.hostname.startsWith("127.0.0.1")||globalThis.location?.hostname.startsWith("localhost")?"http://127.0.0.1:8080/":globalThis.location?.origin||"https://livecodes.io/"},9422:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=o(7462),a=(o(7294),o(3905)),r=o(7778);const l={},s="Display Modes",i={unversionedId:"features/display-modes",id:"features/display-modes",title:"Display Modes",description:"The configuration option mode can be used to select different display modes.",source:"@site/docs/features/display-modes.md",sourceDirName:"features",slug:"/features/display-modes",permalink:"/docs/features/display-modes",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/features/display-modes.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"GitHub Integration",permalink:"/docs/features/github-integration"},next:{title:"Default View",permalink:"/docs/features/default-view"}},c={},d=[{value:"<code>full</code>",id:"full",level:2},{value:"<code>editor</code>",id:"editor",level:2},{value:"<code>codeblock</code>",id:"codeblock",level:2},{value:"<code>result</code>",id:"result",level:2},{value:"Display Mode vs Default View",id:"display-mode-vs-default-view",level:2}],p={toc:d};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"display-modes"},"Display Modes"),(0,a.kt)("p",null,"The configuration option ",(0,a.kt)("inlineCode",{parentName:"p"},"mode")," can be used to select different display modes.\nThe following display modes are supported:"),(0,a.kt)("h2",{id:"full"},(0,a.kt)("inlineCode",{parentName:"h2"},"full")),(0,a.kt)("p",null,"This is the default mode with toolbars, editor and result panes."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("a",{parentName:"p",href:"https://livecodes.io/?template=react"},"https://livecodes.io/?template=react")),(0,a.kt)("p",null,"Demo:"),(0,a.kt)(r.Z,{template:"react",mdxType:"LiveCodes"}),(0,a.kt)("h2",{id:"editor"},(0,a.kt)("inlineCode",{parentName:"h2"},"editor")),(0,a.kt)("p",null,"Hides the results pane and works as editor only."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("a",{parentName:"p",href:"https://livecodes.io/?mode=editor&template=react"},"https://livecodes.io/?mode=editor&template=react")),(0,a.kt)("p",null,"Demo:"),(0,a.kt)(r.Z,{config:{mode:"editor"},template:"react",mdxType:"LiveCodes"}),(0,a.kt)("h2",{id:"codeblock"},(0,a.kt)("inlineCode",{parentName:"h2"},"codeblock")),(0,a.kt)("p",null,"A read-only mode showing only the code block without editor interface. On mouse-over a copy button appears that allows to copy the code. This is specially useful when embedded."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("a",{parentName:"p",href:"https://livecodes.io/?mode=codeblock&template=react"},"https://livecodes.io/?mode=codeblock&template=react")),(0,a.kt)("p",null,"Demo:"),(0,a.kt)(r.Z,{config:{mode:"codeblock"},template:"react",mdxType:"LiveCodes"}),(0,a.kt)("p",null,"By default, in ",(0,a.kt)("inlineCode",{parentName:"p"},"codeblock")," mode, the light-weight ",(0,a.kt)("inlineCode",{parentName:"p"},"CodeJar")," editor is used (in read-only mode). You can override this by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"editor")," option. Refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/features/editor-settings#code-editor"},"Editor Settings")," for details."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("a",{parentName:"p",href:"https://livecodes.io/?mode=codeblock&editor=monaco&template=react"},"https://livecodes.io/?mode=codeblock&editor=monaco&template=react")),(0,a.kt)("p",null,"Demo:"),(0,a.kt)(r.Z,{config:{mode:"codeblock",editor:"monaco"},template:"react",mdxType:"LiveCodes"}),(0,a.kt)("h2",{id:"result"},(0,a.kt)("inlineCode",{parentName:"h2"},"result")),(0,a.kt)("p",null,"Shows the result page only, with a small overlay (appears on hover) that allows opening the project in the full playground."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("a",{parentName:"p",href:"https://livecodes.io/?mode=result&template=react"},"https://livecodes.io/?mode=result&template=react")),(0,a.kt)("p",null,"Demo:"),(0,a.kt)(r.Z,{config:{mode:"result"},template:"react",mdxType:"LiveCodes"}),(0,a.kt)("p",null,"The tools pane (e.g. console/compiled code viewer) is hidden by default in ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," mode. It can be shown if set to ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"full"),". Refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/features/tools-pane"},"Tools pane")," documentation for details."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("a",{parentName:"p",href:"https://livecodes.io/?mode=result&tools=console%7Cfull"},"https://livecodes.io/?mode=result&tools=console|full")),(0,a.kt)("p",null,"Demo:"),(0,a.kt)(r.Z,{params:{mode:"result",tools:"console|full"},mdxType:"LiveCodes"}),(0,a.kt)("h2",{id:"display-mode-vs-default-view"},"Display Mode vs Default View"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'"Display Mode" is different from "',(0,a.kt)("a",{parentName:"p",href:"/docs/features/default-view"},"Default View"),'".'),(0,a.kt)("p",{parentName:"admonition"},"In ",(0,a.kt)("inlineCode",{parentName:"p"},"editor")," display mode, only the editor is loaded and the result page is not available. While ",(0,a.kt)("inlineCode",{parentName:"p"},"editor")," default view shows the editor by default, and the result page can be shown by dragging the split gutter."),(0,a.kt)("p",{parentName:"admonition"},"The same applies for ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," display mode and default view.")))}u.isMDXComponent=!0},420:(e,t,o)=>{o.d(t,{Z:()=>n});const n={details:"details_sGeq"}},2134:(e,t,o)=>{o.d(t,{Z:()=>n});const n={details:"details_iMJ2",isBrowser:"isBrowser_HA_8",collapsibleContent:"collapsibleContent_AEyV"}}}]);