(window.webpackJsonp=window.webpackJsonp||[]).push([[323],{396:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(749)),c={title:"ACTIVE TAB operator"},p={unversionedId:"ACTIVE_TAB_operator",id:"ACTIVE_TAB_operator",isDocsHomePage:!1,title:"ACTIVE TAB operator",description:"The\xa0ACTIVE TAB\xa0operator creates a property that checks if specified tab is active.",source:"@site/docs/ACTIVE_TAB_operator.md",slug:"/ACTIVE_TAB_operator",permalink:"/docusaurustest/docs/next/ACTIVE_TAB_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/ACTIVE_TAB_operator.md",version:"current",sidebar:"docs",previous:{title:"ABSTRACT operator",permalink:"/docusaurustest/docs/next/ABSTRACT_operator"},next:{title:"AGGR operator",permalink:"/docusaurustest/docs/next/AGGR_operator"}},i=[{value:"Syntax\xa0",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"ACTIVE TAB"),"\xa0operator creates a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"property")," that checks if specified tab is ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Activity_ACTIVE_"},"active"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax\xa0"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"ACTIVE TAB formName.componentSelector\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"ACTIVE TAB"),"\xa0operator creates a property that returns ",Object(o.b)("strong",{parentName:"p"},"TRUE")," if the specified tab is active on a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Forms"},"form"),".\xa0"),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"formName")),Object(o.b)("p",null,"Form name.\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#cid-broken"},"Composite ID"),"."),Object(o.b)("p",null,"*",Object(o.b)("em",{parentName:"p"},"componentSelector"),"  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"})),Object(o.b)("p",null,"Design component ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/DESIGN_instruction#selector-broken"},"selector"),".\xa0The component must be a tab in the tab panel."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"//Form with two tabs\nFORM tabbedForm 'Tabbed form'\n    OBJECTS u = CustomUser\n    PROPERTIES(u) name\n\n    OBJECTS c = Chat\n    PROPERTIES(c) name\n;\n\nDESIGN tabbedForm {\n    NEW tabPane FIRST {\n        type = TABBED;\n        NEW contacts {\n            caption = 'Contacts';\n            MOVE BOX(u);\n        }\n        NEW recent {\n            caption = 'Recent';\n            MOVE BOX(c);\n        }\n    }\n}\n\n//If the 'Recent' tab is active\nrecentActive() = ACTIVE TAB tabbedForm.recent;\n")))}u.isMDXComponent=!0},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,d=b["".concat(c,".").concat(m)]||b[m]||l[m]||o;return r?a.a.createElement(d,p(p({ref:t},s),{},{components:r})):a.a.createElement(d,p({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);