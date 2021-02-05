(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{300:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),c=(n(0),n(419)),s={title:"TABLE instruction"},o={unversionedId:"TABLE_instruction",id:"TABLE_instruction",isDocsHomePage:!1,title:"TABLE instruction",description:"The TABLE instruction creates an new table.",source:"@site/docs\\TABLE_instruction.md",slug:"/TABLE_instruction",permalink:"/docusaurustest/docs/TABLE_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/TABLE_instruction.md",version:"current",sidebar:"docs",previous:{title:"Instruction@",permalink:"/docusaurustest/docs/Instruction"},next:{title:"INDEX instruction",permalink:"/docusaurustest/docs/INDEX_instruction"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"TABLE")," instruction creates an new ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Tables"}),"table"),"."),Object(c.b)("h3",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"TABLE name(className1, ..., classNameN) [FULL | NODEFAULT];\n")),Object(c.b)("h3",{id:"description"},"Description"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"TABLE\xa0")," instruction declares a new table and adds it to the current ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Modules"}),"module"),".\xa0"),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"name")),Object(c.b)("p",null,"Table name. ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#IDs-id"}),"Simple ID"),".\xa0The name must be unique within the current ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Naming#Naming-namespace"}),"namespace"),"."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"className1, ..., classNameN")),Object(c.b)("p",null,"List of class names. Each name is a ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#IDs-classname"}),"class ID"),". Specifies classes for the key fields of the table being created. Cannot be empty,"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"FULL")),Object(c.b)("p",null,"The keyword that, when specified, marks the table as ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Tables#Tables-full"}),"full")," (that is, containing all objects belonging to the classes of the table's key fields). \xa0"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"NODEFAULT")),Object(c.b)("p",null,"The keyword that, when specified, excludes the table from the process of automatic ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Tables#Tables-property"}),"property table determining"),"."),Object(c.b)("h3",{id:"examples"},"Examples"))}l.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||c;return n?a.a.createElement(m,o(o({ref:t},u),{},{components:n})):a.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,s=new Array(c);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<c;u++)s[u]=n[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);