(window.webpackJsonp=window.webpackJsonp||[]).push([[629],{700:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(749)),c={title:"CASE operator"},i={unversionedId:"CASE_operator",id:"CASE_operator",isDocsHomePage:!1,title:"CASE operator",description:"The CASE operator\xa0 creates a property that\xa0selects\xa0a result by condition.",source:"@site/docs/CASE_operator.md",slug:"/CASE_operator",permalink:"/docusaurustest/docs/next/CASE_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CASE_operator.md",version:"current",sidebar:"docs",previous:{title:"AGGR operator",permalink:"/docusaurustest/docs/next/AGGR_operator"},next:{title:"CLASS operator",permalink:"/docusaurustest/docs/next/CLASS_operator"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"CASE")," operator\xa0 creates a ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"property")," that\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"},"selects"),"\xa0a result by condition."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Syntax"),"\xa0"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"CASE [exclusionType]\n    WHEN condition1 THEN result1\n    ...\n    WHEN conditionN THEN resultN\n    [ELSE elseResult]\n")),Object(a.b)("p",null,"Description"),Object(a.b)("p",null,"The CASE operator creates a property that implements a conditional selection. Selection conditions are defined using the properties specified in the WHEN block. If the selection condition is met, the property value will be the value of the property specified in the corresponding THEN block. If none of the conditions are met, the property value will be the property value in the ELSE block, if that block is specified (if not, NULL is returned)."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\xa0*"),"exclusionType*"),Object(a.b)("p",null,"**\xa0**",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_#exclusive"},"Type of mutual exclusion"),". Determines whether several conditions can be met simultaneously for a certain set of parameters. It is\xa0specified by one of the keywords:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"EXCLUSIVE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"OVERRIDE"))),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0type indicates that none of the conditions listed can be met simultaneously. The\xa0",Object(a.b)("strong",{parentName:"p"},"OVERRIDE"),"\xa0type allows several conditions to be met simultaneously, in this case, the property value will be the value of the value property for the first met condition.\xa0"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"OVERRIDE")," type is used by default."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"condition1 ... conditionN")),Object(a.b)("p",null,"\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Expression"},"Expressions")," whose values define the selection condition.\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"result1 ... resultN")),Object(a.b)("p",null,"Expressions whose values define the selection result."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"elseResult")),Object(a.b)("p",null,"An expression whose value defines the property value if none of the conditions are met."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Color;\nid = DATA STRING[100] (Color);\n\nbackground 'Color' (Color c) = CASE\n    WHEN id(c) == 'Black' THEN RGB(0,0,0)\n    WHEN id(c) == 'Red' THEN RGB(255,0,0)\n    WHEN id(c) == 'Green' THEN RGB(0,255,0)\n;\n\nid (TypeExecEnv type) = CASE EXCLUSIVE\n    WHEN type == TypeExecEnv.materialize THEN 3\n    WHEN type == TypeExecEnv.disablenestloop THEN 2\n    WHEN type == TypeExecEnv.none THEN 1\n    ELSE 0\n;\n")))}l.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,i(i({ref:t},s),{},{components:n})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);