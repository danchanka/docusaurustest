(window.webpackJsonp=window.webpackJsonp||[]).push([[124,436],{198:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),o=(a(0),a(750)),s=a(57),c={title:"Operator{...}"},p={unversionedId:"Operator_..._",id:"Operator_..._",isDocsHomePage:!1,title:"Operator{...}",description:"The \xa0{...} operator creates actions that executes a sequence of other actions.",source:"@site/docs/Operator_..._.md",slug:"/Operator_..._",permalink:"/docusaurustest/docs/next/Operator_..._",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Operator_..._.md",version:"current",sidebar:"docs",previous:{title:"Action operator: Overview",permalink:"/docusaurustest/docs/next/Action_operator"},next:{title:"ABSTRACT operator (action)",permalink:"/docusaurustest/docs/next/ABSTRACT_operator_action_"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:i};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The \xa0",Object(o.b)("strong",{parentName:"p"},"{...}")," operator creates ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Actions"},"actions")," that executes a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Sequence_..._"},"sequence of other actions"),".\xa0"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"{\n    operator1\n    ...\n    operatorN\n}\n")),Object(o.b)("p",null,"Operators can be of two types:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"actionOperator\nLOCAL [NESTED] name1, ..., nameN = returnClass (paramClass1, ..., paramClassN)\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"A sequence of ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Action_operator"},"action operators"),"\xa0and ",Object(o.b)("strong",{parentName:"p"},"LOCAL")," operators enclosed in braces creates a new action that sequentially executes specified actions and creates specified ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Data_properties_DATA_"},"local properties"),". The area of visibility of the local properties created inside the \xa0",Object(o.b)("strong",{parentName:"p"},"{...}")," operator ends at the end of this operator."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionOperator")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Action_operator#contextdependent"},"context-dependent action operator"),". Each operator is followed by a semicolon, except for operators ending in a closing brace. Extra semicolons are not an error."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NESTED")),Object(o.b)("p",null,"A keyword that, when specified, marks the local property as ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Session_management#nested"},"nested"),"; that is, all of its changes will be visible in new sessions, and when these sessions are closed, changes to this property will get to the current session. Note that this behavior is similar to the behavior of a regular local property (not ",Object(o.b)("strong",{parentName:"p"},"NESTED"),") when using the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/NEWSESSION_operator"},Object(o.b)("strong",{parentName:"a"},"NEWSESSION")," operator"),"\xa0with the specified keyword\xa0",Object(o.b)("strong",{parentName:"p"},"NESTED LOCAL"),"\xa0(or just\xa0",Object(o.b)("strong",{parentName:"p"},"NESTED")," if this local property is explicitly specified in the property list)"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name1, ..., nameN")),Object(o.b)("p",null,"A list of names of the local properties being created. The names are defined\xa0by ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#id-broken"},"simple ID's"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"returnClass")),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#classid-broken"},"class ID"),"\xa0of the returned value of the local property.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"argumentClass1, ..., argumentClassN")),Object(o.b)("p",null,"A list of argument class ID's of the local property."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=action",mdxType:"CodeSample"}),Object(o.b)("p",null,"**",Object(o.b)("br",{parentName:"p"}),"\n","**"))}u.isMDXComponent=!0},57:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return u})),a.d(t,"CodeSample",(function(){return b})),a.d(t,"default",(function(){return m}));var r=a(3),n=a(7),o=a(0),s=a.n(o),c=a(750),p=a(751),i={},l={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},u=[],b=function(e){var t=e.url,a=e.lines,r=Object(o.useState)(""),n=r[0],i=r[1];return Object(o.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),n?a?Object(c.b)(s.a.Fragment,null,Object(c.b)(p.a,{className:"lsf",metastring:a,mdxType:"CodeBlock"},n),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(p.a,{className:"lsf",mdxType:"CodeBlock"},n),Object(c.b)("br",null)):Object(c.b)(p.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:u,CodeSample:b};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0}}]);