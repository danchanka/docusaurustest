(window.webpackJsonp=window.webpackJsonp||[]).push([[135,436],{209:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return i})),o.d(t,"toc",(function(){return r})),o.d(t,"default",(function(){return u}));var n=o(3),a=o(7),s=(o(0),o(750)),c=o(57),l={title:"How-to: CHANGE"},i={unversionedId:"How-to_CHANGE",id:"How-to_CHANGE",isDocsHomePage:!1,title:"How-to: CHANGE",description:"Example 1",source:"@site/docs/How-to_CHANGE.md",slug:"/How-to_CHANGE",permalink:"/docusaurustest/docs/next/How-to_CHANGE",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_CHANGE.md",version:"current",sidebar:"docs",previous:{title:"How-to: Actions: Overview",permalink:"/docusaurustest/docs/next/How-to_Actions"},next:{title:"How-to: EXEC",permalink:"/docusaurustest/docs/next/How-to_EXEC"}},r=[{value:"Example 1",id:"example-1",children:[{value:"Task",id:"task",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Task",id:"task-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]}],d={toc:r};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"example-1"},"Example 1"),Object(s.b)("h3",{id:"task"},"Task"),Object(s.b)("p",null,"We have a sales order for the books."),Object(s.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseAssign&block=sample1",mdxType:"CodeSample"}),Object(s.b)("p",null,"We need to create an action to place the order on 30 days from today and apply a 5% discount."),Object(s.b)("h3",{id:"solution"},"Solution"),Object(s.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseAssign&block=solution1",mdxType:"CodeSample"}),Object(s.b)("h2",{id:"example-2"},"Example 2"),Object(s.b)("h3",{id:"task-1"},"Task"),Object(s.b)("p",null,"Similar to ",Object(s.b)("strong",{parentName:"p"},"Example 1"),", except that a specification was added to the order. The current price for each book is also defined."),Object(s.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseAssign&block=sample2",mdxType:"CodeSample"}),Object(s.b)("p",null,"We need to create an action to populate all the lines in the order with current prices for the corresponding books."),Object(s.b)("h3",{id:"solution-1"},"Solution"),Object(s.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseAssign&block=solution2",mdxType:"CodeSample"}),Object(s.b)("p",null,"Make sure to use WHERE in the action. Otherwise, the prices will be set for all lines of all orders in the database."))}u.isMDXComponent=!0},57:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return d})),o.d(t,"toc",(function(){return u})),o.d(t,"CodeSample",(function(){return p})),o.d(t,"default",(function(){return b}));var n=o(3),a=o(7),s=o(0),c=o.n(s),l=o(750),i=o(751),r={},d={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},u=[],p=function(e){var t=e.url,o=e.lines,n=Object(s.useState)(""),a=n[0],r=n[1];return Object(s.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return r(e)}))}),[t,r]),a?o?Object(l.b)(c.a.Fragment,null,Object(l.b)(i.a,{className:"lsf",metastring:o,mdxType:"CodeBlock"},a),Object(l.b)("br",null)):Object(l.b)(c.a.Fragment,null,Object(l.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},a),Object(l.b)("br",null)):Object(l.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:u,CodeSample:p};function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},m,o,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0}}]);