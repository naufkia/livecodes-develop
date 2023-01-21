"use strict";(()=>{var n=(e,t=!0)=>e.replace(/\\/g,t?"\\\\":"\\").replace(/`/g,"\\`").replace(/<\/script>/g,"<\\/script>");var r=(e,t)=>({...t.customSettings[e]});var i="https://cdn.jsdelivr.net/npm/twig@1.15.4/twig.min.js";self.createTwigCompiler=()=>async(e,{config:t})=>{let s=r("twig",t),o=t.customSettings.template?.data||{};return t.customSettings.template?.prerender!==!1?self.Twig.twig({...s,data:e}).render(o):`<!-- ... compiling ... -->

<script src="${i}"><\/script>
<script>
window.addEventListener("load", () => {
const template = Twig.twig({
...${n(JSON.stringify(s))},
data:\`${n(e)}\`
});
const content = template.render({
...${n(JSON.stringify(o||{}))},
...window.livecodes?.templateData,
});
document.body.innerHTML += content
parent.postMessage({type: 'compiled', payload: {language: 'twig', content}}, '*');
});
<\/script>
`};})();
//# sourceMappingURL=lang-twig-compiler.js.map
