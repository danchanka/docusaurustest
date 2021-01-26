(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{423:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),i=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=i(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},O=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=i(r),O=n,d=b["".concat(c,".").concat(O)]||b[O]||l[O]||a;return r?o.a.createElement(d,p(p({ref:t},u),{},{components:r})):o.a.createElement(d,p({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=O;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},87:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return i}));var n=r(3),o=r(7),a=(r(0),r(423)),c={},p={unversionedId:"LSFUS/lsFusionNEWEXECUTOR_operator",id:"LSFUS/lsFusionNEWEXECUTOR_operator",isDocsHomePage:!1,title:"lsFusionNEWEXECUTOR_operator",description:"lsFusionNEWEXECUTOR operator",source:"@site/docs\\LSFUS\\lsFusionNEWEXECUTOR_operator.md",slug:"/LSFUS/lsFusionNEWEXECUTOR_operator",permalink:"/docusaurustest/docs/LSFUS/lsFusionNEWEXECUTOR_operator",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/LSFUS/lsFusionNEWEXECUTOR_operator.md",version:"current"},s=[],u={toc:s};function i(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusionnewexecutor-operator"},"lsFusionNEWEXECUTOR operator"),Object(a.b)("h1",{id:"newexecutor-operator"},"NEWEXECUTOR operator"),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"NEWEXECUTOR"),"\xa0operator creates an ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionActions"}),"action")," that enables executing other actions in a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionNew_threads_NEWTHREAD_NEWEXECUTOR_"}),"new thread pool"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"NEWEXECUTOR action THREADS threadExpr\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description")),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"NEWEXECUTOR"),"\xa0operator creates an action that creates a new thread pool and executes the defined action in such a way that any action created with the\xa0",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionNEWTHREAD_operator"}),Object(a.b)("strong",{parentName:"a"},"NEWTHREAD")," operator")," will be executed in one of the threads of the created pool.\xa0"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"action\xa0")),Object(a.b)("p",null,"A ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-contextdependent"}),"context-dependent action operator")," that defines an action to be executed."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"threadExpr")),Object(a.b)("p",null,"An ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionExpression"}),"expression")," which value determines the number of threads in the pool. Must return the value of the ",Object(a.b)("strong",{parentName:"p"},"INTEGER")," class.\xa0"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples")),Object(a.b)("hr",null))}i.isMDXComponent=!0}}]);