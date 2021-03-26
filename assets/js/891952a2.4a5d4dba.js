(window.webpackJsonp=window.webpackJsonp||[]).push([[374,461],{448:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return r})),o.d(t,"toc",(function(){return d})),o.d(t,"default",(function(){return u}));var n=o(3),s=o(7),i=(o(0),o(750)),a=o(58),c={title:"How-to: IF/CASE"},r={unversionedId:"How-to_IF_CASE",id:"version-1.0.0/How-to_IF_CASE",isDocsHomePage:!1,title:"How-to: IF/CASE",description:"Example 1",source:"@site/versioned_docs/version-1.0.0/How-to_IF_CASE.md",slug:"/How-to_IF_CASE",permalink:"/docusaurustest/docs/How-to_IF_CASE",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/How-to_IF_CASE.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"How-to: FOR",permalink:"/docusaurustest/docs/How-to_FOR"},next:{title:"How-to: WHILE",permalink:"/docusaurustest/docs/How-to_WHILE"}},d=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]}],l={toc:d};function u(e){var t=e.components,o=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"example-1"},"Example 1"),Object(i.b)("h3",{id:"condition"},"Condition"),Object(i.b)("p",null,"We have a list of books associated with certain categories. Each book is assigned a price."),Object(i.b)(a.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseIfCase&block=sample1",mdxType:"CodeSample"}),Object(i.b)("p",null,"We need to create an action that sets a given price for books associated with the specific category and a fixed price for all other books. When no category is selected, the error message must appear."),Object(i.b)("h3",{id:"solution"},"Solution"),Object(i.b)(a.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseIfCase&block=solution1",mdxType:"CodeSample"}),Object(i.b)("h2",{id:"example-2"},"Example 2"),Object(i.b)("h3",{id:"condition-1"},"Condition"),Object(i.b)("p",null,"Similar to\xa0",Object(i.b)("strong",{parentName:"p"},"Example 1"),"."),Object(i.b)("p",null,"We need to create an action that sets pre-defined prices for books associated with any of the three categories and sets zero price for all other books."),Object(i.b)("h3",{id:"solution-1"},"Solution"),Object(i.b)(a.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseIfCase&block=solution2",mdxType:"CodeSample"}))}u.isMDXComponent=!0},58:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return d})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return u})),o.d(t,"CodeSample",(function(){return p})),o.d(t,"default",(function(){return b}));var n=o(3),s=o(7),i=o(0),a=o.n(i),c=o(750),r=o(751),d={},l={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},u=[],p=function(e){var t=e.url,o=e.lines,n=Object(i.useState)(""),s=n[0],d=n[1];return Object(i.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return d(e)}))}),[t,d]),s?o?Object(c.b)(a.a.Fragment,null,Object(c.b)(r.a,{className:"lsf",metastring:o,mdxType:"CodeBlock"},s),Object(c.b)("br",null)):Object(c.b)(a.a.Fragment,null,Object(c.b)(r.a,{className:"lsf",mdxType:"CodeBlock"},s),Object(c.b)("br",null)):Object(c.b)(r.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:u,CodeSample:p};function b(e){var t=e.components,o=Object(s.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},m,o,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0}}]);