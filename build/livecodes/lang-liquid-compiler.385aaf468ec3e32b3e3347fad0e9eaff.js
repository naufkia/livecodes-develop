"use strict";(()=>{var n=(e,t=!0)=>e.replace(/\\/g,t?"\\\\":"\\").replace(/`/g,"\\`").replace(/<\/script>/g,"<\\/script>");var s="https://cdn.jsdelivr.net/npm/liquidjs@9.34.0/dist/liquid.browser.min.js";self.createLiquidCompiler=()=>async(e,{config:t})=>t.customSettings.template?.prerender!==!1?await new self.liquidjs.Liquid().parseAndRender(n(e),t.customSettings.template?.data||{}):`<!-- ... compiling ... -->

<script src="${s}"><\/script>
<script>
window.addEventListener("load", () => {
new liquidjs.Liquid()
.parseAndRender(\`${n(e)}\`, {
...${n(JSON.stringify(t.customSettings.template?.data||{}))},
...window.livecodes?.templateData,
})
.then((content) => {
document.body.innerHTML += content
parent.postMessage({type: 'compiled', payload: {language: 'liquid', content}}, '*');
})
.catch((error) => {
console.log(error)
});
});
<\/script>
`;})();
//# sourceMappingURL=lang-liquid-compiler.js.map
