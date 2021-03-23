(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{387:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var s=a(3),n=a(7),o=(a(0),a(424)),i={title:"Open form"},r={unversionedId:"Open_form",id:"Open_form",isDocsHomePage:!1,title:"Open form",description:"The open form operator creates an action that opens the specified form.",source:"@site/docs/Open_form.md",slug:"/Open_form",permalink:"/docusaurustest/docs/Open_form",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Open_form.md",version:"current",sidebar:"docs",previous:{title:"Structured view",permalink:"/docusaurustest/docs/Structured_view"},next:{title:"In an interactive view (SHOW, DIALOG)",permalink:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG_"}},c=[{value:"Form selection",id:"form",children:[]},{value:"View type",id:"view-type",children:[]},{value:"Passing objects",id:"params",children:[]}],d={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(s.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"open form")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"action")," that opens the specified ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Forms"},"form"),"."),Object(o.b)("h3",{id:"form"},"Form selection"),Object(o.b)("p",null,"In addition to explicitly specifying the form to be opened, the platform also allows to open the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Interactive_view#edtClass"},"list/edit")," form for objects of the specified class.\xa0In this case, you only need to specify the corresponding option and specify the custom class whose list/edit form needs to be opened instead of a form."),Object(o.b)("h3",{id:"view-type"},"View type"),Object(o.b)("p",null,"When a form is opened, the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Form_views"},"view"),"\xa0type which will be used to display the form needs to be specified:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG_"},"In an interactive view (SHOW, DIALOG)")),Object(o.b)("li",{parentName:"ul"},"In a static view:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/In_a_print_view_PRINT_"},"In a print view (PRINT)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/In_a_structured_view_EXPORT_IMPORT_"},"In a structured view (EXPORT, IMPORT)"))))),Object(o.b)("h3",{id:"params"},"Passing objects"),Object(o.b)("p",null,"When you open a form, you can pass a value for each of its objects from the calling context, which will be used as follows depending on the view:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In interactive view: the passed value is set as the ",Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Form_structure#currentObject-broken"},"current")," object."),Object(o.b)("li",{parentName:"ul"},"In a static view: an additional ",Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Form_structure#filters"},"filter")," will be set so that the object must be ",Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Comparison_operators_=_..._"},"equal")," to the passed value.")),Object(o.b)("p",null,"By default, all passed values of objects must be defined (not ",Object(o.b)("strong",{parentName:"p"},"NULL"),");**\xa0",Object(o.b)("strong",{parentName:"p"},"otherwise the action will not be executed and will simply transfer control to the next action. However, in the interactive view, the developer can change this behavior using the corresponding option (that is, allowing\xa0"),"NULL** values). In this case (as in the case when no object is passed at all), the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Interactive_view#defaultobject"},"default object")," will be selected as the current object.\xa0"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"It is worth noting that passing objects in the interactive view is basically the same as the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Search_SEEK_"},"object seek")," operation after the form is opened. In this case, the passed objects are the seek objects, and the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Search_SEEK_#direction"},"seek direction")," is determined by the default object type (",Object(o.b)("strong",{parentName:"p"},"PREV")," here is equivalent to ",Object(o.b)("strong",{parentName:"p"},"FIRST"),")."))))}p.isMDXComponent=!0}}]);