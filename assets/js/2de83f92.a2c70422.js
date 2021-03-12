(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{133:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var s=a(3),n=a(7),o=(a(0),a(423)),r={title:"Session management"},l={unversionedId:"Session_management",id:"Session_management",isDocsHomePage:!1,title:"Session management",description:"The system has the following operators for working with sessions:",source:"@site/docs/Session_management.md",slug:"/Session_management",permalink:"/docusaurustest/docs/Session_management",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Session_management.md",version:"current",sidebar:"docs",previous:{title:"Class change (CHANGECLASS, DELETE)",permalink:"/docusaurustest/docs/Class_change_CHANGECLASS_DELETE"},next:{title:"Apply changes (APPLY)",permalink:"/docusaurustest/docs/Apply_changes_APPLY"}},c=[{value:"Nested local properties",id:"nested",children:[]}],i={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(s.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The system has the following operators for working with sessions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Apply_changes_APPLY"},"Apply changes (APPLY)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Cancel_changes_CANCEL"},"Cancel changes (CANCEL)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/New_session_NEWSESSION_NESTEDSESSION"},"New session (NEWSESSION, NESTEDSESSION)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Previous_value_PREV"},"Previous value (PREV)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Change_operators_SET_CHANGED_..."},"Change operators (SET, CHANGED, ...)"))),Object(o.b)("p",null,"Note that the latter two operators create properties, not actions."),Object(o.b)("h3",{id:"nested"},"Nested local properties"),Object(o.b)("p",null,"When the first three session management operators are executed, all local properties are reset to ",Object(o.b)("strong",{parentName:"p"},"NULL"),' . This is not always convenient. Besides, you may often need to pass data between different sessions or "life cycles" of the same session. To do that, you can mark specific local properties as ',Object(o.b)("em",{parentName:"p"},"nested"),". In this case:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"When a new session is created, all values of the local property are copied to it and are copied back when it closes."),Object(o.b)("li",{parentName:"ol"},"When changes are applied, all values of the local property are preserved after the transaction is completed (by default, after applying changes the session is cleared along with the values of all local properties)."),Object(o.b)("li",{parentName:"ol"},"When changes are canceled, all values of the local property will remain the same as they were before the cancellation.")),Object(o.b)("p",null,"The nesting mark can be added both globally for a local property (and, accordingly, for all of its uses), and separately for each session control operation. For every session management operation, you can also specify that all local properties should be nested."))}p.isMDXComponent=!0}}]);