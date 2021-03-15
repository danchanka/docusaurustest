(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),c=(n(0),n(423)),i=n(424),r={title:"CASE operator (action)"},s={unversionedId:"CASE_operator_action",id:"CASE_operator_action",isDocsHomePage:!1,title:"CASE operator (action)",description:"The\xa0CASE\xa0operator creates an action that implements branching.",source:"@site/docs/CASE_operator_action.md",slug:"/CASE_operator_action",permalink:"/docusaurustest/ru/docs/CASE_operator_action",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CASE_operator_action.md",version:"current",sidebar:"docs",previous:{title:"CANCEL operator",permalink:"/docusaurustest/ru/docs/CANCEL_operator"},next:{title:"CHANGECLASS operator",permalink:"/docusaurustest/ru/docs/CHANGECLASS_operator"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The\xa0",Object(c.b)("strong",{parentName:"p"},"CASE"),"\xa0operator creates an ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Actions"},"action")," that implements ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Branching_CASE_IF_MULTI"},"branching"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Syntax"),"\xa0"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"CASE [exclusionType]\n    WHEN condition1 THEN action1\n    ...\n    WHEN conditionN THEN actionN\n    [ELSE elseAction]\n")),Object(c.b)("p",null,"Description"),Object(c.b)("p",null,"The\xa0CASE\xa0operator creates an action that executes one of the actions passed to it depending on whether the selection conditions are met. Selection conditions are defined using the properties specified in the\xa0WHEN block. If a selection condition is met, the action specified in the corresponding\xa0THEN block is executed. If none of the conditions is met, the action specified in the\xa0ELSE block will be executed if this block is specified."),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,"*",Object(c.b)("em",{parentName:"p"},"\xa0** "),"exclusionType*"),Object(c.b)("p",null,"**\xa0**",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Branching_CASE_IF_MULTI#exclusive"},"Type of mutual exclusion"),". Determines whether several conditions can be met simultaneously for a certain set of parameters. It is\xa0specified by one of the keywords:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"EXCLUSIVE")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"OVERRIDE"))),Object(c.b)("p",null,"The\xa0",Object(c.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0type indicates that none of the conditions listed can be met simultaneously. The\xa0",Object(c.b)("strong",{parentName:"p"},"OVERRIDE"),"\xa0type allows several conditions to be met simultaneously, in this case, the action corresponding to the first met condition is executed"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"OVERRIDE"),"\xa0type is used by default."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"condition1 ... conditionN")),Object(c.b)("p",null,"\xa0",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Expression"},"Expressions")," whose values determine the selection conditions.\xa0"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"action1 ... actionN")),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Action_operator#contextdependent"},"Context-dependent operators")," that describe actions that may be called when the corresponding condition is met."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"elseAction")),Object(c.b)("p",null,"A context-dependent operator that describes an action to be executed if none of the conditions is met.\xa0"),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)(i.a,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=case",mdxType:"CodeSample"}))}u.isMDXComponent=!0}}]);