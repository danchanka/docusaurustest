(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{377:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return d})),o.d(t,"default",(function(){return b}));var n=o(3),i=o(7),a=(o(0),o(424)),s=o(57),r={title:"How-to: PARTITION"},l={unversionedId:"How-to_PARTITION",id:"How-to_PARTITION",isDocsHomePage:!1,title:"How-to: PARTITION",description:"Example 1",source:"@site/docs/How-to_PARTITION.md",slug:"/How-to_PARTITION",permalink:"/docusaurustest/docs/How-to_PARTITION",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_PARTITION.md",version:"current",sidebar:"docs",previous:{title:"How-to: GROUP CONCAT",permalink:"/docusaurustest/docs/How-to_GROUP_CONCAT"},next:{title:"How-to: GUI",permalink:"/docusaurustest/docs/How-to_GUI"}},d=[],c={toc:d};function b(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"example-1"},"Example 1"),Object(a.b)("h6",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have an order with the lines."),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCasePartition&block=sample1",mdxType:"CodeSample"}),Object(a.b)("p",null,"We need to number the lines starting from 1 as they are added to the order."),Object(a.b)("h6",{id:"solution"},"Solution"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCasePartition&block=solution1",mdxType:"CodeSample"}),Object(a.b)("p",null,"In this case, we sort by internal ID of lines in the order, since we know for sure that this ID increases when the new lines are created."),Object(a.b)("h5",{id:"example-2"},"Example 2"),Object(a.b)("h6",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"We have a list of customer orders with specified dates."),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCasePartition&block=sample2",mdxType:"CodeSample"}),Object(a.b)("p",null,"For each order we need to find the date of the previous order placed by the same customer."),Object(a.b)("h6",{id:"solution-1"},"Solution"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCasePartition&block=solution2",mdxType:"CodeSample"}),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/docusaurustest/docs/How-to_GROUP_CONCAT"},"How-to: GROUP CONCAT")),", the order should be uniquely determined. Therefore, we add the order itself (i. e. its internal ID) as the last argument for ",Object(a.b)("strong",{parentName:"p"},"ORDER"),"."),Object(a.b)("h5",{id:"example-3"},"Example 3"),Object(a.b)("h6",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"We have the current balance for books by batches."),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCasePartition&block=sample3",mdxType:"CodeSample"}),Object(a.b)("p",null,"We need to distribute the specified quantity for a specified book by batches according to the FIFO principle."),Object(a.b)("h6",{id:"solution-2"},"Solution"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCasePartition&block=solution3",mdxType:"CodeSample"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"STRICT")," parameter means that if the quantity is greater than the total balance for all batches, then the remaining difference will be added to the last batch.  "))}b.isMDXComponent=!0}}]);