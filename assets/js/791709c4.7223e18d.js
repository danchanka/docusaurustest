(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{403:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(749)),i={title:"Partitioning / sorting (PARTITION ... ORDER)"},c={unversionedId:"Partitioning_sorting_PARTITION_..._ORDER_",id:"Partitioning_sorting_PARTITION_..._ORDER_",isDocsHomePage:!1,title:"Partitioning / sorting (PARTITION ... ORDER)",description:"The partition/order operator\xa0creates a property that partitions all objects collections in the system into groups, and using the specified order calculates an aggregate function for each objects collection. Accordingly, the set on which this aggregating function is calculated is determined as following: all object collections of the group of this object collection, and the order of which is less than or equal to the order of this object collection.",source:"@site/docs/Partitioning_sorting_PARTITION_..._ORDER_.md",slug:"/Partitioning_sorting_PARTITION_..._ORDER_",permalink:"/docusaurustest/docs/next/Partitioning_sorting_PARTITION_..._ORDER_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Partitioning_sorting_PARTITION_..._ORDER_.md",version:"current",sidebar:"docs",previous:{title:"Grouping (GROUP)",permalink:"/docusaurustest/docs/next/Grouping_GROUP_"},next:{title:"Recursion (RECURSION)",permalink:"/docusaurustest/docs/next/Recursion_RECURSION_"}},s=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"partition/order")," operator\xa0creates a ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"property")," that partitions all objects collections in the system into ",Object(a.b)("em",{parentName:"p"},"groups"),", and using the specified ",Object(a.b)("em",{parentName:"p"},"order")," calculates an ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Set_operations#func"},"aggregate function")," for each objects collection. Accordingly, the set on which this aggregating function is calculated is determined as following: all object collections of the group of this object collection, and the order of which is less than or equal to the order of this object collection.\xa0"),Object(a.b)("p",null,"Groups in this operator are defined as a set of properties (",Object(a.b)("em",{parentName:"p"},"groupings"),"), and the order is defined as a list of properties and a marker of increasing or decreasing.\xa0If the aggregation function is not ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Set_operations#commutative-broken"},"commutative"),", the order must be uniquely determined.\xa0"),Object(a.b)("p",null,"Note that the partition/order operator is very similar to the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Grouping_GROUP_"},"grouping operator"),", but unlike the latter, it computes a result not for grouping values, but for the object collections for which calculation is taking place."),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"To declare a property that implements partition/order, use the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/PARTITION_operator"},Object(a.b)("strong",{parentName:"a"},"PARTITION")," operator"),".\xa0"),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"// determines the place of the team in the conference\nCLASS Conference;\nconference = DATA Conference (Team);\npoints = DATA INTEGER (Team);\ngamesWon = DATA INTEGER (Team);\nplace 'Place' (Team team) = PARTITION SUM 1 ORDER DESC points(team), gamesWon(team) BY conference(team);\n\n// building ordinal indexes of objects in the database in ascending order of their internal IDs (i.e., in the order of creation)\nindex 'Number' (Object o) = PARTITION SUM 1 IF o IS Object ORDER o;\n\n// finds the team next in the conference standings\nprevTeam (Team team) = PARTITION PREV team ORDER place(team), team BY conference(team);\n\n// proportional distribution example\nCLASS Order;\ntransportSum 'Freight costs' = DATA NUMERIC[10,2] (Order);\n\nCLASS OrderDetail;\norder = DATA Order (OrderDetail) NONULL DELETE;\nsum = DATA NUMERIC[14,2] (OrderDetail);\n\ntransportSum 'Freight costs by line' (OrderDetail d) = PARTITION UNGROUP transportSum\n                                    PROPORTION STRICT ROUND(2) sum(d)\n                                    ORDER d\n                                    BY order(d);\n\n// example of distribution with limits\ndiscountSum 'Discount' = DATA NUMERIC[10,2] (Order);\ndiscountSum 'Discount by line' (OrderDetail d) =\n    PARTITION UNGROUP discountSum\n                LIMIT STRICT sum(d)\n                ORDER sum(d), d\n                BY order(d);\n;\n")))}l.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);