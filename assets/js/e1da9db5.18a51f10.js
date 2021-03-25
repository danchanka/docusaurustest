(window.webpackJsonp=window.webpackJsonp||[]).push([[606],{677:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return a})),r.d(t,"default",(function(){return c}));var o=r(3),n=r(7),i=(r(0),r(750)),p={title:"UNGROUP operator"},s={unversionedId:"UNGROUP_operator",id:"UNGROUP_operator",isDocsHomePage:!1,title:"UNGROUP operator",description:"The\xa0UNGROUP\xa0operator creates a property that implements distribution\xa0in an extended form.",source:"@site/docs/UNGROUP_operator.md",slug:"/UNGROUP_operator",permalink:"/docusaurustest/docs/next/UNGROUP_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/UNGROUP_operator.md",version:"current",sidebar:"docs",previous:{title:"STRUCT operator",permalink:"/docusaurustest/docs/next/STRUCT_operator"},next:{title:"Object group operator",permalink:"/docusaurustest/docs/next/Object_group_operator"}},a=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:a};function c(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The\xa0",Object(i.b)("strong",{parentName:"p"},"UNGROUP"),"\xa0operator creates a ",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"property")," that implements ",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Distribution_UNGROUP_"},"distribution"),"\xa0in an extended form."),Object(i.b)("h3",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"UNGROUP \npropertyId [BY groupExpr1, ..., groupExprM] \ndistributionType exPropertyId [BY exGroupExpr1, ..., exGroupExprM]\n[ORDER [DESC] orderExpr1, ..., orderExprK]\n[WHERE whereExpr]\n")),Object(i.b)("p",null,"where ",Object(i.b)("em",{parentName:"p"},"distributionType")," can be described in several ways:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"PROPORTION [STRICT] ROUND(digits)\nLIMIT [STRICT]\n")),Object(i.b)("p",null,"\xa0",Object(i.b)("strong",{parentName:"p"},"Description")),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"UNGROUP"),' operator\xa0creates a property that distributes a certain value among object collections of the same group on a "many-to-many"basis.'),Object(i.b)("p",null,"The first block, ",Object(i.b)("strong",{parentName:"p"},"BY"),", describes groups that the set of object collections will be broken into. If the ",Object(i.b)("strong",{parentName:"p"},"BY")," block is not specified, all object collections are considered to belong to the same group.\xa0"),Object(i.b)("p",null,"The second ",Object(i.b)("strong",{parentName:"p"},"BY")," block describes additional groups that the result will be grouped by for checking constraints / calculating proportions. If the second block\xa0",Object(i.b)("strong",{parentName:"p"},"BY"),"\xa0is not specified, all object collections are considered to belong to the same group.\xa0"),Object(i.b)("p",null,"The\xa0",Object(i.b)("strong",{parentName:"p"},"ORDER\xa0"),"block defines the order in which distribution will be done. The defined order must be uniquely determined."),Object(i.b)("p",null,"The\xa0",Object(i.b)("strong",{parentName:"p"},"WHERE\xa0"),"block defines a condition under which an object collection will participate in distribution operation."),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("p",null,"**",Object(i.b)("br",{parentName:"p"}),"\n","**"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"propertyId")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#propertyid-broken"},"ID")," of the distributed property. The value of this property must be numeric, and the number of parameters must be equal to the number of groups in the ",Object(i.b)("strong",{parentName:"p"},"BY")," block. When calculating the values of group/partition expressions will be passed to this property as an input."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"groupExpr1, ..., groupExprM"),"\xa0\xa0"),Object(i.b)("p",null,"\xa0List of group expressions.\xa0"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"distributionType")),Object(i.b)("p",null,"Distribution type. These are of the following types:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"PROPORTION")),Object(i.b)("p",null,"Keyword specifying the use of proportional distribution. In this case, the value of the distributed property for a particular group is distributed proportionally among the object collections belonging to the group. The proportion is defined by the ",Object(i.b)("em",{parentName:"p"},"expr")," expression that is specified after the distribution type."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"STRICT")),Object(i.b)("p",null,"When this keyword is specified, the value of the distributed property must be exactly (without a remainder) distributed between the object collections belonging to the group. If after distribution there is a remainder (which may also be negative), it is added to the first object collection in accordance with the order defined in the ",Object(i.b)("strong",{parentName:"p"},"ORDER")," block."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"ROUND(digits)")),Object(i.b)("p",null,"Specifies the number of decimal places the value will be rounded to."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"digits")," \u2013 ",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Literals#intliteral-broken"},"Integer literal")," specifying the number of decimal places.\xa0"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"LIMIT")),Object(i.b)("p",null,"A keyword specifying the use of distribution with specified limits. In this case, the value of the distributed property is initially set for the first object collection. If the limit is exceeded for this set, the limit is set for the first object collection, and the rest of the value of the distributed property is assigned to the second set of objects. It is then checked for exceeding the limit for the second object collection, and so on. The limit is defined by the ",Object(i.b)("em",{parentName:"p"},"expr")," expression specified after specifying of the distribution type."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"STRICT")),Object(i.b)("p",null,"When this keyword is specified, the value of the distributed property must be exactly (without a remainder) distributed between the object collections belonging to the group. If after distribution there is a remainder, it is added to the last object collection in accordance with the order specified in the\xa0",Object(i.b)("strong",{parentName:"p"},"ORDER")," block."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"exPropertyId")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#propertyid-broken"},"ID"),"\xa0of the property that defines a proportion for ",Object(i.b)("strong",{parentName:"p"},"PROPORTION")," type distributions, and defines limits for\xa0",Object(i.b)("strong",{parentName:"p"},"LIMIT"),"\xa0type distributions. The value of this property must be numeric, and the number of parameters must be equal to the number of groups in the\xa0",Object(i.b)("strong",{parentName:"p"},"BY")," block.\xa0"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"exGroupExpr1, ..., exGroupExprM"),"\xa0\xa0"),Object(i.b)("p",null,"\xa0List of additional group expressions.\xa0"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"DESC")),Object(i.b)("p",null,"Keyword. Specifies a reverse iterate order for object collections.\xa0"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"orderExpr1, ..., orderExprK")),Object(i.b)("p",null,"A list of expressions that determine the order in which object collections will be iterated when calculating the aggregate function or during distribution. To determine the order, first the value of the first expression is used; then, if equal, the value of the second one is used, etc.\xa0"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"whereExpr")),Object(i.b)("p",null,"Filtering expression. Only object groups for which the value of the filtering expression is not\xa0",Object(i.b)("strong",{parentName:"p"},"NULL")," will participate in the grouping."),Object(i.b)("p",null,"At the moment, the support of the ",Object(i.b)("strong",{parentName:"p"},"UNGROUP")," operator is not implemented."),Object(i.b)("h3",{id:"examples"},"Examples"))}c.isMDXComponent=!0}}]);