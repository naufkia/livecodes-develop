"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6796],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=o,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||n;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9611:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=a(7462),o=(a(7294),a(3905));const n={},i="Why Another Playground?",s={unversionedId:"why",id:"why",title:"Why Another Playground?",description:"Introduction",source:"@site/docs/why.md",sourceDirName:".",slug:"/why",permalink:"/docs/why",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/why.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/overview"},next:{title:"Getting Started",permalink:"/docs/getting-started"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"What makes LiveCodes different?",id:"what-makes-livecodes-different",level:2},{value:"Language Support",id:"language-support",level:3},{value:"Client-Side!",id:"client-side",level:3},{value:"Developer Tool",id:"developer-tool",level:3},{value:"Build-Free Development Environment",id:"build-free-development-environment",level:3},{value:"Web Platform",id:"web-platform",level:3},{value:"Powerful SDK",id:"powerful-sdk",level:3},{value:"Free and Open-Source",id:"free-and-open-source",level:3}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"why-another-playground"},"Why Another Playground?"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"There are great products like ",(0,o.kt)("a",{parentName:"p",href:"https://codepen.io/"},"CodePen"),", ",(0,o.kt)("a",{parentName:"p",href:"https://jsfiddle.net/"},"JSFiddle"),", ",(0,o.kt)("a",{parentName:"p",href:"https://jsbin.com/"},"JS Bin"),", ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/"},"CodeSandbox"),", ",(0,o.kt)("a",{parentName:"p",href:"https://replit.com/"},"Replit")," and many others, which LiveCodes does not aim to replace or compete with. On the contrary, it aims to integrate with as many of these services as their APIs allow (e.g. import and export)."),(0,o.kt)("h2",{id:"what-makes-livecodes-different"},"What makes LiveCodes different?"),(0,o.kt)("h3",{id:"language-support"},"Language Support"),(0,o.kt)("p",null,"Currently, there are 60+ languages/frameworks supported. These include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Syntax used by web libraries/frameworks (e.g. JSX, TSX, Vue SFC, Svelte SFC, MDX, Astro)."),(0,o.kt)("li",{parentName:"ul"},"Languages that transpile to JavaScript (e.g. TypeScript, CoffeeScript, LiveScript, ReScript)."),(0,o.kt)("li",{parentName:"ul"},"Languages/utilities that generate CSS (e.g. SCSS, Less, Stylus, PostCSS, Tailwind CSS)."),(0,o.kt)("li",{parentName:"ul"},"Traditional programming languages (e.g. Python, Ruby, Go, PHP, C++, Lua, Scheme, Perl)."),(0,o.kt)("li",{parentName:"ul"},"Data manipulation/logic languages (e.g. SQL, Prolog)."),(0,o.kt)("li",{parentName:"ul"},"Authoring/templating languages (e.g Markdown, AsciiDoc, Pug, Handlebars, Haml)."),(0,o.kt)("li",{parentName:"ul"},"Low-code/visual editors (e.g. blockly, rich text editor)."),(0,o.kt)("li",{parentName:"ul"},"Modeling languages/graph-as-code (e.g. Gnuplot, Graphviz, Mermaid, Vega, Plotly)."),(0,o.kt)("li",{parentName:"ul"},"Languages that target WebAssembly (e.g. AssemblyScript, WebAssembly Text Format)"),(0,o.kt)("li",{parentName:"ul"},"... and others.")),(0,o.kt)("p",null,"For a full list check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/languages/"},"Languages")," section."),(0,o.kt)("p",null,"This provides a wide variety of options. Generally, if you are a developer (or want to be one), there is a big chance you will find something interesting to do with LiveCodes."),(0,o.kt)("h3",{id:"client-side"},"Client-Side!"),(0,o.kt)("p",null,"All proccessing and code transformations run in the browser on the client-side. After the initial load, using the app can be significantly faster than having to wait for server rounds. Lazy-loading is heavily used, so that only parts of the app required for the selected languages/features are downloaded."),(0,o.kt)("p",null,"The code you write in LiveCodes does not leave your computer. All projects are private unless you choose to share/export/deploy them."),(0,o.kt)("p",null,"Being client-side allows the app to be hosted on any static file server or CDN, which removes the restrictions provided by other alternatives (like server storage or memory allocation). This makes LiveCodes available for a large number of developers without requiring them to pay for servers, so it can stay free with unlimited usage \ud83d\ude0a."),(0,o.kt)("h3",{id:"developer-tool"},"Developer Tool"),(0,o.kt)("p",null,"LiveCodes aims to be a feature-rich, easy to use playground that can be used for prototyping and education. The other main goal (in fact, that was the motive for its development), is to allow library developers to use it for the documentation of their libraries and as a showcase for their products. This can be achieved by ",(0,o.kt)("a",{parentName:"p",href:"/docs/features/embeds"},"embedding playgrounds")," in documentation and educational websites. In addition, private (unpublished) modules can be imported with editor auto-completion and ",(0,o.kt)("a",{parentName:"p",href:"/docs/features/intellisense"},"intellisense"),"."),(0,o.kt)("p",null,"That can be done using the hosted app (",(0,o.kt)("a",{parentName:"p",href:"https://livecodes.io"},"livecodes.io"),"), or as a ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started#self-hosting"},"self-hosted")," option. Again, being a client-side only app, LiveCodes becomes more convenient for not needing special server requirements, while features like export and deploy are provided by APIs of external services."),(0,o.kt)("p",null,"LiveCodes does NOT aim to be a social coding platform. It will stay as a backendless developer tool. Other platforms are already doing a great job in this regards."),(0,o.kt)("h3",{id:"build-free-development-environment"},"Build-Free Development Environment"),(0,o.kt)("p",null,"LiveCodes provides many of the tools you may already be using. These include Monaco editor (that powers ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VS Code"),"), ",(0,o.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier"),", ",(0,o.kt)("a",{parentName:"p",href:"https://emmet.io/"},"Emmet"),", ",(0,o.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript"),", ",(0,o.kt)("a",{parentName:"p",href:"https://sass-lang.com/"},"SCSS"),", ",(0,o.kt)("a",{parentName:"p",href:"https://lesscss.org/"},"Less"),", ",(0,o.kt)("a",{parentName:"p",href:"https://postcss.org/"},"PostCSS"),", ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," and ",(0,o.kt)("a",{parentName:"p",href:"https://testing-library.com/"},"Testing Library"),", among others. ",(0,o.kt)("a",{parentName:"p",href:"/docs/features/npm-modules"},"NPM modules")," can be imported as usual. All that runs seamlessly in the browser without any explicit build step. It feels like a very light-weight version of your own local development environment with the keyboard shortcuts, intellisense and code navigation features."),(0,o.kt)("p",null,"It just works\u2122 without having to ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install")," anything. Not even on the server (because there is no server!)."),(0,o.kt)("p",null,"This can markedly improve productivity, reduce the mental load required for all the traditional setup and can significantly decrease the barrier to entry for learning new technologies."),(0,o.kt)("h3",{id:"web-platform"},"Web Platform"),(0,o.kt)("p",null,"The output of code written in LiveCodes is a ",(0,o.kt)("a",{parentName:"p",href:"/docs/features/result"},"web page"),". Whatever language/syntax you use, the result can ultimately be viewed as a web page which you can interact with, ",(0,o.kt)("a",{parentName:"p",href:"/docs/features/tests"},"test"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/features/share"},"share")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/features/deploy"},"deploy"),". Check the ",(0,o.kt)("a",{parentName:"p",href:"https://livecodes.io?screen=new"},"starter templates")," for examples."),(0,o.kt)("p",null,"Of course, the app can be still used as a REPL with the output seen in the integrated ",(0,o.kt)("a",{parentName:"p",href:"/docs/features/console"},"console"),". However, that's a secodary use case."),(0,o.kt)("h3",{id:"powerful-sdk"},"Powerful SDK"),(0,o.kt)("p",null,"The LiveCodes app (",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started#hosted-app"},"hosted")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started#self-hosting"},"self-hosted"),") can be ",(0,o.kt)("a",{parentName:"p",href:"/docs/features/embeds"},"embedded")," in any web page. The provided ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started#npm-package"},"library")," provides a powerful ",(0,o.kt)("a",{parentName:"p",href:"/docs/sdk/"},"SDK")," that allows the embedding page to interact with the playground (e.g. run, get/set source code, format, get result page or compiled code, get share URL, listen to changes, run tests, get test results, change layout, etc.). This enables other apps to be built on top of LiveCodes."),(0,o.kt)("p",null,"Your imagination is the limit!"),(0,o.kt)("h3",{id:"free-and-open-source"},"Free and Open-Source"),(0,o.kt)("p",null,"LiveCodes is a free product that allows unrestricted use for the hosted app and for the self-hosted option. It is licensed under the permissive ",(0,o.kt)("a",{parentName:"p",href:"/docs/license"},"MIT license")," which allows free commercial use."),(0,o.kt)("p",null,"Please consider ",(0,o.kt)("a",{parentName:"p",href:"/docs/sponsor"},"sponsoring LiveCodes")," if you find it useful, to support its maintenance and continued development."),(0,o.kt)("admonition",{title:"Under Development",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please note that LiveCodes is still in active development and may not yet be ready for production use. API may change, and performance improvements may still be required. However please take the time to try it. Your feedback and contribution are highly appreciated.")),(0,o.kt)("p",null,"Enough talk, let's get started."))}u.isMDXComponent=!0}}]);