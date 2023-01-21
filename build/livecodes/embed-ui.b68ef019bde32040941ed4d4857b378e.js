var g={title:"Untitled Project",description:"",tags:[],autoupdate:!0,autosave:!1,delay:1500,formatOnsave:!1,mode:"full",theme:"dark",recoverUnsaved:!0,showSpacing:!1,readonly:!1,allowLangChange:!0,activeEditor:void 0,languages:void 0,markup:{language:"html",content:""},style:{language:"css",content:""},script:{language:"javascript",content:""},stylesheets:[],scripts:[],cssPreset:"",imports:{},types:{},tests:{language:"typescript",content:""},tools:{enabled:"all",active:"",status:""},zoom:1,processors:[],customSettings:{},editor:void 0,fontFamily:void 0,fontSize:void 0,useTabs:!1,tabSize:2,lineNumbers:!0,wordWrap:!1,closeBrackets:!0,semicolons:!0,singleQuote:!1,trailingComma:!0,emmet:!0,editorMode:void 0,version:"0.6.0"};var F=`<div id="embed-container" class="modal-container">
  <div class="modal-title">Embed Project</div>
  <div id="embed-screen-container" class="modal-screen-container">
    <div class="modal-screen">
      <label>Preview</label>
      <div id="embed-preview-container">Loading Preview...</div>
      <form id="embed-form"></form>
      <label for="embed-code">Code</label>
      <div id="embed-code" class="custom-editor"></div>
      <button id="embed-copy-btn" class="wide-button">Copy Code</button>
      <div class="description">
        Please check the
        <a href="/docs/configuration/" target="_blank" rel="noopener">documentations</a>
        for advanced configurations.
      </div>
    </div>
  </div>
</div>
`;var S=a=>a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&#34;");var w=(a,i=!0)=>a.replace(/\\/g,i?"\\\\":"\\").replace(/`/g,"\\`").replace(/<\/script>/g,"<\\/script>");var N=a=>JSON.parse(JSON.stringify(a));var q=a=>{if(document.queryCommandSupported&&document.queryCommandSupported("copy")){let i=document.createElement("textarea");i.textContent=a,i.style.position="fixed",document.body.appendChild(i),i.select();try{return document.execCommand("copy")}catch(c){return console.warn("Copy to clipboard failed.",c),!1}finally{document.body.removeChild(i)}}return!1};var k=(a,i,c=!0)=>(c?"":" ".repeat(i))+a.split(`
`).join(`
`+" ".repeat(i));var oe=async({baseUrl:a,config:i,editorLanguages:c,modal:z,notifications:U,eventsManager:I,createEditorFn:_,getUrlFn:J})=>{let x=i.title,d=i.activeEditor||"markup",P=document.createElement("div");P.innerHTML=F;let v=P.firstChild;z.show(v,{isAsync:!0});let C=v.querySelector("#embed-preview-container"),b=v.querySelector("#embed-form"),$=v.querySelector("#embed-code"),H=v.querySelector("#embed-copy-btn");if(!C||!b||!$||!H)return;[{title:"Theme",name:"theme",options:[{label:"Dark",value:"dark",checked:!0},{label:"Light",value:"light"}]},{title:"Loading",name:"loading",options:[{label:"Lazy",value:"lazy",checked:!0},{label:"On-click",value:"click"},{label:"Eager",value:"eager"}]},{title:"Show Result Preview",name:"preview",options:[{value:"true"}]},{title:"Lite Mode",name:"lite",options:[{value:"true",checked:!1}],help:"/docs/features/lite"},{title:"Read only",name:"readonly",options:[{value:"true",checked:!1}]},{title:"Display Mode",name:"mode",options:[{label:"Full",value:"full",checked:!0},{label:"Editor",value:"editor"},{label:"Code Block",value:"codeblock"},{label:"Result",value:"result"}],help:"/docs/features/display-modes"},{title:"Default View",name:"view",options:[{label:"Editor + Result",value:"split",checked:!0},{label:"Editor",value:"editor"},{label:"Result",value:"result"}],help:"/docs/features/default-view"},{title:"Active Editor",name:"activeEditor",options:[{label:c.markup,value:"markup",checked:d==="markup"},{label:c.style,value:"style",checked:d==="style"},{label:c.script,value:"script",checked:d==="script"}]},{title:"Tools",name:"tools",options:[{label:"Closed",value:"closed",checked:!0},{label:"Open",value:"open"},{label:"Full",value:"full"},{label:"None",value:"none"}],help:"/docs/features/tools-pane"},{title:"Embed Type",name:"type",options:[{label:"Script (CDN)",value:"cdn",checked:!0},{label:"Script (npm)",value:"npm"},{label:"React",value:"react"},{label:"Vue",value:"vue"},{label:"Iframe",value:"iframe"},{label:"HTML",value:"html"}]}].forEach(e=>{let t=document.createElement("label");if(t.innerHTML=e.title,b.appendChild(t),e.help){let r=document.createElement("a");r.href=e.help,r.target="_blank",r.classList.add("help-link"),r.title="Click for info...",t.appendChild(r);let l=document.createElement("img");l.src=a+"assets/icons/info.svg",r.appendChild(l)}let n=document.createElement("div");n.classList.add("input-container"),b.appendChild(n),e.options.forEach(r=>{let l=`embed-${e.name}`,s=`${l}-${r.value}`,y=!r.label&&r.value==="true",u=document.createElement("span");n.appendChild(u);let o=document.createElement("input");if(o.type=y?"checkbox":"radio",o.name=l,o.id=s,o.value=r.value,o.checked=r.checked||!1,u.appendChild(o),y)o.classList.add("switch");else{let f=document.createElement("label");f.classList.add("radio-label"),f.htmlFor=s,f.innerHTML=r.label||"",u.appendChild(f)}})});let E=await _($),L=await J(),T=new URL(L),m=T.origin+T.pathname,M=document.createElement("iframe");M.id="embed-preview-iframe",C.innerHTML="",C.appendChild(M);let O=()=>"livecodes-"+(Math.random()+1).toString(36).substring(2),A=e=>`
<div id="${e}">
  <span>Open the project <a href="${L}" target="_blank">${x}</a> in <a href="${m}" target="_blank">LiveCodes</a></span>
</div>
`.trimStart(),h=e=>{let t={...e.mode!==g.mode?{mode:e.mode}:{},...e.theme!==g.theme?{theme:e.theme}:{},...e.tools!=="closed"?{tools:{status:e.tools}}:{},...e.readonly?{readonly:e.readonly}:{},...e.mode!=="result"&&e.activeEditor!==d?{activeEditor:e.activeEditor}:{}},n=T.searchParams.get("x");return{...m!=="https://livecodes.io/"?{appUrl:m}:{},...Object.keys(t).length>0?{config:t}:{},...n?{import:n}:{},...e.lite?{lite:e.lite}:{},...e.loading!=="lazy"?{loading:e.loading}:{},...e.loading==="click"&&!e.preview?{preview:!1}:{},...e.view&&e.view!=="split"?{view:e.view}:{}}},R=e=>{let t=new URL(L);return t.searchParams.set(e.lite?"lite":"embed","true"),e.loading&&e.loading!=="lazy"&&t.searchParams.set("loading",String(e.loading)),e.loading==="click"&&!e.preview&&t.searchParams.set("preview","false"),e.view&&e.view!=="split"&&t.searchParams.set("view",String(e.view)),e.mode!=="result"&&e.activeEditor&&e.activeEditor!==d&&t.searchParams.set("activeEditor",String(e.activeEditor)),e.mode&&e.mode!==g.mode&&t.searchParams.set("mode",String(e.mode)),e.theme&&e.theme!==g.theme&&t.searchParams.set("theme",String(e.theme)),e.tools&&e.tools!=="closed"&&t.searchParams.set("tools",String(e.tools)),e.readonly!==void 0&&t.searchParams.set("readonly",String(e.readonly)),decodeURIComponent(t.href)},B={cdn:e=>{let t=O(),n=A(t),r=h(e),l=JSON.stringify(r,null,2),s=k(l,2);return`
${n}
<script src="${m+"sdk/livecodes.umd.js"}"><\/script>
<script>
  const options = ${s};
  livecodes.createPlayground("#${t}", options);
<\/script>
`.trimStart()},npm(e){let t=O(),n=A(t),r=h(e),l=JSON.stringify(r,null,2),s=k(l,2);return`
${n}
<script type="module">
  import { createPlayground } from "livecodes";
  const options = ${s};
  createPlayground("#${t}", options);
<\/script>
`.trimStart()},react(e){let t=h(e),n=JSON.stringify(t,null,2);return`
import LiveCodes from "livecodes/react";
export default function App() {
  const options = ${k(n,2)};
  return <LiveCodes {...options}></LiveCodes>;
}
`.trimStart()},vue(e){let t=h(e),n=JSON.stringify(t,null,2);return`
<script setup>
  import LiveCodes from 'livecodes/vue';
  const options = ${k(n,2)};
<\/script>

<template>
  <LiveCodes v-bind="options" />
</template>
`.trimStart()},iframe:e=>{let t=R(e),n=new URL(t);n.searchParams.delete("embed"),n.searchParams.delete("lite");let r=decodeURIComponent(n.href);return`
<iframe title="${x}" scrolling="no" loading="lazy" style="height:300px; width: 100%; border:1px solid black; border-radius:5px; margin: 1em 0;" src="${t}">
  See the project <a href="${r}" target="_blank">${x}</a> on <a href="${m}" target="_blank">LiveCodes</a>
</iframe>
`.trimStart()},html:e=>{let{import:t,...n}=h(e),r={...N(i),...n.config};return Object.keys(r).forEach(s=>{(JSON.stringify(r[s])===JSON.stringify(g[s])||s==="activeEditor"&&r.activeEditor==="markup"||["markup","style","script"].includes(s))&&delete r[s]}),Object.keys(r).length>0&&(n.config=r),`
<div class="livecodes" style="height: 300px; border: 1px solid black; border-radius: 5px;" data-options='${w(JSON.stringify(n).replace(/'/g,"&#39;"))}'>
<pre data-lang="${i.markup.language}">${w(S(i.markup.content||""))}</pre>
<pre data-lang="${i.style.language}">${w(S(i.style.content||""))}</pre>
<pre data-lang="${i.script.language}">${w(S(i.script.content||""))}</pre>
</div>
<script defer src="${m+"sdk/livecodes.js"}" data-prefill><\/script>
`.trimStart()}},p={view:"split",tools:"closed"},j=async()=>{let e=Array.from(new FormData(b)).reduce((o,[f,D])=>({...o,[f.replace("embed-","")]:D==="true"?!0:D}),{}),t=document.querySelector('input[name="embed-preview"]');e.loading!=="click"?(t.checked=!1,t.disabled=!0,e.preview=!1):t.disabled=!1;let n=document.querySelectorAll('input[name="embed-view"]');e.mode!=="full"?(p.view=e.view||p.view,delete e.view,n.forEach(o=>{o.checked=!1,o.disabled=!0})):n.forEach(o=>{o.value===(e.view||p.view)&&(o.checked=!0),o.disabled=!1,o.checked&&(e.view=o.value)});let r=document.querySelectorAll('input[name="embed-tools"]');e.lite?(p.tools=e.tools||p.tools,delete e.tools,r.forEach(o=>{o.checked=!1,o.disabled=!0})):r.forEach(o=>{o.value===(e.tools||p.tools)&&(o.checked=!0),o.disabled=!1,o.checked&&(e.tools=o.value)}),document.querySelectorAll('input[name="embed-activeEditor"]').forEach(o=>{e.mode==="result"?(o.checked=o.value===d,o.disabled=!0,delete e.activeEditor):o.disabled=!1}),M.src=R(e);let s=e.type,y=B[s]?.(e),u=s==="react"?"jsx":"html";E.getLanguage()!==u?E.setLanguage(u,y):E.setValue(y)};I.addEventListener(b,"change",j),I.addEventListener(H,"click",async()=>{q(E.getValue())?U.success("Code copied to clipboard"):U.error("Failed to copy to clipboard")}),j()};export{oe as createEmbedUI};
//# sourceMappingURL=embed-ui.js.map
