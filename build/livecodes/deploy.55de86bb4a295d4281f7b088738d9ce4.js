var ge=Object.create;var O=Object.defineProperty;var fe=Object.getOwnPropertyDescriptor;var he=Object.getOwnPropertyNames;var ye=Object.getPrototypeOf,xe=Object.prototype.hasOwnProperty;var be=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ve=(e,t,o,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let u of he(t))!xe.call(e,u)&&u!==o&&O(e,u,{get:()=>t[u],enumerable:!(i=fe(t,u))||i.enumerable});return e};var Ee=(e,t,o)=>(o=e!=null?ge(ye(e)):{},ve(t||!e||!e.__esModule?O(o,"default",{value:e,enumerable:!0}):o,e));var D=be((bt,k)=>{var N=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",i={};function u(n,r){if(!i[n]){i[n]={};for(var p=0;p<n.length;p++)i[n][n.charAt(p)]=p}return i[n][r]}var c={compressToBase64:function(n){if(n==null)return"";var r=c._compress(n,6,function(p){return t.charAt(p)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(n){return n==null?"":n==""?null:c._decompress(n.length,32,function(r){return u(t,n.charAt(r))})},compressToUTF16:function(n){return n==null?"":c._compress(n,15,function(r){return e(r+32)})+" "},decompressFromUTF16:function(n){return n==null?"":n==""?null:c._decompress(n.length,16384,function(r){return n.charCodeAt(r)-32})},compressToUint8Array:function(n){for(var r=c.compress(n),p=new Uint8Array(r.length*2),l=0,m=r.length;l<m;l++){var f=r.charCodeAt(l);p[l*2]=f>>>8,p[l*2+1]=f%256}return p},decompressFromUint8Array:function(n){if(n==null)return c.decompress(n);for(var r=new Array(n.length/2),p=0,l=r.length;p<l;p++)r[p]=n[p*2]*256+n[p*2+1];var m=[];return r.forEach(function(f){m.push(e(f))}),c.decompress(m.join(""))},compressToEncodedURIComponent:function(n){return n==null?"":c._compress(n,6,function(r){return o.charAt(r)})},decompressFromEncodedURIComponent:function(n){return n==null?"":n==""?null:(n=n.replace(/ /g,"+"),c._decompress(n.length,32,function(r){return u(o,n.charAt(r))}))},compress:function(n){return c._compress(n,16,function(r){return e(r)})},_compress:function(n,r,p){if(n==null)return"";var l,m,f={},b={},v="",E="",y="",S=2,L=3,g=2,h=[],a=0,s=0,x;for(x=0;x<n.length;x+=1)if(v=n.charAt(x),Object.prototype.hasOwnProperty.call(f,v)||(f[v]=L++,b[v]=!0),E=y+v,Object.prototype.hasOwnProperty.call(f,E))y=E;else{if(Object.prototype.hasOwnProperty.call(b,y)){if(y.charCodeAt(0)<256){for(l=0;l<g;l++)a=a<<1,s==r-1?(s=0,h.push(p(a)),a=0):s++;for(m=y.charCodeAt(0),l=0;l<8;l++)a=a<<1|m&1,s==r-1?(s=0,h.push(p(a)),a=0):s++,m=m>>1}else{for(m=1,l=0;l<g;l++)a=a<<1|m,s==r-1?(s=0,h.push(p(a)),a=0):s++,m=0;for(m=y.charCodeAt(0),l=0;l<16;l++)a=a<<1|m&1,s==r-1?(s=0,h.push(p(a)),a=0):s++,m=m>>1}S--,S==0&&(S=Math.pow(2,g),g++),delete b[y]}else for(m=f[y],l=0;l<g;l++)a=a<<1|m&1,s==r-1?(s=0,h.push(p(a)),a=0):s++,m=m>>1;S--,S==0&&(S=Math.pow(2,g),g++),f[E]=L++,y=String(v)}if(y!==""){if(Object.prototype.hasOwnProperty.call(b,y)){if(y.charCodeAt(0)<256){for(l=0;l<g;l++)a=a<<1,s==r-1?(s=0,h.push(p(a)),a=0):s++;for(m=y.charCodeAt(0),l=0;l<8;l++)a=a<<1|m&1,s==r-1?(s=0,h.push(p(a)),a=0):s++,m=m>>1}else{for(m=1,l=0;l<g;l++)a=a<<1|m,s==r-1?(s=0,h.push(p(a)),a=0):s++,m=0;for(m=y.charCodeAt(0),l=0;l<16;l++)a=a<<1|m&1,s==r-1?(s=0,h.push(p(a)),a=0):s++,m=m>>1}S--,S==0&&(S=Math.pow(2,g),g++),delete b[y]}else for(m=f[y],l=0;l<g;l++)a=a<<1|m&1,s==r-1?(s=0,h.push(p(a)),a=0):s++,m=m>>1;S--,S==0&&(S=Math.pow(2,g),g++)}for(m=2,l=0;l<g;l++)a=a<<1|m&1,s==r-1?(s=0,h.push(p(a)),a=0):s++,m=m>>1;for(;;)if(a=a<<1,s==r-1){h.push(p(a));break}else s++;return h.join("")},decompress:function(n){return n==null?"":n==""?null:c._decompress(n.length,32768,function(r){return n.charCodeAt(r)})},_decompress:function(n,r,p){var l=[],m,f=4,b=4,v=3,E="",y=[],S,L,g,h,a,s,x,d={val:p(0),position:r,index:1};for(S=0;S<3;S+=1)l[S]=S;for(g=0,a=Math.pow(2,2),s=1;s!=a;)h=d.val&d.position,d.position>>=1,d.position==0&&(d.position=r,d.val=p(d.index++)),g|=(h>0?1:0)*s,s<<=1;switch(m=g){case 0:for(g=0,a=Math.pow(2,8),s=1;s!=a;)h=d.val&d.position,d.position>>=1,d.position==0&&(d.position=r,d.val=p(d.index++)),g|=(h>0?1:0)*s,s<<=1;x=e(g);break;case 1:for(g=0,a=Math.pow(2,16),s=1;s!=a;)h=d.val&d.position,d.position>>=1,d.position==0&&(d.position=r,d.val=p(d.index++)),g|=(h>0?1:0)*s,s<<=1;x=e(g);break;case 2:return""}for(l[3]=x,L=x,y.push(x);;){if(d.index>n)return"";for(g=0,a=Math.pow(2,v),s=1;s!=a;)h=d.val&d.position,d.position>>=1,d.position==0&&(d.position=r,d.val=p(d.index++)),g|=(h>0?1:0)*s,s<<=1;switch(x=g){case 0:for(g=0,a=Math.pow(2,8),s=1;s!=a;)h=d.val&d.position,d.position>>=1,d.position==0&&(d.position=r,d.val=p(d.index++)),g|=(h>0?1:0)*s,s<<=1;l[b++]=e(g),x=b-1,f--;break;case 1:for(g=0,a=Math.pow(2,16),s=1;s!=a;)h=d.val&d.position,d.position>>=1,d.position==0&&(d.position=r,d.val=p(d.index++)),g|=(h>0?1:0)*s,s<<=1;l[b++]=e(g),x=b-1,f--;break;case 2:return y.join("")}if(f==0&&(f=Math.pow(2,v),v++),l[x])E=l[x];else if(x===b)E=L+L.charAt(0);else return null;y.push(E),l[b++]=L+E.charAt(0),f--,L=E,f==0&&(f=Math.pow(2,v),v++)}}};return c}();typeof define=="function"&&define.amd?define(function(){return N}):typeof k<"u"&&k!=null&&(k.exports=N)});var q=`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LiveCodes</title>
    <script>
      window.addEventListener('message', function (event) {
        if (event.data.result) {
          document.write(event.data.result);
          document.close();
        }
      });
    <\/script>
  </head>
  <body></body>
</html>
`;var C=`<div id="deploy-container" class="modal-container">
  <div class="modal-title">Deploy to GitHub Pages</div>
  <ul id="deploy-tabs" class="modal-tabs">
    <li data-target="new-repo" class="active">Create New Repo</li>
    <li data-target="existing-repo">Existing Repo</li>
  </ul>
  <div id="deploy-screens" class="modal-screen-container">
    <div id="new-repo" class="tab-content active">
      <div class="modal-screen">
        <form id="new-repo-form">
          <div>
            <label for="new-repo-name"
              >Repo Name <span id="new-repo-name-error" class="error"></span
            ></label>
            <input type="text" id="new-repo-name" placeholder="Required" />
          </div>
          <div>
            <label for="new-repo-message">Commit Message</label>
            <input type="text" id="new-repo-message" placeholder="Optional" />
          </div>
          <div class="padded">
            <input type="checkbox" id="new-repo-source" />
            <label for="new-repo-source">Commit source code (public)</label>
          </div>
          <button id="new-repo-btn" class="wide-button" type="submit">Deploy</button>
        </form>
        <div class="description">
          A new <strong>public</strong> repo will be created. The result page will be pushed to
          <span class="code">gh-pages</span> branch.
        </div>
      </div>
    </div>
    <div id="existing-repo" class="tab-content">
      <div class="modal-screen">
        <form id="existing-repo-form">
          <div>
            <label for="existing-repo-name">Repo Name</label>
            <input
              type="text"
              id="existing-repo-name"
              autocomplete="off"
              placeholder="Loading..."
            />
          </div>
          <div>
            <label for="existing-repo-message">Commit Message</label>
            <input type="text" id="existing-repo-message" placeholder="Optional" />
          </div>
          <div class="padded">
            <input type="checkbox" id="existing-repo-source" />
            <label for="existing-repo-source">Commit source code (public)</label>
          </div>
          <button id="existing-repo-btn" class="wide-button" type="submit">Deploy</button>
        </form>
        <div class="description">
          A new commit will be added to <span class="code">gh-pages</span> branch.
        </div>
      </div>
    </div>
  </div>
</div>
`;var _="https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.6/dist/autoComplete.min.js";var j=(e=location.origin)=>Boolean(e&&(e.endsWith("livecodes.io")||e.endsWith("livecodes.pages.dev")||e.endsWith("localpen.io")||e.endsWith("localpen.pages.dev")||e.startsWith("http://127.0.0.1")||e.startsWith("http://localhost")));var M=(e,t="_")=>e.replace(/[\W]+/g,t);var I=()=>(Date.now()+""+Math.floor(Math.floor(Math.random()*Date.now()))).substring(0,24);var A=Ee(D());var W="https://dpaste.com/",Me="https://dpaste.com/api/v2/",z="https://api2.livecodes.io/share",J={getProject:async e=>{try{let t=await fetch(W+e+".txt");return t.ok?JSON.parse(await t.text()):{}}catch{return{}}},shareProject:async e=>{try{let t=await fetch(Me,{method:"POST",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded","User-Agent":"LiveCodes / https://livecodes.io/"},body:`content=${encodeURIComponent(JSON.stringify(e))}&title=${encodeURIComponent(e.title||"")}&syntax=json&expiry_days=365`});return t.ok?(await t.text()).replace(W,""):""}catch{return""}}},je={getProject:async e=>{if(e.length<11)return J.getProject(e);if(!j())return{};try{let t=await fetch(z+"?id="+e);return t.ok?JSON.parse(await t.text()):{}}catch{return{}}},shareProject:async e=>{if(!j())return"";try{let t=await fetch(z,{method:"POST",mode:"cors",body:JSON.stringify(e)});return t.ok?t.text():""}catch{return""}}},Kt=j()?je:J;var G=(e,{getLanguageExtension:t})=>{let o={markup:"index",style:"style",script:"script"},i=Object.keys(o).reduce((r,p)=>{let l=o[p],m=e[p].language,f=t?.(m)||"md",b=e[p].content||"";return{...r,...b?{[l+"."+f]:{content:b}}:{}}},{}),u=e.stylesheets.length>0?{styles:{content:e.stylesheets.map(r=>`<link rel="stylesheet" href="${r}" />`).join(`
`)}}:void 0,c=e.scripts.length>0?{scripts:{content:e.scripts.map(r=>`<script src="${r}"><\/script>`).join(`
`)}}:void 0,n=e.tests?.content?{["script.spec."+t?.(e.tests?.language)||"ts"]:{content:e.tests?.content}}:void 0;return{...i,...u,...c,...n}},K=(e,t,o,i=!0)=>{let u=i?"https://gist.github.com/":"https://github.com/",c=t?t.username?"by ["+t.displayName+"]("+u+t.username+")":"by "+t.displayName:"",n=o?`[project](https://livecodes.io/?x=${o})`:"project";return{[M(e.title)+".md"]:{content:`# ${e.title}
A ${n} created ${c} on [LiveCodes](https://livecodes.io).`}}};var w=(e,t)=>({Accept:`application/vnd.github.v3${t?"."+t:""}+json`,"Content-Type":"application/json",Authorization:"token "+e.token}),Z=async(e,t)=>{try{return(await fetch(`https://api.github.com/repos/${e.username}/${t}`,{method:"GET",cache:"no-store",headers:w(e)})).ok}catch{return!1}},Q=async(e,t,o=!1,i)=>{let u=await fetch("https://api.github.com/user/repos",{method:"POST",cache:"no-store",headers:w(e),body:JSON.stringify({name:t,private:o,...o?{}:{homepage:`https://${e.username}.github.io/${t}/`},...i?{description:i}:{}})});if(!u.ok)throw await u.json().then(n=>n.errors[0]?.message)==="name already exists on this account"?new Error("Repo name already exists"):new Error("Error creating repo");return u.json().then(c=>c.name)},V=async({user:e,repo:t,branch:o,file:i,message:u,initialize:c=!1,encoded:n=!1})=>{let r=`https://api.github.com/repos/${e.username}/${t}/contents/`,p=i.path.split("/").slice(0,-1).join("/"),l;if(!c){let f=await fetch(r+p,{method:"GET",cache:"no-store",headers:w(e)});f.ok&&(l=(await f.json()).find(v=>v.path===i.path)?.sha)}let m=await fetch(r+i.path,{method:"PUT",cache:"no-store",headers:w(e),body:JSON.stringify({message:u||"deploy",content:n?i.content:btoa(i.content),branch:o,...l?{sha:l}:{}})});if(!m.ok)throw new Error("Error creating file");return m.json()};var R=async(e,t,o="main",i)=>(await V({user:e,repo:t,branch:o,file:{path:"README.md",content:`${i||"# "+t+`
`}`},message:"initial commit",initialize:!0,encoded:!1}))?.commit.sha,He=async(e,t,o)=>{let i=await fetch(`https://api.github.com/repos/${e.username}/${t}/git/matching-refs/heads/${o}?per_page=100`,{method:"GET",cache:"no-store",headers:w(e)}),u=await i.json();if(u.message==="Git Repository is empty."){let n=await R(e,t,"main");return o==="main"?n:null}if(!i.ok)throw new Error("Error getting last commit");let c=u.find(n=>n.ref===`refs/heads/${o}`);return c?c.object.sha:null},ke=async(e,t,o)=>{let i=await fetch(`https://api.github.com/repos/${e.username}/${t}/commits/${o}`,{method:"GET",cache:"no-store",headers:w(e)});if(!i.ok)throw new Error("Error getting commit tree");let c=(await i.json())?.commit?.tree?.sha;return c||null},Ue=async(e,t,o,i)=>{let u=o.map(n=>({path:n.path,mode:"100644",type:"blob",content:n.content})),c=await fetch(`https://api.github.com/repos/${e.username}/${t}/git/trees`,{method:"POST",cache:"no-store",headers:w(e),body:JSON.stringify({...i?{base_tree:i}:{},tree:u})});if(!c.ok)throw new Error("Error creating tree");return c.json().then(n=>n.sha)},qe=async(e,t,o,i,u)=>{let c=await fetch(`https://api.github.com/repos/${e.username}/${t}/git/commits`,{method:"POST",cache:"no-store",headers:w(e),body:JSON.stringify({tree:i,message:o||"deploy",...u?{parents:[u]}:{}})});if(!c.ok)throw new Error("Error creating commit");return c.json().then(n=>n.sha)},Ce=async(e,t,o,i)=>{if(!(await fetch(`https://api.github.com/repos/${e.username}/${t}/git/refs`,{method:"POST",cache:"no-store",headers:w(e),body:JSON.stringify({ref:`refs/heads/${o}`,sha:i})})).ok)throw new Error("Error creating branch");return!0},Ie=async(e,t,o,i)=>{if(!(await fetch(`https://api.github.com/repos/${e.username}/${t}/git/refs/heads/${o}`,{method:"PATCH",cache:"no-store",headers:w(e),body:JSON.stringify({sha:i})})).ok)throw new Error("Error updating branch");return!0},Y=async({files:e,user:t,repo:o,branch:i,message:u,newRepo:c,privateRepo:n,description:r,readmeContent:p,clearPrevious:l=!0})=>{let m,f,b,v=!1;c&&(o=M(o,"-").toLowerCase());try{if(c||!await Z(t,o)){c=!0,await Q(t,o,n,r);let y=await R(t,o,"main",p);m=i==="main"?y:null}else m=await He(t,o,i);let E=m&&!l?await ke(t,o,m):null;return f=await Ue(t,o,e,E),b=await qe(t,o,u,f,m),m?v=await Ie(t,o,i,b):v=await Ce(t,o,i,b),v?{tree:f,commit:b}:null}catch{return null}},X=async({file:e,user:t,repo:o,branch:i,message:u,newRepo:c,privateRepo:n,description:r,readmeContent:p})=>{try{(c||!await Z(t,o))&&(c=!0,o=M(o,"-").toLowerCase(),await Q(t,o,n,r),await R(t,o,i,p));let l=await V({user:t,repo:o,branch:i,file:e,message:u,initialize:c||!1,encoded:!0});return{tree:l?.commit?.tree?.sha,commit:l?.commit?.sha}}catch{return null}},ee=async(e,t="public")=>{let o=1,i=100,u=5,c=[];for(;o<=u;){let n=await fetch(`https://api.github.com/user/repos?type=${t}&per_page=${i}&page=${o}`,{method:"GET",cache:"no-store",headers:w(e)});if(o+=1,!n.ok)continue;let r=await n.json();c.push(...r.map(p=>p.name)),r.length<i&&(o=u+1)}return c};var te={title:"Untitled Project",description:"",tags:[],autoupdate:!0,autosave:!1,delay:1500,formatOnsave:!1,mode:"full",theme:"dark",recoverUnsaved:!0,showSpacing:!1,readonly:!1,allowLangChange:!0,activeEditor:void 0,languages:void 0,markup:{language:"html",content:""},style:{language:"css",content:""},script:{language:"javascript",content:""},stylesheets:[],scripts:[],cssPreset:"",imports:{},types:{},tests:{language:"typescript",content:""},tools:{enabled:"all",active:"",status:""},zoom:1,processors:[],customSettings:{},editor:void 0,fontFamily:void 0,fontSize:void 0,useTabs:!1,tabSize:2,lineNumbers:!0,wordWrap:!1,closeBrackets:!0,semicolons:!0,singleQuote:!1,trailingComma:!0,emmet:!0,editorMode:void 0,version:"0.6.0"};var Ae=({config:e,content:t,commitSource:o,singleFile:i,deps:u})=>{let c=[{path:"index.html",content:t.resultPage}];if(i||c.push({path:"style.css",content:t.style||""},{path:"script.js",content:t.script||""}),o){let n=G(e,u);c.push(...Object.keys(n).map(r=>({path:"src/"+r,content:n[r].content})),{path:"src/livecodes.json",content:JSON.stringify(e,null,2)})}return c},ne=async({user:e,repo:t,config:o,content:i,message:u,commitSource:c=!0,singleFile:n,newRepo:r=!0,deps:p})=>{r&&(t=M(t,"-").toLowerCase());let l=Ae({config:o,content:i,commitSource:c,singleFile:n,deps:p}),m="gh-pages",f=c?`https://github.com/${e.username}/${t}/tree/gh-pages/src`:void 0,b=o.title!==te.title?o.title:"",v=Object.values(K(o,e,f,!1))[0].content,E=await Y({files:l,user:e,repo:t,branch:m,message:u,newRepo:r,privateRepo:!1,description:b,readmeContent:v,clearPrevious:!0});return E?{url:`https://${e.username}.github.io/${t}/`,username:e.username,repo:t,tree:E.tree,commit:E.commit}:null},Re=async({file:e,user:t,repo:o,branch:i,message:u,description:c,readmeContent:n})=>{let r={path:`assets/${I()}/${e.path}`,content:e.content},p=await X({file:r,user:t,repo:o,branch:i,message:u,privateRepo:!1,description:c,readmeContent:n});return p?{url:`https://${t.username}.github.io/${o}/${r.path}`,username:t.username,repo:o,tree:p?.tree,commit:p?.commit}:null},oe=(e,t)=>{let{url:o,username:i,repo:u,commit:c}=e,n=t?`
    <div class="description">
      <p>
        The source code is
        <a
          href="https://github.com/${i}/${u}/tree/${c}/src"
          target="_blank"
        >
          publicly available
        </a>
      </p>
      <p>
        Permanent link:
        <a
          href="https://livecodes.io/?config=https://raw.githubusercontent.com/${i}/${u}/${c}/src/livecodes.json"
          target="_blank"
        >
          Edit in LiveCodes
        </a>
      </p>
    </div>
`:"",r=`
    <div id="deploy-container" class="modal-container">
      <div class="modal-title">Deployed Successfully!</div>
      <p>
        Your project has been deployed successfully to GitHub Pages, and will shortly be available on: <br />
        <a href="${o}" target="_blank">${o}</a>
      </p>
      ${n}
    </div>
  `,p=document.createElement("div");return p.innerHTML=r,p};var re=e=>e.querySelector("#new-repo-form"),se=e=>e.querySelector("#new-repo-btn"),ie=e=>e.querySelector("#new-repo-name"),ce=e=>e.querySelector("#new-repo-name-error"),ae=e=>e.querySelector("#new-repo-message"),le=e=>e.querySelector("#new-repo-source");var pe=e=>e.querySelector("#existing-repo-form"),me=e=>e.querySelector("#existing-repo-btn"),B=e=>e.querySelector("#existing-repo-name"),$=e=>e.querySelector("#existing-repo-message"),ue=e=>e.querySelector("#existing-repo-source");var Be=(e,t)=>{let o=document.createElement("div");o.innerHTML=C;let i=o.firstChild,u=i.querySelectorAll("#deploy-tabs li");return u.forEach(c=>{e.addEventListener(c,"click",()=>{u.forEach(r=>r.classList.remove("active")),c.classList.add("active"),document.querySelectorAll("#deploy-screens > div").forEach(r=>{r.classList.remove("active")});let n=i.querySelector("#"+c.dataset.target);n?.classList.add("active"),n?.querySelector("input")?.focus()})}),t&&setTimeout(()=>{u[1].click();let c=B(i),n=$(i);c.value=t,n.focus()}),i},$n=async({modal:e,notifications:t,eventsManager:o,user:i,deployRepo:u,deps:c})=>{let n=Be(o,u),r=re(n),p=se(n),l=ie(n),m=ce(n),f=ae(n),b=le(n),v=pe(n),E=me(n),y=B(n),S=$(n),L=ue(n),g=async(a,s,x,d,T)=>{m.innerHTML="";let de=await c.getResultPage({forExport:!0,template:q,singleFile:!1}),P=c.getCache(),F=await ne({user:a,repo:s,config:c.getContentConfig(c.getConfig()),content:{resultPage:de,style:P.style.compiled||"",script:P.script.compiled||""},message:x,commitSource:d,singleFile:!1,newRepo:T,deps:{getLanguageExtension:c.getLanguageExtension}}).catch(H=>{H.message==="Repo name already exists"&&(m.innerHTML=H.message)});if(m.innerHTML!=="")return!1;if(F){await c.setProjectDeployRepo(s);let H=oe(F,d);return e.show(H,{size:"small",closeButton:!0}),!0}else return e.close(),t.error("Deployment failed!"),!0};o.addEventListener(r,"submit",async a=>{if(a.preventDefault(),!i)return;let s=l.value.replace(/[^A-Za-z0-9_.-]/g,"-"),x=f.value,d=b.checked,T=!0;if(!s){t.error("Repo name is required");return}p.innerHTML="Deploying...",p.disabled=!0,await g(i,s,x,d,T)||(p.innerHTML="Deploy",p.disabled=!1)}),o.addEventListener(v,"submit",async a=>{if(a.preventDefault(),!i)return;let s=y.value,x=S.value,d=L.checked,T=!1;if(!s){t.error("Repo name is required");return}E.innerHTML="Deploying...",E.disabled=!0,await g(i,s,x,d,T)});let h;import(_).then(async()=>{if(h=globalThis.autoComplete,!i)return;let a=await ee(i);o.addEventListener(y,"init",()=>{u||y.focus()});let s="#"+y.id;if(!document.querySelector(s))return;let x=new h({selector:s,placeHolder:"Search your public repos...",data:{src:a},resultItem:{highlight:{render:!0}}});o.addEventListener(x.input,"selection",function(d){let T=d.detail;x.input.blur();let U=T.selection.value;x.input.value=U})}),e.show(n,{isAsync:!0}),l.focus()};export{$n as createDeployUI,Re as deployFile};
//# sourceMappingURL=deploy.js.map
