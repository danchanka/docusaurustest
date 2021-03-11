(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{255:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var o=r(3),a=r(7),n=(r(0),r(423)),i=r(57),s={title:"Groups of properties and actions"},p={unversionedId:"Groups_of_properties_and_actions",id:"Groups_of_properties_and_actions",isDocsHomePage:!1,title:"Groups of properties and actions",description:"The behavior of properties and actions in the context of working with groups is absolutely identical, therefore, in the rest of this section, we will use only the term property (the behavior for actions is completely similar).",source:"@site/docs/Groups_of_properties_and_actions.md",slug:"/Groups_of_properties_and_actions",permalink:"/docusaurustest/docs/Groups_of_properties_and_actions",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Groups_of_properties_and_actions.md",version:"current",sidebar:"docs",previous:{title:"Form structure",permalink:"/docusaurustest/docs/Form_structure"},next:{title:"Form views",permalink:"/docusaurustest/docs/Form_views"}},c=[{value:"Builtin property groups",id:"builtin-property-groups",children:[]},{value:"Property groups usage",id:"property-groups-usage",children:[]},{value:"Language",id:"language",children:[]}],l={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The behavior of properties and actions in the context of working with groups is absolutely identical, therefore, in the rest of this section, we will use only the term property (the behavior for actions is completely similar)."),Object(n.b)("p",null,"All ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Properties"},"p"),"roperties in the system are divided into ",Object(n.b)("em",{parentName:"p"},"property groups.\xa0")," In this case, all groups form a hierarchy in which each group can contain both properties and other property groups.\xa0The root group in this hierarchy is the ",Object(n.b)("strong",{parentName:"p"},"System.root group.")," All other groups are contained*\xa0",Object(n.b)("em",{parentName:"p"},"in some\xa0"),"parent group.*"),Object(n.b)("p",null,"Each property or action belongs directly to exactly one group, and also belongs to all the ancestors of that group. So, for example, all properties and actions in the system belong to the ",Object(n.b)("strong",{parentName:"p"},"System.root")," group."),Object(n.b)("h3",{id:"builtin-property-groups"},"Builtin property groups"),Object(n.b)("p",null,"In addition to ",Object(n.b)("strong",{parentName:"p"},"root")," in the\xa0",Object(n.b)("strong",{parentName:"p"},"System"),"\xa0module, the following groups of properties and actions are created automatically:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"root"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"public"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"base"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"id")))))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"private"))))),Object(n.b)("p",null,"All these groups (including ",Object(n.b)("strong",{parentName:"p"},"root"),") are not used in form display mechanisms (i.e. containers in the ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Form_design#default-design"},"default form design")," and elements of the ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Structured_view#hierarchical-view"},"hierarchical")," import / export hierarchy are not created for them)."),Object(n.b)("h3",{id:"property-groups-usage"},"Property groups usage"),Object(n.b)("p",null,"Property groups are currently used in the following mechanisms:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"When displaying forms:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"in the ",Object(n.b)("a",{parentName:"li",href:"/docusaurustest/docs/Interactive_view"},"interactive"),"\xa0view: you\xa0can specify for each group that a\xa0separate container must be created in the\xa0",Object(n.b)("a",{parentName:"li",href:"/docusaurustest/docs/Form_design#default-design"},"default design"),". Accordingly, the hierarchy of containers in the default design will match the hierarchy of these property groups. That is, if it is specified for a group (or property) \xa0",Object(n.b)("strong",{parentName:"li"},"A"),"\xa0and property group\xa0",Object(n.b)("strong",{parentName:"li"},"B"),"\xa0that a container must be created, and group (or property)\xa0",Object(n.b)("strong",{parentName:"li"},"A"),"\xa0is a descendant of group\xa0",Object(n.b)("strong",{parentName:"li"},"B"),", then the container of group (component of property)\xa0",Object(n.b)("strong",{parentName:"li"},"A")," will be the descendant of the container of group ",Object(n.b)("strong",{parentName:"li"},"B"),"."),Object(n.b)("li",{parentName:"ul"},"in the\xa0",Object(n.b)("a",{parentName:"li",href:"/docusaurustest/docs/Structured_view#hierarchical-view"},"hierarchical"),"\xa0view\xa0:you can specify for each group that a separate intermediate tag must be created when the form is exported. Accordingly, the hierarchy of tags during export will match the hierarchy of property groups. That is, if it is specified for a group (or property) \xa0",Object(n.b)("strong",{parentName:"li"},"A"),"\xa0and property group\xa0",Object(n.b)("strong",{parentName:"li"},"B"),"\xa0that a tag needs to be created, and group (or property)\xa0",Object(n.b)("strong",{parentName:"li"},"A"),"\xa0is a descendant of group\xa0",Object(n.b)("strong",{parentName:"li"},"B"),", then group (property)\xa0",Object(n.b)("strong",{parentName:"li"},"A")," will be enclosed in the tag of group\xa0",Object(n.b)("strong",{parentName:"li"},"B"),".\xa0"))),Object(n.b)("li",{parentName:"ul"},"When automatically creating forms:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"All properties with one argument which are included in the ",Object(n.b)("strong",{parentName:"li"},"System.base")," group will be displayed in the automatically generated dialog forms for\xa0",Object(n.b)("a",{parentName:"li",href:"/docusaurustest/docs/Interactive_view#selectionediting-forms"},"selecting/editing"),"\xa0objects.\xa0"),Object(n.b)("li",{parentName:"ul"},"All properties with one argument which are included in the ",Object(n.b)("strong",{parentName:"li"},"System.id")," group will be displayed in automatically generated ",Object(n.b)("a",{parentName:"li",href:"/docusaurustest/docs/Constraints#show-message"},"message display forms")," on\xa0constraint violation."))),Object(n.b)("li",{parentName:"ul"},"In the security policy:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"You can set a security policy for a group as a whole (and not for each property individually).")))),Object(n.b)("h3",{id:"language"},"Language"),Object(n.b)("p",null,"To add a new property/action group to the system, use the ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/GROUP_instruction"},Object(n.b)("strong",{parentName:"a"},"GROUP")," instruction"),"."),Object(n.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=group",mdxType:"CodeSample"}))}u.isMDXComponent=!0}}]);