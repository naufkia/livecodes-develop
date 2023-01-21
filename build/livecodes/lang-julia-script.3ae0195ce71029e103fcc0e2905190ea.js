"use strict";(()=>{var r="https://cdn.jsdelivr.net/npm/@chriskoch/julia-wasm@1.0.4";var i=`
let isCompilerloaded = false;
let outputBuffer = '';
let url = '${r}';
let errCalls = 0;
let ignoredErrors = [
  'still waiting on run dependencies:',
  'dependency: fp /sys.ji',
  'dependency: datafile_/julia.data',
  'dependency: wasm-instantiate',
  '(end of list)',
  'file packager has copied file data into memory, but in memory growth we are forced to copy it again (see --no-heap-copy)',
];

self.Module = {
  locateFile: (path) =>
    path === 'julia-wasm/julia.wasm'
      ? url + '/julia.wasm'
      : url + '/julia.data',
  preRun: [],
  noInitialRun: true,
  print: (stdout) => (outputBuffer += stdout + '\\n'),
  printErr: function (text) {
    errCalls++;
    if (errCalls == 1) return;
    if (arguments.length > 1) {
      text = Array.prototype.slice.call(arguments).join(' ');
    }
    if (ignoredErrors.includes(text)) return;
    console.warn(text);
  },
  postRun: [
    function () {
      self.Module._jl_initialize();
      let input = 'Base.load_InteractiveUtils()';
      let ptr = self.Module._malloc(input.length + 1);
      self.Module.stringToUTF8(input, ptr, input.length + 1);
      self.Module._jl_eval_string(ptr);
      if (self.Module.initialize_jscall_runtime)
        self.Module.initialize_jscall_runtime();
      isCompilerloaded = true;
    },
  ],
};

importScripts(url + '/julia.min.js');

let runCode = (code, input) => {
  let output = '';
  if (code) {
    if (input) {
      code = 'livescodesInput = ' + input + '\\n' + code;
    }
    let ptr = self.Module._malloc(code.length + 1);
    self.Module.stringToUTF8(code, ptr, code.length + 1);
    self.Module._jl_eval_and_print(ptr);
    output = getOutput();
  }
  outputBuffer = '';
  return output;
};

function getOutput() {
  if (outputBuffer.endsWith('nothing\\n')) {
    outputBuffer = outputBuffer.slice(0, outputBuffer.length - 8);
    outputBuffer += '\\nReturn Type: nothing';
  } else {
    outputBuffer = outputBuffer.split('typeof(').join('\\nReturn Type: typeof(');
  }
  return outputBuffer;
}

const waitForCompiler = () =>
  new Promise((resolve, reject) => {
    const i = setInterval(() => {
      if (isCompilerloaded) {
        clearInterval(i);
        return resolve();
      }
    }, 50);
  });

waitForCompiler().then(() => postMessage({ loaded: true }));

addEventListener('message', async (e) => {
  await waitForCompiler();
  const code = e.data.code;
  const input = e.data.input;
  const output = code.trim() ? runCode(code, input) : null;
  postMessage({ output });
});
`;livecodes.julia=livecodes.julia||{};livecodes.julia.run=livecodes.julia.run||(t=>new Promise(n=>{let o="";livecodes.julia.input=t,livecodes.julia.output="",document.querySelectorAll('script[type="text/julia"]').forEach(s=>o+=s.innerHTML+`
`),livecodes.julia.worker.onmessage=function(s){if(s.data.loaded){console.log("Julia compiler loaded!"),livecodes.julia.worker.loaded=!0;return}let e=s.data.output;e!=null&&console.log(e),livecodes.julia.output=e,livecodes.julia.ready=!0,n(e)},livecodes.julia.worker.postMessage({code:o,input:`"${String(t??"")}"`})}));livecodes.julia.loaded=new Promise(async function(t){let n=setInterval(()=>{if(livecodes.julia.ready)return clearInterval(n),t()},50)});window.addEventListener("load",async()=>{livecodes.julia.ready=!1,parent.postMessage({type:"loading",payload:!0},"*"),(()=>{livecodes.julia.worker||(console.log("Loading Julia compiler..."),livecodes.julia.worker=new Worker("data:text/javascript;base64,"+btoa(i)))})(),await livecodes.julia.run(livecodes.julia.input),parent.postMessage({type:"loading",payload:!1},"*")});})();
//# sourceMappingURL=lang-julia-script.js.map
