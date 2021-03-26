(window.webpackJsonp=window.webpackJsonp||[]).push([[413,461],{487:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(3),o=n(7),r=(n(0),n(750)),s=n(58),c={title:"DIALOG operator"},i={unversionedId:"DIALOG_operator",id:"version-1.0.0/DIALOG_operator",isDocsHomePage:!1,title:"DIALOG operator",description:"The DIALOG\xa0operator creates an\xa0action that\xa0opens a form\xa0in an interactive view in dialog mode.",source:"@site/versioned_docs/version-1.0.0/DIALOG_operator.md",slug:"/DIALOG_operator",permalink:"/docusaurustest/docs/DIALOG_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/DIALOG_operator.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"DELETE operator",permalink:"/docusaurustest/docs/DELETE_operator"},next:{title:"EMAIL operator",permalink:"/docusaurustest/docs/EMAIL_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"<em>Input options</em>",id:"input-options",children:[]},{value:"<em>Additional options</em>",id:"additional-options",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"DIALOG"),"\xa0operator creates an\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"action")," that\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG_"},"opens a form"),"\xa0in an interactive view in ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG_#dialog"},"dialog")," mode.\xa0"),Object(r.b)("h3",{id:"syntax"},"Syntax"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"DIALOG name\n[OBJECTS objName1 [= expr1] [NULL] [inputOptions1], ..., objNameN [= exprN] [NULL] [inputOptionsN]]\n[formActionOptions]\n[DO actionOperator [ELSE elseActionOperator]]\n")),Object(r.b)("p",null,"When opening the list/edit form, the syntax is slightly different:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"DIALOG classFormType className\n[= expr] [NULL] [inputOptions]\n[formActionOptions]\n[DO actionOperator [ELSE elseActionOperator]]\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"inputOptions")," \u2013 object options that determine whether the last current values of this object should be returned after the form is closed and what to do next with these values (defined with one of the following syntaxes):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"INPUT [alias] [NULL]\nCHANGE [= changeExpr] [NOCONSTRAINTFILTER] [alias] [NULL]\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"formActionOptions")," - additional\xa0options for this action. They can be added one by one in any order:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"windowType\nMANAGESESSION | NOMANAGESESSION\nCANCEL | NOCANCEL\nNEWSESSION | NESTEDSESSION\nREADONLY\n")),Object(r.b)("h3",{id:"description"},"Description"),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"DIALOG"),"\xa0operator creates an action that opens the specified form. When opening a form in the\xa0",Object(r.b)("strong",{parentName:"p"},"OBJECTS"),"\xa0block you can ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Open_form#params"},"specify"),"\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Value_input#initial"},"initial values")," for the\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Form_structure"},"form objects")," and also return the last current values to the specified parameters and execute the ",Object(r.b)("strong",{parentName:"p"},"DO")," action which will process the received values in case the input has not been cancelled."),Object(r.b)("h3",{id:"parameters"},"Parameters"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"name")),Object(r.b)("p",null,"Form name.\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#cid-broken"},"Composite ID"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"classFormType")),Object(r.b)("p",null,"Keyword. Determines which form to open:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"LIST")," \u2013 list form"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"EDIT")," \u2013 edit form")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"className")),Object(r.b)("p",null,"The name of the custom class for which a list/edit form should be opened.\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#cid-broken"},"Composite ID"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"objName1 ... objNameN")),Object(r.b)("p",null,"Names of form objects for which initial values are specified. ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#id-broken"},"Simple IDs"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"expr1 ... exprN")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Expression"},"Expressions")," which values determine the initial values for form objects."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"NULL")),Object(r.b)("p",null,"Specifies that ",Object(r.b)("strong",{parentName:"p"},"NULL")," values can be passed. This option is automatically enabled if the object returns a value."),Object(r.b)("h3",{id:"input-options"},Object(r.b)("em",{parentName:"h3"},"Input options")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"INPUT")),Object(r.b)("p",null,"Keyword. If used, then the last current value of the object of the opened form will be written to the specified local parameter and, if necessary, to the specified property."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"alias")),Object(r.b)("p",null,"The name of the local parameter to which the input result is written.\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#id-broken"},"Simple ID"),". If the name is not specified, then the name of the form object will be used as the parameter name."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"CHANGE")),Object(r.b)("p",null,"A keyword indicating that in addition to the value input the result needs to be written to the specified property. Also by default, this option sets an additional filter for the object values on the opened form so that\xa0when selecting an object and changing the specified property to the value of this object, none of the existing ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Constraints"},"constraints")," are violated.\xa0"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"NOCONSTRAINTFILTER")),Object(r.b)("p",null,"If used, no additional filter for constraint compliance is set."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"changeExpr")),Object(r.b)("p",null,"An ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Expression"},"expression")," that determines the property to which the input result is written.\xa0By default, the property specified as the initial object value is used."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"NULL")),Object(r.b)("p",null,"A keyword that determines whether the user can select ",Object(r.b)("strong",{parentName:"p"},"NULL"),' as the return value (using the special "Drop" action \u2013\xa0',Object(r.b)("strong",{parentName:"p"},"System.formDrop"),"). If not used, will be enabled if and only if the ",Object(r.b)("strong",{parentName:"p"},"CHANGE")," option is specified."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"actionOperator")),Object(r.b)("p",null,"A ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Action_operator#contextdependent"},"context-dependent action operator")," that is executed if the input was completed successfully."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"elseActionOperator")),Object(r.b)("p",null,"A ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Action_operator#contextdependent"},"context-dependent action operator")," that is executed if the input was cancelled. Parameters added to the input block (INPUT) cannot be used as parameters."),Object(r.b)("h3",{id:"additional-options"},Object(r.b)("em",{parentName:"h3"},"Additional options")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"windowType")),Object(r.b)("p",null,"Method of\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG_#location"},"the form layout"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"DOCKED"),"\xa0- as a tab."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"FLOAT"),"\xa0-\xa0as a window. Used by default.")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"MANAGESESSION")," | ",Object(r.b)("em",{parentName:"p"},"NOMANAGESESSION")),Object(r.b)("p",null,"Keyword. Determines whether or not the\xa0created form is considered to be the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Interactive_view#session-broken"},"session owner"),"\xa0(if so, the corresponding buttons for managing the session will be shown on the form in interactive mode). By default, the platform tries to determine which mode to use ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Interactive_view#sysactions"},"automatically"),"\xa0depending on the context."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"CANCEL")," | ",Object(r.b)("em",{parentName:"p"},"NOCANCEL")),Object(r.b)("p",null,'Keyword. Determines whether or not to show the "Cancel" system action (',Object(r.b)("strong",{parentName:"p"},"System.formCancel"),")**\xa0**on the form.\xa0By default, the platform tries to determine which mode to use ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Interactive_view#sysactions"},"automatically"),"\xa0depending on context."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"NEWSESSION | NESTEDSESSION")),Object(r.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Keyword. Determines that the form will be opened in a new (nested) session. By default, the form is opened in the current session."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"READONLY")),Object(r.b)("p",null,"Keyword. If specified, the form is opened in ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG_#extra"},"read-only")," mode."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=dialog",mdxType:"CodeSample"}))}l.isMDXComponent=!0},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return l})),n.d(t,"CodeSample",(function(){return u})),n.d(t,"default",(function(){return m}));var a=n(3),o=n(7),r=n(0),s=n.n(r),c=n(750),i=n(751),p={},b={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},l=[],u=function(e){var t=e.url,n=e.lines,a=Object(r.useState)(""),o=a[0],p=a[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return p(e)}))}),[t,p]),o?n?Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:l,CodeSample:u};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0}}]);