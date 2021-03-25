(window.webpackJsonp=window.webpackJsonp||[]).push([[8,436],{57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return m})),n.d(t,"CodeSample",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),o=n(0),r=n.n(o),c=n(750),s=n(751),l={},b={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},m=[],p=function(e){var t=e.url,n=e.lines,a=Object(o.useState)(""),i=a[0],l=a[1];return Object(o.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),i?n?Object(c.b)(r.a.Fragment,null,Object(c.b)(s.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},i),Object(c.b)("br",null)):Object(c.b)(r.a.Fragment,null,Object(c.b)(s.a,{className:"lsf",mdxType:"CodeBlock"},i),Object(c.b)("br",null)):Object(c.b)(s.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:m,CodeSample:p};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),i=n(7),o=(n(0),n(750)),r=n(57),c={title:"NAVIGATOR instruction"},s={unversionedId:"NAVIGATOR_instruction",id:"NAVIGATOR_instruction",isDocsHomePage:!1,title:"NAVIGATOR instruction",description:"The NAVIGATOR\xa0 instruction is used to modify the\xa0navigator.",source:"@site/docs/NAVIGATOR_instruction.md",slug:"/NAVIGATOR_instruction",permalink:"/docusaurustest/docs/next/NAVIGATOR_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/NAVIGATOR_instruction.md",version:"current",sidebar:"docs",previous:{title:"DESIGN instruction",permalink:"/docusaurustest/docs/next/DESIGN_instruction"},next:{title:"WINDOW instruction",permalink:"/docusaurustest/docs/next/WINDOW_instruction"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:l};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"NAVIGATOR"),"\xa0 instruction is used to modify the\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Navigator"},"navigator"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("p",null,"The syntax consists of nested blocks of ",Object(o.b)("em",{parentName:"p"},"navigator instructions."),"\xa0The outer instruction block is described after the keyword\xa0",Object(o.b)("strong",{parentName:"p"},"NAVIGATOR"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"NAVIGATOR {\n    navigatorStatement1 \n    ...\n    navigatorStatementN\n}\n")),Object(o.b)("p",null,"Each ",Object(o.b)("em",{parentName:"p"},"navigatorStatement")," describes a single navigator instruction, and at the end it may contain a nested block of additional navigator instructions.\xa0There are three types of navigator instructions: \xa0"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"NEW elementDescription [options] [{ ... }];\nMOVE name [caption] [options] [{ ... }];\nname [caption] [options] [{ ... }];\n")),Object(o.b)("p",null,"where ",Object(o.b)("em",{parentName:"p"},"elementDescription"),"\xa0in the ",Object(o.b)("strong",{parentName:"p"},"NEW")," instruction describes the type of element to be created, and can be in one of three types:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"FOLDER name [caption] \nFORM [name [caption] =] formName\nACTION [name [caption] =] actionName\n[name [caption] =] formElseActionName\n")),Object(o.b)("p",null,"A navigator instruction must end with a semicolon if it does not contain a nested block of additional instructions."),Object(o.b)("p",null,"The options for the ",Object(o.b)("em",{parentName:"p"},"options")," navigator element can be listed one after the other in arbitrary order. The following set of options is supported:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"WINDOW windowName\nBEFORE elementName\nAFTER elementName\nFIRST \nIMAGE fileName\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"NAVIGATOR"),"\xa0instruction allows to modify the navigator. Each navigator instruction block enclosed in braces allows to change the descendants of a particular\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Navigator"},"navigator element"),", which we will call the ",Object(o.b)("em",{parentName:"p"},"current")," element. In the outer block that follows the ",Object(o.b)("strong",{parentName:"p"},"NAVIGATOR")," keyword, the current element is the root system folder\xa0",Object(o.b)("strong",{parentName:"p"},"System.root"),".\xa0There are three types of navigator instructions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("em",{parentName:"li"},"create instruction")," (",Object(o.b)("strong",{parentName:"li"},"NEW"),") allows to create a new navigator element, making it a child object of the current element. The created navigator elements can be of three types: folder, form element, and action element. The type of element to be created is specified by the keywords\xa0",Object(o.b)("strong",{parentName:"li"},"FOLDER"),",\xa0",Object(o.b)("strong",{parentName:"li"},"FORM, and ACTION"),". When creating a form element, the keyword ",Object(o.b)("strong",{parentName:"li"},"FORM")," is optional. The navigator instruction block contained in this instruction (if any) describes the descendants of the element being created."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("em",{parentName:"li"},"move instruction")," (",Object(o.b)("strong",{parentName:"li"},"MOVE"),")**\xa0**allows to move an existing element to the current navigator element, making it a child element. Prior to this, the navigator element being moved is deleted from its previous location.\xa0The navigator instruction block contained in this instruction describes the descendants of the element being added.\xa0"),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("em",{parentName:"li"},"modify instruction")," allows to change the specified navigator element, which must be a descendant (not necessarily a child) of the current element. The navigator instruction block contained in this instruction describes the descendants of the specified element.")),Object(o.b)("p",null,"The move and modify instructions allow to change the caption and options of a navigator item."),Object(o.b)("p",null,"The hierarchy described within a single ",Object(o.b)("strong",{parentName:"p"},"NAVIGATOR")," instruction can have an arbitrary nesting level and describe any number of elements at each level."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name")),Object(o.b)("p",null,"Navigator element name. In the create instruction,\xa0it is ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#id-broken"},"a simple ID"),"\xa0and must be unique within the current ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Naming#namespace"},"namespace"),", while in the rest of the instructions it is a\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#cid-broken"},"composite ID"),". The name does not have to be specified when creating a form element or action element. Here the form name or action name is used as the element name."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"caption")),Object(o.b)("p",null,"Navigator element caption. ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Literals#strliteral-broken"},"String literal"),". In the create instruction, if the caption is not specified, the caption will be the name of the created element. In the rest of the instructions it modifies the existing caption."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionName")),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#propertyid-broken"},"action ID")," for which the navigator element will be created. The action must not take any parameters."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"formName")),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#propertyid-broken"},"form ID")," for which the navigator element will be created."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"formElseActionName")),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#propertyid-broken"},"form or action ID")," for which the navigator element will be created. It is initially assumed that in ",Object(o.b)("em",{parentName:"p"},"formElseActionName\xa0"),"a form is specified, and that only if it is not found an action is specified in",Object(o.b)("em",{parentName:"p"},"formElseActionName\xa0"),"\xa0The action must not take any parameters."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"*Element options\xa0"),"(options)*"),Object(o.b)("p",null,"WINDOW windowName"),Object(o.b)("p",null,"Specifying a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Navigator_design"},"window")," in which the element and its descendants will be displayed (unless another window is specified for them).\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"windowName")),Object(o.b)("p",null,"Window name. Composite ID."),Object(o.b)("p",null,"BEFORE elementName"),Object(o.b)("p",null,"AFTER\xa0elementName\xa0"),Object(o.b)("p",null,"Specifying that the element must be added or moved before (keyword ",Object(o.b)("strong",{parentName:"p"},"BEFORE"),") or after (keyword ",Object(o.b)("strong",{parentName:"p"},"AFTER"),") the specified navigator element. The specified element must be a child of the current element. If the option is specified in the modify instruction, then the element itself must also be a child of the current element. Otherwise, the ",Object(o.b)("strong",{parentName:"p"},"MOVE")," instruction should be used."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"elementName")),Object(o.b)("p",null,"Navigator element name. Composite ID.\xa0"),Object(o.b)("p",null,"FIRST"),Object(o.b)("p",null,"A keyword that specifies that the element must be added or moved to first place in the child list of the current element.\xa0If the option is specified in the modify instruction, then the element itself must also be a child of the current element. Otherwise, the\xa0",Object(o.b)("strong",{parentName:"p"},"MOVE")," instruction should be used."),Object(o.b)("p",null,"IMAGE fileName"),Object(o.b)("p",null,"Specifying the relative path to the file with the image to be displayed as the icon for the navigator element.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"fileName")),Object(o.b)("p",null,"Path to the file. String literal.\xa0The path is relative to the\xa0 ",Object(o.b)("strong",{parentName:"p"},"images")," directory."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=navigator",mdxType:"CodeSample"}),Object(o.b)("p",null,"**",Object(o.b)("br",{parentName:"p"}),"\n","**"),Object(o.b)("p",null,"**",Object(o.b)("br",{parentName:"p"}),"\n","**"))}m.isMDXComponent=!0}}]);