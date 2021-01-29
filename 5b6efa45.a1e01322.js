(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{196:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),o=(r(0),r(424));const a={},c={unversionedId:"LSFUS/Set_operations",id:"LSFUS/Set_operations",isDocsHomePage:!1,title:"Set_operations",description:"lsFusionSet operations",source:"@site/docs\\LSFUS\\Set_operations.md",slug:"/LSFUS/Set_operations",permalink:"/docusaurustest/docs/LSFUS/Set_operations",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/Set_operations.md",version:"current"},i=[],s={toc:i};function p({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionset-operations"},"lsFusionSet operations"),Object(o.b)("h1",{id:"set-operations"},"Set operations"),Object(o.b)("p",null,"One of the key features of the platform is the ability to execute certain operations for all object collections for which the values of one or more ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Properties"}),"properties")," are not\xa0",Object(o.b)("strong",{parentName:"p"},"NULL"),". In the property logic such an operation is the calculation of various\xa0",Object(o.b)("em",{parentName:"p"},"aggregate functions"),".\xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Aggregate functions")),Object(o.b)("p",null,"An aggregate function\xa0calculates a certain\xa0",Object(o.b)("em",{parentName:"p"},"result"),"\xa0as a single object on a set of object collections. This function is defined by the\xa0",Object(o.b)("em",{parentName:"p"},"initial value"),"\xa0(typically\xa0",Object(o.b)("strong",{parentName:"p"},"NULL"),"),\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Properties"}),"properties"),"\xa0that it uses (",Object(o.b)("em",{parentName:"p"},"operands"),"),\xa0",Object(o.b)("em",{parentName:"p"},"operation of addition"),"\xa0to the\xa0",Object(o.b)("em",{parentName:"p"},"intermediate result"),"\xa0of the current operand values, and\xa0",Object(o.b)("em",{parentName:"p"},"conversion function"),"\xa0of the intermediate result to the final (typically the intermediate result is the final result)."),Object(o.b)("p",null,"Aggregate function is\xa0",Object(o.b)("em",{parentName:"p"},"commutative")," if the order in which the object collections of the original set are iterated over does not matter when calculating the result.\xa0"),Object(o.b)("p",null,"The table below shows the currently supported types of aggregate functions:"))}p.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),f=n,m=l["".concat(c,".").concat(f)]||l[f]||b[f]||a;return r?o.a.createElement(m,i(i({ref:t},p),{},{components:r})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);