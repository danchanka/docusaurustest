(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{308:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(423)),s=a(424),p={title:"ABSTRACT operator"},i={unversionedId:"ABSTRACT_operator",id:"ABSTRACT_operator",isDocsHomePage:!1,title:"ABSTRACT operator",description:"The ABSTRACT\xa0operator\xa0creates an abstract\xa0property.",source:"@site/docs/ABSTRACT_operator.md",slug:"/ABSTRACT_operator",permalink:"/docusaurustest/ru/docs/ABSTRACT_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/ABSTRACT_operator.md",version:"current",sidebar:"docs",previous:{title:"Operator \\[\\]",permalink:"/docusaurustest/ru/docs/Operator"},next:{title:"ACTIVE TAB operator",permalink:"/docusaurustest/ru/docs/ACTIVE_TAB_operator"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ABSTRACT"),"\xa0operator\xa0creates an ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Property_extension"},"abstract\xa0property"),".\xa0"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"ABSTRACT [type [exclusionType]] [CHECKED] returnClassName(argClassName1, ..., argClassNameN)\n")),Object(o.b)("p",null,"Where ",Object(o.b)("em",{parentName:"p"},"exclusionType"),"\xa0is of two types:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"EXCLUSIVE\nOVERRIDE [FIRST | LAST]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ABSTRACT"),"\xa0operator creates an abstract property, the implementations of which can be defined later (for example, in other\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Modules"},"modules")," dependent on the module containing the\xa0",Object(o.b)("strong",{parentName:"p"},"ABSTRACT"),"\xa0property). Implementations are added to the property using the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Instruction_+="},"instruction + ="),". When calculating an abstract property, its ",Object(o.b)("em",{parentName:"p"},"matching")," implementation is selected and calculated. The selection of the matching implementation depends on the ",Object(o.b)("em",{parentName:"p"},"selection conditions")," that are defined when adding implementations, and on the ",Object(o.b)("strong",{parentName:"p"},"ABSTRACT")," operator type."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CASE")," -\xa0a general case.**\xa0",Object(o.b)("strong",{parentName:"li"},"The selection condition will be explicitly specified in the implementation using\xa0the ["),"WHEN**\xa0block](/docusaurustest/ru/docs/Instruction_+=)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"MULTI"),"\xa0\u2013 a ",Object(o.b)("a",{parentName:"li",href:"/docusaurustest/ru/docs/Property_extension#poly"},"polymorphic form"),". The selection condition is that the parameters match the implementation ",Object(o.b)("a",{parentName:"li",href:"/docusaurustest/ru/docs/CLASS_operator"},"signature"),". This type is the default type and need not to be explicitly specified."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"VALUE")," - a polymorphic form",Object(o.b)("strong",{parentName:"li"},".\xa0"),"The selection condition will be definiteness (a none-",Object(o.b)("strong",{parentName:"li"},"NULL")," value) of the implementation value (essentially, the implementation itself).**\xa0**")),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Property_extension#exclusive"},"type of mutual exclusion")," of an operator determines whether several conditions for the implementation of an abstract property can simultaneously be met with a certain set of parameters. The\xa0",Object(o.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0type indicates that implementation conditions cannot be met simultaneously. The ",Object(o.b)("strong",{parentName:"p"},"OVERRIDE")," type allows several simultaneously met conditions. In this case, the implementation to be selected is determined by the keywords ",Object(o.b)("strong",{parentName:"p"},"FIRST")," and ",Object(o.b)("strong",{parentName:"p"},"LAST"),"."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ABSTRACT")," operator cannot be used inside ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Expression"},"expressions"),"."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"type")),Object(o.b)("p",null,"Type of abstract*\xa0*property. It is specified by one of the keywords:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CASE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"MULTI")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"VALUE",Object(o.b)("br",{parentName:"strong"})))),Object(o.b)("p",null,"The default value is\xa0",Object(o.b)("strong",{parentName:"p"},"MULTI"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"exclusionType")),Object(o.b)("p",null,"Type of mutual exclusion. One of these keywords:\xa0",Object(o.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0or\xa0",Object(o.b)("strong",{parentName:"p"},"OVERRIDE"),". Unless explicitly specified, in a ",Object(o.b)("strong",{parentName:"p"},"MULTI")," abstract property the default type of mutual exclusion is ",Object(o.b)("strong",{parentName:"p"},"EXCLUSIVE"),", and in all other cases the default mutual exclusion type is ",Object(o.b)("strong",{parentName:"p"},"OVERRIDE"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"FIRST")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LAST"))),Object(o.b)("p",null,"Keywords. Determine which of the matching implementations will be selected. When the word\xa0",Object(o.b)("strong",{parentName:"p"},"FIRST")," is specified, implementations will be added to the top of the implementations list, so that the last added implementation will be selected. When the word\xa0",Object(o.b)("strong",{parentName:"p"},"LAST")," is specified, implementations will be added to the end of the implementations list, so that the implementation added first will be selected.\xa0If not specified, the default is\xa0",Object(o.b)("strong",{parentName:"p"},"FIRST"),".\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"FULL")),Object(o.b)("p",null,"Keyword. If specified, the platform will automatically check\xa0that at least one implementation is specified for all child objects of the argument classes (or exactly one if the conditions are mutually exclusive)."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"returnClassName")),Object(o.b)("p",null,"Class of the return value of the property. ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/IDs#classid-broken"},"Class ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"argClassName1, ..., argClassNameN")),Object(o.b)("p",null,"List of class names of property arguments. Each name is defined by a class ID."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(s.a,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=abstract",mdxType:"CodeSample"}),Object(o.b)("p",null,"**",Object(o.b)("br",{parentName:"p"}),"\n","**"))}b.isMDXComponent=!0}}]);