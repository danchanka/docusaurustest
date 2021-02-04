(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{244:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),c=n(7),o=(n(0),n(419)),i={title:"Event description block"},a={unversionedId:"Event_description_block",id:"Event_description_block",isDocsHomePage:!1,title:"Event description block",description:"Event description block describes an event in different instructions.",source:"@site/docs\\Event_description_block.md",slug:"/Event_description_block",permalink:"/docusaurustest/docs/Event_description_block",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Event_description_block.md",version:"current",sidebar:"docs",previous:{title:"ON instruction",permalink:"/docusaurustest/docs/ON_instruction"},next:{title:"WHEN instruction",permalink:"/docusaurustest/docs/WHEN_instruction"}},s=[],p={toc:s};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Event description block")," describes an ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Events"}),"event")," in different instructions."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"[GLOBAL | LOCAL] [FORMS formName1, ..., formNameN] [GOAFTER propertyId1, ..., propertyIdM]\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"GLOBAL\xa0")),Object(o.b)("p",null,"The keyword specifying that the described event will be global. This is the default behavior."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"LOCAL")),Object(o.b)("p",null,"The keyword specifying that the described event\xa0will be local."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"formName1, ..., formNameN")),Object(o.b)("p",null,"A list of names of the \xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Forms"}),"forms")," in which the event will occur. Each element of the list is a \xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-cid"}),"composite ID"),". If the list is not defined, the event will occur in all forms."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId1, ..., propertyIdM")),Object(o.b)("p",null,"List of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"property IDs"),". This list means that all event handlers that change one of the specified properties must be ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Events_688155.html#Events-order"}),"executed earlier")," than the handlers that will be defined in the instruction for which this event description block is being defined."))}l.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),l=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},b=function(e){var t=l(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,f=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?c.a.createElement(f,a(a({ref:t},p),{},{components:n})):c.a.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var p=2;p<o;p++)i[p]=n[p];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);