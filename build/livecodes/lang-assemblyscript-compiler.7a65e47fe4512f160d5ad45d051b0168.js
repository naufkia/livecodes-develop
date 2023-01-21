"use strict";(()=>{var r=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});var i="https://cdn.jsdelivr.net/npm/assemblyscript@0.19.22/dist/sdk.js";var c="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js";var p=(t,e)=>({...e.customSettings[t]});var a=`;; WebAssembly Text Format (module.wat)

`,d=`

;; WebAssembly Binary (module.wasm)
;; `;importScripts(c);self.assemblyscriptSDK===void 0&&(self.assemblyscriptSDK=new Promise(async t=>{requirejs.config({waitSeconds:0}),r([i],e=>{t(e)})}));var m=async(t,e)=>{let n=(await self.assemblyscriptSDK).asc;await n.ready;try{let{text:s,binary:o}=await n.compileString(t,e);if(!o)return"";let l=o.toString();return a+s+d+"Uint8Array ["+l+"]"}catch(s){return console.error(s),""}};self.createAssemblyscriptCompiler=()=>(t,{config:e})=>m(t,{optimizeLevel:3,...p("assemblyscript",e)});})();
//# sourceMappingURL=lang-assemblyscript-compiler.js.map
