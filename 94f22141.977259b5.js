(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{286:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),s=n(7),o=(n(0),n(424)),r={},i={unversionedId:"LSFUS/lsFusionShow_message_MESSAGE_ASK_",id:"LSFUS/lsFusionShow_message_MESSAGE_ASK_",isDocsHomePage:!1,title:"lsFusionShow_message_MESSAGE_ASK_",description:"lsFusionShow message (MESSAGE, ASK)",source:"@site/docs\\LSFUS\\lsFusionShow_message_MESSAGE_ASK_.md",slug:"/LSFUS/lsFusionShow_message_MESSAGE_ASK_",permalink:"/docusaurustest/docs/LSFUS/lsFusionShow_message_MESSAGE_ASK_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionShow_message_MESSAGE_ASK_.md",version:"current"},c=[],u={toc:c};function l(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionshow-message-message-ask"},"lsFusionShow message (MESSAGE, ASK)"),Object(o.b)("h1",{id:"show-message-message-ask"},"Show message (MESSAGE, ASK)"),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"show message")," operator creates an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionActions"}),"action")," which shows the user a window with a text message.\xa0The message is defined as some ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperties"}),"property")," whose value will be used as a message."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Flow control")),Object(o.b)("p",null,"By default, the created action stops the thread until the user closes the message. However, this behavior can be changed using the corresponding option \u2013 in this case, the created action is completed immediately and the message is shown to the user as soon as possible (that is, the next user interaction). The first mode shall be called\xa0",Object(o.b)("em",{parentName:"p"},"synchronous")," and the second\xa0",Object(o.b)("em",{parentName:"p"},"asynchronous"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Dialog form")),Object(o.b)("p",null,"It is also often necessary not only to inform the user about something, but also, for example, to request confirmation to continue an action. For such cases, the operator allows, instead of simply displaying the message (with a single OK button), to ask a question with the option of canceling (OK/Cancel) and thereby essentially to implement ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionValue_input"}),"a value input"),". This input is considered to have been ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"Value-input_35520941.html#Valueinput-result"}),"canceled")," if the Cancel button is pressed (there is no input value in that case)."),Object(o.b)("p",null,"In addition, a third option can be added to the question: Yes / No / Cancel. In this case, it is considered that ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"Value-input_35520941.html#Valueinput-result"}),"the input result")," will be a value of logical class (Yes - ",Object(o.b)("strong",{parentName:"p"},"TRUE"),", No - ",Object(o.b)("strong",{parentName:"p"},"NULL"),"). As in the first case, the input is considered to be canceled if the Cancel button is selected."),Object(o.b)("p",null,"The form of the operator in which the user is asked a question shall be called\xa0the ",Object(o.b)("em",{parentName:"p"},"dialog")," form.\xa0"),Object(o.b)("p",null,"As with other value input operators, in the dialog form of this operator\xa0you can define\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"Value-input_35520941.html#Valueinput-result"}),"main and alternative"),"\xa0actions. The first is called if the input was successfully completed, the second if not (i.e. if the input was canceled)."),Object(o.b)("p",null,"The operator dialog form is available in synchronous mode only."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Language")),Object(o.b)("p",null,"To declare an action showing a message, use\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionMESSAGE_operator"}),"the\xa0",Object(o.b)("strong",{parentName:"a"},"MESSAGE")," operator"),". To display the message in dialog form, use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionASK_operator"}),Object(o.b)("strong",{parentName:"a"},"ASK")," operator"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null))}l.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),s=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=s.a.createContext({}),l=function(e){var t=s.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return s.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},h=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,m=p["".concat(r,".").concat(h)]||p[h]||b[h]||o;return n?s.a.createElement(m,i(i({ref:t},u),{},{components:n})):s.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);