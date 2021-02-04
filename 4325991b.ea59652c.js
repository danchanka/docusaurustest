(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),s=(n(0),n(419)),o={title:"Change sessions"},c={unversionedId:"Change_sessions",id:"Change_sessions",isDocsHomePage:!1,title:"Change sessions",description:"Actions\xa0can change the state of the system in which they are executed. It is not always desirable to write these changes directly to the database, both from the perspective of integrity and from the perspective of the ergonomics of the system. The platform therefore allows to accumulate these changes locally in change sessions.",source:"@site/docs\\Change_sessions.md",slug:"/Change_sessions",permalink:"/docusaurustest/docs/Change_sessions",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Change_sessions.md",version:"current",sidebar:"docs",previous:{title:"Actions",permalink:"/docusaurustest/docs/Actions"},next:{title:"\u041eperators",permalink:"/docusaurustest/docs/\u041eperators"}},i=[],u={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"Actions"),"\xa0can change the state of the system in which they are executed. It is not always desirable to write these changes directly to the database, both from the perspective of integrity and from the perspective of the ergonomics of the system. The platform therefore allows to accumulate these changes locally in ",Object(s.b)("em",{parentName:"p"},"change sessions."),"\xa0"),Object(s.b)("p",null,"Changes in a session may be changes in ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_properties_DATA_"}),"data")," properties, including local ones, as well as changes in ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/User_classes"}),"classes")," of objects.\xa0The former are done by actions created using the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Property_change_CHANGE_"}),"property change operator"),", the latter using the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/New_object_NEW_"}),"add"),"/",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Class_change_CHANGECLASS_DELETE_"}),"change"),"\xa0object class operators."),Object(s.b)("p",null,"Each time an action is executed, the ",Object(s.b)("em",{parentName:"p"},"current")," session is determined depending on the execution context. For example, if the action is called as the handler of some event on a form (the most common case), then the session of that form will be the current session for it. The current session may also change when the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/New_session_NEWSESSION_NESTEDSESSION_"}),"new session")," operator is used, for example."),Object(s.b)("p",null,"If an action refers to some property during the execution, then its value is calculated taking into account the changes made in the current session of that action."),Object(s.b)("p",null,"Two basic operations are supported for a session -\xa0",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Apply_changes_APPLY_"}),"application"),"\xa0and\xa0",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Cancel_changes_CANCEL_"}),"cancellation")," ",Object(s.b)("em",{parentName:"p"},"-")," as well as a set of operators for\xa0",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Change_operators_SET_CHANGED_..._"}),"working with changes"),"\xa0(including getting\xa0a ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Previous_value_PREV_"}),"previous value"),"\xa0in the session)."),Object(s.b)("p",null,'Note that change sessions are not thread safe, therefore when using operators that explicitly or implicitly perform actions in a new thread and do not block their execution flow, it is highly recommended not to access the current session after they are executed (such "multi-threaded" operators include the\xa0',Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/NEWTHREAD_operator"}),"new thread"),"\xa0and ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"36307331.html#Inaninteractiveview(SHOW,DIALOG)-flow"}),"asynchronous"),"\xa0",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG_"}),"form opening")," operators). In this case, it is recommended that you always create a new session."))}p.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,b=h["".concat(o,".").concat(d)]||h[d]||l[d]||s;return n?r.a.createElement(b,c(c({ref:t},u),{},{components:n})):r.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<s;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);