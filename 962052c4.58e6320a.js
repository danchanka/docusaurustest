(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{278:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(3),o=r(7),n=(r(0),r(419)),s={title:"How-to: Physical model"},i={unversionedId:"How-to_Physical_model",id:"How-to_Physical_model",isDocsHomePage:!1,title:"How-to: Physical model",description:"By default, each class in the database creates a separate table that stores all those properties whose only parameter is an object of this class. The key in this table is a field that stores a unique object ID. For properties with several parameters, a table will be created with the IDs of parameter objects as keys.",source:"@site/docs\\How-to_Physical_model.md",slug:"/How-to_Physical_model",permalink:"/docusaurustest/docs/How-to_Physical_model",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_Physical_model.md",version:"current",sidebar:"docs",previous:{title:"How-to: Metaprogramming",permalink:"/docusaurustest/docs/How-to_Metaprogramming"},next:{title:"How-to: Internationalization",permalink:"/docusaurustest/docs/How-to_Internationalization"}},c=[],l={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"By default, each class in the database creates a separate table that stores all those ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Properties"}),"properties")," whose only parameter is an object of this class. The key in this table is a field that stores a unique object ID. For properties with several parameters, a table will be created with the IDs of parameter objects as keys."),Object(n.b)("p",null,"To explicitly specify a table in which all properties with one parameter of this class will be stored, we can use the following construct:"),Object(n.b)("p",null,"The table in which this field will be stored will be selected according to the same algorithm as for ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_properties_DATA_"}),"data properties"),". In this case, it will go into the table ","<","Namespace",">",Object(n.b)("strong",{parentName:"p"},"_","animal"),"."))}p.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=a,f=u["".concat(s,".").concat(b)]||u[b]||d[b]||n;return r?o.a.createElement(f,i(i({ref:t},l),{},{components:r})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<n;l++)s[l]=r[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);