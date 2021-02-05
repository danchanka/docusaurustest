(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{165:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),o=a(7),r=(a(0),a(419)),s={title:"Show message (MESSAGE, ASK)"},i={unversionedId:"Show_message_MESSAGE_ASK",id:"Show_message_MESSAGE_ASK",isDocsHomePage:!1,title:"Show message (MESSAGE, ASK)",description:"The show message operator creates an action which shows the user a window with a text message.\xa0The message is defined as some property whose value will be used as a message.",source:"@site/docs\\Show_message_MESSAGE_ASK.md",slug:"/Show_message_MESSAGE_ASK",permalink:"/docusaurustest/docs/Show_message_MESSAGE_ASK",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Show_message_MESSAGE_ASK.md",version:"current",sidebar:"docs",previous:{title:"User/IS interaction",permalink:"/docusaurustest/docs/User_IS_interaction"},next:{title:"File operators",permalink:"/docusaurustest/docs/File_operators"}},c=[{value:"Flow control",id:"flow-control",children:[]},{value:"Dialog form",id:"dialog-form",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:c};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"show message")," operator creates an ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," which shows the user a window with a text message.\xa0The message is defined as some ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Properties"}),"property")," whose value will be used as a message."),Object(r.b)("h3",{id:"flow-control"},"Flow control"),Object(r.b)("p",null,"By default, the created action stops the thread until the user closes the message. However, this behavior can be changed using the corresponding option \u2013 in this case, the created action is completed immediately and the message is shown to the user as soon as possible (that is, the next user interaction). The first mode shall be called\xa0",Object(r.b)("em",{parentName:"p"},"synchronous")," and the second\xa0",Object(r.b)("em",{parentName:"p"},"asynchronous"),"."),Object(r.b)("h3",{id:"dialog-form"},"Dialog form"),Object(r.b)("p",null,"It is also often necessary not only to inform the user about something, but also, for example, to request confirmation to continue an action. For such cases, the operator allows, instead of simply displaying the message (with a single OK button), to ask a question with the option of canceling (OK/Cancel) and thereby essentially to implement ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Value_input"}),"a value input"),". This input is considered to have been ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Value_input#Valueinput-result"}),"canceled")," if the Cancel button is pressed (there is no input value in that case)."),Object(r.b)("p",null,"In addition, a third option can be added to the question: Yes / No / Cancel. In this case, it is considered that ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Value_input#Valueinput-result"}),"the input result")," will be a value of logical class (Yes - ",Object(r.b)("strong",{parentName:"p"},"TRUE"),", No - ",Object(r.b)("strong",{parentName:"p"},"NULL"),"). As in the first case, the input is considered to be canceled if the Cancel button is selected."),Object(r.b)("p",null,"The form of the operator in which the user is asked a question shall be called\xa0the ",Object(r.b)("em",{parentName:"p"},"dialog")," form.\xa0"),Object(r.b)("p",null,"As with other value input operators, in the dialog form of this operator\xa0you can define\xa0",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Value_input#Valueinput-result"}),"main and alternative"),"\xa0actions. The first is called if the input was successfully completed, the second if not (i.e. if the input was canceled)."),Object(r.b)("p",null,"The operator dialog form is available in synchronous mode only."),Object(r.b)("h3",{id:"language"},"Language"),Object(r.b)("p",null,"To declare an action showing a message, use\xa0",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/MESSAGE_operator"}),"the\xa0",Object(r.b)("strong",{parentName:"a"},"MESSAGE")," operator"),". To display the message in dialog form, use the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/ASK_operator"}),Object(r.b)("strong",{parentName:"a"},"ASK")," operator"),"."),Object(r.b)("h3",{id:"examples"},"Examples"))}l.isMDXComponent=!0},419:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(a),h=n,b=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return a?o.a.createElement(b,i(i({ref:t},u),{},{components:a})):o.a.createElement(b,i({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<r;u++)s[u]=a[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);