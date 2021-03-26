(window.webpackJsonp=window.webpackJsonp||[]).push([[546,461],{58:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return u})),a.d(t,"toc",(function(){return d})),a.d(t,"CodeSample",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(3),s=a(7),o=a(0),r=a.n(o),i=a(750),c=a(751),l={},u={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},d=[],p=function(e){var t=e.url,a=e.lines,n=Object(o.useState)(""),s=n[0],l=n[1];return Object(o.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),s?a?Object(i.b)(r.a.Fragment,null,Object(i.b)(c.a,{className:"lsf",metastring:a,mdxType:"CodeBlock"},s),Object(i.b)("br",null)):Object(i.b)(r.a.Fragment,null,Object(i.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},s),Object(i.b)("br",null)):Object(i.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:d,CodeSample:p};function b(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},618:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),s=a(7),o=(a(0),a(750)),r=a(58),i={title:"Constraints: Overview",sidebar_label:"Overview"},c={unversionedId:"Constraints",id:"version-1.0.0/Constraints",isDocsHomePage:!1,title:"Constraints: Overview",description:"Constraints in the platform determine which values the dataproperties can have and which cannot. In general, a constraint is defined as a property which value should always be NULL.",source:"@site/versioned_docs/version-1.0.0/Constraints.md",slug:"/Constraints",permalink:"/docusaurustest/docs/Constraints",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/Constraints.md",version:"1.0.0",sidebar_label:"Overview",sidebar:"version-1.0.0/docs",previous:{title:"Calculated events",permalink:"/docusaurustest/docs/Calculated_events"},next:{title:"Simple constraints",permalink:"/docusaurustest/docs/Simple_constraints"}},l=[{value:"Show message",id:"message",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:l};function d(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Constraints in the platform determine which values the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Data_properties_DATA_"},"data"),Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Properties"},"properties")," can have and which cannot. In general, a constraint is defined as a property which value should always be ",Object(o.b)("strong",{parentName:"p"},"NULL"),"."),Object(o.b)("p",null,"In fact, a constraint is a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Simple_event"},"simple event"),", where condition\xa0is the constrained property and handling is ",Object(o.b)("a",{parentName:"p",href:"#message"},"showing")," all the non-",Object(o.b)("strong",{parentName:"p"},"NULL")," values (in the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_a_print_view_PRINT_#interactive"},"asynchronous message")," mode) and ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Cancel_changes_CANCEL_"},"canceling"),"\xa0all the changes. As well as for a simple event, you need to specify a base\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Events"},"event"),", which determines when the defined constraint is checked.\xa0"),Object(o.b)("p",null,"Compared to implementation via simple events, constraints have a set of additional advantages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'There is a global checking procedure upon a working database for constraints (similarly to "recalculation" technique in simple events which is not applicable here as long as the handler\xa0contains\xa0the cancel changes operator)'),Object(o.b)("li",{parentName:"ul"},"Constraints are more understandable and readable since, unlike simple events, they emphasize the static/declarative nature of these rules, i.e. their independence from the moment in time."),Object(o.b)("li",{parentName:"ul"},"You can use the created constraint when showing dialogs for changing properties used in this constraint. In this case, an additional filter will be set in the dialog so that, when the property value changes to the selected one, the constraint is not violated.")),Object(o.b)("p",null,"Note that in some cases, instead of showing a message to the user and canceling the transaction, it is necessary, for example, to automatically resolve the violated constraint. In that case, it is recommended to use ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Simple_constraints"},"simple constraints"),", or, if it is impossible, simple events."),Object(o.b)("h3",{id:"message"},"Show message"),Object(o.b)("p",null,"For any non-",Object(o.b)("strong",{parentName:"p"},"NULL")," value\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_a_print_view_PRINT_"},"output")," the platform uses an\xa0automatically generated\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Forms"},"form"),", consisting of:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"one\xa0",Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Form_structure#objects"},"group of objects")," with the objects corresponding to the parameters of the constrained property."),Object(o.b)("li",{parentName:"ul"},"properties with the matching classes belonging to the ",Object(o.b)("strong",{parentName:"li"},"System.recognize")," ",Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Groups_of_properties_and_actions"},"property group"),"."),Object(o.b)("li",{parentName:"ul"},"a ",Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Form_structure#filters"},"filter")," equal to the constrained property."),Object(o.b)("li",{parentName:"ul"},"a global message defined by the developer when creating the constraint.")),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"Constraints are created using the\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/CONSTRAINT_instruction"},Object(o.b)("strong",{parentName:"a"},"CONSTRAINT")," instruction"),".\xa0"),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=constraint",mdxType:"CodeSample"}))}d.isMDXComponent=!0}}]);