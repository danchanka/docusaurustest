(window.webpackJsonp=window.webpackJsonp||[]).push([[182,461],{256:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=(n(0),n(750)),s=n(58),c={title:"ABSTRACT operator (action)"},i={unversionedId:"ABSTRACT_operator_action_",id:"version-1.0.0/ABSTRACT_operator_action_",isDocsHomePage:!1,title:"ABSTRACT operator (action)",description:"The\xa0ABSTRACT operator -\xa0creating an\xa0abstract action.",source:"@site/versioned_docs/version-1.0.0/ABSTRACT_operator_action_.md",slug:"/ABSTRACT_operator_action_",permalink:"/docusaurustest/docs/ABSTRACT_operator_action_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/ABSTRACT_operator_action_.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Operator{...}",permalink:"/docusaurustest/docs/Operator_..._"},next:{title:"ACTIVATE operator",permalink:"/docusaurustest/docs/ACTIVATE_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The\xa0",Object(r.b)("strong",{parentName:"p"},"ABSTRACT")," operator -\xa0creating an\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Action_extension"},"abstract action"),".\xa0"),Object(r.b)("h3",{id:"syntax"},"Syntax"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"ABSTRACT [type [exclusionType]] [FIRST | LAST] [CHECKED] (argClassName1, ..., argClassNameN) \n")),Object(r.b)("h3",{id:"description"},"Description"),Object(r.b)("p",null,"The\xa0",Object(r.b)("strong",{parentName:"p"},"ABSTRACT"),"\xa0operator creates an abstract action, the implementation of which can be defined later (for example, in other\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Modules"},"modules")," dependent on the module containing the\xa0",Object(r.b)("strong",{parentName:"p"},"ABSTRACT"),"\xa0action). Implementations are added to the action using the\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/ACTION+_instruction"},"instruction + ="),". When executing ",Object(r.b)("strong",{parentName:"p"},"MULTI")," or ",Object(r.b)("strong",{parentName:"p"},"CASE")," type abstract actions, their\xa0matching\xa0implementation is selected and executed. The selection of the matching implementation depends on the\xa0selection conditions that are defined when adding implementations, and on the\xa0",Object(r.b)("strong",{parentName:"p"},"ABSTRACT")," operator type."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"CASE")," - a general case.**\xa0",Object(r.b)("strong",{parentName:"li"},"The selection condition will be explicitly specified in the implementation using the\xa0["),"WHEN**\xa0block](/docusaurustest/docs/ACTION+_instruction)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"MULTI"),"\xa0- ",Object(r.b)("a",{parentName:"li",href:"/docusaurustest/docs/Branching_CASE_IF_MULTI_#poly"},"a polymorphic form"),".\xa0The selection condition is that the parameters\xa0match the implementation\xa0",Object(r.b)("a",{parentName:"li",href:"/docusaurustest/docs/CLASS_operator"},"signature"),". This type is the default type and need not be explicitly specified.")),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Branching_CASE_IF_MULTI_#exclusive"},"type of mutual exclusion"),"\xa0of an operator determines whether several conditions for the implementation of an abstract action can simultaneously be met with a certain set of parameters. The\xa0",Object(r.b)("strong",{parentName:"p"},"EXCLUSIVE\xa0"),"type indicates that implementation conditions cannot be met simultaneously. The\xa0",Object(r.b)("strong",{parentName:"p"},"OVERRIDE"),"\xa0type allows several simultaneously fulfilled conditions, while which implementation is ultimately selected is determined by the keywords\xa0",Object(r.b)("strong",{parentName:"p"},"FIRST"),"\xa0and\xa0",Object(r.b)("strong",{parentName:"p"},"LAST"),"."),Object(r.b)("p",null,"When performing a\xa0",Object(r.b)("strong",{parentName:"p"},"LIST"),"\xa0abstract action, all implementations are executed sequentially.**\xa0",Object(r.b)("strong",{parentName:"p"},"The implementation order is determined by the keywords "),"FIRST",Object(r.b)("strong",{parentName:"p"}," and "),"LAST**."),Object(r.b)("p",null,"The\xa0",Object(r.b)("strong",{parentName:"p"},"ABSTRACT"),"\xa0operator cannot be used inside the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Operator_..._"},Object(r.b)("strong",{parentName:"a"},"{...}")," operator"),"."),Object(r.b)("h3",{id:"parameters"},"Parameters"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"type")),Object(r.b)("p",null,"Type of abstract action. It is specified by one of these keywords:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"CASE")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"MULTI")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"LIST"))),Object(r.b)("p",null,"The default value is ",Object(r.b)("strong",{parentName:"p"},"MULTI"),"."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"exclusionType")),Object(r.b)("p",null,"Type of mutual exclusion. One of these keywords:\xa0",Object(r.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0or\xa0",Object(r.b)("strong",{parentName:"p"},"OVERRIDE"),". Unless explicitly specified, in a\xa0",Object(r.b)("strong",{parentName:"p"},"MULTI"),"\xa0abstract action the default type of mutual exclusion is\xa0",Object(r.b)("strong",{parentName:"p"},"EXCLUSIVE"),",\xa0and in a ",Object(r.b)("strong",{parentName:"p"},"CASE")," action\xa0the default type is\xa0",Object(r.b)("strong",{parentName:"p"},"OVERRIDE"),". For a ",Object(r.b)("strong",{parentName:"p"},"LIST")," abstract action the type of mutual exclusion is not specified."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"FIRST")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"LAST")),Object(r.b)("p",null,"Keywords. When the word\xa0",Object(r.b)("strong",{parentName:"p"},"FIRST")," is specified, implementations will be added to the top of the implementations list; when ",Object(r.b)("strong",{parentName:"p"},"LAST"),"\xa0is specified, implementations will be added to the end of the implementations list.\xa0Unless specified, the default is\xa0",Object(r.b)("strong",{parentName:"p"},"FIRST")," (except ",Object(r.b)("strong",{parentName:"p"},"LIST"),", where the default is ",Object(r.b)("strong",{parentName:"p"},"LAST"),")"),Object(r.b)("p",null,"For abstract actions such as ",Object(r.b)("strong",{parentName:"p"},"CASE"),"\xa0and ",Object(r.b)("strong",{parentName:"p"},"MULTI")," with the type of mutual exclusion ",Object(r.b)("strong",{parentName:"p"},"OVERRIDE"),", specifying ",Object(r.b)("strong",{parentName:"p"},"FIRST")," will mean that of the matching implementations, the last one added will be executed. For actions such as ",Object(r.b)("strong",{parentName:"p"},"LIST"),", specifying ",Object(r.b)("strong",{parentName:"p"},"FIRST"),"\xa0will mean that implementations will be executed in the reverse order of their addition.\xa0"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"CHECKED")),Object(r.b)("p",null,"Keyword. If specified, the platform will automatically check\xa0that at least one implementation is defined for all descendants of the argument classes (or exactly one, if the conditions are mutually exclusive)."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"argClassName1, ..., argClassNameN")),Object(r.b)("p",null,"List of class names of property arguments. Each name is defined by a ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#classid-broken"},"class ID"),"."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=abstract",mdxType:"CodeSample"}),Object(r.b)("p",null,"**",Object(r.b)("br",{parentName:"p"}),"\n","**"))}b.isMDXComponent=!0},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"CodeSample",(function(){return m})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),r=n(0),s=n.n(r),c=n(750),i=n(751),p={},l={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},b=[],m=function(e){var t=e.url,n=e.lines,a=Object(r.useState)(""),o=a[0],p=a[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return p(e)}))}),[t,p]),o?n?Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:b,CodeSample:m};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0}}]);