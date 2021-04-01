(window.webpackJsonp=window.webpackJsonp||[]).push([[459,460],{531:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(749)),c=n(57),s={title:"REQUEST operator"},l={unversionedId:"REQUEST_operator",id:"version-1.0.0/REQUEST_operator",isDocsHomePage:!1,title:"REQUEST operator",description:"The REQUEST operator creates an action that requests a value.",source:"@site/versioned_docs/version-1.0.0/REQUEST_operator.md",slug:"/REQUEST_operator",permalink:"/docusaurustest/docs/REQUEST_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/REQUEST_operator.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"READ operator",permalink:"/docusaurustest/docs/READ_operator"},next:{title:"RETURN",permalink:"/docusaurustest/docs/RETURN"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"REQUEST")," operator creates an ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"action")," that ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Value_request_REQUEST_"},"requests a value"),"."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"REQUEST requestAction \nDO doAction [ELSE elseAction]\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"REQUEST")," operator creates an action that allows the separation of a request for a value from its handling."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"requestAction")),Object(a.b)("p",null,"A ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Action_operator#contextdependent"},"context-dependent action operator")," that requests a value."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"doAction")),Object(a.b)("p",null,"A context-dependent action operator that is executed if the input was completed successfully."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"elseAction")),Object(a.b)("p",null,"A context-dependent action operator that is executed if the input was ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Value_input#result"},"cancelled"),"."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=request",mdxType:"CodeSample"}),Object(a.b)("p",null,"**",Object(a.b)("br",{parentName:"p"}),"\n","**"))}p.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"CodeSample",(function(){return d})),n.d(t,"default",(function(){return y}));var r=n(3),o=n(7),a=n(0),c=n.n(a),s=n(749),l=n(753),i={},u={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},p=[],d=function(e){var t=e.url,n=e.lines,r=Object(a.useState)(""),o=r[0],i=r[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),o?n?Object(s.b)(c.a.Fragment,null,Object(s.b)(l.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},o),Object(s.b)("br",null)):Object(s.b)(c.a.Fragment,null,Object(s.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(s.b)("br",null)):Object(s.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:p,CodeSample:d};function y(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}y.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?o.a.createElement(y,s(s({ref:t},i),{},{components:n})):o.a.createElement(y,s({ref:t},i))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<a;i++)c[i]=n[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},751:function(e,t,n){"use strict";var r=n(0),o=n(754);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},752:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},753:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r=n(3),o=n(0),a=n.n(o),c=n(755),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:n(23).a,theme:s};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=u({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=u({},n,{backgroundColor:null}),o};function b(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var f=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=u({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==o&&(a.style=void 0!==a.style?u({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var c=r?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(s))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,c=u({},b(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?u({},c.style,o):o),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,c=0,s=[],l=[s];c>-1;){for(;(a=r[c]++)<o[c];){var i=void 0,u=t[c],y=n[c][a];if("string"==typeof y?(u=c>0?u:["plain"],i=y):(u=m(u,y.type),y.alias&&(u=m(u,y.alias)),i=y.content),"string"==typeof i){var b=i.split(p),f=b.length;s.push({types:u,content:b[0]});for(var h=1;h<f;h++)d(s),l.push(s=[]),s.push({types:u,content:b[h]})}else c++,t.push(u),n.push(i),r.push(0),o.push(i.length)}c--,t.pop(),n.pop(),r.pop(),o.pop()}return d(s),l}(void 0!==c?t.tokenize(r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var h=n(752),g=n.n(h),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(751),O=n(750),k=function(){var e=Object(O.useThemeConfig)().prism,t=Object(j.a)().isDarkTheme,n=e.theme||v,r=e.darkTheme||n;return t?r:n},E=n(756),x=n(58),T=n.n(x),S=/{([\d,-]+)}/,C=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},N=/(?:title=")(.*)(?:")/;function w(e){var t=e.children,n=e.className,s=e.metastring,i=Object(O.useThemeConfig)().prism,u=Object(o.useState)(!1),p=u[0],d=u[1],m=Object(o.useState)(!1),y=m[0],b=m[1];Object(o.useEffect)((function(){b(!0)}),[]);var h=Object(o.useRef)(null),v=[],j="",x=k(),w=Array.isArray(t)?t.join(""):t;if(s&&S.test(s)){var P=s.match(S)[1];v=g()(P).filter((function(e){return e>0}))}s&&N.test(s)&&(j=s.match(N)[1]);var D=n&&n.replace(/language-/,"");!D&&i.defaultLanguage&&(D=i.defaultLanguage);var R=w.replace(/\n$/,"");if(0===v.length&&void 0!==D){for(var A,_="",B=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return C(["js","jsBlock"]);case"jsx":case"tsx":return C(["js","jsBlock","jsx"]);case"html":return C(["js","jsBlock","html"]);case"python":case"py":return C(["python"]);default:return C()}}(D),U=w.replace(/\n$/,"").split("\n"),L=0;L<U.length;){var Q=L+1,q=U[L].match(B);if(null!==q){switch(q.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":_+=Q+",";break;case"highlight-start":A=Q;break;case"highlight-end":_+=A+"-"+(Q-1)+","}U.splice(L,1)}else L+=1}v=g()(_),R=U.join("\n")}var I=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus()}(R),d(!0),setTimeout((function(){return d(!1)}),2e3)};return a.a.createElement(f,Object(r.a)({},l,{key:String(y),theme:x,code:R,language:D}),(function(e){var t,n=e.className,o=e.style,s=e.tokens,l=e.getLineProps,i=e.getTokenProps;return a.a.createElement("div",{className:T.a.codeBlockContainer},j&&a.a.createElement("div",{style:o,className:T.a.codeBlockTitle},j),a.a.createElement("div",{className:Object(c.a)(T.a.codeBlockContent,D)},a.a.createElement("div",{tabIndex:0,className:Object(c.a)(n,T.a.codeBlock,"thin-scrollbar",(t={},t[T.a.codeBlockWithTitle]=j,t))},a.a.createElement("div",{className:T.a.codeBlockLines,style:o},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(r.a)({key:t},n),e.map((function(e,t){return a.a.createElement("span",Object(r.a)({key:t},i({token:e,key:t})))})))})))),a.a.createElement("button",{ref:h,type:"button","aria-label":Object(E.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(c.a)(T.a.copyButton),onClick:I},p?a.a.createElement(E.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(E.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},754:function(e,t,n){"use strict";var r=n(0),o=n.n(r).a.createContext(void 0);t.a=o}}]);