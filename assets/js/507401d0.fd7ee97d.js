(window.webpackJsonp=window.webpackJsonp||[]).push([[225,461],{299:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return d})),o.d(t,"default",(function(){return u}));var n=o(3),a=o(7),s=(o(0),o(750)),i=o(58),l={title:"How-to: SEEK"},c={unversionedId:"How-to_SEEK",id:"version-1.0.0/How-to_SEEK",isDocsHomePage:!1,title:"How-to: SEEK",description:"Example 1",source:"@site/versioned_docs/version-1.0.0/How-to_SEEK.md",slug:"/How-to_SEEK",permalink:"/docusaurustest/docs/How-to_SEEK",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/How-to_SEEK.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"How-to: NEWSESSION",permalink:"/docusaurustest/docs/How-to_NEWSESSION"},next:{title:"How-to: Events",permalink:"/docusaurustest/docs/How-to_Events"}},d=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 2",id:"example-2-1",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],r={toc:d};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},r,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"example-1"},"Example 1"),Object(s.b)("h3",{id:"condition"},"Condition"),Object(s.b)("p",null,"We have a defined logic for books and categories. A form has been created with a list of books categorized."),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseSeek&block=sample1",mdxType:"CodeSample"}),Object(s.b)("p",null,"We need to create an action that creates a new book, automatically assigns it to the current category and then makes this book active once the user saves and closes the form."),Object(s.b)("h3",{id:"solution"},"Solution"),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseSeek&block=solution1",mdxType:"CodeSample"}),Object(s.b)("p",null,"After closing the form, we need to call the ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/SEEK_operator"},"SEEK")," operator which will make the added object active."),Object(s.b)("h2",{id:"example-2"},"Example 2"),Object(s.b)("h3",{id:"condition-1"},"Condition"),Object(s.b)("p",null,"Similar to ",Object(s.b)("strong",{parentName:"p"},"Example 1"),". We have also added the customer logic. The user can set a price for each customer and book in the dedicated form."),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseSeek&block=sample2",mdxType:"CodeSample"}),Object(s.b)("p",null,"We need to add a default customer whose data will be populated when the user opens the form."),Object(s.b)("h3",{id:"solution-1"},"Solution"),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseSeek&block=solution2",mdxType:"CodeSample"}),Object(s.b)("p",null,"The property with the default customer is added to the Settings form on the General tab. The current object will change once the user opens the form, since the ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Event_block"},"ON INIT")," event will be triggered."),Object(s.b)("h2",{id:"example-2-1"},"Example 2"),Object(s.b)("h3",{id:"condition-2"},"Condition"),Object(s.b)("p",null,"Let's assume that we have a report form for which a date range is specified."),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseSeek&block=sample3",mdxType:"CodeSample"}),Object(s.b)("p",null,"We need to create buttons that will modify the interval to the last week, current month or last month."),Object(s.b)("h3",{id:"solution-2"},"Solution"),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseSeek&block=solution3",mdxType:"CodeSample"}),Object(s.b)("p",null,"Date properties can be found in the ",Object(s.b)("strong",{parentName:"p"},"Time")," ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Modules"},"system module")," which is loaded at the very beginning using the ",Object(s.b)("strong",{parentName:"p"},"REQUIRE")," instruction."))}u.isMDXComponent=!0},58:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return d})),o.d(t,"metadata",(function(){return r})),o.d(t,"toc",(function(){return u})),o.d(t,"CodeSample",(function(){return p})),o.d(t,"default",(function(){return b}));var n=o(3),a=o(7),s=o(0),i=o.n(s),l=o(750),c=o(751),d={},r={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},u=[],p=function(e){var t=e.url,o=e.lines,n=Object(s.useState)(""),a=n[0],d=n[1];return Object(s.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return d(e)}))}),[t,d]),a?o?Object(l.b)(i.a.Fragment,null,Object(l.b)(c.a,{className:"lsf",metastring:o,mdxType:"CodeBlock"},a),Object(l.b)("br",null)):Object(l.b)(i.a.Fragment,null,Object(l.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},a),Object(l.b)("br",null)):Object(l.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:u,CodeSample:p};function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},m,o,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0}}]);