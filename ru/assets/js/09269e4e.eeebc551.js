(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var a=r(3),o=r(7),n=(r(0),r(423)),c=r(424),s={title:"WHILE operator"},i={unversionedId:"WHILE_operator",id:"WHILE_operator",isDocsHomePage:!1,title:"WHILE operator",description:"The WHILE operator creates an action that implements a recursive loop.",source:"@site/docs/WHILE_operator.md",slug:"/WHILE_operator",permalink:"/docusaurustest/ru/docs/WHILE_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/WHILE_operator.md",version:"current",sidebar:"docs",previous:{title:"TRY operator",permalink:"/docusaurustest/ru/docs/TRY_operator"},next:{title:"WRITE operator",permalink:"/docusaurustest/ru/docs/WRITE_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"WHILE")," operator creates an ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Actions"},"action")," that implements a ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Recursive_loop_WHILE"},"recursive loop"),"."),Object(n.b)("h3",{id:"syntax"},"Syntax"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"WHILE expression [ORDER [DESC] orderExpr1, ..., orderExprN]\n[NEW [alias =] className]\nDO action\n")),Object(n.b)("h3",{id:"description"},"Description"),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"WHILE\xa0")," operator creates an action implementing a recursive loop. This operator \xa0can add its local\xa0parameters\xa0while defining a condition. These parameters correspond to the objects being iterated and are not parameters of the created action. You can also use the\xa0NEW\xa0 block to specify the name of the\xa0class whose object will be created for each object collection meeting the condition.\xa0The name of this object needs to be specified. This name will be used as the name of the local parameter that the created object will be written to."),Object(n.b)("p",null,"The object iteration order in the\xa0WHILE\xa0operator can be specified with the ORDER\xa0block."),Object(n.b)("h3",{id:"parameters"},"Parameters"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"expression")),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Expression"},"Expression")," defining a condition. In this expression, you can both access already declared parameters and declare new local parameters.\xa0"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"DESC")),Object(n.b)("p",null,"Keyword. Specifies a reverse iteration order for object collections.\xa0"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"orderExpr1, ..., orderExprK")),Object(n.b)("p",null,"A list of expressions that define the order in which object collections will be iterated over. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc. If the list is undefined, iteration is performed in an arbitrary order."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"alias")),Object(n.b)("p",null,"The name of the local parameter that will correspond to the object being created.\xa0",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/IDs#id-broken"},"Simple ID"),"."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"className")),Object(n.b)("p",null,"The name of the class of the object to create. Defined by a\xa0",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/IDs#classid-broken"},"class ID"),"."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"action")),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Action_operator#contextdependent"},"Context-dependent action operator")," describing the action being executed."),Object(n.b)("h3",{id:"examples"},"Examples"),Object(n.b)(c.a,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=while",mdxType:"CodeSample"}),Object(n.b)("p",null,"**",Object(n.b)("br",{parentName:"p"}),"\n","**"))}b.isMDXComponent=!0}}]);