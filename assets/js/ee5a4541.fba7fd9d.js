(window.webpackJsonp=window.webpackJsonp||[]).push([[638,461],{58:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return d})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return u})),o.d(t,"CodeSample",(function(){return p})),o.d(t,"default",(function(){return m}));var n=o(3),a=o(7),i=o(0),l=o.n(i),s=o(750),r=o(751),d={},c={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},u=[],p=function(e){var t=e.url,o=e.lines,n=Object(i.useState)(""),a=n[0],d=n[1];return Object(i.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return d(e)}))}),[t,d]),a?o?Object(s.b)(l.a.Fragment,null,Object(s.b)(r.a,{className:"lsf",metastring:o,mdxType:"CodeBlock"},a),Object(s.b)("br",null)):Object(s.b)(l.a.Fragment,null,Object(s.b)(r.a,{className:"lsf",mdxType:"CodeBlock"},a),Object(s.b)("br",null)):Object(s.b)(r.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},h={toc:u,CodeSample:p};function m(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},h,o,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},709:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return r})),o.d(t,"toc",(function(){return d})),o.d(t,"default",(function(){return u}));var n=o(3),a=o(7),i=(o(0),o(750)),l=o(58),s={title:"How-to: Events"},r={unversionedId:"How-to_Events",id:"version-1.0.0/How-to_Events",isDocsHomePage:!1,title:"How-to: Events",description:"Example 1",source:"@site/versioned_docs/version-1.0.0/How-to_Events.md",slug:"/How-to_Events",permalink:"/docusaurustest/docs/How-to_Events",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/How-to_Events.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"How-to: SEEK",permalink:"/docusaurustest/docs/How-to_SEEK"},next:{title:"How-to: Declarative logic: Overview",permalink:"/docusaurustest/docs/How-to_Declarative_logic"}},d=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Example 1",id:"example-1-1",children:[{value:"Condition",id:"condition-3",children:[]},{value:"Solution",id:"solution-3",children:[]}]},{value:"Example 2",id:"example-2-1",children:[{value:"Condition",id:"condition-4",children:[]},{value:"Solution",id:"solution-4",children:[]}]},{value:"Example 3",id:"example-3-1",children:[{value:"Condition",id:"condition-5",children:[]},{value:"Solution",id:"solution-5",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Condition",id:"condition-6",children:[]},{value:"Solution",id:"solution-6",children:[]}]}],c={toc:d};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"example-1"},"Example 1"),Object(i.b)("h3",{id:"condition"},"Condition"),Object(i.b)("p",null,"We have an order with a date, a number and a marker of whether it is closed."),Object(i.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseEvents&block=sample1",mdxType:"CodeSample"}),Object(i.b)("p",null,"We need to make it so that orders are closed automatically at the end of the day."),Object(i.b)("h3",{id:"solution"},"Solution"),Object(i.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseEvents&block=solution1",mdxType:"CodeSample"}),Object(i.b)("p",null,"In the first case, the event will only be executed in one transaction at the time the expression inside the ",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Change_operators_SET_CHANGED_..._"},"SET")," operator changes. That is, at the moment when the order date becomes smaller than the current date. However, if the user manually changes the order date to one greater than the current date and saves, the system will automatically execute this event and close the order. Therefore, the second option is preferable, since it will only come into effect when the current date changes at midnight."),Object(i.b)("h2",{id:"example-2"},"Example 2"),Object(i.b)("h3",{id:"condition-1"},"Condition"),Object(i.b)("p",null,"Similar to ",Object(i.b)("strong",{parentName:"p"},"Example 1"),", but the order contains lines with quantity, price and total."),Object(i.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseEvents&block=sample2",mdxType:"CodeSample"}),Object(i.b)("p",null,"We need to make it so that when the price or quantity changes, their product is automatically written to the total amount."),Object(i.b)("h3",{id:"solution-1"},"Solution"),Object(i.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseEvents&block=solution2",mdxType:"CodeSample"}),Object(i.b)("p",null,"Events of type ",Object(i.b)("strong",{parentName:"p"},"LOCAL")," count all property changes relative not to the state of the database but to the values at the time of the previous occurrence of this event (or rather, the end of its handling). We need to check that ",Object(i.b)("strong",{parentName:"p"},"sum")," has not changed, to avoid erasing changes made by previous changes. For example, if order lines have been imported from a file, in which the quantity, price and amount are recorded, then this event will not be triggered."),Object(i.b)("h2",{id:"example-3"},"Example 3"),Object(i.b)("h3",{id:"condition-2"},"Condition"),Object(i.b)("p",null,"Similar to\xa0",Object(i.b)("strong",{parentName:"p"},"Example 2"),", but a book is specified for the order line. Each book also has a default price."),Object(i.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseEvents&block=sample3",mdxType:"CodeSample"}),Object(i.b)("p",null,"We need to make sure that when the book is changed, the price is automatically set to the order line. This event should only work on the order edit form."),Object(i.b)("h3",{id:"solution-2"},"Solution"),Object(i.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseEvents&block=solution3",mdxType:"CodeSample"}),Object(i.b)("p",null,"Event"),Object(i.b)("h2",{id:"example-1-1"},"Example 1"),Object(i.b)("h3",{id:"condition-3"},"Condition"),Object(i.b)("p",null,"We have an order with a date, a number and a marker of whether it is closed."),Object(i.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseEvents&block=sample1",mdxType:"CodeSample"}),Object(i.b)("p",null,"We need to make it so that orders are closed automatically at the end of the day."),Object(i.b)("h3",{id:"solution-3"},"Solution"),Object(i.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseEvents&block=solution1",mdxType:"CodeSample"}),Object(i.b)("p",null,"In the first case, the event will only be executed in one transaction at the time the expression inside the ",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Change_operators_SET_CHANGED_..._"},"SET")," operator changes. That is, at the moment when the order date becomes smaller than the current date. However, if the user manually changes the order date to one greater than the current date and saves, the system will automatically execute this event and close the order. Therefore, the second option is preferable, since it will only come into effect when the current date changes at midnight."),Object(i.b)("h2",{id:"example-2-1"},"Example 2"),Object(i.b)("h3",{id:"condition-4"},"Condition"),Object(i.b)("p",null,"Similar to ",Object(i.b)("strong",{parentName:"p"},"Example 1"),", but the order contains lines for the quantity, price and total."),Object(i.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseEvents&block=sample2",mdxType:"CodeSample"}),Object(i.b)("p",null,"We need to make it so that when the price or quantity changes, their product is automatically recorded as the total amount."),Object(i.b)("h3",{id:"solution-4"},"Solution"),Object(i.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseEvents&block=solution2",mdxType:"CodeSample"}),Object(i.b)("p",null,"Events of type\xa0",Object(i.b)("strong",{parentName:"p"},"LOCAL"),"\xa0count all property changes relative not to the state of the database but to the values at the time of the previous occurrence of this event (or rather, the end of its handling). We need to check that ",Object(i.b)("strong",{parentName:"p"},"sum")," has not changed, to avoid erasing changes made by previous changes. For example, if order lines have been imported from a file, in which the quantity, price and amount are recorded, then this event will no longer take effect."),Object(i.b)("h2",{id:"example-3-1"},"Example 3"),Object(i.b)("h3",{id:"condition-5"},"Condition"),Object(i.b)("p",null,"Similar to\xa0",Object(i.b)("strong",{parentName:"p"},"Example 2"),", but a book is specified for the order line. Each book also has a default price."),Object(i.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseEvents&block=sample3",mdxType:"CodeSample"}),Object(i.b)("p",null,"We need to make sure that when the book is changed, the price is automatically appended to the order line. This event should only work on the order edit form."),Object(i.b)("h3",{id:"solution-5"},"Solution"),Object(i.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseEvents&block=solution3",mdxType:"CodeSample"}),Object(i.b)("p",null,"In this case, the event will be triggered only when the book is changed or set. When a book is dropped, the price will not change."),Object(i.b)("p",null,"Without the ",Object(i.b)("strong",{parentName:"p"},"FORMS")," block, this event would be triggered by any change to the order line book. For example, when an order was imported in any other form."),Object(i.b)("h2",{id:"example-4"},"Example 4"),Object(i.b)("h3",{id:"condition-6"},"Condition"),Object(i.b)("p",null,"Similar to\xa0",Object(i.b)("strong",{parentName:"p"},"Example 1"),"."),Object(i.b)("p",null,"We need to organize logging of the deletion of orders"),Object(i.b)("h3",{id:"solution-6"},"Solution"),Object(i.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseEvents&block=solution4",mdxType:"CodeSample"}),Object(i.b)("p",null,"When deleting\xa0an order and triggering an event with the ",Object(i.b)("strong",{parentName:"p"},"DROPPED")," modifier, it is important to remember that the object no longer exists and all properties that take it as input will give ",Object(i.b)("strong",{parentName:"p"},"NULL")," values. Therefore, we need to access them not directly, but through the ",Object(i.b)("strong",{parentName:"p"},"PREV")," operator."))}u.isMDXComponent=!0}}]);