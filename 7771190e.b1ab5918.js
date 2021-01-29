(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{232:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),o=(r(0),r(424));const a={},c={unversionedId:"LSFUS/NEWTHREAD_operator",id:"LSFUS/NEWTHREAD_operator",isDocsHomePage:!1,title:"NEWTHREAD_operator",description:"lsFusionNEWTHREAD operator",source:"@site/docs\\LSFUS\\NEWTHREAD_operator.md",slug:"/LSFUS/NEWTHREAD_operator",permalink:"/docusaurustest/docs/LSFUS/NEWTHREAD_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/NEWTHREAD_operator.md",version:"current"},p=[],i={toc:p};function s({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionnewthread-operator"},"lsFusionNEWTHREAD operator"),Object(o.b)("h1",{id:"newthread-operator"},"NEWTHREAD operator"),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"NEWTHREAD"),"\xa0operator creates an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Actions"}),"action")," that executes another action in a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/New_threads_NEWTHREAD_NEWEXECUTOR_"}),"new thread"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"NEWTHREAD action [CONNECTION connectionExpr]\nNEWTHREAD action SCHEDULE [PERIOD periodExpr] [DELAY delayExpr]\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"NEWTHREAD"),"\xa0operator creates an action that executes another action in a new thread. When the ",Object(o.b)("strong",{parentName:"p"},"CONNECTION")," keyword is used, you can specify the connection which will be used during the action execution. There is also a second form of the ",Object(o.b)("strong",{parentName:"p"},"NEWTHREAD")," operator for triggering an action using the scheduler. This form usage is determined by the presence of the ",Object(o.b)("strong",{parentName:"p"},"SCHEDULE")," keyword. \xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"action\xa0")),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-contextdependent"}),"context dependent operator")," that defines an action to be executed in the new thread."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"connectionExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Expression"}),"expression")," which value is a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Properties"}),"property")," that returns an object of the ",Object(o.b)("strong",{parentName:"p"},"SystemEvents.Connection")," class. Defines the connection for which this action will be performed.\xa0\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"periodExpr")),Object(o.b)("p",null,"An expression which value is a property that returns the length of the action repetition period in milliseconds. If not specified, the action will be executed once."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"delayExpr")),Object(o.b)("p",null,"An expression which value is a property that returns the delay before the first execution of the action in milliseconds. If not specified, the action will be executed without delay."),Object(o.b)("p",null,"\xa0",Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null))}s.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return O}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,O=b["".concat(c,".").concat(d)]||b[d]||l[d]||a;return r?o.a.createElement(O,p(p({ref:t},s),{},{components:r})):o.a.createElement(O,p({ref:t},s))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);