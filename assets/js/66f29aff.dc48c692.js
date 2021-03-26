(window.webpackJsonp=window.webpackJsonp||[]).push([[287,461],{361:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return p}));var r=o(3),a=o(7),n=(o(0),o(750)),s=o(58),i={title:"Recursion (RECURSION)"},c={unversionedId:"Recursion_RECURSION_",id:"version-1.0.0/Recursion_RECURSION_",isDocsHomePage:!1,title:"Recursion (RECURSION)",description:"The recursion operator is an operator that creates a property which sequentially performs two operations:",source:"@site/versioned_docs/version-1.0.0/Recursion_RECURSION_.md",slug:"/Recursion_RECURSION_",permalink:"/docusaurustest/docs/Recursion_RECURSION_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/Recursion_RECURSION_.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Partitioning / sorting (PARTITION ... ORDER)",permalink:"/docusaurustest/docs/Partitioning_sorting_PARTITION_..._ORDER_"},next:{title:"Distribution (UNGROUP)",permalink:"/docusaurustest/docs/Distribution_UNGROUP_"}},l=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:l};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The ",Object(n.b)("em",{parentName:"p"},"recursion")," operator is an operator that creates a ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Properties"},"property")," which sequentially performs two operations:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Recursively builds an intermediate property (result) with an additional first parameter (operation number) as follows:",Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"result(0, o1, o2, ..., oN) = initial(o1, ..., oN), where initial is an ",Object(n.b)("em",{parentName:"li"},"initial")," property."),Object(n.b)("li",{parentName:"ol"},"result(i+1, o1, o2, ..., oN) = step(o1, ..., oN, $o1, $o2, ..., $oN) IF result(i, $o1, $o2, ..., $oN), where step is a ",Object(n.b)("em",{parentName:"li"},"step")," property."))),Object(n.b)("li",{parentName:"ol"},"For all values of the obtained property, it calculates the given\xa0",Object(n.b)("a",{parentName:"li",href:"/docusaurustest/docs/Set_operations#func"},"aggregate function"),"\xa0grouping by all its parameters except the operation number.")),Object(n.b)("p",null,"Currently, only two types of aggregate functions are supported for the recursion operator: ",Object(n.b)("strong",{parentName:"p"},"SUM")," and\xa0",Object(n.b)("strong",{parentName:"p"},"OR"),". The latter is used in the case when the initial value and step are of class ",Object(n.b)("strong",{parentName:"p"},"BOOLEAN."),"\xa0",Object(n.b)("strong",{parentName:"p"},"SUM")," is used in all other cases."),Object(n.b)("p",null,"Note that sets of objects may begin to repeat after a certain number of iterations. In this case, we say that a cycle is formed. There are three policies for working with cycles:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"CYCLES YES")," - cycles are allowed. In this case, when a cycle is detected, the value of the property will be equal to the maximum allowed value for the value class of this property. This policy is not supported when the initial value and step are of class ",Object(n.b)("strong",{parentName:"li"},"BOOLEAN"),"."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"CYCLES NO")," (default) - cycles are not allowed. It works similarly to the previous policy, but an additional constraint is created that the value of the obtained property should not be equal to the maximum value (which just means that a cycle has formed for this set of objects)."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"CYCLES IMPOSSIBLE")," - cycles are impossible. As a rule, it is used if there is a counter among the objects which increases at each iteration and, as a result, cannot be repeated.")),Object(n.b)("p",null,"When using the recursion operator, it is important to make sure that the first step execution process is finite, that is, the step value will sooner or later become ",Object(n.b)("strong",{parentName:"p"},"NULL"),". (This refers primarily to a ",Object(n.b)("strong",{parentName:"p"},"CYCLES IMPOSSIBLE")," policy because otherwise the recursion will stop at the first cycle found). If this condition is not met, the operation will be forced to stop depending on the settings of the SQL server."),Object(n.b)("h3",{id:"language"},"Language"),Object(n.b)("p",null,"To declare a property that implements recursion, use the ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/RECURSION_operator"},Object(n.b)("strong",{parentName:"a"},"RECURSION")," operator"),"."),Object(n.b)("h3",{id:"examples"},"Examples"),Object(n.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=recursion1",mdxType:"CodeSample"}))}p.isMDXComponent=!0},58:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return u})),o.d(t,"toc",(function(){return p})),o.d(t,"CodeSample",(function(){return b})),o.d(t,"default",(function(){return m}));var r=o(3),a=o(7),n=o(0),s=o.n(n),i=o(750),c=o(751),l={},u={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},p=[],b=function(e){var t=e.url,o=e.lines,r=Object(n.useState)(""),a=r[0],l=r[1];return Object(n.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),a?o?Object(i.b)(s.a.Fragment,null,Object(i.b)(c.a,{className:"lsf",metastring:o,mdxType:"CodeBlock"},a),Object(i.b)("br",null)):Object(i.b)(s.a.Fragment,null,Object(i.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},a),Object(i.b)("br",null)):Object(i.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:p,CodeSample:b};function m(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,o,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0}}]);