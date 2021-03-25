(window.webpackJsonp=window.webpackJsonp||[]).push([[281,461],{355:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return l}));var n=a(3),o=a(7),s=(a(0),a(750)),c=a(58),r={title:"Eval (EVAL)"},i={unversionedId:"Eval_EVAL_",id:"version-1.0.0/Eval_EVAL_",isDocsHomePage:!1,title:"Eval (EVAL)",description:"The eval operator creates an action that executes defined program code in the lsFusion\xa0language. Program code is defined as a property whose value should belong to the string class. This is implemented using an\xa0action which takes a line of code as an argument.",source:"@site/versioned_docs/version-1.0.0/Eval_EVAL_.md",slug:"/Eval_EVAL_",permalink:"/docusaurustest/docs/Eval_EVAL_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/Eval_EVAL_.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Custom formula (FORMULA)",permalink:"/docusaurustest/docs/Custom_formula_FORMULA_"},next:{title:"Migration",permalink:"/docusaurustest/docs/Migration"}},u=[{value:"Action execution",id:"action-execution",children:[]},{value:"Executable code restrictions",id:"executable-code-restrictions",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:u};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The eval operator creates an action that executes defined program code in the ",Object(s.b)("strong",{parentName:"p"},"lsFusion"),"\xa0language. Program code is defined as a property whose value should belong to the string class. This is implemented using an\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"action")," which takes a line of code as an argument."),Object(s.b)("p",null,"The code that is passed to an action must be a sequence of\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Instructions"},"instructions"),". It is assumed that one of these instructions will create an action named ",Object(s.b)("strong",{parentName:"p"},"run")," (it is this action that will be executed)."),Object(s.b)("h3",{id:"action-execution"},"Action execution"),Object(s.b)("p",null,"This operator can also execute a single action (rather than a set of instructions): in this case the code should be a sequence of\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/%D0%9Eperators"},"action operators"),"\xa0and local property declarations.\xa0To refer to the parameters of the action, you can use the special character $ and the parameter number (starting from 1)."),Object(s.b)("h3",{id:"executable-code-restrictions"},"Executable code restrictions"),Object(s.b)("p",null,"In the current implementation, executable code must not contain instructions that modify existing objects in the system. For example, you cannot add ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Events"},"events")," or ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Data_properties_DATA_"},"data")," and materialized properties, ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Extensions"},"extend"),"\xa0existing\xa0objects, etc."),Object(s.b)("h3",{id:"language"},"Language"),Object(s.b)("p",null,"To declare an action that executes program code, use the\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/EVAL_operator"},Object(s.b)("strong",{parentName:"a"},"EVAL")," operator"),"."),Object(s.b)("h3",{id:"examples"},"Examples"),Object(s.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=eval",mdxType:"CodeSample"}))}l.isMDXComponent=!0},58:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return l})),a.d(t,"CodeSample",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(3),o=a(7),s=a(0),c=a.n(s),r=a(750),i=a(751),u={},d={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},l=[],p=function(e){var t=e.url,a=e.lines,n=Object(s.useState)(""),o=n[0],u=n[1];return Object(s.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return u(e)}))}),[t,u]),o?a?Object(r.b)(c.a.Fragment,null,Object(r.b)(i.a,{className:"lsf",metastring:a,mdxType:"CodeBlock"},o),Object(r.b)("br",null)):Object(r.b)(c.a.Fragment,null,Object(r.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(r.b)("br",null)):Object(r.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:l,CodeSample:p};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0}}]);