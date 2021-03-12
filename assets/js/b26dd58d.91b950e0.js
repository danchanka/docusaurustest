(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{321:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(3),o=a(7),r=(a(0),a(423)),s=a(57),i={title:"ABSTRACT operator (action)"},c={unversionedId:"ABSTRACT_operator_action",id:"ABSTRACT_operator_action",isDocsHomePage:!1,title:"ABSTRACT operator (action)",description:"The\xa0ABSTRACT operator -\xa0creating an\xa0abstract action.",source:"@site/docs/ABSTRACT_operator_action.md",slug:"/ABSTRACT_operator_action",permalink:"/docusaurustest/docs/ABSTRACT_operator_action",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/ABSTRACT_operator_action.md",version:"current",sidebar:"docs",previous:{title:"Operator{...}",permalink:"/docusaurustest/docs/Operator_..."},next:{title:"ACTIVATE operator",permalink:"/docusaurustest/docs/ACTIVATE_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:p};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The\xa0",Object(r.b)("strong",{parentName:"p"},"ABSTRACT")," operator -\xa0creating an\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Action_extension"},"abstract action"),".\xa0"),Object(r.b)("h3",{id:"syntax"},"Syntax"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"ABSTRACT [type [exclusionType]] [FIRST | LAST] [CHECKED] (argClassName1, ..., argClassNameN) \n")),Object(r.b)("h3",{id:"description"},"Description"),Object(r.b)("p",null,"The\xa0",Object(r.b)("strong",{parentName:"p"},"ABSTRACT"),"\xa0operator creates an abstract action, the implementation of which can be defined later (for example, in other\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Modules"},"modules")," dependent on the module containing the\xa0",Object(r.b)("strong",{parentName:"p"},"ABSTRACT"),"\xa0action). Implementations are added to the action using the\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/ACTION+_instruction"},"instruction + ="),". When executing ",Object(r.b)("strong",{parentName:"p"},"MULTI")," or ",Object(r.b)("strong",{parentName:"p"},"CASE")," type abstract actions, their\xa0matching\xa0implementation is selected and executed. The selection of the matching implementation depends on the\xa0selection conditions that are defined when adding implementations, and on the\xa0",Object(r.b)("strong",{parentName:"p"},"ABSTRACT")," operator type."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"CASE")," - a general case.**\xa0",Object(r.b)("strong",{parentName:"li"},"The selection condition will be explicitly specified in the implementation using the\xa0["),"WHEN**\xa0block](/docusaurustest/docs/ACTION+_instruction)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"MULTI"),"\xa0- ",Object(r.b)("a",{parentName:"li",href:"/docusaurustest/docs/Branching_CASE_IF_MULTI#poly"},"a polymorphic form"),".\xa0The selection condition is that the parameters\xa0match the implementation\xa0",Object(r.b)("a",{parentName:"li",href:"/docusaurustest/docs/CLASS_operator"},"signature"),". This type is the default type and need not be explicitly specified.")),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Branching_CASE_IF_MULTI#exclusive"},"type of mutual exclusion"),"\xa0of an operator determines whether several conditions for the implementation of an abstract action can simultaneously be met with a certain set of parameters. The\xa0",Object(r.b)("strong",{parentName:"p"},"EXCLUSIVE\xa0"),"type indicates that implementation conditions cannot be met simultaneously. The\xa0",Object(r.b)("strong",{parentName:"p"},"OVERRIDE"),"\xa0type allows several simultaneously fulfilled conditions, while which implementation is ultimately selected is determined by the keywords\xa0",Object(r.b)("strong",{parentName:"p"},"FIRST"),"\xa0and\xa0",Object(r.b)("strong",{parentName:"p"},"LAST"),"."),Object(r.b)("p",null,"When performing a\xa0",Object(r.b)("strong",{parentName:"p"},"LIST"),"\xa0abstract action, all implementations are executed sequentially.**\xa0",Object(r.b)("strong",{parentName:"p"},"The implementation order is determined by the keywords "),"FIRST",Object(r.b)("strong",{parentName:"p"}," and "),"LAST**."),Object(r.b)("p",null,"The\xa0",Object(r.b)("strong",{parentName:"p"},"ABSTRACT"),"\xa0operator cannot be used inside the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Operator_..."},Object(r.b)("strong",{parentName:"a"},"{...}")," operator"),"."),Object(r.b)("h3",{id:"parameters"},"Parameters"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"type")),Object(r.b)("p",null,"Type of abstract action. It is specified by one of these keywords:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"CASE")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"MULTI")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"LIST"))),Object(r.b)("p",null,"The default value is ",Object(r.b)("strong",{parentName:"p"},"MULTI"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"exclusionType")),Object(r.b)("p",null,"Type of mutual exclusion. One of these keywords:\xa0",Object(r.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0or\xa0",Object(r.b)("strong",{parentName:"p"},"OVERRIDE"),". Unless explicitly specified, in a\xa0",Object(r.b)("strong",{parentName:"p"},"MULTI"),"\xa0abstract action the default type of mutual exclusion is\xa0",Object(r.b)("strong",{parentName:"p"},"EXCLUSIVE"),",\xa0and in a ",Object(r.b)("strong",{parentName:"p"},"CASE")," action\xa0the default type is\xa0",Object(r.b)("strong",{parentName:"p"},"OVERRIDE"),". For a ",Object(r.b)("strong",{parentName:"p"},"LIST")," abstract action the type of mutual exclusion is not specified."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"FIRST")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"LAST")),Object(r.b)("p",null,"Keywords. When the word\xa0",Object(r.b)("strong",{parentName:"p"},"FIRST")," is specified, implementations will be added to the top of the implementations list; when ",Object(r.b)("strong",{parentName:"p"},"LAST"),"\xa0is specified, implementations will be added to the end of the implementations list.\xa0Unless specified, the default is\xa0",Object(r.b)("strong",{parentName:"p"},"FIRST")," (except ",Object(r.b)("strong",{parentName:"p"},"LIST"),", where the default is ",Object(r.b)("strong",{parentName:"p"},"LAST"),")"),Object(r.b)("p",null,"For abstract actions such as ",Object(r.b)("strong",{parentName:"p"},"CASE"),"\xa0and ",Object(r.b)("strong",{parentName:"p"},"MULTI")," with the type of mutual exclusion ",Object(r.b)("strong",{parentName:"p"},"OVERRIDE"),", specifying ",Object(r.b)("strong",{parentName:"p"},"FIRST")," will mean that of the matching implementations, the last one added will be executed. For actions such as ",Object(r.b)("strong",{parentName:"p"},"LIST"),", specifying ",Object(r.b)("strong",{parentName:"p"},"FIRST"),"\xa0will mean that implementations will be executed in the reverse order of their addition.\xa0"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"CHECKED")),Object(r.b)("p",null,"Keyword. If specified, the platform will automatically check\xa0that at least one implementation is defined for all descendants of the argument classes (or exactly one, if the conditions are mutually exclusive)."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"argClassName1, ..., argClassNameN")),Object(r.b)("p",null,"List of class names of property arguments. Each name is defined by a ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#classid-broken"},"class ID"),"."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=abstract",mdxType:"CodeSample"}),Object(r.b)("p",null,"**",Object(r.b)("br",{parentName:"p"}),"\n","**"))}l.isMDXComponent=!0}}]);