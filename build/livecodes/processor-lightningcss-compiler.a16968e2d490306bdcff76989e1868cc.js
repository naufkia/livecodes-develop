"use strict";(()=>{var o=(t,e)=>({...e.customSettings[t]});var r="https://cdn.jsdelivr.net/npm/@live-codes/browser-compilers@0.5.13/dist/";self.createLightningcssCompiler=()=>{let{init:t,transform:e}=self.lightningcss,i=t(new URL(r+"lightningcss/lightningcss_node_bg.wasm"));return async(c,{config:p})=>{let s=o("lightningcss",p);await i;let{code:l,map:a,warnings:d}=e({filename:"style.css",code:new TextEncoder().encode(c),minify:!0,drafts:{nesting:!0,customMedia:!0},errorRecovery:!0,...s});d.forEach(n=>{console.warn(n.message,`
line:`,n.loc.line,"column:",n.loc.column)});let m=s.sourceMap?`
/*# sourceMappingURL=${new TextDecoder().decode(a)}`:"";return new TextDecoder().decode(l)+m}};})();
//# sourceMappingURL=processor-lightningcss-compiler.js.map
