(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{126:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return n})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return c}));var i=o(3),r=o(7),a=(o(0),o(423)),s={title:"Distribution (UNGROUP)"},n={unversionedId:"Distribution_UNGROUP",id:"Distribution_UNGROUP",isDocsHomePage:!1,title:"Distribution (UNGROUP)",description:"The distribution operator creates a property, the grouping\xa0value of which using sum function will be equal to the value of the specified property (distributable). Accordingly, as for a group operator, for a distribution operator multiple properties (groups) must be set by which the grouping will take place.",source:"@site/docs/Distribution_UNGROUP.md",slug:"/Distribution_UNGROUP",permalink:"/docusaurustest/docs/Distribution_UNGROUP",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Distribution_UNGROUP.md",version:"current",sidebar:"docs",previous:{title:"Recursion (RECURSION)",permalink:"/docusaurustest/docs/Recursion_RECURSION"},next:{title:"Actions",permalink:"/docusaurustest/docs/Actions"}},l=[{value:"Extended form",id:"extended-form",children:[]},{value:"Language",id:"language",children:[]}],u={toc:l};function c(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"distribution")," operator creates a property, the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Grouping_GROUP"},"grouping"),"\xa0value of which using sum function will be equal to the value of the specified property (",Object(a.b)("em",{parentName:"p"},"distributable"),"). Accordingly, as for a group operator, for a distribution operator multiple properties (",Object(a.b)("em",{parentName:"p"},"groups"),") must be set by which the grouping will take place."),Object(a.b)("p",null,"There are many different ways to build this kind of distribution. At present the platform supports the two most commonly used:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Limiting - the distribution result must not exceed the value of the specified property."),Object(a.b)("li",{parentName:"ol"},"Proportional - the distribution result should be directly proportional to the value of a given property (in other words, the ratio of the distribution results for two object collections within the same group should be equal to the ratio of the values of this property for the same object collections).\xa0")),Object(a.b)("p",null,"The operator can work in ",Object(a.b)("em",{parentName:"p"},"non-strict")," mode (used by default). Here the platform tries to calculate the value as close as possible to the value of the distributable property but does not guarantee that they will be equal."),Object(a.b)("p",null,"As for other operations with sets, an ",Object(a.b)("em",{parentName:"p"},"order")," can (and usually must) be defined for the distribution operator."),Object(a.b)("p",null,"The general algorithm of the distribution operator,\xa0depending on the type of distribution, is as follows:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Limiting - distribution is done in the specified order, not exceeding the restriction, until the overall result equals the value of the distributable property. If the operator is working in strict mode and the overall result has not reached the value of the distributable property, the total difference is added to the resulting value of the first object collection."),Object(a.b)("li",{parentName:"ol"},"Proportional - the total of the proportions for each group is calculated, after which a distribution coefficient is determined for each object collection, equal to the ratio of the proportion value for this set of objects to the total amount of the group to which it belongs. Finally, the distribution result is calculated as the product of this coefficient and the value of the distributed property. Since the final (and intermediate) results are rounded (and hence accuracy is lost), the sum of the result of this distribution may differ from the value of the distributed property. Therefore, if the operator is working in strict mode, the difference between these values is added to the resulting value of the first object collection.")),Object(a.b)("h3",{id:"extended-form"},"Extended form"),Object(a.b)("p",null,'The mechanism described above allows distribution only\xa0in "one-to-many" mode. However, in some cases this is not enough, and distribution in "many-to-many" mode is necessary. For this, the platform has the so-called ',Object(a.b)("em",{parentName:"p"},"extended"),"\xa0distribution operator form\xa0(consequently, the basic form will be called ",Object(a.b)("em",{parentName:"p"},"simple"),").\xa0"),Object(a.b)("p",null,"In the extended form of this operator, the conditions for the distribution result are changed as follows:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Limiting - it is not the distribution result itself that must not exceed the value of the specified property, but rather the grouping of the distribution result by certain additional groups must not exceed this value."),Object(a.b)("li",{parentName:"ol"},"Proportional - similar; that is, it is not the result of the distribution itself that must be directly proportional to the value of a certain property, but its grouping by additional groups.")),Object(a.b)("p",null,"The algorithm of the operator\u2019s work likewise changes accordingly."),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"Since the simple form of the operator is semantically very similar to the operator partition/sort, to declare a property that implements a simple distribution the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/PARTITION_operator"},Object(a.b)("strong",{parentName:"a"},"PARTITION")," operator")," is also used."),Object(a.b)("p",null,"For the extended form, use the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/UNGROUP_operator"},Object(a.b)("strong",{parentName:"a"},"UNGROUP")," operator"),Object(a.b)("strong",{parentName:"p"},".")))}c.isMDXComponent=!0}}]);