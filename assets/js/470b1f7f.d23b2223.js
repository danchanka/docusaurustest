(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{180:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return p})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return i})),o.d(t,"default",(function(){return m}));var a=o(3),n=o(7),s=(o(0),o(424)),r=o(57),p={title:"How-to: Property extension"},c={unversionedId:"How-to_Property_extension",id:"How-to_Property_extension",isDocsHomePage:!1,title:"How-to: Property extension",description:"The classic approach for implementing polymorphism can look as follows:",source:"@site/docs/How-to_Property_extension.md",slug:"/How-to_Property_extension",permalink:"/docusaurustest/docs/How-to_Property_extension",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_Property_extension.md",version:"current",sidebar:"docs",previous:{title:"How-to: Class extension",permalink:"/docusaurustest/docs/How-to_Class_extension"},next:{title:"How-to: Action extension",permalink:"/docusaurustest/docs/How-to_Action_extension"}},i=[],l={toc:i};function m(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The classic approach for implementing polymorphism can look as follows:"),Object(s.b)("p",null,"Let's create an abstract class ",Object(s.b)("strong",{parentName:"p"},"Shape")," with an abstract property ",Object(s.b)("strong",{parentName:"p"},"square"),":"),Object(s.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCasePropertyShape&block=shape",mdxType:"CodeSample"}),Object(s.b)("p",null,"Now, let's create classes ",Object(s.b)("strong",{parentName:"p"},"Rectangle\xa0"),"and ",Object(s.b)("strong",{parentName:"p"},"Circle")," inherited from ",Object(s.b)("strong",{parentName:"p"},"Shape"),":"),Object(s.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCasePropertyShape&block=concrete",mdxType:"CodeSample"}),Object(s.b)("p",null,"Define the implementation of the abstract property ",Object(s.b)("strong",{parentName:"p"},"square\xa0")," for the created classes:"),Object(s.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCasePropertyShape&block=extendsimple",mdxType:"CodeSample"}),Object(s.b)("p",null,"Let's assume that we need to make it so that in certain cases we can override the method of calculating the area for the ",Object(s.b)("strong",{parentName:"p"},"Circle"),' class. In this case, we can use an abstract property, whose implementation can be changed in a different module, to add a kind of "entry point" to the line defining the implementation of area for a circle :'),Object(s.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCasePropertyShape&block=extendover",mdxType:"CodeSample"}),Object(s.b)("p",null,"If the ",Object(s.b)("strong",{parentName:"p"},"overSquareCircle")," property is not implemented in any module, its value will always be ",Object(s.b)("strong",{parentName:"p"},"NULL")," and the base area calculation mechanism will be used. To change the calculation method to be used, you can define a different implementation in a certain ",Object(s.b)("strong",{parentName:"p"},"MyShape")," module."),Object(s.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCasePropertyMyShape",mdxType:"CodeSample"}),Object(s.b)("p",null,"Note that you can use any other expressions instead of the ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/OVERRIDE_operator"},"OVERRIDE operator"),". In particular, ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Arithmetic_operators_+_-_..._"},"(+) and (-)")," may be the most frequently used operators."))}m.isMDXComponent=!0}}]);