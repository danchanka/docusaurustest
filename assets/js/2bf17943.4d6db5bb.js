(window.webpackJsonp=window.webpackJsonp||[]).push([[100,436],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),c=n(7),o=(n(0),n(750)),r=n(57),s={title:"AFTER instruction"},i={unversionedId:"AFTER_instruction",id:"AFTER_instruction",isDocsHomePage:!1,title:"AFTER instruction",description:"The\xa0AFTER\xa0instruction\xa0 calls an\xa0action\xa0after calling another action.",source:"@site/docs/AFTER_instruction.md",slug:"/AFTER_instruction",permalink:"/docusaurustest/docs/next/AFTER_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/AFTER_instruction.md",version:"current",sidebar:"docs",previous:{title:"BEFORE instruction",permalink:"/docusaurustest/docs/next/BEFORE_instruction"},next:{title:"Empty instruction",permalink:"/docusaurustest/docs/next/Empty_instruction"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:u};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"AFTER"),"\xa0instruction\xa0 calls an\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Actions"},"action"),"\xa0after calling another action.\xa0"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"AFTER action(param1, ..., paramN) DO aspectAction;\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"AFTER"),"\xa0instruction defines an action (let's call it an\xa0",Object(o.b)("em",{parentName:"p"},"aspect"),") that will be called after the specified action."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"action")),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#propertyid-broken"},"ID")," of the action after which the aspect will be called."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(o.b)("p",null,"List of action parameter names. Each name is defined\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#id-broken"},"by a simple ID"),". These parameters can be accessed when defining an aspect."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"aspectAction")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Action_operator#contextdependent"},"context-dependent action operator")," describing the aspect."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=after",mdxType:"CodeSample"}))}p.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return p})),n.d(t,"CodeSample",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),c=n(7),o=n(0),r=n.n(o),s=n(750),i=n(751),u={},d={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},p=[],l=function(e){var t=e.url,n=e.lines,a=Object(o.useState)(""),c=a[0],u=a[1];return Object(o.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return u(e)}))}),[t,u]),c?n?Object(s.b)(r.a.Fragment,null,Object(s.b)(i.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},c),Object(s.b)("br",null)):Object(s.b)(r.a.Fragment,null,Object(s.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},c),Object(s.b)("br",null)):Object(s.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},b={toc:p,CodeSample:l};function m(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0}}]);