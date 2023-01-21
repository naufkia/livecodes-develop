var Vt=Object.create;var Y=Object.defineProperty;var Kt=Object.getOwnPropertyDescriptor;var Gt=Object.getOwnPropertyNames;var Zt=Object.getPrototypeOf,Yt=Object.prototype.hasOwnProperty;var Qt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var er=(e,t,s,g)=>{if(t&&typeof t=="object"||typeof t=="function")for(let u of Gt(t))!Yt.call(e,u)&&u!==s&&Y(e,u,{get:()=>t[u],enumerable:!(g=Kt(t,u))||g.enumerable});return e};var tr=(e,t,s)=>(s=e!=null?Vt(Zt(e)):{},er(t||!e||!e.__esModule?Y(s,"default",{value:e,enumerable:!0}):s,e));var Ft=Qt((Bp,q)=>{var qt=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",g={};function u(o,n){if(!g[o]){g[o]={};for(var p=0;p<o.length;p++)g[o][o.charAt(p)]=p}return g[o][n]}var h={compressToBase64:function(o){if(o==null)return"";var n=h._compress(o,6,function(p){return t.charAt(p)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:h._decompress(o.length,32,function(n){return u(t,o.charAt(n))})},compressToUTF16:function(o){return o==null?"":h._compress(o,15,function(n){return e(n+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:h._decompress(o.length,16384,function(n){return o.charCodeAt(n)-32})},compressToUint8Array:function(o){for(var n=h.compress(o),p=new Uint8Array(n.length*2),c=0,l=n.length;c<l;c++){var x=n.charCodeAt(c);p[c*2]=x>>>8,p[c*2+1]=x%256}return p},decompressFromUint8Array:function(o){if(o==null)return h.decompress(o);for(var n=new Array(o.length/2),p=0,c=n.length;p<c;p++)n[p]=o[p*2]*256+o[p*2+1];var l=[];return n.forEach(function(x){l.push(e(x))}),h.decompress(l.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":h._compress(o,6,function(n){return s.charAt(n)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),h._decompress(o.length,32,function(n){return u(s,o.charAt(n))}))},compress:function(o){return h._compress(o,16,function(n){return e(n)})},_compress:function(o,n,p){if(o==null)return"";var c,l,x={},S={},v="",k="",w="",j=2,T=3,y=2,b=[],a=0,i=0,L;for(L=0;L<o.length;L+=1)if(v=o.charAt(L),Object.prototype.hasOwnProperty.call(x,v)||(x[v]=T++,S[v]=!0),k=w+v,Object.prototype.hasOwnProperty.call(x,k))w=k;else{if(Object.prototype.hasOwnProperty.call(S,w)){if(w.charCodeAt(0)<256){for(c=0;c<y;c++)a=a<<1,i==n-1?(i=0,b.push(p(a)),a=0):i++;for(l=w.charCodeAt(0),c=0;c<8;c++)a=a<<1|l&1,i==n-1?(i=0,b.push(p(a)),a=0):i++,l=l>>1}else{for(l=1,c=0;c<y;c++)a=a<<1|l,i==n-1?(i=0,b.push(p(a)),a=0):i++,l=0;for(l=w.charCodeAt(0),c=0;c<16;c++)a=a<<1|l&1,i==n-1?(i=0,b.push(p(a)),a=0):i++,l=l>>1}j--,j==0&&(j=Math.pow(2,y),y++),delete S[w]}else for(l=x[w],c=0;c<y;c++)a=a<<1|l&1,i==n-1?(i=0,b.push(p(a)),a=0):i++,l=l>>1;j--,j==0&&(j=Math.pow(2,y),y++),x[k]=T++,w=String(v)}if(w!==""){if(Object.prototype.hasOwnProperty.call(S,w)){if(w.charCodeAt(0)<256){for(c=0;c<y;c++)a=a<<1,i==n-1?(i=0,b.push(p(a)),a=0):i++;for(l=w.charCodeAt(0),c=0;c<8;c++)a=a<<1|l&1,i==n-1?(i=0,b.push(p(a)),a=0):i++,l=l>>1}else{for(l=1,c=0;c<y;c++)a=a<<1|l,i==n-1?(i=0,b.push(p(a)),a=0):i++,l=0;for(l=w.charCodeAt(0),c=0;c<16;c++)a=a<<1|l&1,i==n-1?(i=0,b.push(p(a)),a=0):i++,l=l>>1}j--,j==0&&(j=Math.pow(2,y),y++),delete S[w]}else for(l=x[w],c=0;c<y;c++)a=a<<1|l&1,i==n-1?(i=0,b.push(p(a)),a=0):i++,l=l>>1;j--,j==0&&(j=Math.pow(2,y),y++)}for(l=2,c=0;c<y;c++)a=a<<1|l&1,i==n-1?(i=0,b.push(p(a)),a=0):i++,l=l>>1;for(;;)if(a=a<<1,i==n-1){b.push(p(a));break}else i++;return b.join("")},decompress:function(o){return o==null?"":o==""?null:h._decompress(o.length,32768,function(n){return o.charCodeAt(n)})},_decompress:function(o,n,p){var c=[],l,x=4,S=4,v=3,k="",w=[],j,T,y,b,a,i,L,d={val:p(0),position:n,index:1};for(j=0;j<3;j+=1)c[j]=j;for(y=0,a=Math.pow(2,2),i=1;i!=a;)b=d.val&d.position,d.position>>=1,d.position==0&&(d.position=n,d.val=p(d.index++)),y|=(b>0?1:0)*i,i<<=1;switch(l=y){case 0:for(y=0,a=Math.pow(2,8),i=1;i!=a;)b=d.val&d.position,d.position>>=1,d.position==0&&(d.position=n,d.val=p(d.index++)),y|=(b>0?1:0)*i,i<<=1;L=e(y);break;case 1:for(y=0,a=Math.pow(2,16),i=1;i!=a;)b=d.val&d.position,d.position>>=1,d.position==0&&(d.position=n,d.val=p(d.index++)),y|=(b>0?1:0)*i,i<<=1;L=e(y);break;case 2:return""}for(c[3]=L,T=L,w.push(L);;){if(d.index>o)return"";for(y=0,a=Math.pow(2,v),i=1;i!=a;)b=d.val&d.position,d.position>>=1,d.position==0&&(d.position=n,d.val=p(d.index++)),y|=(b>0?1:0)*i,i<<=1;switch(L=y){case 0:for(y=0,a=Math.pow(2,8),i=1;i!=a;)b=d.val&d.position,d.position>>=1,d.position==0&&(d.position=n,d.val=p(d.index++)),y|=(b>0?1:0)*i,i<<=1;c[S++]=e(y),L=S-1,x--;break;case 1:for(y=0,a=Math.pow(2,16),i=1;i!=a;)b=d.val&d.position,d.position>>=1,d.position==0&&(d.position=n,d.val=p(d.index++)),y|=(b>0?1:0)*i,i<<=1;c[S++]=e(y),L=S-1,x--;break;case 2:return w.join("")}if(x==0&&(x=Math.pow(2,v),v++),c[L])k=c[L];else if(L===S)k=T+T.charAt(0);else return null;w.push(k),c[S++]=T+k.charAt(0),x--,T=k,x==0&&(x=Math.pow(2,v),v++)}}};return h}();typeof define=="function"&&define.amd?define(function(){return qt}):typeof q<"u"&&q!=null&&(q.exports=qt)});var m="https://cdn.jsdelivr.net/npm/@live-codes/browser-compilers@0.5.13/dist/";var Q="https://cdn.jsdelivr.net/npm/art-template@4.13.2/lib/template-web.js",ee="https://cdn.jsdelivr.net/npm/@asciidoctor/core@2.2.5/dist/browser/asciidoctor.min.js";var te="https://cdn.jsdelivr.net/npm/@assemblyscript/loader@0.19.22/umd/index.js";var re="https://cdn.jsdelivr.net/npm/@hatemhosny/astro-internal@0.0.4/";var oe="https://cdn.jsdelivr.net/npm/@babel/standalone@7.17.2/babel.min.js",se="https://cdn.jsdelivr.net/npm/biwascheme@0.7.4/release/biwascheme-min.js",ne="https://cdn.jsdelivr.net/npm/blockly@7.20211209.2/",$="https://cdn.jsdelivr.net/npm/brython@3.10.4/";var H="https://cdn.jsdelivr.net/npm/@live-codes/clio-browser-compiler@0.0.3/public/build/",ae="https://cdn.jsdelivr.net/npm/coffeescript@2.6.1/lib/coffeescript-browser-compiler-legacy/coffeescript.js";var ie="https://cdn.jsdelivr.net/npm/dot@1.1.3/doT.min.js",ce="https://cdn.jsdelivr.net/npm/ejs@3.1.6/ejs.min.js";var le="https://cdn.jsdelivr.net/npm/github-markdown-css@5.1.0/github-markdown.min.css",_="https://cdn.jsdelivr.net/npm/@live-codes/go2js@0.3.0/build";var W="https://cdn.jsdelivr.net/npm/handlebars@4.7.7/dist/";var z="https://cdn.jsdelivr.net/npm/imba@2.0.0-alpha.201/dist/";var pe="https://cdn.jsdelivr.net/npm/jscl@0.8.2/jscl.min.js";var me="https://cdn.jsdelivr.net/npm/liquidjs@9.34.0/dist/liquid.browser.min.js";var de="https://cdn.jsdelivr.net/npm/fengari-web@0.1.4/dist/fengari-web.min.js";var ue="https://cdn.jsdelivr.net/npm/marked@4.0.12/marked.min.js";var fe="https://cdn.jsdelivr.net/npm/mustache@4.2.0/mustache.min.js";var ge="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css",J="https://cdn.jsdelivr.net/npm/nunjucks@3.2.3/browser/",M="https://cdn.opalrb.com/opal/1.4.1/",ye="https://cdn.jsdelivr.net/npm/@chrisoakman/parinfer@3.13.1/parinfer.min.js";var P="https://cdn.jsdelivr.net/npm/prettier@2.5.1/",he="https://cdn.jsdelivr.net/npm/@prettier/plugin-php@0.18.0/standalone.js";var xe="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js";var be="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css",X="https://cdn.jsdelivr.net/npm/riot@6.1.2/";var ve="https://cdn.jsdelivr.net/npm/sql-formatter@4.0.2/dist/sql-formatter.min.js",we="https://cdn.jsdelivr.net/npm/sql.js@1.6.2/dist/",Se="https://cdn.jsdelivr.net/npm/@stencil/core@2.13.0/compiler/stencil.min.js";var U="https://cdn.jsdelivr.net/npm/tau-prolog@0.3.2/modules/",je="https://cdn.jsdelivr.net/npm/twig@1.15.4/twig.min.js",ke="https://cdn.jsdelivr.net/npm/typescript@4.5.5/lib/typescript.min.js",Le="https://cdn.jsdelivr.net/npm/uniter@2.17.0/dist/uniter.js";var B="https://cdn.jsdelivr.net/npm/vue3-sfc-loader@0.8.4/dist/",Ue="https://cdn.jsdelivr.net/npm/wabt@1.0.26/index.js";var R=(e,t=!0)=>e.replace(/\\/g,t?"\\\\":"\\").replace(/`/g,"\\`").replace(/<\/script>/g,"<\\/script>");var f=(e,t)=>({...t.customSettings[e]});var rr={name:"lightningcss",title:"Lightning CSS",isPostcssPlugin:!1,compiler:{url:m+"lightningcss/lightningcss.js",factory:(e,t)=>(self.importScripts(t+"processor-lightningcss-compiler.a16968e2d490306bdcff76989e1868cc.js"),self.createLightningcssCompiler())},editor:"style"};var or={name:"postcss",title:"Processors:",isPostcssPlugin:!1,compiler:{url:m+"postcss/postcss.js",factory:(e,t)=>(self.importScripts(t+"processor-postcss-compiler.a3d6fb1a92bde99fe75aa117517a82b4.js"),self.createPostcssCompiler())},editor:"style",hidden:!0};var sr={name:"autoprefixer",title:"Autoprefixer",isPostcssPlugin:!0,compiler:{url:m+"autoprefixer/autoprefixer.js",factory:e=>self.autoprefixer.autoprefixer({...f("autoprefixer",e)})},editor:"style"},nr={name:"cssnano",title:"cssnano",isPostcssPlugin:!0,compiler:{url:m+"cssnano/cssnano.js",factory:()=>{let e=self.cssnano.cssnanoPresetDefault().plugins,t=[];for(let s of e){let[g,u]=s;(typeof u>"u"||typeof u=="object"&&!u.exclude||typeof u=="boolean"&&u===!0)&&t.push(g(u))}return t}},editor:"style"};var ar={name:"postcssPresetEnv",title:"Preset Env",isPostcssPlugin:!0,compiler:{url:m+"postcss-preset-env/postcss-preset-env.js",factory:e=>self.postcssPresetEnv.postcssPresetEnv({autoprefixer:!1,...f("postcssPresetEnv",e)})},editor:"style"},ir={name:"purgecss",title:"PurgeCSS",isPostcssPlugin:!0,needsHTML:!0,compiler:{url:m+"purgecss/purgecss.js",factory:(e,t,s)=>self.purgecss.purgecss({...f("purgecss",e),content:[{raw:`<template>${s.html}
<script>${e.script.content}<\/script></template>`,extension:"html"}]})},editor:"style"};var cr={name:"tokencss",title:"Token CSS",isPostcssPlugin:!0,compiler:{url:m+"tokencss/tokencss.js",factory:e=>{let t=f("tokencss",e);Object.keys(t).length===0&&(t.$schema="https://tokencss.com/schema@0.0.1",t.extends="@tokencss/core/preset");let s=(u,h)=>{let o=JSON.parse(JSON.stringify(u));return Object.keys(h).forEach(n=>{o[n]=typeof h[n]!="object"||Array.isArray(h[n])?h[n]:{...o[n],...h[n]}}),o},g=t.extends?.includes("@tokencss/core/preset")?s(self.tokencss.preset,t):t;return self.tokencss.tokencss({config:g})}},editor:"style"};var lr={name:"unocss",title:"UnoCSS",isPostcssPlugin:!1,needsHTML:!0,compiler:{url:m+"unocss/unocss.js",factory:(e,t)=>(self.importScripts(t+"processor-unocss-compiler.a194f2252ca2cf42e47b4c5e1426170e.js"),self.createUnocssCompiler())},editor:"style"};var pr={name:"windicss",title:"Windi CSS",isPostcssPlugin:!1,needsHTML:!0,compiler:{url:m+"windicss/windicss.js",factory:(e,t)=>(self.importScripts(t+"processor-windicss-compiler.4fc0b96428f4dfe950213c471d46c5f0.js"),self.createWindicssCompiler())},editor:"style"};var dr=(e="")=>{if(!e)return;let t=e?.toLowerCase();return N.find(s=>s.name===t||s.title.toLowerCase()===t||s.extensions.map(g=>g.toLowerCase()).includes(t))?.name};var ur=(e="")=>N.find(t=>t.name===dr(e))?.editor;var Ce=(e,t)=>{let s={...f(e,t)};return ur(e)==="markup"&&(s.template=t.customSettings.template),s};var Te={name:"asciidoc",title:"AsciiDoc",compiler:{url:ee,factory:()=>{let e=window.Asciidoctor();return async(t,{config:s})=>e.convert(t,{...f("asciidoc",s)})}},extensions:["adoc","asciidoc","asc"],editor:"markup",preset:"asciidoctor.css"};var Bo=P+"standalone.min.js",r={babel:P+"parser-babel.js",glimmer:P+"parser-glimmer.js",html:P+"parser-html.js",markdown:P+"parser-markdown.js",postcss:P+"parser-postcss.js",php:he,pug:m+"prettier/parser-pug.js"};var Pe={name:"babel",title:"Babel",parser:{name:"babel",pluginUrls:[r.babel,r.html]},compiler:{url:oe,factory:()=>async(e,{config:t})=>window.Babel.transform(e,{filename:"script.tsx",presets:[["env",{modules:!1}],"typescript","react"],...f("babel",t)}).code},extensions:["es","babel"],editor:"script",editorLanguage:"javascript"};var Ee={name:"css",title:"CSS",info:!1,parser:{name:"css",pluginUrls:[r.postcss]},compiler:{factory:()=>async e=>e},extensions:["css"],editor:"style"};var _e={name:"haml",title:"Haml",compiler:{url:m+"clientside-haml-js/haml.js",factory:(e,t)=>(self.importScripts(t+"lang-haml-compiler.211cfce6320ab3f9b29904b481cfed88.js"),self.createHamlCompiler())},extensions:["haml"],editor:"markup"};var Me={name:"html",title:"HTML",info:!1,parser:{name:"html",pluginUrls:[r.html]},compiler:{factory:()=>async e=>e},extensions:["html","htm"],editor:"markup"};var Ae={name:"javascript",title:"JS",longTitle:"JavaScript",info:!1,parser:{name:"babel",pluginUrls:[r.babel,r.html]},compiler:{factory:()=>async e=>e},extensions:["js"],editor:"script"};var Oe={name:"jsx",title:"JSX",parser:{name:"babel",pluginUrls:[r.babel,r.html]},compiler:"typescript",extensions:["jsx"],editor:"script",editorLanguage:"javascript"};var Ie={name:"tsx",title:"TSX",parser:{name:"babel-ts",pluginUrls:[r.babel,r.html]},compiler:"typescript",extensions:["tsx"],editor:"script",editorLanguage:"typescript"};var Be={name:"less",title:"Less",parser:{name:"less",pluginUrls:[r.postcss]},compiler:{url:m+"less/less.js",factory:()=>async(e,{config:t})=>(await window.less.render(e,{...f("less",t)})).css},extensions:["less"],editor:"style"};var Re={name:"markdown",title:"Markdown",parser:{name:"markdown",pluginUrls:[r.markdown,r.html]},compiler:{url:ue,factory:()=>async(e,{config:t})=>window.marked.parse(e,{...f("markdown",t)})},extensions:["md","markdown","mdown","mkdn"],editor:"markup",preset:"github-markdown-css"};var Ne=async(e,t,s,g={},u=self)=>new Promise(h=>{if(!e||!t||!s)return h(e||"");let o=async function(n){let p=n.data.payload;n.data.trigger==="compileInCompiler"&&p?.content===e&&p?.language===t&&(u.removeEventListener("message",o),h(p.compiled))};u.addEventListener("message",o),u.postMessage({type:"compileInCompiler",payload:{content:e,language:t,config:s,options:g}})});var fr=async(e,{config:t,worker:s})=>new Promise(async g=>{if(!e)return g("");let[u,{default:h}]=await Promise.all([import(m+"mdx/mdx.js"),import(m+"remark-gfm/remark-gfm.js")]),o=(await u.compile(e,{remarkPlugins:[h],...f("mdx",t)})).value,p=(x=>x.replace(/, {[^}]*} = _components/g,"").replace(/const {[^:]*} = props.components[^;]*;/g,""))(o),c=`import React from "react";
import ReactDOM from "react-dom";
${R(p,!1)}
ReactDOM.render(<MDXContent />, document.body);
`,l=await Ne(c,"jsx",t,{},s);g(`<script type="module">${l}<\/script>`)}),qe={name:"mdx",title:"MDX",parser:{name:"markdown",pluginUrls:[r.markdown,r.html]},compiler:{factory:()=>async e=>e,runOutsideWorker:fr,compiledCodeLanguage:"javascript",imports:{"react/jsx-runtime":"https://esm.sh/react/jsx-runtime"}},extensions:["mdx"],editor:"markup",editorLanguage:"markdown"};var Fe={name:"pug",title:"Pug",parser:{name:"pug",pluginUrls:[r.pug]},compiler:{url:m+"pug/pug.min.js",factory:(e,t)=>(self.importScripts(t+"lang-pug-compiler.268e7c99ec5b5feb4dad65a364f81341.js"),self.createPugCompiler())},extensions:["pug","jade"],editor:"markup"};var De={name:"scss",title:"SCSS",parser:{name:"scss",pluginUrls:[r.postcss]},compiler:{url:m+"sass/sass.js",factory:(e,t)=>(self.importScripts(t+"lang-scss-compiler.c765688ec910b18dfb548ba8579e57e5.js"),self.createScssCompiler())},extensions:["scss"],editor:"style"};var $e={name:"sass",title:"Sass",compiler:"scss",extensions:["sass"],editor:"style"};var He={name:"svelte",title:"Svelte",parser:{name:"html",pluginUrls:[r.html,r.babel]},compiler:{url:m+"svelte/svelte-compiler.min.js",factory:(e,t)=>(self.importScripts(t+"lang-svelte-compiler.80a1704c10aa090e5c4ba391e1efca20.js"),self.createSvelteCompiler())},extensions:["svelte"],editor:"script",editorLanguage:"html"};var We={name:"stylus",title:"Stylus",compiler:{url:m+"stylus/stylus.min.js",factory:()=>async e=>window.stylus.render(e)},extensions:["styl"],editor:"style"};var A={target:"es2015",jsx:"react",allowUmdGlobalAccess:!0,esModuleInterop:!0},ze={name:"typescript",title:"TS",longTitle:"TypeScript",parser:{name:"babel-ts",pluginUrls:[r.babel,r.html]},compiler:{url:ke,factory:()=>async(e,{config:t,language:s})=>window.ts.transpile(e,{...A,...f("typescript",t),...f(s,t)})},extensions:["ts","typescript"],editor:"script"};var gr=B+"vue3-sfc-loader.min.js",Je="https://cdn.jsdelivr.net/npm/vue@3",Xe={name:"vue",title:"Vue 3",longTitle:"Vue 3 SFC",parser:{name:"html",pluginUrls:[r.html]},compiler:{factory:(e,t)=>(self.importScripts(t+"lang-vue-compiler.283401784b0a29c4678021716dc861c1.js"),self.createVueCompiler()),scripts:[Je,gr],imports:{vue:Je+"/dist/vue.runtime.esm-browser.prod.js"}},extensions:["vue","vue3"],editor:"script",editorLanguage:"html"};var yr=B+"vue2-sfc-loader.js",Ve="https://cdn.jsdelivr.net/npm/vue@2",Ke={name:"vue2",title:"Vue 2",longTitle:"Vue 2 SFC",parser:{name:"html",pluginUrls:[r.html]},compiler:{factory:(e,t)=>(self.importScripts(t+"lang-vue-compiler.283401784b0a29c4678021716dc861c1.js"),self.createVue2Compiler()),scripts:[Ve,yr],imports:{vue:Ve+"/dist/vue.runtime.esm-browser.prod.js"}},extensions:["vue2"],editor:"script",editorLanguage:"html"};var Ge={name:"stencil",title:"Stencil",parser:{name:"babel-ts",pluginUrls:[r.babel,r.html]},compiler:{url:Se,factory:()=>async(e,{config:t})=>(await window.stencil.transpile(e,{sourceMap:!1,target:"es2019",...f("stencil",t)})).code,types:{"@stencil/core":{url:m+"types/stencil-core.d.ts",declareAsModule:!1}}},extensions:["stencil.tsx"],editor:"script",editorLanguage:"typescript"};var Ze={name:"coffeescript",title:"Coffee",longTitle:"CoffeeScript",compiler:{url:ae,factory:()=>async(e,{config:t})=>window.CoffeeScript.compile(e,{bare:!0,...f("coffeescript",t)})},extensions:["coffee"],editor:"script"};var Ye={name:"livescript",title:"LiveScript",compiler:{url:m+"livescript/livescript-min.js",factory:()=>async(e,{config:t})=>window.require("livescript").compile(e,{bare:!0,...f("livescript",t)}),scripts:[m+"livescript/prelude-browser-min.js"]},extensions:["ls"],editor:"script"};var Qe={name:"assemblyscript",title:"AS",longTitle:"AssemblyScript",parser:{name:"babel-ts",pluginUrls:[r.babel]},compiler:{factory:(e,t)=>(self.importScripts(t+"lang-assemblyscript-compiler.7a65e47fe4512f160d5ad45d051b0168.js"),self.createAssemblyscriptCompiler()),scripts:({baseUrl:e})=>[te,e+"lang-assemblyscript-script.193f545355c0ab8f8ed327d937818d36.js"],scriptType:"application/wasm-uint8",compiledCodeLanguage:"wat",types:{assemblyscript:{url:m+"types/assemblyscript.d.ts",declareAsModule:!1,autoload:!0}}},extensions:["as","ts"],editor:"script",editorLanguage:"typescript"};var hr=$+"brython.min.js",xr=$+"brython_stdlib.js",et={name:"python",title:"Python",compiler:{factory:()=>async e=>e,scripts:({compiled:e,config:t})=>{let{autoloadStdlib:s,...g}=f("python",t),u=/^(?:from[ ]+(\S+)[ ]+)?import[ ]+(\S+)(?:[ ]+as[ ]+\S+)?[ ]*$/gm,h=s!==!1&&e.match(u)?[xr]:[],o=`window.addEventListener("load", () => {brython(${JSON.stringify(g)})})`,n="data:text/plain;base64,"+btoa(o),p=`window.addEventListener("load", () => {
        const content = __BRYTHON__.python_to_js(\`${R(e)}\`);
        parent.postMessage({type: "compiled", payload: {language: "python", content}}, "*");
      });`,c="data:text/plain;base64,"+btoa(p);return[hr,...h,n,c]},scriptType:"text/python"},extensions:["py"],editor:"script"};var br=(e,t={})=>Array.from(new Set([...e.matchAll(new RegExp(/^\s*self\.\$require\("(\S+)"\);/gm))].map(s=>s[1]).map(s=>s.split("/")[0]).filter(s=>t.hasOwnProperty(s)||s!=="opal").map(s=>t[s]||`${M+s}.min.js`))),tt={name:"ruby",title:"Ruby",compiler:{url:M+"opal.min.js",factory:()=>(importScripts(M+"opal-parser.min.js"),self.Opal.config.unsupported_features_severity="ignore",self.Opal.load("opal-parser"),async(e,{config:t})=>{let{autoloadStdlib:s,requireMap:g,...u}=f("ruby",t);return self.Opal.compile(e,u)}),scripts:({compiled:e,config:t})=>{let{autoloadStdlib:s,requireMap:g}=f("ruby",t),u=br(e,g),h=s!==!1?u:[];return[M+"opal.min.js",...h]}},extensions:["rb"],editor:"script"};var rt={name:"php",title:"PHP",parser:{name:"php",pluginUrls:[r.php]},compiler:{factory:()=>async e=>(e=e.trim(),e.startsWith("<?php")&&(e=e.replace("<?php","/* <?php */"),e.endsWith("?>")&&(e=e.replace("?>","/* ?> */"))),e),scripts:[Le],deferScripts:!0,scriptType:"text/x-uniter-php",compiledCodeLanguage:"php"},extensions:["php"],editor:"script"};var ot={name:"perl",title:"Perl",compiler:{factory:()=>async e=>e,scripts:({baseUrl:e})=>[m+"perlito/perlito5.min.js",e+"lang-perl-script.1f606d886aeb724510a595d45cbaf555.js"],scriptType:"text/perl"},extensions:["pl","pm"],editor:"script"};var vr=m+"lua-fmt/lua-fmt.js",st={name:"lua",title:"Lua",formatter:{factory:()=>(self.importScripts(vr),async(e,t)=>({formatted:self.luaFmt.formatText(e),cursorOffset:t}))},compiler:{factory:()=>async e=>e,scripts:[de],scriptType:"application/lua",compiledCodeLanguage:"lua"},extensions:["lua"],editor:"script"};var V=()=>{let e=ye;return self.importScripts(e),async t=>({formatted:window.parinfer.parenMode(t).text,cursorOffset:0})},nt={name:"commonlisp",title:"Lisp",longTitle:"Common Lisp",formatter:{factory:V},compiler:{factory:()=>async e=>e,scripts:({baseUrl:e})=>[pe,e+"lang-commonlisp-script.0c86dfce5f8509928ccf51ff666c7b4b.js"],scriptType:"text/commonlisp",compiledCodeLanguage:"commonlisp",inlineScript:`

    `},extensions:["lisp","common-lisp"],editor:"script",editorLanguage:"scheme"};var at={name:"scheme",title:"Scheme",formatter:{factory:V},compiler:{factory:()=>async e=>e,scripts:[se],scriptType:"text/biwascheme",compiledCodeLanguage:"scheme"},extensions:["scm"],editor:"script"};var it={name:"solid",title:"Solid",parser:{name:"babel",pluginUrls:[r.babel,r.html]},compiler:{dependencies:["babel"],url:m+"babel-preset-solid/babel-preset-solid.js",factory:(e,t)=>(self.importScripts(t+"lang-solid-compiler.d94bb9811b03f637f8a55f20c131f21f.js"),self.createSolidCompiler()),types:{"solid-js":{url:m+"types/solid-js.d.ts",declareAsModule:!1}}},extensions:["solid.jsx"],editor:"script",editorLanguage:"javascript"};var ct={name:"solid.tsx",title:"Solid (TS)",parser:{name:"babel",pluginUrls:[r.babel,r.html]},compiler:"solid",extensions:["solid.tsx"],editor:"script",editorLanguage:"typescript"};var lt={name:"pyodide",title:"Pyodide",longTitle:"Python (Pyodide)",compiler:{factory:()=>async e=>e,scripts:({baseUrl:e})=>[e+"lang-python-pyodide-script.12c7bd5206632003e3031fba49ea13a7.js"],liveReload:!0,scriptType:"text/python",compiledCodeLanguage:"python"},extensions:["py3"],editor:"script",editorLanguage:"python",largeDownload:!0};var pt={name:"liquid",title:"Liquid",parser:{name:"html",pluginUrls:[r.html]},compiler:{url:me,factory:(e,t)=>(self.importScripts(t+"lang-liquid-compiler.385aaf468ec3e32b3e3347fad0e9eaff.js"),self.createLiquidCompiler())},extensions:["liquid","liquidjs"],editor:"markup",editorLanguage:"html"};var mt={name:"ejs",title:"EJS",parser:{name:"html",pluginUrls:[r.html]},compiler:{url:ce,factory:(e,t)=>(self.importScripts(t+"lang-ejs-compiler.e7fe0830aa69a35259b11bef9ed1e73e.js"),self.createEjsCompiler())},extensions:["ejs"],editor:"markup",editorLanguage:"html"};var wr=W+"handlebars.min.js",Na=W+"handlebars.runtime.min.js",dt={name:"handlebars",title:"Handlebars",parser:{name:"glimmer",pluginUrls:[r.glimmer]},compiler:{url:wr,factory:(e,t)=>(self.importScripts(t+"lang-handlebars-compiler.c9531e926f086be0b31cd35bea117628.js"),self.createHandlebarsCompiler())},extensions:["hbs","handlebars"],editor:"markup",editorLanguage:"html"};var ut={name:"dot",title:"doT",parser:{name:"html",pluginUrls:[r.html]},compiler:{url:ie,factory:(e,t)=>(self.importScripts(t+"lang-dot-compiler.94002b0703f1ced78c28a6f427bf0e29.js"),self.createDotCompiler())},extensions:["dot"],editor:"markup",editorLanguage:"html"};var Sr=J+"nunjucks.min.js",Ka=J+"nunjucks-slim.min.js",ft={name:"nunjucks",title:"Nunjucks",parser:{name:"html",pluginUrls:[r.html]},compiler:{url:Sr,factory:(e,t)=>(self.importScripts(t+"lang-nunjucks-compiler.5149959cea55783109ad14e832859337.js"),self.createNunjucksCompiler())},extensions:["njk"],editor:"markup",editorLanguage:"html"};var gt={name:"go",title:"Go",formatter:{factory:()=>{let e=_+"/index.js";return importScripts(e),async t=>({formatted:await window.go2js.format(t,_),cursorOffset:0})}},compiler:{url:_+"/index.js",factory:()=>async e=>{if(!e)return"";try{return await window.go2js.compile(e,_)}catch(t){return console.error(t),""}}},extensions:["go","golang"],editor:"script"};var jr=async(e,{baseUrl:t,language:s})=>{let{rescriptCompiler:g}=await import(t+"lang-rescript-compiler-esm.7a2adc4368f0026b3379b346820f1853.js");return g(e,{baseUrl:t,language:s})},K=(e,t)=>(importScripts(e+"lang-rescript-formatter.af3215d3b04feb7226bf04f3c9453388.js"),self.createRescriptFormatter(e,t)),yt={name:"rescript",title:"ReScript",formatter:{factory:K},compiler:{factory:()=>async e=>e,runOutsideWorker:jr,scriptType:"module"},extensions:["res","resi"],editor:"script",editorLanguage:"javascript"};var ht={name:"reason",title:"Reason",formatter:{factory:K},compiler:"rescript",extensions:["re","rei"],editor:"script",editorLanguage:"javascript"};var xt={name:"ocaml",title:"OCaml",compiler:"rescript",extensions:["ml","mli"],editor:"script",editorLanguage:"javascript"};var kr=m+"wast-refmt/wast-refmt.js",Lr="application/wasm-uint8",bt={name:"wat",title:"WAT",longTitle:"WebAssembly Text",formatter:{factory:()=>(importScripts(kr),async e=>{let t=e;try{t=self.wastRefmt.format(e)}catch(s){console.warn("failed parsing WAT",s)}return{formatted:t,cursorOffset:0}})},compiler:{url:Ue,factory:(e,t)=>(self.importScripts(t+"lang-wat-compiler.4fddb11ffae864668523a5b37d2a5712.js"),self.createWatCompiler()),scripts:({baseUrl:e})=>[e+"lang-wat-script.e0ed8bc039ea672c1eaabbe994b672ef.js"],scriptType:Lr,compiledCodeLanguage:"Binary"},extensions:["wat","wast","webassembly","wasm"],editor:"script"};var Ur=X+"riot+compiler.min.js",Cr=X+"riot.min.js",vt={name:"riot",title:"Riot.js",parser:{name:"html",pluginUrls:[r.html,r.babel]},compiler:{url:Ur,factory:(e,t)=>(self.importScripts(t+"lang-riot-compiler.3a07307fa35830345b09d74b22af7a6d.js"),self.createRiotCompiler()),scripts:[Cr],scriptType:"module"},extensions:["riot","riotjs"],editor:"script",editorLanguage:"html"};var Tr="application/json",wt={name:"sql",title:"SQL",formatter:{factory:()=>(importScripts(ve),async e=>({formatted:await self.sqlFormatter.format(e,{linesBetweenQueries:2}),cursorOffset:0}))},compiler:{url:we+"sql-wasm.min.js",factory:(e,t)=>(self.importScripts(t+"lang-sql-compiler.7a6736b65b9bfe968279cd988facfcaf.js"),self.createSqlCompiler()),scripts:({baseUrl:e})=>[e+"lang-sql-script.567145561f54bf72aaf9444dc3ccd838.js"],scriptType:Tr,compiledCodeLanguage:"json"},extensions:["sql","sqlite","sqlite3"],editor:"script"};var O=m+"react-native-web/react-native-web.js",St={name:"react-native",title:"RN",longTitle:"React Native",parser:{name:"babel",pluginUrls:[r.babel,r.html]},compiler:{dependencies:["typescript"],factory:()=>async(e,{config:t,language:s})=>window.ts.transpile(e,{...A,...f("typescript",t),...f(s,t)}),imports:{react:O,"react-native":O}},extensions:["react-native.jsx"],editor:"script",editorLanguage:"javascript"};var jt={name:"react-native-tsx",title:"RN (TSX)",longTitle:"React Native (TSX)",parser:{name:"babel",pluginUrls:[r.babel,r.html]},compiler:{dependencies:["typescript"],factory:()=>async(e,{config:t,language:s})=>window.ts.transpile(e,{...A,...f("typescript",t),...f(s,t)}),imports:{react:O,"react-native":O}},extensions:["react-native.tsx"],editor:"script",editorLanguage:"typescript"};var kt={name:"blockly",title:"Blockly",compiler:{factory:()=>async(e,{options:t})=>t?.blockly?.js||""},extensions:["blockly.xml","xml"],editor:"script",editorLanguage:"xml"};var Lt={name:"twig",title:"Twig",parser:{name:"html",pluginUrls:[r.html]},compiler:{url:je,factory:(e,t)=>(self.importScripts(t+"lang-twig-compiler.c4dcc5ecde65e18f52f4714c74e5152f.js"),self.createTwigCompiler())},extensions:["twig"],editor:"markup",editorLanguage:"html"};var Pr=re+"compiler.min.js",Ut={name:"astro",title:"Astro",parser:{name:"html",pluginUrls:[r.html,r.babel]},compiler:{url:Pr,factory:(e,t)=>(self.importScripts(t+"lang-astro-compiler.efbee0ca048d750ed787834550930af1.js"),self.createAstroCompiler())},extensions:["astro"],editor:"markup"};var Ct={name:"malina",title:"Malina.js",parser:{name:"html",pluginUrls:[r.html,r.babel]},compiler:{factory:(e,t)=>(self.importScripts(t+"lang-malina-compiler.394dd7793a519c634eedca0796c1d8e1.js"),self.createMalinaCompiler())},extensions:["xht"],editor:"script",editorLanguage:"html"};var Er=m+"jscpp/JSCPP.es5.min.js",Tt={name:"cpp",title:"C++",compiler:{factory:()=>async e=>e,scripts:({baseUrl:e})=>[Er,e+"lang-cpp-script.6362a5043199fe5dcbc88fdce0e72cea.js"],scriptType:"text/cpp",compiledCodeLanguage:"cpp"},extensions:["cpp","c","C","cp","cxx","c++","cppm","ixx","ii","hpp","h"],editor:"script"};var Pt={name:"julia",title:"Julia",compiler:{factory:()=>async e=>e,scripts:({baseUrl:e})=>[e+"lang-julia-script.3ae0195ce71029e103fcc0e2905190ea.js"],liveReload:!0,scriptType:"text/julia",compiledCodeLanguage:"julia"},extensions:["jl"],editor:"script",largeDownload:!0};var Et={name:"clang",title:"Clang",longTitle:"C/C++ (Clang)",compiler:{factory:()=>async e=>e,scripts:({baseUrl:e})=>[e+"lang-cpp-clang-script.ba3e5873337a6d7009f3e3e4fa4ef681.js"],scriptType:"text/cpp",compiledCodeLanguage:"cpp",liveReload:!0},extensions:["clang.cpp","clang","cpp","c","C","cp","cxx","c++","cppm","ixx","ii","hpp","h"],editor:"script",editorLanguage:"cpp",largeDownload:!0};var _t={name:"tcl",title:"Tcl",compiler:{factory:()=>async e=>e,scripts:({baseUrl:e})=>[xe,e+"lang-tcl-script.086640745f754791db8a40d8dd8ce18e.js"],scriptType:"text/tcl",compiledCodeLanguage:"tcl"},extensions:["tcl"],editor:"script"};var Mt={name:"prolog",title:"Prolog",compiler:{factory:()=>async e=>e,scripts:({baseUrl:e})=>[U+"core.js",U+"charsio.js",U+"dom.js",U+"format.js",U+"js.js",U+"lists.js",U+"os.js",U+"promises.js",U+"random.js",U+"statistics.js",e+"lang-prolog-script.2780539e5f2bc8edb4aedd5cf57143e7.js"],scriptType:"text/prolog",compiledCodeLanguage:"prolog"},extensions:["prolog.pl","prolog"],editor:"script"};var At={name:"clio",title:"Clio",compiler:{url:H+"compile.js",factory:(e,t)=>(self.importScripts(t+"lang-clio-compiler.7cc47ec9be8439cc2865fddbc20da58c.js"),self.createClioCompiler()),scripts:[H+"exec.js"]},extensions:["clio"],editor:"script",editorLanguage:"coffeescript"};var Ot={name:"richtext",title:"Rich Text",longTitle:"Rich Text Editor",compiler:{factory:()=>async(e,{config:t})=>t.markup.content||"",styles:["quill.8e9d74c74d2c8aaa5d849678c215cf7e.css"]},extensions:["rte","rte.html","rich"],editor:"markup",editorLanguage:"html"};var _r=async(e,{baseUrl:t,config:s})=>{let{diagramsCompiler:g}=await import(t+"lang-diagrams-compiler-esm.d1a1cfaf316ec3b7cbe1b41feb1ff353.js");return g(e,{config:s})},It={name:"diagrams",title:"Diagrams",parser:{name:"html",pluginUrls:[r.html]},compiler:{factory:()=>async e=>e||"",runOutsideWorker:_r},extensions:["diagrams","diagram","graph","plt"],editor:"markup",editorLanguage:"html"};var Bt={name:"imba",title:"Imba",compiler:{url:z+"compiler.js",factory:(e,t)=>(self.importScripts(t+"lang-imba-compiler.9f5458f74b381aed3017dcc9ea1d8998.js"),self.createImbaCompiler()),imports:{imba:z+"imba.mjs"}},extensions:["imba"],editor:"script"};var Rt={name:"mustache",title:"Mustache",parser:{name:"glimmer",pluginUrls:[r.glimmer]},compiler:{url:fe,factory:(e,t)=>(self.importScripts(t+"lang-mustache-compiler.0a30a4a5874d6b24636f04625617fe55.js"),self.createMustacheCompiler())},extensions:["mustache"],editor:"markup",editorLanguage:"html"};var Nt={name:"art-template",title:"art",longTitle:"art-template",parser:{name:"html",pluginUrls:[r.html]},compiler:{url:Q,factory:(e,t)=>(self.importScripts(t+"lang-art-template-compiler.f791a36ad9d8acf970b79953b79fdbd8.js"),self.createArtTemplateCompiler())},extensions:["art","art-template"],editor:"markup",editorLanguage:"html"};var N=[Me,Re,qe,Ut,Fe,Te,_e,Rt,dt,mt,ft,pt,ut,Lt,Nt,It,Ot,Ee,De,$e,Be,We,Ae,Pe,ze,Oe,Ie,St,jt,Xe,Ke,He,Ge,it,ct,vt,Ct,Ze,Ye,At,Bt,yt,ht,xt,et,lt,tt,gt,rt,Tt,Et,ot,st,Pt,at,nt,_t,Qe,bt,wt,Mt,kt];var rp=[{id:"normalize.css",name:"Normalize.css",url:ge},{id:"reset-css",name:"CSS reset",url:be},{id:"github-markdown-css",name:"github-markdown-css",url:le},{id:"asciidoctor.css",name:"Asciidoctor CSS",url:m+"asciidoctor.css/asciidoctor.css"}];var E=(e=location.origin)=>Boolean(e&&(e.endsWith("livecodes.io")||e.endsWith("livecodes.pages.dev")||e.endsWith("localpen.io")||e.endsWith("localpen.pages.dev")||e.startsWith("http://127.0.0.1")||e.startsWith("http://localhost")));var G=tr(Ft());var Or="https://livecodes-sandbox.pages.dev";var Z=Or,Dt="v5",F={getResultUrl:()=>`${Z}/${Dt}/result`,getCompilerUrl:()=>`${Z}/${Dt}/compiler`,getOrigin:()=>new URL(Z).origin};var $t="https://dpaste.com/",Ir="https://dpaste.com/api/v2/",Ht="https://api2.livecodes.io/share",Wt={getProject:async e=>{try{let t=await fetch($t+e+".txt");return t.ok?JSON.parse(await t.text()):{}}catch{return{}}},shareProject:async e=>{try{let t=await fetch(Ir,{method:"POST",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded","User-Agent":"LiveCodes / https://livecodes.io/"},body:`content=${encodeURIComponent(JSON.stringify(e))}&title=${encodeURIComponent(e.title||"")}&syntax=json&expiry_days=365`});return t.ok?(await t.text()).replace($t,""):""}catch{return""}}},Br={getProject:async e=>{if(e.length<11)return Wt.getProject(e);if(!E())return{};try{let t=await fetch(Ht+"?id="+e);return t.ok?JSON.parse(await t.text()):{}}catch{return{}}},shareProject:async e=>{if(!E())return"";try{let t=await fetch(Ht,{method:"POST",mode:"cors",body:JSON.stringify(e)});return t.ok?t.text():""}catch{return""}}},mm=E()?Br:Wt;var zt=`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blockly Editor</title>
    <style>
      html,
      body {
        margin: 0;
        padding: 0;
        height: 100%;
      }

      #blocklyDiv {
        width: 100%;
        height: 100%;
      }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/blockly/blockly.min.js"><\/script>
    <!-- <script src="https://cdn.jsdelivr.net/npm/@live-codes/blockly-utils@0.1.0/src/custom-dialog.js"><\/script> -->
  </head>
  <body>
    <div id="blocklyDiv"></div>

    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
      <category name="Logic" colour="#5b80a5">
        <block type="controls_if"></block>
        <block type="logic_compare">
          <field name="OP">EQ</field>
        </block>
        <block type="logic_operation">
          <field name="OP">AND</field>
        </block>
        <block type="logic_negate"></block>
        <block type="logic_boolean">
          <field name="BOOL">TRUE</field>
        </block>
        <block type="logic_null"></block>
        <block type="logic_ternary"></block>
      </category>
      <category name="Loops" colour="#5ba55b">
        <block type="controls_repeat_ext">
          <value name="TIMES">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
        </block>
        <block type="controls_whileUntil">
          <field name="MODE">WHILE</field>
        </block>
        <block type="controls_for">
          <field name="VAR" id="mhPqYhZH,S)tSOh0bq]0">i</field>
          <value name="FROM">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="TO">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
          <value name="BY">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block type="controls_forEach">
          <field name="VAR" id="P*OGeY|!5)*O-0D2XaR?">j</field>
        </block>
        <block type="controls_flow_statements">
          <field name="FLOW">BREAK</field>
        </block>
      </category>
      <category name="Math" colour="#5b67a5">
        <block type="math_number">
          <field name="NUM">0</field>
        </block>
        <block type="math_arithmetic">
          <field name="OP">ADD</field>
          <value name="A">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="B">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block type="math_single">
          <field name="OP">ROOT</field>
          <value name="NUM">
            <shadow type="math_number">
              <field name="NUM">9</field>
            </shadow>
          </value>
        </block>
        <block type="math_trig">
          <field name="OP">SIN</field>
          <value name="NUM">
            <shadow type="math_number">
              <field name="NUM">45</field>
            </shadow>
          </value>
        </block>
        <block type="math_constant">
          <field name="CONSTANT">PI</field>
        </block>
        <block type="math_number_property">
          <mutation divisor_input="false"></mutation>
          <field name="PROPERTY">EVEN</field>
          <value name="NUMBER_TO_CHECK">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
        </block>
        <block type="math_round">
          <field name="OP">ROUND</field>
          <value name="NUM">
            <shadow type="math_number">
              <field name="NUM">3.1</field>
            </shadow>
          </value>
        </block>
        <block type="math_on_list">
          <mutation op="SUM"></mutation>
          <field name="OP">SUM</field>
        </block>
        <block type="math_modulo">
          <value name="DIVIDEND">
            <shadow type="math_number">
              <field name="NUM">64</field>
            </shadow>
          </value>
          <value name="DIVISOR">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
        </block>
        <block type="math_constrain">
          <value name="VALUE">
            <shadow type="math_number">
              <field name="NUM">50</field>
            </shadow>
          </value>
          <value name="LOW">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="HIGH">
            <shadow type="math_number">
              <field name="NUM">100</field>
            </shadow>
          </value>
        </block>
        <block type="math_random_int">
          <value name="FROM">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="TO">
            <shadow type="math_number">
              <field name="NUM">100</field>
            </shadow>
          </value>
        </block>
        <block type="math_random_float"></block>
      </category>
      <category name="Text" colour="#5ba58c">
        <block type="text">
          <field name="TEXT"></field>
        </block>
        <block type="text_join">
          <mutation items="2"></mutation>
        </block>
        <block type="text_append">
          <field name="VAR" id="{c*$G-wO_K85DOwAUN)0">item</field>
          <value name="TEXT">
            <shadow type="text">
              <field name="TEXT"></field>
            </shadow>
          </value>
        </block>
        <block type="text_length">
          <value name="VALUE">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
        <block type="text_isEmpty">
          <value name="VALUE">
            <shadow type="text">
              <field name="TEXT"></field>
            </shadow>
          </value>
        </block>
        <block type="text_indexOf">
          <field name="END">FIRST</field>
          <value name="VALUE">
            <block type="variables_get">
              <field name="VAR" id="56^Bs:W6[;bSlf.n%D.0">text</field>
            </block>
          </value>
          <value name="FIND">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
        <block type="text_charAt">
          <mutation at="true"></mutation>
          <field name="WHERE">FROM_START</field>
          <value name="VALUE">
            <block type="variables_get">
              <field name="VAR" id="56^Bs:W6[;bSlf.n%D.0">text</field>
            </block>
          </value>
        </block>
        <block type="text_getSubstring">
          <mutation at1="true" at2="true"></mutation>
          <field name="WHERE1">FROM_START</field>
          <field name="WHERE2">FROM_START</field>
          <value name="STRING">
            <block type="variables_get">
              <field name="VAR" id="56^Bs:W6[;bSlf.n%D.0">text</field>
            </block>
          </value>
        </block>
        <block type="text_changeCase">
          <field name="CASE">UPPERCASE</field>
          <value name="TEXT">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
        <block type="text_trim">
          <field name="MODE">BOTH</field>
          <value name="TEXT">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
        <block type="text_print">
          <value name="TEXT">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
        <block type="text_prompt_ext">
          <mutation type="TEXT"></mutation>
          <field name="TYPE">TEXT</field>
          <value name="TEXT">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
      </category>
      <category name="Lists" colour="#745ba5">
        <block type="lists_create_with">
          <mutation items="0"></mutation>
        </block>
        <block type="lists_create_with">
          <mutation items="3"></mutation>
        </block>
        <block type="lists_repeat">
          <value name="NUM">
            <shadow type="math_number">
              <field name="NUM">5</field>
            </shadow>
          </value>
        </block>
        <block type="lists_length"></block>
        <block type="lists_isEmpty"></block>
        <block type="lists_indexOf">
          <field name="END">FIRST</field>
          <value name="VALUE">
            <block type="variables_get">
              <field name="VAR" id="=[3|%qk6D5qw(*9IL-+N">list</field>
            </block>
          </value>
        </block>
        <block type="lists_getIndex">
          <mutation statement="false" at="true"></mutation>
          <field name="MODE">GET</field>
          <field name="WHERE">FROM_START</field>
          <value name="VALUE">
            <block type="variables_get">
              <field name="VAR" id="=[3|%qk6D5qw(*9IL-+N">list</field>
            </block>
          </value>
        </block>
        <block type="lists_setIndex">
          <mutation at="true"></mutation>
          <field name="MODE">SET</field>
          <field name="WHERE">FROM_START</field>
          <value name="LIST">
            <block type="variables_get">
              <field name="VAR" id="=[3|%qk6D5qw(*9IL-+N">list</field>
            </block>
          </value>
        </block>
        <block type="lists_getSublist">
          <mutation at1="true" at2="true"></mutation>
          <field name="WHERE1">FROM_START</field>
          <field name="WHERE2">FROM_START</field>
          <value name="LIST">
            <block type="variables_get">
              <field name="VAR" id="=[3|%qk6D5qw(*9IL-+N">list</field>
            </block>
          </value>
        </block>
        <block type="lists_split">
          <mutation mode="SPLIT"></mutation>
          <field name="MODE">SPLIT</field>
          <value name="DELIM">
            <shadow type="text">
              <field name="TEXT">,</field>
            </shadow>
          </value>
        </block>
        <block type="lists_sort">
          <field name="TYPE">NUMERIC</field>
          <field name="DIRECTION">1</field>
        </block>
      </category>
      <category name="Colour" colour="#a5745b">
        <block type="colour_picker">
          <field name="COLOUR">#ff0000</field>
        </block>
        <block type="colour_random"></block>
        <block type="colour_rgb">
          <value name="RED">
            <shadow type="math_number">
              <field name="NUM">100</field>
            </shadow>
          </value>
          <value name="GREEN">
            <shadow type="math_number">
              <field name="NUM">50</field>
            </shadow>
          </value>
          <value name="BLUE">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
        </block>
        <block type="colour_blend">
          <value name="COLOUR1">
            <shadow type="colour_picker">
              <field name="COLOUR">#ff0000</field>
            </shadow>
          </value>
          <value name="COLOUR2">
            <shadow type="colour_picker">
              <field name="COLOUR">#3333ff</field>
            </shadow>
          </value>
          <value name="RATIO">
            <shadow type="math_number">
              <field name="NUM">0.5</field>
            </shadow>
          </value>
        </block>
      </category>
      <sep></sep>
      <category name="Variables" colour="#a55b80" custom="VARIABLE"></category>
      <category name="Functions" colour="#995ba5" custom="PROCEDURE"></category>
      <sep></sep>
    </xml>

    <!-- startBlocks placeholder -->

    <script>
      (function () {
        var darkTheme = Blockly.Theme.defineTheme('dark', {
          base: Blockly.Themes.Classic,
          componentStyles: {
            workspaceBackgroundColour: '#1e1e1e',
            toolboxBackgroundColour: 'blackBackground',
            toolboxForegroundColour: '#fff',
            flyoutBackgroundColour: '#252526',
            flyoutForegroundColour: '#ccc',
            flyoutOpacity: 1,
            scrollbarColour: '#797979',
            insertionMarkerColour: '#fff',
            insertionMarkerOpacity: 0.3,
            scrollbarOpacity: 0.4,
            cursorColour: '#d0d0d0',
            blackBackground: '#333',
          },
        });

        var themes = {
          light: Blockly.Themes.Classic,
          dark: darkTheme,
        };

        var workspace = Blockly.inject('blocklyDiv', {
          zoom: {
            controls: true,
            wheel: false,
            startScale: 0.7,
            maxScale: 2,
            minScale: 0.3,
            scaleSpeed: 1.2,
            pinch: true,
          },
          trashcan: true,
          renderer: 'zelos',
          theme: themes['{{theme}}'],

          // {{ custom config }}

          media: 'https://cdn.jsdelivr.net/npm/blockly/media/',
          toolbox: document.getElementById('toolbox'),
        });

        function updateCode() {
          window.LoopTrap = 1000;
          Blockly.JavaScript.INFINITE_LOOP_TRAP =
            'if (--window.LoopTrap == 0) throw "Infinite loop.";\\n';
          var js = Blockly.JavaScript.workspaceToCode(workspace);
          var dom = Blockly.Xml.workspaceToDom(workspace);
          var xml = Blockly.Xml.domToPrettyText(dom);
          Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
          parent.postMessage({ type: 'blocklyCode', payload: { xml, js } }, '*');
        }

        function loadWorkspace(xml) {
          if (xml) {
            workspace.clear();
            var dom = Blockly.Xml.textToDom(xml);
            Blockly.Xml.domToWorkspace(dom, workspace);
          }
        }

        window.addEventListener('message', function (event) {
          if (event.data.result) {
            document.write(event.data.result);
            document.close();
          } else if (event.data.type === 'updateCode') {
            updateCode();
          } else if (event.data.type === 'setTheme') {
            workspace.setTheme(themes[event.data.payload]);
          }
        });

        var onresize = function (e) {
          Blockly.svgResize(workspace);
        };

        window.addEventListener('resize', onresize, false);

        function centerContent() {
          workspace.markFocused();
          workspace.beginCanvasTransition();
          // workspace.zoomToFit();
          workspace.zoomCenter(0);
          workspace.scrollCenter();
          setTimeout(function () {
            workspace.endCanvasTransition();
          }, 500);
        }

        document.addEventListener('keydown', function (ev) {
          if (ev.shiftKey && ev.altKey && ev.key === 'F') {
            centerContent();
          }
          if (ev.ctrlKey && ev.key === 's') {
            // save
          }
        });

        window.addEventListener('load', () => {
          loadWorkspace(document.querySelector('#startBlocksContainer')?.innerHTML || '');
          parent.postMessage({ type: 'blocklyLoaded', payload: true }, '*');
          workspace.addChangeListener(updateCode);
          updateCode();
          onresize();
        });
      })();
    <\/script>
  </body>
</html>
`;var D=!1,C={src:"",customScripts:[],customXml:[]},I=()=>document.querySelector("#blockly-frame"),Jt=e=>"..."+JSON.stringify({...Ce("blockly",e),...e.readonly?{readOnly:!0}:{}})+",",Xt=async(e,t)=>{let g=new DOMParser().parseFromString(e,"text/html"),u=Array.from(g.querySelectorAll('script[type="blockly/script"], script[data-type="blockly/script"]')),h=Array.from(g.querySelectorAll('xml[type="blockly/xml"], xml[data-type="blockly/xml"]')),o=u.map(v=>v.src||v.dataset.src||v.innerHTML),n=h.map(v=>v.src||v.dataset.src||v.innerHTML),p=Jt(t),c=JSON.stringify([o,n,p]);if(C.src===c)return[C.customScripts,C.customXml];D=!1;let l=async v=>Promise.all(v.map(async k=>{let w=k.src||k.dataset.src;return w?fetch(w).then(j=>j.text()):k.innerHTML})),[x,S]=await Promise.all([l(u),l(h)]);return C={src:c,customScripts:x,customXml:S},[x,S]},Nr=async({baseUrl:e,editors:t,config:s,html:g,eventsManager:u})=>{let[h,o]=await Xt(g,s);if(D)return;let n=()=>zt.replace(/https:\/\/cdn.jsdelivr.net\/npm\/blockly\//g,ne).replace("{{theme}}",s.theme).replace("// {{ custom config }}",Jt(s)).replace("<!-- startBlocks placeholder -->",`<div id="startBlocksContainer" style="display:none;">${t.script.getValue()}</div>
    ${h?.map(p=>"<script>"+p+"<\/script>").join("/n")}
      <script>
        if (typeof window.editToolbox !== 'function') {
          window.editToolbox = (toolboxElement, customXml) => {
            const domParser = new DOMParser();
            customXml.forEach(xml => {
              const dom = domParser.parseFromString(xml, 'text/xml');
              toolboxElement.innerHTML += dom.documentElement.innerHTML;
            })
          }
        }
        window.editToolbox(document.getElementById('toolbox'), [${o?.map(p=>"`"+p.replace(/\`/g,"\\`")+"`").join(", ")}]);
      <\/script>
      <script src="${e}custom-editor-utils.5645a2cb96ac65049b5cfaa8391888fb.js"><\/script>
    `);await new Promise(p=>{let c=document.querySelector("#blockly"),l=I(),x=()=>{u.addEventListener(window,"message",S=>{if(S.source!==I()?.contentWindow||!["blocklyCode","blocklyLoaded"].includes(S.data.type))return;if(S.data.type==="blocklyLoaded"){D=!0,u.removeEventListener(l,"load",x),qr(s.theme),Fr(),p("loaded");return}let{xml:v,js:k}=S.data.payload;C.xml=v,C.js=k,t.script.setValue(v)}),I()?.contentWindow?.postMessage({result:n()},"*")};l?x():(l=document.createElement("iframe"),l.name="blockly",l.id="blockly-frame",l.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts"),u.addEventListener(l,"load",x),l.src=F.getResultUrl(),c.appendChild(l))})},Pm=async({baseUrl:e,editors:t,config:s,html:g,eventsManager:u})=>s.script.language!=="blockly"?{}:(await Xt(g,s),(!D||C.js==null)&&await Nr({baseUrl:e,config:s,editors:t,html:g,eventsManager:u}),{xml:C.xml,js:C.js}),qr=e=>{I()?.contentWindow?.postMessage({type:"setTheme",payload:e},F.getOrigin())},Fr=()=>{I()?.contentWindow?.postMessage({type:"updateCode"},F.getOrigin())};export{Pm as getBlocklyContent,qr as setBlocklyTheme,Nr as showBlockly};
//# sourceMappingURL=blockly.js.map
