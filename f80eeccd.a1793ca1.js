(window.webpackJsonp=window.webpackJsonp||[]).push([[338],{408:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return p})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return i})),o.d(t,"default",(function(){return u}));var a=o(3),r=o(7),n=(o(0),o(421)),c=o(56),p={title:"Property change (CHANGE)"},s={unversionedId:"Property_change_CHANGE",id:"Property_change_CHANGE",isDocsHomePage:!1,title:"Property change (CHANGE)",description:"The property change operator allows you to change the values of one property (write) to the value of another property (read) for all object collections for which the value of a third property (condition) is not NULL. The condition can be omitted (in which case it is considered to be equal to TRUE).",source:"@site/docs\\Property_change_CHANGE.md",slug:"/Property_change_CHANGE",permalink:"/docusaurustest/docs/Property_change_CHANGE",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Property_change_CHANGE.md",version:"current",sidebar:"docs",previous:{title:"State change",permalink:"/docusaurustest/docs/State_change"},next:{title:"New object (NEW)",permalink:"/docusaurustest/docs/New_object_NEW"}},i=[{value:"Changeable properties",id:"changeable-properties",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:i};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The ",Object(n.b)("em",{parentName:"p"},"property change")," operator allows you to change the values of one property (",Object(n.b)("em",{parentName:"p"},"write"),") to the value of another property (",Object(n.b)("em",{parentName:"p"},"read"),") for all object collections for which the value of a third property (",Object(n.b)("em",{parentName:"p"},"condition"),") is not ",Object(n.b)("strong",{parentName:"p"},"NULL"),". The condition can be omitted (in which case it is considered to be equal to ",Object(n.b)("strong",{parentName:"p"},"TRUE"),")."),Object(n.b)("h3",{id:"changeable-properties"},"Changeable properties"),Object(n.b)("p",null,"In general, the property to be written should be ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_properties_DATA"}),"data"),", but the platform also allows writing to properties created using the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE"}),"selection")," operator. In this case, the platform determines the condition that is met in this selection operator for the created property; the property corresponding to that condition is written to. Accordingly, all properties that can be written to we'll call ",Object(n.b)("em",{parentName:"p"},"mutable"),"."),Object(n.b)("p",null,"In addition to the above, mutable properties are also properties created using the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Extremum_MAX_MIN"}),"extremum operator"),"\xa0and\xa0",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Logical_operators_AND_OR_NOT_XOR"}),"logical operators")," (which are basically varieties of the selection operator)"),Object(n.b)("h3",{id:"language"},"Language"),Object(n.b)("p",null,"To declare an action that implements property change, use the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/CHANGE_operator"}),Object(n.b)("strong",{parentName:"a"},"CHANGE")," operator"),"."),Object(n.b)("h3",{id:"examples"},"Examples"),Object(n.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=assign",mdxType:"CodeSample"}))}u.isMDXComponent=!0}}]);