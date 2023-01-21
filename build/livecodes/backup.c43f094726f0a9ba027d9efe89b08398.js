var x=`<div id="backup-container" class="modal-container">
  <div class="modal-title">Backup / Restore</div>
  <ul id="backup-tabs" class="modal-tabs">
    <li data-target="backup" class="active">Backup</li>
    <li data-target="restore">Restore</li>
  </ul>
  <div id="backup-screens" class="modal-screen-container">
    <div id="backup" class="tab-content active">
      <div class="modal-screen">
        <div class="description">
          Backup LiveCodes data, so that it can be later restored on this or other device. <br />
          Please visit the
          <a href="/docs/features/backup-restore" target="_blank" rel="noopener">documentations</a>
          for details.
        </div>
        <form id="backup-form">
          <div id="backup-stores">
            <div class="backup-store">
              <input type="checkbox" id="backup-projects-checkbox" data-store="projects" checked />
              <label for="backup-projects-checkbox">Projects</label>
            </div>
            <div class="backup-store">
              <input
                type="checkbox"
                id="backup-templates-checkbox"
                data-store="templates"
                checked
              />
              <label for="backup-templates-checkbox">User Templates</label>
            </div>
            <div class="backup-store">
              <input type="checkbox" id="backup-snippets-checkbox" data-store="snippets" checked />
              <label for="backup-snippets-checkbox">Code Snippets</label>
            </div>
            <div class="backup-store">
              <input type="checkbox" id="backup-assets-checkbox" data-store="assets" checked />
              <label for="backup-assets-checkbox">Assets</label>
            </div>
            <div class="backup-store">
              <input
                type="checkbox"
                id="backup-user-settings-checkbox"
                data-store="userConfig"
                checked
              />
              <label for="backup-user-settings-checkbox">User Settings</label>
            </div>
          </div>
          <button id="backup-btn" class="wide-button" type="submit">Backup</button>
        </form>
      </div>
    </div>
    <div id="restore" class="tab-content">
      <div class="modal-screen">
        <div class="description">
          Restore previously backed-up LiveCodes data. <br />
          If you choose to replace current content, you may want to back it up first. <br />
          Please visit the
          <a href="/docs/features/backup-restore" target="_blank" rel="noopener">documentations</a>
          for details.
        </div>
        <form id="restore-form">
          <div class="input-container">
            <span>
              <input
                type="radio"
                name="restore-mode"
                id="restore-mode-replace"
                value="replace"
                checked
              />
              <label class="radio-label" for="restore-mode-replace">Replace current content</label>
            </span>
            <span>
              <input type="radio" name="restore-mode" id="restore-mode-merge" value="merge" />
              <label class="radio-label" for="restore-mode-merge">Merge with current content</label>
            </span>
          </div>

          <label for="file-input" class="file-input-label">Restore from file</label>
          <input
            type="file"
            id="file-input"
            class="file-input"
            accept=".zip,zip,application/zip,application/x-zip,application/x-zip-compressed"
          />
        </form>
      </div>
    </div>
  </div>
</div>
`;var C=(e,n="_")=>e.replace(/[\W]+/g,n);var E=(e,n,s)=>{let r=document.createElement("a");r.style.display="none",r.href=s,r.download=C(e)+"."+n,r.click(),r.remove()};var T=()=>{let e=new Date,n=e.getTimezoneOffset();return e=new Date(e.getTime()-n*60*1e3),e.toISOString().split("T")[0]};var S=e=>new Uint8Array(atob(e).split("").map(n=>n.charCodeAt(0)));var y="https://cdn.skypack.dev/-/jszip@v3.7.1-quihaZrSeNyrwABoIb7Z/dist=es2020,mode=imports,min/optimized/jszip.js";var v=e=>e.querySelector("#file-input");var M=e=>e.querySelector("#backup-form"),H=e=>e.querySelector("#backup-btn"),j=e=>e.querySelectorAll('#backup input[type="checkbox"]:checked');var R=e=>{let n=document.createElement("div");n.innerHTML=x;let s=n.firstChild,r=s.querySelectorAll("#backup-tabs li");return r.forEach(p=>{e.addEventListener(p,"click",()=>{r.forEach(c=>c.classList.remove("active")),p.classList.add("active"),document.querySelectorAll("#backup-screens > div").forEach(c=>{c.classList.remove("active")});let m=s.querySelector("#"+p.dataset.target);m?.classList.add("active"),m?.querySelector("input")?.focus()})}),s},V=({baseUrl:e,modal:n,notifications:s,eventsManager:r,stores:p,deps:m})=>{let c=R(r),h=M(c),f=H(c),b=v(c),L=import(e+"sync.212a40e50050d27267b7e9ade5e4f1f5.js"),k=async t=>{window.JSZip||(window.JSZip=(await import(y)).default);let l=new window.JSZip;t.forEach(({filename:g,content:u})=>{l.file(g,u)});let i=await l.generateAsync({type:"base64"}),o="livecodes_backup_"+T(),d="zip",a="data:application/zip;base64,"+encodeURIComponent(i);E(o,d,a)},q=async()=>{let t=[...j(c)].map(o=>o.dataset.store).filter(Boolean);if(t.length===0){s.warning("Please select at least one store to backup");return}t.includes("userConfig")&&(t.push("userData"),t.push("appData"));let l=await L,i=await Promise.all(t.filter(o=>Boolean(p[o])).map(async o=>({filename:o+".b64",content:await l.exportStoreAsBase64Update({storage:p[o]})})));await k(i)},U=t=>new Promise((l,i)=>{if(t.files?.length===0)return;let o=t.files[0];if(!o.name.endsWith(".zip")){i("Error: Incorrect file type");return}let d=20*1024*1024;if(o.size>d){i("Error: Exceeded size 20MB");return}l(o)}),w=async t=>{window.JSZip||(window.JSZip=(await import(y)).default);let i=(await window.JSZip.loadAsync(t)).file(/\.b64$/);return Promise.all(i.map(async o=>({filename:o.name,content:await o.async("string")})))},B=async t=>{let l=await L,o=new FormData(h).get("restore-mode")==="merge";for(let a of t){let g=a.filename.slice(0,-4),u=p[g];if(u){let I=S(a.content);await l.restoreFromUpdate({update:I,storage:u,mergeCurrent:o})}}t.find(a=>a.filename.startsWith("user"))&&m.loadUserConfig(),s.success("Restored Successfully!")};r.addEventListener(h,"submit",async t=>{t.preventDefault(),f.disabled=!0,await q(),f.disabled=!1}),r.addEventListener(b,"change",()=>{Promise.resolve(b).then(U).then(w).then(B).catch(t=>{s.error(t)})}),n.show(c,{isAsync:!0})};export{V as createBackupUI};
//# sourceMappingURL=backup.js.map
