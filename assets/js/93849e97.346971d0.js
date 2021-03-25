(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{287:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(424)),c=n(57),i={title:"ACTION instruction: Overview",sidebar_label:"Overview"},s={unversionedId:"ACTION_instruction",id:"ACTION_instruction",isDocsHomePage:!1,title:"ACTION instruction: Overview",description:"The ACTION instruction\xa0creates an\xa0action.",source:"@site/docs/ACTION_instruction.md",slug:"/ACTION_instruction",permalink:"/docusaurustest/docs/ACTION_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/ACTION_instruction.md",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Property options",permalink:"/docusaurustest/docs/Property_options"},next:{title:"Action operator: Overview",permalink:"/docusaurustest/docs/Action_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ACTION")," instruction\xa0creates an\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"action"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[ACTION] name [caption] [(param1, ..., paramN)] { operator } [options];\n[ACTION] name [caption] [(param1, ..., paramN)] contextIndependentOperator [options];\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ACTION\xa0"),"instruction declares a new action and adds it to the current\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Modules"},"module"),"."),Object(o.b)("p",null,"The instruction has two forms: the first form creates an action using a\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Action_operator#contextdependent"},"context-dependent"),"\xa0action operator, the second form creates a\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Property_operators#contextindependent"},"context-independent")," one."),Object(o.b)("p",null,"Also, when declaring an action, a set of its options can be specified. \xa0\xa0"),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name\xa0")),Object(o.b)("p",null,"Action name.\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#id-broken"},"Simple ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"caption")),Object(o.b)("p",null,"Action caption.\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Literals#strliteral-broken"},"String literal"),". If no caption is defined, the action name will be its caption. \xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(o.b)("p",null,"List of parameters. Each of them is defined by a\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#paramid-broken"},"typed parameter"),"\xa0These parameters can be later used in the action operator describing the action being created (as well as in some options)."),Object(o.b)("p",null,"If parameters are not defined explicitly, they will be automatically calculated when the operator is processed. The order of the parameters will match the order of their appearance in the operator. It is recommended to explicitly define action parameters. This will help find typos and other errors in the declaration (for example, a mismatch of the number of defined parameters with the number of parameters of the created action)."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"operator")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Action_operator#contextdependent"},"context-dependent"),"\xa0action operator describing and creating an action.\xa0You can use the parameters defined in this instruction (if any) as operator parameters."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"contextIndependentOperator")),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Action_operator#contextindependent"},"context-independent"),"\xa0action operator describing and creating an action.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"options")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Action_options"},"Action options")," .\xa0"),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample",mdxType:"CodeSample"}))}u.isMDXComponent=!0}}]);