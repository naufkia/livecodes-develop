"use strict";(()=>{var i=(e,t=!0)=>e.replace(/\\/g,t?"\\\\":"\\").replace(/`/g,"\\`").replace(/<\/script>/g,"<\\/script>");var c=(e,t)=>({...t.customSettings[e]});var p="https://cdn.jsdelivr.net/npm/@live-codes/browser-compilers@0.5.13/dist/";var s="https://cdn.jsdelivr.net/npm/handlebars@4.7.7/dist/";var n="https://cdn.jsdelivr.net/npm/prettier@2.5.1/",l="https://cdn.jsdelivr.net/npm/@prettier/plugin-php@0.18.0/standalone.js";var U=n+"standalone.min.js",a={babel:n+"parser-babel.js",glimmer:n+"parser-glimmer.js",html:n+"parser-html.js",markdown:n+"parser-markdown.js",postcss:n+"parser-postcss.js",php:l,pug:p+"prettier/parser-pug.js"};var h=s+"handlebars.min.js",d=s+"handlebars.runtime.min.js",S={name:"handlebars",title:"Handlebars",parser:{name:"glimmer",pluginUrls:[a.glimmer]},compiler:{url:h,factory:(e,t)=>(self.importScripts(t+"lang-handlebars-compiler.c9531e926f086be0b31cd35bea117628.js"),self.createHandlebarsCompiler())},extensions:["hbs","handlebars"],editor:"markup",editorLanguage:"html"};self.createHandlebarsCompiler=()=>async(e,{config:t})=>{let r=c("handlebars",t),o=t.customSettings.template?.data||{};if(t.customSettings.template?.prerender!==!1)return self.Handlebars.compile(e,r)(o);let m=self.Handlebars.precompile(e,r);return`<!-- ... compiling ... -->

<script src="${d}"><\/script>
<script>
window.addEventListener("load", () => {
const template = Handlebars.template(${m});
const content = template({
  ...${i(JSON.stringify(o||{}))},
  ...window.livecodes?.templateData,
});
document.body.innerHTML += content
parent.postMessage({type: 'compiled', payload: {language: 'handlebars', content}}, '*');
});
<\/script>
`};})();
//# sourceMappingURL=lang-handlebars-compiler.js.map
