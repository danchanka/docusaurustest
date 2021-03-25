(window.webpackJsonp=window.webpackJsonp||[]).push([[257,461],{331:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var o=n(3),a=n(7),r=(n(0),n(750)),s=n(58),c={title:"SHOW operator"},i={unversionedId:"SHOW_operator",id:"version-1.0.0/SHOW_operator",isDocsHomePage:!1,title:"SHOW operator",description:"The SHOW\xa0operator creates an action that opens a form\xa0in interactive view.",source:"@site/versioned_docs/version-1.0.0/SHOW_operator.md",slug:"/SHOW_operator",permalink:"/docusaurustest/docs/SHOW_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/SHOW_operator.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"SEEK operator",permalink:"/docusaurustest/docs/SEEK_operator"},next:{title:"TRY operator",permalink:"/docusaurustest/docs/TRY_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"<em>SHOW operator options</em>",id:"show-operator-options",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"SHOW"),"\xa0operator creates an ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"action")," that ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG_"},"opens a form"),"\xa0in interactive view.\xa0"),Object(r.b)("h3",{id:"syntax"},"Syntax"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"SHOW name \n[OBJECTS objName1 = expr1 [NULL], ..., objNameN = exprN [NULL]]\n[formActionOptions]\xa0\n")),Object(r.b)("p",null,"When opening the list/edit form, the syntax is slightly different:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"SHOW classFormType className\n= expr [NULL]\n[formActionOptions]\xa0\n\nformActionOptions\xa0is the options for this action. They can be added one by one in any order:\n\nsyncType\nwindowType\nMANAGESESSION | NOMANAGESESSION\nNEWSESSION | NESTEDSESSION\nCANCEL | NOCANCEL\nREADONLY\n")),Object(r.b)("h3",{id:"description"},"Description"),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"SHOW")," operator creates an action that opens the specified form.\xa0When opening the form in the\xa0",Object(r.b)("strong",{parentName:"p"},"OBJECTS"),"\xa0block,\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Open_form#params"},"initial values")," can be specified\xa0for ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Form_structure"},"Form structure"),"form objects."),Object(r.b)("h3",{id:"parameters"},"Parameters"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"name")),Object(r.b)("p",null,"Form name. ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#cid-broken"},"Composite ID"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"classFormType")),Object(r.b)("p",null,"Keyword. Determines which form to open:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"LIST"),"\xa0\u2013 list"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"EDIT"),"\xa0\u2013 edit")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"className")),Object(r.b)("p",null,"The name of the user class whose list/edit form is to be opened. ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#cid-broken"},"Composite ID")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"objName1 ... objNameN")),Object(r.b)("p",null,"Names of form objects for which initial values are specified. ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#id-broken"},"Simple IDs"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"expr, expr1 ... exprN")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Expression"},"Expressions")," which values determine the initial values for form objects."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"NULL")),Object(r.b)("p",null,"Specifies that the values passed may be\xa0",Object(r.b)("strong",{parentName:"p"},"NULL"),"."),Object(r.b)("h3",{id:"show-operator-options"},Object(r.b)("em",{parentName:"h3"},"SHOW operator options")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"syncType")),Object(r.b)("p",null,"Determines in which ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG_#flow"},"flow control")," mode the operator will work:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"WAIT"),"\xa0- synchronous. Used by default."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"NOWAIT"),"\xa0- asynchronous.")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"windowType")),Object(r.b)("p",null,"Method of ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG_#location"},"the form layout"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"DOCKED"),"\xa0\u2013 as a tab.\xa0Used by default in asynchronous mode."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"FLOAT"),"\xa0-\xa0as a window. Used by default in synchronous mode.")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"MANAGESESSION"),"\xa0|\xa0",Object(r.b)("em",{parentName:"p"},"NOMANAGESESSION")),Object(r.b)("p",null,"Keyword. Determines whether or not the\xa0created form\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Interactive_view#owner"},"is considered to be the owner of the session"),"\xa0(if so, in interactive mode the corresponding buttons for managing the session will be shown on the form). By default, the platform tries to determine which mode to use ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Interactive_view#sysactions"},"automatically")," depending on the context."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"CANCEL"),"\xa0|\xa0",Object(r.b)("em",{parentName:"p"},"NOCANCEL")),Object(r.b)("p",null,'Keyword. Determines whether or not to show the "Cancel" system action (',Object(r.b)("strong",{parentName:"p"},"System.formCancel"),")**\xa0**on the form.\xa0By default, the platform tries to\xa0determine which mode to use ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Interactive_view#sysactions"},"automatically"),"\xa0depending on context."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"NEWSESSION | NESTEDSESSION")),Object(r.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Keyword. Determines that the form will be opened in a new (nested) session. By default, the form is opened in the current session."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"READONLY")),Object(r.b)("p",null,"Keyword. If specified, the form is opened in ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG_#extra"},"read-only")," mode."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=show",mdxType:"CodeSample"}))}l.isMDXComponent=!0},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return l})),n.d(t,"CodeSample",(function(){return u})),n.d(t,"default",(function(){return d}));var o=n(3),a=n(7),r=n(0),s=n.n(r),c=n(750),i=n(751),p={},b={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},l=[],u=function(e){var t=e.url,n=e.lines,o=Object(r.useState)(""),a=o[0],p=o[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return p(e)}))}),[t,p]),a?n?Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},a),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},a),Object(c.b)("br",null)):Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:l,CodeSample:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0}}]);