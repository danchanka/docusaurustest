(window.webpackJsonp=window.webpackJsonp||[]).push([[470,436],{541:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(750)),c=n(57),s={title:"WHEN instruction"},i={unversionedId:"WHEN_instruction",id:"WHEN_instruction",isDocsHomePage:!1,title:"WHEN instruction",description:"The\xa0WHEN\xa0instruction adds a\xa0simple event handler.",source:"@site/docs/WHEN_instruction.md",slug:"/WHEN_instruction",permalink:"/docusaurustest/docs/next/WHEN_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/WHEN_instruction.md",version:"current",sidebar:"docs",previous:{title:"Event description block",permalink:"/docusaurustest/docs/next/Event_description_block"},next:{title:"Instruction<- WHEN",permalink:"/docusaurustest/docs/next/Instruction_-_WHEN"}},d=[{value:"Syntax\xa0",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:d};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"WHEN"),"\xa0instruction adds a\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Simple_event"},"simple event")," handler."),Object(o.b)("h3",{id:"syntax"},"Syntax\xa0"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"WHEN eventClause eventExpr [ORDER [DESC] orderExpr1, ..., orderExprN] DO eventAction;\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"WHEN")," instruction adds a simple event handler. In a condition expression you can implicitly declare local parameters that can then be used in the event handler."),Object(o.b)("p",null,"Also, the\xa0",Object(o.b)("strong",{parentName:"p"},"ORDER")," block can be\xa0used to define the order in which the handler will be called for an object collection for which the condition on the simple event has been met.\xa0"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Using the\xa0",Object(o.b)("strong",{parentName:"p"},"WHEN"),"\xa0instruction is much like the following instruction:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre"},"ON eventClause FOR eventExpr [ORDER [DESC] orderExpr1, ..., orderExprN] DO eventAction;\n")),Object(o.b)("p",{parentName:"div"},"but it also has ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Simple_event"},"a number of advantages"),"."))),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventClause")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Event_description_block"},"Event description block"),". Describes the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Events"},"base event"),"\xa0for the created handler."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Expression"},"expression")," whose value is used as a condition for the created simple event. If the obtained property does not contain the\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Previous_value_PREV_"},Object(o.b)("strong",{parentName:"a"},"PREV"))," operator, the platform automatically wraps it into the\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Property_change_CHANGE_"},Object(o.b)("strong",{parentName:"a"},"CHANGE"))," ",Object(o.b)("strong",{parentName:"p"},"operator"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventAction")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Action_operator#contextdependent"},"context-dependent operator")," that describes an action to be added as an event handler."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"DESC")),Object(o.b)("p",null,"Keyword. Specifies a reverse iteration order for object collections.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"orderExpr1, ..., orderExprM")),Object(o.b)("p",null,"A list of expressions that defines the order in which handlers will be called for object collections for which an event condition has been met. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc.\xa0"),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=when",mdxType:"CodeSample"}),Object(o.b)("p",null,"**",Object(o.b)("br",{parentName:"p"}),"\n","**"))}b.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return b})),n.d(t,"CodeSample",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),o=n(0),c=n.n(o),s=n(750),i=n(751),d={},p={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},b=[],l=function(e){var t=e.url,n=e.lines,a=Object(o.useState)(""),r=a[0],d=a[1];return Object(o.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return d(e)}))}),[t,d]),r?n?Object(s.b)(c.a.Fragment,null,Object(s.b)(i.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},r),Object(s.b)("br",null)):Object(s.b)(c.a.Fragment,null,Object(s.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(s.b)("br",null)):Object(s.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},u={toc:b,CodeSample:l};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0}}]);