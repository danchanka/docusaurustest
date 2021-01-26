(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{260:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(423)),c={},s={unversionedId:"LSFUS/lsFusionMETA_instruction",id:"LSFUS/lsFusionMETA_instruction",isDocsHomePage:!1,title:"lsFusionMETA_instruction",description:"lsFusionMETA instruction",source:"@site/docs\\LSFUS\\lsFusionMETA_instruction.md",slug:"/LSFUS/lsFusionMETA_instruction",permalink:"/docusaurustest/docs/LSFUS/lsFusionMETA_instruction",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/LSFUS/lsFusionMETA_instruction.md",version:"current"},i=[],u={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionmeta-instruction"},"lsFusionMETA instruction"),Object(o.b)("h1",{id:"meta-instruction"},"META instruction"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"META")," instruction creates a new\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Metaprogramming_1310740.html#Metaprogramming-metacode"}),"metacode"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"META name(param1, ..., paramN)\n    statement1\n    ...\n    statementM\nEND\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"META")," instruction declares a new metacode and adds it to the current ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionModules"}),"module"),".\xa0"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"META")," instruction is an exception - it is not supposed to end with a colon. \xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name")),Object(o.b)("p",null,"Metacode name. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionIDs"}),"Simple ID"),". Must be unique within the current namespace among metacodes with the same number of parameters."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(o.b)("p",null,"List of metacode parameters. Each parameter is defined by a simple ID. The list cannot be empty."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"statement1 ... statementM")),Object(o.b)("p",null,"A sequence of \xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionInstructions"}),"instructions")," represented by a block of code. Instructions may contain ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Metaprogramming_1310740.html#Metaprogramming-concat"}),"special operations ","#","#"," and ","#","#","#")," used for concatenating ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionTokens"}),"lexemes"),". Instructions cannot include another ",Object(o.b)("strong",{parentName:"p"},"META")," instruction."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null))}p.isMDXComponent=!0},423:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(c,".").concat(m)]||b[m]||l[m]||o;return n?a.a.createElement(d,s(s({ref:t},u),{},{components:n})):a.a.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);