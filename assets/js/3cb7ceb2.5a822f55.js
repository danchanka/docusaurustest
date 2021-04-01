(window.webpackJsonp=window.webpackJsonp||[]).push([[153,460],{225:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(749)),i=n(57),s={title:"How-to: Filtering and ordering"},l={unversionedId:"How-to_Filtering_and_ordering",id:"version-1.0.0/How-to_Filtering_and_ordering",isDocsHomePage:!1,title:"How-to: Filtering and ordering",description:"Example 1",source:"@site/versioned_docs/version-1.0.0/How-to_Filtering_and_ordering.md",slug:"/How-to_Filtering_and_ordering",permalink:"/docusaurustest/docs/How-to_Filtering_and_ordering",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/How-to_Filtering_and_ordering.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"How-to: Documents with lines",permalink:"/docusaurustest/docs/How-to_Documents_with_lines"},next:{title:"How-to: Design",permalink:"/docusaurustest/docs/How-to_Design"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],u={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"There are remaining books in stock."),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFilter&block=sample1",mdxType:"CodeSample"}),Object(a.b)("p",null,"We need to create a form to display the balances of books in a given stock in alphabetical order."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFilter&block=solution1",mdxType:"CodeSample"}),Object(a.b)("p",null,"Option 1 sets up a fixed filter that the user cannot remove. Option 2 allows the user to choose between predefined criteria (by default the one for which the ",Object(a.b)("em",{parentName:"p"},"DEFAULT")," option is set)."),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),"."),Object(a.b)("p",null,"We need to create a form to display remaining books in several warehouses, with the possibility of filtering by a specific warehouse. Ordering should be first by warehouse, and within that by book title."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFilter&block=solution2",mdxType:"CodeSample"}),Object(a.b)("p",null,"In this case a warehouse cannot be declared via the ",Object(a.b)("em",{parentName:"p"},"OBJECTS")," block, because then not specifying a warehouse for filtering will not be an option."),Object(a.b)("h2",{id:"example-3"},"Example 3"),Object(a.b)("h3",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"There is a list of orders for certain customers"),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFilter&block=sample3",mdxType:"CodeSample"}),Object(a.b)("p",null,"We need to create a form to display the list of orders allowing to filter by date and/or customer. By default, orders should be in descending date order."),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFilter&block=solution3",mdxType:"CodeSample"}),Object(a.b)("p",null,"It should be noted that the dates in this case should always be selected (by default, the current date will be set when the form is opened). But it is possible not to select a customer."),Object(a.b)("p",null,"Also, note that what is set in ",Object(a.b)("em",{parentName:"p"},"ORDER BY")," is not an expression but a specific property added to the form. Thus, we cannot order by a property that has not been added to the form."))}p.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"CodeSample",(function(){return d})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),a=n(0),i=n.n(a),s=n(749),l=n(753),c={},u={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},p=[],d=function(e){var t=e.url,n=e.lines,o=Object(a.useState)(""),r=o[0],c=o[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return c(e)}))}),[t,c]),r?n?Object(s.b)(i.a.Fragment,null,Object(s.b)(l.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},r),Object(s.b)("br",null)):Object(s.b)(i.a.Fragment,null,Object(s.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(s.b)("br",null)):Object(s.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:p,CodeSample:d};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?r.a.createElement(b,s(s({ref:t},c),{},{components:n})):r.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},751:function(e,t,n){"use strict";var o=n(0),r=n(754);t.a=function(){var e=Object(o.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},752:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},753:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var o=n(3),r=n(0),a=n.n(r),i=n(755),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l={Prism:n(23).a,theme:s};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},b=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function y(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var f=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?b(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=u({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==r&&(a.style=void 0!==a.style?u({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),c(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var i=o?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(s))}})),c(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,i=u({},y(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?u({},i.style,r):r),void 0!==n&&(i.key=n),o&&(i.className+=" "+o),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,i=0,s=[],l=[s];i>-1;){for(;(a=o[i]++)<r[i];){var c=void 0,u=t[i],b=n[i][a];if("string"==typeof b?(u=i>0?u:["plain"],c=b):(u=m(u,b.type),b.alias&&(u=m(u,b.alias)),c=b.content),"string"==typeof c){var y=c.split(p),f=y.length;s.push({types:u,content:y[0]});for(var h=1;h<f;h++)d(s),l.push(s=[]),s.push({types:u,content:y[h]})}else i++,t.push(u),n.push(c),o.push(0),r.push(c.length)}i--,t.pop(),n.pop(),o.pop(),r.pop()}return d(s),l}(void 0!==i?t.tokenize(o,i,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var h=n(752),g=n.n(h),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(751),O=n(750),k=function(){var e=Object(O.useThemeConfig)().prism,t=Object(j.a)().isDarkTheme,n=e.theme||v,o=e.darkTheme||n;return t?o:n},w=n(756),C=n(58),x=n.n(C),S=/{([\d,-]+)}/,T=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+o+")\\s*$")},E=/(?:title=")(.*)(?:")/;function _(e){var t=e.children,n=e.className,s=e.metastring,c=Object(O.useThemeConfig)().prism,u=Object(r.useState)(!1),p=u[0],d=u[1],m=Object(r.useState)(!1),b=m[0],y=m[1];Object(r.useEffect)((function(){y(!0)}),[]);var h=Object(r.useRef)(null),v=[],j="",C=k(),_=Array.isArray(t)?t.join(""):t;if(s&&S.test(s)){var N=s.match(S)[1];v=g()(N).filter((function(e){return e>0}))}s&&E.test(s)&&(j=s.match(E)[1]);var P=n&&n.replace(/language-/,"");!P&&c.defaultLanguage&&(P=c.defaultLanguage);var D=_.replace(/\n$/,"");if(0===v.length&&void 0!==P){for(var B,F="",L=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return T(["js","jsBlock"]);case"jsx":case"tsx":return T(["js","jsBlock","jsx"]);case"html":return T(["js","jsBlock","html"]);case"python":case"py":return T(["python"]);default:return T()}}(P),H=_.replace(/\n$/,"").split("\n"),A=0;A<H.length;){var I=A+1,R=H[A].match(L);if(null!==R){switch(R.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":F+=I+",";break;case"highlight-start":B=I;break;case"highlight-end":F+=B+"-"+(I-1)+","}H.splice(A,1)}else A+=1}v=g()(F),D=H.join("\n")}var U=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let a=!1;r.rangeCount>0&&(a=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}n.remove(),a&&(r.removeAllRanges(),r.addRange(a)),o&&o.focus()}(D),d(!0),setTimeout((function(){return d(!1)}),2e3)};return a.a.createElement(f,Object(o.a)({},l,{key:String(b),theme:C,code:D,language:P}),(function(e){var t,n=e.className,r=e.style,s=e.tokens,l=e.getLineProps,c=e.getTokenProps;return a.a.createElement("div",{className:x.a.codeBlockContainer},j&&a.a.createElement("div",{style:r,className:x.a.codeBlockTitle},j),a.a.createElement("div",{className:Object(i.a)(x.a.codeBlockContent,P)},a.a.createElement("div",{tabIndex:0,className:Object(i.a)(n,x.a.codeBlock,"thin-scrollbar",(t={},t[x.a.codeBlockWithTitle]=j,t))},a.a.createElement("div",{className:x.a.codeBlockLines,style:r},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(o.a)({key:t},n),e.map((function(e,t){return a.a.createElement("span",Object(o.a)({key:t},c({token:e,key:t})))})))})))),a.a.createElement("button",{ref:h,type:"button","aria-label":Object(w.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(i.a)(x.a.copyButton),onClick:U},p?a.a.createElement(w.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(w.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},754:function(e,t,n){"use strict";var o=n(0),r=n.n(o).a.createContext(void 0);t.a=r}}]);