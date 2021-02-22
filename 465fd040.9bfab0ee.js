(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),c=(n(0),n(421)),s=n(56),o={title:"Instruction<- WHEN"},p={unversionedId:"Instruction_-_WHEN",id:"Instruction_-_WHEN",isDocsHomePage:!1,title:"Instruction<- WHEN",description:"The <-\xa0WHEN\xa0instruction creates a\xa0calculated event.",source:"@site/docs\\Instruction_-_WHEN.md",slug:"/Instruction_-_WHEN",permalink:"/docusaurustest/docs/Instruction_-_WHEN",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Instruction_-_WHEN.md",version:"current",sidebar:"docs",previous:{title:"WHEN instruction",permalink:"/docusaurustest/docs/WHEN_instruction"},next:{title:"CONSTRAINT instruction",permalink:"/docusaurustest/docs/CONSTRAINT_instruction"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"<-\xa0WHEN"),"\xa0instruction creates a\xa0",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Calculated_events"}),"calculated event"),"."),Object(c.b)("h3",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"propertyId(param1, ..., paramN) <- valueExpr WHEN eventExpr;\n")),Object(c.b)("h3",{id:"description"},"Description"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"<-WHEN")," instruction creates a calculated event for the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_properties_DATA"}),"property")," specified on the left side of the instruction.\xa0This operator **\xa0** can declare its own local parameters when specifying the property whose value will ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Property_change_CHANGE"}),"change"),". These parameters can then be used in expressions of the condition and value to which the property will change."),Object(c.b)("p",null,"Only one calculated event can be defined for a property.\xa0"),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"propertyId")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#propertyid-broken"}),"ID of the property")," whose value will be changed\xa0when the event occurs."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#paramid-broken"}),"Typed parameters")," properties whose value will be changed when the event occurs. The number of these parameters must be equal to the number of parameters of the property being changed."),Object(c.b)("p",null,"valueExpr"),Object(c.b)("p",null,"The expression to whose value the property value must be changed."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"eventExpr")),Object(c.b)("p",null,"An expression whose value is a condition for the generated event."),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)(s.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=InstructionSample&block=setwhen",mdxType:"CodeSample"}),Object(c.b)("p",null,"**",Object(c.b)("br",{parentName:"p"}),"\n","**"))}l.isMDXComponent=!0}}]);