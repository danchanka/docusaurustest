(window.webpackJsonp=window.webpackJsonp||[]).push([[463,436],{534:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(750)),c=n(57),s={title:"ACTION+ instruction"},i={unversionedId:"ACTION+_instruction",id:"ACTION+_instruction",isDocsHomePage:!1,title:"ACTION+ instruction",description:"The ACTION+ \xa0instruction adds an implementation (branching condition) to\xa0an abstract action.",source:"@site/docs/ACTION+_instruction.md",slug:"/ACTION+_instruction",permalink:"/docusaurustest/docs/next/ACTION+_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/ACTION+_instruction.md",version:"current",sidebar:"docs",previous:{title:"Instruction +=",permalink:"/docusaurustest/docs/next/Instruction_+="},next:{title:"META instruction",permalink:"/docusaurustest/docs/next/META_instruction"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:p};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"ACTION+")," \xa0instruction adds an implementation (branching condition) to\xa0an ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Action_extension"},"abstract action"),"."),Object(r.b)("h3",{id:"syntax"},"Syntax"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"[ACTION] actionId(param1, ..., paramN) + { implAction }\n[ACTION] actionId(param1, ..., paramN) + WHEN whenExpr THEN { implAction }\n")),Object(r.b)("h3",{id:"description"},"Description"),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"ACTION+")," instruction adds an implementation to an abstract action. The syntax for adding an implementation depends on the type of abstract action. If the abstract action is of type\xa0",Object(r.b)("strong",{parentName:"p"},"CASE"),", then the implementation should be described using\xa0",Object(r.b)("strong",{parentName:"p"},"WHEN ... THEN ...")," otherwise, the implementation should be described simply as an action.\xa0"),Object(r.b)("h3",{id:"parameters"},"Parameters"),Object(r.b)("p",null,"*",Object(r.b)("em",{parentName:"p"},"actionId"),"  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"})),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#propertyid-broken"},"ID")," of the\xa0abstract action.\xa0"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(r.b)("p",null,"List of parameters that will be used to define the implementation. Each element is a\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#paramid-broken"},"typed parameter"),". The\xa0number of these parameters must be equal to the number of parameters of the abstract action. These parameters can then be used in the implementation operator of the abstract property and in the selection condition expression of this implementation."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"implAction")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Action_operator#contextdependent"},"Context-dependent action operator")," whose value determines the implementation of the abstract action.\xa0"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"whenExpr")),Object(r.b)("p",null,"An ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Expression"},"expression")," whose value determines the selection condition of the implementation of an abstract property (action) that has type\xa0",Object(r.b)("strong",{parentName:"p"},"CASE"),".\xa0"),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=extendaction",mdxType:"CodeSample"}))}d.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"CodeSample",(function(){return m})),n.d(t,"default",(function(){return l}));var a=n(3),o=n(7),r=n(0),c=n.n(r),s=n(750),i=n(751),p={},u={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},d=[],m=function(e){var t=e.url,n=e.lines,a=Object(r.useState)(""),o=a[0],p=a[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return p(e)}))}),[t,p]),o?n?Object(s.b)(c.a.Fragment,null,Object(s.b)(i.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},o),Object(s.b)("br",null)):Object(s.b)(c.a.Fragment,null,Object(s.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(s.b)("br",null)):Object(s.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},b={toc:d,CodeSample:m};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}))}l.isMDXComponent=!0}}]);