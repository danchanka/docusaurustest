(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(421)),s=n(56),p={title:"Instruction +="},i={unversionedId:"Instruction_+=",id:"Instruction_+=",isDocsHomePage:!1,title:"Instruction +=",description:"The += instruction adds an implementation (selection option) to an abstract property.",source:"@site/docs\\Instruction_+=.md",slug:"/Instruction_+=",permalink:"/docusaurustest/docs/Instruction_+=",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Instruction_+=.md",version:"current",sidebar:"docs",previous:{title:"EXTEND FORM instruction",permalink:"/docusaurustest/docs/EXTEND_FORM_instruction"},next:{title:"ACTION+ instruction",permalink:"/docusaurustest/docs/ACTION+_instruction"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The += instruction adds an implementation (selection option) to an ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Property_extension"}),"abstract property"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"propertyId (param1, ..., paramN) += implExpr;\npropertyId (param1, ..., paramN) += WHEN whenExpr THEN implExpr;\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The += instruction adds an implementation to an abstract property. The syntax for adding an implementation depends on the type of abstract property. If the abstract property is of type ",Object(o.b)("strong",{parentName:"p"},"CASE"),", then the implementation should be described using ",Object(o.b)("strong",{parentName:"p"},"WHEN ... THEN ...")," otherwise, the implementation should be described simply as a property.\xa0"),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#propertyid-broken"}),"ID")," of the abstract property.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(o.b)("p",null,"List of parameters that will be used to define the implementation. Each element is a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#paramid-broken"}),"typed parameter"),". The number of these parameters must be equal to the number of parameters of the abstract property. These parameters can then be used in expressions of the implementation of the abstract property and the selection condition of this implementation."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"implExpr")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"Expression")," whose value determines the implementation of an abstract property."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"whenExpr")),Object(o.b)("p",null,"An expression whose value determines the selection condition of the implementation of an abstract property (action) that has type ",Object(o.b)("strong",{parentName:"p"},"CASE"),".\xa0"),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(s.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=InstructionSample&block=extendproperty",mdxType:"CodeSample"}))}u.isMDXComponent=!0}}]);