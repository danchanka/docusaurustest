(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(424)),s={},i={unversionedId:"LSFUS/lsFusionIntegration",id:"LSFUS/lsFusionIntegration",isDocsHomePage:!1,title:"lsFusionIntegration",description:"lsFusionIntegration",source:"@site/docs\\LSFUS\\lsFusionIntegration.md",slug:"/LSFUS/lsFusionIntegration",permalink:"/docusaurustest/docs/LSFUS/lsFusionIntegration",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionIntegration.md",version:"current"},c=[],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusionintegration"},"lsFusionIntegration"),Object(a.b)("h1",{id:"integration"},"Integration"),Object(a.b)("p",null,"Integration includes everything related to interaction of the lsFusion system with other systems. In terms of the direction of this interaction, integration can be divided into:\xa0"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Access to the lsFusion system from another system."),Object(a.b)("li",{parentName:"ol"},"Access from the lsFusion system to another system.")),Object(a.b)("p",null,"In terms of the physical model, integration can be divided into:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},'Interaction with systems running in "the same environment" as the lsFusion system (that is, in the\xa0Java virtual machine ',"[","JVM","]"," of the lsFusion server and/or using the same SQL server as the lsFusion system)."),Object(a.b)("li",{parentName:"ol"},"Interaction with\xa0remote systems via network protocols.")),Object(a.b)("p",null,"Accordingly, we will call the first systems ",Object(a.b)("em",{parentName:"p"},"internal"),", and the second ",Object(a.b)("em",{parentName:"p"},"external"),". In turn, interaction with internal systems using Java tools we will call ",Object(a.b)("em",{parentName:"p"},"Java interaction"),", and using SQL tools \u2013 ",Object(a.b)("em",{parentName:"p"},"SQL interaction"),"."),Object(a.b)("p",null,"Thus, the platform has four different types of integration:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/lsFusionAccess_from_an_external_system"}),"Access from an external system")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/lsFusionAccess_from_an_internal_system"}),"Access from an internal system")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/lsFusionAccess_to_an_external_system_EXTERNAL_"}),"Access to an external system (EXTERNAL)"),"\xa0"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/lsFusionAccess_to_an_internal_system_INTERNAL_FORMULA_"}),"Access to an internal system (INTERNAL, FORMULA)"))),Object(a.b)("p",null,"Additionally, it is worth noting that the ability to interact with internal systems can be used not only for purposes of integration but also for purposes of extensibility when platform capabilities are insufficient for some reason."))}u.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,f=b["".concat(s,".").concat(p)]||b[p]||m[p]||a;return n?o.a.createElement(f,i(i({ref:t},l),{},{components:n})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);