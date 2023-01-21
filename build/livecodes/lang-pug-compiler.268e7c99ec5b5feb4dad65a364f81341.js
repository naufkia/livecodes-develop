"use strict";(()=>{var o=(t,e=!0)=>t.replace(/\\/g,e?"\\\\":"\\").replace(/`/g,"\\`").replace(/<\/script>/g,"<\\/script>");var i=(t,e)=>({...e.customSettings[t]});self.createPugCompiler=()=>async(t,{config:e})=>{let n=i("pug",e),r=e.customSettings.template?.data||{},s=window.pug.compile(t,n);return e.customSettings.template?.prerender!==!1?s(r):`<!-- ... compiling ... -->

<script>
window.addEventListener("load", () => {
${window.pug.compileClient(t,{...n,name:"clientFn"})}
const content = clientFn({
...${o(JSON.stringify(r))},
...window.livecodes?.templateData,
});
document.body.innerHTML += content;
parent.postMessage({type: 'compiled', payload: {language: 'pug', content}}, '*');
});
<\/script>
`};})();
//# sourceMappingURL=lang-pug-compiler.js.map
