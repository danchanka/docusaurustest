(window.webpackJsonp=window.webpackJsonp||[]).push([[172,436],{246:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),o=(a(0),a(750)),s=a(57),c={title:"DELETE operator"},p={unversionedId:"DELETE_operator",id:"DELETE_operator",isDocsHomePage:!1,title:"DELETE operator",description:"The DELETE operator creates an action that deletes objects.",source:"@site/docs/DELETE_operator.md",slug:"/DELETE_operator",permalink:"/docusaurustest/docs/next/DELETE_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/DELETE_operator.md",version:"current",sidebar:"docs",previous:{title:"INTERNAL operator",permalink:"/docusaurustest/docs/next/INTERNAL_operator"},next:{title:"DIALOG operator",permalink:"/docusaurustest/docs/next/DIALOG_operator"}},d=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:d};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"DELETE")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Actions"},"action")," that ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Class_change_CHANGECLASS_DELETE_"},"deletes objects"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"DELETE expr [WHERE whereExpr]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"DELETE")," operator creates an action that deletes objects for which a certain condition is met. This operator can add its local ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Actions"},"parameter"),", which will correspond to the objects being iterated. In this case, the ",Object(o.b)("strong",{parentName:"p"},"WHERE")," block is mandatory.\xa0"),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expr")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Expression"},"expression"),"\xa0or ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#paramid-broken"},"typed parameter"),".\xa0You can either use an already declared parameter as a typed parameter, or declare a new local parameter. When using an expression, new local parameters cannot be added."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"whereExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Expression"},"expression")," whose value is for the action being created.\xa0If not set, it is considered as equal to\xa0",Object(o.b)("strong",{parentName:"p"},"TRUE"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=delete",mdxType:"CodeSample"}))}u.isMDXComponent=!0},57:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return u})),a.d(t,"CodeSample",(function(){return l})),a.d(t,"default",(function(){return m}));var r=a(3),n=a(7),o=a(0),s=a.n(o),c=a(750),p=a(751),d={},i={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},u=[],l=function(e){var t=e.url,a=e.lines,r=Object(o.useState)(""),n=r[0],d=r[1];return Object(o.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return d(e)}))}),[t,d]),n?a?Object(c.b)(s.a.Fragment,null,Object(c.b)(p.a,{className:"lsf",metastring:a,mdxType:"CodeBlock"},n),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(p.a,{className:"lsf",mdxType:"CodeBlock"},n),Object(c.b)("br",null)):Object(c.b)(p.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},b={toc:u,CodeSample:l};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0}}]);