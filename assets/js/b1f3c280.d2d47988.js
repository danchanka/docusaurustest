(window.webpackJsonp=window.webpackJsonp||[]).push([[485,461],{556:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(750)),s=n(58),i={title:"RECURSION operator"},c={unversionedId:"RECURSION_operator",id:"version-1.0.0/RECURSION_operator",isDocsHomePage:!1,title:"RECURSION operator",description:"The RECURSION\xa0operator\xa0creates a\xa0property that implements\xa0recursion.",source:"@site/versioned_docs/version-1.0.0/RECURSION_operator.md",slug:"/RECURSION_operator",permalink:"/docusaurustest/docs/RECURSION_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/RECURSION_operator.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"PREV operator",permalink:"/docusaurustest/docs/PREV_operator"},next:{title:"STRUCT operator",permalink:"/docusaurustest/docs/STRUCT_operator"}},p=[{value:"Syntax\xa0",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"RECURSION\xa0"),"operator\xa0creates a\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Properties"},"property")," that implements\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Recursion_RECURSION_"},"recursion"),"."),Object(a.b)("h3",{id:"syntax"},"Syntax\xa0"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"RECURSION initialExpr STEP stepExpr [CYCLES YES | CYCLES NO | CYCLES IMPOSSIBLE]\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"RECURSION")," operator creates a property that implements recursion. ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Expression"},"Expressions")," that describe the next step of the recursion may access not only the property parameters but also the parameters at the previous step. This access has the syntax ",Object(a.b)("strong",{parentName:"p"},"$name"),", where ",Object(a.b)("strong",{parentName:"p"},"name")," is the name of the parameter."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"initialExpr")),Object(a.b)("p",null,"An expression whose value is the initial property."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"stepExpr")),Object(a.b)("p",null,"An expression whose value is a property of a recursion step. Allows a special syntax (",Object(a.b)("strong",{parentName:"p"},"$name"),") to access the value of the ",Object(a.b)("strong",{parentName:"p"},"name")," parameter in the previous step."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"CYCLES YES")),Object(a.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Specifies that cycles are allowed."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"CYCLES NO")),Object(a.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Specifies that cycles are not allowed. This option is used by default."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"CYCLES IMPOSSIBLE")),Object(a.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Specifies that cycles are not possible."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=recursion1",mdxType:"CodeSample"}),Object(a.b)("p",null,"**",Object(a.b)("br",{parentName:"p"}),"\n","**"),Object(a.b)("p",null,"Note that Fibonacci numbers can be implemented without adding the to parameter:"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=recursion2",mdxType:"CodeSample"}),Object(a.b)("p",null,"In the current implementation, however, the platform optimizer is less focused on working with numbers, so it cannot yet determine that the step function is increasing and stop the recursion on its own,\xa0artificially\xa0creating the corresponding condition, as is done in the above example. Even more questions arise when this property needs to be displayed in a dynamic list (and in a static list this cannot be done at all, since the number of non-",Object(a.b)("strong",{parentName:"p"},"NULL")," values is infinite). In this case, the current order in this list must also be taken into account and also pushed\xa0into the query. These limitations will be removed in future versions, but in the current version it is recommended to take them into account."))}u.isMDXComponent=!0},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return b})),n.d(t,"default",(function(){return m}));var r=n(3),o=n(7),a=n(0),s=n.n(a),i=n(750),c=n(751),p={},l={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},u=[],b=function(e){var t=e.url,n=e.lines,r=Object(a.useState)(""),o=r[0],p=r[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return p(e)}))}),[t,p]),o?n?Object(i.b)(s.a.Fragment,null,Object(i.b)(c.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},o),Object(i.b)("br",null)):Object(i.b)(s.a.Fragment,null,Object(i.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(i.b)("br",null)):Object(i.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:u,CodeSample:b};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0}}]);