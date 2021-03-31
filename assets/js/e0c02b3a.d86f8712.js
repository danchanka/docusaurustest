(window.webpackJsonp=window.webpackJsonp||[]).push([[599,460],{57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"CodeSample",(function(){return d})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),o=n(0),s=n.n(o),c=n(749),i=n(753),l={},u={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},p=[],d=function(e){var t=e.url,n=e.lines,a=Object(o.useState)(""),r=a[0],l=a[1];return Object(o.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),r?n?Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},r),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(c.b)("br",null)):Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},h={toc:p,CodeSample:d};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},670:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(749)),s=n(57),c={title:"Value request (REQUEST)"},i={unversionedId:"Value_request_REQUEST_",id:"version-1.0.0/Value_request_REQUEST_",isDocsHomePage:!1,title:"Value request (REQUEST)",description:"The value\xa0request operator creates an action in which requesting value(s) is separated from directly processing the value(s). Accordingly, this operator allows not to perform a value request if its result is known in advance in the context of the call (the value of the System.requestPushed property is equal to TRUE). This, in turn, automatically gives you the following capabilities in various use cases:",source:"@site/versioned_docs/version-1.0.0/Value_request_REQUEST_.md",slug:"/Value_request_REQUEST_",permalink:"/docusaurustest/docs/Value_request_REQUEST_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/Value_request_REQUEST_.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Primitive input (INPUT)",permalink:"/docusaurustest/docs/Primitive_input_INPUT_"},next:{title:"Object group operations: Overview",permalink:"/docusaurustest/docs/Object_group_operations"}},l=[{value:"Implicit use",id:"implicit",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"value\xa0request")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"action")," in which ",Object(o.b)("em",{parentName:"p"},"requesting")," value(s) is separated from directly ",Object(o.b)("em",{parentName:"p"},"processing")," the value(s). Accordingly, this operator allows not to perform a value request if its result ",Object(o.b)("em",{parentName:"p"},"is known in advance")," in the context of the call (the value of the ",Object(o.b)("strong",{parentName:"p"},"System.requestPushed")," property is equal to ",Object(o.b)("strong",{parentName:"p"},"TRUE"),"). This, in turn, automatically gives you the following capabilities in various use cases:"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Asynchronous input")),Object(o.b)("p",null,"If the user initiates a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Form_events"},"property"),"\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Form_events"},"change event")," (",Object(o.b)("strong",{parentName:"p"},"CHANGE"),"), and processing it contains exactly one request for the value of a builtin class\xa0(the most common case), then the platform does not call it immediately, but first asks the user to input the value of the\xa0builtin class. As soon as this input is completed, the user can immediately continue his work and the input result asynchronously (in a new thread) is sent to the server, where the processing of the occurred event is started only at that moment (and not when the event actually occurred). Moreover (we call this technique\xa0",Object(o.b)("em",{parentName:"p"},"pushing"),"\xa0the query value), the query result is marked as known in advance (the value of the ",Object(o.b)("strong",{parentName:"p"},"System.requestPushed")," property is set to ",Object(o.b)("strong",{parentName:"p"},"TRUE"),"), and the input value is written to the special property family: ",Object(o.b)("strong",{parentName:"p"},"requested.")," Accordingly, since this property family is used as the default result of all ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Value_input"},"value input","\xa0"),"operators, synchronous processing is emulated; however, the ergonomics of changing data on the form is significantly improved (for example, the user can continue to input data without waiting for the calculation of all properties on the form)."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"PASTE")),Object(o.b)("p",null,"When the user inserts a value into a property cell using the OS tools, the platform triggers a WYSIWYG event to change this property (",Object(o.b)("strong",{parentName:"p"},"CHANGEWYS"),"), and calls the corresponding handler on the server. In this case, the value that the user inserted is pushed as the request value."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Change event (",Object(o.b)("strong",{parentName:"em"},"CHANGEWYS"),"\xa0and ",Object(o.b)("strong",{parentName:"em"},"CHANGE"),")\xa0",Object(o.b)("a",{parentName:"em",href:"/docusaurustest/docs/Form_events#default"},"default handler")," for composition")),Object(o.b)("p",null,"If a property being changed is created using the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Composition_JOIN_"},"composition")," operator\xa0with one argument\xa0(most often a name or ID), and change event handler is not explicitly defined for it, the platform automatically creates this handler as follows:\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CHANGE")),Object(o.b)("p",null,"The user is ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Form_events#queryValue-broken"},"requested")," an object of the property value class which is used as an argument, and this property value changes to the received object\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CHANGEWYS")),Object(o.b)("p",null,"The user is requested for an object of the class of the value of the edited property, after which the platform finds the first object which composition property value is equal to the value input by the user and then changes the value of the\xa0property used as an argument to this object."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In both cases, a property change means calling the ",Object(o.b)("strong",{parentName:"p"},"CHANGE")," event handler, while the value to which the property changes is pushed as the request value."))),Object(o.b)("p",null,'Creating such default handlers allows to use PASTE "out of the box" for properties whose values belong not only to built-in but also to custom classes.'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Group change (",Object(o.b)("strong",{parentName:"em"},"GROUPCHANGE"),") default handler")),Object(o.b)("p",null,"By default, group change handler is created as follows: ",Object(o.b)("strong",{parentName:"p"},"CHANGE")," is called first for objects' ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Form_structure#currentObject-broken"},"current values"),", then if the input has not been canceled, the same handler is called for all other values of objects (matching the filter), with the value of the ",Object(o.b)("strong",{parentName:"p"},"System.requestPushed\xa0"),"property set to\xa0",Object(o.b)("strong",{parentName:"p"},"TRUE")," (it is assumed that the result of the input does not change during its handling, thus the behavior is emulated as if the first value was pushed)."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In fact, the value request operator performs only two operations: it ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Branching_CASE_IF_MULTI_"},"checks")," ",Object(o.b)("strong",{parentName:"p"},"System.requestPushed")," (pushing the value) for the\xa0value request action and ",Object(o.b)("strong",{parentName:"p"},"System.requestCanceled")," (canceling the value) for the request processing action, and it is also responsible for determining the possibility of asynchronous input of the property being changed. At the same time, using this operator makes the code clearer and more readable, therefore it is recommended to use it (instead of explicit checks and options)."))),Object(o.b)("p",null,"As with other value input operators, it is possible to define\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Value_input#result"},"main\xa0and alternative"),"\xa0actions. The first is called if the input was successfully completed, the second if not (i.e. if the input was canceled). Accordingly, it is these two actions in this operator that are responsible for processing request values."),Object(o.b)("h3",{id:"implicit"},"Implicit use"),Object(o.b)("p",null,"Note that all ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Value_input"},"value input"),' operators can be automatically "wrapped" in the value request operator by using the corresponding option (',Object(o.b)("strong",{parentName:"p"},"DO"),"). And since, as a rule, a value is input using one input operator, it is recommended to use this option by default, and use the value request operator explicitly only in really complex cases, for example, if there can be several input options (depending on the condition, different forms, etc.)"),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"The syntax of the value request operator is described by the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/REQUEST_operator"},Object(o.b)("strong",{parentName:"a"},"REQUEST")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=request",mdxType:"CodeSample"}))}p.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},751:function(e,t,n){"use strict";var a=n(0),r=n(754);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},752:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},753:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var a=n(3),r=n(0),o=n.n(r),s=n(755),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(23).a,theme:c};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},h=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function b(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var f=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=u({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(o.style=s.plain),void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),l(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var s=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[s].concat(c))}})),l(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,s=u({},b(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?u({},s.style,r):r),void 0!==n&&(s.key=n),a&&(s.className+=" "+a),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,s=0,c=[],i=[c];s>-1;){for(;(o=a[s]++)<r[s];){var l=void 0,u=t[s],m=n[s][o];if("string"==typeof m?(u=s>0?u:["plain"],l=m):(u=h(u,m.type),m.alias&&(u=h(u,m.alias)),l=m.content),"string"==typeof l){var b=l.split(p),f=b.length;c.push({types:u,content:b[0]});for(var y=1;y<f;y++)d(c),i.push(c=[]),c.push({types:u,content:b[y]})}else s++,t.push(u),n.push(l),a.push(0),r.push(l.length)}s--,t.pop(),n.pop(),a.pop(),r.pop()}return d(c),i}(void 0!==s?t.tokenize(a,s,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var y=n(752),g=n.n(y),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(751),O=n(750),N=function(){var e=Object(O.useThemeConfig)().prism,t=Object(j.a)().isDarkTheme,n=e.theme||v,a=e.darkTheme||n;return t?a:n},k=n(756),w=n(58),E=n.n(w),T=/{([\d,-]+)}/,x=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},C=/(?:title=")(.*)(?:")/;function S(e){var t=e.children,n=e.className,c=e.metastring,l=Object(O.useThemeConfig)().prism,u=Object(r.useState)(!1),p=u[0],d=u[1],h=Object(r.useState)(!1),m=h[0],b=h[1];Object(r.useEffect)((function(){b(!0)}),[]);var y=Object(r.useRef)(null),v=[],j="",w=N(),S=Array.isArray(t)?t.join(""):t;if(c&&T.test(c)){var _=c.match(T)[1];v=g()(_).filter((function(e){return e>0}))}c&&C.test(c)&&(j=c.match(C)[1]);var q=n&&n.replace(/language-/,"");!q&&l.defaultLanguage&&(q=l.defaultLanguage);var P=S.replace(/\n$/,"");if(0===v.length&&void 0!==q){for(var A,R="",B=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"]);case"jsx":case"tsx":return x(["js","jsBlock","jsx"]);case"html":return x(["js","jsBlock","html"]);case"python":case"py":return x(["python"]);default:return x()}}(q),D=S.replace(/\n$/,"").split("\n"),I=0;I<D.length;){var U=I+1,L=D[I].match(B);if(null!==L){switch(L.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":R+=U+",";break;case"highlight-start":A=U;break;case"highlight-end":R+=A+"-"+(U-1)+","}D.splice(I,1)}else I+=1}v=g()(R),P=D.join("\n")}var M=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus()}(P),d(!0),setTimeout((function(){return d(!1)}),2e3)};return o.a.createElement(f,Object(a.a)({},i,{key:String(m),theme:w,code:P,language:q}),(function(e){var t,n=e.className,r=e.style,c=e.tokens,i=e.getLineProps,l=e.getTokenProps;return o.a.createElement("div",{className:E.a.codeBlockContainer},j&&o.a.createElement("div",{style:r,className:E.a.codeBlockTitle},j),o.a.createElement("div",{className:Object(s.a)(E.a.codeBlockContent,q)},o.a.createElement("div",{tabIndex:0,className:Object(s.a)(n,E.a.codeBlock,"thin-scrollbar",(t={},t[E.a.codeBlockWithTitle]=j,t))},o.a.createElement("div",{className:E.a.codeBlockLines,style:r},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(a.a)({key:t},l({token:e,key:t})))})))})))),o.a.createElement("button",{ref:y,type:"button","aria-label":Object(k.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(E.a.copyButton),onClick:M},p?o.a.createElement(k.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.a.createElement(k.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},754:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r}}]);