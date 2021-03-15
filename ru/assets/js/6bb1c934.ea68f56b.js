(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{225:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(7),a=(r(0),r(423)),c=r(424),s={title:"NEWTHREAD operator"},i={unversionedId:"NEWTHREAD_operator",id:"NEWTHREAD_operator",isDocsHomePage:!1,title:"NEWTHREAD operator",description:"The\xa0NEWTHREAD\xa0operator creates an action that executes another action in a new thread.",source:"@site/docs/NEWTHREAD_operator.md",slug:"/NEWTHREAD_operator",permalink:"/docusaurustest/ru/docs/NEWTHREAD_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/NEWTHREAD_operator.md",version:"current",sidebar:"docs",previous:{title:"NEWSESSION operator",permalink:"/docusaurustest/ru/docs/NEWSESSION_operator"},next:{title:"PRINT operator",permalink:"/docusaurustest/ru/docs/PRINT_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]}],u={toc:p};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"NEWTHREAD"),"\xa0operator creates an ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Actions"},"action")," that executes another action in a ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/New_threads_NEWTHREAD_NEWEXECUTOR"},"new thread"),"."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"NEWTHREAD action [CONNECTION connectionExpr]\nNEWTHREAD action SCHEDULE [PERIOD periodExpr] [DELAY delayExpr]\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"NEWTHREAD"),"\xa0operator creates an action that executes another action in a new thread. When the ",Object(a.b)("strong",{parentName:"p"},"CONNECTION")," keyword is used, you can specify the connection which will be used during the action execution. There is also a second form of the ",Object(a.b)("strong",{parentName:"p"},"NEWTHREAD")," operator for triggering an action using the scheduler. This form usage is determined by the presence of the ",Object(a.b)("strong",{parentName:"p"},"SCHEDULE")," keyword. \xa0"),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"action\xa0")),Object(a.b)("p",null,"A ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Action_operator#contextdependent"},"context dependent operator")," that defines an action to be executed in the new thread."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"connectionExpr")),Object(a.b)("p",null,"An ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Expression"},"expression")," which value is a ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Properties"},"property")," that returns an object of the ",Object(a.b)("strong",{parentName:"p"},"SystemEvents.Connection")," class. Defines the connection for which this action will be performed.\xa0\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"periodExpr")),Object(a.b)("p",null,"An expression which value is a property that returns the length of the action repetition period in milliseconds. If not specified, the action will be executed once."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"delayExpr")),Object(a.b)("p",null,"An expression which value is a property that returns the delay before the first execution of the action in milliseconds. If not specified, the action will be executed without delay."),Object(a.b)("p",null,"\xa0",Object(a.b)("strong",{parentName:"p"},"Examples")),Object(a.b)(c.a,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=newthread",mdxType:"CodeSample"}))}d.isMDXComponent=!0}}]);