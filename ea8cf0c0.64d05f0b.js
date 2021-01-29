(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{387:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),a=(r(0),r(424));const o={},c={unversionedId:"LSFUS/NEWEXECUTOR_operator",id:"LSFUS/NEWEXECUTOR_operator",isDocsHomePage:!1,title:"NEWEXECUTOR_operator",description:"lsFusionNEWEXECUTOR operator",source:"@site/docs\\LSFUS\\NEWEXECUTOR_operator.md",slug:"/LSFUS/NEWEXECUTOR_operator",permalink:"/docusaurustest/docs/LSFUS/NEWEXECUTOR_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/NEWEXECUTOR_operator.md",version:"current"},p=[],u={toc:p};function s({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusionnewexecutor-operator"},"lsFusionNEWEXECUTOR operator"),Object(a.b)("h1",{id:"newexecutor-operator"},"NEWEXECUTOR operator"),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"NEWEXECUTOR"),"\xa0operator creates an ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Actions"}),"action")," that enables executing other actions in a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/New_threads_NEWTHREAD_NEWEXECUTOR_"}),"new thread pool"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"NEWEXECUTOR action THREADS threadExpr\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description")),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"NEWEXECUTOR"),"\xa0operator creates an action that creates a new thread pool and executes the defined action in such a way that any action created with the\xa0",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/NEWTHREAD_operator"}),Object(a.b)("strong",{parentName:"a"},"NEWTHREAD")," operator")," will be executed in one of the threads of the created pool.\xa0"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"action\xa0")),Object(a.b)("p",null,"A ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-contextdependent"}),"context-dependent action operator")," that defines an action to be executed."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"threadExpr")),Object(a.b)("p",null,"An ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Expression"}),"expression")," which value determines the number of threads in the pool. Must return the value of the ",Object(a.b)("strong",{parentName:"p"},"INTEGER")," class.\xa0"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples")),Object(a.b)("hr",null))}s.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),i=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=i(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=i(r),O=n,d=b["".concat(c,".").concat(O)]||b[O]||l[O]||o;return r?a.a.createElement(d,p(p({ref:t},s),{},{components:r})):a.a.createElement(d,p({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=O;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);