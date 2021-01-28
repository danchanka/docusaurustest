(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{272:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(424)),c={},i={unversionedId:"LSFUS/lsFusionMULTI_operator_action_",id:"LSFUS/lsFusionMULTI_operator_action_",isDocsHomePage:!1,title:"lsFusionMULTI_operator_action_",description:"lsFusionMULTI operator (action)",source:"@site/docs\\LSFUS\\lsFusionMULTI_operator_action_.md",slug:"/LSFUS/lsFusionMULTI_operator_action_",permalink:"/docusaurustest/docs/LSFUS/lsFusionMULTI_operator_action_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionMULTI_operator_action_.md",version:"current"},s=[],p={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusionmulti-operator-action"},"lsFusionMULTI operator (action)"),Object(a.b)("h1",{id:"multi-operator-action"},"MULTI operator (action)"),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"MULTI"),"\xa0operator creates an ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionActions"}),"action"),"\xa0that implements\xa0",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"5275770.html#Branching(CASE,IF,MULTI)-poly"}),"branching"),"\xa0(polymorphic form)."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"\xa0MULTI [exclusionType] action1, ..., actionN \n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description")),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"MULTI"),"\xa0operator creates an action that executes one of the actions passed to it depending on whether the selection conditions are met.\xa0The property selection condition is\xa0that the parameters\xa0match this action\xa0",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionCLASS_operator"}),"signature"),".\xa0"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"exclusionType")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"5275770.html#Branching(CASE,IF,MULTI)-exclusive"}),"Type of mutual exclusion"),". Determines whether several conditions for the action selection can be met simultaneously with a certain set of parameters. It is\xa0specified by one of the keywords:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"EXCLUSIVE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"OVERRIDE"))),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0type indicates that the conditions for the action selection cannot be met simultaneously. The\xa0",Object(a.b)("strong",{parentName:"p"},"OVERRIDE"),"\xa0type allows several conditions to be met simultaneously, in which case the first action in the list which selection condition is met will be selected.\xa0"),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0type is used by default."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"action1, ..., actionN"),"\xa0**\xa0**\xa0"),Object(a.b)("p",null,"A list of ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-contextdependent"}),"context dependent\xa0action operators")," which define the actions from which the selection is made."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example")),Object(a.b)("hr",null))}l.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,O=u["".concat(c,".").concat(m)]||u[m]||b[m]||a;return n?o.a.createElement(O,i(i({ref:t},p),{},{components:n})):o.a.createElement(O,i({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);