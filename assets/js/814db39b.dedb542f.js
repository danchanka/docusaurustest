(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{260:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var r=a(3),s=a(7),o=(a(0),a(424)),c=a(57),n={title:"CHANGECLASS operator"},p={unversionedId:"CHANGECLASS_operator",id:"CHANGECLASS_operator",isDocsHomePage:!1,title:"CHANGECLASS operator",description:"The CHANGECLASS operator creates an action that changes objects classes.",source:"@site/docs/CHANGECLASS_operator.md",slug:"/CHANGECLASS_operator",permalink:"/docusaurustest/docs/CHANGECLASS_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CHANGECLASS_operator.md",version:"current",sidebar:"docs",previous:{title:"CASE operator (action)",permalink:"/docusaurustest/docs/CASE_operator_action_"},next:{title:"INTERNAL operator",permalink:"/docusaurustest/docs/INTERNAL_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:i};function b(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"CHANGECLASS")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"action")," that ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Class_change_CHANGECLASS_DELETE_"},"changes objects classes"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"CHANGECLASS expr TO className [WHERE whereExpr]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"CHANGECLASS")," operator creates an action that changes the class of objects for which a certain condition is met. This operator can add its local parameter, which will correspond to the objects being iterated. In this case, the\xa0",Object(o.b)("strong",{parentName:"p"},"WHERE"),"\xa0block is required.\xa0This local parameter will not be a parameter of the action being created."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expr")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Expression"},"expression"),"\xa0or ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#paramid-broken"},"typed parameter"),".\xa0You can either use an already declared parameter as a typed parameter, or declare a new local parameter. When using an expression, new local parameters cannot be added."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"className")),Object(o.b)("p",null,"The name of the class to which you want to change the object classes. A ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#cid-broken"},"composite ID"),", since the class must be a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/User_classes"},"custom")," class."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"whereExpr")),Object(o.b)("p",null,"An expression\xa0whose value is a condition for the created action. If not specified, it is considered equal to ",Object(o.b)("strong",{parentName:"p"},"TRUE"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=changeclass",mdxType:"CodeSample"}))}b.isMDXComponent=!0}}]);