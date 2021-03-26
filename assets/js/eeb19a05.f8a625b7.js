(window.webpackJsonp=window.webpackJsonp||[]).push([[641],{712:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),i=a(7),o=(a(0),a(750)),r={title:"Value input: Overview",sidebar_label:"Overview"},s={unversionedId:"Value_input",id:"version-1.0.0/Value_input",isDocsHomePage:!1,title:"Value input: Overview",description:"This category includes operators responsible for inputting a value:",source:"@site/versioned_docs/version-1.0.0/Value_input.md",slug:"/Value_input",permalink:"/docusaurustest/docs/Value_input",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/Value_input.md",version:"1.0.0",sidebar_label:"Overview",sidebar:"version-1.0.0/docs",previous:{title:"Form operators: Overview",permalink:"/docusaurustest/docs/Form_operators"},next:{title:"Primitive input (INPUT)",permalink:"/docusaurustest/docs/Primitive_input_INPUT_"}},c=[{value:"Cancellation and input result",id:"result",children:[]},{value:"Initial values and automatic change",id:"initial",children:[]}],p={toc:c};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This category includes operators responsible for inputting a value:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Primitive_input_INPUT_"},"Value input (INPUT)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Value_request_REQUEST_"},"Value request (REQUEST)"))),Object(o.b)("p",null,"In addition to the above operators, data input is also performed via the ",Object(o.b)("em",{parentName:"p"},"dialog forms")," of message display\xa0 ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Show_message_MESSAGE_ASK_#dialog"},"(ASK)")," \xa0and ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG_#dialog"},"form opening (DIALOG)"),"\xa0operators in an interactive view."),Object(o.b)("h3",{id:"result"},"Cancellation and input result"),Object(o.b)("p",null,"In value input operators, an input operation can be \xa0",Object(o.b)("em",{parentName:"p"},"canceled")," (for each operator, this situation is determined in its own way)",Object(o.b)("em",{parentName:"p"},"."),"If it happens, a\xa0",Object(o.b)("strong",{parentName:"p"},"TRUE"),"\xa0value\xa0 is written to the\xa0",Object(o.b)("strong",{parentName:"p"},"System.requestCanceled"),"\xa0property (otherwise it will be\xa0",Object(o.b)("strong",{parentName:"p"},"NULL"),")."),Object(o.b)("p",null,"For all value input operators, the platform allows to specify an action (let's call it \xa0",Object(o.b)("em",{parentName:"p"},"main action"),") that will be executed only if the input operation is successful (i.e. not canceled). The input result (if any) is passed to this action as a parameter. You can specify an ",Object(o.b)("em",{parentName:"p"},"alternative")," action for all value input operators that will be executed if an operation is canceled."),Object(o.b)("h3",{id:"initial"},"Initial values and automatic change"),Object(o.b)("p",null,"Value input often assumes the presence of a certain ",Object(o.b)("em",{parentName:"p"},"initial")," (previous) value that the input starts from (that is, the initial value is assigned to the current one) and that the user can subsequently change. Like most other values, the initial value is defined as a property."),Object(o.b)("p",null,"Also, in many cases (especially in property ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Form_events#property-broken"},"change event")," handlers), it is sometimes necessary to not just input value, but also to ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Property_change_CHANGE_"},"write")," this value to a certain property (as a rule, the one for which the change event handler is invoked. This is necessary to ensure WYSYWIG). In most cases, the changed property equals the initial value property. To make the implementation of such a scenario more convenient, you can specify a special option (",Object(o.b)("strong",{parentName:"p"},"CHANGE"),") in value input operators. This option will automatically add property change to the end of the main action. The changed property, in this case, will be the initial value property, and changed value \u2014 the input result (however, if necessary, the developer can specify changed property explicitly). It is worth noting that the described feature is nothing more than syntactic sugar, however, it allows to make the code a lot more concise and readable."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In the current platform implementation, initial values and automatic change s are supported only for primitive input operators (",Object(o.b)("strong",{parentName:"p"},"INPUT"),") and dialog form opening ( ",Object(o.b)("strong",{parentName:"p"},"DIALOG")," )."))))}u.isMDXComponent=!0}}]);