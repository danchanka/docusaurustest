(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{180:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(419)),c={title:"TRY operator"},p={unversionedId:"TRY_operator",id:"TRY_operator",isDocsHomePage:!1,title:"TRY operator",description:"The TRY operator creates an action that executes another action with exception handling.",source:"@site/docs\\TRY_operator.md",slug:"/TRY_operator",permalink:"/docusaurustest/docs/TRY_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/TRY_operator.md",version:"current",sidebar:"docs",previous:{title:"SHOW operator",permalink:"/docusaurustest/docs/SHOW_operator"},next:{title:"WHILE operator",permalink:"/docusaurustest/docs/WHILE_operator"}},i=[],s={toc:i};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"TRY")," operator creates an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that executes another action with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Exception_handling_TRY_"}),"exception handling"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"TRY action [CATCH catchAction] [FINALLY finallyAction]\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"TRY")," operator creates an action that executes another action and handles exceptions within it.\xa0"),Object(o.b)("p",null,"An operator form without the\xa0",Object(o.b)("strong",{parentName:"p"},"FINALLY")," keyword creates an action that executes another action and intercepts errors that are thrown in it. In this case, the error is not passed anywhere."),Object(o.b)("p",null,"An operator form with the ",Object(o.b)("strong",{parentName:"p"},"FINALLY")," keyword creates an action that executes another action, intercepts errors that occur, then, regardless of whether an error was thrown or not, executes the action specified in the ",Object(o.b)("strong",{parentName:"p"},"FINALLY")," block, and then, if an error was thrown, passes this error to the top action in the stack."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"action")),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-contextdependent"}),"context-dependent operator")," that describes an action to be executed with exception handling."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"catchAction")),Object(o.b)("p",null,"A context-dependent operator that describes an action to be executed if an error is thrown while executing the action. Here the error message will be written to the property ",Object(o.b)("strong",{parentName:"p"},"System.messageCaughtException ","[","]"),", the java error stack will be written to\xa0",Object(o.b)("strong",{parentName:"p"},"System.javaStackTraceCaughtException ","[","]"),", and the LSF stack will be written to\xa0*",Object(o.b)("strong",{parentName:"p"},"*System.lsfStackTraceCaughtException ","[","]",".**")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"finallyAction")),Object(o.b)("p",null,"A context-dependent operator that describes an action to be executed after the action being executed, regardless of whether or not an error has been thrown."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null),Object(o.b)("p",null,"**",Object(o.b)("br",{parentName:"p"}),"\n","**"))}b.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=b(r),d=n,h=u["".concat(c,".").concat(d)]||u[d]||l[d]||o;return r?a.a.createElement(h,p(p({ref:t},s),{},{components:r})):a.a.createElement(h,p({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);