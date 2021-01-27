(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{212:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(424)),i={},c={unversionedId:"LSFUS/lsFusionBranching_CASE_IF_MULTI_",id:"LSFUS/lsFusionBranching_CASE_IF_MULTI_",isDocsHomePage:!1,title:"lsFusionBranching_CASE_IF_MULTI_",description:"lsFusionBranching (CASE, IF, MULTI)",source:"@site/docs\\LSFUS\\lsFusionBranching_CASE_IF_MULTI_.md",slug:"/LSFUS/lsFusionBranching_CASE_IF_MULTI_",permalink:"/docusaurustest/docs/LSFUS/lsFusionBranching_CASE_IF_MULTI_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionBranching_CASE_IF_MULTI_.md",version:"current"},s=[],p={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusionbranching-case-if-multi"},"lsFusionBranching (CASE, IF, MULTI)"),Object(a.b)("h1",{id:"branching-case-if-multi"},"Branching (CASE, IF, MULTI)"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"The branching operator")," creates an ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionActions"}),"action")," that determines for a set of\xa0",Object(a.b)("em",{parentName:"p"},"conditions"),"\xa0which condition is met, and calls the corresponding action."),Object(a.b)("p",null,"All conditions are defined as\xa0",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperties"}),"properties"),"\xa0and/or parameters. Accordingly, a condition is\xa0",Object(a.b)("em",{parentName:"p"},"met")," if the value of the\xa0",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperties"}),"p"),"roperty\xa0or parameter by which it is set is not equal to\xa0",Object(a.b)("strong",{parentName:"p"},"NULL"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Polymorphic form")),Object(a.b)("p",null,"This operator also allows to define a condition not explicitly but by using as a condition the\xa0",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperty_signature_CLASS_"}),"signature")," of the action corresponding to that condition. We will call this the\xa0",Object(a.b)("em",{parentName:"p"},"polymorphic")," form of the operator."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Mutual exclusion of conditions")),Object(a.b)("p",null,"The branching operator lets you specify that all its conditions are\xa0",Object(a.b)("em",{parentName:"p"},"mutually exclusive"),". If this option is set, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."),Object(a.b)("p",null,"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows you to make the code more transparent and readable (especially with the polymorphic form of the selection operator)."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Implicit definition")),Object(a.b)("p",null,"This operator has the capability of an\xa0",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionAction_extension"}),"implicit definition"),"\xa0using the technique of\xa0",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionExtensions"}),"extensions"),", which allows, in particular, to implement polymorphism in the form that is common practice in OOP."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Single form")),Object(a.b)("p",null,"The\xa0",Object(a.b)("em",{parentName:"p"},"single\xa0"),"form of the branching operator checks exactly one condition. If this condition is met, the specified action is called. It is also possible to specify an\xa0",Object(a.b)("em",{parentName:"p"},"alternative action\xa0"),"that is called if the condition is not met."),Object(a.b)("p",null,"Type of mutual exclusion and implicit definition do not make sense/are not supported for this form of the operator"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Language")),Object(a.b)("p",null,"To declare an action implementing general form of branching, the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionCASE_operator_action_"}),Object(a.b)("strong",{parentName:"a"},"CASE")," operator")," is used. For the single form of branching, the IF operator is used, and for the polymorphic form the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionMULTI_operator_action_"}),Object(a.b)("strong",{parentName:"a"},"MULTI")," operator"),".\xa0"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples")),Object(a.b)("p",null,"**",Object(a.b)("br",{parentName:"p"}),"\n","**"))}l.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return n?o.a.createElement(f,c(c({ref:t},p),{},{components:n})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);