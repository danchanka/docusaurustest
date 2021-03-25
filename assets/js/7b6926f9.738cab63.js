(window.webpackJsonp=window.webpackJsonp||[]).push([[336,461],{410:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return p})),o.d(t,"default",(function(){return l}));var r=o(3),i=o(7),n=(o(0),o(750)),a=o(58),s={title:"Print view: Overview",sidebar_label:"Overview"},c={unversionedId:"Print_view",id:"version-1.0.0/Print_view",isDocsHomePage:!1,title:"Print view: Overview",description:"Print view of the form\xa0consists of a set of templates (reports). When data is substituted in these templates, a document is formed in graphic (with pixel positioning) or pseudographic (with cell positioning) format. This document is displayed to the user using a\xa0special graphic component, inside which the user can navigate through pages, zoom in/out within pages and print the contents of the component or export it to various formats (for example, PDF or Excel). If necessary, it is possible to skip the display of the component to the user and send the document for printing or save it into a selected file in the specified format.",source:"@site/versioned_docs/version-1.0.0/Print_view.md",slug:"/Print_view",permalink:"/docusaurustest/docs/Print_view",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/Print_view.md",version:"1.0.0",sidebar_label:"Overview",sidebar:"version-1.0.0/docs",previous:{title:"Static view: Overview",permalink:"/docusaurustest/docs/Static_view"},next:{title:"Report design",permalink:"/docusaurustest/docs/Report_design"}},p=[{value:"Report hierarchy",id:"report-hierarchy",children:[]},{value:"Building report hierarchy",id:"buildhierarchy",children:[]},{value:"Report hierarchy example",id:"report-hierarchy-example",children:[]},{value:"Language",id:"language",children:[]},{value:"Open form",id:"open-form",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:p};function l(e){var t=e.components,s=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},d,s,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Print view of the ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Forms"},"form"),"\xa0consists of a set of templates (",Object(n.b)("em",{parentName:"p"},"reports"),"). When data is substituted in these templates, a ",Object(n.b)("em",{parentName:"p"},"document")," is formed in graphic (with pixel positioning) or pseudographic (with cell positioning) format. This document is displayed to the user using a\xa0special graphic component, inside which the user can navigate through pages, zoom in/out within pages and print the contents of the component or export it to various formats (for example, PDF or Excel). If necessary, it is possible to skip the display of the component to the user and send the document for printing or save it into a selected file in the specified format."),Object(n.b)("p",null,"For each report, a set of the form ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Form_structure#objects"},"object groups")," that it will display is determined."),Object(n.b)("h3",{id:"report-hierarchy"},"Report hierarchy"),Object(n.b)("p",null,"Similar to an object group, each report has a ",Object(n.b)("em",{parentName:"p"},"parent")," report, so all reports form a hierarchy. The report hierarchy should:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"include ",Object(n.b)("a",{parentName:"li",href:"/docusaurustest/docs/Static_view"},"the hierarchy of object groups"),", i.e. if a group of objects of one report is a child of a group of objects of the other report,\xa0then the first report must match the second one or be its child as well"),Object(n.b)("li",{parentName:"ul"},"within one report, each group of objects must have exactly one child.")),Object(n.b)("h3",{id:"buildhierarchy"},"Building report hierarchy"),Object(n.b)("p",null,'Based on the report hierarchy restrictions, only "chains" of object groups can be included in one report (i.e., G1, G2, G3, ... Gn,\xa0where G2 is the only linear child object of G1, G3 is the only child of G2, etc.). Thus, the decision on how to break object groups into reports comes down to whether to merge an object group with its only child (if there is one)\xa0or not. By default, such a merge is performed, however, if necessary, the developer can disable it by specifying the corresponding option (',Object(n.b)("strong",{parentName:"p"},"SUBREPORT"),") for a child object group."),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"Using this option comes down to whether to display data for a parent object group when the child object group has no data."))),Object(n.b)("h3",{id:"report-hierarchy-example"},"Report hierarchy example"),Object(n.b)("p",null,"The form is similar to the ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Static_view#hierarchysample-broken"},"example of building an object group hierarchy"),":"),Object(n.b)(a.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=GroupHierarchySample",mdxType:"CodeSample"}),Object(n.b)("p",null,"The report hierarchy for this form is built as follows:"),Object(n.b)("p",null,Object(n.b)("img",{src:o(879).default})),Object(n.b)("h3",{id:"language"},"Language"),Object(n.b)("p",null,"All of the above options, as well as defining the form structure,\xa0can be done using the\xa0",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/FORM_instruction"},Object(n.b)("strong",{parentName:"a"},"FORM"),"\xa0instruction"),"."),Object(n.b)("h3",{id:"open-form"},"Open form"),Object(n.b)("p",null,"To display the form in print view, the corresponding\xa0",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Open_form"},"open form"),"\xa0in the\xa0",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_a_print_view_PRINT_"},"print view")," operator is used."),Object(n.b)("h3",{id:"examples"},"Examples"),Object(n.b)(a.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=print",mdxType:"CodeSample"}))}l.isMDXComponent=!0},58:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return p})),o.d(t,"metadata",(function(){return d})),o.d(t,"toc",(function(){return l})),o.d(t,"CodeSample",(function(){return u})),o.d(t,"default",(function(){return m}));var r=o(3),i=o(7),n=o(0),a=o.n(n),s=o(750),c=o(751),p={},d={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},l=[],u=function(e){var t=e.url,o=e.lines,r=Object(n.useState)(""),i=r[0],p=r[1];return Object(n.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return p(e)}))}),[t,p]),i?o?Object(s.b)(a.a.Fragment,null,Object(s.b)(c.a,{className:"lsf",metastring:o,mdxType:"CodeBlock"},i),Object(s.b)("br",null)):Object(s.b)(a.a.Fragment,null,Object(s.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},i),Object(s.b)("br",null)):Object(s.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},h={toc:l,CodeSample:u};function m(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},h,o,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},879:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/svgout8892903451953158670-30675fbf8253097a05c03fa725206aa5.png"}}]);