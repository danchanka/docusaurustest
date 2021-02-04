(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{309:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),c=(n(0),n(419)),i={title:"AFTER instruction"},o={unversionedId:"AFTER_instruction",id:"AFTER_instruction",isDocsHomePage:!1,title:"AFTER instruction",description:"The\xa0AFTER\xa0instruction\xa0 calls an\xa0action\xa0after calling another action.",source:"@site/docs\\AFTER_instruction.md",slug:"/AFTER_instruction",permalink:"/docusaurustest/docs/AFTER_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/AFTER_instruction.md",version:"current",sidebar:"docs",previous:{title:"BEFORE instruction",permalink:"/docusaurustest/docs/BEFORE_instruction"},next:{title:"Empty instruction",permalink:"/docusaurustest/docs/Empty_instruction"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The\xa0",Object(c.b)("strong",{parentName:"p"},"AFTER"),"\xa0instruction\xa0 calls an\xa0",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action"),"\xa0after calling another action.\xa0"),Object(c.b)("h3",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"AFTER action(param1, ..., paramN) DO aspectAction;\n")),Object(c.b)("h3",{id:"description"},"Description"),Object(c.b)("p",null,"The\xa0",Object(c.b)("strong",{parentName:"p"},"AFTER"),"\xa0instruction defines an action (let's call it an\xa0",Object(c.b)("em",{parentName:"p"},"aspect"),") that will be called after the specified action."),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"action")),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"ID")," of the action after which the aspect will be called."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(c.b)("p",null,"List of action parameter names. Each name is defined\xa0",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id"}),"by a simple ID"),". These parameters can be accessed when defining an aspect."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"aspectAction")),Object(c.b)("p",null,"A ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-contextdependent"}),"context-dependent action operator")," describing the aspect."),Object(c.b)("h3",{id:"examples"},"Examples"))}u.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,m=l["".concat(i,".").concat(d)]||l[d]||b[d]||c;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);