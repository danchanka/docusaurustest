(window.webpackJsonp=window.webpackJsonp||[]).push([[482,436],{553:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),c=(n(0),n(750)),r=n(57),s={title:"CASE operator (action)"},i={unversionedId:"CASE_operator_action_",id:"CASE_operator_action_",isDocsHomePage:!1,title:"CASE operator (action)",description:"The\xa0CASE\xa0operator creates an action that implements branching.",source:"@site/docs/CASE_operator_action_.md",slug:"/CASE_operator_action_",permalink:"/docusaurustest/docs/next/CASE_operator_action_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CASE_operator_action_.md",version:"current",sidebar:"docs",previous:{title:"CANCEL operator",permalink:"/docusaurustest/docs/next/CANCEL_operator"},next:{title:"CHANGECLASS operator",permalink:"/docusaurustest/docs/next/CHANGECLASS_operator"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The\xa0",Object(c.b)("strong",{parentName:"p"},"CASE"),"\xa0operator creates an ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Actions"},"action")," that implements ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Branching_CASE_IF_MULTI_"},"branching"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Syntax"),"\xa0"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"CASE [exclusionType]\n    WHEN condition1 THEN action1\n    ...\n    WHEN conditionN THEN actionN\n    [ELSE elseAction]\n")),Object(c.b)("p",null,"Description"),Object(c.b)("p",null,"The\xa0CASE\xa0operator creates an action that executes one of the actions passed to it depending on whether the selection conditions are met. Selection conditions are defined using the properties specified in the\xa0WHEN block. If a selection condition is met, the action specified in the corresponding\xa0THEN block is executed. If none of the conditions is met, the action specified in the\xa0ELSE block will be executed if this block is specified."),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,"*",Object(c.b)("em",{parentName:"p"},"\xa0** "),"exclusionType*"),Object(c.b)("p",null,"**\xa0**",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Branching_CASE_IF_MULTI_#exclusive"},"Type of mutual exclusion"),". Determines whether several conditions can be met simultaneously for a certain set of parameters. It is\xa0specified by one of the keywords:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"EXCLUSIVE")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"OVERRIDE"))),Object(c.b)("p",null,"The\xa0",Object(c.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0type indicates that none of the conditions listed can be met simultaneously. The\xa0",Object(c.b)("strong",{parentName:"p"},"OVERRIDE"),"\xa0type allows several conditions to be met simultaneously, in this case, the action corresponding to the first met condition is executed"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"OVERRIDE"),"\xa0type is used by default."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"condition1 ... conditionN")),Object(c.b)("p",null,"\xa0",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Expression"},"Expressions")," whose values determine the selection conditions.\xa0"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"action1 ... actionN")),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Action_operator#contextdependent"},"Context-dependent operators")," that describe actions that may be called when the corresponding condition is met."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"elseAction")),Object(c.b)("p",null,"A context-dependent operator that describes an action to be executed if none of the conditions is met.\xa0"),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=case",mdxType:"CodeSample"}))}u.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return l})),n.d(t,"default",(function(){return m}));var o=n(3),a=n(7),c=n(0),r=n.n(c),s=n(750),i=n(751),p={},d={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},u=[],l=function(e){var t=e.url,n=e.lines,o=Object(c.useState)(""),a=o[0],p=o[1];return Object(c.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return p(e)}))}),[t,p]),a?n?Object(s.b)(r.a.Fragment,null,Object(s.b)(i.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},a),Object(s.b)("br",null)):Object(s.b)(r.a.Fragment,null,Object(s.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},a),Object(s.b)("br",null)):Object(s.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},b={toc:u,CodeSample:l};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0}}]);