(window.webpackJsonp=window.webpackJsonp||[]).push([[177,436],{251:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),s=n(7),c=(n(0),n(750)),r=n(57),o={title:"CLASS instruction"},i={unversionedId:"CLASS_instruction",id:"CLASS_instruction",isDocsHomePage:!1,title:"CLASS instruction",description:"CLASS\xa0instruction creates a new custom class.",source:"@site/docs/CLASS_instruction.md",slug:"/CLASS_instruction",permalink:"/docusaurustest/docs/next/CLASS_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CLASS_instruction.md",version:"current",sidebar:"docs",previous:{title:"Instruction=>",permalink:"/docusaurustest/docs/next/Instruction=_"},next:{title:"FORM instruction: Overview",permalink:"/docusaurustest/docs/next/FORM_instruction"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:u};function b(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"CLASS\xa0"),"instruction creates a new ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/User_classes"},"custom class"),"."),Object(c.b)("h3",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"CLASS ABSTRACT name [caption] [: parent1, ..., parentN];\n\xa0\nCLASS name [caption]\xa0\n[{\n    objectName1 [objectCaption1],\n    ...\n    objectNameM [objectCaptionM]\n}]\xa0\n[: parent1, ..., parentN];\n")),Object(c.b)("h3",{id:"description"},"Description"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"CLASS")," instruction declares a new class and adds it to the current ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Modules"},"module"),".\xa0"),Object(c.b)("p",null,"The instruction has two forms: \xa0",Object(c.b)("strong",{parentName:"p"},"CLASS ABSTRACT")," for declaring an ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/User_classes#abstract"},"abstract class")," and just\xa0",Object(c.b)("strong",{parentName:"p"},"CLASS"),"\xa0for declaring a concrete class. In the latter case, during declaration, you can declare the ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Static_objects"},"static objects"),"\xa0 of this class and specify their names and captions in a curly brackets block. \xa0\xa0"),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"name\xa0")),Object(c.b)("p",null,"Class name. ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#id-broken"},"Simple ID"),".\xa0The name must be unique within the current\xa0",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Naming#namespace"},"namespace"),"."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"caption")),Object(c.b)("p",null,"Class header. ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Literals#strliteral-broken"},"String literal"),". If the caption is not defined, the name of the class will be its caption. \xa0"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"objectName1, ..., objectNameM")),Object(c.b)("p",null,"The names of ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Static_objects"},"static")," objects of this class. Each name is defined by a simple ID. Name values are stored in the ",Object(c.b)("strong",{parentName:"p"},"System.staticName")," system property."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"objectCaption1, ..., objectCaptionM")),Object(c.b)("p",null,"Captions of static objects of this class. Each caption is a string literal. If the caption is not defined, the name of the static object will be its caption. Caption values are stored\xa0in the ",Object(c.b)("strong",{parentName:"p"},"System.staticCaption")," system property."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"parent1, ..., parentN")),Object(c.b)("p",null,"List of parent class names. Each name is defined by a\xa0",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#cid-broken"},"composite ID"),".\xa0If the list of parent classes is not specified, the class is inherited from the ",Object(c.b)("strong",{parentName:"p"},"System.Object")," class.\xa0\xa0"),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=class",mdxType:"CodeSample"}),Object(c.b)("p",null,"**",Object(c.b)("br",{parentName:"p"}),"\n","**"))}b.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return b})),n.d(t,"CodeSample",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),s=n(7),c=n(0),r=n.n(c),o=n(750),i=n(751),u={},p={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},b=[],l=function(e){var t=e.url,n=e.lines,a=Object(c.useState)(""),s=a[0],u=a[1];return Object(c.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return u(e)}))}),[t,u]),s?n?Object(o.b)(r.a.Fragment,null,Object(o.b)(i.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},s),Object(o.b)("br",null)):Object(o.b)(r.a.Fragment,null,Object(o.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},s),Object(o.b)("br",null)):Object(o.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:b,CodeSample:l};function m(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0}}]);