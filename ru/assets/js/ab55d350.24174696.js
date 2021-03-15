(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{313:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return s})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return p})),n.d(e,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(423)),i=n(424),s={title:"ACTION+ instruction"},c={unversionedId:"ACTION+_instruction",id:"ACTION+_instruction",isDocsHomePage:!1,title:"ACTION+ instruction",description:"The ACTION+ \xa0instruction adds an implementation (branching condition) to\xa0an abstract action.",source:"@site/docs/ACTION+_instruction.md",slug:"/ACTION+_instruction",permalink:"/docusaurustest/ru/docs/ACTION+_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/ACTION+_instruction.md",version:"current",sidebar:"docs",previous:{title:"Instruction +=",permalink:"/docusaurustest/ru/docs/Instruction_+="},next:{title:"META instruction",permalink:"/docusaurustest/ru/docs/META_instruction"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:p};function b(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ACTION+")," \xa0instruction adds an implementation (branching condition) to\xa0an ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Action_extension"},"abstract action"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[ACTION] actionId(param1, ..., paramN) + { implAction }\n[ACTION] actionId(param1, ..., paramN) + WHEN whenExpr THEN { implAction }\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ACTION+")," instruction adds an implementation to an abstract action. The syntax for adding an implementation depends on the type of abstract action. If the abstract action is of type\xa0",Object(o.b)("strong",{parentName:"p"},"CASE"),", then the implementation should be described using\xa0",Object(o.b)("strong",{parentName:"p"},"WHEN ... THEN ...")," otherwise, the implementation should be described simply as an action.\xa0"),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,"*",Object(o.b)("em",{parentName:"p"},"actionId"),"  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"})),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/IDs#propertyid-broken"},"ID")," of the\xa0abstract action.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(o.b)("p",null,"List of parameters that will be used to define the implementation. Each element is a\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/IDs#paramid-broken"},"typed parameter"),". The\xa0number of these parameters must be equal to the number of parameters of the abstract action. These parameters can then be used in the implementation operator of the abstract property and in the selection condition expression of this implementation."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"implAction")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Action_operator#contextdependent"},"Context-dependent action operator")," whose value determines the implementation of the abstract action.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"whenExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Expression"},"expression")," whose value determines the selection condition of the implementation of an abstract property (action) that has type\xa0",Object(o.b)("strong",{parentName:"p"},"CASE"),".\xa0"),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(i.a,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=extendaction",mdxType:"CodeSample"}))}b.isMDXComponent=!0}}]);