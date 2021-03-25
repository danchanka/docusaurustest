(window.webpackJsonp=window.webpackJsonp||[]).push([[49,461],{121:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return r})),o.d(t,"toc",(function(){return d})),o.d(t,"default",(function(){return u}));var n=o(3),a=o(7),s=(o(0),o(750)),i=o(58),l={title:"How-to: Data entry"},r={unversionedId:"How-to_Data_entry",id:"version-1.0.0/How-to_Data_entry",isDocsHomePage:!1,title:"How-to: Data entry",description:"Example 1",source:"@site/versioned_docs/version-1.0.0/How-to_Data_entry.md",slug:"/How-to_Data_entry",permalink:"/docusaurustest/docs/How-to_Data_entry",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/How-to_Data_entry.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"How-to: Trees",permalink:"/docusaurustest/docs/How-to_Trees"},next:{title:"How-to: Navigator",permalink:"/docusaurustest/docs/How-to_Navigator"}},d=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]}],c={toc:d};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"example-1"},"Example 1"),Object(s.b)("h3",{id:"condition"},"Condition"),Object(s.b)("p",null,"We have a form that displays a list of books. We need to implement an option for entering a name only in upper case. Group change, copy&paste, and similar features must also be supported."),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseInput&block=sample1",mdxType:"CodeSample"}),Object(s.b)("h3",{id:"solution"},"Solution"),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseInput&block=solution1",mdxType:"CodeSample"}),Object(s.b)("h2",{id:"example-2"},"Example 2"),Object(s.b)("h3",{id:"condition-1"},"Condition"),Object(s.b)("p",null,"We have a form that displays a list of books. In this form, the user can specify a genre, so that only\xa0books of this genre will be displayed. We also have a form containing the list of orders where you can also apply a filter by genre. Each book has a restricted/allowed flag, and the order may contain only allowed books."),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseInput&block=sample2",mdxType:"CodeSample"}),Object(s.b)("p",null,"We need to replace the book selection mechanism on the order form so that the genre selection form is called. Additional requirements:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The genre specified in the order form must be set as default value for the filter by genre"),Object(s.b)("li",{parentName:"ul"},"The current book from the order must be set as default value (if it has been selected)"),Object(s.b)("li",{parentName:"ul"},'The book in the order must be resettable (i. e. it must be possible to set the "Undefined" value)'),Object(s.b)("li",{parentName:"ul"},"Only allowed books can be selected"),Object(s.b)("li",{parentName:"ul"},"Group change, copy&paste, and similar features must also be supported for the field.")),Object(s.b)("h3",{id:"solution-1"},"Solution"),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseInput&block=solution2",mdxType:"CodeSample"}))}u.isMDXComponent=!0},58:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return d})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return u})),o.d(t,"CodeSample",(function(){return p})),o.d(t,"default",(function(){return b}));var n=o(3),a=o(7),s=o(0),i=o.n(s),l=o(750),r=o(751),d={},c={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},u=[],p=function(e){var t=e.url,o=e.lines,n=Object(s.useState)(""),a=n[0],d=n[1];return Object(s.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return d(e)}))}),[t,d]),a?o?Object(l.b)(i.a.Fragment,null,Object(l.b)(r.a,{className:"lsf",metastring:o,mdxType:"CodeBlock"},a),Object(l.b)("br",null)):Object(l.b)(i.a.Fragment,null,Object(l.b)(r.a,{className:"lsf",mdxType:"CodeBlock"},a),Object(l.b)("br",null)):Object(l.b)(r.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:u,CodeSample:p};function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},m,o,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0}}]);