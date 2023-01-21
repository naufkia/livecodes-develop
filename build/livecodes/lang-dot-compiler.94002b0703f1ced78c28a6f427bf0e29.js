"use strict";(()=>{var n=(e,t=!0)=>e.replace(/\\/g,t?"\\\\":"\\").replace(/`/g,"\\`").replace(/<\/script>/g,"<\\/script>");var i=(e,t)=>({...t.customSettings[e]});var c="https://cdn.jsdelivr.net/npm/dot@1.1.3/doT.min.js";self.createDotCompiler=()=>async(e,{config:t})=>{let o=i("dot",t),s=Object.keys(o).length===0?null:o,r=t.customSettings.template?.data||{};return t.customSettings.template?.prerender!==!1?self.doT.template(e,s)(r):`<!-- ... compiling ... -->

<script src="${c}"><\/script>
<script>
window.addEventListener("load", () => {
const template = doT.template(\`${n(e)}\`, ${s?n(JSON.stringify(s)):"null"});
const content = template({
...${n(JSON.stringify(r||{}))},
...window.livecodes?.templateData,
});
document.body.innerHTML += content
parent.postMessage({type: 'compiled', payload: {language: 'dot', content}}, '*');
});
<\/script>
`};})();
//# sourceMappingURL=lang-dot-compiler.js.map
