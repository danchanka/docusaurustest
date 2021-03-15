(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{128:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return p})),o.d(t,"default",(function(){return u}));var r=o(3),i=o(7),a=(o(0),o(423)),n=o(424),s={title:"Print view"},c={unversionedId:"Print_view",id:"Print_view",isDocsHomePage:!1,title:"Print view",description:"Print view of the form\xa0consists of a set of templates (reports). When data is substituted in these templates, a document is formed in graphic (with pixel positioning) or pseudographic (with cell positioning) format. This document is displayed to the user using a\xa0special graphic component, inside which the user can navigate through pages, zoom in/out within pages and print the contents of the component or export it to various formats (for example, PDF or Excel). If necessary, it is possible to skip the display of the component to the user and send the document for printing or save it into a selected file in the specified format.",source:"@site/docs/Print_view.md",slug:"/Print_view",permalink:"/docusaurustest/ru/docs/Print_view",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Print_view.md",version:"current",sidebar:"docs",previous:{title:"Static view",permalink:"/docusaurustest/ru/docs/Static_view"},next:{title:"Report design",permalink:"/docusaurustest/ru/docs/Report_design"}},p=[{value:"Report hierarchy",id:"report-hierarchy",children:[]},{value:"Building report hierarchy",id:"buildhierarchy",children:[]},{value:"Report hierarchy example",id:"report-hierarchy-example",children:[]},{value:"Language",id:"language",children:[]},{value:"Open form",id:"open-form",children:[]},{value:"Examples",id:"examples",children:[]}],h={toc:p};function u(e){var t=e.components,s=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},h,s,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Print view of the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Forms"},"form"),"\xa0consists of a set of templates (",Object(a.b)("em",{parentName:"p"},"reports"),"). When data is substituted in these templates, a ",Object(a.b)("em",{parentName:"p"},"document")," is formed in graphic (with pixel positioning) or pseudographic (with cell positioning) format. This document is displayed to the user using a\xa0special graphic component, inside which the user can navigate through pages, zoom in/out within pages and print the contents of the component or export it to various formats (for example, PDF or Excel). If necessary, it is possible to skip the display of the component to the user and send the document for printing or save it into a selected file in the specified format."),Object(a.b)("p",null,"For each report, a set of the form ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Form_structure#objects"},"object groups")," that it will display is determined."),Object(a.b)("h3",{id:"report-hierarchy"},"Report hierarchy"),Object(a.b)("p",null,"Similar to an object group, each report has a ",Object(a.b)("em",{parentName:"p"},"parent")," report, so all reports form a hierarchy. The report hierarchy should:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"include ",Object(a.b)("a",{parentName:"li",href:"/docusaurustest/ru/docs/Static_view"},"the hierarchy of object groups"),", i.e. if a group of objects of one report is a child of a group of objects of the other report,\xa0then the first report must match the second one or be its child as well"),Object(a.b)("li",{parentName:"ul"},"within one report, each group of objects must have exactly one child.")),Object(a.b)("h3",{id:"buildhierarchy"},"Building report hierarchy"),Object(a.b)("p",null,'Based on the report hierarchy restrictions, only "chains" of object groups can be included in one report (i.e., G1, G2, G3, ... Gn,\xa0where G2 is the only linear child object of G1, G3 is the only child of G2, etc.). Thus, the decision on how to break object groups into reports comes down to whether to merge an object group with its only child (if there is one)\xa0or not. By default, such a merge is performed, however, if necessary, the developer can disable it by specifying the corresponding option (',Object(a.b)("strong",{parentName:"p"},"SUBREPORT"),") for a child object group."),Object(a.b)("p",null,"Using this option comes down to whether to display data for a parent object group when the child object group has no data."),Object(a.b)("h3",{id:"report-hierarchy-example"},"Report hierarchy example"),Object(a.b)("p",null,"The form is similar to the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Static_view#hierarchysample-broken"},"example of building an object group hierarchy"),":"),Object(a.b)(n.a,{url:"https://documentation.lsfusion.org/sample?file=GroupHierarchySample",mdxType:"CodeSample"}),Object(a.b)("p",null,"The report hierarchy for this form is built as follows:"),Object(a.b)("p",null,Object(a.b)("img",{src:o(476).default})),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"All of the above options, as well as defining the form structure,\xa0can be done using the\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/FORM_instruction"},Object(a.b)("strong",{parentName:"a"},"FORM"),"\xa0instruction"),"."),Object(a.b)("h3",{id:"open-form"},"Open form"),Object(a.b)("p",null,"To display the form in print view, the corresponding\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Open_form"},"open form"),"\xa0in the\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/In_a_print_view_PRINT"},"print view")," operator is used."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(n.a,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=print",mdxType:"CodeSample"}))}u.isMDXComponent=!0},476:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/svgout2047691192645434560-30675fbf8253097a05c03fa725206aa5.png"}}]);