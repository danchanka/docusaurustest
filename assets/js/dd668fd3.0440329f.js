(window.webpackJsonp=window.webpackJsonp||[]).push([[592,436],{57:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return d})),r.d(t,"toc",(function(){return u})),r.d(t,"CodeSample",(function(){return b})),r.d(t,"default",(function(){return m}));var a=r(3),n=r(7),o=r(0),s=r.n(o),c=r(750),p=r(751),i={},d={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},u=[],b=function(e){var t=e.url,r=e.lines,a=Object(o.useState)(""),n=a[0],i=a[1];return Object(o.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),n?r?Object(c.b)(s.a.Fragment,null,Object(c.b)(p.a,{className:"lsf",metastring:r,mdxType:"CodeBlock"},n),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(p.a,{className:"lsf",mdxType:"CodeBlock"},n),Object(c.b)("br",null)):Object(c.b)(p.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},l={toc:u,CodeSample:b};function m(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},663:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(750)),s=r(57),c={title:"CHANGE operator"},p={unversionedId:"CHANGE_operator",id:"CHANGE_operator",isDocsHomePage:!1,title:"CHANGE operator",description:"The CHANGE operator creates an action that changes properties.",source:"@site/docs/CHANGE_operator.md",slug:"/CHANGE_operator",permalink:"/docusaurustest/docs/next/CHANGE_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CHANGE_operator.md",version:"current",sidebar:"docs",previous:{title:"ASK operator",permalink:"/docusaurustest/docs/next/ASK_operator"},next:{title:"BREAK operator",permalink:"/docusaurustest/docs/next/BREAK_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:i};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"CHANGE")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Actions"},"action")," that ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Property_change_CHANGE_"},"changes properties"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[CHANGE] propertyId(expr1, ..., exprN) <- valueExpr [WHERE whereExpr]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"CHANGE"),"\xa0operator creates an action that changes a property when a condition is met. This operator \xa0can add its own local parameters when specifying the property whose value is to be changed. These parameters correspond to the objects being iterated and are not parameters of the created action.\xa0"),Object(o.b)("p",null,"The condition is defined by the ",Object(o.b)("strong",{parentName:"p"},"WHERE")," block. If this block is not specified, it is assumed that the condition is always met.\xa0"),Object(o.b)("p",null,"The keyword ",Object(o.b)("strong",{parentName:"p"},"CHANGE"),", which defines an operator, may be omitted.**\xa0**"),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#propertyid-broken"},"ID of the property")," whose value is being changed. The property must be created by certain operators so that its value can be changed. You can change the values of properties created using the operators ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/docusaurustest/docs/next/DATA_operator"},"DATA"))," , ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/docusaurustest/docs/next/ABSTRACT_operator"},"ABSTRACT")),", and ",Object(o.b)("strong",{parentName:"p"},"LOCAL"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expr1, ..., exprN")),Object(o.b)("p",null,"A list of expressions or typed parameters defining arguments to the property being changed. When using typed parameters, you can both access already declared parameters and declare new local parameters. When using expressions, new local parameters cannot be added.\xa0The number of expressions in this list must equal to the number of parameters of the property being changed.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"valueExpr")),Object(o.b)("p",null,"The expression to whose value the property value must be changed."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"whereExpr")),Object(o.b)("p",null,"An expression whose value is a condition for the change being created. If not specified, it is considered equal to ",Object(o.b)("strong",{parentName:"p"},"TRUE"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=assign",mdxType:"CodeSample"}))}u.isMDXComponent=!0}}]);