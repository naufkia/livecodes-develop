(function(){var u={title:"Untitled Project",description:"",tags:[],autoupdate:!0,autosave:!1,delay:1500,formatOnsave:!1,mode:"full",theme:"dark",recoverUnsaved:!0,showSpacing:!1,readonly:!1,allowLangChange:!0,activeEditor:void 0,languages:void 0,markup:{language:"html",content:""},style:{language:"css",content:""},script:{language:"javascript",content:""},stylesheets:[],scripts:[],cssPreset:"",imports:{},types:{},tests:{language:"typescript",content:""},tools:{enabled:"all",active:"",status:""},zoom:1,processors:[],customSettings:{},editor:void 0,fontFamily:void 0,fontSize:void 0,useTabs:!1,tabSize:2,lineNumbers:!0,wordWrap:!1,closeBrackets:!0,semicolons:!0,singleQuote:!1,trailingComma:!0,emmet:!0,editorMode:void 0,version:"0.6.0"};var s="https://cdn.jsdelivr.net/npm/@live-codes/browser-compilers@0.5.13/dist/";var O="https://cdn.jsdelivr.net/npm/art-template@4.13.2/lib/template-web.js",A="https://cdn.jsdelivr.net/npm/@asciidoctor/core@2.2.5/dist/browser/asciidoctor.min.js";var H="https://cdn.jsdelivr.net/npm/@assemblyscript/loader@0.19.22/umd/index.js";var N="https://cdn.jsdelivr.net/npm/@hatemhosny/astro-internal@0.0.4/";var W="https://cdn.jsdelivr.net/npm/@babel/standalone@7.17.2/babel.min.js",z="https://cdn.jsdelivr.net/npm/biwascheme@0.7.4/release/biwascheme-min.js";var w="https://cdn.jsdelivr.net/npm/brython@3.10.4/";var C="https://cdn.jsdelivr.net/npm/@live-codes/clio-browser-compiler@0.0.3/public/build/",D="https://cdn.jsdelivr.net/npm/coffeescript@2.6.1/lib/coffeescript-browser-compiler-legacy/coffeescript.js";var $="https://cdn.jsdelivr.net/npm/dot@1.1.3/doT.min.js",J="https://cdn.jsdelivr.net/npm/ejs@3.1.6/ejs.min.js";var V="https://cdn.jsdelivr.net/npm/github-markdown-css@5.1.0/github-markdown.min.css",f="https://cdn.jsdelivr.net/npm/@live-codes/go2js@0.3.0/build";var P="https://cdn.jsdelivr.net/npm/handlebars@4.7.7/dist/";var k="https://cdn.jsdelivr.net/npm/imba@2.0.0-alpha.201/dist/";var Q="https://cdn.jsdelivr.net/npm/jscl@0.8.2/jscl.min.js";var X="https://cdn.jsdelivr.net/npm/liquidjs@9.34.0/dist/liquid.browser.min.js";var Z="https://cdn.jsdelivr.net/npm/fengari-web@0.1.4/dist/fengari-web.min.js";var K="https://cdn.jsdelivr.net/npm/marked@4.0.12/marked.min.js";var G="https://cdn.jsdelivr.net/npm/mustache@4.2.0/mustache.min.js";var Y="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css",T="https://cdn.jsdelivr.net/npm/nunjucks@3.2.3/browser/",y="https://cdn.opalrb.com/opal/1.4.1/",ee="https://cdn.jsdelivr.net/npm/@chrisoakman/parinfer@3.13.1/parinfer.min.js";var g="https://cdn.jsdelivr.net/npm/prettier@2.5.1/",te="https://cdn.jsdelivr.net/npm/@prettier/plugin-php@0.18.0/standalone.js";var re="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js";var se="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css",B="https://cdn.jsdelivr.net/npm/riot@6.1.2/";var oe="https://cdn.jsdelivr.net/npm/sql-formatter@4.0.2/dist/sql-formatter.min.js",ne="https://cdn.jsdelivr.net/npm/sql.js@1.6.2/dist/",ie="https://cdn.jsdelivr.net/npm/@stencil/core@2.13.0/compiler/stencil.min.js";var m="https://cdn.jsdelivr.net/npm/tau-prolog@0.3.2/modules/",ae="https://cdn.jsdelivr.net/npm/twig@1.15.4/twig.min.js",pe="https://cdn.jsdelivr.net/npm/typescript@4.5.5/lib/typescript.min.js",ce="https://cdn.jsdelivr.net/npm/uniter@2.17.0/dist/uniter.js";var b="https://cdn.jsdelivr.net/npm/vue3-sfc-loader@0.8.4/dist/",le="https://cdn.jsdelivr.net/npm/wabt@1.0.26/index.js";var v=(e,t=!0)=>e.replace(/\\/g,t?"\\\\":"\\").replace(/`/g,"\\`").replace(/<\/script>/g,"<\\/script>");var kt=e=>!e?.startsWith("http")&&!e?.startsWith("data:"),M=(e,t=document.baseURI)=>kt(e)?new URL(e,t).href:e;var n=(e,t)=>({...t.customSettings[e]});var Tt={name:"lightningcss",title:"Lightning CSS",isPostcssPlugin:!1,compiler:{url:s+"lightningcss/lightningcss.js",factory:(e,t)=>(self.importScripts(t+"processor-lightningcss-compiler.a16968e2d490306bdcff76989e1868cc.js"),self.createLightningcssCompiler())},editor:"style"};var Bt={name:"postcss",title:"Processors:",isPostcssPlugin:!1,compiler:{url:s+"postcss/postcss.js",factory:(e,t)=>(self.importScripts(t+"processor-postcss-compiler.a3d6fb1a92bde99fe75aa117517a82b4.js"),self.createPostcssCompiler())},editor:"style",hidden:!0};var Mt={name:"autoprefixer",title:"Autoprefixer",isPostcssPlugin:!0,compiler:{url:s+"autoprefixer/autoprefixer.js",factory:e=>self.autoprefixer.autoprefixer({...n("autoprefixer",e)})},editor:"style"},Et={name:"cssnano",title:"cssnano",isPostcssPlugin:!0,compiler:{url:s+"cssnano/cssnano.js",factory:()=>{let e=self.cssnano.cssnanoPresetDefault().plugins,t=[];for(let o of e){let[i,a]=o;(typeof a>"u"||typeof a=="object"&&!a.exclude||typeof a=="boolean"&&a===!0)&&t.push(i(a))}return t}},editor:"style"};var qt={name:"postcssPresetEnv",title:"Preset Env",isPostcssPlugin:!0,compiler:{url:s+"postcss-preset-env/postcss-preset-env.js",factory:e=>self.postcssPresetEnv.postcssPresetEnv({autoprefixer:!1,...n("postcssPresetEnv",e)})},editor:"style"},Ft={name:"purgecss",title:"PurgeCSS",isPostcssPlugin:!0,needsHTML:!0,compiler:{url:s+"purgecss/purgecss.js",factory:(e,t,o)=>self.purgecss.purgecss({...n("purgecss",e),content:[{raw:`<template>${o.html}
<script>${e.script.content}<\/script></template>`,extension:"html"}]})},editor:"style"};var _t={name:"tokencss",title:"Token CSS",isPostcssPlugin:!0,compiler:{url:s+"tokencss/tokencss.js",factory:e=>{let t=n("tokencss",e);Object.keys(t).length===0&&(t.$schema="https://tokencss.com/schema@0.0.1",t.extends="@tokencss/core/preset");let o=(a,p)=>{let c=JSON.parse(JSON.stringify(a));return Object.keys(p).forEach(l=>{c[l]=typeof p[l]!="object"||Array.isArray(p[l])?p[l]:{...c[l],...p[l]}}),c},i=t.extends?.includes("@tokencss/core/preset")?o(self.tokencss.preset,t):t;return self.tokencss.tokencss({config:i})}},editor:"style"};var Rt={name:"unocss",title:"UnoCSS",isPostcssPlugin:!1,needsHTML:!0,compiler:{url:s+"unocss/unocss.js",factory:(e,t)=>(self.importScripts(t+"processor-unocss-compiler.a194f2252ca2cf42e47b4c5e1426170e.js"),self.createUnocssCompiler())},editor:"style"};var It={name:"windicss",title:"Windi CSS",isPostcssPlugin:!1,needsHTML:!0,compiler:{url:s+"windicss/windicss.js",factory:(e,t)=>(self.importScripts(t+"processor-windicss-compiler.4fc0b96428f4dfe950213c471d46c5f0.js"),self.createWindicssCompiler())},editor:"style"};var me={name:"asciidoc",title:"AsciiDoc",compiler:{url:A,factory:()=>{let e=window.Asciidoctor();return async(t,{config:o})=>e.convert(t,{...n("asciidoc",o)})}},extensions:["adoc","asciidoc","asc"],editor:"markup",preset:"asciidoctor.css"};var de=g+"standalone.min.js",r={babel:g+"parser-babel.js",glimmer:g+"parser-glimmer.js",html:g+"parser-html.js",markdown:g+"parser-markdown.js",postcss:g+"parser-postcss.js",php:te,pug:s+"prettier/parser-pug.js"};var ge={name:"babel",title:"Babel",parser:{name:"babel",pluginUrls:[r.babel,r.html]},compiler:{url:W,factory:()=>async(e,{config:t})=>window.Babel.transform(e,{filename:"script.tsx",presets:[["env",{modules:!1}],"typescript","react"],...n("babel",t)}).code},extensions:["es","babel"],editor:"script",editorLanguage:"javascript"};var ue={name:"css",title:"CSS",info:!1,parser:{name:"css",pluginUrls:[r.postcss]},compiler:{factory:()=>async e=>e},extensions:["css"],editor:"style"};var fe={name:"haml",title:"Haml",compiler:{url:s+"clientside-haml-js/haml.js",factory:(e,t)=>(self.importScripts(t+"lang-haml-compiler.211cfce6320ab3f9b29904b481cfed88.js"),self.createHamlCompiler())},extensions:["haml"],editor:"markup"};var ye={name:"html",title:"HTML",info:!1,parser:{name:"html",pluginUrls:[r.html]},compiler:{factory:()=>async e=>e},extensions:["html","htm"],editor:"markup"};var xe={name:"javascript",title:"JS",longTitle:"JavaScript",info:!1,parser:{name:"babel",pluginUrls:[r.babel,r.html]},compiler:{factory:()=>async e=>e},extensions:["js"],editor:"script"};var he={name:"jsx",title:"JSX",parser:{name:"babel",pluginUrls:[r.babel,r.html]},compiler:"typescript",extensions:["jsx"],editor:"script",editorLanguage:"javascript"};var je={name:"tsx",title:"TSX",parser:{name:"babel-ts",pluginUrls:[r.babel,r.html]},compiler:"typescript",extensions:["tsx"],editor:"script",editorLanguage:"typescript"};var be={name:"less",title:"Less",parser:{name:"less",pluginUrls:[r.postcss]},compiler:{url:s+"less/less.js",factory:()=>async(e,{config:t})=>(await window.less.render(e,{...n("less",t)})).css},extensions:["less"],editor:"style"};var ve={name:"markdown",title:"Markdown",parser:{name:"markdown",pluginUrls:[r.markdown,r.html]},compiler:{url:K,factory:()=>async(e,{config:t})=>window.marked.parse(e,{...n("markdown",t)})},extensions:["md","markdown","mdown","mkdn"],editor:"markup",preset:"github-markdown-css"};var Se=async(e,t,o,i={},a=self)=>new Promise(p=>{if(!e||!t||!o)return p(e||"");let c=async function(l){let d=l.data.payload;l.data.trigger==="compileInCompiler"&&d?.content===e&&d?.language===t&&(a.removeEventListener("message",c),p(d.compiled))};a.addEventListener("message",c),a.postMessage({type:"compileInCompiler",payload:{content:e,language:t,config:o,options:i}})});var At=async(e,{config:t,worker:o})=>new Promise(async i=>{if(!e)return i("");let[a,{default:p}]=await Promise.all([import(s+"mdx/mdx.js"),import(s+"remark-gfm/remark-gfm.js")]),c=(await a.compile(e,{remarkPlugins:[p],...n("mdx",t)})).value,d=(Pt=>Pt.replace(/, {[^}]*} = _components/g,"").replace(/const {[^:]*} = props.components[^;]*;/g,""))(c),U=`import React from "react";
import ReactDOM from "react-dom";
${v(d,!1)}
ReactDOM.render(<MDXContent />, document.body);
`,Ct=await Se(U,"jsx",t,{},o);i(`<script type="module">${Ct}<\/script>`)}),Le={name:"mdx",title:"MDX",parser:{name:"markdown",pluginUrls:[r.markdown,r.html]},compiler:{factory:()=>async e=>e,runOutsideWorker:At,compiledCodeLanguage:"javascript",imports:{"react/jsx-runtime":"https://esm.sh/react/jsx-runtime"}},extensions:["mdx"],editor:"markup",editorLanguage:"markdown"};var Ue={name:"pug",title:"Pug",parser:{name:"pug",pluginUrls:[r.pug]},compiler:{url:s+"pug/pug.min.js",factory:(e,t)=>(self.importScripts(t+"lang-pug-compiler.268e7c99ec5b5feb4dad65a364f81341.js"),self.createPugCompiler())},extensions:["pug","jade"],editor:"markup"};var we={name:"scss",title:"SCSS",parser:{name:"scss",pluginUrls:[r.postcss]},compiler:{url:s+"sass/sass.js",factory:(e,t)=>(self.importScripts(t+"lang-scss-compiler.c765688ec910b18dfb548ba8579e57e5.js"),self.createScssCompiler())},extensions:["scss"],editor:"style"};var Ce={name:"sass",title:"Sass",compiler:"scss",extensions:["sass"],editor:"style"};var Pe={name:"svelte",title:"Svelte",parser:{name:"html",pluginUrls:[r.html,r.babel]},compiler:{url:s+"svelte/svelte-compiler.min.js",factory:(e,t)=>(self.importScripts(t+"lang-svelte-compiler.80a1704c10aa090e5c4ba391e1efca20.js"),self.createSvelteCompiler())},extensions:["svelte"],editor:"script",editorLanguage:"html"};var ke={name:"stylus",title:"Stylus",compiler:{url:s+"stylus/stylus.min.js",factory:()=>async e=>window.stylus.render(e)},extensions:["styl"],editor:"style"};var h={target:"es2015",jsx:"react",allowUmdGlobalAccess:!0,esModuleInterop:!0},Te={name:"typescript",title:"TS",longTitle:"TypeScript",parser:{name:"babel-ts",pluginUrls:[r.babel,r.html]},compiler:{url:pe,factory:()=>async(e,{config:t,language:o})=>window.ts.transpile(e,{...h,...n("typescript",t),...n(o,t)})},extensions:["ts","typescript"],editor:"script"};var Ht=b+"vue3-sfc-loader.min.js",Be="https://cdn.jsdelivr.net/npm/vue@3",Me={name:"vue",title:"Vue 3",longTitle:"Vue 3 SFC",parser:{name:"html",pluginUrls:[r.html]},compiler:{factory:(e,t)=>(self.importScripts(t+"lang-vue-compiler.283401784b0a29c4678021716dc861c1.js"),self.createVueCompiler()),scripts:[Be,Ht],imports:{vue:Be+"/dist/vue.runtime.esm-browser.prod.js"}},extensions:["vue","vue3"],editor:"script",editorLanguage:"html"};var Nt=b+"vue2-sfc-loader.js",Ee="https://cdn.jsdelivr.net/npm/vue@2",qe={name:"vue2",title:"Vue 2",longTitle:"Vue 2 SFC",parser:{name:"html",pluginUrls:[r.html]},compiler:{factory:(e,t)=>(self.importScripts(t+"lang-vue-compiler.283401784b0a29c4678021716dc861c1.js"),self.createVue2Compiler()),scripts:[Ee,Nt],imports:{vue:Ee+"/dist/vue.runtime.esm-browser.prod.js"}},extensions:["vue2"],editor:"script",editorLanguage:"html"};var Fe={name:"stencil",title:"Stencil",parser:{name:"babel-ts",pluginUrls:[r.babel,r.html]},compiler:{url:ie,factory:()=>async(e,{config:t})=>(await window.stencil.transpile(e,{sourceMap:!1,target:"es2019",...n("stencil",t)})).code,types:{"@stencil/core":{url:s+"types/stencil-core.d.ts",declareAsModule:!1}}},extensions:["stencil.tsx"],editor:"script",editorLanguage:"typescript"};var _e={name:"coffeescript",title:"Coffee",longTitle:"CoffeeScript",compiler:{url:D,factory:()=>async(e,{config:t})=>window.CoffeeScript.compile(e,{bare:!0,...n("coffeescript",t)})},extensions:["coffee"],editor:"script"};var Re={name:"livescript",title:"LiveScript",compiler:{url:s+"livescript/livescript-min.js",factory:()=>async(e,{config:t})=>window.require("livescript").compile(e,{bare:!0,...n("livescript",t)}),scripts:[s+"livescript/prelude-browser-min.js"]},extensions:["ls"],editor:"script"};var Ie={name:"assemblyscript",title:"AS",longTitle:"AssemblyScript",parser:{name:"babel-ts",pluginUrls:[r.babel]},compiler:{factory:(e,t)=>(self.importScripts(t+"lang-assemblyscript-compiler.7a65e47fe4512f160d5ad45d051b0168.js"),self.createAssemblyscriptCompiler()),scripts:({baseUrl:e})=>[H,e+"lang-assemblyscript-script.193f545355c0ab8f8ed327d937818d36.js"],scriptType:"application/wasm-uint8",compiledCodeLanguage:"wat",types:{assemblyscript:{url:s+"types/assemblyscript.d.ts",declareAsModule:!1,autoload:!0}}},extensions:["as","ts"],editor:"script",editorLanguage:"typescript"};var Wt=w+"brython.min.js",zt=w+"brython_stdlib.js",Oe={name:"python",title:"Python",compiler:{factory:()=>async e=>e,scripts:({compiled:e,config:t})=>{let{autoloadStdlib:o,...i}=n("python",t),a=/^(?:from[ ]+(\S+)[ ]+)?import[ ]+(\S+)(?:[ ]+as[ ]+\S+)?[ ]*$/gm,p=o!==!1&&e.match(a)?[zt]:[],c=`window.addEventListener("load", () => {brython(${JSON.stringify(i)})})`,l="data:text/plain;base64,"+btoa(c),d=`window.addEventListener("load", () => {
        const content = __BRYTHON__.python_to_js(\`${v(e)}\`);
        parent.postMessage({type: "compiled", payload: {language: "python", content}}, "*");
      });`,U="data:text/plain;base64,"+btoa(d);return[Wt,...p,l,U]},scriptType:"text/python"},extensions:["py"],editor:"script"};var Dt=(e,t={})=>Array.from(new Set([...e.matchAll(new RegExp(/^\s*self\.\$require\("(\S+)"\);/gm))].map(o=>o[1]).map(o=>o.split("/")[0]).filter(o=>t.hasOwnProperty(o)||o!=="opal").map(o=>t[o]||`${y+o}.min.js`))),Ae={name:"ruby",title:"Ruby",compiler:{url:y+"opal.min.js",factory:()=>(importScripts(y+"opal-parser.min.js"),self.Opal.config.unsupported_features_severity="ignore",self.Opal.load("opal-parser"),async(e,{config:t})=>{let{autoloadStdlib:o,requireMap:i,...a}=n("ruby",t);return self.Opal.compile(e,a)}),scripts:({compiled:e,config:t})=>{let{autoloadStdlib:o,requireMap:i}=n("ruby",t),a=Dt(e,i),p=o!==!1?a:[];return[y+"opal.min.js",...p]}},extensions:["rb"],editor:"script"};var He={name:"php",title:"PHP",parser:{name:"php",pluginUrls:[r.php]},compiler:{factory:()=>async e=>(e=e.trim(),e.startsWith("<?php")&&(e=e.replace("<?php","/* <?php */"),e.endsWith("?>")&&(e=e.replace("?>","/* ?> */"))),e),scripts:[ce],deferScripts:!0,scriptType:"text/x-uniter-php",compiledCodeLanguage:"php"},extensions:["php"],editor:"script"};var Ne={name:"perl",title:"Perl",compiler:{factory:()=>async e=>e,scripts:({baseUrl:e})=>[s+"perlito/perlito5.min.js",e+"lang-perl-script.1f606d886aeb724510a595d45cbaf555.js"],scriptType:"text/perl"},extensions:["pl","pm"],editor:"script"};var $t=s+"lua-fmt/lua-fmt.js",We={name:"lua",title:"Lua",formatter:{factory:()=>(self.importScripts($t),async(e,t)=>({formatted:self.luaFmt.formatText(e),cursorOffset:t}))},compiler:{factory:()=>async e=>e,scripts:[Z],scriptType:"application/lua",compiledCodeLanguage:"lua"},extensions:["lua"],editor:"script"};var E=()=>{let e=ee;return self.importScripts(e),async t=>({formatted:window.parinfer.parenMode(t).text,cursorOffset:0})},ze={name:"commonlisp",title:"Lisp",longTitle:"Common Lisp",formatter:{factory:E},compiler:{factory:()=>async e=>e,scripts:({baseUrl:e})=>[Q,e+"lang-commonlisp-script.0c86dfce5f8509928ccf51ff666c7b4b.js"],scriptType:"text/commonlisp",compiledCodeLanguage:"commonlisp",inlineScript:`

    `},extensions:["lisp","common-lisp"],editor:"script",editorLanguage:"scheme"};var De={name:"scheme",title:"Scheme",formatter:{factory:E},compiler:{factory:()=>async e=>e,scripts:[z],scriptType:"text/biwascheme",compiledCodeLanguage:"scheme"},extensions:["scm"],editor:"script"};var $e={name:"solid",title:"Solid",parser:{name:"babel",pluginUrls:[r.babel,r.html]},compiler:{dependencies:["babel"],url:s+"babel-preset-solid/babel-preset-solid.js",factory:(e,t)=>(self.importScripts(t+"lang-solid-compiler.d94bb9811b03f637f8a55f20c131f21f.js"),self.createSolidCompiler()),types:{"solid-js":{url:s+"types/solid-js.d.ts",declareAsModule:!1}}},extensions:["solid.jsx"],editor:"script",editorLanguage:"javascript"};var Je={name:"solid.tsx",title:"Solid (TS)",parser:{name:"babel",pluginUrls:[r.babel,r.html]},compiler:"solid",extensions:["solid.tsx"],editor:"script",editorLanguage:"typescript"};var Ve={name:"pyodide",title:"Pyodide",longTitle:"Python (Pyodide)",compiler:{factory:()=>async e=>e,scripts:({baseUrl:e})=>[e+"lang-python-pyodide-script.12c7bd5206632003e3031fba49ea13a7.js"],liveReload:!0,scriptType:"text/python",compiledCodeLanguage:"python"},extensions:["py3"],editor:"script",editorLanguage:"python",largeDownload:!0};var Qe={name:"liquid",title:"Liquid",parser:{name:"html",pluginUrls:[r.html]},compiler:{url:X,factory:(e,t)=>(self.importScripts(t+"lang-liquid-compiler.385aaf468ec3e32b3e3347fad0e9eaff.js"),self.createLiquidCompiler())},extensions:["liquid","liquidjs"],editor:"markup",editorLanguage:"html"};var Xe={name:"ejs",title:"EJS",parser:{name:"html",pluginUrls:[r.html]},compiler:{url:J,factory:(e,t)=>(self.importScripts(t+"lang-ejs-compiler.e7fe0830aa69a35259b11bef9ed1e73e.js"),self.createEjsCompiler())},extensions:["ejs"],editor:"markup",editorLanguage:"html"};var Jt=P+"handlebars.min.js",ri=P+"handlebars.runtime.min.js",Ze={name:"handlebars",title:"Handlebars",parser:{name:"glimmer",pluginUrls:[r.glimmer]},compiler:{url:Jt,factory:(e,t)=>(self.importScripts(t+"lang-handlebars-compiler.c9531e926f086be0b31cd35bea117628.js"),self.createHandlebarsCompiler())},extensions:["hbs","handlebars"],editor:"markup",editorLanguage:"html"};var Ke={name:"dot",title:"doT",parser:{name:"html",pluginUrls:[r.html]},compiler:{url:$,factory:(e,t)=>(self.importScripts(t+"lang-dot-compiler.94002b0703f1ced78c28a6f427bf0e29.js"),self.createDotCompiler())},extensions:["dot"],editor:"markup",editorLanguage:"html"};var Vt=T+"nunjucks.min.js",gi=T+"nunjucks-slim.min.js",Ge={name:"nunjucks",title:"Nunjucks",parser:{name:"html",pluginUrls:[r.html]},compiler:{url:Vt,factory:(e,t)=>(self.importScripts(t+"lang-nunjucks-compiler.5149959cea55783109ad14e832859337.js"),self.createNunjucksCompiler())},extensions:["njk"],editor:"markup",editorLanguage:"html"};var Ye={name:"go",title:"Go",formatter:{factory:()=>{let e=f+"/index.js";return importScripts(e),async t=>({formatted:await window.go2js.format(t,f),cursorOffset:0})}},compiler:{url:f+"/index.js",factory:()=>async e=>{if(!e)return"";try{return await window.go2js.compile(e,f)}catch(t){return console.error(t),""}}},extensions:["go","golang"],editor:"script"};var Qt=async(e,{baseUrl:t,language:o})=>{let{rescriptCompiler:i}=await import(t+"lang-rescript-compiler-esm.7a2adc4368f0026b3379b346820f1853.js");return i(e,{baseUrl:t,language:o})},q=(e,t)=>(importScripts(e+"lang-rescript-formatter.af3215d3b04feb7226bf04f3c9453388.js"),self.createRescriptFormatter(e,t)),et={name:"rescript",title:"ReScript",formatter:{factory:q},compiler:{factory:()=>async e=>e,runOutsideWorker:Qt,scriptType:"module"},extensions:["res","resi"],editor:"script",editorLanguage:"javascript"};var tt={name:"reason",title:"Reason",formatter:{factory:q},compiler:"rescript",extensions:["re","rei"],editor:"script",editorLanguage:"javascript"};var rt={name:"ocaml",title:"OCaml",compiler:"rescript",extensions:["ml","mli"],editor:"script",editorLanguage:"javascript"};var Xt=s+"wast-refmt/wast-refmt.js",Zt="application/wasm-uint8",st={name:"wat",title:"WAT",longTitle:"WebAssembly Text",formatter:{factory:()=>(importScripts(Xt),async e=>{let t=e;try{t=self.wastRefmt.format(e)}catch(o){console.warn("failed parsing WAT",o)}return{formatted:t,cursorOffset:0}})},compiler:{url:le,factory:(e,t)=>(self.importScripts(t+"lang-wat-compiler.4fddb11ffae864668523a5b37d2a5712.js"),self.createWatCompiler()),scripts:({baseUrl:e})=>[e+"lang-wat-script.e0ed8bc039ea672c1eaabbe994b672ef.js"],scriptType:Zt,compiledCodeLanguage:"Binary"},extensions:["wat","wast","webassembly","wasm"],editor:"script"};var Kt=B+"riot+compiler.min.js",Gt=B+"riot.min.js",ot={name:"riot",title:"Riot.js",parser:{name:"html",pluginUrls:[r.html,r.babel]},compiler:{url:Kt,factory:(e,t)=>(self.importScripts(t+"lang-riot-compiler.3a07307fa35830345b09d74b22af7a6d.js"),self.createRiotCompiler()),scripts:[Gt],scriptType:"module"},extensions:["riot","riotjs"],editor:"script",editorLanguage:"html"};var Yt="application/json",nt={name:"sql",title:"SQL",formatter:{factory:()=>(importScripts(oe),async e=>({formatted:await self.sqlFormatter.format(e,{linesBetweenQueries:2}),cursorOffset:0}))},compiler:{url:ne+"sql-wasm.min.js",factory:(e,t)=>(self.importScripts(t+"lang-sql-compiler.7a6736b65b9bfe968279cd988facfcaf.js"),self.createSqlCompiler()),scripts:({baseUrl:e})=>[e+"lang-sql-script.567145561f54bf72aaf9444dc3ccd838.js"],scriptType:Yt,compiledCodeLanguage:"json"},extensions:["sql","sqlite","sqlite3"],editor:"script"};var j=s+"react-native-web/react-native-web.js",it={name:"react-native",title:"RN",longTitle:"React Native",parser:{name:"babel",pluginUrls:[r.babel,r.html]},compiler:{dependencies:["typescript"],factory:()=>async(e,{config:t,language:o})=>window.ts.transpile(e,{...h,...n("typescript",t),...n(o,t)}),imports:{react:j,"react-native":j}},extensions:["react-native.jsx"],editor:"script",editorLanguage:"javascript"};var at={name:"react-native-tsx",title:"RN (TSX)",longTitle:"React Native (TSX)",parser:{name:"babel",pluginUrls:[r.babel,r.html]},compiler:{dependencies:["typescript"],factory:()=>async(e,{config:t,language:o})=>window.ts.transpile(e,{...h,...n("typescript",t),...n(o,t)}),imports:{react:j,"react-native":j}},extensions:["react-native.tsx"],editor:"script",editorLanguage:"typescript"};var pt={name:"blockly",title:"Blockly",compiler:{factory:()=>async(e,{options:t})=>t?.blockly?.js||""},extensions:["blockly.xml","xml"],editor:"script",editorLanguage:"xml"};var ct={name:"twig",title:"Twig",parser:{name:"html",pluginUrls:[r.html]},compiler:{url:ae,factory:(e,t)=>(self.importScripts(t+"lang-twig-compiler.c4dcc5ecde65e18f52f4714c74e5152f.js"),self.createTwigCompiler())},extensions:["twig"],editor:"markup",editorLanguage:"html"};var er=N+"compiler.min.js",lt={name:"astro",title:"Astro",parser:{name:"html",pluginUrls:[r.html,r.babel]},compiler:{url:er,factory:(e,t)=>(self.importScripts(t+"lang-astro-compiler.efbee0ca048d750ed787834550930af1.js"),self.createAstroCompiler())},extensions:["astro"],editor:"markup"};var mt={name:"malina",title:"Malina.js",parser:{name:"html",pluginUrls:[r.html,r.babel]},compiler:{factory:(e,t)=>(self.importScripts(t+"lang-malina-compiler.394dd7793a519c634eedca0796c1d8e1.js"),self.createMalinaCompiler())},extensions:["xht"],editor:"script",editorLanguage:"html"};var tr=s+"jscpp/JSCPP.es5.min.js",dt={name:"cpp",title:"C++",compiler:{factory:()=>async e=>e,scripts:({baseUrl:e})=>[tr,e+"lang-cpp-script.6362a5043199fe5dcbc88fdce0e72cea.js"],scriptType:"text/cpp",compiledCodeLanguage:"cpp"},extensions:["cpp","c","C","cp","cxx","c++","cppm","ixx","ii","hpp","h"],editor:"script"};var gt={name:"julia",title:"Julia",compiler:{factory:()=>async e=>e,scripts:({baseUrl:e})=>[e+"lang-julia-script.3ae0195ce71029e103fcc0e2905190ea.js"],liveReload:!0,scriptType:"text/julia",compiledCodeLanguage:"julia"},extensions:["jl"],editor:"script",largeDownload:!0};var ut={name:"clang",title:"Clang",longTitle:"C/C++ (Clang)",compiler:{factory:()=>async e=>e,scripts:({baseUrl:e})=>[e+"lang-cpp-clang-script.ba3e5873337a6d7009f3e3e4fa4ef681.js"],scriptType:"text/cpp",compiledCodeLanguage:"cpp",liveReload:!0},extensions:["clang.cpp","clang","cpp","c","C","cp","cxx","c++","cppm","ixx","ii","hpp","h"],editor:"script",editorLanguage:"cpp",largeDownload:!0};var ft={name:"tcl",title:"Tcl",compiler:{factory:()=>async e=>e,scripts:({baseUrl:e})=>[re,e+"lang-tcl-script.086640745f754791db8a40d8dd8ce18e.js"],scriptType:"text/tcl",compiledCodeLanguage:"tcl"},extensions:["tcl"],editor:"script"};var yt={name:"prolog",title:"Prolog",compiler:{factory:()=>async e=>e,scripts:({baseUrl:e})=>[m+"core.js",m+"charsio.js",m+"dom.js",m+"format.js",m+"js.js",m+"lists.js",m+"os.js",m+"promises.js",m+"random.js",m+"statistics.js",e+"lang-prolog-script.2780539e5f2bc8edb4aedd5cf57143e7.js"],scriptType:"text/prolog",compiledCodeLanguage:"prolog"},extensions:["prolog.pl","prolog"],editor:"script"};var xt={name:"clio",title:"Clio",compiler:{url:C+"compile.js",factory:(e,t)=>(self.importScripts(t+"lang-clio-compiler.7cc47ec9be8439cc2865fddbc20da58c.js"),self.createClioCompiler()),scripts:[C+"exec.js"]},extensions:["clio"],editor:"script",editorLanguage:"coffeescript"};var ht={name:"richtext",title:"Rich Text",longTitle:"Rich Text Editor",compiler:{factory:()=>async(e,{config:t})=>t.markup.content||"",styles:["quill.8e9d74c74d2c8aaa5d849678c215cf7e.css"]},extensions:["rte","rte.html","rich"],editor:"markup",editorLanguage:"html"};var rr=async(e,{baseUrl:t,config:o})=>{let{diagramsCompiler:i}=await import(t+"lang-diagrams-compiler-esm.d1a1cfaf316ec3b7cbe1b41feb1ff353.js");return i(e,{config:o})},jt={name:"diagrams",title:"Diagrams",parser:{name:"html",pluginUrls:[r.html]},compiler:{factory:()=>async e=>e||"",runOutsideWorker:rr},extensions:["diagrams","diagram","graph","plt"],editor:"markup",editorLanguage:"html"};var bt={name:"imba",title:"Imba",compiler:{url:k+"compiler.js",factory:(e,t)=>(self.importScripts(t+"lang-imba-compiler.9f5458f74b381aed3017dcc9ea1d8998.js"),self.createImbaCompiler()),imports:{imba:k+"imba.mjs"}},extensions:["imba"],editor:"script"};var vt={name:"mustache",title:"Mustache",parser:{name:"glimmer",pluginUrls:[r.glimmer]},compiler:{url:G,factory:(e,t)=>(self.importScripts(t+"lang-mustache-compiler.0a30a4a5874d6b24636f04625617fe55.js"),self.createMustacheCompiler())},extensions:["mustache"],editor:"markup",editorLanguage:"html"};var St={name:"art-template",title:"art",longTitle:"art-template",parser:{name:"html",pluginUrls:[r.html]},compiler:{url:O,factory:(e,t)=>(self.importScripts(t+"lang-art-template-compiler.f791a36ad9d8acf970b79953b79fdbd8.js"),self.createArtTemplateCompiler())},extensions:["art","art-template"],editor:"markup",editorLanguage:"html"};var x=[ye,ve,Le,lt,Ue,me,fe,vt,Ze,Xe,Ge,Qe,Ke,ct,St,jt,ht,ue,we,Ce,be,ke,xe,ge,Te,he,je,it,at,Me,qe,Pe,Fe,$e,Je,ot,mt,_e,Re,xt,bt,et,tt,rt,Oe,Ve,Ae,Ye,He,dt,ut,Ne,We,gt,De,ze,ft,Ie,st,nt,yt,pt];var bc=[{id:"normalize.css",name:"Normalize.css",url:Y},{id:"reset-css",name:"CSS reset",url:se},{id:"github-markdown-css",name:"github-markdown-css",url:V},{id:"asciidoctor.css",name:"Asciidoctor CSS",url:s+"asciidoctor.css/asciidoctor.css"}];var F=self;self.window=self;var L,_={},Lt={},S={},sr=()=>{importScripts(M(de,L))},R=e=>x.find(t=>t.name===e)?.parser,I=e=>x.find(t=>t.name===e)?.formatter,or=e=>{try{e.forEach(t=>{R(t)!=null?Ut(t):I(t)!=null&&wt(t)})}catch{console.warn("Failed to load prettier")}};function Ut(e){if(self.prettier||sr(),e in _)return _[e];let t=R(e);if(t)return self.prettierPlugins||(self.prettierPlugins={}),t.plugins=t.pluginUrls.map(o=>{let i=M(o,L);if(Lt[i])return!0;try{return importScripts(i),Lt[i]=!0,!prettierPlugins.pug&&self.pluginPug&&(prettierPlugins.pug=self.pluginPug),!0}catch{return console.warn("Failed to load prettier parser for language: "+e),!1}}).filter(Boolean),t.plugins.length>0&&(_[e]=t),t}var wt=e=>{if(e in S)return S[e];let t=I(e);if(t)return S[e]=t.factory(L,e),S[e]},nr=async(e,t,o,i)=>{let a={formatted:t,cursorOffset:o};if(R(e)!=null){let p=Ut(e),c={useTabs:i.useTabs??u.useTabs,tabWidth:i.tabSize??u.tabSize,semi:i.semicolons??u.semicolons,singleQuote:i.singleQuote??u.singleQuote,trailingComma:i.trailingComma===!1?"none":"all"};return self.prettier.formatWithCursor(t,{parser:p?.name,plugins:prettierPlugins,cursorOffset:o,...c})||a}return I(e)!=null&&await wt(e)?.(t,o)||a};F.addEventListener("message",async e=>{let t=e.data;if(t.type==="init"&&(L=t.baseUrl),t.type==="load"){let o=t.payload;or(o)}if(t.type==="format"){let{language:o,value:i,cursorOffset:a,formatterConfig:p}=t.payload;try{let c=await nr(o,i,a,p),l={type:"formatted",payload:{language:o,value:i,cursorOffset:a,formatted:c.formatted,formattedCursorOffset:c.cursorOffset}};F.postMessage(l)}catch(c){let l={type:"format-failed",payload:{language:o,value:i,cursorOffset:a,error:c.message}};F.postMessage(l)}}},!1);
//# sourceMappingURL=format.worker.js.map
})();