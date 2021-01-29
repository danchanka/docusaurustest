(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{308:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),c=(n(0),n(424)),o={title:"AFTER instruction"},i={unversionedId:"LSFUS/AFTER_instruction",id:"LSFUS/AFTER_instruction",isDocsHomePage:!1,title:"AFTER instruction",description:"The\xa0AFTER\xa0instruction\xa0 calls an\xa0action\xa0after calling another action.",source:"@site/docs\\LSFUS\\AFTER_instruction.md",slug:"/LSFUS/AFTER_instruction",permalink:"/docusaurustest/docs/LSFUS/AFTER_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/AFTER_instruction.md",version:"current"},p=[],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The\xa0",Object(c.b)("strong",{parentName:"p"},"AFTER"),"\xa0instruction\xa0 calls an\xa0",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Actions"}),"action"),"\xa0after calling another action.\xa0"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Syntax")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"AFTER action(param1, ..., paramN) DO aspectAction;\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Description")),Object(c.b)("p",null,"The\xa0",Object(c.b)("strong",{parentName:"p"},"AFTER"),"\xa0instruction defines an action (let's call it an\xa0",Object(c.b)("em",{parentName:"p"},"aspect"),") that will be called after the specified action."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"action")),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"ID")," of the action after which the aspect will be called."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(c.b)("p",null,"List of action parameter names. Each name is defined\xa0",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id"}),"by a simple ID"),". These parameters can be accessed when defining an aspect."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"aspectAction")),Object(c.b)("p",null,"A ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-contextdependent"}),"context-dependent action operator")," describing the aspect."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Examples")),Object(c.b)("hr",null))}s.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,f=b["".concat(o,".").concat(m)]||b[m]||u[m]||c;return n?a.a.createElement(f,i(i({ref:t},l),{},{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);