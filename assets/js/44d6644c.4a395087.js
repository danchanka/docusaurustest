(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{258:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),c=(n(0),n(749)),o={title:"BEFORE instruction"},i={unversionedId:"BEFORE_instruction",id:"BEFORE_instruction",isDocsHomePage:!1,title:"BEFORE instruction",description:"The BEFORE instruction calls an action before calling another action.",source:"@site/docs/BEFORE_instruction.md",slug:"/BEFORE_instruction",permalink:"/docusaurustest/docs/next/BEFORE_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/BEFORE_instruction.md",version:"current",sidebar:"docs",previous:{title:"INDEX instruction",permalink:"/docusaurustest/docs/next/INDEX_instruction"},next:{title:"AFTER instruction",permalink:"/docusaurustest/docs/next/AFTER_instruction"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"BEFORE")," instruction calls an ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Actions"},"action")," before calling another action.\xa0"),Object(c.b)("h3",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"BEFORE action(param1, ..., paramN) DO aspectAction;\n")),Object(c.b)("p",null,"Description"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"BEFORE")," instruction defines an action (let's call it an ",Object(c.b)("em",{parentName:"p"},"aspect"),") that will be called before the specified one."),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"action")),Object(c.b)("p",null,"The\xa0",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#propertyid-broken"},"ID")," of the action before which the aspect will be called."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(c.b)("p",null,"List of action parameter names. Each name is defined ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#id-broken"},"by a simple ID"),". These parameters can be accessed while defining an aspect."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"aspectAction")),Object(c.b)("p",null,"A ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Action_operator#contextdependent"},"context-dependent action operator")," describing the aspect."),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-lsf"},"changeName(Sku s, STRING[100] name)  { name(s) <- name; }\nBEFORE changeName(Sku s, STRING[100] name) DO MESSAGE 'Changing user name'; // The message will be shown before each call to changeName\n")))}u.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,d=l["".concat(o,".").concat(m)]||l[m]||b[m]||c;return n?a.a.createElement(d,i(i({ref:t},p),{},{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);