"use strict";(()=>{var o=(e,t)=>({...t.customSettings[e]});var r="https://cdn.jsdelivr.net/npm/@live-codes/browser-compilers@0.5.13/dist/";self.createHamlCompiler=()=>async(e,{config:t})=>{let n={tolerateFaults:!0,...o("haml",t),source:e},s=t.customSettings.template?.data||{};if(t.customSettings.template?.prerender!==!1)return window.haml.compileHaml(n)(s);let i=window.haml.compileHaml({...n,outputFormat:"string"});return`<!-- ... compiling ... -->

<script src="${r}clientside-haml-js/haml.js"><\/script>
<script>
window.addEventListener("load", () => {
const clientFn = ${i};
const content = clientFn({
...${JSON.stringify(s)},
...window.livecodes?.templateData,
});
document.body.innerHTML += content;
parent.postMessage({type: 'compiled', payload: {language: 'haml', content}}, '*');
});
<\/script>
`};})();
//# sourceMappingURL=lang-haml-compiler.js.map
