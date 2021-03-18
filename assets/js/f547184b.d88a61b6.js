(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{411:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return p})),o.d(t,"default",(function(){return b}));var a=o(3),n=o(7),s=(o(0),o(424)),i=o(57),l={title:"How-to: GROUP LAST"},c={unversionedId:"How-to_GROUP_LAST",id:"How-to_GROUP_LAST",isDocsHomePage:!1,title:"How-to: GROUP LAST",description:"Example 1",source:"@site/docs/How-to_GROUP_LAST.md",slug:"/How-to_GROUP_LAST",permalink:"/docusaurustest/docs/How-to_GROUP_LAST",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_GROUP_LAST.md",version:"current",sidebar:"docs",previous:{title:"How-to: CASE/IF/OVERRIDE",permalink:"/docusaurustest/docs/How-to_CASE_IF_OVERRIDE"},next:{title:"How-to: GROUP CONCAT",permalink:"/docusaurustest/docs/How-to_GROUP_CONCAT"}},p=[],d={toc:p};function b(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h5",{id:"example-1"},"Example 1"),Object(s.b)("h6",{id:"condition"},"Condition"),Object(s.b)("p",null,"We have a set of books associated with a certain category, and the dates of their receipt."),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLast&block=sample1",mdxType:"CodeSample"}),Object(s.b)("p",null,"We need to find the latest received book in the selected category."),Object(s.b)("h6",{id:"solution"},"Solution"),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLast&block=solution1",mdxType:"CodeSample"}),Object(s.b)("p",null,"It is important to remember that order in the \xa0",Object(s.b)("strong",{parentName:"p"},"ORDER*\xa0*")," clause should be uniquely determined. To do this, the book (specifically, its internal ID) should be used as the second parameter since several books may have the same date of receipt."),Object(s.b)("h5",{id:"example-2"},"Example 2\xa0"),Object(s.b)("h6",{id:"condition-1"},"Condition"),Object(s.b)("p",null,"Similar to ",Object(s.b)("strong",{parentName:"p"},"Example 1"),", but the author and genre list are specified for each book."),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLast&block=sample2",mdxType:"CodeSample"}),Object(s.b)("p",null,"We need to find the most popular category by author and genre."),Object(s.b)("h6",{id:"solution-1"},"Solution"),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLast&block=solution2",mdxType:"CodeSample"}),Object(s.b)("h5",{id:"example-3"},"Example 3"),Object(s.b)("h6",{id:"condition-2"},"Condition"),Object(s.b)("p",null,"We have a certain set of books and the information about price changes per book and warehouse. Each object of the ",Object(s.b)("strong",{parentName:"p"},"Ledger")," class reflects a single change in price since a specific date."),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLast&block=sample3",mdxType:"CodeSample"}),Object(s.b)("p",null,"We need to identify the current price for a given book at the warehouse."),Object(s.b)("h6",{id:"solution-2"},"Solution"),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLast&block=solution3",mdxType:"CodeSample"}),Object(s.b)("h5",{id:"example-4"},"Example 4"),Object(s.b)("h6",{id:"condition-3"},"Condition"),Object(s.b)("p",null,"Similar to ",Object(s.b)("strong",{parentName:"p"},"Example 3"),"."),Object(s.b)("p",null,"We need to find the price valid for a specific date for a book at the warehouse."),Object(s.b)("h6",{id:"solution-3"},"Solution"),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLast&block=solution4",mdxType:"CodeSample"}),Object(s.b)("h5",{id:"example-5"},"Example 5"),Object(s.b)("h6",{id:"condition-4"},"Condition"),Object(s.b)("p",null,"Similar to Example 4, except that a change in price has an expiration date. If this date is not specified, then the price is not limited in time."),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLast&block=sample5",mdxType:"CodeSample"}),Object(s.b)("h6",{id:"solution-4"},"Solution"),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseLast&block=solution5",mdxType:"CodeSample"}),Object(s.b)("p",null,"Note that the expression ",Object(s.b)("em",{parentName:"p"},"NOT dateTo(l) < date")," does not always mean the same as ",Object(s.b)("em",{parentName:"p"},"dateTo(l) ",">","= date"),". The difference occurs when the value ",Object(s.b)("em",{parentName:"p"},"dateTo(l)")," equals ",Object(s.b)("em",{parentName:"p"},"NULL"),". In the first case, ",Object(s.b)("em",{parentName:"p"},"dateTo(l) < date")," equals ",Object(s.b)("em",{parentName:"p"},"NULL"),"(i. e. FALSE), while ",Object(s.b)("em",{parentName:"p"},"NOT NULL")," equals TRUE. In the second case, the expression obviously equals ",Object(s.b)("em",{parentName:"p"},"NULL")," (i. e. FALSE)."))}b.isMDXComponent=!0}}]);