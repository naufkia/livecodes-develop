"use strict";(()=>{var o=(e,t=!0)=>e.replace(/\\/g,t?"\\\\":"\\").replace(/`/g,"\\`").replace(/<\/script>/g,"<\\/script>");var i=(e,t)=>({...t.customSettings[e]});var c="https://cdn.jsdelivr.net/npm/@live-codes/browser-compilers@0.5.13/dist/";var s="https://cdn.jsdelivr.net/npm/nunjucks@3.2.3/browser/";var n="https://cdn.jsdelivr.net/npm/prettier@2.5.1/",p="https://cdn.jsdelivr.net/npm/@prettier/plugin-php@0.18.0/standalone.js";var U=n+"standalone.min.js",l={babel:n+"parser-babel.js",glimmer:n+"parser-glimmer.js",html:n+"parser-html.js",markdown:n+"parser-markdown.js",postcss:n+"parser-postcss.js",php:p,pug:c+"prettier/parser-pug.js"};var u=s+"nunjucks.min.js",a=s+"nunjucks-slim.min.js",S={name:"nunjucks",title:"Nunjucks",parser:{name:"html",pluginUrls:[l.html]},compiler:{url:u,factory:(e,t)=>(self.importScripts(t+"lang-nunjucks-compiler.5149959cea55783109ad14e832859337.js"),self.createNunjucksCompiler())},extensions:["njk"],editor:"markup",editorLanguage:"html"};self.createNunjucksCompiler=()=>async(e,{config:t})=>{let d=i("nunjucks",t);self.nunjucks.configure(d);let r=t.customSettings.template?.data||{};if(t.customSettings.template?.prerender!==!1)return self.nunjucks.compile(e).render(r);let m=self.nunjucks.precompileString(e,{name:"template"});return`<!-- ... compiling ... -->

<script src="${a}"><\/script>
<script>
window.addEventListener("load", () => {
${m}
const content = nunjucks.render('template', {
  ...${o(JSON.stringify(r||{}))},
  ...window.livecodes?.templateData,
});
document.body.innerHTML += content
parent.postMessage({type: 'compiled', payload: {language: 'nunjucks', content}}, '*');
});
<\/script>
`};})();
//# sourceMappingURL=lang-nunjucks-compiler.js.map
