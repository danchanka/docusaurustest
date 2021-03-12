(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{288:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return m}));var a=n(3),s=n(7),o=(n(0),n(423)),c=n(57),r={title:"Module header"},u={unversionedId:"Module_header",id:"Module_header",isDocsHomePage:!1,title:"Module header",description:"Each module\xa0begins with a header.",source:"@site/docs/Module_header.md",slug:"/Module_header",permalink:"/docusaurustest/docs/Module_header",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Module_header.md",version:"current",sidebar:"docs",previous:{title:"Instructions",permalink:"/docusaurustest/docs/Instructions"},next:{title:"Instruction =",permalink:"/docusaurustest/docs/Instruction_="}},d=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]}],i={toc:d};function m(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Each ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Modules"},"module"),"\xa0begins with a ",Object(o.b)("em",{parentName:"p"},"header.")),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"MODULE name;\n[REQUIRE moduleName1, ..., moduleNameN;]\n[PRIORITY namespaceName1, ..., namespaceNameM;]\n[NAMESPACE namespaceName;]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The module header can consist of four special instructions, in the following order:"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"MODULE"),"\xa0 instruction defines the module name. It is required. Each module within one ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Projects"},"project")," must have a unique name."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"REQUIRE")," instruction defines the list of modules on which the current module ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Modules#depends"},"depends"),". If the ",Object(o.b)("strong",{parentName:"p"},"REQUIRE")," instruction is absent, that is equivalent to depending only on the\xa0",Object(o.b)("strong",{parentName:"p"},"System")," module."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"PRIORITY")," instruction defines the list of additional\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Naming#namespace"},"namespaces")," that will have priority\xa0in ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Search"},"finding")," ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Element_identification"},"system elements"),"."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"NAMESPACE")," instruction defines the module's namespace. \xa0"),Object(o.b)("p",null,"**",Object(o.b)("br",{parentName:"p"}),"\n","**"),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name")),Object(o.b)("p",null,"The name of the module. ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#id-broken"},"Simple ID"),". Module names cannot contain an underscore."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"moduleName1, ..., moduleNameN")),Object(o.b)("p",null,"A list of the names of modules that the current module depends on. Each name is a simple ID.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"namespaceName1, ..., namespaceNameM")),Object(o.b)("p",null,"A list of namespace names. Each name is a simple ID.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"namespaceName")),Object(o.b)("p",null,"The name of the module namespace. A simple ID that cannot contain an underscore. If the ",Object(o.b)("strong",{parentName:"p"},"NAMESPACE")," instruction is not used in the header, the name of the current module's namespace will be equal to the name of the module.\xa0**\xa0**"),Object(o.b)("h6",{id:"examples"},Object(o.b)("strong",{parentName:"h6"},"Examples")),Object(o.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ModuleSample",mdxType:"CodeSample"}))}m.isMDXComponent=!0}}]);