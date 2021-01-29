(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{424:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=l(r),O=n,d=b["".concat(p,".").concat(O)]||b[O]||u[O]||o;return r?a.a.createElement(d,c(c({ref:t},i),{},{components:r})):a.a.createElement(d,c({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=O;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var i=2;i<o;i++)p[i]=r[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(424)),p={},c={unversionedId:"LSFUS/APPLY_operator",id:"LSFUS/APPLY_operator",isDocsHomePage:!1,title:"APPLY_operator",description:"lsFusionAPPLY operator",source:"@site/docs\\LSFUS\\APPLY_operator.md",slug:"/LSFUS/APPLY_operator",permalink:"/docusaurustest/docs/LSFUS/APPLY_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/APPLY_operator.md",version:"current"},s=[],i={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionapply-operator"},"lsFusionAPPLY operator"),Object(o.b)("h1",{id:"apply-operator"},"APPLY operator"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"APPLY")," operator creates an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Actions"}),"action")," that ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Apply_changes_APPLY_"}),"applies changes")," to the database."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"APPLY [nestedBlock] [SERIALIZABLE] [action]\n")),Object(o.b)("p",null,"where\xa0",Object(o.b)("em",{parentName:"p"},"nestedBlock"),"\xa0has one of two possible syntaxes:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"NESTED LOCAL\nNESTED (propertyId1, ..., propertyIdN)\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"APPLY")," operator creates an action that applies changes to the database. By specifying the keyword ",Object(o.b)("strong",{parentName:"p"},"NESTED"),"\xa0you can specify ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"688168.html#Dataproperties(DATA)-local"}),"local properties")," whose changes are not dropped when applying the changes. This operator also includes an action to be executed before applying the changes to the database."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"LOCAL")),Object(o.b)("p",null,"Keyword. If specified, all local properties preserve their changes after the ",Object(o.b)("strong",{parentName:"p"},"APPLY")," operator is executed.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId1, ..., propertyIdN")),Object(o.b)("p",null,"List of local properties. Each list element is a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"property ID"),". The local properties specified in the list will preserve their\xa0changes after the operator is executed."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"SERIALIZABLE")),Object(o.b)("p",null,'A keyword that sets the transaction isolation level to "Serializable."'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"action")),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-contextdependent"}),"context-dependent operator")," that describes an action to be executed before applying changes. It is executed in the same transaction as the application of changes."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null))}l.isMDXComponent=!0}}]);