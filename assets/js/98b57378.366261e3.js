(window.webpackJsonp=window.webpackJsonp||[]).push([[417,436],{491:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return m}));var a=n(3),s=n(7),o=(n(0),n(750)),c=n(57),r={title:"Module header"},u={unversionedId:"Module_header",id:"Module_header",isDocsHomePage:!1,title:"Module header",description:"Each module\xa0begins with a header.",source:"@site/docs/Module_header.md",slug:"/Module_header",permalink:"/docusaurustest/docs/next/Module_header",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Module_header.md",version:"current",sidebar:"docs",previous:{title:"Instructions: Overview",permalink:"/docusaurustest/docs/next/Instructions"},next:{title:"Instruction =: Overview",permalink:"/docusaurustest/docs/next/Instruction_="}},d=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[{value:"<strong>Examples</strong>",id:"examples",children:[]}]}],i={toc:d};function m(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Each ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Modules"},"module"),"\xa0begins with a ",Object(o.b)("em",{parentName:"p"},"header.")),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"MODULE name;\n[REQUIRE moduleName1, ..., moduleNameN;]\n[PRIORITY namespaceName1, ..., namespaceNameM;]\n[NAMESPACE namespaceName;]\n")),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"The module header can consist of four special instructions, in the following order:"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"MODULE"),"\xa0 instruction defines the module name. It is required. Each module within one ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Projects"},"project")," must have a unique name."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"REQUIRE")," instruction defines the list of modules on which the current module ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Modules#depends"},"depends"),". If the ",Object(o.b)("strong",{parentName:"p"},"REQUIRE")," instruction is absent, that is equivalent to depending only on the\xa0",Object(o.b)("strong",{parentName:"p"},"System")," module."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"PRIORITY")," instruction defines the list of additional\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Naming#namespace"},"namespaces")," that will have priority\xa0in ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Search"},"finding")," ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Element_identification"},"system elements"),"."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"NAMESPACE")," instruction defines the module's namespace. \xa0"),Object(o.b)("p",null,"**",Object(o.b)("br",{parentName:"p"}),"\n","**"),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name")),Object(o.b)("p",null,"The name of the module. ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#id-broken"},"Simple ID"),". Module names cannot contain an underscore."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"moduleName1, ..., moduleNameN")),Object(o.b)("p",null,"A list of the names of modules that the current module depends on. Each name is a simple ID.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"namespaceName1, ..., namespaceNameM")),Object(o.b)("p",null,"A list of namespace names. Each name is a simple ID.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"namespaceName")),Object(o.b)("p",null,"The name of the module namespace. A simple ID that cannot contain an underscore. If the ",Object(o.b)("strong",{parentName:"p"},"NAMESPACE")," instruction is not used in the header, the name of the current module's namespace will be equal to the name of the module.\xa0**\xa0**"),Object(o.b)("h3",{id:"examples"},Object(o.b)("strong",{parentName:"h3"},"Examples")),Object(o.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ModuleSample",mdxType:"CodeSample"}))}m.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return m})),n.d(t,"CodeSample",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),s=n(7),o=n(0),c=n.n(o),r=n(750),u=n(751),d={},i={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},m=[],l=function(e){var t=e.url,n=e.lines,a=Object(o.useState)(""),s=a[0],d=a[1];return Object(o.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return d(e)}))}),[t,d]),s?n?Object(r.b)(c.a.Fragment,null,Object(r.b)(u.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},s),Object(r.b)("br",null)):Object(r.b)(c.a.Fragment,null,Object(r.b)(u.a,{className:"lsf",mdxType:"CodeBlock"},s),Object(r.b)("br",null)):Object(r.b)(u.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},p={toc:m,CodeSample:l};function b(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0}}]);