var N=Object.create;var P=Object.defineProperty;var D=Object.getOwnPropertyDescriptor;var Q=Object.getOwnPropertyNames;var K=Object.getPrototypeOf,J=Object.prototype.hasOwnProperty;var G=(r,c)=>()=>(c||r((c={exports:{}}).exports,c),c.exports);var V=(r,c,h,y)=>{if(c&&typeof c=="object"||typeof c=="function")for(let w of Q(c))!J.call(r,w)&&w!==h&&P(r,w,{get:()=>c[w],enumerable:!(y=D(c,w))||y.enumerable});return r};var Z=(r,c,h)=>(h=r!=null?N(K(r)):{},V(c||!r||!r.__esModule?P(h,"default",{value:r,enumerable:!0}):h,r));var $=G((Rt,k)=>{var R=function(){var r=String.fromCharCode,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",y={};function w(n,s){if(!y[n]){y[n]={};for(var l=0;l<n.length;l++)y[n][n.charAt(l)]=l}return y[n][s]}var v={compressToBase64:function(n){if(n==null)return"";var s=v._compress(n,6,function(l){return c.charAt(l)});switch(s.length%4){default:case 0:return s;case 1:return s+"===";case 2:return s+"==";case 3:return s+"="}},decompressFromBase64:function(n){return n==null?"":n==""?null:v._decompress(n.length,32,function(s){return w(c,n.charAt(s))})},compressToUTF16:function(n){return n==null?"":v._compress(n,15,function(s){return r(s+32)})+" "},decompressFromUTF16:function(n){return n==null?"":n==""?null:v._decompress(n.length,16384,function(s){return n.charCodeAt(s)-32})},compressToUint8Array:function(n){for(var s=v.compress(n),l=new Uint8Array(s.length*2),o=0,i=s.length;o<i;o++){var m=s.charCodeAt(o);l[o*2]=m>>>8,l[o*2+1]=m%256}return l},decompressFromUint8Array:function(n){if(n==null)return v.decompress(n);for(var s=new Array(n.length/2),l=0,o=s.length;l<o;l++)s[l]=n[l*2]*256+n[l*2+1];var i=[];return s.forEach(function(m){i.push(r(m))}),v.decompress(i.join(""))},compressToEncodedURIComponent:function(n){return n==null?"":v._compress(n,6,function(s){return h.charAt(s)})},decompressFromEncodedURIComponent:function(n){return n==null?"":n==""?null:(n=n.replace(/ /g,"+"),v._decompress(n.length,32,function(s){return w(h,n.charAt(s))}))},compress:function(n){return v._compress(n,16,function(s){return r(s)})},_compress:function(n,s,l){if(n==null)return"";var o,i,m={},b={},x="",j="",u="",f=2,U=3,p=2,d=[],t=0,e=0,g;for(g=0;g<n.length;g+=1)if(x=n.charAt(g),Object.prototype.hasOwnProperty.call(m,x)||(m[x]=U++,b[x]=!0),j=u+x,Object.prototype.hasOwnProperty.call(m,j))u=j;else{if(Object.prototype.hasOwnProperty.call(b,u)){if(u.charCodeAt(0)<256){for(o=0;o<p;o++)t=t<<1,e==s-1?(e=0,d.push(l(t)),t=0):e++;for(i=u.charCodeAt(0),o=0;o<8;o++)t=t<<1|i&1,e==s-1?(e=0,d.push(l(t)),t=0):e++,i=i>>1}else{for(i=1,o=0;o<p;o++)t=t<<1|i,e==s-1?(e=0,d.push(l(t)),t=0):e++,i=0;for(i=u.charCodeAt(0),o=0;o<16;o++)t=t<<1|i&1,e==s-1?(e=0,d.push(l(t)),t=0):e++,i=i>>1}f--,f==0&&(f=Math.pow(2,p),p++),delete b[u]}else for(i=m[u],o=0;o<p;o++)t=t<<1|i&1,e==s-1?(e=0,d.push(l(t)),t=0):e++,i=i>>1;f--,f==0&&(f=Math.pow(2,p),p++),m[j]=U++,u=String(x)}if(u!==""){if(Object.prototype.hasOwnProperty.call(b,u)){if(u.charCodeAt(0)<256){for(o=0;o<p;o++)t=t<<1,e==s-1?(e=0,d.push(l(t)),t=0):e++;for(i=u.charCodeAt(0),o=0;o<8;o++)t=t<<1|i&1,e==s-1?(e=0,d.push(l(t)),t=0):e++,i=i>>1}else{for(i=1,o=0;o<p;o++)t=t<<1|i,e==s-1?(e=0,d.push(l(t)),t=0):e++,i=0;for(i=u.charCodeAt(0),o=0;o<16;o++)t=t<<1|i&1,e==s-1?(e=0,d.push(l(t)),t=0):e++,i=i>>1}f--,f==0&&(f=Math.pow(2,p),p++),delete b[u]}else for(i=m[u],o=0;o<p;o++)t=t<<1|i&1,e==s-1?(e=0,d.push(l(t)),t=0):e++,i=i>>1;f--,f==0&&(f=Math.pow(2,p),p++)}for(i=2,o=0;o<p;o++)t=t<<1|i&1,e==s-1?(e=0,d.push(l(t)),t=0):e++,i=i>>1;for(;;)if(t=t<<1,e==s-1){d.push(l(t));break}else e++;return d.join("")},decompress:function(n){return n==null?"":n==""?null:v._decompress(n.length,32768,function(s){return n.charCodeAt(s)})},_decompress:function(n,s,l){var o=[],i,m=4,b=4,x=3,j="",u=[],f,U,p,d,t,e,g,a={val:l(0),position:s,index:1};for(f=0;f<3;f+=1)o[f]=f;for(p=0,t=Math.pow(2,2),e=1;e!=t;)d=a.val&a.position,a.position>>=1,a.position==0&&(a.position=s,a.val=l(a.index++)),p|=(d>0?1:0)*e,e<<=1;switch(i=p){case 0:for(p=0,t=Math.pow(2,8),e=1;e!=t;)d=a.val&a.position,a.position>>=1,a.position==0&&(a.position=s,a.val=l(a.index++)),p|=(d>0?1:0)*e,e<<=1;g=r(p);break;case 1:for(p=0,t=Math.pow(2,16),e=1;e!=t;)d=a.val&a.position,a.position>>=1,a.position==0&&(a.position=s,a.val=l(a.index++)),p|=(d>0?1:0)*e,e<<=1;g=r(p);break;case 2:return""}for(o[3]=g,U=g,u.push(g);;){if(a.index>n)return"";for(p=0,t=Math.pow(2,x),e=1;e!=t;)d=a.val&a.position,a.position>>=1,a.position==0&&(a.position=s,a.val=l(a.index++)),p|=(d>0?1:0)*e,e<<=1;switch(g=p){case 0:for(p=0,t=Math.pow(2,8),e=1;e!=t;)d=a.val&a.position,a.position>>=1,a.position==0&&(a.position=s,a.val=l(a.index++)),p|=(d>0?1:0)*e,e<<=1;o[b++]=r(p),g=b-1,m--;break;case 1:for(p=0,t=Math.pow(2,16),e=1;e!=t;)d=a.val&a.position,a.position>>=1,a.position==0&&(a.position=s,a.val=l(a.index++)),p|=(d>0?1:0)*e,e<<=1;o[b++]=r(p),g=b-1,m--;break;case 2:return u.join("")}if(m==0&&(m=Math.pow(2,x),x++),o[g])j=o[g];else if(g===b)j=U+U.charAt(0);else return null;u.push(j),o[b++]=U+j.charAt(0),m--,U=j,m==0&&(m=Math.pow(2,x),x++)}}};return v}();typeof define=="function"&&define.amd?define(function(){return R}):typeof k<"u"&&k!=null&&(k.exports=R)});var S=(r=location.origin)=>Boolean(r&&(r.endsWith("livecodes.io")||r.endsWith("livecodes.pages.dev")||r.endsWith("localpen.io")||r.endsWith("localpen.pages.dev")||r.startsWith("http://127.0.0.1")||r.startsWith("http://localhost")));var A="https://cdn.jsdelivr.net/npm/quill@2.0.0-dev.4/dist",B="https://cdn.jsdelivr.net/npm/quill-html-edit-button@2.2.7/dist/quill.htmlEditButton.min.js",O="https://cdn.jsdelivr.net/npm/quill-blot-formatter@1.0.5/dist/quill-blot-formatter.min.js",E="https://cdn.jsdelivr.net/npm/quill-better-table@1.2.10/dist";var M=Z($());var tt="https://livecodes-sandbox.pages.dev";var L=tt,_="v5",T={getResultUrl:()=>`${L}/${_}/result`,getCompilerUrl:()=>`${L}/${_}/compiler`,getOrigin:()=>new URL(L).origin};var z="https://dpaste.com/",et="https://dpaste.com/api/v2/",F="https://api2.livecodes.io/share",W={getProject:async r=>{try{let c=await fetch(z+r+".txt");return c.ok?JSON.parse(await c.text()):{}}catch{return{}}},shareProject:async r=>{try{let c=await fetch(et,{method:"POST",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded","User-Agent":"LiveCodes / https://livecodes.io/"},body:`content=${encodeURIComponent(JSON.stringify(r))}&title=${encodeURIComponent(r.title||"")}&syntax=json&expiry_days=365`});return c.ok?(await c.text()).replace(z,""):""}catch{return""}}},ot={getProject:async r=>{if(r.length<11)return W.getProject(r);if(!S())return{};try{let c=await fetch(F+"?id="+r);return c.ok?JSON.parse(await c.text()):{}}catch{return{}}},shareProject:async r=>{if(!S())return"";try{let c=await fetch(F,{method:"POST",mode:"cors",body:JSON.stringify(r)});return c.ok?c.text():""}catch{return""}}},me=S()?ot:W;var H=`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rich Text Editor</title>
  </head>
  <body>
    <style>
      html,
      body {
        margin: 0;
        padding: 0;
        height: 100%;
      }
      #standalone-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        max-height: 100%;
      }
      #editor-container {
        flex-grow: 0;
        overflow-y: auto;
      }
      body {
        background: #fff;
      }
      .ql-snow.ql-toolbar {
        background: #eaecec;
      }
      #toolbar-container .ql-font span[data-label='Arial']::before {
        font-family: Arial, sans-serif;
      }
      #toolbar-container .ql-font span[data-label='Comic Sans MS']::before {
        font-family: Comic Sans MS, sans-serif;
      }
      #toolbar-container .ql-font span[data-label='Verdana']::before {
        font-family: Verdana, sans-serif;
      }
      #toolbar-container .ql-font span[data-label='Helvetica']::before {
        font-family: Helvetica, sans-serif;
      }
      #toolbar-container .ql-font span[data-label='Tahoma']::before {
        font-family: Tahoma, sans-serif;
      }
      #toolbar-container .ql-font span[data-label='Trebuchet MS']::before {
        font-family: Trebuchet MS, sans-serif;
      }
      #toolbar-container .ql-font span[data-label='Times New Roman']::before {
        font-family: Times New Roman, serif;
      }
      #toolbar-container .ql-font span[data-label='Georgia']::before {
        font-family: Georgia, serif;
      }
      #toolbar-container .ql-font span[data-label='Garamond']::before {
        font-family: Garamond, serif;
      }
      #toolbar-container .ql-font span[data-label='Courier New']::before {
        font-family: Courier New, monospace;
      }
      #toolbar-container .ql-font span[data-label='Brush Script MT']::before {
        font-family: Brush Script MT, cursive;
      }
      #toolbar-container .ql-size span[data-label='Small']::before {
        font-size: 0.75em;
      }
      #toolbar-container .ql-size span[data-label='Large']::before {
        font-size: 1.5em;
      }
      #toolbar-container .ql-size span[data-label='Huge']::before {
        font-size: 2.5em;
      }
    </style>

    <!-- styles placeholder -->

    <div id="standalone-container">
      <div id="toolbar-container">
        <span class="ql-formats">
          <select class="ql-font" title="Font Face">
            <option selected>Default</option>
            <option>Arial</option>
            <option>Brush Script MT</option>
            <option>Comic Sans MS</option>
            <option>Courier New</option>
            <option>Garamond</option>
            <option>Georgia</option>
            <option>Helvetica</option>
            <option>Tahoma</option>
            <option>Times New Roman</option>
            <option>Trebuchet MS</option>
            <option>Verdana</option>
          </select>
          <select class="ql-size" title="Font Size">
            <option value="0.75em">Small</option>
            <option selected>Normal</option>
            <option value="1.5em">Large</option>
            <option value="2.5em">Huge</option>
          </select>
          <select class="ql-header" title="Heading">
            <option value=""></option>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option>
            <option value="5"></option>
            <option value="6"></option>
          </select>
        </span>
        <span class="ql-formats">
          <button class="ql-bold" title="Bold"></button>
          <button class="ql-italic" title="Italic"></button>
          <button class="ql-underline" title="Underline"></button>
          <button class="ql-strike" title="Strike"></button>
        </span>
        <span class="ql-formats">
          <select class="ql-color" title="Font Color"></select>
          <select class="ql-background" title="Background Color"></select>
        </span>
        <span class="ql-formats">
          <button class="ql-script" value="sub" title="Subscript"></button>
          <button class="ql-script" value="super" title="Superscript"></button>
        </span>
        <span class="ql-formats">
          <button class="ql-list" value="ordered" title="Ordered List"></button>
          <button class="ql-list" value="bullet" title="Unordered List"></button>
          <button class="ql-indent" value="-1" title="Outdent"></button>
          <button class="ql-indent" value="+1" title="Indent"></button>
          <button class="ql-blockquote" title="Quote"></button>
        </span>
        <span class="ql-formats">
          <button class="ql-direction" value="rtl" title="Text Direction"></button>
          <select class="ql-align" title="Align">
            <option></option>
            <option value="right"></option>
            <option value="center"></option>
            <option value="justify"></option>
          </select>
        </span>
        <span class="ql-formats">
          <button class="ql-link" title="Link"></button>
          <button class="ql-image" title="Image"></button>
          <button class="ql-video" title="Video"></button>
          <button class="ql-table" title="Insert Table"></button>
        </span>
        <span class="ql-formats">
          <button class="ql-undo" title="Undo"></button>
          <button class="ql-redo" title="Redo"></button>
          <button class="ql-clean" title="Reset formatting"></button>
        </span>
      </div>
      <div id="editor-container">
        <!-- content placeholder -->
      </div>
    </div>

    <!-- scripts placeholder -->

    <script>
      (() => {
        let updatingContent = false;

        var Font = Quill.import('attributors/style/font');
        Font.whitelist = [
          'Arial',
          'Helvetica',
          'Verdana',
          'Tahoma',
          'Trebuchet MS',
          'Times New Roman',
          'Georgia',
          'Garamond',
          'Courier New',
          'Brush Script MT',
        ];
        Quill.register(Font, true);

        var SizeStyle = Quill.import('attributors/style/size');
        SizeStyle.whitelist = ['0.75em', '1.5em', '2.5em'];
        Quill.register(SizeStyle, true);

        var Align = Quill.import('attributors/style/align');
        Quill.register(Align, true);

        var Direction = Quill.import('attributors/style/direction');
        Quill.register(Direction, true);

        Quill.register('modules/htmlEditButton', htmlEditButton);
        Quill.register('modules/blotFormatter', QuillBlotFormatter.default);
        Quill.register({ 'modules/better-table': quillBetterTable }, true);

        var Font = Quill.import('attributors/style/font');
        Font.whitelist = [
          'Arial',
          'Brush Script MT',
          'Comic Sans MS',
          'Courier New',
          'Garamond',
          'Georgia',
          'Helvetica',
          'Tahoma',
          'Times New Roman',
          'Trebuchet MS',
          'Verdana',
        ];
        Quill.register(Font, true);

        var SizeStyle = Quill.import('attributors/style/size');
        SizeStyle.whitelist = ['0.75em', '1.5em', '2.5em'];
        Quill.register(SizeStyle, true);

        var Align = Quill.import('attributors/style/align');
        Quill.register(Align, true);

        var Direction = Quill.import('attributors/style/direction');
        Quill.register(Direction, true);

        var quill = new Quill('#editor-container', {
          modules: {
            toolbar: {
              container: '#toolbar-container',
              handlers: {
                undo: (value) => {
                  quill.history.undo();
                },
                redo: (value) => {
                  quill.history.redo();
                },
                table: (value) => {
                  let tableModule = quill.getModule('better-table');
                  tableModule.insertTable(3, 3);
                },
              },
            },
            history: {
              delay: 1000,
              userOnly: false,
            },
            htmlEditButton: {
              debug: false,
              msg: 'Edit the content in HTML format',
            },
            blotFormatter: {},
            table: false, // disable table module
            'better-table': {
              operationMenu: {
                color: {
                  colors: ['green', 'red', 'yellow', 'blue', 'grey', 'white'],
                  text: 'Background Colors:',
                },
              },
            },
            // keyboard: {
            //   bindings: quillBetterTable.keyboardBindings
            // }
          },
          placeholder: 'Content...',
          theme: 'snow',
        });

        document.querySelector('.ql-undo').innerHTML =
          '<svg viewBox="0 0 1792 1792" style="transform: scaleX(0.9) scaleY(0.9);" xmlns="http://www.w3.org/2000/svg"><path class="ql-fill" d="M1664 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z"/></svg>';
        document.querySelector('.ql-redo').innerHTML =
          '<svg viewBox="0 0 1792 1792" style="transform: scaleX(-0.9) scaleY(0.9);" xmlns="http://www.w3.org/2000/svg"><path class="ql-fill" d="M1664 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z"/></svg>';

        function updateCode() {
          parent.postMessage(
            { type: 'quillEditorCode', payload: { html: quill.root.innerHTML || '' } },
            '*',
          );
        }

        quill.on('text-change', () => {
          if (updatingContent) {
            updatingContent = false;
            return; // prevent infinite loop
          }
          updateCode();
        });

        window.addEventListener('message', function (event) {
          if (event.data.html) {
            updatingContent = true;
            quill.root.innerHTML = event.data.html;
          } else if (event.data.type === 'updateCode') {
            updateCode();
          } else if (event.data.type === 'setTheme') {
          }
        });

        window.addEventListener('load', () => {
          parent.postMessage({ type: 'quillEditorLoaded', payload: true }, '*');
          updateCode();
        });
      })();
    <\/script>
  </body>
</html>
`;var C=!1,I="",q=()=>document.querySelector("#quill-editor-frame"),st=async({baseUrl:r,config:c,editors:h,eventsManager:y})=>{if(C){I!==h.markup.getValue()&&q()?.contentWindow?.postMessage({html:h.markup.getValue()},"*");return}let w=`
  <script src="${A}/quill.min.js"><\/script>
  <script src="${B}"><\/script>
  <script src="${O}"><\/script>
  <script src="${E}/quill-better-table.min.js"><\/script>
  <script src="${r}custom-editor-utils.5645a2cb96ac65049b5cfaa8391888fb.js"><\/script>
    `,v=`
  <link rel="stylesheet" href="${r}quill.8e9d74c74d2c8aaa5d849678c215cf7e.css" />
  <link rel="stylesheet" href="${A}/quill.snow.css" />
  <link rel="stylesheet" href="${E}/quill-better-table.css" />
  `,n=()=>H.replace("<!-- styles placeholder -->",v).replace("<!-- scripts placeholder -->",C?"":w).replace("// {{ custom config }}",c.readonly?"readOnly: true":"").replace("<!-- content placeholder -->",h.markup.getValue());await new Promise(s=>{let l=document.querySelector("#quillEditor"),o=q(),i=()=>{y.addEventListener(window,"message",m=>{if(m.source!==q()?.contentWindow||!["quillEditorCode","quillEditorLoaded"].includes(m.data.type))return;if(m.data.type==="quillEditorLoaded"){C=!0,y.removeEventListener(o,"load",i),rt(),s("loaded");return}let{html:b}=m.data.payload;I=b,h.markup.setValue(b||"")}),q()?.contentWindow?.postMessage({result:n()},"*")};o?i():(o=document.createElement("iframe"),o.name="quillEditor",o.id="quill-editor-frame",o.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts"),y.addEventListener(o,"load",i),o.src=T.getResultUrl(),l.appendChild(o))})},Ae=async({baseUrl:r,editors:c,config:h,html:y,eventsManager:w})=>h.script.language!=="richtext"?{}:(C||await st({baseUrl:r,config:h,editors:c,html:y,eventsManager:w}),{html:I}),Ee=r=>{q()?.contentWindow?.postMessage({type:"setTheme",payload:r},T.getOrigin())},rt=()=>{q()?.contentWindow?.postMessage({type:"updateCode"},T.getOrigin())};export{Ae as getQuillEditorContent,Ee as setQuillEditorTheme,st as showQuillEditor};
//# sourceMappingURL=quill.js.map
