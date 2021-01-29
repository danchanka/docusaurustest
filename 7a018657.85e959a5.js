(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{237:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=(n(0),n(424));const o={},c={unversionedId:"LSFUS/Module_header",id:"LSFUS/Module_header",isDocsHomePage:!1,title:"Module_header",description:"lsFusionModule header",source:"@site/docs\\LSFUS\\Module_header.md",slug:"/LSFUS/Module_header",permalink:"/docusaurustest/docs/LSFUS/Module_header",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/Module_header.md",version:"current"},u=[],s={toc:u};function p({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"lsfusionmodule-header"},"lsFusionModule header"),Object(r.b)("h1",{id:"module-header"},"Module header"),Object(r.b)("p",null,"Each ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Modules"}),"module"),"\xa0begins with a ",Object(r.b)("em",{parentName:"p"},"header.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Syntax")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"MODULE name;\n[REQUIRE moduleName1, ..., moduleNameN;]\n[PRIORITY namespaceName1, ..., namespaceNameM;]\n[NAMESPACE namespaceName;]\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Description")),Object(r.b)("p",null,"The module header can consist of four special instructions, in the following order:"),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"MODULE"),"\xa0 instruction defines the module name. It is required. Each module within one ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Projects"}),"project")," must have a unique name."),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"REQUIRE")," instruction defines the list of modules on which the current module ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"Modules_1146882.html#Modules-depends"}),"depends"),". If the ",Object(r.b)("strong",{parentName:"p"},"REQUIRE")," instruction is absent, that is equivalent to depending only on the\xa0",Object(r.b)("strong",{parentName:"p"},"System")," module."),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"PRIORITY")," instruction defines the list of additional\xa0",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"Naming_35521066.html#Naming-namespace"}),"namespaces")," that will have priority\xa0in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Search"}),"finding")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Element_identification"}),"system elements"),"."),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"NAMESPACE")," instruction defines the module's namespace. \xa0"),Object(r.b)("p",null,"**",Object(r.b)("br",{parentName:"p"}),"\n","**"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"name")),Object(r.b)("p",null,"The name of the module. ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id"}),"Simple ID"),". Module names cannot contain an underscore."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"moduleName1, ..., moduleNameN")),Object(r.b)("p",null,"A list of the names of modules that the current module depends on. Each name is a simple ID.\xa0"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"namespaceName1, ..., namespaceNameM")),Object(r.b)("p",null,"A list of namespace names. Each name is a simple ID.\xa0"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"namespaceName")),Object(r.b)("p",null,"The name of the module namespace. A simple ID that cannot contain an underscore. If the ",Object(r.b)("strong",{parentName:"p"},"NAMESPACE")," instruction is not used in the header, the name of the current module's namespace will be equal to the name of the module.\xa0**\xa0**"),Object(r.b)("h6",{id:"examples"},Object(r.b)("strong",{parentName:"h6"},"Examples")))}p.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},i=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),i=l(n),b=a,d=i["".concat(c,".").concat(b)]||i[b]||m[b]||o;return n?r.a.createElement(d,u(u({ref:t},p),{},{components:n})):r.a.createElement(d,u({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=b;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);