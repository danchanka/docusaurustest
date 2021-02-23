(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{206:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var o=a(3),n=a(7),r=(a(0),a(421)),c=a(56),s={title:"FOR operator"},i={unversionedId:"FOR_operator",id:"FOR_operator",isDocsHomePage:!1,title:"FOR operator",description:"The FOR operator creates an action that implements loop.",source:"@site/docs\\FOR_operator.md",slug:"/FOR_operator",permalink:"/docusaurustest/docs/FOR_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/FOR_operator.md",version:"current",sidebar:"docs",previous:{title:"EXTERNAL operator",permalink:"/docusaurustest/docs/EXTERNAL_operator"},next:{title:"IF ... THEN operator (action)",permalink:"/docusaurustest/docs/IF_..._THEN_operator_action"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:p};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"FOR")," operator creates an ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that implements ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Loop_FOR"}),"loop"),"."),Object(r.b)("h3",{id:"syntax"},"Syntax"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"FOR expression [ORDER [DESC] orderExpr1, ..., orderExprN]\n[NEW [alias =] className]\nDO action\n[ELSE alternativeAction]\n")),Object(r.b)("p",null,"It is possible to include a ",Object(r.b)("strong",{parentName:"p"},"NEW")," block in the operator but not to specify a condition (considered equal to ",Object(r.b)("strong",{parentName:"p"},"TRUE"),"); in this case, the syntax is as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"NEW [alias =] className\naction\n")),Object(r.b)("h3",{id:"description"},"Description"),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"FOR")," operator creates an action that implements loop. This operator must add its local parameters when defining a condition. These parameters correspond to the objects being iterated and are not parameters of the created action. You can also use a ",Object(r.b)("strong",{parentName:"p"},"NEW")," block to specify the name of the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Classes"}),"class")," of the object that will be created for each object collection that meets the condition. The name of this object needs to be specified. This name will be used as the name of the local parameter that the created object will be written to."),Object(r.b)("p",null,"The object iteration order in the ",Object(r.b)("strong",{parentName:"p"},"FOR")," operator can be specified with an ",Object(r.b)("strong",{parentName:"p"},"ORDER")," block.\xa0If a new parameter is declared in the expressions that define the order (meaning that the parameter not met earlier in the ",Object(r.b)("strong",{parentName:"p"},"FOR")," option or in the upper context), the condition of all these expressions being non-\xa0",Object(r.b)("strong",{parentName:"p"},"NULL")," is automatically added."),Object(r.b)("p",null,"The main action is specified after the keyword ",Object(r.b)("strong",{parentName:"p"},"DO"),"; an alternative may be specified after the keyword ",Object(r.b)("strong",{parentName:"p"},"ELSE"),"."),Object(r.b)("p",null,"In the case when the operator contains a ",Object(r.b)("strong",{parentName:"p"},"NEW")," block, and no condition is specified, the main action will be called for the created object."),Object(r.b)("h3",{id:"parameters"},"Parameters"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"expression")),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"Expression")," defining a condition. In this expression, you can both access already declared parameters and declare new local parameters."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"DESC")),Object(r.b)("p",null,"Keyword. Specifies a reverse iteration order for object collections.\xa0"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"orderExpr1, ..., orderExprK")),Object(r.b)("p",null,"A list of expressions that define the order in which object collections will be iterated over. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc. If the list is undefined, iteration is performed in an arbitrary order."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"alias")),Object(r.b)("p",null,"The name of the local parameter that will correspond to the object being created. ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#id-broken"}),"Simple ID"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"className")),Object(r.b)("p",null,"The name of the class of the object to create. Defined by a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#classid-broken"}),"class ID"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"action")),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Action_operator#context-dependent-operators"}),"Context-dependent action operator")," describing the main action."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"alternativeAction")),Object(r.b)("p",null,"Context-dependent action operator defining an alternative action. Parameters added when defining the condition/creating the object cannot be used as parameters of this action."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=for",mdxType:"CodeSample"}))}l.isMDXComponent=!0}}]);