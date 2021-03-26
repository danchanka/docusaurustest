(window.webpackJsonp=window.webpackJsonp||[]).push([[512,436],{57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),l=n(0),o=n.n(l),i=n(750),c=n(751),b={},s={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},u=[],p=function(e){var t=e.url,n=e.lines,a=Object(l.useState)(""),r=a[0],b=a[1];return Object(l.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return b(e)}))}),[t,b]),r?n?Object(i.b)(o.a.Fragment,null,Object(i.b)(c.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},r),Object(i.b)("br",null)):Object(i.b)(o.a.Fragment,null,Object(i.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(i.b)("br",null)):Object(i.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:u,CodeSample:p};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},583:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),l=(n(0),n(750)),o=n(57),i={title:"Set operations: Overview",sidebar_label:"Overview"},c={unversionedId:"Set_operations",id:"Set_operations",isDocsHomePage:!1,title:"Set operations: Overview",description:"One of the key features of the platform is the ability to execute certain operations for all object collections for which the values of one or more properties are not\xa0NULL. In the property logic such an operation is the calculation of various\xa0aggregate functions.",source:"@site/docs/Set_operations.md",slug:"/Set_operations",permalink:"/docusaurustest/docs/next/Set_operations",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Set_operations.md",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)",permalink:"/docusaurustest/docs/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"},next:{title:"Grouping (GROUP)",permalink:"/docusaurustest/docs/next/Grouping_GROUP_"}},b=[{value:"Aggregate functions",id:"func",children:[]},{value:"Operation correctness",id:"correct",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"One of the key features of the platform is the ability to execute certain operations for all object collections for which the values of one or more ",Object(l.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"properties")," are not\xa0",Object(l.b)("strong",{parentName:"p"},"NULL"),". In the property logic such an operation is the calculation of various\xa0",Object(l.b)("em",{parentName:"p"},"aggregate functions"),".\xa0"),Object(l.b)("h3",{id:"func"},"Aggregate functions"),Object(l.b)("p",null,"An aggregate function\xa0calculates a certain\xa0",Object(l.b)("em",{parentName:"p"},"result"),"\xa0as a single object on a set of object collections. This function is defined by the\xa0",Object(l.b)("em",{parentName:"p"},"initial value"),"\xa0(typically\xa0",Object(l.b)("strong",{parentName:"p"},"NULL"),"),\xa0",Object(l.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"properties"),"\xa0that it uses (",Object(l.b)("em",{parentName:"p"},"operands"),"),\xa0",Object(l.b)("em",{parentName:"p"},"operation of addition"),"\xa0to the\xa0",Object(l.b)("em",{parentName:"p"},"intermediate result"),"\xa0of the current operand values, and\xa0",Object(l.b)("em",{parentName:"p"},"conversion function"),"\xa0of the intermediate result to the final (typically the intermediate result is the final result)."),Object(l.b)("p",null,"Aggregate function is\xa0",Object(l.b)("em",{parentName:"p"},"commutative")," if the order in which the object collections of the original set are iterated over does not matter when calculating the result.\xa0"),Object(l.b)("p",null,"The table below shows the currently supported types of aggregate functions:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type/instruction option"),Object(l.b)("th",{parentName:"tr",align:null},"Initial value"),Object(l.b)("th",{parentName:"tr",align:null},"Names of the operands"),Object(l.b)("th",{parentName:"tr",align:null},"Add operation"),Object(l.b)("th",{parentName:"tr",align:null},"Conversion function"),Object(l.b)("th",{parentName:"tr",align:null},"Commutativity"),Object(l.b)("th",{parentName:"tr",align:null},"Data type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"SUM"),Object(l.b)("td",{parentName:"tr",align:null},"NULL"),Object(l.b)("td",{parentName:"tr",align:null},"operand"),Object(l.b)("td",{parentName:"tr",align:null},"result = result (+) operand"),Object(l.b)("td",{parentName:"tr",align:null},"result"),Object(l.b)("td",{parentName:"tr",align:null},"+"),Object(l.b)("td",{parentName:"tr",align:null},"number")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MAX"),Object(l.b)("td",{parentName:"tr",align:null},"NULL"),Object(l.b)("td",{parentName:"tr",align:null},"operand"),Object(l.b)("td",{parentName:"tr",align:null},"result = max(result, operand)"),Object(l.b)("td",{parentName:"tr",align:null},"result"),Object(l.b)("td",{parentName:"tr",align:null},"+"),Object(l.b)("td",{parentName:"tr",align:null},"any comparable")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MIN"),Object(l.b)("td",{parentName:"tr",align:null},"NULL"),Object(l.b)("td",{parentName:"tr",align:null},"operand"),Object(l.b)("td",{parentName:"tr",align:null},"result = min(result, operand)"),Object(l.b)("td",{parentName:"tr",align:null},"result"),Object(l.b)("td",{parentName:"tr",align:null},"+"),Object(l.b)("td",{parentName:"tr",align:null},"any comparable")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"CONCAT")),Object(l.b)("td",{parentName:"tr",align:null},"NULL"),Object(l.b)("td",{parentName:"tr",align:null},"separator, operand"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"result = CONCAT separator, result, operand")),Object(l.b)("td",{parentName:"tr",align:null},"result"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},"string")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"LAST / PREV"),Object(l.b)("td",{parentName:"tr",align:null},"NULL"),Object(l.b)("td",{parentName:"tr",align:null},"where, operand"),Object(l.b)("td",{parentName:"tr",align:null},"result = IF where THEN operand ELSE result"),Object(l.b)("td",{parentName:"tr",align:null},"result"),Object(l.b)("td",{parentName:"tr",align:null},"-"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"any"))))),Object(l.b)("p",null,"From the perspective of determining the set of object collections and the result display method, four main operators for working with sets can be distinguished:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docusaurustest/docs/next/Grouping_GROUP_"},"Group (GROUP)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docusaurustest/docs/next/Partitioning_sorting_PARTITION_..._ORDER_"},"Partition/order (PARTITION ... ORDER)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docusaurustest/docs/next/Recursion_RECURSION_"},"Recursion (RECURSION)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docusaurustest/docs/next/Distribution_UNGROUP_"},"Distribution (UNGROUP)"))),Object(l.b)("h3",{id:"correct"},"Operation correctness"),Object(l.b)("p",null,"You should consider that during each operation on a set of object collections, this set must be finite. In this case, the operation is called\xa0",Object(l.b)("em",{parentName:"p"},"correct"),"."),Object(l.b)("h3",{id:"examples"},"Examples"),Object(l.b)(o.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=PropertySample&block=set",mdxType:"CodeSample"}),Object(l.b)("p",null,"**",Object(l.b)("br",{parentName:"p"}),"\n","**"),Object(l.b)("p",null,"There are several non-trivial cases when the operation is correct but the platform cannot determine this. For example, if the only limiting condition for a parameter is whether it falls within the range:"),Object(l.b)(o.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=PropertySample&block=set2",mdxType:"CodeSample"}))}u.isMDXComponent=!0}}]);