import{h as V,onMounted as D,onUnmounted as J,ref as F}from"vue";var O=async(n,f={})=>{let{appUrl:y="https://livecodes.io/",params:d={},config:s={},import:l,lite:C=!1,loading:L="lazy",template:I,view:q="split"}=f,o;if(typeof n=="string"?o=document.querySelector(n):o=n,!n)throw new Error("Container element is required.");if(!o)throw new Error(`Cannot find element: "${n}"`);let a;try{a=new URL(y)}catch(e){throw new Error(`"${y}" is not a valid URL.`)}let u=a.origin;if(typeof d=="object"&&Object.keys(d).forEach(e=>{a.searchParams.set(e,String(d[e]))}),typeof s=="string")a.searchParams.set("config",s);else if(typeof s=="object"&&Object.keys(s).length>0)try{let e=btoa(JSON.stringify(s));a.searchParams.set("config","data:application/json;base64,"+e)}catch(e){throw new Error("Invalid configuration object.")}I&&a.searchParams.set("template",I),l&&a.searchParams.set("x",l),a.searchParams.set(C?"lite":"embed","true"),a.searchParams.set("loading",L),a.searchParams.set("view",q);let P=!1,h=!1,b="Cannot call API methods after calling `destroy()`.",E=await(()=>new Promise(e=>{var g,x,p,v,m,T,k,H,N;if(!o)return;let r=o.dataset.height||o.style.height;if(r){let R=isNaN(Number(r))?r:r+"px";o.style.height=R}o.dataset.defaultStyles!=="false"&&((g=o.style).backgroundColor||(g.backgroundColor="#fff"),(x=o.style).border||(x.border="1px solid black"),(p=o.style).borderRadius||(p.borderRadius="5px"),(v=o.style).boxSizing||(v.boxSizing="border-box"),(m=o.style).padding||(m.padding="0"),(T=o.style).width||(T.width="100%"),(k=o.style).height||(k.height=o.style.height||"300px"),o.style.minHeight="200px",(H=o.style).overflow||(H.overflow="hidden"),(N=o.style).resize||(N.resize="vertical"));let t=document.createElement("iframe");t.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),t.setAttribute("allowtransparency","true"),t.setAttribute("allowpaymentrequest","true"),t.setAttribute("allowfullscreen","true"),t.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");let c=L==="eager"?"eager":"lazy";t.setAttribute("loading",c),t.classList.add("livecodes"),t.style.height="100%",t.style.minHeight="200px",t.style.width="100%",t.style.margin="0",t.style.border="0",t.style.borderRadius=o.style.borderRadius,t.src=a.href,t.onload=()=>{addEventListener("message",function R(M){var U;M.source!==t.contentWindow||M.origin!==u||((U=M.data)==null?void 0:U.type)==="livecodes-ready"&&(removeEventListener("message",R),P=!0)}),e(t)},o.innerHTML="",o.appendChild(t)}))(),z=(e=100)=>new Promise(r=>{setTimeout(r,e)}),S=()=>h?Promise.reject(b):new Promise(async e=>{var t;let r={type:"livecodes-load"};for((t=E.contentWindow)==null||t.postMessage(r,u);!P;)await z();e()}),i=(e,r)=>new Promise(async(t,c)=>{var g;if(h)return c(b);P||await S(),addEventListener("message",function x(p){var v;if(!(p.source!==E.contentWindow||p.origin!==u||((v=p.data)==null?void 0:v.type)!=="livecodes-api-response")&&p.data.method===e){removeEventListener("message",x);let m=p.data.payload;m!=null&&m.error?c(m.error):t(m)}}),(g=E.contentWindow)==null||g.postMessage({method:e,args:r},u)}),w=[],W=e=>{if(h)throw new Error(b);return w.push(e),{remove:()=>{w=w.filter(r=>r!==e)}}};addEventListener("message",async e=>{var c;if(e.source!==E.contentWindow||e.origin!==u||((c=e.data)==null?void 0:c.type)!=="livecodes-change")return;let r=await i("getCode"),t=await i("getConfig");w.forEach(g=>{g({code:r,config:t})})});let A=()=>{w.length=0,o&&(o.innerHTML=""),h=!0};return L==="lazy"&&"IntersectionObserver"in window&&new IntersectionObserver((r,t)=>{r.forEach(async c=>{c.isIntersecting&&(await S(),t.unobserve(o))})},{rootMargin:"150px"}).observe(o),{load:()=>S(),run:()=>i("run"),format:e=>i("format",[e]),getShareUrl:e=>i("getShareUrl",[e]),getConfig:e=>i("getConfig",[e]),setConfig:e=>i("setConfig",[e]),getCode:()=>i("getCode"),show:(e,r)=>i("show",[e,r]),runTests:()=>i("runTests"),onChange:e=>W(e),exec:(e,...r)=>i("exec",[e,...r]),destroy:()=>P?i("destroy").then(A):h?Promise.reject(b):(A(),Promise.resolve())}},j;globalThis.document&&document.currentScript&&"prefill"in((j=document.currentScript)==null?void 0:j.dataset)&&window.addEventListener("load",()=>{document.querySelectorAll(".livecodes").forEach(n=>{let f,y=n.dataset.options;if(y)try{f=JSON.parse(y)}catch(l){}let d,s=n.dataset.config||n.dataset.prefill;if(s)try{d=JSON.parse(s)}catch(l){}O(n,{import:"dom/"+encodeURIComponent(n.outerHTML),...f,...d?{config:d}:{}})})});var Q={appUrl:String,config:[Object,String],import:String,lite:Boolean,loading:String,params:Object,template:String,view:String,height:String},$={props:Q,emits:["sdkReady"],setup(n,f){let{height:y,...d}=n,s=F(),l;return D(()=>{s.value&&O(s.value,d).then(C=>{l=C,f.emit("sdkReady",C)})}),J(()=>{l==null||l.destroy()}),()=>V("div",{ref:s,"data-height":y})}},Y=$;export{Y as default};
//# sourceMappingURL=vue.js.map