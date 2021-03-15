(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{293:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return p}));var o=a(3),n=a(7),s=(a(0),a(423)),r=a(424),i={title:"In an interactive view (SHOW, DIALOG)"},c={unversionedId:"In_an_interactive_view_SHOW_DIALOG",id:"In_an_interactive_view_SHOW_DIALOG",isDocsHomePage:!1,title:"In an interactive view (SHOW, DIALOG)",description:"This operator creates an action that\xa0opens a form\xa0in the interactive\xa0view.",source:"@site/docs/In_an_interactive_view_SHOW_DIALOG.md",slug:"/In_an_interactive_view_SHOW_DIALOG",permalink:"/docusaurustest/ru/docs/In_an_interactive_view_SHOW_DIALOG",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/In_an_interactive_view_SHOW_DIALOG.md",version:"current",sidebar:"docs",previous:{title:"Open form",permalink:"/docusaurustest/ru/docs/Open_form"},next:{title:"In a print view (PRINT)",permalink:"/docusaurustest/ru/docs/In_a_print_view_PRINT"}},u=[{value:"Flow management",id:"flow",children:[]},{value:"Form location",id:"location",children:[]},{value:"System action management",id:"system-action-management",children:[]},{value:"Dialog form",id:"dialog",children:[]},{value:"Extra features",id:"extra",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:u};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This operator creates an action that\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Open_form"},"opens a form"),"\xa0in the ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Interactive_view"},"interactive"),"\xa0view."),Object(s.b)("h3",{id:"flow"},"Flow management"),Object(s.b)("p",null,"The operator works in two modes:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("em",{parentName:"li"},"Synchronous"),"\xa0(",Object(s.b)("strong",{parentName:"li"},"WAIT"),") -\xa0waits for the user to\xa0",Object(s.b)("strong",{parentName:"li"},"close\xa0"),"the form, then saves the execution results and passes\xa0control to the next action."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("em",{parentName:"li"},"Asynchronous"),"\xa0(",Object(s.b)("strong",{parentName:"li"},"NOWAIT"),") - passes control to the next action right after\xa0",Object(s.b)("strong",{parentName:"li"},"opening\xa0"),"a form on the client end.")),Object(s.b)("p",null,"By default, the operator works in the synchronous mode."),Object(s.b)("h3",{id:"location"},"Form location"),Object(s.b)("p",null,"A form being opened can be shown in two ways:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"As a\xa0",Object(s.b)("em",{parentName:"li"},"window"),"\xa0(",Object(s.b)("strong",{parentName:"li"},"FLOAT"),")-\xa0the form is shown as a floating window."),Object(s.b)("li",{parentName:"ul"},"As a\xa0",Object(s.b)("em",{parentName:"li"},"tab"),"\xa0(",Object(s.b)("strong",{parentName:"li"},"DOCKED"),") -\xa0the form is opened as a tab in the system\xa0",Object(s.b)("a",{parentName:"li",href:"/docusaurustest/ru/docs/Navigator_design"},"window"),"\xa0",Object(s.b)("strong",{parentName:"li"},"System.forms"),".")),Object(s.b)("p",null,"By default, forms in the synchronous mode are shown as windows, in the asynchronous mode \u2013 as tabs."),Object(s.b)("p",null,'In the current implementation of the platform, a form shown as a window is always modal, which means that the "asynchronous window" mode is not supported.'),Object(s.b)("h3",{id:"system-action-management"},"System action management"),Object(s.b)("p",null,"By default, when the interactive view is enabled, the platform\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Interactive_view#sysactions"},"automatically determines")," which system actions of the form/session lifecycle management should be shown and which not. But since these conditions are somewhat heuristic, the developer can use a corresponding set\xa0of options to specify the actions that need to be shown when the form is opened. Similarly, the corresponding option can be used to specify whether the form is the ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Interactive_view#anchor-broken"},"owner of the session")," in which it is opened or not."),Object(s.b)("h3",{id:"dialog"},"Dialog form"),Object(s.b)("p",null,"This operator also allows to return the latest ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Form_structure#currentObject-broken"},"current value")," of a specified object (or, if necessary, of several objects), thus, essentially, performing\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Value_input"},"value input"),". In this case, ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Value_input#result"},"input is considered to be canceled")," if the user closes the form using\xa0",Object(s.b)("strong",{parentName:"p"},"System.formClose ("),"not\xa0",Object(s.b)("strong",{parentName:"p"},"System.formOk"),")."),Object(s.b)("p",null,"While inputting a value, it is sometimes necessary to not just choose one from a list, but also allow the user to return a ",Object(s.b)("strong",{parentName:"p"},"NULL")," value. For this purpose, the dialog form has a special option that, if enabled, shows the drop action (",Object(s.b)("strong",{parentName:"p"},"System.formDrop"),") on the form. Calling this action closes the form and returns a ",Object(s.b)("strong",{parentName:"p"},"NULL")," value as a result."),Object(s.b)("p",null,"Similar to the other value input operators, the dialog form of this\xa0operator allows to:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"specify\xa0",Object(s.b)("a",{parentName:"li",href:"/docusaurustest/ru/docs/Value_input#initial"},"initial object\xa0values")," (through the\xa0",Object(s.b)("a",{parentName:"li",href:"/docusaurustest/ru/docs/Open_form"},"passing objects"),"\xa0mechanism)."),Object(s.b)("li",{parentName:"ul"},"specify\xa0",Object(s.b)("a",{parentName:"li",href:"/docusaurustest/ru/docs/Value_input#result"},"main\xa0and alternative"),"\xa0actions. The first is called if the input was successfully completed, the second if not (i.e. if the input was canceled)."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/docusaurustest/ru/docs/Value_input#initial"},"change"),"\xa0a specified property.")),Object(s.b)("p",null,"In addition, if a value is entered to input to change the specified property, it is often necessary (at the value selection stage) to show the user not all object collections, but only those ones, whose selection (and subsequent change with these objects) will not violate\xa0existing\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Constraints"},"constraints"),". Accordingly, so that the developer does not have to copy the form and manually add the necessary filter, the platform automatically generates and adds corresponding filters to the form (this behavior, however, can be disabled using a corresponding option)."),Object(s.b)("p",null,"The operator dialog form is available in the synchronous mode only."),Object(s.b)("h3",{id:"extra"},"Extra features"),Object(s.b)("p",null,'When opening a form, you can specify that all of its properties should be available in the "read-only"mode. In this case, the behavior will be identical to the behavior when during form creation, the "read-only" mode is specified for each\xa0',Object(s.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Interactive_view#property"},"property view"),"."),Object(s.b)("p",null,"Also, when calling the form, you can specify that it will be opened in a ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/New_session_NEWSESSION_NESTEDSESSION"},"new")," (nested) session. In this case, ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Open_form#params"},"passing objects")," and value input will be performed in the current session (so it makes sense to use this option only if you need to pass objects and/or input a value; otherwise, it makes more sense to use a ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/New_session_NEWSESSION_NESTEDSESSION"},"new session")," operator)."),Object(s.b)("h3",{id:"language"},"Language"),Object(s.b)("p",null,"To open a form in the interactive view, use the\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/SHOW_operator"},Object(s.b)("strong",{parentName:"a"},"SHOW"),"\xa0operator"),". To show the form in the dialog mode, use the ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/DIALOG_operator"},Object(s.b)("strong",{parentName:"a"},"DIALOG")," operator"),"."),Object(s.b)("h3",{id:"examples"},"Examples"),Object(s.b)(r.a,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=show",mdxType:"CodeSample"}),Object(s.b)(r.a,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=dialog",mdxType:"CodeSample"}))}p.isMDXComponent=!0}}]);