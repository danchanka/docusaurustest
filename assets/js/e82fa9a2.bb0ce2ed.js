(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{392:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(7),s=(a(0),a(424)),p=a(57),i={title:"EMAIL operator"},o={unversionedId:"EMAIL_operator",id:"EMAIL_operator",isDocsHomePage:!1,title:"EMAIL operator",description:"The EMAIL operator creates an action that sends email.",source:"@site/docs/EMAIL_operator.md",slug:"/EMAIL_operator",permalink:"/docusaurustest/docs/EMAIL_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/EMAIL_operator.md",version:"current",sidebar:"docs",previous:{title:"DIALOG operator",permalink:"/docusaurustest/docs/DIALOG_operator"},next:{title:"EVAL operator",permalink:"/docusaurustest/docs/EVAL_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],b={toc:c};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The ",Object(s.b)("strong",{parentName:"p"},"EMAIL")," operator creates an ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"action")," that ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Send_mail_EMAIL_"},"sends email"),"."),Object(s.b)("h3",{id:"syntax"},"Syntax"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"EMAIL [FROM fromExpr]\xa0\n[SUBJECT subjExpr]\nrecipientType1 recipientExpr1\n...\nrecipientTypeN recipientExprN\n[BODY bodyExpr]\nATTACH attachFileExpr1 [NAME attachNameExpr1]\n...\nATTACH attachFileExprM [NAME attachNameExprM]\n")),Object(s.b)("h3",{id:"description"},"Description"),Object(s.b)("p",null,"The ",Object(s.b)("strong",{parentName:"p"},"EMAIL")," operator creates an action that sends emails.\xa0"),Object(s.b)("p",null,"It is assumed that the file extension\xa0is not specified in the attachment name, i.e. period (.) is also considered part of the file name. This extension is automatically determined\xa0similar to the\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/WRITE_operator#extension-broken"},Object(s.b)("strong",{parentName:"a"},"WRITE"),"\xa0operator"),"."),Object(s.b)("h3",{id:"parameters"},"Parameters"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"fromExpr")),Object(s.b)("p",null,"An ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Expression"},"expression")," which value determines the sender address.\xa0"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"subjExpr")),Object(s.b)("p",null,"An expression which value determines the email subject."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"recipientType1 ... recipientTypeN")),Object(s.b)("p",null,"Recipient types. N>=1. Each of them is specified by one of the keywords:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"TO")," - message recipient"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"\u0421\u0421")," - secondary message recipient to whom a copy is sent"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"BCC")," - message recipient whose address is not shown to other recipients")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"recipientExpr1 ... recipientExprN")),Object(s.b)("p",null,"Expressions which values determine the addresses of the message recipients."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"bodyExpr")),Object(s.b)("p",null,"An expression which value is the mail body. Can be either a string or file type."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"attachFileExpr1 ....\xa0"),"attachFileExprM**"),Object(s.b)("p",null,"Expressions which values are files attached to the message."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"attachNameExpr1 ...\xa0"),"attachNameExprM**"),Object(s.b)("p",null,"An expression which values determine the names of the attachments."),Object(s.b)("h3",{id:"example"},"Example"),Object(s.b)(p.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=email",mdxType:"CodeSample"}))}l.isMDXComponent=!0}}]);