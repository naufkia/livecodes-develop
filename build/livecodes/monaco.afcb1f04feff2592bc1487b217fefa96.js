var Re=Object.create;var Y=Object.defineProperty;var Oe=Object.getOwnPropertyDescriptor;var $e=Object.getOwnPropertyNames;var _e=Object.getPrototypeOf,Fe=Object.prototype.hasOwnProperty;var De=(n,a)=>()=>(a||n((a={exports:{}}).exports,a),a.exports);var We=(n,a,x,j)=>{if(a&&typeof a=="object"||typeof a=="function")for(let E of $e(a))!Fe.call(n,E)&&E!==x&&Y(n,E,{get:()=>a[E],enumerable:!(j=Oe(a,E))||j.enumerable});return n};var Ne=(n,a,x)=>(x=n!=null?Re(_e(n)):{},We(a||!n||!n.__esModule?Y(x,"default",{value:n,enumerable:!0}):x,n));var se=De((Ht,F)=>{var re=function(){var n=String.fromCharCode,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",x="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",j={};function E(r,i){if(!j[r]){j[r]={};for(var m=0;m<r.length;m++)j[r][r.charAt(m)]=m}return j[r][i]}var S={compressToBase64:function(r){if(r==null)return"";var i=S._compress(r,6,function(m){return a.charAt(m)});switch(i.length%4){default:case 0:return i;case 1:return i+"===";case 2:return i+"==";case 3:return i+"="}},decompressFromBase64:function(r){return r==null?"":r==""?null:S._decompress(r.length,32,function(i){return E(a,r.charAt(i))})},compressToUTF16:function(r){return r==null?"":S._compress(r,15,function(i){return n(i+32)})+" "},decompressFromUTF16:function(r){return r==null?"":r==""?null:S._decompress(r.length,16384,function(i){return r.charCodeAt(i)-32})},compressToUint8Array:function(r){for(var i=S.compress(r),m=new Uint8Array(i.length*2),c=0,s=i.length;c<s;c++){var b=i.charCodeAt(c);m[c*2]=b>>>8,m[c*2+1]=b%256}return m},decompressFromUint8Array:function(r){if(r==null)return S.decompress(r);for(var i=new Array(r.length/2),m=0,c=i.length;m<c;m++)i[m]=r[m*2]*256+r[m*2+1];var s=[];return i.forEach(function(b){s.push(n(b))}),S.decompress(s.join(""))},compressToEncodedURIComponent:function(r){return r==null?"":S._compress(r,6,function(i){return x.charAt(i)})},decompressFromEncodedURIComponent:function(r){return r==null?"":r==""?null:(r=r.replace(/ /g,"+"),S._decompress(r.length,32,function(i){return E(x,r.charAt(i))}))},compress:function(r){return S._compress(r,16,function(i){return n(i)})},_compress:function(r,i,m){if(r==null)return"";var c,s,b={},k={},w="",L="",f="",M=2,H=3,d=2,g=[],o=0,t=0,T;for(T=0;T<r.length;T+=1)if(w=r.charAt(T),Object.prototype.hasOwnProperty.call(b,w)||(b[w]=H++,k[w]=!0),L=f+w,Object.prototype.hasOwnProperty.call(b,L))f=L;else{if(Object.prototype.hasOwnProperty.call(k,f)){if(f.charCodeAt(0)<256){for(c=0;c<d;c++)o=o<<1,t==i-1?(t=0,g.push(m(o)),o=0):t++;for(s=f.charCodeAt(0),c=0;c<8;c++)o=o<<1|s&1,t==i-1?(t=0,g.push(m(o)),o=0):t++,s=s>>1}else{for(s=1,c=0;c<d;c++)o=o<<1|s,t==i-1?(t=0,g.push(m(o)),o=0):t++,s=0;for(s=f.charCodeAt(0),c=0;c<16;c++)o=o<<1|s&1,t==i-1?(t=0,g.push(m(o)),o=0):t++,s=s>>1}M--,M==0&&(M=Math.pow(2,d),d++),delete k[f]}else for(s=b[f],c=0;c<d;c++)o=o<<1|s&1,t==i-1?(t=0,g.push(m(o)),o=0):t++,s=s>>1;M--,M==0&&(M=Math.pow(2,d),d++),b[L]=H++,f=String(w)}if(f!==""){if(Object.prototype.hasOwnProperty.call(k,f)){if(f.charCodeAt(0)<256){for(c=0;c<d;c++)o=o<<1,t==i-1?(t=0,g.push(m(o)),o=0):t++;for(s=f.charCodeAt(0),c=0;c<8;c++)o=o<<1|s&1,t==i-1?(t=0,g.push(m(o)),o=0):t++,s=s>>1}else{for(s=1,c=0;c<d;c++)o=o<<1|s,t==i-1?(t=0,g.push(m(o)),o=0):t++,s=0;for(s=f.charCodeAt(0),c=0;c<16;c++)o=o<<1|s&1,t==i-1?(t=0,g.push(m(o)),o=0):t++,s=s>>1}M--,M==0&&(M=Math.pow(2,d),d++),delete k[f]}else for(s=b[f],c=0;c<d;c++)o=o<<1|s&1,t==i-1?(t=0,g.push(m(o)),o=0):t++,s=s>>1;M--,M==0&&(M=Math.pow(2,d),d++)}for(s=2,c=0;c<d;c++)o=o<<1|s&1,t==i-1?(t=0,g.push(m(o)),o=0):t++,s=s>>1;for(;;)if(o=o<<1,t==i-1){g.push(m(o));break}else t++;return g.join("")},decompress:function(r){return r==null?"":r==""?null:S._decompress(r.length,32768,function(i){return r.charCodeAt(i)})},_decompress:function(r,i,m){var c=[],s,b=4,k=4,w=3,L="",f=[],M,H,d,g,o,t,T,l={val:m(0),position:i,index:1};for(M=0;M<3;M+=1)c[M]=M;for(d=0,o=Math.pow(2,2),t=1;t!=o;)g=l.val&l.position,l.position>>=1,l.position==0&&(l.position=i,l.val=m(l.index++)),d|=(g>0?1:0)*t,t<<=1;switch(s=d){case 0:for(d=0,o=Math.pow(2,8),t=1;t!=o;)g=l.val&l.position,l.position>>=1,l.position==0&&(l.position=i,l.val=m(l.index++)),d|=(g>0?1:0)*t,t<<=1;T=n(d);break;case 1:for(d=0,o=Math.pow(2,16),t=1;t!=o;)g=l.val&l.position,l.position>>=1,l.position==0&&(l.position=i,l.val=m(l.index++)),d|=(g>0?1:0)*t,t<<=1;T=n(d);break;case 2:return""}for(c[3]=T,H=T,f.push(T);;){if(l.index>r)return"";for(d=0,o=Math.pow(2,w),t=1;t!=o;)g=l.val&l.position,l.position>>=1,l.position==0&&(l.position=i,l.val=m(l.index++)),d|=(g>0?1:0)*t,t<<=1;switch(T=d){case 0:for(d=0,o=Math.pow(2,8),t=1;t!=o;)g=l.val&l.position,l.position>>=1,l.position==0&&(l.position=i,l.val=m(l.index++)),d|=(g>0?1:0)*t,t<<=1;c[k++]=n(d),T=k-1,b--;break;case 1:for(d=0,o=Math.pow(2,16),t=1;t!=o;)g=l.val&l.position,l.position>>=1,l.position==0&&(l.position=i,l.val=m(l.index++)),d|=(g>0?1:0)*t,t<<=1;c[k++]=n(d),T=k-1,b--;break;case 2:return f.join("")}if(b==0&&(b=Math.pow(2,w),w++),c[T])L=c[T];else if(T===k)L=H+H.charAt(0);else return null;f.push(L),c[k++]=H+L.charAt(0),b--,H=L,b==0&&(b=Math.pow(2,w),w++)}}};return S}();typeof define=="function"&&define.amd?define(function(){return re}):typeof F<"u"&&F!=null&&(F.exports=re)});var ee=()=>String(Math.random())+"-"+Date.now().toFixed();var O=(n,a)=>new Promise((x,j)=>{if(a&&window[a])return x(window[a]);let E=document.createElement("script");E.src=n,E.async=!0;let S=()=>{E.removeEventListener("load",r),E.removeEventListener("error",i)},r=()=>{if(S(),!a)return x("loaded: "+n);let m=setInterval(()=>{if(window[a])return clearInterval(m),x(window[a])},5)},i=()=>{S(),j("failed to load: "+n)};E.addEventListener("load",r),E.addEventListener("error",i),document.head.appendChild(E)});var N=n=>n.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm,"$1");var te="https://cdn.jsdelivr.net/npm/emmet-monaco-es@5.0.0/dist/emmet-monaco.min.js";var oe="https://unpkg.com/monaco-emacs@0.3.0/dist/monaco-emacs.js",ne="https://unpkg.com/monaco-vim@0.3.5/dist/monaco-vim.js";var B=(n=location.origin)=>Boolean(n&&(n.endsWith("livecodes.io")||n.endsWith("livecodes.pages.dev")||n.endsWith("localpen.io")||n.endsWith("localpen.pages.dev")||n.startsWith("http://127.0.0.1")||n.startsWith("http://localhost")));var J=Ne(se());var z={getModuleUrl:(n,{isModule:a=!0,defaultCDN:x="jspm"}={})=>{let j=S=>{let r=a&&S.startsWith("unpkg:")?"?module":"";for(let i of Ke){let[m,c]=i;if(m.test(S))return S.replace(m,c)+r}return null},E=j(n)||j(x+":"+n);return E||(a?"https://jspm.dev/"+n:"https://cdn.jsdelivr.net/npm/"+n)},getModuleInfoUrl:n=>`https://api.npms.io/v2/search?q=${n}&size=1`},Ke=[[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(jsdelivr.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(esm.run:)(.+)/i,"https://esm.run/$2"],[/^(esm.sh:)(.+)/i,"https://esm.sh/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(github:)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://raw.githack.com/$2/$3/$4"],[/^(github:)([^\/]+\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://raw.githack.com/$2/$3"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:)([^\/]+\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://raw.githack.com/$2/$3"]];var ie="https://dpaste.com/",Ve="https://dpaste.com/api/v2/",ce="https://api2.livecodes.io/share",ae={getProject:async n=>{try{let a=await fetch(ie+n+".txt");return a.ok?JSON.parse(await a.text()):{}}catch{return{}}},shareProject:async n=>{try{let a=await fetch(Ve,{method:"POST",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded","User-Agent":"LiveCodes / https://livecodes.io/"},body:`content=${encodeURIComponent(JSON.stringify(n))}&title=${encodeURIComponent(n.title||"")}&syntax=json&expiry_days=365`});return a.ok?(await a.text()).replace(ie,""):""}catch{return""}}},Ge={getProject:async n=>{if(n.length<11)return ae.getProject(n);if(!B())return{};try{let a=await fetch(ce+"?id="+n);return a.ok?JSON.parse(await a.text()):{}}catch{return{}}},shareProject:async n=>{if(!B())return"";try{let a=await fetch(ce,{method:"POST",mode:"cors",body:JSON.stringify(n)});return a.ok?a.text():""}catch{return""}}},ro=B()?Ge:ae;var Ze=/(import\s+?(?:(?:(?:[\w*\s{},\$]*)\s+from\s+?)|))((?:".*?")|(?:'.*?'))([\s]*?(?:;|$|))/g,Qe=/(import\s*?\(\s*?((?:".*?")|(?:'.*?'))\s*?\))/g,le=n=>[...N(n).matchAll(new RegExp(Ze)),...N(n).matchAll(new RegExp(Qe))].map(a=>a[2].replace(/"/g,"").replace(/'/g,""));var pe=()=>document.querySelector("#editor-mode");var me=!1,I={},u,ko=async n=>{let{container:a,baseUrl:x,readonly:j,theme:E,isEmbed:S,getLanguageExtension:r,mapLanguage:i,getFormatterConfig:m,getFontFamily:c}=n;if(!a)throw new Error("editor container not found");let s,b=e=>({fontFamily:c(e.fontFamily),fontSize:e.fontSize||(S?12:14),insertSpaces:!e.useTabs,detectIndentation:!1,tabSize:e.tabSize,lineNumbers:e.lineNumbers?"on":"off",wordWrap:e.wordWrap?"on":"off",autoClosingBrackets:e.closeBrackets?"always":"never",autoClosingQuotes:e.closeBrackets?"always":"never",autoClosingDelete:e.closeBrackets?"always":"never"}),k=b(n),w=e=>e==="livescript"?"coffeescript":["rescript","reason","ocaml"].includes(e)?"csharp":i(e),L=x+"vendor/monaco-editor/v0.32.1";try{window.monaco=window.monaco||(await import(`${L}/monaco-editor.js`)).monaco,u=window.monaco}catch{throw new Error("Failed to load monaco editor")}u.editor.defineTheme("custom-vs-light",{base:"vs",inherit:!0,rules:[{token:"comment",fontStyle:"italic"}],colors:{}}),u.editor.defineTheme("custom-vs-dark",{base:"vs-dark",inherit:!0,rules:[{token:"comment",fontStyle:"italic"}],colors:{}});let f={theme:"custom-vs-"+E,fontLigatures:!0,formatOnType:!1,lineNumbersMinChars:3,minimap:{enabled:!1},scrollbar:{useShadows:!1},mouseWheelZoom:!0,automaticLayout:!0,readOnly:j},M={...f,scrollBeyondLastLine:!1,contextmenu:!1},H={...f,scrollBeyondLastLine:!1},d={...f,glyphMargin:!0,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollbar:{vertical:"auto"},scrollBeyondLastLine:!1,contextmenu:!1},g={...d},o=n.editorId,t=o==="console"?d:o==="compiled"?H:o==="embed"?g:n.mode==="codeblock"?M:f;if(!document.head.querySelector("#__livecodes__monaco-styles")){let e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href",`${L}/monaco-editor.css`),e.id="__livecodes__monaco-styles",document.head.appendChild(e)}window.MonacoEnvironment={getWorkerUrl(e,p){return p==="json"?`${L}/json.worker.js`:p==="css"?`${L}/css.worker.js`:p==="scss"?`${L}/css.worker.js`:p==="sass"?`${L}/css.worker.js`:p==="less"?`${L}/css.worker.js`:p==="html"?`${L}/html.worker.js`:p==="typescript"||p==="javascript"?`${L}/ts.worker.js`:`${L}/editor.worker.js`}};let T=()=>{let e={jsx:u.languages.typescript.JsxEmit.Preserve,allowNonTsExtensions:!0,allowJs:!1,target:u.languages.typescript.ScriptTarget.Latest,experimentalDecorators:!0,allowSyntheticDefaultImports:!0,lib:["esnext","dom"],module:u.languages.typescript.ModuleKind.ESNext};u.languages.typescript.typescriptDefaults.setCompilerOptions(e),(A==="tsx"||A==="jsx")&&u.languages.typescript.typescriptDefaults.setCompilerOptions({...e,jsx:u.languages.typescript.JsxEmit.React,jsxFactory:"React.createElement",reactNamespace:"React"}),A==="stencil"&&u.languages.typescript.typescriptDefaults.setCompilerOptions({...e,jsx:u.languages.typescript.JsxEmit.Preserve,jsxFactory:void 0,reactNamespace:"h"})},l=[],ue=()=>{l.forEach(e=>h.getModel()?.onDidChangeContent(e))},K="",V=(e,p,v)=>{let C=ee(),U=r(v);K=`file:///${o}.${C}.${U}`;let y=e.getModel(),q=u.editor.createModel(p||"",w(v),u.Uri.parse(K));e.setModel(q),setTimeout(()=>y?.dispose(),1e3),ue(),T()},A=n.language,h=u.editor.create(a,{...k,...t,language:w(A)});V(h,n.value,A),t.theme==="vs-light"&&(a.style.backgroundColor="#fff"),(t.theme?.startsWith("http")||t.theme?.startsWith("./"))&&fetch(t.theme).then(e=>e.json()).then(e=>{u.editor.defineTheme("theme",e),u.editor.setTheme("theme"),a.style.backgroundColor=e.colors["editor.background"]});let de={astro:x+"monaco-lang-astro.31ace80fb590384d92861650cd635109.js",clio:x+"monaco-lang-clio.bdef68dfea0312fab9a27b5d87146182.js",imba:x+"monaco-lang-imba.b0acc149ca1c00547c24cad4172e8f22.js",wat:x+"monaco-lang-wat.90de1d50eb45ed8f299322a2d8c6f760.js"},ge=async e=>{let p=de[e];if(p&&!u.languages.getLanguages().find(v=>v.id===e)){let v=(await import(p)).default;u.languages.register({id:e}),v.config&&u.languages.setLanguageConfiguration(e,v.config),v.tokens&&u.languages.setMonarchTokensProvider(e,v.tokens)}},fe=()=>o,he=()=>h.getValue(),ye=(e="")=>{h.getModel()?.setValue(e)},$=[],D=e=>!e.filename.startsWith("file:///node_modules/"),G=(e=!0)=>{$.filter(p=>e?!0:D(p)).forEach(p=>{p.libJs.dispose(),p.libTs.dispose()}),$.length=0},xe=()=>A,be=(e,p)=>{A=e,G(!1),V(h,p??h.getValue(),A),ge(e)},ve=e=>{let p=$.find(v=>v.filename===e.filename);if(p){D(e)&&(p.libJs.dispose(),p.libJs=u.languages.typescript.javascriptDefaults.addExtraLib(e.content,e.filename));return}$.push({filename:e.filename,libJs:u.languages.typescript.javascriptDefaults.addExtraLib(e.content,e.filename),libTs:D(e)?{dispose:()=>{}}:u.languages.typescript.typescriptDefaults.addExtraLib(e.content,e.filename)})},Ee=()=>h.focus(),Se=()=>h.layout(),Le=e=>{l.push(e),h.getModel()?.onDidChangeContent(e)},Me={CtrlEnter:u.KeyMod.CtrlCmd|u.KeyCode.Enter,ShiftEnter:u.KeyMod.Shift|u.KeyCode.Enter,Enter:u.KeyCode.Enter,UpArrow:u.KeyCode.UpArrow,DownArrow:u.KeyCode.DownArrow,ShiftAltF:u.KeyMod.Shift|u.KeyMod.Alt|u.KeyCode.KeyF},Te=(e,p,v)=>{h.addAction({id:e,label:e,keybindings:[p],precondition:"!suggestWidgetVisible && !markersNavigationVisible && !findWidgetVisible",run:v})},Z=async e=>{let p=pe(),v=document.querySelector(`#editor-status [data-status="${n.editorId}"]`),C=y=>{p&&(p.textContent=y)},U=y=>{v&&(v.textContent=y)};if(!e){s?.dispose(),s=void 0,U(""),C("");return}if(e==="vim"){if(s?.mode==="vim")return;s?.mode==="emacs"&&(s.dispose(),U(""));let y=await O(ne,"MonacoVim"),q=v?.innerHTML!==""?void 0:v;s=y.initVimMode(h,q),s.mode="vim",C("Vim")}if(e==="emacs"){if(s?.mode==="emacs")return;s?.mode==="vim"&&(s.dispose(),U(""));let y=await O(oe,"MonacoEmacs");s=new y.EmacsExtension(h),U(""),s.onDidMarkChange(function(q){U(q?"Mark Set!":"Mark Unset")}),s.onDidChangeKey(function(q){U(q)}),s.start(),s.mode="emacs",C("Emacs")}};Z(n.editorMode);let we=e=>{let p=h.getModel();!e||!p||u.languages.registerDocumentFormattingEditProvider(w(A),{provideDocumentFormattingEdits:async()=>{let v=h.getValue(),C=await e(v,0,m());return[{range:p.getFullModelRange(),text:C.formatted}]}})},je=()=>h.getAction("editor.action.formatDocument").run(),Q=e=>{!e&&!window.emmetMonaco||O(te,"emmetMonaco").then(p=>{e?(!I.html||I.disabled)&&(I.html=p.emmetHTML(u,["html","php","astro","markdown","mdx"]),I.css=p.emmetCSS(u,["css","scss","less"]),I.jsx=p.emmetJSX(u,["javascript","typescript","jsx","tsx"]),I.disabled=!1):(I.html?.(),I.css?.(),I.jsx?.(),I.disabled=!0)})},ke=e=>{u.editor.setTheme("custom-vs-"+e)},He=e=>{let p={...b(e),...t};Q(e.emmet),Z(e.editorMode),h.updateOptions(p)},Ue=()=>{h.getModel()?.undo?.()},qe=()=>{h.getModel()?.redo?.()},Ie=()=>{let e=h.getPosition();return{lineNumber:e?.lineNumber??0,column:e?.column??0}},Ae=e=>{let p={lineNumber:e.lineNumber,column:e.column??0};h.setPosition(p),setTimeout(()=>h.revealPositionInCenter(p,0),50)},Ce=()=>{Q(!1),s?.dispose(),l.length=0,G(!0),h.getModel()?.dispose(),h.dispose(),a.innerHTML=""};return window.addEventListener("unhandledrejection",function(e){e.reason&&e.reason.name==="Canceled"&&e.preventDefault()}),me||(()=>{let e=new Map,p={provideHover(v,C){let U=v.getLineContent(C.lineNumber),y=le(U)[0];if(!y||y.startsWith("https://")||y.startsWith("http://")||y.startsWith(".")||y.startsWith("data:")||y.startsWith("blob:"))return;/^(skypack|unpkg|jsdelivr|esm|esm\.run|esm\.sh|bundle\.run)\:/.test(y)&&(y=y.replace(/^(skypack|unpkg|jsdelivr|esm|esm\.run|esm\.sh|bundle\.run)\:/,"")),y=y.replace(/(^@?([^@])+)(.*)/g,"$1");let q=y.split("/"),Be=q[0].startsWith("@")?2:1;return y=q.slice(0,Be).join("/"),(async()=>{let _=z.getModuleInfoUrl(y),X,P;try{e.has(_)?P=e.get(_):(X=await fetch(_),P=await X.json(),e.set(_,P))}catch{return}if(P?.results.length<=0)return;let{name:R,description:Pe,links:W}=P?.results?.[0]?.package??{};return{contents:[{value:`## [${R}](${W?.npm})
${Pe}


${W?.repository?`[GitHub](${W?.repository})  |`:""}  [Skypack](https://skypack.dev/view/${R})  |  [jsDelivr](https://www.jsdelivr.com/package/npm/${R})  |  [Unpkg](https://unpkg.com/browse/${R}/)  | [Openbase](https://openbase.com/js/${R})

Docs: [Importing modules](${x.replace("/livecodes/","")}/docs/features/npm-modules)`}]}})()}};u.languages.registerHoverProvider("javascript",p),u.languages.registerHoverProvider("typescript",p),u.languages.registerHoverProvider("html",p)})(),me=!0,{getValue:he,setValue:ye,getLanguage:xe,setLanguage:be,getEditorId:fe,focus:Ee,getPosition:Ie,setPosition:Ae,layout:Se,addTypes:ve,changeSettings:He,onContentChanged:Le,keyCodes:Me,addKeyBinding:Te,registerFormatter:we,format:je,isReadonly:j,setTheme:ke,undo:Ue,redo:qe,destroy:Ce,monaco:h}};export{ko as createEditor};
//# sourceMappingURL=monaco.js.map