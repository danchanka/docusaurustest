(window.webpackJsonp=window.webpackJsonp||[]).push([[227,461],{301:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var o=n(3),i=n(7),s=(n(0),n(750)),r=n(58),c={title:"Empty instruction"},a={unversionedId:"Empty_instruction",id:"version-1.0.0/Empty_instruction",isDocsHomePage:!1,title:"Empty instruction",description:"Empty instruction - a special instruction that consists of a single semicolon.",source:"@site/versioned_docs/version-1.0.0/Empty_instruction.md",slug:"/Empty_instruction",permalink:"/docusaurustest/docs/Empty_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/Empty_instruction.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"AFTER instruction",permalink:"/docusaurustest/docs/AFTER_instruction"},next:{title:"Coding conventions",permalink:"/docusaurustest/docs/Coding_conventions"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]}],d={toc:u};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Empty instruction")," - a special instruction that consists of a single semicolon."),Object(s.b)("h3",{id:"syntax"},"Syntax"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},";\n")),Object(s.b)("h3",{id:"description"},"Description"),Object(s.b)("p",null,"An empty instruction is intended to prevent extra semicolons from being diagnosed as an error. For example, instructions in which the last character is a closing brace should not end with a semicolon. If a semicolon is inserted, however, no error will be thrown, since this will be interpreted as two different instructions.\xa0"),Object(s.b)("h3",{id:"example"},"Example"),Object(s.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=empty",mdxType:"CodeSample"}))}l.isMDXComponent=!0},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return l})),n.d(t,"CodeSample",(function(){return p})),n.d(t,"default",(function(){return b}));var o=n(3),i=n(7),s=n(0),r=n.n(s),c=n(750),a=n(751),u={},d={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},l=[],p=function(e){var t=e.url,n=e.lines,o=Object(s.useState)(""),i=o[0],u=o[1];return Object(s.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return u(e)}))}),[t,u]),i?n?Object(c.b)(r.a.Fragment,null,Object(c.b)(a.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},i),Object(c.b)("br",null)):Object(c.b)(r.a.Fragment,null,Object(c.b)(a.a,{className:"lsf",mdxType:"CodeBlock"},i),Object(c.b)("br",null)):Object(c.b)(a.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:l,CodeSample:p};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0}}]);