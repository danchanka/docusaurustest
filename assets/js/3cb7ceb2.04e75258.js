(window.webpackJsonp=window.webpackJsonp||[]).push([[153,461],{227:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return r})),o.d(t,"toc",(function(){return d})),o.d(t,"default",(function(){return u}));var n=o(3),i=o(7),s=(o(0),o(750)),a=o(58),l={title:"How-to: Filtering and ordering"},r={unversionedId:"How-to_Filtering_and_ordering",id:"version-1.0.0/How-to_Filtering_and_ordering",isDocsHomePage:!1,title:"How-to: Filtering and ordering",description:"Example 1",source:"@site/versioned_docs/version-1.0.0/How-to_Filtering_and_ordering.md",slug:"/How-to_Filtering_and_ordering",permalink:"/docusaurustest/docs/How-to_Filtering_and_ordering",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/How-to_Filtering_and_ordering.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"How-to: Documents with lines",permalink:"/docusaurustest/docs/How-to_Documents_with_lines"},next:{title:"How-to: Design",permalink:"/docusaurustest/docs/How-to_Design"}},d=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],c={toc:d};function u(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"example-1"},"Example 1"),Object(s.b)("h3",{id:"condition"},"Condition"),Object(s.b)("p",null,"There are remaining books in stock."),Object(s.b)(a.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFilter&block=sample1",mdxType:"CodeSample"}),Object(s.b)("p",null,"We need to create a form to display the balances of books in a given stock in alphabetical order."),Object(s.b)("h3",{id:"solution"},"Solution"),Object(s.b)(a.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFilter&block=solution1",mdxType:"CodeSample"}),Object(s.b)("p",null,"Option 1 sets up a fixed filter that the user cannot remove. Option 2 allows the user to choose between predefined criteria (by default the one for which the ",Object(s.b)("em",{parentName:"p"},"DEFAULT")," option is set)."),Object(s.b)("h2",{id:"example-2"},"Example 2"),Object(s.b)("h3",{id:"condition-1"},"Condition"),Object(s.b)("p",null,"Similar to ",Object(s.b)("strong",{parentName:"p"},"Example 1"),"."),Object(s.b)("p",null,"We need to create a form to display remaining books in several warehouses, with the possibility of filtering by a specific warehouse. Ordering should be first by warehouse, and within that by book title."),Object(s.b)("h3",{id:"solution-1"},"Solution"),Object(s.b)(a.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFilter&block=solution2",mdxType:"CodeSample"}),Object(s.b)("p",null,"In this case a warehouse cannot be declared via the ",Object(s.b)("em",{parentName:"p"},"OBJECTS")," block, because then not specifying a warehouse for filtering will not be an option."),Object(s.b)("h2",{id:"example-3"},"Example 3"),Object(s.b)("h3",{id:"condition-2"},"Condition"),Object(s.b)("p",null,"There is a list of orders for certain customers"),Object(s.b)(a.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFilter&block=sample3",mdxType:"CodeSample"}),Object(s.b)("p",null,"We need to create a form to display the list of orders allowing to filter by date and/or customer. By default, orders should be in descending date order."),Object(s.b)("h3",{id:"solution-2"},"Solution"),Object(s.b)(a.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFilter&block=solution3",mdxType:"CodeSample"}),Object(s.b)("p",null,"It should be noted that the dates in this case should always be selected (by default, the current date will be set when the form is opened). But it is possible not to select a customer."),Object(s.b)("p",null,"Also, note that what is set in ",Object(s.b)("em",{parentName:"p"},"ORDER BY")," is not an expression but a specific property added to the form. Thus, we cannot order by a property that has not been added to the form."))}u.isMDXComponent=!0},58:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return d})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return u})),o.d(t,"CodeSample",(function(){return p})),o.d(t,"default",(function(){return m}));var n=o(3),i=o(7),s=o(0),a=o.n(s),l=o(750),r=o(751),d={},c={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},u=[],p=function(e){var t=e.url,o=e.lines,n=Object(s.useState)(""),i=n[0],d=n[1];return Object(s.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return d(e)}))}),[t,d]),i?o?Object(l.b)(a.a.Fragment,null,Object(l.b)(r.a,{className:"lsf",metastring:o,mdxType:"CodeBlock"},i),Object(l.b)("br",null)):Object(l.b)(a.a.Fragment,null,Object(l.b)(r.a,{className:"lsf",mdxType:"CodeBlock"},i),Object(l.b)("br",null)):Object(l.b)(r.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},b={toc:u,CodeSample:p};function m(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,o,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0}}]);