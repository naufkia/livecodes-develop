"use strict";(()=>{var r="https://cdn.jsdelivr.net/npm/@chriskoch/cpp-wasm@1.0.2";var c=`
var window = self;
const url = '${r}';
importScripts(url + '/shared.min.js');

window.CPP_READY.then(() => postMessage({ loaded: true }));

const runCode = async (code, input) => {
  let output = null;
  let error = null;
  let exitCode = 0;
  try {
    window.CPP.memfs.setStdinStr(input ?? "");
    await window.CPP.compileLinkRun(code);
    output = window.CPP_OUTPUT;
  } catch (err) {
    error = err.message ?? err;
    exitCode = err.code ?? 1;
  } finally {
    window.CPP.memfs.setStdinStr("");
    window.CPP_OUTPUT = "";
  }
  return {input, output, error, exitCode};
}

addEventListener('message', async (e) => {
  await window.CPP_READY;
  const code = e.data.code;
  const input = e.data.input;
  const result = code.trim() ? await runCode(code, input) : {};
  postMessage(result);
});
`;livecodes.cpp=livecodes.cpp||{};livecodes.cpp.run=livecodes.cpp.run||(s=>new Promise(n=>{let o="";livecodes.cpp.input=s,livecodes.cpp.output=null,document.querySelectorAll('script[type="text/cpp"]').forEach(e=>o+=e.innerHTML+`
`),livecodes.cpp.worker.onmessage=function(e){if(e.data.loaded){console.log("Clang compiler loaded!"),livecodes.cpp.worker.loaded=!0;return}let t=e.data;t.error!=null?console.error(t.error):t.output!=null&&console.log(t.output),livecodes.cpp.input=t.input,livecodes.cpp.output=t.output,livecodes.cpp.error=t.error,livecodes.cpp.exitCode=t.exitCode,livecodes.cpp.ready=!0,n(t)},livecodes.cpp.worker.postMessage({code:o,input:`${String(s??"")}`})}));livecodes.cpp.loaded=new Promise(async function(s){let n=setInterval(()=>{if(livecodes.cpp.ready)return clearInterval(n),s()},50)});window.addEventListener("load",async()=>{livecodes.cpp.ready=!1,parent.postMessage({type:"loading",payload:!0},"*"),(()=>{livecodes.cpp.worker||(console.log("Loading Clang compiler..."),livecodes.cpp.worker=new Worker("data:text/javascript;base64,"+btoa(c)))})(),await livecodes.cpp.run(livecodes.cpp.input),parent.postMessage({type:"loading",payload:!1},"*")});})();
//# sourceMappingURL=lang-cpp-clang-script.js.map
