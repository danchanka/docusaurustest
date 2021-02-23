(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{120:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return p}));var a=o(3),n=o(7),s=(o(0),o(421)),i=o(56),r={title:"How-to: NEWSESSION"},l={unversionedId:"How-to_NEWSESSION",id:"How-to_NEWSESSION",isDocsHomePage:!1,title:"How-to: NEWSESSION",description:"Example 1",source:"@site/docs\\How-to_NEWSESSION.md",slug:"/How-to_NEWSESSION",permalink:"/docusaurustest/docs/How-to_NEWSESSION",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_NEWSESSION.md",version:"current",sidebar:"docs",previous:{title:"How-to: WHILE",permalink:"/docusaurustest/docs/How-to_WHILE"},next:{title:"How-to: SEEK",permalink:"/docusaurustest/docs/How-to_SEEK"}},c=[],d={toc:c};function p(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h5",{id:"example-1"},"Example 1"),Object(s.b)("h6",{id:"condition"},"Condition"),Object(s.b)("p",null,"We have an order with a number and a posted/not posted flag."),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseNewSession&block=sample1",mdxType:"CodeSample"}),Object(s.b)("p",null,"We need to create an action that will post this order in a separate change session and then will add it to the form containing the list of orders."),Object(s.b)("h6",{id:"solution"},"Solution"),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseNewSession&block=solution1",mdxType:"CodeSample"}),Object(s.b)("p",null,'If you do not "wrap" the action that sets the ',Object(s.b)("strong",{parentName:"p"},"isPosted")," property in the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/NEWSESSION_operator"}),"NEWSESSION")," operator, then the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/APPLY_operator"}),"APPLY")," operator will also write other changes (including those made on the ",Object(s.b)("strong",{parentName:"p"},"orders")," form) to the database."),Object(s.b)("h5",{id:"example-2"},"Example 2"),Object(s.b)("h6",{id:"condition-1"},"Condition"),Object(s.b)("p",null,"Similar to ",Object(s.b)("strong",{parentName:"p"},"Example 1"),", except that the dedicated edit form is available for the order."),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseNewSession&block=sample2",mdxType:"CodeSample"}),Object(s.b)("p",null,"We need to create an action that creates a new order and open the edit form for it. This action must be added to the form containing the list of orders."),Object(s.b)("h6",{id:"solution-1"},"Solution"),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseNewSession&block=solution2",mdxType:"CodeSample"}),Object(s.b)("p",null,"If you do not use the ",Object(s.b)("strong",{parentName:"p"},"NEWSESSION")," operator, then the object for the new order will be created in the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Change_sessions"}),"change session")," of the ",Object(s.b)("strong",{parentName:"p"},"orders"),' form. And if the user closes the form without saving, then all the changes "will remain" in the change session for the form, and the created order will be displayed in the form containing the list of orders.'),Object(s.b)("h5",{id:"example-3"},"Example 3"),Object(s.b)("h6",{id:"condition-2"},"Condition"),Object(s.b)("p",null,"Similar to\xa0",Object(s.b)("strong",{parentName:"p"},"Example 2"),", except that the order can be marked."),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseNewSession&block=sample3",mdxType:"CodeSample"}),Object(s.b)("p",null,'We need to create an action that will delete the marked orders and immediately save the changes to the database (so that the user does not need to click "Save").'),Object(s.b)("h6",{id:"solution-2"},"Solution"),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseNewSession&block=solution3",mdxType:"CodeSample"}),Object(s.b)("p",null,'By default, a new session ignores changes made in the "upper" session. To make the selected property available in the new session, use the ',Object(s.b)("strong",{parentName:"p"},"NESTED")," block of operators. Otherwise, the ",Object(s.b)("strong",{parentName:"p"},"selected")," property will always be NULL. Alternatively, you can use the ",Object(s.b)("strong",{parentName:"p"},"NESTED LOCAL")," block instead of specifying particular properties. In this case, changes made to all local properties in the upper session will be visible."),Object(s.b)("h5",{id:"example-4"},"Example 4"),Object(s.b)("h6",{id:"condition-3"},"Condition"),Object(s.b)("p",null,"Similar to \xa0",Object(s.b)("strong",{parentName:"p"},"Example 2"),", except that the payment logic for the order has been added."),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseNewSession&block=sample4",mdxType:"CodeSample"}),Object(s.b)("p",null,"We need to create a button on the form for opening a separate edit form for payments in this order."),Object(s.b)("h6",{id:"solution-3"},"Solution"),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseNewSession&block=solution4",mdxType:"CodeSample"}),Object(s.b)("p",null,"If you use the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/NESTEDSESSION_operator"}),"NESTEDSESSION"),' operator, then all the changes made in the "upper" change session will be available in the nested session. If the user closes the form without clicking OK, then all changes made directly in the form will be lost. If the user clicks OK, then the changes will be written to the "upper" change session rather than to the database. They will be written to the database along with the changes made in the main ',Object(s.b)("strong",{parentName:"p"},"orders")," form."),Object(s.b)("p",null,"It is not allowed to use ",Object(s.b)("strong",{parentName:"p"},"NEWSESSION"),"\xa0here simply because the ",Object(s.b)("strong",{parentName:"p"},"orderPayments"),' form will not be able to see the newly created order which has not yet been added to the database (since changes made in the "upper" session are not visible in the nested one), and thus the behavior will be unpredictable.'),Object(s.b)("p",null,"If we do not use any session management operator at all, then if the user make any changes in the ",Object(s.b)("strong",{parentName:"p"},"orderPayments"),' form and clicks the Close button, the changes will still be "saved", though the user might not expect that.'))}p.isMDXComponent=!0}}]);