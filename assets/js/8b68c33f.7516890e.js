(window.webpackJsonp=window.webpackJsonp||[]).push([[383,460],{456:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(749)),s=n(57),c={title:"FORM instruction: Overview",sidebar_label:"Overview"},i={unversionedId:"FORM_instruction",id:"version-1.0.0/FORM_instruction",isDocsHomePage:!1,title:"FORM instruction: Overview",description:"The FORM\xa0instruction creates a form.",source:"@site/versioned_docs/version-1.0.0/FORM_instruction.md",slug:"/FORM_instruction",permalink:"/docusaurustest/docs/FORM_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/FORM_instruction.md",version:"1.0.0",sidebar_label:"Overview",sidebar:"version-1.0.0/docs",previous:{title:"CLASS instruction",permalink:"/docusaurustest/docs/CLASS_instruction"},next:{title:"Object blocks",permalink:"/docusaurustest/docs/Object_blocks"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"FORM"),"\xa0instruction creates a ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Forms"},"form"),".\xa0"),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"FORM name [caption] formOptions\n    formBlock1\n    ...\n    formBlockN\n;\n")),Object(a.b)("p",null,"After specifying the form name and caption, form options ",Object(a.b)("em",{parentName:"p"},"formOptions:\xa0")," are specified in an arbitrary order"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"IMAGE path\xa0\nAUTOREFRESH period\xa0\n")),Object(a.b)("p",null,"After the form options, the blocks of the form ",Object(a.b)("em",{parentName:"p"},"formBlock1 ... are described in the arbitrary order. formBlockN"),":\xa0"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"OBJECTS ...\xa0\nTREE ...\nPROPERTIES ...\nFILTERS ...\n[EXTEND] FILTERGROUP ...\nORDER ...\nEVENTS ...\nREPORT propertyExpression\nFORMEXTID extID\nEDIT className OBJECT objectName\nLIST className OBJECT objectName \n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"FORM")," instruction declares a new form and adds it to the current ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Modules"},"module"),". In addition, this instruction\xa0is used to\xa0describe ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Form_structure"},"the form structure"),", as well as its ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Static_view"},"static")," and partially ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Interactive_view"},"interactive")," (except ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Form_design"},"form design"),") views. At the beginning of the instruction, name and captions are specified, followed by form options and the declaration containing an arbitrary number of blocks describing the structure of the form. They can be used in any order, provided that each block is declared after the blocks whose elements it uses. Each block can be used any number of times."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"name")),Object(a.b)("p",null,"Form name. ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#id-broken"},"Simple ID"),".\xa0The name must be unique within the current\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Naming#namespace"},"namespace"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"caption")),Object(a.b)("p",null,"Form caption. ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#strliteral-broken"},"String literal"),".\xa0If the caption is not defined, the form's name will be its caption."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"*Form options")," (formOptions)*"),Object(a.b)("p",null,"IMAGE path"),Object(a.b)("p",null,"The relative path to the file with the image that will be used as the form icon.\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"path")," - path to the file. String literal.\xa0The path is relative to the\xa0 ",Object(a.b)("strong",{parentName:"p"},"images")," directory."),Object(a.b)("p",null,"AUTOREFRESH period"),Object(a.b)("p",null,"Specifying the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Interactive_view#extra"},"automatic form update")," period.\xa0If the option is not specified, the form will not be updated automatically."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"period")," - a period of time in seconds.\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#intliteral-broken"},"Integral literal"),".\xa0"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"*Form blocks")," (",Object(a.b)("em",{parentName:"p"},"formBlock1 ... formBlockN"),")*"),Object(a.b)("p",null,"OBJECTS ..."),Object(a.b)("p",null,"Adds objects to the form. ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Object_blocks"},"Object block syntax")," ."),Object(a.b)("p",null,"TREE ..."),Object(a.b)("p",null,"Adds an object tree to the form. ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Object_blocks#tree"},"Syntax of the object tree block"),"."),Object(a.b)("p",null,"PROPERTIES ..."),Object(a.b)("p",null,"Adds ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Properties"},"properties")," and ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"actions")," to the form. ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Properties_and_actions_block"},"Syntax of the property and action block"),"."),Object(a.b)("p",null,"FILTERS ..."),Object(a.b)("p",null,"Adds fixed filters to the form. ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Filters_and_sortings_block#fixedfilters-broken"},"Syntax of the fixed filters block"),"."),Object(a.b)("p",null,"[","EXTEND","]","\xa0FILTERGROUP ..."),Object(a.b)("p",null,"Adds a group of filters to the form or extends an existing one.\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Filters_and_sortings_block#filtergroup"},"Syntax of a filter group block"),"."),Object(a.b)("p",null,"ORDER ..."),Object(a.b)("p",null,"Adds sorting options to the form.\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Filters_and_sortings_block#sort"},"Syntax of the order block"),"."),Object(a.b)("p",null,"EVENTS ..."),Object(a.b)("p",null,"Defines actions that are executed on specific events. ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Event_block#events-broken"},"Syntax of the event block"),Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Event_block"},".")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"FORMEXTID extID")),Object(a.b)("p",null,"Specifying the name to be used\xa0to\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Structured_view#extid"},"export/import"),"\xa0this form. Used only\xa0in\xa0the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Structured_view"},"structured"),"\xa0view."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"extId")),Object(a.b)("p",null,"String\xa0literal."),Object(a.b)("p",null,"REPORT propertyExpression"),Object(a.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Specifying the property whose value will be used as the name of the report\xa0file for an empty group. You can use the names of already declared objects on the form as parameters. It is assumed that the values of these objects will be passed when the form is opened in the print view (if it doesn't happen, they will be considered equal to NULL)."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"propertyExpression")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Expression"},"Expression"),"."),Object(a.b)("p",null,"EDIT \u0441lassName OBJECT objectName"),Object(a.b)("p",null,"Sets the current form as the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Interactive_view#edtClass"},"edit")," form for all objects of the specified class."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"className")," \u2013 the name of the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/User_classes"},"custom"),"\xa0. When editing objects of this class, the created form will be opened. Defined with a ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#cid-broken"},"composite ID"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"objectName")," \u2013 the name of the form object that will be used for editing.\xa0Defined with a ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#id-broken"},"simple ID"),"."),Object(a.b)("p",null,"LIST \u0441lassName OBJECT objectName"),Object(a.b)("p",null,"Sets the current form as the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Interactive_view#edtClass"},"list form")," for the object of the specified class.\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"className"),"\xa0\u2013 the name of the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/User_classes"},"custom"),"\xa0class whose objects will be listed using the created form. Defined with\xa0a composite ID."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"objectName"),"\xa0\u2013 the name of the form object whose current value will be used as the object being selected.\xa0Defined with a simple ID."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=FormSample&block=form",mdxType:"CodeSample"}))}u.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return b})),n.d(t,"default",(function(){return m}));var r=n(3),o=n(7),a=n(0),s=n.n(a),c=n(749),i=n(753),l={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},u=[],b=function(e){var t=e.url,n=e.lines,r=Object(a.useState)(""),o=r[0],l=r[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),o?n?Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:u,CodeSample:b};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},751:function(e,t,n){"use strict";var r=n(0),o=n(754);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},752:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},753:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var r=n(3),o=n(0),a=n.n(o),s=n(755),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(23).a,theme:c};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,b=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=p({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=p({},n,{backgroundColor:null}),o};function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var h=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=p({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==o&&(a.style=void 0!==a.style?p({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),l(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var s=r?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(c))}})),l(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,s=p({},f(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?p({},s.style,o):o),void 0!==n&&(s.key=n),r&&(s.className+=" "+r),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),s=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,s=0,c=[],i=[c];s>-1;){for(;(a=r[s]++)<o[s];){var l=void 0,p=t[s],m=n[s][a];if("string"==typeof m?(p=s>0?p:["plain"],l=m):(p=d(p,m.type),m.alias&&(p=d(p,m.alias)),l=m.content),"string"==typeof l){var f=l.split(u),h=f.length;c.push({types:p,content:f[0]});for(var y=1;y<h;y++)b(c),i.push(c=[]),c.push({types:p,content:f[y]})}else s++,t.push(p),n.push(l),r.push(0),o.push(l.length)}s--,t.pop(),n.pop(),r.pop(),o.pop()}return b(c),i}(void 0!==s?t.tokenize(r,s,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var y=n(752),O=n.n(y),j={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},g=n(751),v=n(750),k=function(){var e=Object(v.useThemeConfig)().prism,t=Object(g.a)().isDarkTheme,n=e.theme||j,r=e.darkTheme||n;return t?r:n},N=n(756),E=n(58),x=n.n(E),T=/{([\d,-]+)}/,w=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},S=/(?:title=")(.*)(?:")/;function C(e){var t=e.children,n=e.className,c=e.metastring,l=Object(v.useThemeConfig)().prism,p=Object(o.useState)(!1),u=p[0],b=p[1],d=Object(o.useState)(!1),m=d[0],f=d[1];Object(o.useEffect)((function(){f(!0)}),[]);var y=Object(o.useRef)(null),j=[],g="",E=k(),C=Array.isArray(t)?t.join(""):t;if(c&&T.test(c)){var D=c.match(T)[1];j=O()(D).filter((function(e){return e>0}))}c&&S.test(c)&&(g=c.match(S)[1]);var R=n&&n.replace(/language-/,"");!R&&l.defaultLanguage&&(R=l.defaultLanguage);var _=C.replace(/\n$/,"");if(0===j.length&&void 0!==R){for(var I,P="",F=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"]);case"jsx":case"tsx":return w(["js","jsBlock","jsx"]);case"html":return w(["js","jsBlock","html"]);case"python":case"py":return w(["python"]);default:return w()}}(R),B=C.replace(/\n$/,"").split("\n"),A=0;A<B.length;){var L=A+1,M=B[A].match(F);if(null!==M){switch(M.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":P+=L+",";break;case"highlight-start":I=L;break;case"highlight-end":P+=I+"-"+(L-1)+","}B.splice(A,1)}else A+=1}j=O()(P),_=B.join("\n")}var U=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus()}(_),b(!0),setTimeout((function(){return b(!1)}),2e3)};return a.a.createElement(h,Object(r.a)({},i,{key:String(m),theme:E,code:_,language:R}),(function(e){var t,n=e.className,o=e.style,c=e.tokens,i=e.getLineProps,l=e.getTokenProps;return a.a.createElement("div",{className:x.a.codeBlockContainer},g&&a.a.createElement("div",{style:o,className:x.a.codeBlockTitle},g),a.a.createElement("div",{className:Object(s.a)(x.a.codeBlockContent,R)},a.a.createElement("div",{tabIndex:0,className:Object(s.a)(n,x.a.codeBlock,"thin-scrollbar",(t={},t[x.a.codeBlockWithTitle]=g,t))},a.a.createElement("div",{className:x.a.codeBlockLines,style:o},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return j.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(r.a)({key:t},n),e.map((function(e,t){return a.a.createElement("span",Object(r.a)({key:t},l({token:e,key:t})))})))})))),a.a.createElement("button",{ref:y,type:"button","aria-label":Object(N.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(x.a.copyButton),onClick:U},u?a.a.createElement(N.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(N.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},754:function(e,t,n){"use strict";var r=n(0),o=n.n(r).a.createContext(void 0);t.a=o}}]);