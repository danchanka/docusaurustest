(window.webpackJsonp=window.webpackJsonp||[]).push([[44,436],{116:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return r})),o.d(t,"toc",(function(){return d})),o.d(t,"default",(function(){return u}));var n=o(3),i=o(7),a=(o(0),o(750)),l=o(57),s={title:"How-to: Filtering and ordering"},r={unversionedId:"How-to_Filtering_and_ordering",id:"How-to_Filtering_and_ordering",isDocsHomePage:!1,title:"How-to: Filtering and ordering",description:"Example 1",source:"@site/docs/How-to_Filtering_and_ordering.md",slug:"/How-to_Filtering_and_ordering",permalink:"/docusaurustest/docs/next/How-to_Filtering_and_ordering",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_Filtering_and_ordering.md",version:"current",sidebar:"docs",previous:{title:"How-to: Documents with lines",permalink:"/docusaurustest/docs/next/How-to_Documents_with_lines"},next:{title:"How-to: Design",permalink:"/docusaurustest/docs/next/How-to_Design"}},d=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],c={toc:d};function u(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"There are remaining books in stock."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFilter&block=sample1",mdxType:"CodeSample"}),Object(a.b)("p",null,"We need to create a form to display the balances of books in a given stock in alphabetical order."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFilter&block=solution1",mdxType:"CodeSample"}),Object(a.b)("p",null,"Option 1 sets up a fixed filter that the user cannot remove. Option 2 allows the user to choose between predefined criteria (by default the one for which the ",Object(a.b)("em",{parentName:"p"},"DEFAULT")," option is set)."),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),"."),Object(a.b)("p",null,"We need to create a form to display remaining books in several warehouses, with the possibility of filtering by a specific warehouse. Ordering should be first by warehouse, and within that by book title."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFilter&block=solution2",mdxType:"CodeSample"}),Object(a.b)("p",null,"In this case a warehouse cannot be declared via the ",Object(a.b)("em",{parentName:"p"},"OBJECTS")," block, because then not specifying a warehouse for filtering will not be an option."),Object(a.b)("h2",{id:"example-3"},"Example 3"),Object(a.b)("h3",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"There is a list of orders for certain customers"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFilter&block=sample3",mdxType:"CodeSample"}),Object(a.b)("p",null,"We need to create a form to display the list of orders allowing to filter by date and/or customer. By default, orders should be in descending date order."),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFilter&block=solution3",mdxType:"CodeSample"}),Object(a.b)("p",null,"It should be noted that the dates in this case should always be selected (by default, the current date will be set when the form is opened). But it is possible not to select a customer."),Object(a.b)("p",null,"Also, note that what is set in ",Object(a.b)("em",{parentName:"p"},"ORDER BY")," is not an expression but a specific property added to the form. Thus, we cannot order by a property that has not been added to the form."))}u.isMDXComponent=!0},57:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return d})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return u})),o.d(t,"CodeSample",(function(){return p})),o.d(t,"default",(function(){return m}));var n=o(3),i=o(7),a=o(0),l=o.n(a),s=o(750),r=o(751),d={},c={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},u=[],p=function(e){var t=e.url,o=e.lines,n=Object(a.useState)(""),i=n[0],d=n[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return d(e)}))}),[t,d]),i?o?Object(s.b)(l.a.Fragment,null,Object(s.b)(r.a,{className:"lsf",metastring:o,mdxType:"CodeBlock"},i),Object(s.b)("br",null)):Object(s.b)(l.a.Fragment,null,Object(s.b)(r.a,{className:"lsf",mdxType:"CodeBlock"},i),Object(s.b)("br",null)):Object(s.b)(r.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},b={toc:u,CodeSample:p};function m(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},b,o,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0}}]);