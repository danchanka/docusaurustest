(window.webpackJsonp=window.webpackJsonp||[]).push([[286,436],{360:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return p})),o.d(t,"toc",(function(){return i})),o.d(t,"default",(function(){return u}));var r=o(3),n=o(7),a=(o(0),o(750)),s=o(57),c={title:"MULTI operator"},p={unversionedId:"MULTI_operator",id:"MULTI_operator",isDocsHomePage:!1,title:"MULTI operator",description:"The MULTI operator creates a property that implements\xa0selection of\xa0one of the values (polymorphic form).",source:"@site/docs/MULTI_operator.md",slug:"/MULTI_operator",permalink:"/docusaurustest/docs/next/MULTI_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/MULTI_operator.md",version:"current",sidebar:"docs",previous:{title:"MIN operator",permalink:"/docusaurustest/docs/next/MIN_operator"},next:{title:"OVERRIDE operator",permalink:"/docusaurustest/docs/next/OVERRIDE_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:i};function u(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"MULTI")," operator creates a ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"property")," that implements\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_#single"},"selection")," of\xa0one of the values (polymorphic form)."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"MULTI expr1, ..., exprN [exclusionType]\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"MULTI"),"\xa0operator creates a property which value will be the value of one of the properties specified in the operator. The property selection condition\xa0is that the parameters match this property ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/CLASS_operator"},"signature"),".\xa0"),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"expr1, ..., exprN"),"\xa0**\xa0**\xa0"),Object(a.b)("p",null,"A list of ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Expression"},"expressions")," defining the properties from which the selection is made."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"exclusionType")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_#exclusive"},"Type of mutual exclusion"),". Determines whether several conditions for the property selection can be met simultaneously with a certain set of parameters. It is\xa0specified by one of the keywords:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"EXCLUSIVE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"OVERRIDE"))),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0type indicates that the conditions for the property selection\xa0cannot be met simultaneously. The\xa0",Object(a.b)("strong",{parentName:"p"},"OVERRIDE"),"\xa0type allows several conditions to be met simultaneously, in which case the first property in the list which selection condition is met will be selected.\xa0"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"EXCLUSIVE")," type is used by default."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=multi",mdxType:"CodeSample"}),Object(a.b)("p",null,"**",Object(a.b)("br",{parentName:"p"}),"\n","**"))}u.isMDXComponent=!0},57:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return u})),o.d(t,"CodeSample",(function(){return d})),o.d(t,"default",(function(){return m}));var r=o(3),n=o(7),a=o(0),s=o.n(a),c=o(750),p=o(751),i={},l={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},u=[],d=function(e){var t=e.url,o=e.lines,r=Object(a.useState)(""),n=r[0],i=r[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),n?o?Object(c.b)(s.a.Fragment,null,Object(c.b)(p.a,{className:"lsf",metastring:o,mdxType:"CodeBlock"},n),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(p.a,{className:"lsf",mdxType:"CodeBlock"},n),Object(c.b)("br",null)):Object(c.b)(p.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},b={toc:u,CodeSample:d};function m(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,o,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0}}]);