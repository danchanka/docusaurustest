(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return l}));var r=a(3),o=a(7),s=(a(0),a(424)),n=a(57),c={title:"Operator{...}"},p={unversionedId:"Operator_..._",id:"Operator_..._",isDocsHomePage:!1,title:"Operator{...}",description:"The \xa0{...} operator creates actions that executes a sequence of other actions.",source:"@site/docs/Operator_..._.md",slug:"/Operator_..._",permalink:"/docusaurustest/docs/Operator_..._",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Operator_..._.md",version:"current",sidebar:"docs",previous:{title:"Action operator",permalink:"/docusaurustest/docs/Action_operator"},next:{title:"ABSTRACT operator (action)",permalink:"/docusaurustest/docs/ABSTRACT_operator_action_"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:i};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The \xa0",Object(s.b)("strong",{parentName:"p"},"{...}")," operator creates ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"actions")," that executes a ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Sequence_..._"},"sequence of other actions"),".\xa0"),Object(s.b)("h3",{id:"syntax"},"Syntax"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"{\n    operator1\n    ...\n    operatorN\n}\n")),Object(s.b)("p",null,"Operators can be of two types:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"actionOperator\nLOCAL [NESTED] name1, ..., nameN = returnClass (paramClass1, ..., paramClassN)\n")),Object(s.b)("h3",{id:"description"},"Description"),Object(s.b)("p",null,"A sequence of ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Action_operator"},"action operators"),"\xa0and ",Object(s.b)("strong",{parentName:"p"},"LOCAL")," operators enclosed in braces creates a new action that sequentially executes specified actions and creates specified ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Data_properties_DATA_"},"local properties"),". The area of visibility of the local properties created inside the \xa0",Object(s.b)("strong",{parentName:"p"},"{...}")," operator ends at the end of this operator."),Object(s.b)("h3",{id:"parameters"},"Parameters"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"actionOperator")),Object(s.b)("p",null,"A ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Action_operator#contextdependent"},"context-dependent action operator"),". Each operator is followed by a semicolon, except for operators ending in a closing brace. Extra semicolons are not an error."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"NESTED")),Object(s.b)("p",null,"A keyword that, when specified, marks the local property as ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Session_management#nested"},"nested"),"; that is, all of its changes will be visible in new sessions, and when these sessions are closed, changes to this property will get to the current session. Note that this behavior is similar to the behavior of a regular local property (not ",Object(s.b)("strong",{parentName:"p"},"NESTED"),") when using the ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/NEWSESSION_operator"},Object(s.b)("strong",{parentName:"a"},"NEWSESSION")," operator"),"\xa0with the specified keyword\xa0",Object(s.b)("strong",{parentName:"p"},"NESTED LOCAL"),"\xa0(or just\xa0",Object(s.b)("strong",{parentName:"p"},"NESTED")," if this local property is explicitly specified in the property list)"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"name1, ..., nameN")),Object(s.b)("p",null,"A list of names of the local properties being created. The names are defined\xa0by ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#id-broken"},"simple ID's"),"."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"returnClass")),Object(s.b)("p",null,"The ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#classid-broken"},"class ID"),"\xa0of the returned value of the local property.\xa0"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"argumentClass1, ..., argumentClassN")),Object(s.b)("p",null,"A list of argument class ID's of the local property."),Object(s.b)("h3",{id:"examples"},"Examples"),Object(s.b)(n.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=action",mdxType:"CodeSample"}),Object(s.b)("p",null,"**",Object(s.b)("br",{parentName:"p"}),"\n","**"))}l.isMDXComponent=!0}}]);