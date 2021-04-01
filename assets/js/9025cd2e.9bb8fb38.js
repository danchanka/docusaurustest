(window.webpackJsonp=window.webpackJsonp||[]).push([[395],{468:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),s=n(7),a=(n(0),n(749)),o={title:"Change sessions"},c={unversionedId:"Change_sessions",id:"version-1.0.0/Change_sessions",isDocsHomePage:!1,title:"Change sessions",description:"Actions\xa0can change the state of the system in which they are executed. It is not always desirable to write these changes directly to the database, both from the perspective of integrity and from the perspective of the ergonomics of the system. The platform therefore allows to accumulate these changes locally in change sessions.",source:"@site/versioned_docs/version-1.0.0/Change_sessions.md",slug:"/Change_sessions",permalink:"/docusaurustest/docs/Change_sessions",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/Change_sessions.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Actions: Overview",permalink:"/docusaurustest/docs/Actions"},next:{title:"\u041eperators: Overview",permalink:"/docusaurustest/docs/\u041eperators"}},i=[],u={toc:i};function p(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"Actions"),"\xa0can change the state of the system in which they are executed. It is not always desirable to write these changes directly to the database, both from the perspective of integrity and from the perspective of the ergonomics of the system. The platform therefore allows to accumulate these changes locally in ",Object(a.b)("em",{parentName:"p"},"change sessions."),"\xa0"),Object(a.b)("p",null,"Changes in a session may be changes in ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Data_properties_DATA_"},"data")," properties, including local ones, as well as changes in ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/User_classes"},"classes")," of objects.\xa0The former are done by actions created using the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Property_change_CHANGE_"},"property change operator"),", the latter using the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/New_object_NEW_"},"add"),"/",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Class_change_CHANGECLASS_DELETE_"},"change"),"\xa0object class operators."),Object(a.b)("p",null,"Each time an action is executed, the ",Object(a.b)("em",{parentName:"p"},"current")," session is determined depending on the execution context. For example, if the action is called as the handler of some event on a form (the most common case), then the session of that form will be the current session for it. The current session may also change when the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/New_session_NEWSESSION_NESTEDSESSION_"},"new session")," operator is used, for example."),Object(a.b)("p",null,"If an action refers to some property during the execution, then its value is calculated taking into account the changes made in the current session of that action."),Object(a.b)("p",null,"Two basic operations are supported for a session -\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Apply_changes_APPLY_"},"application"),"\xa0and\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Cancel_changes_CANCEL_"},"cancellation")," ",Object(a.b)("em",{parentName:"p"},"-")," as well as a set of operators for\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Change_operators_SET_CHANGED_..._"},"working with changes"),"\xa0(including getting\xa0a ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Previous_value_PREV_"},"previous value"),"\xa0in the session)."),Object(a.b)("p",null,'Note that change sessions are not thread safe, therefore when using operators that explicitly or implicitly perform actions in a new thread and do not block their execution flow, it is highly recommended not to access the current session after they are executed (such "multi-threaded" operators include the\xa0',Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/NEWTHREAD_operator"},"new thread"),"\xa0and ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG_#flow"},"asynchronous"),"\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG_"},"form opening")," operators). In this case, it is recommended that you always create a new session."))}p.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return f}));var r=n(0),s=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=s.a.createContext({}),p=function(e){var t=s.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=p(e.components);return s.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,f=h["".concat(o,".").concat(d)]||h[d]||l[d]||a;return n?s.a.createElement(f,c(c({ref:t},u),{},{components:n})):s.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);