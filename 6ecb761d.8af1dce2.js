(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{234:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(419)),o={title:"Value input"},c={unversionedId:"Value_input",id:"Value_input",isDocsHomePage:!1,title:"Value input",description:"This category includes operators responsible for inputting a value:",source:"@site/docs\\Value_input.md",slug:"/Value_input",permalink:"/docusaurustest/docs/Value_input",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Value_input.md",version:"current",sidebar:"docs",previous:{title:"Form operators",permalink:"/docusaurustest/docs/Form_operators"},next:{title:"Primitive input (INPUT)",permalink:"/docusaurustest/docs/Primitive_input_INPUT"}},s=[{value:"Cancellation and input result",id:"cancellation-and-input-result",children:[]},{value:"Initial values and automatic change",id:"initial-values-and-automatic-change",children:[]}],u={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This category includes operators responsible for inputting a value:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/Primitive_input_INPUT"}),"Value input (INPUT)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/Value_request_REQUEST"}),"Value request (REQUEST)"))),Object(i.b)("p",null,"In addition to the above operators, data input is also performed via the ",Object(i.b)("em",{parentName:"p"},"dialog forms")," of message display\xa0 ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Show_message_MESSAGE_ASK#Showmessage(MESSAGE,ASK)-dialog"}),"(ASK)")," \xa0and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG#Inaninteractiveview(SHOW,DIALOG)-dialog"}),"form opening (DIALOG)"),"\xa0operators in an interactive view."),Object(i.b)("h3",{id:"cancellation-and-input-result"},"Cancellation and input result"),Object(i.b)("p",null,"In value input operators, an input operation can be \xa0",Object(i.b)("em",{parentName:"p"},"canceled")," (for each operator, this situation is determined in its own way)",Object(i.b)("em",{parentName:"p"},"."),"If it happens, a\xa0",Object(i.b)("strong",{parentName:"p"},"TRUE"),"\xa0value\xa0 is written to the\xa0",Object(i.b)("strong",{parentName:"p"},"System.requestCanceled"),"\xa0property (otherwise it will be\xa0",Object(i.b)("strong",{parentName:"p"},"NULL"),")."),Object(i.b)("p",null,"For all value input operators, the platform allows to specify an action (let's call it \xa0",Object(i.b)("em",{parentName:"p"},"main action"),") that will be executed only if the input operation is successful (i.e. not canceled). The input result (if any) is passed to this action as a parameter. You can specify an ",Object(i.b)("em",{parentName:"p"},"alternative")," action for all value input operators that will be executed if an operation is canceled."),Object(i.b)("h3",{id:"initial-values-and-automatic-change"},"Initial values and automatic change"),Object(i.b)("p",null,"Value input often assumes the presence of a certain ",Object(i.b)("em",{parentName:"p"},"initial")," (previous) value that the input starts from (that is, the initial value is assigned to the current one) and that the user can subsequently change. Like most other values, the initial value is defined as a property."),Object(i.b)("p",null,"Also, in many cases (especially in property ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Form_events#Formevents-property"}),"change event")," handlers), it is sometimes necessary to not just input value, but also to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Property_change_CHANGE"}),"write")," this value to a certain property (as a rule, the one for which the change event handler is invoked. This is necessary to ensure WYSYWIG). In most cases, the changed property equals the initial value property. To make the implementation of such a scenario more convenient, you can specify a special option (",Object(i.b)("strong",{parentName:"p"},"CHANGE"),") in value input operators. This option will automatically add property change to the end of the main action. The changed property, in this case, will be the initial value property, and changed value \u2014 the input result (however, if necessary, the developer can specify changed property explicitly). It is worth noting that the described feature is nothing more than syntactic sugar, however, it allows to make the code a lot more concise and readable."),Object(i.b)("p",null,"In the current platform implementation, initial values and automatic change s are supported only for primitive input operators (",Object(i.b)("strong",{parentName:"p"},"INPUT"),") and dialog form opening ( ",Object(i.b)("strong",{parentName:"p"},"DIALOG")," )."))}p.isMDXComponent=!0},419:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(a),b=n,m=l["".concat(o,".").concat(b)]||l[b]||d[b]||i;return a?r.a.createElement(m,c(c({ref:t},u),{},{components:a})):r.a.createElement(m,c({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=a[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);