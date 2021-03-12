(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),s=a(7),r=(a(0),a(423)),o=a(57),i={title:"Constraints"},c={unversionedId:"Constraints",id:"Constraints",isDocsHomePage:!1,title:"Constraints",description:"Constraints in the platform determine which values the dataproperties can have and which cannot. In general, a constraint is defined as a property which value should always be NULL.",source:"@site/docs/Constraints.md",slug:"/Constraints",permalink:"/docusaurustest/docs/Constraints",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Constraints.md",version:"current",sidebar:"docs",previous:{title:"Calculated events",permalink:"/docusaurustest/docs/Calculated_events"},next:{title:"Simple constraints",permalink:"/docusaurustest/docs/Simple_constraints"}},l=[{value:"Show message",id:"message",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:l};function p(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Constraints in the platform determine which values the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Data_properties_DATA"},"data"),Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Properties"},"properties")," can have and which cannot. In general, a constraint is defined as a property which value should always be ",Object(r.b)("strong",{parentName:"p"},"NULL"),"."),Object(r.b)("p",null,"In fact, a constraint is a ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Simple_event"},"simple event"),", where condition\xa0is the constrained property and handling is ",Object(r.b)("a",{parentName:"p",href:"#message"},"showing")," all the non-",Object(r.b)("strong",{parentName:"p"},"NULL")," values (in the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_a_print_view_PRINT#interactive"},"asynchronous message")," mode) and ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Cancel_changes_CANCEL"},"canceling"),"\xa0all the changes. As well as for a simple event, you need to specify a base\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Events"},"event"),", which determines when the defined constraint is checked.\xa0"),Object(r.b)("p",null,"Compared to implementation via simple events, constraints have a set of additional advantages:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'There is a global checking procedure upon a working database for constraints (similarly to "recalculation" technique in simple events which is not applicable here as long as the handler\xa0contains\xa0the cancel changes operator)'),Object(r.b)("li",{parentName:"ul"},"Constraints are more understandable and readable since, unlike simple events, they emphasize the static/declarative nature of these rules, i.e. their independence from the moment in time."),Object(r.b)("li",{parentName:"ul"},"You can use the created constraint when showing dialogs for changing properties used in this constraint. In this case, an additional filter will be set in the dialog so that, when the property value changes to the selected one, the constraint is not violated.")),Object(r.b)("p",null,"Note that in some cases, instead of showing a message to the user and canceling the transaction, it is necessary, for example, to automatically resolve the violated constraint. In that case, it is recommended to use ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Simple_constraints"},"simple constraints"),", or, if it is impossible, simple events."),Object(r.b)("h3",{id:"message"},"Show message"),Object(r.b)("p",null,"For any non-",Object(r.b)("strong",{parentName:"p"},"NULL")," value\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_a_print_view_PRINT"},"output")," the platform uses an\xa0automatically generated\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Forms"},"form"),", consisting of:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"one\xa0",Object(r.b)("a",{parentName:"li",href:"/docusaurustest/docs/Form_structure#objects"},"group of objects")," with the objects corresponding to the parameters of the constrained property."),Object(r.b)("li",{parentName:"ul"},"properties with the matching classes belonging to the ",Object(r.b)("strong",{parentName:"li"},"System.recognize")," ",Object(r.b)("a",{parentName:"li",href:"/docusaurustest/docs/Groups_of_properties_and_actions"},"property group"),"."),Object(r.b)("li",{parentName:"ul"},"a ",Object(r.b)("a",{parentName:"li",href:"/docusaurustest/docs/Form_structure#filters"},"filter")," equal to the constrained property."),Object(r.b)("li",{parentName:"ul"},"a global message defined by the developer when creating the constraint.")),Object(r.b)("h3",{id:"language"},"Language"),Object(r.b)("p",null,"Constraints are created using the\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/CONSTRAINT_instruction"},Object(r.b)("strong",{parentName:"a"},"CONSTRAINT")," instruction"),".\xa0"),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)(o.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=constraint",mdxType:"CodeSample"}))}p.isMDXComponent=!0}}]);