(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{218:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var o=r(3),a=r(7),s=(r(0),r(423)),n=r(57),p={title:"MULTI operator"},c={unversionedId:"MULTI_operator",id:"MULTI_operator",isDocsHomePage:!1,title:"MULTI operator",description:"The MULTI operator creates a property that implements\xa0selection of\xa0one of the values (polymorphic form).",source:"@site/docs/MULTI_operator.md",slug:"/MULTI_operator",permalink:"/docusaurustest/docs/MULTI_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/MULTI_operator.md",version:"current",sidebar:"docs",previous:{title:"MIN operator",permalink:"/docusaurustest/docs/MIN_operator"},next:{title:"OVERRIDE operator",permalink:"/docusaurustest/docs/OVERRIDE_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The ",Object(s.b)("strong",{parentName:"p"},"MULTI")," operator creates a ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Properties"},"property")," that implements\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE#single"},"selection")," of\xa0one of the values (polymorphic form)."),Object(s.b)("h3",{id:"syntax"},"Syntax"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"MULTI expr1, ..., exprN [exclusionType]\n")),Object(s.b)("h3",{id:"description"},"Description"),Object(s.b)("p",null,"The ",Object(s.b)("strong",{parentName:"p"},"MULTI"),"\xa0operator creates a property which value will be the value of one of the properties specified in the operator. The property selection condition\xa0is that the parameters match this property ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/CLASS_operator"},"signature"),".\xa0"),Object(s.b)("h3",{id:"parameters"},"Parameters"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"expr1, ..., exprN"),"\xa0**\xa0**\xa0"),Object(s.b)("p",null,"A list of ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Expression"},"expressions")," defining the properties from which the selection is made."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"exclusionType")),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE#exclusive"},"Type of mutual exclusion"),". Determines whether several conditions for the property selection can be met simultaneously with a certain set of parameters. It is\xa0specified by one of the keywords:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"EXCLUSIVE")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"OVERRIDE"))),Object(s.b)("p",null,"The\xa0",Object(s.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0type indicates that the conditions for the property selection\xa0cannot be met simultaneously. The\xa0",Object(s.b)("strong",{parentName:"p"},"OVERRIDE"),"\xa0type allows several conditions to be met simultaneously, in which case the first property in the list which selection condition is met will be selected.\xa0"),Object(s.b)("p",null,"The ",Object(s.b)("strong",{parentName:"p"},"EXCLUSIVE")," type is used by default."),Object(s.b)("h3",{id:"examples"},"Examples"),Object(s.b)(n.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=multi",mdxType:"CodeSample"}),Object(s.b)("p",null,"**",Object(s.b)("br",{parentName:"p"}),"\n","**"))}u.isMDXComponent=!0}}]);