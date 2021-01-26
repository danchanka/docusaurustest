(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{385:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(423)),i={},s={unversionedId:"LSFUS/lsFusionMaterializations",id:"LSFUS/lsFusionMaterializations",isDocsHomePage:!1,title:"lsFusionMaterializations",description:"lsFusionMaterializations",source:"@site/docs\\LSFUS\\lsFusionMaterializations.md",slug:"/LSFUS/lsFusionMaterializations",permalink:"/docusaurustest/docs/LSFUS/lsFusionMaterializations",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/LSFUS/lsFusionMaterializations.md",version:"current"},c=[],p={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionmaterializations"},"lsFusionMaterializations"),Object(o.b)("h1",{id:"materializations"},"Materializations"),Object(o.b)("p",null,"Almost any aggregated\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperties"}),"property"),"\xa0in the platform can be ",Object(o.b)("em",{parentName:"p"},"materialized"),". In this case, the property will be stored in the database permanently and automatically updated when the data on which this property depends is changed. At the same time, when reading the values of the materialized property, these values will be read directly from the database, as if the property was ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionData_properties_DATA_"}),"data")," (and not calculated every time). Accordingly, all data properties are materialized by definition."),Object(o.b)("p",null,"A property can be materialized if and only if for it there is a finite number of object collections for which the value of this property is not ",Object(o.b)("strong",{parentName:"p"},"NULL")," (that is, the iteration operation for all of its non-",Object(o.b)("strong",{parentName:"p"},"NULL")," values is\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Set-operations_4391029.html#Setoperations-correct"}),"correct"),")"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Language")),Object(o.b)("p",null,"To materialize a property, use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Property-options_7798786.html#Propertyoptions-persistent"}),Object(o.b)("strong",{parentName:"a"},"MATERIALIZED")," option"),"\xa0in the property options."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")))}l.isMDXComponent=!0},423:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(f,s(s({ref:t},p),{},{components:r})):a.a.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);