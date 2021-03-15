(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{178:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return p})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return i})),o.d(t,"default",(function(){return u}));var a=o(3),n=o(7),r=(o(0),o(423)),s=o(424),p={title:"How-to: Property extension"},c={unversionedId:"How-to_Property_extension",id:"How-to_Property_extension",isDocsHomePage:!1,title:"How-to: Property extension",description:"The classic approach for implementing polymorphism can look as follows:",source:"@site/docs/How-to_Property_extension.md",slug:"/How-to_Property_extension",permalink:"/docusaurustest/ru/docs/How-to_Property_extension",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_Property_extension.md",version:"current",sidebar:"docs",previous:{title:"How-to: Class extension",permalink:"/docusaurustest/ru/docs/How-to_Class_extension"},next:{title:"How-to: Action extension",permalink:"/docusaurustest/ru/docs/How-to_Action_extension"}},i=[],l={toc:i};function u(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The classic approach for implementing polymorphism can look as follows:"),Object(r.b)("p",null,"Let's create an abstract class ",Object(r.b)("strong",{parentName:"p"},"Shape")," with an abstract property ",Object(r.b)("strong",{parentName:"p"},"square"),":"),Object(r.b)(s.a,{url:"https://documentation.lsfusion.org/sample?file=UseCasePropertyShape&block=shape",mdxType:"CodeSample"}),Object(r.b)("p",null,"Now, let's create classes ",Object(r.b)("strong",{parentName:"p"},"Rectangle\xa0"),"and ",Object(r.b)("strong",{parentName:"p"},"Circle")," inherited from ",Object(r.b)("strong",{parentName:"p"},"Shape"),":"),Object(r.b)(s.a,{url:"https://documentation.lsfusion.org/sample?file=UseCasePropertyShape&block=concrete",mdxType:"CodeSample"}),Object(r.b)("p",null,"Define the implementation of the abstract property ",Object(r.b)("strong",{parentName:"p"},"square\xa0")," for the created classes:"),Object(r.b)(s.a,{url:"https://documentation.lsfusion.org/sample?file=UseCasePropertyShape&block=extendsimple",mdxType:"CodeSample"}),Object(r.b)("p",null,"Let's assume that we need to make it so that in certain cases we can override the method of calculating the area for the ",Object(r.b)("strong",{parentName:"p"},"Circle"),' class. In this case, we can use an abstract property, whose implementation can be changed in a different module, to add a kind of "entry point" to the line defining the implementation of area for a circle :'),Object(r.b)(s.a,{url:"https://documentation.lsfusion.org/sample?file=UseCasePropertyShape&block=extendover",mdxType:"CodeSample"}),Object(r.b)("p",null,"If the ",Object(r.b)("strong",{parentName:"p"},"overSquareCircle")," property is not implemented in any module, its value will always be ",Object(r.b)("strong",{parentName:"p"},"NULL")," and the base area calculation mechanism will be used. To change the calculation method to be used, you can define a different implementation in a certain ",Object(r.b)("strong",{parentName:"p"},"MyShape")," module."),Object(r.b)(s.a,{url:"https://documentation.lsfusion.org/sample?file=UseCasePropertyMyShape",mdxType:"CodeSample"}),Object(r.b)("p",null,"Note that you can use any other expressions instead of the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/OVERRIDE_operator"},"OVERRIDE operator"),". In particular, ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Arithmetic_operators_+_-_..."},"(+) and (-)")," may be the most frequently used operators."))}u.isMDXComponent=!0}}]);