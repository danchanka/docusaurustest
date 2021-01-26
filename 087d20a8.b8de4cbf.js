(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{423:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),u=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),O=r,m=l["".concat(o,".").concat(O)]||l[O]||b[O]||a;return n?c.a.createElement(m,i(i({ref:t},p),{},{components:n})):c.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=O;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),c=n(7),a=(n(0),n(423)),o={},i={unversionedId:"LSFUS/lsFusionBEFORE_instruction",id:"LSFUS/lsFusionBEFORE_instruction",isDocsHomePage:!1,title:"lsFusionBEFORE_instruction",description:"lsFusionBEFORE instruction",source:"@site/docs\\LSFUS\\lsFusionBEFORE_instruction.md",slug:"/LSFUS/lsFusionBEFORE_instruction",permalink:"/docusaurustest/docs/LSFUS/lsFusionBEFORE_instruction",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/LSFUS/lsFusionBEFORE_instruction.md",version:"current"},s=[],p={toc:s};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusionbefore-instruction"},"lsFusionBEFORE instruction"),Object(a.b)("h1",{id:"before-instruction"},"BEFORE instruction"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"BEFORE")," instruction calls an ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionActions"}),"action")," before calling another action.\xa0"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"BEFORE action(param1, ..., paramN) DO aspectAction;\n")),Object(a.b)("p",null,"Description"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"BEFORE")," instruction defines an action (let's call it an ",Object(a.b)("em",{parentName:"p"},"aspect"),") that will be called before the specified one."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"action")),Object(a.b)("p",null,"The",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"ID")," of the action before which the aspect will be called."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(a.b)("p",null,"List of action parameter names. Each name is defined ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id"}),"by a simple ID"),". These parameters can be accessed while defining an aspect."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"aspectAction")),Object(a.b)("p",null,"A ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-contextdependent"}),"context-dependent action operator")," describing the aspect."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples")),Object(a.b)("hr",null))}u.isMDXComponent=!0}}]);