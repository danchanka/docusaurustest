(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{177:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),a=(r(0),r(424));const o={},c={unversionedId:"LSFUS/TRY_operator",id:"LSFUS/TRY_operator",isDocsHomePage:!1,title:"TRY_operator",description:"lsFusionTRY operator",source:"@site/docs\\LSFUS\\TRY_operator.md",slug:"/LSFUS/TRY_operator",permalink:"/docusaurustest/docs/LSFUS/TRY_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/TRY_operator.md",version:"current"},p=[],i={toc:p};function s({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusiontry-operator"},"lsFusionTRY operator"),Object(a.b)("h1",{id:"try-operator"},"TRY operator"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"TRY")," operator creates an ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Actions"}),"action")," that executes another action with ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Exception_handling_TRY_"}),"exception handling"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"TRY action [CATCH catchAction] [FINALLY finallyAction]\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description")),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"TRY")," operator creates an action that executes another action and handles exceptions within it.\xa0"),Object(a.b)("p",null,"An operator form without the\xa0",Object(a.b)("strong",{parentName:"p"},"FINALLY")," keyword creates an action that executes another action and intercepts errors that are thrown in it. In this case, the error is not passed anywhere."),Object(a.b)("p",null,"An operator form with the ",Object(a.b)("strong",{parentName:"p"},"FINALLY")," keyword creates an action that executes another action, intercepts errors that occur, then, regardless of whether an error was thrown or not, executes the action specified in the ",Object(a.b)("strong",{parentName:"p"},"FINALLY")," block, and then, if an error was thrown, passes this error to the top action in the stack."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"action")),Object(a.b)("p",null,"A ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-contextdependent"}),"context-dependent operator")," that describes an action to be executed with exception handling."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"catchAction")),Object(a.b)("p",null,"A context-dependent operator that describes an action to be executed if an error is thrown while executing the action. Here the error message will be written to the property ",Object(a.b)("strong",{parentName:"p"},"System.messageCaughtException ","[","]"),", the java error stack will be written to\xa0",Object(a.b)("strong",{parentName:"p"},"System.javaStackTraceCaughtException ","[","]"),", and the LSF stack will be written to\xa0*",Object(a.b)("strong",{parentName:"p"},"*System.lsfStackTraceCaughtException ","[","]",".**")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"finallyAction")),Object(a.b)("p",null,"A context-dependent operator that describes an action to be executed after the action being executed, regardless of whether or not an error has been thrown."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples")),Object(a.b)("hr",null),Object(a.b)("p",null,"**",Object(a.b)("br",{parentName:"p"}),"\n","**"))}s.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=b(r),h=n,d=u["".concat(c,".").concat(h)]||u[h]||l[h]||o;return r?a.a.createElement(d,p(p({ref:t},s),{},{components:r})):a.a.createElement(d,p({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=h;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);