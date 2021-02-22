(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{136:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return i})),o.d(t,"toc",(function(){return p})),o.d(t,"default",(function(){return u}));var n=o(3),r=o(7),a=(o(0),o(421)),s=o(56),c={title:"CASE operator"},i={unversionedId:"CASE_operator",id:"CASE_operator",isDocsHomePage:!1,title:"CASE operator",description:"The CASE operator\xa0 creates a property that\xa0selects\xa0a result by condition.",source:"@site/docs\\CASE_operator.md",slug:"/CASE_operator",permalink:"/docusaurustest/docs/CASE_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CASE_operator.md",version:"current",sidebar:"docs",previous:{title:"AGGR operator",permalink:"/docusaurustest/docs/AGGR_operator"},next:{title:"CLASS operator",permalink:"/docusaurustest/docs/CLASS_operator"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"CASE")," operator\xa0 creates a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Properties"}),"property")," that\xa0",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE"}),"selects"),"\xa0a result by condition."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Syntax"),"\xa0"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"CASE [exclusionType]\n    WHEN condition1 THEN result1\n    ...\n    WHEN conditionN THEN resultN\n    [ELSE elseResult]\n")),Object(a.b)("p",null,"Description"),Object(a.b)("p",null,"The CASE operator creates a property that implements a conditional selection. Selection conditions are defined using the properties specified in the WHEN block. If the selection condition is met, the property value will be the value of the property specified in the corresponding THEN block. If none of the conditions are met, the property value will be the property value in the ELSE block, if that block is specified (if not, NULL is returned)."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\xa0*"),"exclusionType*"),Object(a.b)("p",null,"**\xa0**",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE#mutual-exclusion-of-conditions"}),"Type of mutual exclusion"),". Determines whether several conditions can be met simultaneously for a certain set of parameters. It is\xa0specified by one of the keywords:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"EXCLUSIVE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"OVERRIDE"))),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0type indicates that none of the conditions listed can be met simultaneously. The\xa0",Object(a.b)("strong",{parentName:"p"},"OVERRIDE"),"\xa0type allows several conditions to be met simultaneously, in this case, the property value will be the value of the value property for the first met condition.\xa0"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"OVERRIDE")," type is used by default."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"condition1 ... conditionN")),Object(a.b)("p",null,"\xa0",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"Expressions")," whose values define the selection condition.\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"result1 ... resultN")),Object(a.b)("p",null,"Expressions whose values define the selection result."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"elseResult")),Object(a.b)("p",null,"An expression whose value defines the property value if none of the conditions are met."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(s.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=OperatorPropertySample&block=case",mdxType:"CodeSample"}))}u.isMDXComponent=!0}}]);