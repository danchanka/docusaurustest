(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{266:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return d}));var r=a(3),o=a(7),s=(a(0),a(421)),c=a(56),n={title:"NEW operator"},p={unversionedId:"NEW_operator",id:"NEW_operator",isDocsHomePage:!1,title:"NEW operator",description:"The NEW operator creates an\xa0action that creates objects\xa0of the specified class.",source:"@site/docs\\NEW_operator.md",slug:"/NEW_operator",permalink:"/docusaurustest/docs/NEW_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/NEW_operator.md",version:"current",sidebar:"docs",previous:{title:"MULTI operator (action)",permalink:"/docusaurustest/docs/MULTI_operator_action"},next:{title:"NESTEDSESSION operator",permalink:"/docusaurustest/docs/NESTEDSESSION_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:i};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The ",Object(s.b)("strong",{parentName:"p"},"NEW")," operator creates an\xa0",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/New_object_NEW"}),"creates objects"),"\xa0of the specified ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Classes"}),"class"),"."),Object(s.b)("h3",{id:"syntax"},"Syntax"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"NEW className [WHERE whereExpr] [TO propertyId(prm1, ..., prmN)]\n")),Object(s.b)("h3",{id:"description"},"Description"),Object(s.b)("p",null,"The ",Object(s.b)("strong",{parentName:"p"},"NEW")," operator creates an action which creates objects of the specified class and writes them as the returned values of certain ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Properties"}),"properties"),".\xa0This operator\xa0can add its local\xa0parameters\xa0when defining a condition in the WHERE block. These parameters correspond to the objects being iterated for which the object will be created and are not parameters of the created action.\xa0"),Object(s.b)("p",null,"The ",Object(s.b)("strong",{parentName:"p"},"TO")," block is used to define the ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_properties_DATA"}),"data property")," to which value the created object is written.\xa0"),Object(s.b)("p",null,"There is a special option with the same name (",Object(s.b)("strong",{parentName:"p"},"NEW"),") in the\xa0",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/FOR_operator"}),Object(s.b)("strong",{parentName:"a"},"FOR"),"\xa0operator")," for creating objects, and it is recommended to use it when possible."),Object(s.b)("h3",{id:"parameters"},"Parameters"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"className")),Object(s.b)("p",null,"Name of the ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/User_classes"}),"custom"),"\xa0class for the created objects. ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#cid-broken"}),"Composite ID"),"."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"whereExpr")),Object(s.b)("p",null,"An ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expression")," which value is the condition of the created action.\xa0In this expression you can both access already declared parameters and declare new local parameters."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"propertyId")),Object(s.b)("p",null,"An ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#propertyid-broken"}),"ID of the property")," to which value the created objects are written.\xa0If the property is not specified, then:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"if the condition is not defined, it is automatically set to\xa0 ",Object(s.b)("strong",{parentName:"li"},"System.addedObject","[","]")),Object(s.b)("li",{parentName:"ul"},"if the condition is defined, the created objects are not written anywhere")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"prm1, ..., prmN")),Object(s.b)("p",null,"A list of data property parameter names. You can use only the local parameters that were added in the\xa0",Object(s.b)("strong",{parentName:"p"},"WHERE")," block. The number of parameters in the list must be equal to the number of parameters of the data property.\xa0"),Object(s.b)("h3",{id:"examples"},"Examples"),Object(s.b)(c.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=ActionSample&block=new",mdxType:"CodeSample"}))}d.isMDXComponent=!0}}]);