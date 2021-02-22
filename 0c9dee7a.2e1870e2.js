(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return d}));var a=r(3),o=r(7),n=(r(0),r(421)),s=r(56),p={title:"CHANGE operator"},c={unversionedId:"CHANGE_operator",id:"CHANGE_operator",isDocsHomePage:!1,title:"CHANGE operator",description:"The CHANGE operator creates an action that changes properties.",source:"@site/docs\\CHANGE_operator.md",slug:"/CHANGE_operator",permalink:"/docusaurustest/docs/CHANGE_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CHANGE_operator.md",version:"current",sidebar:"docs",previous:{title:"ASK operator",permalink:"/docusaurustest/docs/ASK_operator"},next:{title:"BREAK operator",permalink:"/docusaurustest/docs/BREAK_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:i};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"CHANGE")," operator creates an ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Property_change_CHANGE"}),"changes properties"),"."),Object(n.b)("h3",{id:"syntax"},"Syntax"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),"[CHANGE] propertyId(expr1, ..., exprN) <- valueExpr [WHERE whereExpr]\n")),Object(n.b)("h3",{id:"description"},"Description"),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"CHANGE"),"\xa0operator creates an action that changes a property when a condition is met. This operator \xa0can add its own local parameters when specifying the property whose value is to be changed. These parameters correspond to the objects being iterated and are not parameters of the created action.\xa0"),Object(n.b)("p",null,"The condition is defined by the ",Object(n.b)("strong",{parentName:"p"},"WHERE")," block. If this block is not specified, it is assumed that the condition is always met.\xa0"),Object(n.b)("p",null,"The keyword ",Object(n.b)("strong",{parentName:"p"},"CHANGE"),", which defines an operator, may be omitted.**\xa0**"),Object(n.b)("h3",{id:"parameters"},"Parameters"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"propertyId")),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#propertyid-broken"}),"ID of the property")," whose value is being changed. The property must be created by certain operators so that its value can be changed. You can change the values of properties created using the operators ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",Object(a.a)({parentName:"strong"},{href:"/docusaurustest/docs/DATA_operator"}),"DATA"))," , ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",Object(a.a)({parentName:"strong"},{href:"/docusaurustest/docs/ABSTRACT_operator"}),"ABSTRACT")),", and ",Object(n.b)("strong",{parentName:"p"},"LOCAL"),"."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"expr1, ..., exprN")),Object(n.b)("p",null,"A list of expressions or typed parameters defining arguments to the property being changed. When using typed parameters, you can both access already declared parameters and declare new local parameters. When using expressions, new local parameters cannot be added.\xa0The number of expressions in this list must equal to the number of parameters of the property being changed.\xa0"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"valueExpr")),Object(n.b)("p",null,"The expression to whose value the property value must be changed."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"whereExpr")),Object(n.b)("p",null,"An expression whose value is a condition for the change being created. If not specified, it is considered equal to ",Object(n.b)("strong",{parentName:"p"},"TRUE"),"."),Object(n.b)("h3",{id:"examples"},"Examples"),Object(n.b)(s.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=ActionSample&block=assign",mdxType:"CodeSample"}))}d.isMDXComponent=!0}}]);