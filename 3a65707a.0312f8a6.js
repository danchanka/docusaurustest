(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return m}));var n=a(3),o=a(7),r=(a(0),a(421)),s=a(56),c={title:"SHOW operator"},b={unversionedId:"SHOW_operator",id:"SHOW_operator",isDocsHomePage:!1,title:"SHOW operator",description:"The SHOW\xa0operator creates an action that opens a form\xa0in interactive view.",source:"@site/docs\\SHOW_operator.md",slug:"/SHOW_operator",permalink:"/docusaurustest/docs/SHOW_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/SHOW_operator.md",version:"current",sidebar:"docs",previous:{title:"SEEK operator",permalink:"/docusaurustest/docs/SEEK_operator"},next:{title:"TRY operator",permalink:"/docusaurustest/docs/TRY_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"<em>SHOW operator options</em>",id:"show-operator-options",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:p};function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"SHOW"),"\xa0operator creates an ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG"}),"opens a form"),"\xa0in interactive view.\xa0"),Object(r.b)("h3",{id:"syntax"},"Syntax"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"SHOW name \n[OBJECTS objName1 = expr1 [NULL], ..., objNameN = exprN [NULL]]\n[formActionOptions]\xa0\n")),Object(r.b)("p",null,"When opening the list/edit form, the syntax is slightly different:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"SHOW classFormType className\n= expr [NULL]\n[formActionOptions]\xa0\n\nformActionOptions\xa0is the options for this action. They can be added one by one in any order:\n\nsyncType\nwindowType\nMANAGESESSION | NOMANAGESESSION\nNEWSESSION | NESTEDSESSION\nCANCEL | NOCANCEL\nREADONLY\n")),Object(r.b)("h3",{id:"description"},"Description"),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"SHOW")," operator creates an action that opens the specified form.\xa0When opening the form in the\xa0",Object(r.b)("strong",{parentName:"p"},"OBJECTS"),"\xa0block,\xa0",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Open_form#passing-objects"}),"initial values")," can be specified\xa0for ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Form_structure"}),"Form structure"),"form objects."),Object(r.b)("h3",{id:"parameters"},"Parameters"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"name")),Object(r.b)("p",null,"Form name. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#cid-broken"}),"Composite ID"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"classFormType")),Object(r.b)("p",null,"Keyword. Determines which form to open:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"LIST"),"\xa0\u2013 list"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"EDIT"),"\xa0\u2013 edit")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"className")),Object(r.b)("p",null,"The name of the user class whose list/edit form is to be opened. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#cid-broken"}),"Composite ID")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"objName1 ... objNameN")),Object(r.b)("p",null,"Names of form objects for which initial values are specified. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#id-broken"}),"Simple IDs"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"expr, expr1 ... exprN")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"Expressions")," which values determine the initial values for form objects."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"NULL")),Object(r.b)("p",null,"Specifies that the values passed may be\xa0",Object(r.b)("strong",{parentName:"p"},"NULL"),"."),Object(r.b)("h3",{id:"show-operator-options"},Object(r.b)("em",{parentName:"h3"},"SHOW operator options")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"syncType")),Object(r.b)("p",null,"Determines in which ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG#flow-management"}),"flow control")," mode the operator will work:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"WAIT"),"\xa0- synchronous. Used by default."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"NOWAIT"),"\xa0- asynchronous.")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"windowType")),Object(r.b)("p",null,"Method of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG#form-location"}),"the form layout"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"DOCKED"),"\xa0\u2013 as a tab.\xa0Used by default in asynchronous mode."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"FLOAT"),"\xa0-\xa0as a window. Used by default in synchronous mode.")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"MANAGESESSION"),"\xa0|\xa0",Object(r.b)("em",{parentName:"p"},"NOMANAGESESSION")),Object(r.b)("p",null,"Keyword. Determines whether or not the\xa0created form\xa0",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Interactive_view#session-owner"}),"is considered to be the owner of the session"),"\xa0(if so, in interactive mode the corresponding buttons for managing the session will be shown on the form). By default, the platform tries to determine which mode to use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Interactive_view#system-actions-for-formsession-lifecycle-management"}),"automatically")," depending on the context."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"CANCEL"),"\xa0|\xa0",Object(r.b)("em",{parentName:"p"},"NOCANCEL")),Object(r.b)("p",null,'Keyword. Determines whether or not to show the "Cancel" system action (',Object(r.b)("strong",{parentName:"p"},"System.formCancel"),")**\xa0**on the form.\xa0By default, the platform tries to\xa0determine which mode to use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Interactive_view#system-actions-for-formsession-lifecycle-management"}),"automatically"),"\xa0depending on context."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"NEWSESSION | NESTEDSESSION")),Object(r.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Keyword. Determines that the form will be opened in a new (nested) session. By default, the form is opened in the current session."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"READONLY")),Object(r.b)("p",null,"Keyword. If specified, the form is opened in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG#extra-features"}),"read-only")," mode."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)(s.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=ActionSample&block=show",mdxType:"CodeSample"}))}m.isMDXComponent=!0}}]);