(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{404:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return i})),s.d(t,"metadata",(function(){return c})),s.d(t,"toc",(function(){return r})),s.d(t,"default",(function(){return d}));var o=s(3),n=s(7),a=(s(0),s(423)),l=s(57),i={title:"How-to: Class extension"},c={unversionedId:"How-to_Class_extension",id:"How-to_Class_extension",isDocsHomePage:!1,title:"How-to: Class extension",description:"The typical scheme for extracting relations between classes to a separate module is as follows:",source:"@site/docs/How-to_Class_extension.md",slug:"/How-to_Class_extension",permalink:"/docusaurustest/docs/How-to_Class_extension",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_Class_extension.md",version:"current",sidebar:"docs",previous:{title:"How-to: Extensions",permalink:"/docusaurustest/docs/How-to_Extensions"},next:{title:"How-to: Property extension",permalink:"/docusaurustest/docs/How-to_Property_extension"}},r=[],p={toc:r};function d(e){var t=e.components,s=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,s,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The typical scheme for extracting relations between classes to a separate module is as follows:"),Object(a.b)("p",null,"Create the\xa0",Object(a.b)("strong",{parentName:"p"},"MA")," module in which the\xa0",Object(a.b)("strong",{parentName:"p"},"A"),"\xa0class will be created:"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseClassMA",mdxType:"CodeSample"}),Object(a.b)("p",null,"Create the\xa0",Object(a.b)("strong",{parentName:"p"},"MB")," module in which the\xa0",Object(a.b)("strong",{parentName:"p"},"B"),"\xa0class will be created:"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseClassMB",mdxType:"CodeSample"}),Object(a.b)("p",null,"Create the\xa0",Object(a.b)("strong",{parentName:"p"},"MBA")," module in which the relation between the\xa0",Object(a.b)("strong",{parentName:"p"},"A"),"\xa0and\xa0",Object(a.b)("strong",{parentName:"p"},"B"),"\xa0class will be defined:"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseClassMBA",mdxType:"CodeSample"}),Object(a.b)("p",null,"Therefore, the\xa0",Object(a.b)("strong",{parentName:"p"},"MA"),"\xa0and\xa0",Object(a.b)("strong",{parentName:"p"},"MB")," modules do not directly depend on each other and the relation between them can be enabled (disabled) by linking (unlinking) the\xa0",Object(a.b)("strong",{parentName:"p"},"MBA")," module. Note that the\xa0",Object(a.b)("strong",{parentName:"p"},"MBA"),"\xa0module extends the functionality of the\xa0",Object(a.b)("strong",{parentName:"p"},"MB")," module without any changes to its code."),Object(a.b)("p",null,"You can use mixin classes when using the metacode as follows:"),Object(a.b)("p",null,"Suppose that we have a metacode that declares a class and defines certain properties for it:"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseClassMyModule&block=define",mdxType:"CodeSample"}),Object(a.b)("p",null,"Note that when calling this metacode, you cannot specify the classes from which the created class must inherit anything. However, this can be implemented through a mixin of classes as follows:"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseClassMyModule&block=implement",mdxType:"CodeSample"}))}d.isMDXComponent=!0}}]);