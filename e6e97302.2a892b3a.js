(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{382:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return i}));var r=n(3),a=n(7),o=(n(0),n(424)),s={title:"Modules"},c={unversionedId:"LSFUS/Modules",id:"LSFUS/Modules",isDocsHomePage:!1,title:"Modules",description:"A module is a functionally complete part of a project. A module consists of declarations of properties, actions, events, constraints, and other system elements.",source:"@site/docs\\LSFUS\\Modules.md",slug:"/LSFUS/Modules",permalink:"/docusaurustest/docs/LSFUS/Modules",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/Modules.md",version:"current"},u=[],p={toc:u};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A ",Object(o.b)("em",{parentName:"p"},"module")," is a functionally complete part of a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Projects"}),"project"),". A module consists of declarations of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Element_identification"}),"p"),Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Properties"}),"roperties"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Actions"}),"actions"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Events"}),"events"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Constraints"}),"constraints"),", and other ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Naming"}),"system elements"),"."),Object(o.b)("p",null,"Each module has a name, which must be unique within the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Projects"}),"project"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Dependencies between modules")),Object(o.b)("p",null,"Usually modules use elements from other modules to describe part of their functionality. Accordingly, if module ",Object(o.b)("strong",{parentName:"p"},"B")," uses elements from module ",Object(o.b)("strong",{parentName:"p"},"A"),", it must be specified in module\xa0",Object(o.b)("strong",{parentName:"p"},"B\xa0"),"that it",Object(o.b)("strong",{parentName:"p"},"*\xa0**"),"depends",Object(o.b)("em",{parentName:"p"}," on ",Object(o.b)("strong",{parentName:"em"},"A"),". Based on these dependencies, all modules in the project are arranged in a certain order in which they are initialized. It is guaranteed that if module ",Object(o.b)("strong",{parentName:"em"},"B\xa0"),"depends on module ",Object(o.b)("strong",{parentName:"em"},"A"),", module ",Object(o.b)("strong",{parentName:"em"},"A\xa0"),"will be initialized before module ",Object(o.b)("strong",{parentName:"em"},"B"),". Circular dependencies between project modules are not"),"\xa0*allowed. \xa0"),Object(o.b)("p",null,"If module\xa0",Object(o.b)("strong",{parentName:"p"},"C"),"\xa0depends on module ",Object(o.b)("strong",{parentName:"p"},"B"),", and module\xa0",Object(o.b)("strong",{parentName:"p"},"B"),"\xa0depends on module ",Object(o.b)("strong",{parentName:"p"},"A"),", we will also assume that module ",Object(o.b)("strong",{parentName:"p"},"C"),"\xa0depends on module ",Object(o.b)("strong",{parentName:"p"},"A"),"."),Object(o.b)("p",null,"Any module always automatically depends on the system module ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/System.lsf"}),"System")),", regardless of whether or not this is specified explicitly."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Namespaces")),Object(o.b)("p",null,"In each module a\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Naming_35521066.html#Naming-namespace"}),"namespace"),"\xa0is specified, containing the names of all system elements created in this module. By default, the module creates its own namespace, the name of which is equal to the name of the module. For the module you can also specify a list of additional namespaces that will have priority\xa0when\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Search"}),"finding"),"\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Element_identification"}),"system elements"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Language")),Object(o.b)("p",null,"Each module in the platform corresponds to exactly one file, which starts with a special ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Module_header"}),"header"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")))}i.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),i=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=i(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=i(n),b=r,d=l["".concat(s,".").concat(b)]||l[b]||m[b]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);