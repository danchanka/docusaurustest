(window.webpackJsonp=window.webpackJsonp||[]).push([[244,436],{318:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n(3),a=n(7),r=(n(0),n(750)),s=n(57),i={title:"Indexes"},d={unversionedId:"Indexes",id:"Indexes",isDocsHomePage:!1,title:"Indexes",description:"Building an index by property allows storing all the values of this property in the database in an ordered form. Accordingly, the index is updated with every change of the indexed property value. Due to the index, if, for example,\xa0you filter by an indexed property, you can find the objects you need very quickly, rather than viewing all the objects that exist in the system.",source:"@site/docs/Indexes.md",slug:"/Indexes",permalink:"/docusaurustest/docs/next/Indexes",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Indexes.md",version:"current",sidebar:"docs",previous:{title:"Materializations",permalink:"/docusaurustest/docs/next/Materializations"},next:{title:"Tables",permalink:"/docusaurustest/docs/next/Tables"}},c=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Building an ",Object(r.b)("em",{parentName:"p"},"index")," by property allows storing all the values of this property in the database in an ordered form. Accordingly, the index is updated with every change of the indexed property value. Due to the index, if, for example,\xa0you filter by an indexed property, you can find the objects you need very quickly, rather than viewing all the objects that exist in the system."),Object(r.b)("p",null,"Only ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Materializations"},"materialized")," properties can be indexed."),Object(r.b)("p",null,"An index can also be built on several properties at once (this is effective if, for example, you need to filter by several properties simultaneously). In addition, property parameters can be included in a composite index of this kind. The built index will be named as following:\xa0",Object(r.b)("strong",{parentName:"p"},"<table ID",">","_","<property/parameter name 1",">","_","...","_","<property/parameter name N",">"),". If the specified properties are stored in different ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Tables"},"tables"),", then the corresponding error will be thrown when you try to build the index."),Object(r.b)("h3",{id:"language"},"Language"),Object(r.b)("p",null,"To create indexes, you must use the\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/INDEX_instruction"},Object(r.b)("strong",{parentName:"a"},"INDEX")," instruction"),"\xa0or the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Property_options#indexed-broken"},Object(r.b)("strong",{parentName:"a"},"INDEXED")," option")," in property options."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=index",mdxType:"CodeSample"}))}l.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"CodeSample",(function(){return p})),n.d(t,"default",(function(){return m}));var o=n(3),a=n(7),r=n(0),s=n.n(r),i=n(750),d=n(751),c={},u={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},l=[],p=function(e){var t=e.url,n=e.lines,o=Object(r.useState)(""),a=o[0],c=o[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return c(e)}))}),[t,c]),a?n?Object(i.b)(s.a.Fragment,null,Object(i.b)(d.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},a),Object(i.b)("br",null)):Object(i.b)(s.a.Fragment,null,Object(i.b)(d.a,{className:"lsf",mdxType:"CodeBlock"},a),Object(i.b)("br",null)):Object(i.b)(d.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},b={toc:l,CodeSample:p};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0}}]);