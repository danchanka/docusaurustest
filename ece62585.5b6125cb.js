(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{389:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),c=(n(0),n(421)),s=n(56),o={title:"Instruction=>"},p={unversionedId:"Instruction=",id:"Instruction=",isDocsHomePage:!1,title:"Instruction=>",description:"The => instruction\xa0creates a\xa0consequence.",source:"@site/docs\\Instruction=.md",slug:"/Instruction=",permalink:"/docusaurustest/docs/Instruction=",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Instruction=.md",version:"current",sidebar:"docs",previous:{title:"CONSTRAINT instruction",permalink:"/docusaurustest/docs/CONSTRAINT_instruction"},next:{title:"CLASS instruction",permalink:"/docusaurustest/docs/CLASS_instruction"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"=>")," instruction\xa0creates a\xa0",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Simple_constraints"}),"consequence"),"."),Object(c.b)("h3",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"leftPropertyId(param1, ..., paramN) => eventClause rightExpr [RESOLVE resolveType];\n")),Object(c.b)("h3",{id:"description"},"Description"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"=>\xa0")," instruction creates a consequence.\xa0This operator **\xa0** can declare its own local parameters when specifying the property of the consequence premise. These parameters can then be used in the expression of the consequence."),Object(c.b)("p",null,"When creating a consequence a ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Constraints"}),"constraint")," will be created, which is pretty similar to the following instruction"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"CONSTRAINT eventClause leftPropertyId(param1, ..., paramN) AND NOT rightExpr MESSAGE 'Consequence violated';\n")),Object(c.b)("p",null,"but it allows you to automatically resolve situations where this constraint is violated. So using type\xa0",Object(c.b)("strong",{parentName:"p"},"RESOLVE LEFT"),"\xa0is similar to creating ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Simple_event"}),"a simple event"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"WHEN eventClause SET(leftPropertyId(param1, ..., paramN)) DO\xa0\n    SETACTION(rightExpr);\n")),Object(c.b)("p",null,"\xa0",Object(c.b)("strong",{parentName:"p"},"RESOLVE RIGHT"),", similarly:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"WHEN eventClause DROPPED(leftPropertyId(param1, ..., paramN)) DO\n    DROPACTION(rightExpr);\n")),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"leftPropertyId")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#propertyid-broken"}),"ID of the property")," specifying the consequence premise."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(c.b)("p",null,"List of ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#paramid-broken"}),"parameters")," of the property that defines the premise of the consequence. The number of these parameters must be equal to the number of parameters of the property."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"rightExpr")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"Expression")," whose value determines the consequence."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"resolveType")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Simple_event"}),"Auto resolution")," type in case of violation of the consequence. Specified by one of the following options:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"LEFT"),": if the premise (the left part of the instruction) is changed to non-",Object(c.b)("strong",{parentName:"li"},"NULL"),", then the consequence changes to non",Object(c.b)("strong",{parentName:"li"},"NULL"),".**\xa0**"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"RIGHT"),":\xa0if the consequence (the right part of the instruction) changes to ",Object(c.b)("strong",{parentName:"li"},"NULL"),", then the premise changes to ",Object(c.b)("strong",{parentName:"li"},"NULL"),"."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"LEFT RIGHT"),": similar to ",Object(c.b)("strong",{parentName:"li"},"LEFT")," and ",Object(c.b)("strong",{parentName:"li"},"RIGHT")," together.\xa0")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"eventClause")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Event_description_block"}),"Event description block"),". Describes an\xa0",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Events"}),"event")," upon the occurrence of which the created consequence will be checked and automatic resolution operations will be performed."),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)(s.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=InstructionSample&block=means",mdxType:"CodeSample"}),Object(c.b)("p",null,"**",Object(c.b)("br",{parentName:"p"}),"\n","**"))}u.isMDXComponent=!0}}]);