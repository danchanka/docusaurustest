(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{82:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return u})),o.d(t,"default",(function(){return p}));var r=o(3),a=o(7),i=(o(0),o(421)),n=o(56),s={title:"Partitioning / sorting (PARTITION ... ORDER)"},c={unversionedId:"Partitioning_sorting_PARTITION_..._ORDER",id:"Partitioning_sorting_PARTITION_..._ORDER",isDocsHomePage:!1,title:"Partitioning / sorting (PARTITION ... ORDER)",description:"The partition/order operator\xa0creates a property that partitions all objects collections in the system into groups, and using the specified order calculates an aggregate function for each objects collection. Accordingly, the set on which this aggregating function is calculated is determined as following: all object collections of the group of this object collection, and the order of which is less than or equal to the order of this object collection.",source:"@site/docs\\Partitioning_sorting_PARTITION_..._ORDER.md",slug:"/Partitioning_sorting_PARTITION_..._ORDER",permalink:"/docusaurustest/docs/Partitioning_sorting_PARTITION_..._ORDER",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Partitioning_sorting_PARTITION_..._ORDER.md",version:"current",sidebar:"docs",previous:{title:"Grouping (GROUP)",permalink:"/docusaurustest/docs/Grouping_GROUP"},next:{title:"Recursion (RECURSION)",permalink:"/docusaurustest/docs/Recursion_RECURSION"}},u=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:u};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"partition/order")," operator\xa0creates a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Properties"}),"property")," that partitions all objects collections in the system into ",Object(i.b)("em",{parentName:"p"},"groups"),", and using the specified ",Object(i.b)("em",{parentName:"p"},"order")," calculates an ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Set_operations#aggregate-functions"}),"aggregate function")," for each objects collection. Accordingly, the set on which this aggregating function is calculated is determined as following: all object collections of the group of this object collection, and the order of which is less than or equal to the order of this object collection.\xa0"),Object(i.b)("p",null,"Groups in this operator are defined as a set of properties (",Object(i.b)("em",{parentName:"p"},"groupings"),"), and the order is defined as a list of properties and a marker of increasing or decreasing.\xa0If the aggregation function is not ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Set_operations#commutative-broken"}),"commutative"),", the order must be uniquely determined.\xa0"),Object(i.b)("p",null,"Note that the partition/order operator is very similar to the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Grouping_GROUP"}),"grouping operator"),", but unlike the latter, it computes a result not for grouping values, but for the object collections for which calculation is taking place."),Object(i.b)("h3",{id:"language"},"Language"),Object(i.b)("p",null,"To declare a property that implements partition/order, use the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/PARTITION_operator"}),Object(i.b)("strong",{parentName:"a"},"PARTITION")," operator"),".\xa0"),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=OperatorPropertySample&block=partition",mdxType:"CodeSample"}))}p.isMDXComponent=!0}}]);