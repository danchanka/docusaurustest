(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{232:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var r=a(3),o=a(7),s=(a(0),a(424)),i=a(57),n={title:"Recursion (RECURSION)"},c={unversionedId:"Recursion_RECURSION_",id:"Recursion_RECURSION_",isDocsHomePage:!1,title:"Recursion (RECURSION)",description:"The recursion operator is an operator that creates a property which sequentially performs two operations:",source:"@site/docs/Recursion_RECURSION_.md",slug:"/Recursion_RECURSION_",permalink:"/docusaurustest/docs/Recursion_RECURSION_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Recursion_RECURSION_.md",version:"current",sidebar:"docs",previous:{title:"Partitioning / sorting (PARTITION ... ORDER)",permalink:"/docusaurustest/docs/Partitioning_sorting_PARTITION_..._ORDER_"},next:{title:"Distribution (UNGROUP)",permalink:"/docusaurustest/docs/Distribution_UNGROUP_"}},l=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The ",Object(s.b)("em",{parentName:"p"},"recursion")," operator is an operator that creates a ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Properties"},"property")," which sequentially performs two operations:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Recursively builds an intermediate property (result) with an additional first parameter (operation number) as follows:",Object(s.b)("ol",{parentName:"li"},Object(s.b)("li",{parentName:"ol"},"result(0, o1, o2, ..., oN) = initial(o1, ..., oN), where initial is an ",Object(s.b)("em",{parentName:"li"},"initial")," property."),Object(s.b)("li",{parentName:"ol"},"result(i+1, o1, o2, ..., oN) = step(o1, ..., oN, $o1, $o2, ..., $oN) IF result(i, $o1, $o2, ..., $oN), where step is a ",Object(s.b)("em",{parentName:"li"},"step")," property."))),Object(s.b)("li",{parentName:"ol"},"For all values of the obtained property, it calculates the given\xa0",Object(s.b)("a",{parentName:"li",href:"/docusaurustest/docs/Set_operations#func"},"aggregate function"),"\xa0grouping by all its parameters except the operation number.")),Object(s.b)("p",null,"Currently, only two types of aggregate functions are supported for the recursion operator: ",Object(s.b)("strong",{parentName:"p"},"SUM")," and\xa0",Object(s.b)("strong",{parentName:"p"},"OR"),". The latter is used in the case when the initial value and step are of class ",Object(s.b)("strong",{parentName:"p"},"BOOLEAN."),"\xa0",Object(s.b)("strong",{parentName:"p"},"SUM")," is used in all other cases."),Object(s.b)("p",null,"Note that sets of objects may begin to repeat after a certain number of iterations. In this case, we say that a cycle is formed. There are three policies for working with cycles:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("strong",{parentName:"li"},"CYCLES YES")," - cycles are allowed. In this case, when a cycle is detected, the value of the property will be equal to the maximum allowed value for the value class of this property. This policy is not supported when the initial value and step are of class ",Object(s.b)("strong",{parentName:"li"},"BOOLEAN"),"."),Object(s.b)("li",{parentName:"ol"},Object(s.b)("strong",{parentName:"li"},"CYCLES NO")," (default) - cycles are not allowed. It works similarly to the previous policy, but an additional constraint is created that the value of the obtained property should not be equal to the maximum value (which just means that a cycle has formed for this set of objects)."),Object(s.b)("li",{parentName:"ol"},Object(s.b)("strong",{parentName:"li"},"CYCLES IMPOSSIBLE")," - cycles are impossible. As a rule, it is used if there is a counter among the objects which increases at each iteration and, as a result, cannot be repeated.")),Object(s.b)("p",null,"When using the recursion operator, it is important to make sure that the first step execution process is finite, that is, the step value will sooner or later become ",Object(s.b)("strong",{parentName:"p"},"NULL"),". (This refers primarily to a ",Object(s.b)("strong",{parentName:"p"},"CYCLES IMPOSSIBLE")," policy because otherwise the recursion will stop at the first cycle found). If this condition is not met, the operation will be forced to stop depending on the settings of the SQL server."),Object(s.b)("h3",{id:"language"},"Language"),Object(s.b)("p",null,"To declare a property that implements recursion, use the ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/RECURSION_operator"},Object(s.b)("strong",{parentName:"a"},"RECURSION")," operator"),"."),Object(s.b)("h3",{id:"examples"},"Examples"),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=recursion1",mdxType:"CodeSample"}))}u.isMDXComponent=!0}}]);