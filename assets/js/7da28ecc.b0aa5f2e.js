(window.webpackJsonp=window.webpackJsonp||[]).push([[340,436],{414:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var s=n(3),a=n(7),c=(n(0),n(750)),o=n(57),r={title:"EXTEND CLASS instruction"},i={unversionedId:"EXTEND_CLASS_instruction",id:"EXTEND_CLASS_instruction",isDocsHomePage:!1,title:"EXTEND CLASS instruction",description:"The EXTEND\xa0CLASS instruction extends\xa0an existing class.",source:"@site/docs/EXTEND_CLASS_instruction.md",slug:"/EXTEND_CLASS_instruction",permalink:"/docusaurustest/docs/next/EXTEND_CLASS_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/EXTEND_CLASS_instruction.md",version:"current",sidebar:"docs",previous:{title:"WINDOW instruction",permalink:"/docusaurustest/docs/next/WINDOW_instruction"},next:{title:"EXTEND FORM instruction",permalink:"/docusaurustest/docs/next/EXTEND_FORM_instruction"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(s.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"EXTEND\xa0CLASS")," instruction ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Class_extension"},"extends"),"\xa0an existing class."),Object(c.b)("h3",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"EXTEND CLASS name \n[{\n    objectName1 [objectCaption1],\n    ...\n    objectNameM [objectCaptionM]\n}]\xa0\n[: parent1, ..., parentN];\n")),Object(c.b)("h3",{id:"description"},"Description"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"EXTEND\xa0CLASS")," instruction extends an existing ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/User_classes"},"custom class"),"\xa0with additional parent classes and new",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Static_objects"},"static objects"),". You can also extend ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/User_classes#abstract"},"abstract classes")," by adding parent classes to them."),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"name\xa0")),Object(c.b)("p",null,"Class name.\xa0A ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#cid-broken"},"Composite ID"),".\xa0"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"objectName1, ..., objectNameM")),Object(c.b)("p",null,"Names of new static objects of the specified class. Each name is defined ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#id-broken"},"by a simple ID"),". Name values are stored in the ",Object(c.b)("strong",{parentName:"p"},"System.staticName")," system property."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"objectCaption1, ..., objectCaptionM")),Object(c.b)("p",null,"Captions of new static objects of the specified class. Each caption is a ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#strliteral-broken"},"string literal"),". If the caption is not defined, the name of the static object will be its caption. Caption values are stored\xa0in the ",Object(c.b)("strong",{parentName:"p"},"System.staticCaption")," system property."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"parent1, ..., parentN")),Object(c.b)("p",null,"A list of names of new parent classes. Each name is defined\xa0by a composite ID.\xa0"),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)(o.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=extendclass",mdxType:"CodeSample"}))}d.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return d})),n.d(t,"CodeSample",(function(){return b})),n.d(t,"default",(function(){return m}));var s=n(3),a=n(7),c=n(0),o=n.n(c),r=n(750),i=n(751),u={},p={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},d=[],b=function(e){var t=e.url,n=e.lines,s=Object(c.useState)(""),a=s[0],u=s[1];return Object(c.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return u(e)}))}),[t,u]),a?n?Object(r.b)(o.a.Fragment,null,Object(r.b)(i.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},a),Object(r.b)("br",null)):Object(r.b)(o.a.Fragment,null,Object(r.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},a),Object(r.b)("br",null)):Object(r.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},l={toc:d,CodeSample:b};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(s.a)({},l,n,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0}}]);