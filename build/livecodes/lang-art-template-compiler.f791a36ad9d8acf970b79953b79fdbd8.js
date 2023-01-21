"use strict";(()=>{var n=(t,e=!0)=>t.replace(/\\/g,e?"\\\\":"\\").replace(/`/g,"\\`").replace(/<\/script>/g,"<\\/script>");var r=(t,e)=>({...e.customSettings[t]});var i="https://cdn.jsdelivr.net/npm/art-template@4.13.2/lib/template-web.js";self.createArtTemplateCompiler=()=>async(t,{config:e})=>{if(!t)return"";let s=r("art-template",e),o=e.customSettings.template?.data||{};return e.customSettings.template?.prerender!==!1?self.template.compile(t,s)(o):`<!-- ... compiling ... -->

<script src="${i}"><\/script>
<script>
window.addEventListener("load", () => {
const content = template.render(\`${n(t)}\`, {
    ...${n(JSON.stringify(o||{}))},
    ...window.livecodes?.templateData,
  },
  ${n(JSON.stringify(s))});
document.body.innerHTML += content
parent.postMessage({type: 'compiled', payload: {language: 'art-template', content}}, '*');
});
<\/script>
`};})();
//# sourceMappingURL=lang-art-template-compiler.js.map
