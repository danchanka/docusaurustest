(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),o=(n(0),n(749)),i={title:"Integration: Overview",sidebar_label:"Overview"},s={unversionedId:"Integration",id:"version-1.0.0/Integration",isDocsHomePage:!1,title:"Integration: Overview",description:"Integration includes everything related to interaction of the lsFusion system with other systems. In terms of the direction of this interaction, integration can be divided into:",source:"@site/versioned_docs/version-1.0.0/Integration.md",slug:"/Integration",permalink:"/docusaurustest/docs/Integration",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/Integration.md",version:"1.0.0",sidebar_label:"Overview",sidebar:"version-1.0.0/docs",previous:{title:"Metaprogramming",permalink:"/docusaurustest/docs/Metaprogramming"},next:{title:"Access from an external system",permalink:"/docusaurustest/docs/Access_from_an_external_system"}},c=[],l={toc:c};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Integration includes everything related to interaction of the lsFusion system with other systems. In terms of the direction of this interaction, integration can be divided into:\xa0"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Access to the lsFusion system from another system."),Object(o.b)("li",{parentName:"ol"},"Access from the lsFusion system to another system.")),Object(o.b)("p",null,"In terms of the physical model, integration can be divided into:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'Interaction with systems running in "the same environment" as the lsFusion system (that is, in the\xa0Java virtual machine ',"[","JVM","]"," of the lsFusion server and/or using the same SQL server as the lsFusion system)."),Object(o.b)("li",{parentName:"ol"},"Interaction with\xa0remote systems via network protocols.")),Object(o.b)("p",null,"Accordingly, we will call the first systems ",Object(o.b)("em",{parentName:"p"},"internal"),", and the second ",Object(o.b)("em",{parentName:"p"},"external"),". In turn, interaction with internal systems using Java tools we will call ",Object(o.b)("em",{parentName:"p"},"Java interaction"),", and using SQL tools \u2013 ",Object(o.b)("em",{parentName:"p"},"SQL interaction"),"."),Object(o.b)("p",null,"Thus, the platform has four different types of integration:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Access_from_an_external_system"},"Access from an external system")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Access_from_an_internal_system"},"Access from an internal system")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Access_to_an_external_system_EXTERNAL_"},"Access to an external system (EXTERNAL)"),"\xa0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Access_to_an_internal_system_INTERNAL_FORMULA_"},"Access to an internal system (INTERNAL, FORMULA)"))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Additionally, it is worth noting that the ability to interact with internal systems can be used not only for purposes of integration but also for purposes of extensibility when platform capabilities are insufficient for some reason."))))}m.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);