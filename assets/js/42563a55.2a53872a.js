(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{167:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return u}));var s=a(3),n=a(7),c=(a(0),a(423)),r=a(57),o={title:"CLASS instruction"},i={unversionedId:"CLASS_instruction",id:"CLASS_instruction",isDocsHomePage:!1,title:"CLASS instruction",description:"CLASS\xa0instruction creates a new custom class.",source:"@site/docs/CLASS_instruction.md",slug:"/CLASS_instruction",permalink:"/docusaurustest/docs/CLASS_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CLASS_instruction.md",version:"current",sidebar:"docs",previous:{title:"Instruction=>",permalink:"/docusaurustest/docs/Instruction="},next:{title:"FORM instruction",permalink:"/docusaurustest/docs/FORM_instruction"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:p};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(s.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"CLASS\xa0"),"instruction creates a new ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/User_classes"},"custom class"),"."),Object(c.b)("h3",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"CLASS ABSTRACT name [caption] [: parent1, ..., parentN];\n\xa0\nCLASS name [caption]\xa0\n[{\n    objectName1 [objectCaption1],\n    ...\n    objectNameM [objectCaptionM]\n}]\xa0\n[: parent1, ..., parentN];\n")),Object(c.b)("h3",{id:"description"},"Description"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"CLASS")," instruction declares a new class and adds it to the current ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/Modules"},"module"),".\xa0"),Object(c.b)("p",null,"The instruction has two forms: \xa0",Object(c.b)("strong",{parentName:"p"},"CLASS ABSTRACT")," for declaring an ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/User_classes#abstract"},"abstract class")," and just\xa0",Object(c.b)("strong",{parentName:"p"},"CLASS"),"\xa0for declaring a concrete class. In the latter case, during declaration, you can declare the ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/Static_objects"},"static objects"),"\xa0 of this class and specify their names and captions in a curly brackets block. \xa0\xa0"),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"name\xa0")),Object(c.b)("p",null,"Class name. ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#id-broken"},"Simple ID"),".\xa0The name must be unique within the current\xa0",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/Naming#namespace"},"namespace"),"."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"caption")),Object(c.b)("p",null,"Class header. ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/Literals#strliteral-broken"},"String literal"),". If the caption is not defined, the name of the class will be its caption. \xa0"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"objectName1, ..., objectNameM")),Object(c.b)("p",null,"The names of ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/Static_objects"},"static")," objects of this class. Each name is defined by a simple ID. Name values are stored in the ",Object(c.b)("strong",{parentName:"p"},"System.staticName")," system property."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"objectCaption1, ..., objectCaptionM")),Object(c.b)("p",null,"Captions of static objects of this class. Each caption is a string literal. If the caption is not defined, the name of the static object will be its caption. Caption values are stored\xa0in the ",Object(c.b)("strong",{parentName:"p"},"System.staticCaption")," system property."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"parent1, ..., parentN")),Object(c.b)("p",null,"List of parent class names. Each name is defined by a\xa0",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#cid-broken"},"composite ID"),".\xa0If the list of parent classes is not specified, the class is inherited from the ",Object(c.b)("strong",{parentName:"p"},"System.Object")," class.\xa0\xa0"),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=class",mdxType:"CodeSample"}),Object(c.b)("p",null,"**",Object(c.b)("br",{parentName:"p"}),"\n","**"))}u.isMDXComponent=!0}}]);