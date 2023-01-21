"use strict";(()=>{var n="https://cdn.jsdelivr.net/npm/@live-codes/clio-browser-compiler@0.0.3/public/build/";var s=(e,t=!0)=>e.replace(/\\/g,t?"\\\\":"\\").replace(/`/g,"\\`").replace(/<\/script>/g,"<\\/script>");self.createClioCompiler=()=>async e=>{if(!e)return"";try{let t=await self.clioCompiler.compile(e);if(t.code)return`(async() => {
const code = \`${s(t.code.replace("# sourceMappingURL=main.clio.js.map",""))}\`;
clio.exec(code, '${n+"worker.js"}');
})();`;console.error(t.error||"Compile error.")}catch(t){console.error(t.message||t)}return""};})();
//# sourceMappingURL=lang-clio-compiler.js.map
