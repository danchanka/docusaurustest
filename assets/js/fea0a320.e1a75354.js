(window.webpackJsonp=window.webpackJsonp||[]).push([[672,461],{58:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return u})),a.d(t,"CodeSample",(function(){return d})),a.d(t,"default",(function(){return m}));var n=a(3),o=a(7),r=a(0),s=a.n(r),c=a(750),l=a(751),i={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},u=[],d=function(e){var t=e.url,a=e.lines,n=Object(r.useState)(""),o=n[0],i=n[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),o?a?Object(c.b)(s.a.Fragment,null,Object(c.b)(l.a,{className:"lsf",metastring:a,mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},b={toc:u,CodeSample:d};function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},743:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a(3),o=a(7),r=(a(0),a(750)),s=a(58),c={title:"INTERNAL operator"},l={unversionedId:"INTERNAL_operator",id:"version-1.0.0/INTERNAL_operator",isDocsHomePage:!1,title:"INTERNAL operator",description:"The INTERNAL operator creates an action that executes an internal call.",source:"@site/versioned_docs/version-1.0.0/INTERNAL_operator.md",slug:"/INTERNAL_operator",permalink:"/docusaurustest/docs/INTERNAL_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/INTERNAL_operator.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"CHANGECLASS operator",permalink:"/docusaurustest/docs/CHANGECLASS_operator"},next:{title:"DELETE operator",permalink:"/docusaurustest/docs/DELETE_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:i};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"INTERNAL")," operator creates an ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"action")," that executes an ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Internal_call_INTERNAL_"},"internal call"),"."),Object(r.b)("h3",{id:"syntax"},"Syntax"),Object(r.b)("p",null,"The operator has two forms:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"INTERNAL className [(classId1, ..., classIdN)] [NULL]\nINTERNAL <{anyTokens}> [NULL]\n")),Object(r.b)("h3",{id:"description"},"Description"),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"INTERNAL")," operator creates an action which calls the code written in ",Object(r.b)("strong",{parentName:"p"},"Java"),". The first form of the operator allows you to specify the fully qualified name of a Java class. This class must be inherited from the\xa0",Object(r.b)("strong",{parentName:"p"},"lsfusion.server.physics.dev.integration.internal.to.InternalAction"),"\xa0Java class and must contain the\xa0",Object(r.b)("strong",{parentName:"p"},"executeInternal")," method which is executed when the action is called."),Object(r.b)("p",null,"The second form of the operator allows to write some ",Object(r.b)("strong",{parentName:"p"},"Java")," code inside the ",Object(r.b)("strong",{parentName:"p"},"<{...}",">")," block. This block contents will be the code of ",Object(r.b)("strong",{parentName:"p"},"executeInternal"),"\xa0method for the generated Java class. In this code you can refer to the only parameter of the ",Object(r.b)("strong",{parentName:"p"},"executeInternal"),"\xa0method \u2013 the\xa0",Object(r.b)("strong",{parentName:"p"},"context"),"\xa0parameter of the\xa0",Object(r.b)("strong",{parentName:"p"},"lsfusion.server.logics.action.controller.context.ExecutionContext")," class."),Object(r.b)("h3",{id:"parameters"},"Parameters"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"className")),Object(r.b)("p",null,"The fully qualified name of the Java class. ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Literals#strliteral-broken"},"String literal"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"classId1, ..., classIdN")),Object(r.b)("p",null,"A list of ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#classid-broken"},"class IDs")," of the action arguments. If not specified, the created action will have no parameters."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"NULL")),Object(r.b)("p",null,"If this keyword is used, you can pass ",Object(r.b)("strong",{parentName:"p"},"NULL")," parameters to the action."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"anyTokens")),Object(r.b)("p",null,"Source code written in ",Object(r.b)("strong",{parentName:"p"},"Java"),".\xa0"),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=custom",mdxType:"CodeSample"}))}u.isMDXComponent=!0}}]);