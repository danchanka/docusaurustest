(window.webpackJsonp=window.webpackJsonp||[]).push([[506,436],{57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return p})),n.d(t,"CodeSample",(function(){return l})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(7),r=n(0),i=n.n(r),s=n(750),c=n(751),u={},d={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},p=[],l=function(e){var t=e.url,n=e.lines,o=Object(r.useState)(""),a=o[0],u=o[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return u(e)}))}),[t,u]),a?n?Object(s.b)(i.a.Fragment,null,Object(s.b)(c.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},a),Object(s.b)("br",null)):Object(s.b)(i.a.Fragment,null,Object(s.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},a),Object(s.b)("br",null)):Object(s.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:p,CodeSample:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},577:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(750)),i=n(57),s={title:"Grouping (GROUP)"},c={unversionedId:"Grouping_GROUP_",id:"Grouping_GROUP_",isDocsHomePage:!1,title:"Grouping (GROUP)",description:"The group\xa0operator\xa0creates a\xa0property that divides all object collections in the system into groups, and calculates an\xa0aggregating function for each group following specified order.\xa0Accordingly, the set for which this aggregating function is calculated is determined as all the object collections belonging to this group.",source:"@site/docs/Grouping_GROUP_.md",slug:"/Grouping_GROUP_",permalink:"/docusaurustest/docs/next/Grouping_GROUP_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Grouping_GROUP_.md",version:"current",sidebar:"docs",previous:{title:"Set operations: Overview",permalink:"/docusaurustest/docs/next/Set_operations"},next:{title:"Partitioning / sorting (PARTITION ... ORDER)",permalink:"/docusaurustest/docs/next/Partitioning_sorting_PARTITION_..._ORDER_"}},u=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"group\xa0"),"operator\xa0creates a\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"property")," that divides all object collections in the system into groups, and calculates an\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Set_operations#func"},"aggregating function")," for each group following specified order.\xa0Accordingly, the set for which this aggregating function is calculated is determined as all the object collections belonging to this group.\xa0"),Object(r.b)("p",null,"Groups are defined for this operator as a set of properties (",Object(r.b)("em",{parentName:"p"},"groups"),"), and the order is defined as a list of properties and an increasing or decreasing marker.\xa0If the aggregation function is not\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Set_operations#commutative-broken"},"commutative"),", then the order must be uniquely determined.\xa0"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"A uniquely determined order can be guaranteed if for example, the IDs of all objects for which grouping is performed are specified when the order is defined"))),Object(r.b)("p",null,"In addition to the standard types of aggregate functions for grouping, there are three additional types: ",Object(r.b)("strong",{parentName:"p"},"EQUAL"),",\xa0",Object(r.b)("strong",{parentName:"p"},"AGGR")," and\xa0",Object(r.b)("strong",{parentName:"p"},"NAGGR"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"EQUAL\xa0"),"is a special case of the aggregation function ",Object(r.b)("strong",{parentName:"li"},"MAX")," (or ",Object(r.b)("strong",{parentName:"li"},"MIN"),"), with the additional ",Object(r.b)("a",{parentName:"li",href:"/docusaurustest/docs/next/Constraints"},"constraint")," that the value of the operand of the aggregating function within each group must be the same.\xa0"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"AGGR")," and ",Object(r.b)("strong",{parentName:"li"},"NAGGR\xa0"),"\xa0are a special case of\xa0",Object(r.b)("strong",{parentName:"li"},"EQUAL"),", but with an even more strict constraint: for each group there is no more than one object collection, the operand of the aggregating function is one of the objects, and the groups include all other objects. Aggregate function NAGGR only differs from AGGR\xa0in the fact that if it is used, no constraint is created (it is assumed that the constraint follows from the semantics of the properties of the operands and / or groupings themselves).")),Object(r.b)("h3",{id:"language"},"Language"),Object(r.b)("p",null,"To declare a property that implements grouping, use the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/GROUP_operator"},Object(r.b)("strong",{parentName:"a"},"GROUP")," operator"),"."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=group",mdxType:"CodeSample"}))}p.isMDXComponent=!0}}]);