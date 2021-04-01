(window.webpackJsonp=window.webpackJsonp||[]).push([[223,460],{295:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var o=r(3),n=r(7),a=(r(0),r(749)),s=r(57),c={title:"Object group operator"},i={unversionedId:"Object_group_operator",id:"version-1.0.0/Object_group_operator",isDocsHomePage:!1,title:"Object group operator",description:"Object group operators are used for creating properties working with the current state of the object group on the form.",source:"@site/versioned_docs/version-1.0.0/Object_group_operator.md",slug:"/Object_group_operator",permalink:"/docusaurustest/docs/Object_group_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/Object_group_operator.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"UNGROUP operator",permalink:"/docusaurustest/docs/UNGROUP_operator"},next:{title:"Type conversion operator",permalink:"/docusaurustest/docs/Type_conversion_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Form_structure"},"Object group")," operators are used for creating ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Properties"},"properties")," working with the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Object_group_operations"},"current state")," of the object group on the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Forms"},"form"),"."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"FILTER groupObjectId\nVIEW groupObjectId\nORDER groupObjectId\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"Object group operators create properties that accept the same number of parameters as the number of objects in the object group. These operators cannot be used inside ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Expression"},"expressions"),"."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"FILTER")," operator creates a property which value is\xa0",Object(a.b)("strong",{parentName:"p"},"TRUE")," when the object collection passed as parameters meets all the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Form_structure#filters"},"filtering")," conditions on the form, otherwise the property value will be ",Object(a.b)("strong",{parentName:"p"},"NULL"),"."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"VIEW"),"\xa0operator creates a property which value is ",Object(a.b)("strong",{parentName:"p"},"TRUE")," if the object collection passed as parameters is currently displayed on the form, otherwise, the property value will be ",Object(a.b)("strong",{parentName:"p"},"NULL"),"."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"ORDER")," operator creates a property which value determines the relative order of the object collection on the form passed as a parameter. The value of this property is usually used in ",Object(a.b)("strong",{parentName:"p"},"ORDER")," blocks of the other properties, for example, ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/docusaurustest/docs/PARTITION_operator"},"PARTITION")),", ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/docusaurustest/docs/FOR_operator"},"FOR")),", etc."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"groupObjectId")),Object(a.b)("p",null,"Global ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#groupobjectid-broken"},"object group ID"),"."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=groupobject",mdxType:"CodeSample"}),Object(a.b)("p",null,"**",Object(a.b)("br",{parentName:"p"}),"\n","**"))}u.isMDXComponent=!0},57:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return u})),r.d(t,"CodeSample",(function(){return d})),r.d(t,"default",(function(){return m}));var o=r(3),n=r(7),a=r(0),s=r.n(a),c=r(749),i=r(753),l={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},u=[],d=function(e){var t=e.url,r=e.lines,o=Object(a.useState)(""),n=o[0],l=o[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),n?r?Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",metastring:r,mdxType:"CodeBlock"},n),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},n),Object(c.b)("br",null)):Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},b={toc:u,CodeSample:d};function m(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},b,r,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),b=o,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||a;return r?n.a.createElement(m,c(c({ref:t},l),{},{components:r})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},751:function(e,t,r){"use strict";var o=r(0),n=r(754);t.a=function(){var e=Object(o.useContext)(n.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},752:function(e,t){function r(e){let t,r=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))r.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,n,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==n&&".."!==n&&"\u2025"!==n||(a+=e);for(let t=o;t!==a;t+=e)r.push(t)}}return r}t.default=r,e.exports=r},753:function(e,t,r){"use strict";r.d(t,"a",(function(){return P}));var o=r(3),n=r(0),a=r.n(n),s=r(755),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:r(23).a,theme:c};function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},b=function(e,t){var r=e.length;return r>0&&e[r-1]===t?e:e.concat(t)},m=function(e,t){var r=e.plain,o=Object.create(null),n=e.styles.reduce((function(e,r){var o=r.languages,n=r.style;return o&&!o.includes(t)||r.types.forEach((function(t){var r=p({},e[t],n);e[t]=r})),e}),o);return n.root=r,n.plain=p({},r,{backgroundColor:null}),n};function y(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(r[o]=e[o]);return r}var f=function(e){function t(){for(var t=this,r=[],o=arguments.length;o--;)r[o]=arguments[o];e.apply(this,r),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var r=e.theme?m(e.theme,e.language):void 0;return t.themeDict=r})),l(this,"getLineProps",(function(e){var r=e.key,o=e.className,n=e.style,a=p({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==n&&(a.style=void 0!==a.style?p({},a.style,n):n),void 0!==r&&(a.key=r),o&&(a.className+=" "+o),a})),l(this,"getStyleForToken",(function(e){var r=e.types,o=e.empty,n=r.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===n&&"plain"===r[0])return o?{display:"inline-block"}:void 0;if(1===n&&!o)return a[r[0]];var s=o?{display:"inline-block"}:{},c=r.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(c))}})),l(this,"getTokenProps",(function(e){var r=e.key,o=e.className,n=e.style,a=e.token,s=p({},y(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==n&&(s.style=void 0!==s.style?p({},s.style,n):n),void 0!==r&&(s.key=r),o&&(s.className+=" "+o),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,r=e.language,o=e.code,n=e.children,a=this.getThemeDict(this.props),s=t.languages[r];return n({tokens:function(e){for(var t=[[]],r=[e],o=[0],n=[e.length],a=0,s=0,c=[],i=[c];s>-1;){for(;(a=o[s]++)<n[s];){var l=void 0,p=t[s],m=r[s][a];if("string"==typeof m?(p=s>0?p:["plain"],l=m):(p=b(p,m.type),m.alias&&(p=b(p,m.alias)),l=m.content),"string"==typeof l){var y=l.split(u),f=y.length;c.push({types:p,content:y[0]});for(var h=1;h<f;h++)d(c),i.push(c=[]),c.push({types:p,content:y[h]})}else s++,t.push(p),r.push(l),o.push(0),n.push(l.length)}s--,t.pop(),r.pop(),o.pop(),n.pop()}return d(c),i}(void 0!==s?t.tokenize(o,s,r):[o]),className:"prism-code language-"+r,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component);var h=r(752),g=r.n(h),j={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},v=r(751),O=r(750),k=function(){var e=Object(O.useThemeConfig)().prism,t=Object(v.a)().isDarkTheme,r=e.theme||j,o=e.darkTheme||r;return t?o:r},N=r(756),x=r(58),T=r.n(x),w=/{([\d,-]+)}/,C=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},r=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((function(e){return"(?:"+t[e].start+"\\s*("+r+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+o+")\\s*$")},E=/(?:title=")(.*)(?:")/;function P(e){var t=e.children,r=e.className,c=e.metastring,l=Object(O.useThemeConfig)().prism,p=Object(n.useState)(!1),u=p[0],d=p[1],b=Object(n.useState)(!1),m=b[0],y=b[1];Object(n.useEffect)((function(){y(!0)}),[]);var h=Object(n.useRef)(null),j=[],v="",x=k(),P=Array.isArray(t)?t.join(""):t;if(c&&w.test(c)){var S=c.match(w)[1];j=g()(S).filter((function(e){return e>0}))}c&&E.test(c)&&(v=c.match(E)[1]);var _=r&&r.replace(/language-/,"");!_&&l.defaultLanguage&&(_=l.defaultLanguage);var D=P.replace(/\n$/,"");if(0===j.length&&void 0!==_){for(var R,I="",L=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return C(["js","jsBlock"]);case"jsx":case"tsx":return C(["js","jsBlock","jsx"]);case"html":return C(["js","jsBlock","html"]);case"python":case"py":return C(["python"]);default:return C()}}(_),B=P.replace(/\n$/,"").split("\n"),F=0;F<B.length;){var A=F+1,U=B[F].match(L);if(null!==U){switch(U.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":I+=A+",";break;case"highlight-start":R=A;break;case"highlight-end":I+=R+"-"+(A-1)+","}B.splice(F,1)}else F+=1}j=g()(I),D=B.join("\n")}var M=function(){!function(e,{target:t=document.body}={}){const r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const n=document.getSelection();let a=!1;n.rangeCount>0&&(a=n.getRangeAt(0)),t.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}r.remove(),a&&(n.removeAllRanges(),n.addRange(a)),o&&o.focus()}(D),d(!0),setTimeout((function(){return d(!1)}),2e3)};return a.a.createElement(f,Object(o.a)({},i,{key:String(m),theme:x,code:D,language:_}),(function(e){var t,r=e.className,n=e.style,c=e.tokens,i=e.getLineProps,l=e.getTokenProps;return a.a.createElement("div",{className:T.a.codeBlockContainer},v&&a.a.createElement("div",{style:n,className:T.a.codeBlockTitle},v),a.a.createElement("div",{className:Object(s.a)(T.a.codeBlockContent,_)},a.a.createElement("div",{tabIndex:0,className:Object(s.a)(r,T.a.codeBlock,"thin-scrollbar",(t={},t[T.a.codeBlockWithTitle]=v,t))},a.a.createElement("div",{className:T.a.codeBlockLines,style:n},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var r=i({line:e,key:t});return j.includes(t+1)&&(r.className=r.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(o.a)({key:t},r),e.map((function(e,t){return a.a.createElement("span",Object(o.a)({key:t},l({token:e,key:t})))})))})))),a.a.createElement("button",{ref:h,type:"button","aria-label":Object(N.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(T.a.copyButton),onClick:M},u?a.a.createElement(N.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(N.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},754:function(e,t,r){"use strict";var o=r(0),n=r.n(o).a.createContext(void 0);t.a=n}}]);