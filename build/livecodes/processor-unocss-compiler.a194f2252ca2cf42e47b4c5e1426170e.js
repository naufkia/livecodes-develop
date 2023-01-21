"use strict";(()=>{var m=(e,n)=>({...n.customSettings[e]});self.createUnocssCompiler=()=>{let e=self.unocss,{createGenerator:n,defineConfig:d}=e;return async(o,{config:s,options:u})=>{let g=`<template>${u.html}
<script>${s.script.content}<\/script></template>`,f=m("unocss",s),i=(r={})=>Object.keys(r).filter(t=>r[t]&&t in e).map(t=>{let l=r[t];return typeof l=="object"?e[t](l):e[t]()}),y=d({presets:i({presetUno:!0,presetAttributify:!0,presetIcons:{cdn:"https://esm.sh/"}})}),{presets:a,...c}=f;a&&(c.presets=i(a));let b=n(c,y),{css:p}=await b.generate(g);return p.trim()?p+`

`+o:o}};})();
//# sourceMappingURL=processor-unocss-compiler.js.map
