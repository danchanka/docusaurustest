(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{388:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),i=(r(0),r(424)),a={},c={unversionedId:"LSFUS/lsFusionPartitioning_sorting_PARTITION_..._ORDER_",id:"LSFUS/lsFusionPartitioning_sorting_PARTITION_..._ORDER_",isDocsHomePage:!1,title:"lsFusionPartitioning_sorting_PARTITION_..._ORDER_",description:"lsFusionPartitioning / sorting (PARTITION ... ORDER)",source:"@site/docs\\LSFUS\\lsFusionPartitioning_sorting_PARTITION_..._ORDER_.md",slug:"/LSFUS/lsFusionPartitioning_sorting_PARTITION_..._ORDER_",permalink:"/docusaurustest/docs/LSFUS/lsFusionPartitioning_sorting_PARTITION_..._ORDER_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionPartitioning_sorting_PARTITION_..._ORDER_.md",version:"current"},s=[],u={toc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"lsfusionpartitioning--sorting-partition--order"},"lsFusionPartitioning / sorting (PARTITION ... ORDER)"),Object(i.b)("h1",{id:"partitioning--sorting-partition--order"},"Partitioning / sorting (PARTITION ... ORDER)"),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"partition/order")," operator\xa0creates a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperties"}),"property")," that partitions all objects collections in the system into ",Object(i.b)("em",{parentName:"p"},"groups"),", and using the specified ",Object(i.b)("em",{parentName:"p"},"order")," calculates an ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"Set-operations_4391029.html#Setoperations-func"}),"aggregate function")," for each objects collection. Accordingly, the set on which this aggregating function is calculated is determined as following: all object collections of the group of this object collection, and the order of which is less than or equal to the order of this object collection.\xa0"),Object(i.b)("p",null,"Groups in this operator are defined as a set of properties (",Object(i.b)("em",{parentName:"p"},"groupings"),"), and the order is defined as a list of properties and a marker of increasing or decreasing.\xa0If the aggregation function is not ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"Set-operations_4391029.html#Setoperations-commutative"}),"commutative"),", the order must be uniquely determined.\xa0"),Object(i.b)("p",null,"Note that the partition/order operator is very similar to the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionGrouping_GROUP_"}),"grouping operator"),", but unlike the latter, it computes a result not for grouping values, but for the object collections for which calculation is taking place."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Language")),Object(i.b)("p",null,"To declare a property that implements partition/order, use the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionPARTITION_operator"}),Object(i.b)("strong",{parentName:"a"},"PARTITION")," operator"),".\xa0"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Examples")))}p.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},O=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),O=n,f=l["".concat(a,".").concat(O)]||l[O]||b[O]||i;return r?o.a.createElement(f,c(c({ref:t},u),{},{components:r})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=O;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);