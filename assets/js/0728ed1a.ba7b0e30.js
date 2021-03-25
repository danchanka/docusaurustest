(window.webpackJsonp=window.webpackJsonp||[]).push([[24,461],{58:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return l})),r.d(t,"CodeSample",(function(){return d})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=r(0),s=r.n(a),p=r(750),i=r(751),c={},b={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},l=[],d=function(e){var t=e.url,r=e.lines,n=Object(a.useState)(""),o=n[0],c=n[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return c(e)}))}),[t,c]),o?r?Object(p.b)(s.a.Fragment,null,Object(p.b)(i.a,{className:"lsf",metastring:r,mdxType:"CodeBlock"},o),Object(p.b)("br",null)):Object(p.b)(s.a.Fragment,null,Object(p.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(p.b)("br",null)):Object(p.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:l,CodeSample:d};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},m,r,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(750)),s=r(58),p={title:"PRINT operator"},i={unversionedId:"PRINT_operator",id:"version-1.0.0/PRINT_operator",isDocsHomePage:!1,title:"PRINT operator",description:"The PRINT\xa0operator creates an\xa0action\xa0that opens a form\xa0in print view.",source:"@site/versioned_docs/version-1.0.0/PRINT_operator.md",slug:"/PRINT_operator",permalink:"/docusaurustest/docs/PRINT_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/PRINT_operator.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"NEWTHREAD operator",permalink:"/docusaurustest/docs/NEWTHREAD_operator"},next:{title:"READ operator",permalink:"/docusaurustest/docs/READ_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"<em>Additional options</em>",id:"additional-options",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:c};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"PRINT"),"\xa0operator creates an\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"action"),"\xa0that ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_a_print_view_PRINT_"},"opens a form"),"\xa0in print view.\xa0"),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"PRINT name \n[OBJECTS objName1 = expr1, ..., objNameN = exprN]\n[formActionOptions]\xa0\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"formActionOptions")," -\xa0additional options for this action. There are several possible option syntaxes in this operator:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"printFormat [SHEET sheetProperty] [PASSWORD passwordExpr] [TO propertyId]\n[PREVIEW | NOPREVIEW] [syncType] [TO printerExpr]\nMESSAGE [syncType] [TOP n]\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"PRINT"),"\xa0operator creates an action that prints the specified form. When printing a form\xa0in the\xa0",Object(a.b)("strong",{parentName:"p"},"OBJECTS"),"\xa0block you can add ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Open_form#params"},"additional filters")," for form objects\xa0to check these objects for equality to the values\xa0passed."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"name")),Object(a.b)("p",null,"Form name.\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#cid-broken"},"Composite ID"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"objName1 ... objNameN")),Object(a.b)("p",null,"Names of form objects for which additional filters are specified. ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#id-broken"},"Simple IDs"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"expr1 ... exprN")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Expression"},"Expressions")," whose values determine the filtered (fixed) values for form objects."),Object(a.b)("h3",{id:"additional-options"},Object(a.b)("em",{parentName:"h3"},"Additional options")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"printFormat")),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_a_print_view_PRINT_#format"},"print format")," is specified by one of these keywords:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"PDF"),"\xa0\u2013 the form will be exported to a PDF file."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"XLS"),",\xa0",Object(a.b)("strong",{parentName:"li"},"XLSX"),"\xa0\u2013 the form will be exported to a file in one of the specified EXCEL formats."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"DOC"),", ",Object(a.b)("strong",{parentName:"li"},"DOCX"),"\xa0\u2013 the form will be exported to a file in one of the specified WORD formats."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"RTF"),"\xa0\u2013 the form will be exported to an RTF file."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"HTML"),"\xa0\u2013 the form will be exported to an HTML file.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"sheetProperty\n")),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#propertyid-broken"},"ID of the property")," whose value is used as the name of the sheet in the exported file. The property must not have parameters.\xa0It is used for ",Object(a.b)("strong",{parentName:"p"},"XLS")," and ",Object(a.b)("strong",{parentName:"p"},"XLSX")," print formats."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"passwordExpr")),Object(a.b)("p",null,"An expression whose value determines the password that sets the read-only mode for the exported file. Used for\xa0",Object(a.b)("strong",{parentName:"p"},"XLS"),"\xa0and\xa0",Object(a.b)("strong",{parentName:"p"},"XLSX")," print formats."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"propertyId")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#propertyid-broken"},"Property ID")," to which the generated file will be written. The property must not have parameters. If a property is not specified, the generated file is sent to the client and opened by the operating system"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"PREVIEW")),Object(a.b)("p",null,"Keyword. If specified, the form is displayed in ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_a_print_view_PRINT_#interactive"},"preview")," mode.\xa0This mode is used by default if no other modes/formats are specified."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"NOPREVIEW")),Object(a.b)("p",null,"Keyword. If specified, the form is immediately (without preview) sent for printing."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"printerExpr")),Object(a.b)("p",null,"An expression whose value determines the name of the printer to which the print job will be sent. If no printer with the specified name is found (or specified), the default printer is selected."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"MESSAGE")),Object(a.b)("p",null,"Keyword. If specified, the form displays data to the user in ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_a_print_view_PRINT_#interactive"},"message")," mode."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"TOP n")),Object(a.b)("p",null,"Displays only the first N entries. ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Literals#intliteral-broken"},"Integer literal"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"syncType")),Object(a.b)("p",null,"Determines when the created action should be continued:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"WAIT"),"\xa0- after the client completes the action (closes the preview/message form). Used by default."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"NOWAIT"),"\xa0-\xa0after preparation of the information for sending to the client (form data is read).")),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=print",mdxType:"CodeSample"}))}l.isMDXComponent=!0}}]);