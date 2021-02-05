(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{187:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(419)),i={title:"Grouping (GROUP)"},c={unversionedId:"Grouping_GROUP",id:"Grouping_GROUP",isDocsHomePage:!1,title:"Grouping (GROUP)",description:"The group\xa0operator\xa0creates a\xa0property that divides all object collections in the system into groups, and calculates an\xa0aggregating function for each group following specified order.\xa0Accordingly, the set for which this aggregating function is calculated is determined as all the object collections belonging to this group.",source:"@site/docs\\Grouping_GROUP.md",slug:"/Grouping_GROUP",permalink:"/docusaurustest/docs/Grouping_GROUP",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Grouping_GROUP.md",version:"current",sidebar:"docs",previous:{title:"Set operations",permalink:"/docusaurustest/docs/Set_operations"},next:{title:"Partitioning / sorting (PARTITION ... ORDER)",permalink:"/docusaurustest/docs/Partitioning_sorting_PARTITION_..._ORDER"}},s=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"group\xa0"),"operator\xa0creates a\xa0",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Properties"}),"property")," that divides all object collections in the system into groups, and calculates an\xa0",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"Set-operations_4391029.html#Setoperations-func"}),"aggregating function")," for each group following specified order.\xa0Accordingly, the set for which this aggregating function is calculated is determined as all the object collections belonging to this group.\xa0"),Object(a.b)("p",null,"Groups are defined for this operator as a set of properties (",Object(a.b)("em",{parentName:"p"},"groups"),"), and the order is defined as a list of properties and an increasing or decreasing marker.\xa0If the aggregation function is not\xa0",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"Set-operations_4391029.html#Setoperations-commutative"}),"commutative"),", then the order must be uniquely determined.\xa0"),Object(a.b)("p",null,"A uniquely determined order can be guaranteed if for example, the IDs of all objects for which grouping is performed are specified when the order is defined"),Object(a.b)("p",null,"In addition to the standard types of aggregate functions for grouping, there are three additional types: ",Object(a.b)("strong",{parentName:"p"},"EQUAL"),",\xa0",Object(a.b)("strong",{parentName:"p"},"AGGR")," and\xa0",Object(a.b)("strong",{parentName:"p"},"NAGGR"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"EQUAL\xa0"),"is a special case of the aggregation function ",Object(a.b)("strong",{parentName:"li"},"MAX")," (or ",Object(a.b)("strong",{parentName:"li"},"MIN"),"), with the additional ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/Constraints"}),"constraint")," that the value of the operand of the aggregating function within each group must be the same.\xa0"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"AGGR")," and ",Object(a.b)("strong",{parentName:"li"},"NAGGR\xa0"),"\xa0are a special case of\xa0",Object(a.b)("strong",{parentName:"li"},"EQUAL"),", but with an even more strict constraint: for each group there is no more than one object collection, the operand of the aggregating function is one of the objects, and the groups include all other objects. Aggregate function NAGGR only differs from AGGR\xa0in the fact that if it is used, no constraint is created (it is assumed that the constraint follows from the semantics of the properties of the operands and / or groupings themselves).")),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"To declare a property that implements grouping, use the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/GROUP_operator"}),Object(a.b)("strong",{parentName:"a"},"GROUP")," operator"),"."),Object(a.b)("h3",{id:"examples"},"Examples"))}u.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,b=l["".concat(i,".").concat(d)]||l[d]||g[d]||a;return r?o.a.createElement(b,c(c({ref:t},p),{},{components:r})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);