(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{382:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(419)),s={title:"Show message (MESSAGE, ASK)"},i={unversionedId:"Show_message_MESSAGE_ASK_",id:"Show_message_MESSAGE_ASK_",isDocsHomePage:!1,title:"Show message (MESSAGE, ASK)",description:"The show message operator creates an action which shows the user a window with a text message.\xa0The message is defined as some property whose value will be used as a message.",source:"@site/docs\\Show_message_MESSAGE_ASK_.md",slug:"/Show_message_MESSAGE_ASK_",permalink:"/docusaurustest/docs/Show_message_MESSAGE_ASK_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Show_message_MESSAGE_ASK_.md",version:"current",sidebar:"docs",previous:{title:"User/IS interaction",permalink:"/docusaurustest/docs/User_IS_interaction"},next:{title:"File operators",permalink:"/docusaurustest/docs/File_operators"}},c=[{value:"Flow control",id:"flow-control",children:[]},{value:"Dialog form",id:"dialog-form",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"show message")," operator creates an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," which shows the user a window with a text message.\xa0The message is defined as some ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Properties"}),"property")," whose value will be used as a message."),Object(o.b)("h3",{id:"flow-control"},"Flow control"),Object(o.b)("p",null,"By default, the created action stops the thread until the user closes the message. However, this behavior can be changed using the corresponding option \u2013 in this case, the created action is completed immediately and the message is shown to the user as soon as possible (that is, the next user interaction). The first mode shall be called\xa0",Object(o.b)("em",{parentName:"p"},"synchronous")," and the second\xa0",Object(o.b)("em",{parentName:"p"},"asynchronous"),"."),Object(o.b)("h3",{id:"dialog-form"},"Dialog form"),Object(o.b)("p",null,"It is also often necessary not only to inform the user about something, but also, for example, to request confirmation to continue an action. For such cases, the operator allows, instead of simply displaying the message (with a single OK button), to ask a question with the option of canceling (OK/Cancel) and thereby essentially to implement ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Value_input"}),"a value input"),". This input is considered to have been ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Value-input_35520941.html#Valueinput-result"}),"canceled")," if the Cancel button is pressed (there is no input value in that case)."),Object(o.b)("p",null,"In addition, a third option can be added to the question: Yes / No / Cancel. In this case, it is considered that ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Value-input_35520941.html#Valueinput-result"}),"the input result")," will be a value of logical class (Yes - ",Object(o.b)("strong",{parentName:"p"},"TRUE"),", No - ",Object(o.b)("strong",{parentName:"p"},"NULL"),"). As in the first case, the input is considered to be canceled if the Cancel button is selected."),Object(o.b)("p",null,"The form of the operator in which the user is asked a question shall be called\xa0the ",Object(o.b)("em",{parentName:"p"},"dialog")," form.\xa0"),Object(o.b)("p",null,"As with other value input operators, in the dialog form of this operator\xa0you can define\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Value-input_35520941.html#Valueinput-result"}),"main and alternative"),"\xa0actions. The first is called if the input was successfully completed, the second if not (i.e. if the input was canceled)."),Object(o.b)("p",null,"The operator dialog form is available in synchronous mode only."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To declare an action showing a message, use\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/MESSAGE_operator"}),"the\xa0",Object(o.b)("strong",{parentName:"a"},"MESSAGE")," operator"),". To display the message in dialog form, use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/ASK_operator"}),Object(o.b)("strong",{parentName:"a"},"ASK")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"))}u.isMDXComponent=!0},419:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(a),h=n,b=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return a?r.a.createElement(b,i(i({ref:t},l),{},{components:a})):r.a.createElement(b,i({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);