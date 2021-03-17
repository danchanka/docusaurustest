(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{333:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return h}));var n=a(3),o=a(7),i=(a(0),a(424)),r=a(57),s={title:"In a print view (PRINT)"},c={unversionedId:"In_a_print_view_PRINT_",id:"In_a_print_view_PRINT_",isDocsHomePage:!1,title:"In a print view (PRINT)",description:"This operator creates an action that\xa0opens a form\xa0in the\xa0print\xa0view.",source:"@site/docs/In_a_print_view_PRINT_.md",slug:"/In_a_print_view_PRINT_",permalink:"/docusaurustest/docs/In_a_print_view_PRINT_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/In_a_print_view_PRINT_.md",version:"current",sidebar:"docs",previous:{title:"In an interactive view (SHOW, DIALOG)",permalink:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG_"},next:{title:"In a structured view (EXPORT, IMPORT)",permalink:"/docusaurustest/docs/In_a_structured_view_EXPORT_IMPORT_"}},p=[{value:"Format",id:"format",children:[]},{value:"Interactive print view",id:"interactive",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:p};function h(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This operator creates an action that\xa0",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Open_form"},"opens a form"),"\xa0in the\xa0",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Print_view"},"print"),"\xa0view."),Object(i.b)("h3",{id:"format"},"Format"),Object(i.b)("p",null,"In this operator, you can specify the format that form data will be converted to before being shown to the user:\xa0\xa0",Object(i.b)("strong",{parentName:"p"},"DOC"),",\xa0",Object(i.b)("strong",{parentName:"p"},"DOCX"),",\xa0",Object(i.b)("strong",{parentName:"p"},"XLS"),",\xa0",Object(i.b)("strong",{parentName:"p"},"XLSX"),",\xa0",Object(i.b)("strong",{parentName:"p"},"PDF, HTML, RTF"),"."),Object(i.b)("p",null,"By default, if the format is specified in the print view, when the client receives a file in a specified format, it attempts to open this file using standard OS means (that is, using the program associated with the specified format). If necessary, however, in addition to the format, you can specify a property that will contain a file with the generated report. In this case, no data will be sent to the client and all data processing will be done exclusively on the server."),Object(i.b)("h3",{id:"interactive"},"Interactive print view"),Object(i.b)("p",null,"Apart from the export in a specified format, the print view allows to display information to the\xa0user in the following\xa0",Object(i.b)("em",{parentName:"p"},"interactive"),"\xa0modes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\xa0PREVIEW"),"\xa0-\xa0the form on the client side will be shown in a new preview window, so that the user can decide on the format to export this form to or send it to the printer. This mode is used by default if other modes/formats are not defined."),Object(i.b)("li",{parentName:"ul"},"\xa0",Object(i.b)("strong",{parentName:"li"},"NOPREVIEW"),"\xa0-\xa0the form will be automatically sent to the printer. In this and the previous modes, you can specify a property that will be used for to determine the printer that will be used to print the form (if you don't do it, the default printer will be used)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"*\xa0***"),"MESSAGE** - the form will be shown as a message. In this case, it is assumed that the form consists of a single object group. Accordingly, the shown message consists of a header with all the properties having an ",Object(i.b)("a",{parentName:"li",href:"/docusaurustest/docs/Static_view#empty"},"empty"),"\xa0",Object(i.b)("a",{parentName:"li",href:"/docusaurustest/docs/Form_structure#drawgroup-broken"},"display group"),", and a table in which rows are object collections of this only object group and columns are properties that are not displayed in the header (i.e. for which the display group exists and is equal to the only object group of the form being opened). The operator working in this mode is essentially a generalization of the ",Object(i.b)("a",{parentName:"li",href:"/docusaurustest/docs/Show_message_MESSAGE_ASK_"},"message display")," operator. It is worth noting that this operator mode is used in\xa0",Object(i.b)("a",{parentName:"li",href:"/docusaurustest/docs/Constraints"},"constraints"),"\xa0(when the user is shown objects for which a constraint was violated).")),Object(i.b)("p",null,"Similarly to the\xa0",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG_"},"interactive view"),", the interactive modes of the print view enable the developer to set options for \xa0",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG_#flow"},"flow management"),"\xa0and\xa0",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG_#location"},"form location"),"\xa0(their behavior is identical to the corresponding options in the form opening operator in the interactive view)."),Object(i.b)("p",null,"\u0421urrent implementation: in the ",Object(i.b)("strong",{parentName:"p"},"MESSAGE"),' mode, the form is always shown as a window (the "asynchronous window" option is not supported in this case); in the asynchronous ',Object(i.b)("strong",{parentName:"p"},"PREVIEW")," mode the form is always shown as a tab; in the synchronous ",Object(i.b)("strong",{parentName:"p"},"PREVIEW")," mode - as a window. The ",Object(i.b)("strong",{parentName:"p"},"NOPREVIEW")," mode is always asynchronous and the form location in it does not make sense (since no forms are shown to the user directly)"),Object(i.b)("h3",{id:"language"},"Language"),Object(i.b)("p",null,"To open the form in the print view,\xa0",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/PRINT_operator"},Object(i.b)("strong",{parentName:"a"},"PRINT"),"\xa0operator")," is used."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=print",mdxType:"CodeSample"}))}h.isMDXComponent=!0}}]);