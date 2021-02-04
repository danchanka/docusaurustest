(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{419:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),i=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=i(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=i(r),O=n,d=b["".concat(c,".").concat(O)]||b[O]||l[O]||o;return r?a.a.createElement(d,p(p({ref:t},u),{},{components:r})):a.a.createElement(d,p({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=O;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},83:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return i}));var n=r(3),a=r(7),o=(r(0),r(419)),c={title:"NEWEXECUTOR operator"},p={unversionedId:"NEWEXECUTOR_operator",id:"NEWEXECUTOR_operator",isDocsHomePage:!1,title:"NEWEXECUTOR operator",description:"The\xa0NEWEXECUTOR\xa0operator creates an action that enables executing other actions in a new thread pool.",source:"@site/docs\\NEWEXECUTOR_operator.md",slug:"/NEWEXECUTOR_operator",permalink:"/docusaurustest/docs/NEWEXECUTOR_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/NEWEXECUTOR_operator.md",version:"current",sidebar:"docs",previous:{title:"NESTEDSESSION operator",permalink:"/docusaurustest/docs/NESTEDSESSION_operator"},next:{title:"NEWSESSION operator",permalink:"/docusaurustest/docs/NEWSESSION_operator"}},s=[],u={toc:s};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"NEWEXECUTOR"),"\xa0operator creates an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that enables executing other actions in a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/New_threads_NEWTHREAD_NEWEXECUTOR_"}),"new thread pool"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"NEWEXECUTOR action THREADS threadExpr\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"NEWEXECUTOR"),"\xa0operator creates an action that creates a new thread pool and executes the defined action in such a way that any action created with the\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/NEWTHREAD_operator"}),Object(o.b)("strong",{parentName:"a"},"NEWTHREAD")," operator")," will be executed in one of the threads of the created pool.\xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"action\xa0")),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-contextdependent"}),"context-dependent action operator")," that defines an action to be executed."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"threadExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expression")," which value determines the number of threads in the pool. Must return the value of the ",Object(o.b)("strong",{parentName:"p"},"INTEGER")," class.\xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null))}i.isMDXComponent=!0}}]);