(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{277:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var r=a(3),o=a(7),s=(a(0),a(423)),n=a(424),p={title:"ASK operator"},c={unversionedId:"ASK_operator",id:"ASK_operator",isDocsHomePage:!1,title:"ASK operator",description:"The ASK\xa0operator creates an action that shows the user a\xa0message in a\xa0dialog form.",source:"@site/docs/ASK_operator.md",slug:"/ASK_operator",permalink:"/docusaurustest/ru/docs/ASK_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/ASK_operator.md",version:"current",sidebar:"docs",previous:{title:"APPLY operator",permalink:"/docusaurustest/ru/docs/APPLY_operator"},next:{title:"CHANGE operator",permalink:"/docusaurustest/ru/docs/CHANGE_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],u={toc:i};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The ",Object(s.b)("strong",{parentName:"p"},"ASK"),"\xa0operator creates an action that shows the user a\xa0message in a\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Show_message_MESSAGE_ASK#dialog"},"dialog form"),"."),Object(s.b)("h3",{id:"syntax"},"Syntax"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"ASK expression\xa0\n[[alias =] YESNO]\n[DO actionOperator [ELSE elseOperator]]\n")),Object(s.b)("h3",{id:"description"},"Description"),Object(s.b)("p",null,"The\xa0",Object(s.b)("strong",{parentName:"p"},"ASK"),"\xa0operator creates an action that asks the user for confirmation/asks the user a question."),Object(s.b)("h3",{id:"parameters"},"Parameters"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"expression")),Object(s.b)("p",null,"An expression whose value is a message string. If the value is ",Object(s.b)("strong",{parentName:"p"},"NULL"),", the question will not be asked, but the action will be executed."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"YESNO")),Object(s.b)("p",null,"If specified, the user is asked a question (Yes/No)"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"alias")),Object(s.b)("p",null,"The name of the local parameter in which the user's response to the question will be written (Yes = ",Object(s.b)("strong",{parentName:"p"},"TRUE"),", No = ",Object(s.b)("strong",{parentName:"p"},"NULL"),").\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/IDs#id-broken"},"Simple ID"),"."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"actionOperator")),Object(s.b)("p",null,"A ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Action_operator#contextdependent"},"context-dependent action operator")," that is executed if the input was completed successfully. Both upper parameters and the user response parameter (if the question was Yes/No) can be used as parameters"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"elseActionOperator")),Object(s.b)("p",null,"A ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Action_operator#contextdependent"},"context-dependent action operator")," that is executed if the input was cancelled. Only upper parameters can be used as parameters."),Object(s.b)("h3",{id:"example"},"Example"),Object(s.b)(n.a,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=ask",mdxType:"CodeSample"}))}b.isMDXComponent=!0}}]);