"use strict";(()=>{var n=(e,t=!0)=>e.replace(/\\/g,t?"\\\\":"\\").replace(/`/g,"\\`").replace(/<\/script>/g,"<\\/script>");var r=(e,t)=>({...t.customSettings[e]});var i="https://cdn.jsdelivr.net/npm/mustache@4.2.0/mustache.min.js";self.createMustacheCompiler=()=>async(e,{config:t})=>{let s=r("mustache",t),o=t.customSettings.template?.data||{};return t.customSettings.template?.prerender!==!1?self.Mustache.render(e,o,void 0,s):`<!-- ... compiling ... -->

<script src="${i}"><\/script>
<script>
window.addEventListener("load", () => {
const content = Mustache.render(\`${n(e)}\`, {
...${n(JSON.stringify(o||{}))},
...window.livecodes?.templateData,
},
undefined,
${n(JSON.stringify(s||{}))}
);
document.body.innerHTML += content
parent.postMessage({type: 'compiled', payload: {language: 'mustache', content}}, '*');
});
<\/script>
`};})();
//# sourceMappingURL=lang-mustache-compiler.js.map
