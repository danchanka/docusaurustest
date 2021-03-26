(window.webpackJsonp=window.webpackJsonp||[]).push([[620,436],{57:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return p})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return u})),o.d(t,"CodeSample",(function(){return d})),o.d(t,"default",(function(){return h}));var r=o(3),s=o(7),a=o(0),i=o.n(a),n=o(750),c=o(751),p={},l={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},u=[],d=function(e){var t=e.url,o=e.lines,r=Object(a.useState)(""),s=r[0],p=r[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return p(e)}))}),[t,p]),s?o?Object(n.b)(i.a.Fragment,null,Object(n.b)(c.a,{className:"lsf",metastring:o,mdxType:"CodeBlock"},s),Object(n.b)("br",null)):Object(n.b)(i.a.Fragment,null,Object(n.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},s),Object(n.b)("br",null)):Object(n.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},b={toc:u,CodeSample:d};function h(e){var t=e.components,o=Object(s.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},b,o,{components:t,mdxType:"MDXLayout"}))}h.isMDXComponent=!0},691:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return n})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return p})),o.d(t,"default",(function(){return u}));var r=o(3),s=o(7),a=(o(0),o(750)),i=o(57),n={title:"Form structure: Overview",sidebar_label:"Overview"},c={unversionedId:"Form_structure",id:"Form_structure",isDocsHomePage:!1,title:"Form structure: Overview",description:"The form structure is a complex of objects, properties, actions\xa0and relations between them.",source:"@site/docs/Form_structure.md",slug:"/Form_structure",permalink:"/docusaurustest/docs/next/Form_structure",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Form_structure.md",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Forms: Overview",permalink:"/docusaurustest/docs/next/Forms"},next:{title:"Groups of properties and actions",permalink:"/docusaurustest/docs/next/Groups_of_properties_and_actions"}},p=[{value:"Objects",id:"objects",children:[]},{value:"Properties and actions",id:"properties",children:[]},{value:"Filters",id:"filters",children:[]},{value:"Orders",id:"sort",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function u(e){var t=e.components,o=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Forms"},"form")," structure is a complex of ",Object(a.b)("em",{parentName:"p"},"objects"),", ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"properties"),", ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Actions"},"actions"),"\xa0and relations between them."),Object(a.b)("h3",{id:"objects"},"Objects"),Object(a.b)("p",null,"When creating a form, first you must define which objects it will display.\xa0For each form object you need to specify its\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Classes"},"class"),"."),Object(a.b)("p",null,"It is possible to combine objects into ",Object(a.b)("em",{parentName:"p"},"object groups"),'. In this case, the table will show a "Cartesian product" of these objects (i.e., for two objects - all pairs, three objects - triples, etc.).\xa0'),Object(a.b)("p",null,"In accordance with the order of adding object groups to the form, an ordered\xa0",Object(a.b)("em",{parentName:"p"},"list"),"\xa0of object groups is formed. Accordingly, the group with the maximum number for a certain set of\xa0object groups shall be called the ",Object(a.b)("em",{parentName:"p"},"last"),"\xa0group for this set (i.e., the latest). The ",Object(a.b)("em",{parentName:"p"},"last")," group for a set of objects is determined similarly: first, a set of object groups into which these objects are included is built, then the last group is determined for the obtained set of object groups."),Object(a.b)("p",null,"Each object on the form has a\xa0",Object(a.b)("em",{parentName:"p"},"current value")," at any time. It changes either as a result of ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Interactive_view#objects"},"corresponding user actions")," in ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Interactive_view"},"interactive"),'\xa0view or "virtually" while reading data in ',Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Static_view"},"static")," view."),Object(a.b)("h3",{id:"properties"},"Properties and actions"),Object(a.b)("p",null,"After defining objects, you can add\xa0properties and actions to the form, passing these objects to them as arguments."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Adding actions is relevant only for ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Interactive_view"},"interactive")," view. In ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Static_view"},"static")," view added actions are ignored."))),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"The behavior of properties and actions in the context of their display on the form is absolutely identical, therefore, in the rest of this section, we will use only the term property (the behavior for actions is completely similar)."))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Display group")),Object(a.b)("p",null,"Each property is displayed exactly in one of the object groups on the form (this group shall be called a ",Object(a.b)("em",{parentName:"p"},"display group")," of this property). By default, the display group is the last group for the set of objects which this property receives as an input. If necessary, the developer can specify the display group explicitly (with certain ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Structured_view#drawgroup-broken"},"constraints")," when used in a structured view)"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Groups-in-columns")),Object(a.b)("p",null,"By default, a property is displayed in its display group exactly once. In this case, the values of objects which are not in the display group of this property (these objects shall be called ",Object(a.b)("em",{parentName:"p"},"upper"),') are used as their\xa0current values. However, it is also possible to display one property multiple times so that all object collections are used as the values of certain upper objects (not their current values). With this display of the property, a kind of "matrix" is formed - upper objects x objects of the display group. Thus, to create such a matrix, when adding a property to the form you must specify which ',Object(a.b)("em",{parentName:"p"},"upper"),"\xa0objects (specifically, object groups) must be used to create\xa0columns (these object groups shall be called\xa0",Object(a.b)("em",{parentName:"p"},"groups-in-columns"),")."),Object(a.b)("p",null,"When determining a ",Object(a.b)("a",{parentName:"p",href:"#drawgroup-broken"},"display group"),", properties of the group-to-columns are ignored."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Property groups")),Object(a.b)("p",null,"Properties on the form can be combined into ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Groups_of_properties_and_actions"},"groups")," which, in turn, are used in the interactive (",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Form_design#defaultDesign"},"default design"),") and ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Structured_view#hierarchy"},"hierarchical")," form views. By default, a property is included in a group globally (i.e., this inclusion is defined for a property for all forms at once), however, this inclusion can be redefined for particular forms."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Default settings")),Object(a.b)("p",null,"Properties on the form have a large number of display settings in various ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Form_views"},"views"),', most of which can be set not only directly for the property on the form, but also for the property itself (when creating it). These settings will be the default settings, i.e., if the setting is not explicitly set for a specific property on the form, then the setting of the property itself is used. In addition, these default settings are "inherited" when using ',Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Composition_JOIN_"},"composition"),", ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"},"selection")," and ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Previous_value_PREV_"},"previous value")," operators (i.e., if property f(a) has the default width of 10, then the property g(a) = f(a) IF h(a) will also have a width of 10 by default)."),Object(a.b)("h3",{id:"filters"},"Filters"),Object(a.b)("p",null,"For each form, the developer can create ",Object(a.b)("em",{parentName:"p"},"filters")," which will limit the list of object collections available for viewing/selection on the form."),Object(a.b)("p",null,"To define a filter, you must specify a property that will be used as a filter condition. The filter will be applied to the table of the object group that is the last for the set of objects which this property takes as input (i.e., similar to the definition of the property ",Object(a.b)("em",{parentName:"p"},"display group"),"). In this case, only those object collections (rows) for which property values are not ",Object(a.b)("strong",{parentName:"p"},"NULL")," will be shown."),Object(a.b)("h3",{id:"sort"},"Orders"),Object(a.b)("p",null,"By default, in all object group views, object collections are displayed in a certain non-deterministic order, which is determined by the specific implementation of the platform (most often, internal identifiers are used to determine the order). If necessary, the developer can define this order explicitly by specifying a list of properties on the form that will be used as orders. At the same time, for each property in this list, you can specify whether the order should be ascending or descending (by default, the ascending option is used)."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"NULL"),"\xa0value is always considered to be the smallest value.\xa0"),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"To create a new form and define its structure, the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/FORM_instruction"},Object(a.b)("strong",{parentName:"a"},"FORM")," instruction")," is used."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=FormSample&block=form",mdxType:"CodeSample"}))}u.isMDXComponent=!0}}]);