(window.webpackJsonp=window.webpackJsonp||[]).push([[64,436],{137:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return d}));var n=o(3),a=o(7),s=(o(0),o(750)),r=o(57),i={title:"Property extension"},c={unversionedId:"Property_extension",id:"Property_extension",isDocsHomePage:!1,title:"Property extension",description:'The properties extension technique allows the developer to declare an abstract action in one module\xa0and define its implementation in other modules. This technique is essentially a "postponed definition" of a selection operator, where the operator\u2019s title is defined when the property is declared, and as new functionality (of classes\xa0or static objects) is added, selection options are added to the system. Furthermore, variants of selection (if it is not mutually exclusive) can be added both to the beginning and to the end of the abstract property created.',source:"@site/docs/Property_extension.md",slug:"/Property_extension",permalink:"/docusaurustest/docs/next/Property_extension",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Property_extension.md",version:"current",sidebar:"docs",previous:{title:"Class extension",permalink:"/docusaurustest/docs/next/Class_extension"},next:{title:"Action extension",permalink:"/docusaurustest/docs/next/Action_extension"}},l=[{value:"Polymorphic form",id:"poly",children:[]},{value:"Mutual exclusion of conditions",id:"exclusive",children:[]},{value:"Language",id:"language",children:[]},{value:"Example",id:"example",children:[]}],p={toc:l};function d(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"properties")," ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Extensions"},"extension")," technique allows the developer to declare an ",Object(s.b)("em",{parentName:"p"},"abstract action")," in one ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Modules"},"module"),'\xa0and define its implementation in other modules. This technique is essentially a "postponed definition" of a ',Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"},"selection operator"),", where the operator\u2019s title is defined when the property is declared, and as new functionality (of ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Classes"},"classes"),"\xa0or ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Static_objects"},"static objects"),") is added, selection options are added to the system. Furthermore, variants of selection (if it is not mutually exclusive) can be added both to the beginning and to the end of the abstract property created."),Object(s.b)("p",null,"For abstract properties, the expected classes of parameters must be specified. Then the platform will automatically check that the implementations added match these classes. Also, if necessary, you can check that for all descendants of the parameter classes at least one implementation is specified (or exactly one, if the conditions\xa0are ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"},"mutually exclusive"),")."),Object(s.b)("p",null,"Extension of properties allows you to:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Implement the concept of property polymorphism by analogy with certain object-oriented programming languages."),Object(s.b)("li",{parentName:"ul"},'Remove dependency between modules by adding specific "entry points" to change the way properties are calculated.')),Object(s.b)("h3",{id:"poly"},"Polymorphic form"),Object(s.b)("p",null,"Just as ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_#poly"},"for a selection operator"),", for an abstract property there is a ",Object(s.b)("em",{parentName:"p"},"polymorphic form")," where the selection condition and the result corresponding to it are set by a single property. Accordingly, as in a selection operator,\xa0either belonging to the\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Property_signature_CLASS_"},"signature\xa0"),"of this property or the property itself can be a condition."),Object(s.b)("h3",{id:"exclusive"},"Mutual exclusion of conditions"),Object(s.b)("p",null,"As\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_#exclusive"},"for a selection operator"),", you can specify that all conditions of an abstract property must be\xa0",Object(s.b)("em",{parentName:"p"},"mutually exclusive"),". If this option is set, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."),Object(s.b)("p",null,"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows you to make the code more transparent and readable (especially given a polymorphic form of the abstract property)."),Object(s.b)("h3",{id:"language"},"Language"),Object(s.b)("p",null,"The key instructions that implement the extension procedure are the ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/ABSTRACT_operator"},Object(s.b)("strong",{parentName:"a"},"ABSTRACT")," operator"),",for declaring an abstract action, and the ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Instruction_+="},Object(s.b)("strong",{parentName:"a"},"+=")," instruction"),", for defining its implementation."),Object(s.b)("h3",{id:"example"},"Example"),Object(s.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=abstract",mdxType:"CodeSample"}),Object(s.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=extendproperty",mdxType:"CodeSample"}))}d.isMDXComponent=!0},57:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return p})),o.d(t,"toc",(function(){return d})),o.d(t,"CodeSample",(function(){return u})),o.d(t,"default",(function(){return b}));var n=o(3),a=o(7),s=o(0),r=o.n(s),i=o(750),c=o(751),l={},p={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},d=[],u=function(e){var t=e.url,o=e.lines,n=Object(s.useState)(""),a=n[0],l=n[1];return Object(s.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),a?o?Object(i.b)(r.a.Fragment,null,Object(i.b)(c.a,{className:"lsf",metastring:o,mdxType:"CodeBlock"},a),Object(i.b)("br",null)):Object(i.b)(r.a.Fragment,null,Object(i.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},a),Object(i.b)("br",null)):Object(i.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:d,CodeSample:u};function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,o,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0}}]);