(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{257:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=(r(0),r(424));const a={},i={unversionedId:"LSFUS/Partitioning_sorting_PARTITION_..._ORDER_",id:"LSFUS/Partitioning_sorting_PARTITION_..._ORDER_",isDocsHomePage:!1,title:"Partitioning_sorting_PARTITION_..._ORDER_",description:"lsFusionPartitioning / sorting (PARTITION ... ORDER)",source:"@site/docs\\LSFUS\\Partitioning_sorting_PARTITION_..._ORDER_.md",slug:"/LSFUS/Partitioning_sorting_PARTITION_..._ORDER_",permalink:"/docusaurustest/docs/LSFUS/Partitioning_sorting_PARTITION_..._ORDER_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/Partitioning_sorting_PARTITION_..._ORDER_.md",version:"current"},c=[],s={toc:c};function p({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionpartitioning--sorting-partition--order"},"lsFusionPartitioning / sorting (PARTITION ... ORDER)"),Object(o.b)("h1",{id:"partitioning--sorting-partition--order"},"Partitioning / sorting (PARTITION ... ORDER)"),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"partition/order")," operator\xa0creates a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Properties"}),"property")," that partitions all objects collections in the system into ",Object(o.b)("em",{parentName:"p"},"groups"),", and using the specified ",Object(o.b)("em",{parentName:"p"},"order")," calculates an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Set-operations_4391029.html#Setoperations-func"}),"aggregate function")," for each objects collection. Accordingly, the set on which this aggregating function is calculated is determined as following: all object collections of the group of this object collection, and the order of which is less than or equal to the order of this object collection.\xa0"),Object(o.b)("p",null,"Groups in this operator are defined as a set of properties (",Object(o.b)("em",{parentName:"p"},"groupings"),"), and the order is defined as a list of properties and a marker of increasing or decreasing.\xa0If the aggregation function is not ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Set-operations_4391029.html#Setoperations-commutative"}),"commutative"),", the order must be uniquely determined.\xa0"),Object(o.b)("p",null,"Note that the partition/order operator is very similar to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Grouping_GROUP_"}),"grouping operator"),", but unlike the latter, it computes a result not for grouping values, but for the object collections for which calculation is taking place."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Language")),Object(o.b)("p",null,"To declare a property that implements partition/order, use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/PARTITION_operator"}),Object(o.b)("strong",{parentName:"a"},"PARTITION")," operator"),".\xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")))}p.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return O}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),f=n,O=l["".concat(i,".").concat(f)]||l[f]||b[f]||a;return r?o.a.createElement(O,c(c({ref:t},p),{},{components:r})):o.a.createElement(O,c({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);