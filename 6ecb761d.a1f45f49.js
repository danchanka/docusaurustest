(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{236:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),o=(a(0),a(421)),r={title:"Value input"},s={unversionedId:"Value_input",id:"Value_input",isDocsHomePage:!1,title:"Value input",description:"This category includes operators responsible for inputting a value:",source:"@site/docs\\Value_input.md",slug:"/Value_input",permalink:"/docusaurustest/docs/Value_input",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Value_input.md",version:"current",sidebar:"docs",previous:{title:"Form operators",permalink:"/docusaurustest/docs/Form_operators"},next:{title:"Primitive input (INPUT)",permalink:"/docusaurustest/docs/Primitive_input_INPUT"}},u=[{value:"Cancellation and input result",id:"cancellation-and-input-result",children:[]},{value:"Initial values and automatic change",id:"initial-values-and-automatic-change",children:[]}],c={toc:u};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This category includes operators responsible for inputting a value:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/Primitive_input_INPUT"}),"Value input (INPUT)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/Value_request_REQUEST"}),"Value request (REQUEST)"))),Object(o.b)("p",null,"In addition to the above operators, data input is also performed via the ",Object(o.b)("em",{parentName:"p"},"dialog forms")," of message display\xa0 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Show_message_MESSAGE_ASK#dialog-form"}),"(ASK)")," \xa0and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG#dialog-form"}),"form opening (DIALOG)"),"\xa0operators in an interactive view."),Object(o.b)("h3",{id:"cancellation-and-input-result"},"Cancellation and input result"),Object(o.b)("p",null,"In value input operators, an input operation can be \xa0",Object(o.b)("em",{parentName:"p"},"canceled")," (for each operator, this situation is determined in its own way)",Object(o.b)("em",{parentName:"p"},"."),"If it happens, a\xa0",Object(o.b)("strong",{parentName:"p"},"TRUE"),"\xa0value\xa0 is written to the\xa0",Object(o.b)("strong",{parentName:"p"},"System.requestCanceled"),"\xa0property (otherwise it will be\xa0",Object(o.b)("strong",{parentName:"p"},"NULL"),")."),Object(o.b)("p",null,"For all value input operators, the platform allows to specify an action (let's call it \xa0",Object(o.b)("em",{parentName:"p"},"main action"),") that will be executed only if the input operation is successful (i.e. not canceled). The input result (if any) is passed to this action as a parameter. You can specify an ",Object(o.b)("em",{parentName:"p"},"alternative")," action for all value input operators that will be executed if an operation is canceled."),Object(o.b)("h3",{id:"initial-values-and-automatic-change"},"Initial values and automatic change"),Object(o.b)("p",null,"Value input often assumes the presence of a certain ",Object(o.b)("em",{parentName:"p"},"initial")," (previous) value that the input starts from (that is, the initial value is assigned to the current one) and that the user can subsequently change. Like most other values, the initial value is defined as a property."),Object(o.b)("p",null,"Also, in many cases (especially in property ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Form_events#property-broken"}),"change event")," handlers), it is sometimes necessary to not just input value, but also to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Property_change_CHANGE"}),"write")," this value to a certain property (as a rule, the one for which the change event handler is invoked. This is necessary to ensure WYSYWIG). In most cases, the changed property equals the initial value property. To make the implementation of such a scenario more convenient, you can specify a special option (",Object(o.b)("strong",{parentName:"p"},"CHANGE"),") in value input operators. This option will automatically add property change to the end of the main action. The changed property, in this case, will be the initial value property, and changed value \u2014 the input result (however, if necessary, the developer can specify changed property explicitly). It is worth noting that the described feature is nothing more than syntactic sugar, however, it allows to make the code a lot more concise and readable."),Object(o.b)("p",null,"In the current platform implementation, initial values and automatic change s are supported only for primitive input operators (",Object(o.b)("strong",{parentName:"p"},"INPUT"),") and dialog form opening ( ",Object(o.b)("strong",{parentName:"p"},"DIALOG")," )."))}p.isMDXComponent=!0}}]);