(window.webpackJsonp=window.webpackJsonp||[]).push([[45,461],{117:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return i})),o.d(t,"toc",(function(){return p})),o.d(t,"default",(function(){return d}));var n=o(3),r=o(7),a=(o(0),o(750)),s=o(58),c={title:"EXEC operator"},i={unversionedId:"EXEC_operator",id:"version-1.0.0/EXEC_operator",isDocsHomePage:!1,title:"EXEC operator",description:"The EXEC\xa0operator creates an action that executes another action.",source:"@site/versioned_docs/version-1.0.0/EXEC_operator.md",slug:"/EXEC_operator",permalink:"/docusaurustest/docs/EXEC_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/EXEC_operator.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"EVAL operator",permalink:"/docusaurustest/docs/EVAL_operator"},next:{title:"EXPORT operator",permalink:"/docusaurustest/docs/EXPORT_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:p};function d(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"EXEC"),"\xa0operator creates an ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"action")," that ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Call_EXEC_"},"executes")," another action."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"[EXEC] actionId(expression1, ..., expressionN)\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"EXEC")," operator creates an action that executes another action, passing it the values of ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Expression"},"expressions")," as parameters."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"actionId")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#propertyid-broken"},"Action ID"),".\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"expression1, ..., expressionN")),Object(a.b)("p",null,"A list of expressions whose values will be passed to the action being executed as arguments. The number of expressions must be equal to the number of parameters of the action being executed."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"operator")),Object(a.b)("p",null,"An operator that creates the action being executed."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=exec",mdxType:"CodeSample"}))}d.isMDXComponent=!0},58:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return p})),o.d(t,"metadata",(function(){return u})),o.d(t,"toc",(function(){return d})),o.d(t,"CodeSample",(function(){return l})),o.d(t,"default",(function(){return m}));var n=o(3),r=o(7),a=o(0),s=o.n(a),c=o(750),i=o(751),p={},u={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},d=[],l=function(e){var t=e.url,o=e.lines,n=Object(a.useState)(""),r=n[0],p=n[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return p(e)}))}),[t,p]),r?o?Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",metastring:o,mdxType:"CodeBlock"},r),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(c.b)("br",null)):Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},b={toc:d,CodeSample:l};function m(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,o,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0}}]);