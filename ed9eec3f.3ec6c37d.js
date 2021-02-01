(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{396:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(424)),c={title:"CASE operator (action)"},i={unversionedId:"LSFUS/CASE_operator_action_",id:"LSFUS/CASE_operator_action_",isDocsHomePage:!1,title:"CASE operator (action)",description:"The\xa0CASE\xa0operator creates an action that implements branching.",source:"@site/docs\\LSFUS\\CASE_operator_action_.md",slug:"/LSFUS/CASE_operator_action_",permalink:"/docusaurustest/docs/LSFUS/CASE_operator_action_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/CASE_operator_action_.md",version:"current",sidebar:"docs",previous:{title:"CANCEL operator",permalink:"/docusaurustest/docs/LSFUS/CANCEL_operator"},next:{title:"CHANGECLASS operator",permalink:"/docusaurustest/docs/LSFUS/CHANGECLASS_operator"}},s=[],p={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"CASE"),"\xa0operator creates an ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Actions"}),"action")," that implements ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Branching_CASE_IF_MULTI_"}),"branching"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Syntax"),"\xa0"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"CASE [exclusionType]\n    WHEN condition1 THEN action1\n    ...\n    WHEN conditionN THEN actionN\n    [ELSE elseAction]\n")),Object(a.b)("p",null,"Description"),Object(a.b)("p",null,"The\xa0CASE\xa0operator creates an action that executes one of the actions passed to it depending on whether the selection conditions are met. Selection conditions are defined using the properties specified in the\xa0WHEN block. If a selection condition is met, the action specified in the corresponding\xa0THEN block is executed. If none of the conditions is met, the action specified in the\xa0ELSE block will be executed if this block is specified."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("p",null,"*",Object(a.b)("em",{parentName:"p"},"\xa0** "),"exclusionType*"),Object(a.b)("p",null,"**\xa0**",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"5275770.html#Branching(CASE,IF,MULTI)-exclusive"}),"Type of mutual exclusion"),". Determines whether several conditions can be met simultaneously for a certain set of parameters. It is\xa0specified by one of the keywords:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"EXCLUSIVE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"OVERRIDE"))),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0type indicates that none of the conditions listed can be met simultaneously. The\xa0",Object(a.b)("strong",{parentName:"p"},"OVERRIDE"),"\xa0type allows several conditions to be met simultaneously, in this case, the action corresponding to the first met condition is executed"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"OVERRIDE"),"\xa0type is used by default."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"condition1 ... conditionN")),Object(a.b)("p",null,"\xa0",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Expression"}),"Expressions")," whose values determine the selection conditions.\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"action1 ... actionN")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-contextdependent"}),"Context-dependent operators")," that describe actions that may be called when the corresponding condition is met."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"elseAction")),Object(a.b)("p",null,"A context-dependent operator that describes an action to be executed if none of the conditions is met.\xa0"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples")),Object(a.b)("hr",null))}l.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||a;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);