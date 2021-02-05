(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{125:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),o=a(7),r=(a(0),a(419)),s={title:"In an interactive view (SHOW, DIALOG)"},i={unversionedId:"In_an_interactive_view_SHOW_DIALOG",id:"In_an_interactive_view_SHOW_DIALOG",isDocsHomePage:!1,title:"In an interactive view (SHOW, DIALOG)",description:"This operator creates an action that\xa0opens a form\xa0in the interactive\xa0view.",source:"@site/docs\\In_an_interactive_view_SHOW_DIALOG.md",slug:"/In_an_interactive_view_SHOW_DIALOG",permalink:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/In_an_interactive_view_SHOW_DIALOG.md",version:"current",sidebar:"docs",previous:{title:"Open form",permalink:"/docusaurustest/docs/Open_form"},next:{title:"In a print view (PRINT)",permalink:"/docusaurustest/docs/In_a_print_view_PRINT"}},c=[{value:"Flow management",id:"flow-management",children:[]},{value:"Form location",id:"form-location",children:[]},{value:"System action management",id:"system-action-management",children:[]},{value:"Dialog form",id:"dialog-form",children:[]},{value:"Extra features",id:"extra-features",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This operator creates an action that\xa0",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Open_form"}),"opens a form"),"\xa0in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Interactive_view"}),"interactive"),"\xa0view."),Object(r.b)("h3",{id:"flow-management"},"Flow management"),Object(r.b)("p",null,"The operator works in two modes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Synchronous"),"\xa0(",Object(r.b)("strong",{parentName:"li"},"WAIT"),") -\xa0waits for the user to\xa0",Object(r.b)("strong",{parentName:"li"},"close\xa0"),"the form, then saves the execution results and passes\xa0control to the next action."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Asynchronous"),"\xa0(",Object(r.b)("strong",{parentName:"li"},"NOWAIT"),") - passes control to the next action right after\xa0",Object(r.b)("strong",{parentName:"li"},"opening\xa0"),"a form on the client end.")),Object(r.b)("p",null,"By default, the operator works in the synchronous mode."),Object(r.b)("h3",{id:"form-location"},"Form location"),Object(r.b)("p",null,"A form being opened can be shown in two ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"As a\xa0",Object(r.b)("em",{parentName:"li"},"window"),"\xa0(",Object(r.b)("strong",{parentName:"li"},"FLOAT"),")-\xa0the form is shown as a floating window."),Object(r.b)("li",{parentName:"ul"},"As a\xa0",Object(r.b)("em",{parentName:"li"},"tab"),"\xa0(",Object(r.b)("strong",{parentName:"li"},"DOCKED"),") -\xa0the form is opened as a tab in the system\xa0",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/Navigator_design"}),"window"),"\xa0",Object(r.b)("strong",{parentName:"li"},"System.forms"),".")),Object(r.b)("p",null,"By default, forms in the synchronous mode are shown as windows, in the asynchronous mode \u2013 as tabs."),Object(r.b)("p",null,'In the current implementation of the platform, a form shown as a window is always modal, which means that the "asynchronous window" mode is not supported.'),Object(r.b)("h3",{id:"system-action-management"},"System action management"),Object(r.b)("p",null,"By default, when the interactive view is enabled, the platform\xa0",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Interactive_view#Interactiveview-sysactions"}),"automatically determines")," which system actions of the form/session lifecycle management should be shown and which not. But since these conditions are somewhat heuristic, the developer can use a corresponding set\xa0of options to specify the actions that need to be shown when the form is opened. Similarly, the corresponding option can be used to specify whether the form is the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Interactive_view#Interactiveview-anchor"}),"owner of the session")," in which it is opened or not."),Object(r.b)("h3",{id:"dialog-form"},"Dialog form"),Object(r.b)("p",null,"This operator also allows to return the latest ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Form_structure#Formstructure-currentObject"}),"current value")," of a specified object (or, if necessary, of several objects), thus, essentially, performing\xa0",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Value_input"}),"value input"),". In this case, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Value_input#Valueinput-result"}),"input is considered to be canceled")," if the user closes the form using\xa0",Object(r.b)("strong",{parentName:"p"},"System.formClose ("),"not\xa0",Object(r.b)("strong",{parentName:"p"},"System.formOk"),")."),Object(r.b)("p",null,"While inputting a value, it is sometimes necessary to not just choose one from a list, but also allow the user to return a ",Object(r.b)("strong",{parentName:"p"},"NULL")," value. For this purpose, the dialog form has a special option that, if enabled, shows the drop action (",Object(r.b)("strong",{parentName:"p"},"System.formDrop"),") on the form. Calling this action closes the form and returns a ",Object(r.b)("strong",{parentName:"p"},"NULL")," value as a result."),Object(r.b)("p",null,"Similar to the other value input operators, the dialog form of this\xa0operator allows to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"specify\xa0",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/Value_input#Valueinput-initial"}),"initial object\xa0values")," (through the\xa0",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/Open_form"}),"passing objects"),"\xa0mechanism)."),Object(r.b)("li",{parentName:"ul"},"specify\xa0",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/Value_input#Valueinput-result"}),"main\xa0and alternative"),"\xa0actions. The first is called if the input was successfully completed, the second if not (i.e. if the input was canceled)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/Value_input#Valueinput-initial"}),"change"),"\xa0a specified property.")),Object(r.b)("p",null,"In addition, if a value is entered to input to change the specified property, it is often necessary (at the value selection stage) to show the user not all object collections, but only those ones, whose selection (and subsequent change with these objects) will not violate\xa0existing\xa0",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Constraints"}),"constraints"),". Accordingly, so that the developer does not have to copy the form and manually add the necessary filter, the platform automatically generates and adds corresponding filters to the form (this behavior, however, can be disabled using a corresponding option)."),Object(r.b)("p",null,"The operator dialog form is available in the synchronous mode only."),Object(r.b)("h3",{id:"extra-features"},"Extra features"),Object(r.b)("p",null,'When opening a form, you can specify that all of its properties should be available in the "read-only"mode. In this case, the behavior will be identical to the behavior when during form creation, the "read-only" mode is specified for each\xa0',Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Interactive_view#Interactiveview-property"}),"property view"),"."),Object(r.b)("p",null,"Also, when calling the form, you can specify that it will be opened in a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/New_session_NEWSESSION_NESTEDSESSION"}),"new")," (nested) session. In this case, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Open_form#Openform-params"}),"passing objects")," and value input will be performed in the current session (so it makes sense to use this option only if you need to pass objects and/or input a value; otherwise, it makes more sense to use a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/New_session_NEWSESSION_NESTEDSESSION"}),"new session")," operator)."),Object(r.b)("h3",{id:"language"},"Language"),Object(r.b)("p",null,"To open a form in the interactive view, use the\xa0",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/SHOW_operator"}),Object(r.b)("strong",{parentName:"a"},"SHOW"),"\xa0operator"),". To show the form in the dialog mode, use the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/DIALOG_operator"}),Object(r.b)("strong",{parentName:"a"},"DIALOG")," operator"),"."),Object(r.b)("h3",{id:"examples"},"Examples"))}u.isMDXComponent=!0},419:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,d=p["".concat(s,".").concat(m)]||p[m]||b[m]||r;return a?o.a.createElement(d,i(i({ref:t},l),{},{components:a})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<r;l++)s[l]=a[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);