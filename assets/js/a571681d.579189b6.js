(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{302:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return p})),o.d(t,"default",(function(){return u}));var n=o(3),a=o(7),r=(o(0),o(423)),c=o(57),i={title:"MULTI operator (action)"},s={unversionedId:"MULTI_operator_action",id:"MULTI_operator_action",isDocsHomePage:!1,title:"MULTI operator (action)",description:"The\xa0MULTI\xa0operator creates an action\xa0that implements\xa0branching\xa0(polymorphic form).",source:"@site/docs/MULTI_operator_action.md",slug:"/MULTI_operator_action",permalink:"/docusaurustest/docs/MULTI_operator_action",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/MULTI_operator_action.md",version:"current",sidebar:"docs",previous:{title:"MESSAGE operator",permalink:"/docusaurustest/docs/MESSAGE_operator"},next:{title:"NEW operator",permalink:"/docusaurustest/docs/NEW_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],l={toc:p};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The\xa0",Object(r.b)("strong",{parentName:"p"},"MULTI"),"\xa0operator creates an ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"action"),"\xa0that implements\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Branching_CASE_IF_MULTI#polymorphic-form"},"branching"),"\xa0(polymorphic form)."),Object(r.b)("h3",{id:"syntax"},"Syntax"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"\xa0MULTI [exclusionType] action1, ..., actionN \n")),Object(r.b)("h3",{id:"description"},"Description"),Object(r.b)("p",null,"The\xa0",Object(r.b)("strong",{parentName:"p"},"MULTI"),"\xa0operator creates an action that executes one of the actions passed to it depending on whether the selection conditions are met.\xa0The property selection condition is\xa0that the parameters\xa0match this action\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/CLASS_operator"},"signature"),".\xa0"),Object(r.b)("h3",{id:"parameters"},"Parameters"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"exclusionType")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Branching_CASE_IF_MULTI#mutual-exclusion-of-conditions"},"Type of mutual exclusion"),". Determines whether several conditions for the action selection can be met simultaneously with a certain set of parameters. It is\xa0specified by one of the keywords:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"EXCLUSIVE")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"OVERRIDE"))),Object(r.b)("p",null,"The\xa0",Object(r.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0type indicates that the conditions for the action selection cannot be met simultaneously. The\xa0",Object(r.b)("strong",{parentName:"p"},"OVERRIDE"),"\xa0type allows several conditions to be met simultaneously, in which case the first action in the list which selection condition is met will be selected.\xa0"),Object(r.b)("p",null,"The\xa0",Object(r.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0type is used by default."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"action1, ..., actionN"),"\xa0**\xa0**\xa0"),Object(r.b)("p",null,"A list of ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Action_operator#context-dependent-operators"},"context dependent\xa0action operators")," which define the actions from which the selection is made."),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=multi",mdxType:"CodeSample"}))}u.isMDXComponent=!0}}]);