(window.webpackJsonp=window.webpackJsonp||[]).push([[536,460],{57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"CodeSample",(function(){return d})),n.d(t,"default",(function(){return h}));var o=n(3),a=n(7),r=n(0),s=n.n(r),c=n(749),i=n(753),l={},u={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},p=[],d=function(e){var t=e.url,n=e.lines,o=Object(r.useState)(""),a=o[0],l=o[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),a?n?Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},a),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},a),Object(c.b)("br",null)):Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:p,CodeSample:d};function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}h.isMDXComponent=!0},608:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(749)),s=n(57),c={title:"Show message (MESSAGE, ASK)"},i={unversionedId:"Show_message_MESSAGE_ASK_",id:"version-1.0.0/Show_message_MESSAGE_ASK_",isDocsHomePage:!1,title:"Show message (MESSAGE, ASK)",description:"The show message operator creates an action which shows the user a window with a text message.\xa0The message is defined as some property whose value will be used as a message.",source:"@site/versioned_docs/version-1.0.0/Show_message_MESSAGE_ASK_.md",slug:"/Show_message_MESSAGE_ASK_",permalink:"/docusaurustest/docs/Show_message_MESSAGE_ASK_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/Show_message_MESSAGE_ASK_.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"User/IS interaction: Overview",permalink:"/docusaurustest/docs/User_IS_interaction"},next:{title:"File operators: Overview",permalink:"/docusaurustest/docs/File_operators"}},l=[{value:"Flow control",id:"flow-control",children:[]},{value:"Dialog form",id:"dialog",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"show message")," operator creates an ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"action")," which shows the user a window with a text message.\xa0The message is defined as some ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Properties"},"property")," whose value will be used as a message."),Object(r.b)("h3",{id:"flow-control"},"Flow control"),Object(r.b)("p",null,"By default, the created action stops the thread until the user closes the message. However, this behavior can be changed using the corresponding option \u2013 in this case, the created action is completed immediately and the message is shown to the user as soon as possible (that is, the next user interaction). The first mode shall be called\xa0",Object(r.b)("em",{parentName:"p"},"synchronous")," and the second\xa0",Object(r.b)("em",{parentName:"p"},"asynchronous"),"."),Object(r.b)("h3",{id:"dialog"},"Dialog form"),Object(r.b)("p",null,"It is also often necessary not only to inform the user about something, but also, for example, to request confirmation to continue an action. For such cases, the operator allows, instead of simply displaying the message (with a single OK button), to ask a question with the option of canceling (OK/Cancel) and thereby essentially to implement ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Value_input"},"a value input"),". This input is considered to have been ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Value_input#result"},"canceled")," if the Cancel button is pressed (there is no input value in that case)."),Object(r.b)("p",null,"In addition, a third option can be added to the question: Yes / No / Cancel. In this case, it is considered that ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Value_input#result"},"the input result")," will be a value of logical class (Yes - ",Object(r.b)("strong",{parentName:"p"},"TRUE"),", No - ",Object(r.b)("strong",{parentName:"p"},"NULL"),"). As in the first case, the input is considered to be canceled if the Cancel button is selected."),Object(r.b)("p",null,"The form of the operator in which the user is asked a question shall be called\xa0the ",Object(r.b)("em",{parentName:"p"},"dialog")," form.\xa0"),Object(r.b)("p",null,"As with other value input operators, in the dialog form of this operator\xa0you can define\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Value_input#result"},"main and alternative"),"\xa0actions. The first is called if the input was successfully completed, the second if not (i.e. if the input was canceled)."),Object(r.b)("p",null,"The operator dialog form is available in synchronous mode only."),Object(r.b)("h3",{id:"language"},"Language"),Object(r.b)("p",null,"To declare an action showing a message, use\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/MESSAGE_operator"},"the\xa0",Object(r.b)("strong",{parentName:"a"},"MESSAGE")," operator"),". To display the message in dialog form, use the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/ASK_operator"},Object(r.b)("strong",{parentName:"a"},"ASK")," operator"),"."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=message",mdxType:"CodeSample"}),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=ask",mdxType:"CodeSample"}))}p.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<r;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},751:function(e,t,n){"use strict";var o=n(0),a=n(754);t.a=function(){var e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},752:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,a,r]=t;if(o&&r){o=parseInt(o),r=parseInt(r);const e=o<r?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(r+=e);for(let t=o;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},753:function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var o=n(3),a=n(0),r=n.n(a),s=n(755),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(23).a,theme:c};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,o=Object.create(null),a=e.styles.reduce((function(e,n){var o=n.languages,a=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=u({},e[t],a);e[t]=n})),e}),o);return a.root=n,a.plain=u({},n,{backgroundColor:null}),a};function b(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var f=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,o=e.className,a=e.style,r=u({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(r.style=s.plain),void 0!==a&&(r.style=void 0!==r.style?u({},r.style,a):a),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),l(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,a=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===a&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===a&&!o)return r[n[0]];var s=o?{display:"inline-block"}:{},c=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[s].concat(c))}})),l(this,"getTokenProps",(function(e){var n=e.key,o=e.className,a=e.style,r=e.token,s=u({},b(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==a&&(s.style=void 0!==s.style?u({},s.style,a):a),void 0!==n&&(s.key=n),o&&(s.className+=" "+o),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,a=e.children,r=this.getThemeDict(this.props),s=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],o=[0],a=[e.length],r=0,s=0,c=[],i=[c];s>-1;){for(;(r=o[s]++)<a[s];){var l=void 0,u=t[s],h=n[s][r];if("string"==typeof h?(u=s>0?u:["plain"],l=h):(u=m(u,h.type),h.alias&&(u=m(u,h.alias)),l=h.content),"string"==typeof l){var b=l.split(p),f=b.length;c.push({types:u,content:b[0]});for(var y=1;y<f;y++)d(c),i.push(c=[]),c.push({types:u,content:b[y]})}else s++,t.push(u),n.push(l),o.push(0),a.push(l.length)}s--,t.pop(),n.pop(),o.pop(),a.pop()}return d(c),i}(void 0!==s?t.tokenize(o,s,n):[o]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var y=n(752),g=n.n(y),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(751),O=n(750),k=function(){var e=Object(O.useThemeConfig)().prism,t=Object(j.a)().isDarkTheme,n=e.theme||v,o=e.darkTheme||n;return t?o:n},S=n(756),w=n(58),E=n.n(w),x=/{([\d,-]+)}/,T=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+o+")\\s*$")},C=/(?:title=")(.*)(?:")/;function N(e){var t=e.children,n=e.className,c=e.metastring,l=Object(O.useThemeConfig)().prism,u=Object(a.useState)(!1),p=u[0],d=u[1],m=Object(a.useState)(!1),h=m[0],b=m[1];Object(a.useEffect)((function(){b(!0)}),[]);var y=Object(a.useRef)(null),v=[],j="",w=k(),N=Array.isArray(t)?t.join(""):t;if(c&&x.test(c)){var _=c.match(x)[1];v=g()(_).filter((function(e){return e>0}))}c&&C.test(c)&&(j=c.match(C)[1]);var A=n&&n.replace(/language-/,"");!A&&l.defaultLanguage&&(A=l.defaultLanguage);var P=N.replace(/\n$/,"");if(0===v.length&&void 0!==A){for(var D,B="",L=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return T(["js","jsBlock"]);case"jsx":case"tsx":return T(["js","jsBlock","jsx"]);case"html":return T(["js","jsBlock","html"]);case"python":case"py":return T(["python"]);default:return T()}}(A),M=N.replace(/\n$/,"").split("\n"),I=0;I<M.length;){var K=I+1,F=M[I].match(L);if(null!==F){switch(F.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":B+=K+",";break;case"highlight-start":D=K;break;case"highlight-end":B+=D+"-"+(K-1)+","}M.splice(I,1)}else I+=1}v=g()(B),P=M.join("\n")}var G=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let r=!1;a.rangeCount>0&&(r=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),r&&(a.removeAllRanges(),a.addRange(r)),o&&o.focus()}(P),d(!0),setTimeout((function(){return d(!1)}),2e3)};return r.a.createElement(f,Object(o.a)({},i,{key:String(h),theme:w,code:P,language:A}),(function(e){var t,n=e.className,a=e.style,c=e.tokens,i=e.getLineProps,l=e.getTokenProps;return r.a.createElement("div",{className:E.a.codeBlockContainer},j&&r.a.createElement("div",{style:a,className:E.a.codeBlockTitle},j),r.a.createElement("div",{className:Object(s.a)(E.a.codeBlockContent,A)},r.a.createElement("div",{tabIndex:0,className:Object(s.a)(n,E.a.codeBlock,"thin-scrollbar",(t={},t[E.a.codeBlockWithTitle]=j,t))},r.a.createElement("div",{className:E.a.codeBlockLines,style:a},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(o.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(o.a)({key:t},l({token:e,key:t})))})))})))),r.a.createElement("button",{ref:y,type:"button","aria-label":Object(S.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(E.a.copyButton),onClick:G},p?r.a.createElement(S.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(S.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},754:function(e,t,n){"use strict";var o=n(0),a=n.n(o).a.createContext(void 0);t.a=a}}]);