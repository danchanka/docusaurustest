(window.webpackJsonp=window.webpackJsonp||[]).push([[270,436],{344:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return r})),o.d(t,"default",(function(){return d}));var n=o(3),a=o(7),l=(o(0),o(750)),i=o(57),s={title:"How-to: GROUP SUM"},c={unversionedId:"How-to_GROUP_SUM",id:"How-to_GROUP_SUM",isDocsHomePage:!1,title:"How-to: GROUP SUM",description:"Example 1",source:"@site/docs/How-to_GROUP_SUM.md",slug:"/How-to_GROUP_SUM",permalink:"/docusaurustest/docs/next/How-to_GROUP_SUM",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_GROUP_SUM.md",version:"current",sidebar:"docs",previous:{title:"How-to: Computations: Overview",permalink:"/docusaurustest/docs/next/How-to_Computations"},next:{title:"How-to: GROUP MAX/MIN/AGGR",permalink:"/docusaurustest/docs/next/How-to_GROUP_MAX_MIN_AGGR"}},r=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Condition",id:"condition-3",children:[]},{value:"Solution",id:"solution-3",children:[]}]},{value:"Example 5",id:"example-5",children:[{value:"Condition",id:"condition-4",children:[]},{value:"Solution",id:"solution-4",children:[]}]}],u={toc:r};function d(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"example-1"},"Example 1"),Object(l.b)("h3",{id:"condition"},"Condition"),Object(l.b)("p",null,"We have a set of books associated with certain category."),Object(l.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseSum&block=sample1",mdxType:"CodeSample"}),Object(l.b)("p",null,"We need to calculate the number of books in the category."),Object(l.b)("h3",{id:"solution"},"Solution"),Object(l.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseSum&block=solution1",mdxType:"CodeSample"}),Object(l.b)("h2",{id:"example-2"},"Example 2"),Object(l.b)("h3",{id:"condition-1"},"Condition"),Object(l.b)("p",null,"We have a set of books associated with certain tags. Each book can be associated with several tags at the same time."),Object(l.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseSum&block=sample2",mdxType:"CodeSample"}),Object(l.b)("p",null,"We need to calculate the number of books in the tag."),Object(l.b)("h3",{id:"solution-1"},"Solution"),Object(l.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseSum&block=solution2",mdxType:"CodeSample"}),Object(l.b)("h2",{id:"example-3"},"Example 3"),Object(l.b)("h3",{id:"condition-2"},"Condition"),Object(l.b)("p",null,"We have the information about the movement of books: each record is linked to the book itself and the warehouse where the movement occured, and also contains quantity and types of operations (receipt/shipment)."),Object(l.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseSum&block=sample3",mdxType:"CodeSample"}),Object(l.b)("p",null,"We need to calculate the current balance for a book at the warehouse."),Object(l.b)("h3",{id:"solution-2"},"Solution"),Object(l.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseSum&block=solution3",mdxType:"CodeSample"}),Object(l.b)("p",null,"It is recommended to mark the ",Object(l.b)("strong",{parentName:"p"},"currentBalance")," property as ",Object(l.b)("strong",{parentName:"p"},Object(l.b)("a",{parentName:"strong",href:"/docusaurustest/docs/next/Materializations"},"MATERIALIZED")),", so that when reading the current balances, the system could take the calculated value from the ",Object(l.b)("strong",{parentName:"p"},"bookStock")," table instead of recalculating this value based on all movements. Though this will slow down the writing process (since writing each movement will require updating the current balance), the reading process will become much faster."),Object(l.b)("p",null,"Note that you do not need to define explicitly in which table to keep the ",Object(l.b)("strong",{parentName:"p"},"currentBalance")," property, since the system will use the signature to find out the most suitable table for it (in this case, this will be ",Object(l.b)("strong",{parentName:"p"},"bookStock"),")."),Object(l.b)("h2",{id:"example-4"},"Example 4"),Object(l.b)("h3",{id:"condition-3"},"Condition"),Object(l.b)("p",null,"Similar to ",Object(l.b)("strong",{parentName:"p"},"Example 3"),", except that each movement is associated with the date of movement."),Object(l.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseSum&block=sample4",mdxType:"CodeSample"}),Object(l.b)("p",null,"We need to calculate the current balance for a given book at the warehouse for the specific date (as of the morning, without the movements occured on that day)."),Object(l.b)("h3",{id:"solution-3"},"Solution"),Object(l.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseSum&block=solution4",mdxType:"CodeSample"}),Object(l.b)("p",null,'The second option is preferable. Since requests usually refer to recent dates, the server will be calculating the result "retrospectively" from the current balance, thereby analyzing fewer records.'),Object(l.b)("h2",{id:"example-5"},"Example 5"),Object(l.b)("h3",{id:"condition-4"},"Condition"),Object(l.b)("p",null,"Similar to\xa0",Object(l.b)("strong",{parentName:"p"},"Example 3"),", except that we need to calculate the current balance for a given book across all the warehouses."),Object(l.b)("h3",{id:"solution-4"},"Solution"),Object(l.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseSum&block=solution5",mdxType:"CodeSample"}),Object(l.b)("p",null,"Unlike the current balance for all the warehouses, it is not reasonable to mark this property as MATERIALIZED if you have only few warehouses \u2014 otherwise, UPDATE CONFLICT may occur when several users try to write the movement of the same book at different warehouses simultaneously."))}d.isMDXComponent=!0},57:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return u})),o.d(t,"toc",(function(){return d})),o.d(t,"CodeSample",(function(){return m})),o.d(t,"default",(function(){return p}));var n=o(3),a=o(7),l=o(0),i=o.n(l),s=o(750),c=o(751),r={},u={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},d=[],m=function(e){var t=e.url,o=e.lines,n=Object(l.useState)(""),a=n[0],r=n[1];return Object(l.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return r(e)}))}),[t,r]),a?o?Object(s.b)(i.a.Fragment,null,Object(s.b)(c.a,{className:"lsf",metastring:o,mdxType:"CodeBlock"},a),Object(s.b)("br",null)):Object(s.b)(i.a.Fragment,null,Object(s.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},a),Object(s.b)("br",null)):Object(s.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},b={toc:d,CodeSample:m};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},b,o,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0}}]);