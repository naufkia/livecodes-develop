"use strict";(()=>{var n=(e,t=!0)=>e.replace(/\\/g,t?"\\\\":"\\").replace(/`/g,"\\`").replace(/<\/script>/g,"<\\/script>");var r=(e,t)=>({...t.customSettings[e]});var i="https://cdn.jsdelivr.net/npm/ejs@3.1.6/ejs.min.js";self.createEjsCompiler=()=>async(e,{config:t})=>{let s=r("ejs",t),o=t.customSettings.template?.data||{};return t.customSettings.template?.prerender!==!1?self.ejs.compile(e,s)(o):`<!-- ... compiling ... -->

<script src="${i}"><\/script>
<script>
window.addEventListener("load", () => {
const template = ejs.compile(\`${n(e)}\`, ${n(JSON.stringify(s))});
const content = template({
  ...${n(JSON.stringify(o||{}))},
  ...window.livecodes?.templateData,
});
document.body.innerHTML += content
parent.postMessage({type: 'compiled', payload: {language: 'ejs', content}}, '*');
});
<\/script>
`};})();
//# sourceMappingURL=lang-ejs-compiler.js.map
