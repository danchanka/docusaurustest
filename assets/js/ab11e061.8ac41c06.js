(window.webpackJsonp=window.webpackJsonp||[]).push([[462,461],{533:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(750)),s=r(58),c={title:"CANCEL operator"},p={unversionedId:"CANCEL_operator",id:"version-1.0.0/CANCEL_operator",isDocsHomePage:!1,title:"CANCEL operator",description:"The CANCEL\xa0operator creates an\xa0action that cancels changes in the current session.",source:"@site/versioned_docs/version-1.0.0/CANCEL_operator.md",slug:"/CANCEL_operator",permalink:"/docusaurustest/docs/CANCEL_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CANCEL_operator.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"BREAK operator",permalink:"/docusaurustest/docs/BREAK_operator"},next:{title:"CASE operator (action)",permalink:"/docusaurustest/docs/CASE_operator_action_"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:i};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"CANCEL\xa0"),"operator creates an\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"action")," that ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Cancel_changes_CANCEL_"},"cancels changes")," in the current session."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"CANCEL [nestedBlock]\n")),Object(a.b)("p",null,"where\xa0",Object(a.b)("em",{parentName:"p"},"nestedBlock"),"\xa0has one of two possible syntaxes:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"NESTED LOCAL\nNESTED (propertyId1, ..., propertyIdN)\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"CANCEL")," operator creates an action that cancels changes in the current session. By specifying the keyword ",Object(a.b)("strong",{parentName:"p"},"NESTED"),"\xa0you can specify\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Data_properties_DATA_#local"},"local properties")," whose changes are not dropped when cancelling the changes.\xa0"),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"LOCAL")),Object(a.b)("p",null,"Keyword. If specified, all local properties preserve their changes after the ",Object(a.b)("strong",{parentName:"p"},"CANCEL"),"\xa0operator is executed.\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"propertyId1, ..., propertyIdN")),Object(a.b)("p",null,"List of local properties. Each list element is a\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#propertyid-broken"},"property ID"),". The local properties specified in the list will preserve their\xa0changes after the operator is executed."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=cancel",mdxType:"CodeSample"}))}l.isMDXComponent=!0},58:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return d})),r.d(t,"toc",(function(){return l})),r.d(t,"CodeSample",(function(){return u})),r.d(t,"default",(function(){return m}));var n=r(3),o=r(7),a=r(0),s=r.n(a),c=r(750),p=r(751),i={},d={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},l=[],u=function(e){var t=e.url,r=e.lines,n=Object(a.useState)(""),o=n[0],i=n[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),o?r?Object(c.b)(s.a.Fragment,null,Object(c.b)(p.a,{className:"lsf",metastring:r,mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(p.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(p.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},b={toc:l,CodeSample:u};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0}}]);