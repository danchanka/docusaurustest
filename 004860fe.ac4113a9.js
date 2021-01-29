(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{424:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(f,c(c({ref:t},s),{},{components:r})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(424)),i={},c={unversionedId:"LSFUS/Materializations",id:"LSFUS/Materializations",isDocsHomePage:!1,title:"Materializations",description:"lsFusionMaterializations",source:"@site/docs\\LSFUS\\Materializations.md",slug:"/LSFUS/Materializations",permalink:"/docusaurustest/docs/LSFUS/Materializations",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/Materializations.md",version:"current"},p=[],s={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionmaterializations"},"lsFusionMaterializations"),Object(o.b)("h1",{id:"materializations"},"Materializations"),Object(o.b)("p",null,"Almost any aggregated\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Properties"}),"property"),"\xa0in the platform can be ",Object(o.b)("em",{parentName:"p"},"materialized"),". In this case, the property will be stored in the database permanently and automatically updated when the data on which this property depends is changed. At the same time, when reading the values of the materialized property, these values will be read directly from the database, as if the property was ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Data_properties_DATA_"}),"data")," (and not calculated every time). Accordingly, all data properties are materialized by definition."),Object(o.b)("p",null,"A property can be materialized if and only if for it there is a finite number of object collections for which the value of this property is not ",Object(o.b)("strong",{parentName:"p"},"NULL")," (that is, the iteration operation for all of its non-",Object(o.b)("strong",{parentName:"p"},"NULL")," values is\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Set-operations_4391029.html#Setoperations-correct"}),"correct"),")"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Language")),Object(o.b)("p",null,"To materialize a property, use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Property-options_7798786.html#Propertyoptions-persistent"}),Object(o.b)("strong",{parentName:"a"},"MATERIALIZED")," option"),"\xa0in the property options."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")))}l.isMDXComponent=!0}}]);