(window.webpackJsonp=window.webpackJsonp||[]).push([[33,460],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(749)),s=n(57),c={title:"Write file (WRITE)"},i={unversionedId:"Write_file_WRITE_",id:"version-1.0.0/Write_file_WRITE_",isDocsHomePage:!1,title:"Write file (WRITE)",description:"The\xa0write file operator creates an\xa0action which reads a file from the value of some property and saves it to the defined source.",source:"@site/versioned_docs/version-1.0.0/Write_file_WRITE_.md",slug:"/Write_file_WRITE_",permalink:"/docusaurustest/docs/Write_file_WRITE_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/Write_file_WRITE_.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Read file (READ)",permalink:"/docusaurustest/docs/Read_file_READ_"},next:{title:"Data import (IMPORT)",permalink:"/docusaurustest/docs/Data_import_IMPORT_"}},l=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The\xa0",Object(a.b)("em",{parentName:"p"},"write file")," operator creates an\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"action")," which reads a file from the value of some property and saves it to the defined source."),Object(a.b)("p",null,"The source is set as a\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Properties"},"property")," whose values are instances of\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Built-in_classes"},"string classes"),".\xa0The following types of data sources (URLs) are supported:\xa0",Object(a.b)("strong",{parentName:"p"},"FILE"),", ",Object(a.b)("strong",{parentName:"p"},"FTP"),", ",Object(a.b)("strong",{parentName:"p"},"SFTP")),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"To declare an action that writes a file, use the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/WRITE_operator"},Object(a.b)("strong",{parentName:"a"},"WRITE")," operator"),"."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=write",mdxType:"CodeSample"}))}p.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"CodeSample",(function(){return d})),n.d(t,"default",(function(){return f}));var r=n(3),o=n(7),a=n(0),s=n.n(a),c=n(749),i=n(753),l={},u={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},p=[],d=function(e){var t=e.url,n=e.lines,r=Object(a.useState)(""),o=r[0],l=r[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),o?n?Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:p,CodeSample:d};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}f.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},751:function(e,t,n){"use strict";var r=n(0),o=n(754);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},752:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},753:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var r=n(3),o=n(0),a=n.n(o),s=n(755),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(23).a,theme:c};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},f=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=u({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=u({},n,{backgroundColor:null}),o};function y(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var b=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?f(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=u({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==o&&(a.style=void 0!==a.style?u({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),l(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var s=r?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(c))}})),l(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,s=u({},y(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?u({},s.style,o):o),void 0!==n&&(s.key=n),r&&(s.className+=" "+r),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),s=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,s=0,c=[],i=[c];s>-1;){for(;(a=r[s]++)<o[s];){var l=void 0,u=t[s],f=n[s][a];if("string"==typeof f?(u=s>0?u:["plain"],l=f):(u=m(u,f.type),f.alias&&(u=m(u,f.alias)),l=f.content),"string"==typeof l){var y=l.split(p),b=y.length;c.push({types:u,content:y[0]});for(var h=1;h<b;h++)d(c),i.push(c=[]),c.push({types:u,content:y[h]})}else s++,t.push(u),n.push(l),r.push(0),o.push(l.length)}s--,t.pop(),n.pop(),r.pop(),o.pop()}return d(c),i}(void 0!==s?t.tokenize(r,s,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var h=n(752),g=n.n(h),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(751),O=n(750),k=function(){var e=Object(O.useThemeConfig)().prism,t=Object(j.a)().isDarkTheme,n=e.theme||v,r=e.darkTheme||n;return t?r:n},T=n(756),x=n(58),E=n.n(x),C=/{([\d,-]+)}/,w=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},N=/(?:title=")(.*)(?:")/;function _(e){var t=e.children,n=e.className,c=e.metastring,l=Object(O.useThemeConfig)().prism,u=Object(o.useState)(!1),p=u[0],d=u[1],m=Object(o.useState)(!1),f=m[0],y=m[1];Object(o.useEffect)((function(){y(!0)}),[]);var h=Object(o.useRef)(null),v=[],j="",x=k(),_=Array.isArray(t)?t.join(""):t;if(c&&C.test(c)){var P=c.match(C)[1];v=g()(P).filter((function(e){return e>0}))}c&&N.test(c)&&(j=c.match(N)[1]);var S=n&&n.replace(/language-/,"");!S&&l.defaultLanguage&&(S=l.defaultLanguage);var D=_.replace(/\n$/,"");if(0===v.length&&void 0!==S){for(var R,I="",B=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"]);case"jsx":case"tsx":return w(["js","jsBlock","jsx"]);case"html":return w(["js","jsBlock","html"]);case"python":case"py":return w(["python"]);default:return w()}}(S),W=_.replace(/\n$/,"").split("\n"),L=0;L<W.length;){var A=L+1,F=W[L].match(B);if(null!==F){switch(F.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":I+=A+",";break;case"highlight-start":R=A;break;case"highlight-end":I+=R+"-"+(A-1)+","}W.splice(L,1)}else L+=1}v=g()(I),D=W.join("\n")}var M=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus()}(D),d(!0),setTimeout((function(){return d(!1)}),2e3)};return a.a.createElement(b,Object(r.a)({},i,{key:String(f),theme:x,code:D,language:S}),(function(e){var t,n=e.className,o=e.style,c=e.tokens,i=e.getLineProps,l=e.getTokenProps;return a.a.createElement("div",{className:E.a.codeBlockContainer},j&&a.a.createElement("div",{style:o,className:E.a.codeBlockTitle},j),a.a.createElement("div",{className:Object(s.a)(E.a.codeBlockContent,S)},a.a.createElement("div",{tabIndex:0,className:Object(s.a)(n,E.a.codeBlock,"thin-scrollbar",(t={},t[E.a.codeBlockWithTitle]=j,t))},a.a.createElement("div",{className:E.a.codeBlockLines,style:o},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(r.a)({key:t},n),e.map((function(e,t){return a.a.createElement("span",Object(r.a)({key:t},l({token:e,key:t})))})))})))),a.a.createElement("button",{ref:h,type:"button","aria-label":Object(T.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(E.a.copyButton),onClick:M},p?a.a.createElement(T.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(T.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},754:function(e,t,n){"use strict";var r=n(0),o=n.n(r).a.createContext(void 0);t.a=o}}]);