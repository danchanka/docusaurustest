(window.webpackJsonp=window.webpackJsonp||[]).push([[395],{469:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return r})),s.d(t,"metadata",(function(){return c})),s.d(t,"toc",(function(){return i})),s.d(t,"default",(function(){return u}));var a=s(3),o=s(7),n=(s(0),s(750)),r={title:"Change sessions"},c={unversionedId:"Change_sessions",id:"version-1.0.0/Change_sessions",isDocsHomePage:!1,title:"Change sessions",description:"Actions\xa0can change the state of the system in which they are executed. It is not always desirable to write these changes directly to the database, both from the perspective of integrity and from the perspective of the ergonomics of the system. The platform therefore allows to accumulate these changes locally in change sessions.",source:"@site/versioned_docs/version-1.0.0/Change_sessions.md",slug:"/Change_sessions",permalink:"/docusaurustest/docs/Change_sessions",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/Change_sessions.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Actions: Overview",permalink:"/docusaurustest/docs/Actions"},next:{title:"\u041eperators: Overview",permalink:"/docusaurustest/docs/\u041eperators"}},i=[],h={toc:i};function u(e){var t=e.components,s=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},h,s,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"Actions"),"\xa0can change the state of the system in which they are executed. It is not always desirable to write these changes directly to the database, both from the perspective of integrity and from the perspective of the ergonomics of the system. The platform therefore allows to accumulate these changes locally in ",Object(n.b)("em",{parentName:"p"},"change sessions."),"\xa0"),Object(n.b)("p",null,"Changes in a session may be changes in ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Data_properties_DATA_"},"data")," properties, including local ones, as well as changes in ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/User_classes"},"classes")," of objects.\xa0The former are done by actions created using the ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Property_change_CHANGE_"},"property change operator"),", the latter using the ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/New_object_NEW_"},"add"),"/",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Class_change_CHANGECLASS_DELETE_"},"change"),"\xa0object class operators."),Object(n.b)("p",null,"Each time an action is executed, the ",Object(n.b)("em",{parentName:"p"},"current")," session is determined depending on the execution context. For example, if the action is called as the handler of some event on a form (the most common case), then the session of that form will be the current session for it. The current session may also change when the ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/New_session_NEWSESSION_NESTEDSESSION_"},"new session")," operator is used, for example."),Object(n.b)("p",null,"If an action refers to some property during the execution, then its value is calculated taking into account the changes made in the current session of that action."),Object(n.b)("p",null,"Two basic operations are supported for a session -\xa0",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Apply_changes_APPLY_"},"application"),"\xa0and\xa0",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Cancel_changes_CANCEL_"},"cancellation")," ",Object(n.b)("em",{parentName:"p"},"-")," as well as a set of operators for\xa0",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Change_operators_SET_CHANGED_..._"},"working with changes"),"\xa0(including getting\xa0a ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Previous_value_PREV_"},"previous value"),"\xa0in the session)."),Object(n.b)("p",null,'Note that change sessions are not thread safe, therefore when using operators that explicitly or implicitly perform actions in a new thread and do not block their execution flow, it is highly recommended not to access the current session after they are executed (such "multi-threaded" operators include the\xa0',Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/NEWTHREAD_operator"},"new thread"),"\xa0and ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG_#flow"},"asynchronous"),"\xa0",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG_"},"form opening")," operators). In this case, it is recommended that you always create a new session."))}u.isMDXComponent=!0}}]);