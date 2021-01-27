(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{424:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(f,s(s({ref:t},l),{},{components:n})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(424)),c={},s={unversionedId:"LSFUS/lsFusionCASE_operator",id:"LSFUS/lsFusionCASE_operator",isDocsHomePage:!1,title:"lsFusionCASE_operator",description:"lsFusionCASE operator",source:"@site/docs\\LSFUS\\lsFusionCASE_operator.md",slug:"/LSFUS/lsFusionCASE_operator",permalink:"/docusaurustest/docs/LSFUS/lsFusionCASE_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionCASE_operator.md",version:"current"},i=[],l={toc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusioncase-operator"},"lsFusionCASE operator"),Object(a.b)("h1",{id:"case-operator"},"CASE operator"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"CASE")," operator\xa0 creates a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperties"}),"property")," that\xa0",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionSelection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"}),"selects"),"\xa0a result by condition."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Syntax"),"\xa0"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"CASE [exclusionType]\n    WHEN condition1 THEN result1\n    ...\n    WHEN conditionN THEN resultN\n    [ELSE elseResult]\n")),Object(a.b)("p",null,"Description"),Object(a.b)("p",null,"The CASE operator creates a property that implements a conditional selection. Selection conditions are defined using the properties specified in the WHEN block. If the selection condition is met, the property value will be the value of the property specified in the corresponding THEN block. If none of the conditions are met, the property value will be the property value in the ELSE block, if that block is specified (if not, NULL is returned)."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\xa0*"),"exclusionType*"),Object(a.b)("p",null,"**\xa0**",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"1572905.html#Selection(CASE,IF,MULTI,OVERRIDE,EXCLUSIVE)-exclusive"}),"Type of mutual exclusion"),". Determines whether several conditions can be met simultaneously for a certain set of parameters. It is\xa0specified by one of the keywords:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"EXCLUSIVE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"OVERRIDE"))),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0type indicates that none of the conditions listed can be met simultaneously. The\xa0",Object(a.b)("strong",{parentName:"p"},"OVERRIDE"),"\xa0type allows several conditions to be met simultaneously, in this case, the property value will be the value of the value property for the first met condition.\xa0"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"OVERRIDE")," type is used by default."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"condition1 ... conditionN")),Object(a.b)("p",null,"\xa0",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionExpression"}),"Expressions")," whose values define the selection condition.\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"result1 ... resultN")),Object(a.b)("p",null,"Expressions whose values define the selection result."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"elseResult")),Object(a.b)("p",null,"An expression whose value defines the property value if none of the conditions are met."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples")))}p.isMDXComponent=!0}}]);