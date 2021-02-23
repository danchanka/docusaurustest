(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{345:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),o=(r(0),r(421)),s=r(56),p={title:"RECURSION operator"},i={unversionedId:"RECURSION_operator",id:"RECURSION_operator",isDocsHomePage:!1,title:"RECURSION operator",description:"The RECURSION\xa0operator\xa0creates a\xa0property that implements\xa0recursion.",source:"@site/docs\\RECURSION_operator.md",slug:"/RECURSION_operator",permalink:"/docusaurustest/docs/RECURSION_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/RECURSION_operator.md",version:"current",sidebar:"docs",previous:{title:"PREV operator",permalink:"/docusaurustest/docs/PREV_operator"},next:{title:"STRUCT operator",permalink:"/docusaurustest/docs/STRUCT_operator"}},c=[{value:"Syntax\xa0",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"RECURSION\xa0"),"operator\xa0creates a\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Properties"}),"property")," that implements\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Recursion_RECURSION"}),"recursion"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax\xa0"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"RECURSION initialExpr STEP stepExpr [CYCLES YES | CYCLES NO | CYCLES IMPOSSIBLE]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"RECURSION")," operator creates a property that implements recursion. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"Expressions")," that describe the next step of the recursion may access not only the property parameters but also the parameters at the previous step. This access has the syntax ",Object(o.b)("strong",{parentName:"p"},"$name"),", where ",Object(o.b)("strong",{parentName:"p"},"name")," is the name of the parameter."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"initialExpr")),Object(o.b)("p",null,"An expression whose value is the initial property."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"stepExpr")),Object(o.b)("p",null,"An expression whose value is a property of a recursion step. Allows a special syntax (",Object(o.b)("strong",{parentName:"p"},"$name"),") to access the value of the ",Object(o.b)("strong",{parentName:"p"},"name")," parameter in the previous step."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CYCLES YES")),Object(o.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Specifies that cycles are allowed."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CYCLES NO")),Object(o.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Specifies that cycles are not allowed. This option is used by default."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CYCLES IMPOSSIBLE")),Object(o.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Specifies that cycles are not possible."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=recursion1",mdxType:"CodeSample"}),Object(o.b)("p",null,"**",Object(o.b)("br",{parentName:"p"}),"\n","**"),Object(o.b)("p",null,"Note that Fibonacci numbers can be implemented without adding the to parameter:"),Object(o.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=recursion2",mdxType:"CodeSample"}),Object(o.b)("p",null,"In the current implementation, however, the platform optimizer is less focused on working with numbers, so it cannot yet determine that the step function is increasing and stop the recursion on its own,\xa0artificially\xa0creating the corresponding condition, as is done in the above example. Even more questions arise when this property needs to be displayed in a dynamic list (and in a static list this cannot be done at all, since the number of non-",Object(o.b)("strong",{parentName:"p"},"NULL")," values is infinite). In this case, the current order in this list must also be taken into account and also pushed\xa0into the query. These limitations will be removed in future versions, but in the current version it is recommended to take them into account."))}b.isMDXComponent=!0}}]);