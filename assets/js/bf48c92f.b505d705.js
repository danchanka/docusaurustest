(window.webpackJsonp=window.webpackJsonp||[]).push([[513,460],{57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"CodeSample",(function(){return d})),n.d(t,"default",(function(){return y}));var o=n(3),r=n(7),a=n(0),c=n.n(a),s=n(749),i=n(753),l={},u={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},p=[],d=function(e){var t=e.url,n=e.lines,o=Object(a.useState)(""),r=o[0],l=o[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),r?n?Object(s.b)(c.a.Fragment,null,Object(s.b)(i.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},r),Object(s.b)("br",null)):Object(s.b)(c.a.Fragment,null,Object(s.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(s.b)("br",null)):Object(s.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:p,CodeSample:d};function y(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}y.isMDXComponent=!0},584:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(749)),c=n(57),s={title:"Exception handling (TRY)"},i={unversionedId:"Exception_handling_TRY_",id:"version-1.0.0/Exception_handling_TRY_",isDocsHomePage:!1,title:"Exception handling (TRY)",description:"The exception handling operator enables you to execute an action and do the following if an error (exception) occurs:",source:"@site/versioned_docs/version-1.0.0/Exception_handling_TRY_.md",slug:"/Exception_handling_TRY_",permalink:"/docusaurustest/docs/Exception_handling_TRY_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/Exception_handling_TRY_.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"New threads (NEWTHREAD, NEWEXECUTOR)",permalink:"/docusaurustest/docs/New_threads_NEWTHREAD_NEWEXECUTOR_"},next:{title:"State change: Overview",permalink:"/docusaurustest/docs/State_change"}},l=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"exception handling")," operator enables you to execute an action and do the following if an error (exception) occurs:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ignore this error,\xa0"),Object(a.b)("li",{parentName:"ul"},"execute a different action, then pass the error to the top action (as if the operation didn't exist),"),Object(a.b)("li",{parentName:"ul"},"execute a different action regardless of whether there's been an error or not, then pass the error to the top action (as if this operator didn't exist)")),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"To declare an exception handling action, use the\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/TRY_operator"},Object(a.b)("strong",{parentName:"a"},"TRY")," operator"),"."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=try",mdxType:"CodeSample"}))}p.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.a.createElement(y,s(s({ref:t},l),{},{components:n})):r.a.createElement(y,s({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},751:function(e,t,n){"use strict";var o=n(0),r=n(754);t.a=function(){var e=Object(o.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},752:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},753:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var o=n(3),r=n(0),a=n.n(r),c=n(755),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(23).a,theme:s};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function f(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var h=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=u({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==r&&(a.style=void 0!==a.style?u({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),l(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var c=o?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(s))}})),l(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,c=u({},f(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?u({},c.style,r):r),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,c=0,s=[],i=[s];c>-1;){for(;(a=o[c]++)<r[c];){var l=void 0,u=t[c],y=n[c][a];if("string"==typeof y?(u=c>0?u:["plain"],l=y):(u=m(u,y.type),y.alias&&(u=m(u,y.alias)),l=y.content),"string"==typeof l){var f=l.split(p),h=f.length;s.push({types:u,content:f[0]});for(var g=1;g<h;g++)d(s),i.push(s=[]),s.push({types:u,content:f[g]})}else c++,t.push(u),n.push(l),o.push(0),r.push(l.length)}c--,t.pop(),n.pop(),o.pop(),r.pop()}return d(s),i}(void 0!==c?t.tokenize(o,c,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var g=n(752),b=n.n(g),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(751),O=n(750),k=function(){var e=Object(O.useThemeConfig)().prism,t=Object(j.a)().isDarkTheme,n=e.theme||v,o=e.darkTheme||n;return t?o:n},x=n(756),T=n(58),E=n.n(T),C=/{([\d,-]+)}/,w=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+o+")\\s*$")},N=/(?:title=")(.*)(?:")/;function S(e){var t=e.children,n=e.className,s=e.metastring,l=Object(O.useThemeConfig)().prism,u=Object(r.useState)(!1),p=u[0],d=u[1],m=Object(r.useState)(!1),y=m[0],f=m[1];Object(r.useEffect)((function(){f(!0)}),[]);var g=Object(r.useRef)(null),v=[],j="",T=k(),S=Array.isArray(t)?t.join(""):t;if(s&&C.test(s)){var _=s.match(C)[1];v=b()(_).filter((function(e){return e>0}))}s&&N.test(s)&&(j=s.match(N)[1]);var P=n&&n.replace(/language-/,"");!P&&l.defaultLanguage&&(P=l.defaultLanguage);var D=S.replace(/\n$/,"");if(0===v.length&&void 0!==P){for(var R,B="",L=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"]);case"jsx":case"tsx":return w(["js","jsBlock","jsx"]);case"html":return w(["js","jsBlock","html"]);case"python":case"py":return w(["python"]);default:return w()}}(P),A=S.replace(/\n$/,"").split("\n"),Y=0;Y<A.length;){var I=Y+1,M=A[Y].match(L);if(null!==M){switch(M.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":B+=I+",";break;case"highlight-start":R=I;break;case"highlight-end":B+=R+"-"+(I-1)+","}A.splice(Y,1)}else Y+=1}v=b()(B),D=A.join("\n")}var X=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let a=!1;r.rangeCount>0&&(a=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}n.remove(),a&&(r.removeAllRanges(),r.addRange(a)),o&&o.focus()}(D),d(!0),setTimeout((function(){return d(!1)}),2e3)};return a.a.createElement(h,Object(o.a)({},i,{key:String(y),theme:T,code:D,language:P}),(function(e){var t,n=e.className,r=e.style,s=e.tokens,i=e.getLineProps,l=e.getTokenProps;return a.a.createElement("div",{className:E.a.codeBlockContainer},j&&a.a.createElement("div",{style:r,className:E.a.codeBlockTitle},j),a.a.createElement("div",{className:Object(c.a)(E.a.codeBlockContent,P)},a.a.createElement("div",{tabIndex:0,className:Object(c.a)(n,E.a.codeBlock,"thin-scrollbar",(t={},t[E.a.codeBlockWithTitle]=j,t))},a.a.createElement("div",{className:E.a.codeBlockLines,style:r},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(o.a)({key:t},n),e.map((function(e,t){return a.a.createElement("span",Object(o.a)({key:t},l({token:e,key:t})))})))})))),a.a.createElement("button",{ref:g,type:"button","aria-label":Object(x.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(c.a)(E.a.copyButton),onClick:X},p?a.a.createElement(x.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(x.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},754:function(e,t,n){"use strict";var o=n(0),r=n.n(o).a.createContext(void 0);t.a=r}}]);