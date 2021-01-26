(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{300:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),a=(r(0),r(423)),c={},i={unversionedId:"LSFUS/lsFusionTRY_operator",id:"LSFUS/lsFusionTRY_operator",isDocsHomePage:!1,title:"lsFusionTRY_operator",description:"lsFusionTRY operator",source:"@site/docs\\LSFUS\\lsFusionTRY_operator.md",slug:"/LSFUS/lsFusionTRY_operator",permalink:"/docusaurustest/docs/LSFUS/lsFusionTRY_operator",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/LSFUS/lsFusionTRY_operator.md",version:"current"},p=[],s={toc:p};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusiontry-operator"},"lsFusionTRY operator"),Object(a.b)("h1",{id:"try-operator"},"TRY operator"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"TRY")," operator creates an ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionActions"}),"action")," that executes another action with ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionException_handling_TRY_"}),"exception handling"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"TRY action [CATCH catchAction] [FINALLY finallyAction]\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description")),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"TRY")," operator creates an action that executes another action and handles exceptions within it.\xa0"),Object(a.b)("p",null,"An operator form without the\xa0",Object(a.b)("strong",{parentName:"p"},"FINALLY")," keyword creates an action that executes another action and intercepts errors that are thrown in it. In this case, the error is not passed anywhere."),Object(a.b)("p",null,"An operator form with the ",Object(a.b)("strong",{parentName:"p"},"FINALLY")," keyword creates an action that executes another action, intercepts errors that occur, then, regardless of whether an error was thrown or not, executes the action specified in the ",Object(a.b)("strong",{parentName:"p"},"FINALLY")," block, and then, if an error was thrown, passes this error to the top action in the stack."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"action")),Object(a.b)("p",null,"A ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-contextdependent"}),"context-dependent operator")," that describes an action to be executed with exception handling."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"catchAction")),Object(a.b)("p",null,"A context-dependent operator that describes an action to be executed if an error is thrown while executing the action. Here the error message will be written to the property ",Object(a.b)("strong",{parentName:"p"},"System.messageCaughtException ","[","]"),", the java error stack will be written to\xa0",Object(a.b)("strong",{parentName:"p"},"System.javaStackTraceCaughtException ","[","]"),", and the LSF stack will be written to\xa0*",Object(a.b)("strong",{parentName:"p"},"*System.lsfStackTraceCaughtException ","[","]",".**")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"finallyAction")),Object(a.b)("p",null,"A context-dependent operator that describes an action to be executed after the action being executed, regardless of whether or not an error has been thrown."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples")),Object(a.b)("hr",null))}b.isMDXComponent=!0},423:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=b(r),h=n,d=u["".concat(c,".").concat(h)]||u[h]||l[h]||a;return r?o.a.createElement(d,i(i({ref:t},s),{},{components:r})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);