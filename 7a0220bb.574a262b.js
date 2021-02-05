(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{246:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(419)),c={title:"CANCEL operator"},p={unversionedId:"CANCEL_operator",id:"CANCEL_operator",isDocsHomePage:!1,title:"CANCEL operator",description:"The CANCEL\xa0operator creates an\xa0action that cancels changes in the current session.",source:"@site/docs\\CANCEL_operator.md",slug:"/CANCEL_operator",permalink:"/docusaurustest/docs/CANCEL_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CANCEL_operator.md",version:"current",sidebar:"docs",previous:{title:"BREAK operator",permalink:"/docusaurustest/docs/BREAK_operator"},next:{title:"CASE operator (action)",permalink:"/docusaurustest/docs/CASE_operator_action"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"CANCEL\xa0"),"operator creates an\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Cancel_changes_CANCEL"}),"cancels changes")," in the current session."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"CANCEL [nestedBlock]\n")),Object(o.b)("p",null,"where\xa0",Object(o.b)("em",{parentName:"p"},"nestedBlock"),"\xa0has one of two possible syntaxes:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"NESTED LOCAL\nNESTED (propertyId1, ..., propertyIdN)\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"CANCEL")," operator creates an action that cancels changes in the current session. By specifying the keyword ",Object(o.b)("strong",{parentName:"p"},"NESTED"),"\xa0you can specify\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"688168.html#Dataproperties(DATA)-local"}),"local properties")," whose changes are not dropped when cancelling the changes.\xa0"),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"LOCAL")),Object(o.b)("p",null,"Keyword. If specified, all local properties preserve their changes after the ",Object(o.b)("strong",{parentName:"p"},"CANCEL"),"\xa0operator is executed.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId1, ..., propertyIdN")),Object(o.b)("p",null,"List of local properties. Each list element is a\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"property ID"),". The local properties specified in the list will preserve their\xa0changes after the operator is executed."),Object(o.b)("h3",{id:"examples"},"Examples"))}l.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,p(p({ref:t},i),{},{components:r})):a.a.createElement(m,p({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);