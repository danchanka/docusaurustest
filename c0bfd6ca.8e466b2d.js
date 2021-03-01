(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{338:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),b=(a(0),a(421)),l=a(56),c={title:"WRITE operator"},o={unversionedId:"WRITE_operator",id:"WRITE_operator",isDocsHomePage:!1,title:"WRITE operator",description:"The WRITE operator creates an action that writes a file\xa0from a property to an external resource.",source:"@site/docs\\WRITE_operator.md",slug:"/WRITE_operator",permalink:"/docusaurustest/docs/WRITE_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/WRITE_operator.md",version:"current",sidebar:"docs",previous:{title:"WHILE operator",permalink:"/docusaurustest/docs/WHILE_operator"},next:{title:"Action options",permalink:"/docusaurustest/docs/Action_options"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"<em>fileExpr</em>",id:"fileexpr",children:[]},{value:"<strong>Examples</strong>",id:"examples",children:[]}],p={toc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The ",Object(b.b)("strong",{parentName:"p"},"WRITE")," operator creates an ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Write_file_WRITE"}),"writes a file"),"\xa0from a property to an external resource.\xa0"),Object(b.b)("h3",{id:"syntax"},"Syntax"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"WRITE [CLIENT [DIALOG]] fileExpr TO urlExpr [APPEND]\n")),Object(b.b)("h3",{id:"description"},"Description"),Object(b.b)("p",null,"The ",Object(b.b)("strong",{parentName:"p"},"WRITE"),"\xa0 operator creates an action that writes a file from the property to an external resource located at the specified URL."),Object(b.b)("p",null,"The following URL types are supported:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"[file://]path_to_file\n[s]ftp://username:password[;charset]@host:port[/path_to_file][?passivemode=true|false]\n")),Object(b.b)("p",null,"It is assumed that the file extension\xa0is not specified in the URL (that is, the period (.) is also considered a part of the file name). This extension is determined automatically based on the class of the file\xa0being written:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("p",null,"Extension")),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("p",null,"Class")))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"read from the passed object"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",null,"FILE"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"json"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",null,"JSONFILE"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"xml"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",null,"XMLFILE"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"csv"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",null,"CSVFILE"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"xls or xlsx, depending on the file content"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",null,"EXCELFILE"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dbf"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",null,"DBFFILE"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"table"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",null,"TABLEFILE"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"html"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",null,"HTMLFILE"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"doc or docx, depending on the file content"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",null,"WORDFILE"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"jpg"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",null,"IMAGEFILE"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pdf"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",null,"PDFFILE"))))),Object(b.b)("p",null,"The Downloads folder in the user folder is considered to be the current folder on the client side."),Object(b.b)("h3",{id:"parameters"},"Parameters"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"CLIENT")),Object(b.b)("p",null,"Keyword. If specified, the action will be executed on the client side. By default, the action is executed on the server."),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"DIALOG")),Object(b.b)("p",null,"Keyword. If specified, before writing the file a dialog will be shown in which the user can change the specified URL*",Object(b.b)("strong",{parentName:"p"},"*.**"),"\xa0This can be used only when writing to the disk (the URL type is file).*",Object(b.b)("strong",{parentName:"p"},"*\xa0**")," By default, the dialog is not shown.\xa0"),Object(b.b)("p",null,"*",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"ulrExpr")),"  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"})),Object(b.b)("p",null,"An ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expression")," whose value equals to the URL."),Object(b.b)("h3",{id:"fileexpr"},Object(b.b)("em",{parentName:"h3"},"fileExpr")),Object(b.b)("p",null,"An ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expression")," whose value equals to the file that will be written to an external resource.\xa0"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"APPEND")),Object(b.b)("p",null,"Keyword. If specified, the file is re-read from \xa0fileExpr\xa0and appended to the file at\xa0urlExpr;. For the CSV extension, data is added to the end of the file. For xls and xlsx\xa0, all sheets from the\xa0fileExpr\xa0file are copied to the\xa0file at the specified location\xa0urlExpr. Not supported for other extensions.\xa0By default, the file is rewritten."),Object(b.b)("p",null,"**",Object(b.b)("br",{parentName:"p"}),"\n","**"),Object(b.b)("h3",{id:"examples"},Object(b.b)("strong",{parentName:"h3"},"Examples")),Object(b.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=write",mdxType:"CodeSample"}))}s.isMDXComponent=!0}}]);