(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return b})),o.d(t,"metadata",(function(){return n})),o.d(t,"toc",(function(){return i})),o.d(t,"default",(function(){return p}));var c=o(3),r=o(7),a=(o(0),o(421)),s=o(56),b={title:"SEEK operator"},n={unversionedId:"SEEK_operator",id:"SEEK_operator",isDocsHomePage:!1,title:"SEEK operator",description:"The SEEK operator creates an action that seeks specified objects on a form.",source:"@site/docs\\SEEK_operator.md",slug:"/SEEK_operator",permalink:"/docusaurustest/docs/SEEK_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/SEEK_operator.md",version:"current",sidebar:"docs",previous:{title:"RETURN",permalink:"/docusaurustest/docs/RETURN"},next:{title:"SHOW operator",permalink:"/docusaurustest/docs/SHOW_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:i};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(c.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"SEEK")," operator creates an ",Object(a.b)("a",Object(c.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that ",Object(a.b)("a",Object(c.a)({parentName:"p"},{href:"/docusaurustest/docs/Search_SEEK"}),"seeks specified objects")," on a ",Object(a.b)("a",Object(c.a)({parentName:"p"},{href:"/docusaurustest/docs/Forms"}),"form"),"."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(c.a)({parentName:"pre"},{}),"SEEK [FIRST | LAST] formObjectId = expr\nSEEK [FIRST | LAST] formGroupObjectId [OBJECTS formObject1 = expr1, ..., formObjectK = exprk]\nSEEK NULL formGroupObjectId\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"SEEK")," operator creates an action that changes the current objects on a form. There are two forms of this operator. In the first form the required value of a single object on a form is specified (this object may be a part of an object group), in the second form specific object group and the required values for certain objects of this group are specified (these objects shall be called ",Object(a.b)("em",{parentName:"p"},"seek objects"),")"),Object(a.b)("p",null,"If the seek object group contains objects other than seek objects, for these objects (which shall be called\xa0",Object(a.b)("em",{parentName:"p"},"additional"),") the object collection that will be selected as current is determined by the options\xa0",Object(a.b)("strong",{parentName:"p"},"FIRST"),"\xa0and\xa0",Object(a.b)("strong",{parentName:"p"},"LAST"),"."),Object(a.b)("p",null,"If the required object collection is not found for the search objects, the current object collection will be the closest to the required one. The direction in which this closest object collection will be selected is also determined by the options ",Object(a.b)("strong",{parentName:"p"},"FIRST")," and ",Object(a.b)("strong",{parentName:"p"},"LAST"),"."),Object(a.b)("p",null,"Also, in the second form of the operator (when a group of objects is specified) it is possible to reset all objects of the specified group to\xa0",Object(a.b)("strong",{parentName:"p"},"NULL"),". In this case, the seek direction is not applicable/not specified."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"FIRST")),Object(a.b)("p",null,"Keyword. If specified, the current set of objects for:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"additional objects will be the ",Object(a.b)("u",null,"first"),"\xa0matching collection, selected in accordance with the specified order.\xa0"),Object(a.b)("li",{parentName:"ul"},"main objects, if the required object collection is not found,\xa0will be the ",Object(a.b)("u",null,"next")," closest collection, selected in accordance with the specified order.\xa0")),Object(a.b)("p",null,"This is the default value.\xa0*  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"})),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"LAST")),Object(a.b)("p",null,"Keyword. If specified, the current set of objects for:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"additional objects will be the ",Object(a.b)("u",null,"last"),"matching collection, selected in accordance with the specified order.\xa0"),Object(a.b)("li",{parentName:"ul"},"main objects, if the required object collection is not found,\xa0will be the ",Object(a.b)("u",null,"previous"),"\xa0closest collection, selected in accordance with the specified order.\xa0")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"NULL")),Object(a.b)("p",null,"Keyword. If specified, the current values of the objects of the specified object group are set as equal to ",Object(a.b)("strong",{parentName:"p"},"NULL"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"formObjectId")),Object(a.b)("p",null,"Global\xa0",Object(a.b)("a",Object(c.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#groupobjectid-broken"}),"form object ID")," for which the required value is specified."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"expr")),Object(a.b)("p",null,"An ",Object(a.b)("a",Object(c.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expression")," whose value is the required value of the form object."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"formGroupObjectId")),Object(a.b)("p",null,"A global\xa0",Object(a.b)("a",Object(c.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#groupobjectid-broken"}),"ID for an object group")," for whose objects required values are specified."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"formObject1 ... \xa0formObjectK")),Object(a.b)("p",null,"List of form object names. May contain only a part of the objects of the specified object group. An object name is defined by a ",Object(a.b)("a",Object(c.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#id-broken"}),"simple ID"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"expr1 ... exprk")),Object(a.b)("p",null,"A list of expressions whose values are the required values of the corresponding objects in the specified group of objects."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(s.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=ActionSample&block=seek",mdxType:"CodeSample"}),Object(a.b)("p",null,"**",Object(a.b)("br",{parentName:"p"}),"\n","**"))}p.isMDXComponent=!0}}]);