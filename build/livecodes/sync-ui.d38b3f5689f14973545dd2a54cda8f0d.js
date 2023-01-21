var h=`<div id="sync-container" class="modal-container">
  <div class="modal-title">Sync to GitHub Repo</div>
  <div id="sync-status" class="modal-status"></div>
  <ul id="sync-tabs" class="modal-tabs">
    <li data-target="new-repo" class="active">Create New Repo</li>
    <li data-target="existing-repo">Existing Repo</li>
  </ul>
  <div id="sync-screens" class="modal-screen-container">
    <div id="new-repo" class="tab-content active">
      <div class="modal-screen">
        <form id="new-repo-form">
          <div>
            <label for="new-repo-name"
              >Repo Name <span id="new-repo-name-error" class="error"></span
            ></label>
            <input type="text" id="new-repo-name" placeholder="Required" />
          </div>
          <div class="padded">
            <input type="checkbox" id="new-repo-autosync" checked />
            <label for="new-repo-autosync">Auto sync</label>
          </div>
          <button id="new-repo-btn" class="wide-button start-sync-btn" type="submit">Sync</button>
        </form>
        <div class="description">
          A new <strong>private</strong> repo will be created. Your LiveCodes local data will be
          synchronized with <span class="code">main</span> branch.
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
          <div class="padded">
            <input type="checkbox" id="existing-repo-autosync" checked />
            <label for="existing-repo-autosync">Auto sync</label>
          </div>
          <button id="existing-repo-btn" class="wide-button start-sync-btn" type="submit">
            sync
          </button>
        </form>
        <div class="description">
          Your LiveCodes local data will be synchronized with
          <span class="code">main</span> branch.
        </div>
      </div>
    </div>
  </div>
</div>
`;var v="https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.6/dist/autoComplete.min.js";var D=(e,s)=>({Accept:`application/vnd.github.v3${s?"."+s:""}+json`,"Content-Type":"application/json",Authorization:"token "+e.token});var M=async(e,s="public")=>{let n=1,t=100,o=5,c=[];for(;n<=o;){let i=await fetch(`https://api.github.com/user/repos?type=${s}&per_page=${t}&page=${n}`,{method:"GET",cache:"no-store",headers:D(e)});if(n+=1,!i.ok)continue;let r=await i.json();c.push(...r.map(a=>a.name)),r.length<t&&(n=o+1)}return c};var f=()=>document.querySelector("#sync-link");var H=e=>e.querySelector("#new-repo-form");var j=e=>e.querySelector("#new-repo-name");var w=e=>e.querySelector("#new-repo-autosync"),q=e=>e.querySelector("#existing-repo-form");var E=e=>e.querySelector("#existing-repo-name");var U=e=>e.querySelector("#existing-repo-autosync");var k=e=>(e||document).querySelector("#sync-status"),B=e=>(e||document).querySelectorAll(".start-sync-btn");var $=(e,s)=>{let n=document.createElement("div");n.innerHTML=h;let t=n.firstChild,o=t.querySelectorAll("#sync-tabs li");return o.forEach(c=>{e.addEventListener(c,"click",()=>{o.forEach(r=>r.classList.remove("active")),c.classList.add("active"),document.querySelectorAll("#sync-screens > div").forEach(r=>{r.classList.remove("active")});let i=t.querySelector("#"+c.dataset.target);i?.classList.add("active"),i?.querySelector("input")?.focus()})}),s&&setTimeout(()=>{o[1].click();let c=E(t);c.value=s}),t},S="Sync in progress...",x=()=>f()?.dataset.hint===S,g=({inProgress:e,lastSync:s,syncContainer:n})=>{let t=f(),o=k(n),c=B(n),i=s?`Last sync: ${new Date(s).toLocaleString()}`:"";o&&(o.innerText=i),e??x()?(t&&(t.classList.add("hint--bottom"),t.dataset.hint=S),c?.forEach(r=>{r.innerHTML=S,r.disabled=!0})):(t&&(t.classList.toggle("hint--bottom",Boolean(i)),t.dataset.hint=i),c?.forEach(r=>{r.innerHTML="Sync",r.disabled=!1}))},te=async({baseUrl:e,modal:s,notifications:n,eventsManager:t,user:o,stores:c,deps:i})=>{let r=await i.getSyncData(),a=$(t,r?.repo),I=H(a),L=j(a),A=w(a),C=q(a),y=E(a),R=U(a);g({inProgress:x(),lastSync:r?.lastSync,syncContainer:a});let P=import(e+"sync.212a40e50050d27267b7e9ade5e4f1f5.js"),b=(d,l,p)=>(n.info("Sync started..."),s.close(),P.then(async u=>{if(!await u.sync({user:d,repo:l,newRepo:p,stores:c})){n.error("Sync failed!");return}n.success("Sync complete!")}).catch(()=>{n.error("Sync failed!")}));t.addEventListener(I,"submit",async d=>{if(d.preventDefault(),!o||x())return;let l=L.value,p=A.checked,u=!0;if(!l){n.error("Repo name is required");return}g({inProgress:!0}),await b(o,l,u);let m=Date.now();await i.setSyncData({autosync:p,repo:l,lastSync:m}),g({inProgress:!1,lastSync:m})}),t.addEventListener(C,"submit",async d=>{if(d.preventDefault(),!o||x())return;let l=y.value,p=R.checked,u=!1;if(!l){n.error("Repo name is required");return}g({inProgress:!0}),await b(o,l,u);let m=Date.now();await i.setSyncData({autosync:p,repo:l,lastSync:m}),g({inProgress:!1,lastSync:m})});let T;import(v).then(async()=>{if(T=globalThis.autoComplete,!o)return;let d=await M(o,"all");t.addEventListener(y,"init",()=>{y.focus()});let l="#"+y.id;if(!document.querySelector(l))return;let p=new T({selector:l,placeHolder:"Search your repos...",data:{src:d},resultItem:{highlight:{render:!0}}});t.addEventListener(p.input,"selection",function(u){let m=u.detail;p.input.blur();let F=m.selection.value;p.input.value=F})}),s.show(a,{isAsync:!0}),L.focus()};export{te as createSyncUI,x as isSyncInProgress,g as updateSyncStatus};
//# sourceMappingURL=sync-ui.js.map
