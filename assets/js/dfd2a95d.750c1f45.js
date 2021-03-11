(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{380:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return r})),o.d(t,"toc",(function(){return d})),o.d(t,"default",(function(){return u}));var n=o(3),a=o(7),i=(o(0),o(423)),s=o(57),c={title:"Action extension"},r={unversionedId:"Action_extension",id:"Action_extension",isDocsHomePage:!1,title:"Action extension",description:'The\xa0actions\xa0extension\xa0technique allows the developer to declare an abstract action in one\xa0module\xa0and add to it an implementation in other modules. This technique is essentially a "postponed definition"\xa0of a branch operator, where the operator\u2019s title is defined when the property is declared, and branching conditions are added as new functionality (of classes\xa0or static objects) is added to the system. Furthermore, branching conditions (if branching is not mutually exclusive) can be added both to the beginning and to the end of the abstract action created. Similarly, this technique works with a sequence operator.',source:"@site/docs/Action_extension.md",slug:"/Action_extension",permalink:"/docusaurustest/docs/Action_extension",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Action_extension.md",version:"current",sidebar:"docs",previous:{title:"Property extension",permalink:"/docusaurustest/docs/Property_extension"},next:{title:"Form extension",permalink:"/docusaurustest/docs/Form_extension"}},d=[{value:"Polymorphic form",id:"polymorphic-form",children:[]},{value:"Mutual exclusion of conditions",id:"mutual-exclusion-of-conditions",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:d};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The\xa0",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"actions"),"\xa0",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Extensions"},"extension"),"\xa0technique allows the developer to declare an abstract action in one\xa0",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Modules"},"module"),'\xa0and add to it an implementation in other modules. This technique is essentially a "postponed definition"\xa0of a ',Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Branching_CASE_IF_MULTI"},"branch operator"),", where the operator\u2019s title is defined when the property is declared, and branching conditions are added as new functionality (of ",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Classes"},"classes"),"\xa0or ",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Static_objects"},"static objects"),") is added to the system. Furthermore, branching conditions (if branching is not mutually exclusive) can be added both to the beginning and to the end of the abstract action created. Similarly, this technique works with a ",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Sequence_..."},"sequence operator"),"."),Object(i.b)("p",null,"For abstract actions, the expected classes of parameters must be specified. Then the platform will automatically check that the added implementations match these classes. Also, if necessary, you can check that for all descendants of the parameter classes at least one implementation is specified (or exactly one, if the conditions\xa0are ",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE"},"mutually exclusive"),")."),Object(i.b)("p",null,"Actions extension allows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Implement the concept of action polymorphism by analogy with certain object-oriented programming languages."),Object(i.b)("li",{parentName:"ul"},'Remove dependency between modules by adding specific "entry points," to which new behavior can be added later.')),Object(i.b)("h3",{id:"polymorphic-form"},"Polymorphic form"),Object(i.b)("p",null,"As with a\xa0branching operator, for an abstract action there is\xa0a ",Object(i.b)("em",{parentName:"p"},"polymorphic form"),", where it is possible not to define a condition explicitly, but to use as a condition\xa0matching the ",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Property_signature_CLASS"},"signature"),"\xa0of the action that corresponds to this condition."),Object(i.b)("h3",{id:"mutual-exclusion-of-conditions"},"Mutual exclusion of conditions"),Object(i.b)("p",null,"As\xa0for\xa0a branch operator, you can specify that all conditions of an abstract action must be\xa0",Object(i.b)("em",{parentName:"p"},"mutually exclusive"),". If this option is specified, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."),Object(i.b)("p",null,"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows to make the code more transparent and readable (especially in a polymorphic form of the abstract action)."),Object(i.b)("h3",{id:"language"},"Language"),Object(i.b)("p",null,"The key instructions that implement the extension technique are the ",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/ABSTRACT_operator_action"},Object(i.b)("strong",{parentName:"a"},"ABSTRACT")," operator"),",\xa0for declaring an abstract action, and the\xa0",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/ACTION+_instruction"},Object(i.b)("strong",{parentName:"a"},"ACTION+")," instruction"),",\xa0for adding an implementation to it."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=abstract",mdxType:"CodeSample"}),Object(i.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=extendaction",mdxType:"CodeSample"}))}u.isMDXComponent=!0}}]);