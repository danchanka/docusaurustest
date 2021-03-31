(window.webpackJsonp=window.webpackJsonp||[]).push([[639,460],{57:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return p})),r.d(t,"CodeSample",(function(){return d})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),a=r(0),s=r.n(a),c=r(749),i=r(753),l={},u={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},p=[],d=function(e){var t=e.url,r=e.lines,n=Object(a.useState)(""),o=n[0],l=n[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),o?r?Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",metastring:r,mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:p,CodeSample:d};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},m,r,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},710:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(749)),s=r(57),c={title:"In a structured view (EXPORT, IMPORT)"},i={unversionedId:"In_a_structured_view_EXPORT_IMPORT_",id:"version-1.0.0/In_a_structured_view_EXPORT_IMPORT_",isDocsHomePage:!1,title:"In a structured view (EXPORT, IMPORT)",description:"This operator creates an action that\xa0opens a form\xa0in the\xa0structured\xa0view.",source:"@site/versioned_docs/version-1.0.0/In_a_structured_view_EXPORT_IMPORT_.md",slug:"/In_a_structured_view_EXPORT_IMPORT_",permalink:"/docusaurustest/docs/In_a_structured_view_EXPORT_IMPORT_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/In_a_structured_view_EXPORT_IMPORT_.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"In a print view (PRINT)",permalink:"/docusaurustest/docs/In_a_print_view_PRINT_"},next:{title:"Navigator: Overview",permalink:"/docusaurustest/docs/Navigator"}},l=[{value:"Format",id:"format",children:[]},{value:"Form import",id:"importForm",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This operator creates an action that\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Open_form"},"opens a form"),"\xa0in the\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Structured_view"},"structured"),"\xa0view."),Object(a.b)("h3",{id:"format"},"Format"),Object(a.b)("p",null,"In this operator, you can define the format that all form data will be converted to:\xa0\xa0",Object(a.b)("strong",{parentName:"p"},"XML"),",\xa0",Object(a.b)("strong",{parentName:"p"},"JSON"),",\xa0",Object(a.b)("strong",{parentName:"p"},"DBF, CSV, XLS"),". The generated file(s) in this format is then written to the specified property."),Object(a.b)("p",null,"Form export is a general case of the \xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Data_export_EXPORT_"},"data export operator"),"."),Object(a.b)("h3",{id:"importForm"},"Form import"),Object(a.b)("p",null,"Form import is an operation that is opposite to opening the form in a structured view. The import operator accepts files in a structured format, then parses them and saves the data to the properties of the set form in such a way that when this form is exported back into the imported format, it would recreate the original file."),Object(a.b)("p",null,'Since the import operator is essentially an "input operator", the following constraints apply to the form being imported:'),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"All form objects must belong to \xa0numeric\xa0or",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/User_classes#abstract"},"concrete"),"\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/User_classes"},"user"),"\xa0classes. Object groups must consist of exactly one object (this constraint is caused by the fact that all the used formats are essentially\xa0lists \u2014 that is, mappings of numbers to values).")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Properties and\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Form_structure#filters"},"filters"),"\xa0on the form should be \xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Property_change_CHANGE_"},"changeable"),"\xa0by a given value (that is, as a rule, be\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Data_properties_DATA_"},"primary"),"). Before importing, any existing changes to the imported properties in the current session are canceled."))),Object(a.b)("p",null,"During import, filters change to the default values of value classes of these filters."),Object(a.b)("p",null,"When importing data into objects of numeric classes, 0-based numbering is used. In case of ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Structured_view#hierarchy"},"hierarchical"),' formats, numbering is "end-to-end" (that is, when the object group being imported is encountered for the second and subsequent times, object numbering in it starts from the position that the previous one stopped at).'),Object(a.b)("p",null,"When importing from XLS and CSV without headers (with the ",Object(a.b)("strong",{parentName:"p"},"NOHEADER")," option), the platform automatically attempts to convert data to the necessary type. If it fails, a ",Object(a.b)("strong",{parentName:"p"},"NULL")," value is written to the property. Importing from other formats requires correct types. For example, if a string is required during data import from JSON, and the JSON file contains a number (without quotes), the platform will generate an error."),Object(a.b)("p",null,"If a property (object group) is not found during import, it is ignored (that is, its value remains equal to ",Object(a.b)("strong",{parentName:"p"},"NULL"),")."),Object(a.b)("p",null,"Form import is a general case of the\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Data_import_IMPORT_"},"data import")," operator."),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"To open the form in the structured\xa0view, use the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/EXPORT_operator"},Object(a.b)("strong",{parentName:"a"},"EXPORT"),"\xa0operator"),". To import a form, use the\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/IMPORT_operator"},Object(a.b)("strong",{parentName:"a"},"IMPORT"),"\xa0operator"),"."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=export",mdxType:"CodeSample"}),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=importForm",mdxType:"CodeSample"}))}p.isMDXComponent=!0},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?o.a.createElement(b,c(c({ref:t},l),{},{components:r})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},751:function(e,t,r){"use strict";var n=r(0),o=r(754);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},752:function(e,t){function r(e){let t,r=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))r.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,o,a]=t;if(n&&a){n=parseInt(n),a=parseInt(a);const e=n<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=n;t!==a;t+=e)r.push(t)}}return r}t.default=r,e.exports=r},753:function(e,t,r){"use strict";r.d(t,"a",(function(){return C}));var n=r(3),o=r(0),a=r.n(o),s=r(755),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:r(23).a,theme:c};function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},m=function(e,t){var r=e.length;return r>0&&e[r-1]===t?e:e.concat(t)},b=function(e,t){var r=e.plain,n=Object.create(null),o=e.styles.reduce((function(e,r){var n=r.languages,o=r.style;return n&&!n.includes(t)||r.types.forEach((function(t){var r=u({},e[t],o);e[t]=r})),e}),n);return o.root=r,o.plain=u({},r,{backgroundColor:null}),o};function f(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}var h=function(e){function t(){for(var t=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];e.apply(this,r),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var r=e.theme?b(e.theme,e.language):void 0;return t.themeDict=r})),l(this,"getLineProps",(function(e){var r=e.key,n=e.className,o=e.style,a=u({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==o&&(a.style=void 0!==a.style?u({},a.style,o):o),void 0!==r&&(a.key=r),n&&(a.className+=" "+n),a})),l(this,"getStyleForToken",(function(e){var r=e.types,n=e.empty,o=r.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return a[r[0]];var s=n?{display:"inline-block"}:{},c=r.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(c))}})),l(this,"getTokenProps",(function(e){var r=e.key,n=e.className,o=e.style,a=e.token,s=u({},f(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?u({},s.style,o):o),void 0!==r&&(s.key=r),n&&(s.className+=" "+n),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,r=e.language,n=e.code,o=e.children,a=this.getThemeDict(this.props),s=t.languages[r];return o({tokens:function(e){for(var t=[[]],r=[e],n=[0],o=[e.length],a=0,s=0,c=[],i=[c];s>-1;){for(;(a=n[s]++)<o[s];){var l=void 0,u=t[s],b=r[s][a];if("string"==typeof b?(u=s>0?u:["plain"],l=b):(u=m(u,b.type),b.alias&&(u=m(u,b.alias)),l=b.content),"string"==typeof l){var f=l.split(p),h=f.length;c.push({types:u,content:f[0]});for(var y=1;y<h;y++)d(c),i.push(c=[]),c.push({types:u,content:f[y]})}else s++,t.push(u),r.push(l),n.push(0),o.push(l.length)}s--,t.pop(),r.pop(),n.pop(),o.pop()}return d(c),i}(void 0!==s?t.tokenize(n,s,r):[n]),className:"prism-code language-"+r,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var y=r(752),g=r.n(y),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=r(751),j=r(750),k=function(){var e=Object(j.useThemeConfig)().prism,t=Object(O.a)().isDarkTheme,r=e.theme||v,n=e.darkTheme||r;return t?n:r},_=r(756),T=r(58),w=r.n(T),N=/{([\d,-]+)}/,x=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},r=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+r+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},P=/(?:title=")(.*)(?:")/;function C(e){var t=e.children,r=e.className,c=e.metastring,l=Object(j.useThemeConfig)().prism,u=Object(o.useState)(!1),p=u[0],d=u[1],m=Object(o.useState)(!1),b=m[0],f=m[1];Object(o.useEffect)((function(){f(!0)}),[]);var y=Object(o.useRef)(null),v=[],O="",T=k(),C=Array.isArray(t)?t.join(""):t;if(c&&N.test(c)){var E=c.match(N)[1];v=g()(E).filter((function(e){return e>0}))}c&&P.test(c)&&(O=c.match(P)[1]);var S=r&&r.replace(/language-/,"");!S&&l.defaultLanguage&&(S=l.defaultLanguage);var I=C.replace(/\n$/,"");if(0===v.length&&void 0!==S){for(var R,D="",L=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"]);case"jsx":case"tsx":return x(["js","jsBlock","jsx"]);case"html":return x(["js","jsBlock","html"]);case"python":case"py":return x(["python"]);default:return x()}}(S),B=C.replace(/\n$/,"").split("\n"),F=0;F<B.length;){var M=F+1,X=B[F].match(L);if(null!==X){switch(X.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":D+=M+",";break;case"highlight-start":R=M;break;case"highlight-end":D+=R+"-"+(M-1)+","}B.splice(F,1)}else F+=1}v=g()(D),I=B.join("\n")}var A=function(){!function(e,{target:t=document.body}={}){const r=document.createElement("textarea"),n=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}r.remove(),a&&(o.removeAllRanges(),o.addRange(a)),n&&n.focus()}(I),d(!0),setTimeout((function(){return d(!1)}),2e3)};return a.a.createElement(h,Object(n.a)({},i,{key:String(b),theme:T,code:I,language:S}),(function(e){var t,r=e.className,o=e.style,c=e.tokens,i=e.getLineProps,l=e.getTokenProps;return a.a.createElement("div",{className:w.a.codeBlockContainer},O&&a.a.createElement("div",{style:o,className:w.a.codeBlockTitle},O),a.a.createElement("div",{className:Object(s.a)(w.a.codeBlockContent,S)},a.a.createElement("div",{tabIndex:0,className:Object(s.a)(r,w.a.codeBlock,"thin-scrollbar",(t={},t[w.a.codeBlockWithTitle]=O,t))},a.a.createElement("div",{className:w.a.codeBlockLines,style:o},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var r=i({line:e,key:t});return v.includes(t+1)&&(r.className=r.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(n.a)({key:t},r),e.map((function(e,t){return a.a.createElement("span",Object(n.a)({key:t},l({token:e,key:t})))})))})))),a.a.createElement("button",{ref:y,type:"button","aria-label":Object(_.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(w.a.copyButton),onClick:A},p?a.a.createElement(_.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(_.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},754:function(e,t,r){"use strict";var n=r(0),o=r.n(n).a.createContext(void 0);t.a=o}}]);