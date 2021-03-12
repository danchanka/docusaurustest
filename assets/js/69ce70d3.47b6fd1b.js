(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{221:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return c})),s.d(t,"metadata",(function(){return d})),s.d(t,"toc",(function(){return u})),s.d(t,"default",(function(){return l}));var a=s(3),n=s(7),o=(s(0),s(423)),r=s(57),c={title:"Modules"},d={unversionedId:"Modules",id:"Modules",isDocsHomePage:!1,title:"Modules",description:"A module is a functionally complete part of a project. A module consists of declarations of properties, actions, events, constraints, and other system elements.",source:"@site/docs/Modules.md",slug:"/Modules",permalink:"/docusaurustest/docs/Modules",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Modules.md",version:"current",sidebar:"docs",previous:{title:"Modularity",permalink:"/docusaurustest/docs/Modularity"},next:{title:"Projects",permalink:"/docusaurustest/docs/Projects"}},u=[{value:"Dependencies between modules",id:"depends",children:[]},{value:"Namespaces",id:"namespaces",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:u};function l(e){var t=e.components,s=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A ",Object(o.b)("em",{parentName:"p"},"module")," is a functionally complete part of a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Projects"},"project"),". A module consists of declarations of ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Element_identification"},"p"),Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Properties"},"roperties"),", ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"actions"),", ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Events"},"events"),", ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Constraints"},"constraints"),", and other ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Naming"},"system elements"),"."),Object(o.b)("p",null,"Each module has a name, which must be unique within the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Projects"},"project"),"."),Object(o.b)("h3",{id:"depends"},"Dependencies between modules"),Object(o.b)("p",null,"Usually modules use elements from other modules to describe part of their functionality. Accordingly, if module ",Object(o.b)("strong",{parentName:"p"},"B")," uses elements from module ",Object(o.b)("strong",{parentName:"p"},"A"),", it must be specified in module\xa0",Object(o.b)("strong",{parentName:"p"},"B\xa0"),"that it",Object(o.b)("strong",{parentName:"p"},"*\xa0**"),"depends",Object(o.b)("em",{parentName:"p"}," on ",Object(o.b)("strong",{parentName:"em"},"A"),". Based on these dependencies, all modules in the project are arranged in a certain order in which they are initialized. It is guaranteed that if module ",Object(o.b)("strong",{parentName:"em"},"B\xa0"),"depends on module ",Object(o.b)("strong",{parentName:"em"},"A"),", module ",Object(o.b)("strong",{parentName:"em"},"A\xa0"),"will be initialized before module ",Object(o.b)("strong",{parentName:"em"},"B"),". Circular dependencies between project modules are not"),"\xa0*allowed. \xa0"),Object(o.b)("p",null,"If module\xa0",Object(o.b)("strong",{parentName:"p"},"C"),"\xa0depends on module ",Object(o.b)("strong",{parentName:"p"},"B"),", and module\xa0",Object(o.b)("strong",{parentName:"p"},"B"),"\xa0depends on module ",Object(o.b)("strong",{parentName:"p"},"A"),", we will also assume that module ",Object(o.b)("strong",{parentName:"p"},"C"),"\xa0depends on module ",Object(o.b)("strong",{parentName:"p"},"A"),"."),Object(o.b)("p",null,"Any module always automatically depends on the system module ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/System.lsf"},"System")),", regardless of whether or not this is specified explicitly."),Object(o.b)("h3",{id:"namespaces"},"Namespaces"),Object(o.b)("p",null,"In each module a\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Naming#namespace"},"namespace"),"\xa0is specified, containing the names of all system elements created in this module. By default, the module creates its own namespace, the name of which is equal to the name of the module. For the module you can also specify a list of additional namespaces that will have priority\xa0when\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Search"},"finding"),"\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Element_identification"},"system elements"),"."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"Each module in the platform corresponds to exactly one file, which starts with a special ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Module_header"},"header"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ModuleSample",mdxType:"CodeSample"}))}l.isMDXComponent=!0}}]);