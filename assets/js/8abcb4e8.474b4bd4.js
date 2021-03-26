(window.webpackJsonp=window.webpackJsonp||[]).push([[380,461],{454:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),s=(n(0),n(750)),r=n(58),c={title:"Internal call (INTERNAL)"},l={unversionedId:"Internal_call_INTERNAL_",id:"version-1.0.0/Internal_call_INTERNAL_",isDocsHomePage:!1,title:"Internal call (INTERNAL)",description:"The internal call operator allows to create actions in programming languages other than the lsFusion language.*\xa0*The platform currently supports external actions only in the Java language.",source:"@site/versioned_docs/version-1.0.0/Internal_call_INTERNAL_.md",slug:"/Internal_call_INTERNAL_",permalink:"/docusaurustest/docs/Internal_call_INTERNAL_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/Internal_call_INTERNAL_.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Access to an internal system (INTERNAL, FORMULA): Overview",permalink:"/docusaurustest/docs/Access_to_an_internal_system_INTERNAL_FORMULA_"},next:{title:"Custom formula (FORMULA)",permalink:"/docusaurustest/docs/Custom_formula_FORMULA_"}},i=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:i};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The ",Object(s.b)("em",{parentName:"p"},"internal call")," operator allows to create actions in programming languages other than the lsFusion language.**\xa0",Object(s.b)("strong",{parentName:"p"},"The platform currently supports external actions only in the "),"Java** language."),Object(s.b)("p",null,"This operator also makes it possible to directly specify the source for an action in Java, as well as the name of a Java class for which the bytecode is located in a separate Java file. In the second case it is assumed that the file is within the classpath of the server's virtual machine; the Java class itself must inherit from\xa0",Object(s.b)("strong",{parentName:"p"},"lsfusion.server.physics.dev.integration.internal.to.InternalAction"),". The class's ",Object(s.b)("strong",{parentName:"p"},"executeInternal(lsfusion.server.logics.action.controller.context.ExecutionContext\xa0context)")," method will be executed."),Object(s.b)("p",null,"This operator allows to specify which classes the action created can take, and whether or not it can take ",Object(s.b)("strong",{parentName:"p"},"NULL")," values. If the specified conditions are not met, the created action is not executed: control simply passes to the next action."),Object(s.b)("h3",{id:"language"},"Language"),Object(s.b)("p",null,"To declare an action implemented in ",Object(s.b)("strong",{parentName:"p"},"Java")," use the \xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/INTERNAL_operator"},Object(s.b)("strong",{parentName:"a"},"INTERNAL"),"\xa0operator"),"."),Object(s.b)("h3",{id:"examples"},"Examples"),Object(s.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=custom",mdxType:"CodeSample"}))}d.isMDXComponent=!0},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"CodeSample",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),s=n(0),r=n.n(s),c=n(750),l=n(751),i={},u={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},d=[],p=function(e){var t=e.url,n=e.lines,a=Object(s.useState)(""),o=a[0],i=a[1];return Object(s.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),o?n?Object(c.b)(r.a.Fragment,null,Object(c.b)(l.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(r.a.Fragment,null,Object(c.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:d,CodeSample:p};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0}}]);