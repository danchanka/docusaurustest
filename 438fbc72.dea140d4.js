(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{168:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var s=a(3),o=a(7),n=(a(0),a(421)),i=a(56),c={title:"Show message (MESSAGE, ASK)"},r={unversionedId:"Show_message_MESSAGE_ASK",id:"Show_message_MESSAGE_ASK",isDocsHomePage:!1,title:"Show message (MESSAGE, ASK)",description:"The show message operator creates an action which shows the user a window with a text message.\xa0The message is defined as some property whose value will be used as a message.",source:"@site/docs\\Show_message_MESSAGE_ASK.md",slug:"/Show_message_MESSAGE_ASK",permalink:"/docusaurustest/docs/Show_message_MESSAGE_ASK",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Show_message_MESSAGE_ASK.md",version:"current",sidebar:"docs",previous:{title:"User/IS interaction",permalink:"/docusaurustest/docs/User_IS_interaction"},next:{title:"File operators",permalink:"/docusaurustest/docs/File_operators"}},l=[{value:"Flow control",id:"flow-control",children:[]},{value:"Dialog form",id:"dialog-form",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:l};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(s.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The ",Object(n.b)("em",{parentName:"p"},"show message")," operator creates an ",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," which shows the user a window with a text message.\xa0The message is defined as some ",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Properties"}),"property")," whose value will be used as a message."),Object(n.b)("h3",{id:"flow-control"},"Flow control"),Object(n.b)("p",null,"By default, the created action stops the thread until the user closes the message. However, this behavior can be changed using the corresponding option \u2013 in this case, the created action is completed immediately and the message is shown to the user as soon as possible (that is, the next user interaction). The first mode shall be called\xa0",Object(n.b)("em",{parentName:"p"},"synchronous")," and the second\xa0",Object(n.b)("em",{parentName:"p"},"asynchronous"),"."),Object(n.b)("h3",{id:"dialog-form"},"Dialog form"),Object(n.b)("p",null,"It is also often necessary not only to inform the user about something, but also, for example, to request confirmation to continue an action. For such cases, the operator allows, instead of simply displaying the message (with a single OK button), to ask a question with the option of canceling (OK/Cancel) and thereby essentially to implement ",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Value_input"}),"a value input"),". This input is considered to have been ",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Value_input#cancellation-and-input-result"}),"canceled")," if the Cancel button is pressed (there is no input value in that case)."),Object(n.b)("p",null,"In addition, a third option can be added to the question: Yes / No / Cancel. In this case, it is considered that ",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Value_input#cancellation-and-input-result"}),"the input result")," will be a value of logical class (Yes - ",Object(n.b)("strong",{parentName:"p"},"TRUE"),", No - ",Object(n.b)("strong",{parentName:"p"},"NULL"),"). As in the first case, the input is considered to be canceled if the Cancel button is selected."),Object(n.b)("p",null,"The form of the operator in which the user is asked a question shall be called\xa0the ",Object(n.b)("em",{parentName:"p"},"dialog")," form.\xa0"),Object(n.b)("p",null,"As with other value input operators, in the dialog form of this operator\xa0you can define\xa0",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Value_input#cancellation-and-input-result"}),"main and alternative"),"\xa0actions. The first is called if the input was successfully completed, the second if not (i.e. if the input was canceled)."),Object(n.b)("p",null,"The operator dialog form is available in synchronous mode only."),Object(n.b)("h3",{id:"language"},"Language"),Object(n.b)("p",null,"To declare an action showing a message, use\xa0",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/MESSAGE_operator"}),"the\xa0",Object(n.b)("strong",{parentName:"a"},"MESSAGE")," operator"),". To display the message in dialog form, use the ",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/ASK_operator"}),Object(n.b)("strong",{parentName:"a"},"ASK")," operator"),"."),Object(n.b)("h3",{id:"examples"},"Examples"),Object(n.b)(i.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=ActionSample&block=message",mdxType:"CodeSample"}),Object(n.b)(i.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=ActionSample&block=ask",mdxType:"CodeSample"}))}d.isMDXComponent=!0}}]);