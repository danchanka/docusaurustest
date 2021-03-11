(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{371:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return d})),o.d(t,"default",(function(){return b}));var s=o(3),n=o(7),a=(o(0),o(423)),i=o(57),l={title:"How-to: Using objects as templates"},c={unversionedId:"How-to_Using_objects_as_templates",id:"How-to_Using_objects_as_templates",isDocsHomePage:!1,title:"How-to: Using objects as templates",description:"Example 1",source:"@site/docs/How-to_Using_objects_as_templates.md",slug:"/How-to_Using_objects_as_templates",permalink:"/docusaurustest/docs/How-to_Using_objects_as_templates",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_Using_objects_as_templates.md",version:"current",sidebar:"docs",previous:{title:"How-to: Numbering",permalink:"/docusaurustest/docs/How-to_Numbering"},next:{title:"How-to: Overriding values",permalink:"/docusaurustest/docs/How-to_Overriding_values"}},d=[],r={toc:d};function b(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(s.a)({},r,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"example-1"},"Example 1"),Object(a.b)("h6",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have a book for which a name and price are defined. List and edit forms are defined for the book."),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseCreate&block=sample1",mdxType:"CodeSample"}),Object(a.b)("p",null,"We need to make a button that creates a new book based on the current one, and opens a form to edit it."),Object(a.b)("h6",{id:"solution"},"Solution"),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseCreate&block=solution1",mdxType:"CodeSample"}),Object(a.b)("p",null,"When the button is pressed, a new ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Change_sessions"},"change session")," will be created within which the book will be created and the new form will work with. If the user closes the form without saving, the new book will not be saved to the database and will be lost. The word ",Object(a.b)("strong",{parentName:"p"},"TOOLBAR")," specifies that this button should be displayed in the toolbar of the table with the list of orders."),Object(a.b)("h5",{id:"example-2"},"Example 2"),Object(a.b)("h6",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"We have the concepts of order documents and invoices, as well as forms for listing and editing them. Lines are defined for each document."),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseCreate&block=sample2",mdxType:"CodeSample"}),Object(a.b)("p",null,"We need to implement an ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"action")," that will create an invoice based on an order and open a form for editing it."),Object(a.b)("h6",{id:"solution-1"},"Solution"),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseCreate&block=solution2",mdxType:"CodeSample"}),Object(a.b)("h5",{id:"example-3"},"Example 3"),Object(a.b)("h6",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 2"),"."),Object(a.b)("p",null,"We need to implement an\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"action")," that will open a dialog for the invoice with a list of orders and add lines from the selected one."),Object(a.b)("h6",{id:"solution-2"},"Solution"),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseCreate&block=solution3",mdxType:"CodeSample"}),Object(a.b)("p",null,"No manipulation with change sessions is required because the button will be called from the account edit form and changes will occur within that session."))}b.isMDXComponent=!0}}]);