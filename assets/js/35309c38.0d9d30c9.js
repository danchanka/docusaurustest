(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var r=a(3),o=a(7),n=(a(0),a(424)),s=a(57),p={title:"AGGR operator"},c={unversionedId:"AGGR_operator",id:"AGGR_operator",isDocsHomePage:!1,title:"AGGR operator",description:"The\xa0AGGR\xa0operator creates an aggregation.",source:"@site/docs/AGGR_operator.md",slug:"/AGGR_operator",permalink:"/docusaurustest/docs/AGGR_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/AGGR_operator.md",version:"current",sidebar:"docs",previous:{title:"ACTIVE TAB operator",permalink:"/docusaurustest/docs/ACTIVE_TAB_operator"},next:{title:"CASE operator",permalink:"/docusaurustest/docs/CASE_operator"}},i=[{value:"<strong>Description</strong>",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],g={toc:i};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},g,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The\xa0",Object(n.b)("strong",{parentName:"p"},"AGGR"),"\xa0operator creates an ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Aggregations"},"aggregation"),"."),Object(n.b)("p",null,"*",Object(n.b)("strong",{parentName:"p"},"*Syntax\xa0"),Object(n.b)("br",{parentName:"p"}),"\n","**"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"AGGR aggrClass WHERE aggrExpr\n")),Object(n.b)("h3",{id:"description"},Object(n.b)("strong",{parentName:"h3"},"Description")),Object(n.b)("p",null,"In addition to the property that is the result of this operator and contains the value of the aggregated object, for each parameter the ",Object(n.b)("strong",{parentName:"p"},"AGGR")," operator also creates a data property with one parameter, whose ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/User_classes"},"class")," is equal to the class of the aggregated object. The value class and name of this property are equal to the class and name of the parameter for which this property is created. Accordingly, when creating an aggregated object, the value of the parameter for which the aggregated object is created is automatically written to this property."),Object(n.b)("div",{className:"admonition admonition-info alert alert--info"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"Creating an aggregation is in many ways similar to the following instructions (example for 2 parameters):"),Object(n.b)("pre",{parentName:"div"},Object(n.b)("code",{parentName:"pre"},"prm1 = DATA class1 (aggrClass);\nprm2 = DATA class2 (aggrClass);\nresult = GROUP AGGR aggrClass aggrObject BY prm1(aggrObject), prm2(aggrObject);\n\n// if aggrExpr becomes non-null, create an object of class aggrClass (equivalent to whereExpr => result (prm1, prm2) RESOLVE LEFT)\nWHEN SET(aggrExpr) AND NOT result(prm1, prm2)\n    NEW aggrObject = aggrClass {\n        prm1(aggrObject) <- prm1;\n        prm2(aggrObject) <- prm2;\n    }\n\n// if aggrExpr becomes null, remove an object (equivalent to aggrClass aggrObject IS aggrClass => result(prm1(aggrObject),prm2(aggrObject)) RESOLVE RIGHT)\nWHEN aggrClass aggrObject IS aggrClass AND DROPPED(result(prm1(aggrObject),prm2(aggrObject))) DO\n    DELETE aggrObject;\n")),Object(n.b)("p",{parentName:"div"},"but it is a more declarative and readable instruction, and therefore using it is recommended"))),Object(n.b)("p",null,"Unlike other context-dependent operators, the ",Object(n.b)("strong",{parentName:"p"},"AGGR")," operator cannot be used in\xa0",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Expression"},"expressions")," inside other operators (in this sense it is more like context-independent operators), or in the ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/JOIN_operator"},Object(n.b)("strong",{parentName:"a"},"JOIN")," operator"),"\xa0(inside\xa0","[","=\xa0","]",")"),Object(n.b)("h3",{id:"parameters"},"Parameters"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"aggrClass")),Object(n.b)("p",null,"The value class of the aggregated object."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"aggrExpr")),Object(n.b)("p",null,"An ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Expression"},"expression"),"\xa0whose value defines an aggregated property."),Object(n.b)("h3",{id:"examples"},"Examples"),Object(n.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=AggregationSample&block=aggr",mdxType:"CodeSample"}))}b.isMDXComponent=!0}}]);