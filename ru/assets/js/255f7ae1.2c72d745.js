(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{121:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return r})),s.d(t,"metadata",(function(){return l})),s.d(t,"toc",(function(){return u})),s.d(t,"default",(function(){return p}));var a=s(3),o=s(7),n=(s(0),s(423)),c=s(424),r={title:"How-to: Namespaces"},l={unversionedId:"How-to_Namespaces",id:"How-to_Namespaces",isDocsHomePage:!1,title:"How-to: Namespaces",description:"Occasionally, you will find yourself in situations where you will need to use the same name for different system elements. For this purpose, you can assign them to different namespaces that are defined for a module using the NAMESPACE instruction. By default, the namespace matches the name of the module.",source:"@site/docs/How-to_Namespaces.md",slug:"/How-to_Namespaces",permalink:"/docusaurustest/ru/docs/How-to_Namespaces",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_Namespaces.md",version:"current",sidebar:"docs",previous:{title:"How-to: Searching for elements",permalink:"/docusaurustest/ru/docs/How-to_Searching_for_elements"},next:{title:"How-to: Explicit typing",permalink:"/docusaurustest/ru/docs/How-to_Explicit_typing"}},u=[],i={toc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Occasionally, you will find yourself in situations where you will need to use the same ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Naming"},"name")," for different system elements. For this purpose, you can assign them to different namespaces that are defined for a module using the ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Module_header"},"NAMESPACE")," instruction. By default, the namespace matches the name of the module."),Object(n.b)("p",null,"Let's create two modules, ",Object(n.b)("strong",{parentName:"p"},"UseCaseNamePurchase")," and ",Object(n.b)("strong",{parentName:"p"},"UseCaseNameSale"),", that declare the logic of purchase and sell orders\xa0:"),Object(n.b)(c.a,{url:"https://documentation.lsfusion.org/sample?file=UseCaseNamePurchase&block=sample",mdxType:"CodeSample"}),Object(n.b)(c.a,{url:"https://documentation.lsfusion.org/sample?file=UseCaseNameSale&block=sample",mdxType:"CodeSample"}),Object(n.b)("p",null,"Both of them have the ",Object(n.b)("strong",{parentName:"p"},"Order")," class declared in them, but since the modules have different namespaces, the first one's will be ",Object(n.b)("strong",{parentName:"p"},"Purchase"),", the second one's will be ",Object(n.b)("strong",{parentName:"p"},"Sale"),"."),Object(n.b)("p",null,"Let's declare a test module with a ",Object(n.b)("strong",{parentName:"p"},"Test")," namespace that will simultaneously depend on both modules:"),Object(n.b)(c.a,{url:"https://documentation.lsfusion.org/sample?file=UseCaseNameTest&block=sample",mdxType:"CodeSample"}),Object(n.b)("p",null,"If you try to refer to the ",Object(n.b)("strong",{parentName:"p"},"Order")," class without explicitly specifying the namespace, you will see an error message:"),Object(n.b)("p",null,Object(n.b)("img",{src:s(475).default})),Object(n.b)("p",null,"All such references require an explicit specification of the namespace."),Object(n.b)("p",null,"In case the namespace of a module matches the space of the required system element (for example, ",Object(n.b)("strong",{parentName:"p"},"Purchase"),")"),Object(n.b)(c.a,{url:"https://documentation.lsfusion.org/sample?file=UseCaseNameTest2&block=namespace",mdxType:"CodeSample"}),Object(n.b)("p",null,"or the namespace priority has not been specified using the ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Module_header"},"PRIORITY")," instruction,"),Object(n.b)(c.a,{url:"https://documentation.lsfusion.org/sample?file=UseCaseNameTest2&block=priority",mdxType:"CodeSample"}),Object(n.b)("p",null,"you can skip the specification of the namespace"),Object(n.b)(c.a,{url:"https://documentation.lsfusion.org/sample?file=UseCaseNameTest2&block=sample",mdxType:"CodeSample"}),Object(n.b)("p",null,"If you don't specify the namespace, the class from ",Object(n.b)("strong",{parentName:"p"},"Purchase")," will be used. You still can explicitly specify the namespace (for example, ",Object(n.b)("strong",{parentName:"p"},"Sale"),")."))}p.isMDXComponent=!0},475:function(e,t,s){"use strict";s.r(t),t.default=s.p+"assets/images/60555398-d3869b9262099eff7d50035cbade492e.png"}}]);