(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(424)),i={},c={unversionedId:"LSFUS/Value_input",id:"LSFUS/Value_input",isDocsHomePage:!1,title:"Value_input",description:"lsFusionValue input",source:"@site/docs\\LSFUS\\Value_input.md",slug:"/LSFUS/Value_input",permalink:"/docusaurustest/docs/LSFUS/Value_input",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/Value_input.md",version:"current"},p=[],s={toc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionvalue-input"},"lsFusionValue input"),Object(o.b)("h1",{id:"value-input"},"Value input"),Object(o.b)("p",null,"This category includes operators responsible for inputting a value:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/Primitive_input_INPUT_"}),"Value input (INPUT)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/Value_request_REQUEST_"}),"Value request (REQUEST)"))),Object(o.b)("p",null,"In addition to the above operators, data input is also performed via the ",Object(o.b)("em",{parentName:"p"},"dialog forms")," of message display\xa0 ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"4915326.html#Showmessage(MESSAGE,ASK)-dialog"}),"(ASK)")," \xa0and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"36307331.html#Inaninteractiveview(SHOW,DIALOG)-dialog"}),"form opening (DIALOG)"),"\xa0operators in an interactive view."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Cancellation and input result")),Object(o.b)("p",null,"In value input operators, an input operation can be \xa0",Object(o.b)("em",{parentName:"p"},"canceled")," (for each operator, this situation is determined in its own way)",Object(o.b)("em",{parentName:"p"},"."),"If it happens, a\xa0",Object(o.b)("strong",{parentName:"p"},"TRUE"),"\xa0value\xa0 is written to the\xa0",Object(o.b)("strong",{parentName:"p"},"System.requestCanceled"),"\xa0property (otherwise it will be\xa0",Object(o.b)("strong",{parentName:"p"},"NULL"),")."),Object(o.b)("p",null,"For all value input operators, the platform allows to specify an action (let's call it \xa0",Object(o.b)("em",{parentName:"p"},"main action"),") that will be executed only if the input operation is successful (i.e. not canceled). The input result (if any) is passed to this action as a parameter. You can specify an ",Object(o.b)("em",{parentName:"p"},"alternative")," action for all value input operators that will be executed if an operation is canceled."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Initial values and automatic change")),Object(o.b)("p",null,"Value input often assumes the presence of a certain ",Object(o.b)("em",{parentName:"p"},"initial")," (previous) value that the input starts from (that is, the initial value is assigned to the current one) and that the user can subsequently change. Like most other values, the initial value is defined as a property."),Object(o.b)("p",null,"Also, in many cases (especially in property ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"Form-events_5636111.html#Formevents-property"}),"change event")," handlers), it is sometimes necessary to not just input value, but also to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Property_%D1%81hange_CHANGE_"}),"write")," this value to a certain property (as a rule, the one for which the change event handler is invoked. This is necessary to ensure WYSYWIG). In most cases, the changed property equals the initial value property. To make the implementation of such a scenario more convenient, you can specify a special option (",Object(o.b)("strong",{parentName:"p"},"CHANGE"),") in value input operators. This option will automatically add property change to the end of the main action. The changed property, in this case, will be the initial value property, and changed value \u2014 the input result (however, if necessary, the developer can specify changed property explicitly). It is worth noting that the described feature is nothing more than syntactic sugar, however, it allows to make the code a lot more concise and readable."),Object(o.b)("p",null,"In the current platform implementation, initial values and automatic change s are supported only for primitive input operators (",Object(o.b)("strong",{parentName:"p"},"INPUT"),") and dialog form opening ( ",Object(o.b)("strong",{parentName:"p"},"DIALOG")," )."))}u.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),m=a,d=l["".concat(i,".").concat(m)]||l[m]||b[m]||o;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);