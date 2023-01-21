var p=`<div id="broadcast-container" class="modal-container">
  <div class="modal-title">Broadcast</div>
  <div id="broadcast-status" class="modal-status"></div>
  <div id="broadcast-screen-container" class="modal-screen-container">
    <div class="modal-screen">
      <div class="description">
        Broadcast the result page to other browsers/devices in real time. Please visit the
        <a href="/docs/features/broadcast" target="_blank" rel="noopener">documentations</a>
        for details.
      </div>
      <form id="broadcast-form">
        <div>
          <label for="broadcast-server-url">Server URL</label>
          <input type="text" id="broadcast-server-url" placeholder="Required" />
        </div>
        <div class="padded">
          <input type="checkbox" id="broadcast-source" />
          <label for="broadcast-source">Include source code</label>
        </div>
        <button id="broadcast-btn" class="wide-button" type="submit">Broadcast</button>
        <div id="broadcast-channel-url-section">
          <label>Channel URL</label>
          <a id="broadcast-channel-url" href="#" target="_blank"></a>
        </div>
      </form>
    </div>
  </div>
</div>
`;var E={getUrl:()=>"https://livecodes-broadcast.onrender.com/"};var S=e=>e.querySelector("#broadcast-status"),M=e=>e.querySelector("#broadcast-form"),H=e=>e.querySelector("#broadcast-server-url"),x=e=>e.querySelector("#broadcast-source"),y=e=>e.querySelector("#broadcast-btn"),q=e=>e.querySelector("#broadcast-channel-url-section"),b=e=>e.querySelector("#broadcast-channel-url");var w=async({modal:e,notifications:u,eventsManager:B,deps:n})=>{let i=document.createElement("div");i.innerHTML=p;let o=i.firstChild;e.show(o);let d=S(o),f=M(o),r=H(o),s=x(o),c=y(o),g=q(o),T=b(o),t=n.getBroadcastData(),a=()=>{c.disabled=!1,t=n.getBroadcastData(),t?.isBroadcasting?(d.innerText="Broadcasting...",r.disabled=!0,s.disabled=!0,c.innerText="Stop broadcast",s.checked=t?.broadcastSource===!0,t?.channelUrl&&(g.style.display="unset",T.innerText=t.channelUrl,T.href=t.channelUrl)):(d.innerText="",r.disabled=!1,s.disabled=!1,c.innerText="Broadcast",g.style.display="none"),r.value=r.value.trim()||t?.serverUrl||E.getUrl()};a(),B.addEventListener(f,"submit",async h=>{if(h.preventDefault(),t=n.getBroadcastData(),t?.isBroadcasting){let L=t.serverUrl;fetch(L,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({channel:t.channel,channelToken:t.channelToken,stop:!0})}).catch(()=>{}),n.setBroadcastData({isBroadcasting:!1,channel:"",channelUrl:"",channelToken:"",broadcastSource:!1,serverUrl:L}),a();return}let m=r.value.trim();if(!m){u.error("Server URL is required!");return}c.disabled=!0,c.innerText="Connecting...";let l=await n.broadcast({serverUrl:m,channel:"",channelToken:"",broadcastSource:s.checked});if(!l||"error"in l){u.error("Broadcast failed!"),a();return}n.setBroadcastData({isBroadcasting:!0,serverUrl:m,channel:l.channel,channelUrl:l.channelUrl,channelToken:l.channelToken||"",broadcastSource:s.checked}),a(),u.success("Broadcasting...")})};export{w as createBroadcastUI};
//# sourceMappingURL=broadcast.js.map
