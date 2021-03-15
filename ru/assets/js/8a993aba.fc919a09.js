(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{266:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return l}));var o=a(3),s=a(7),n=(a(0),a(423)),r=a(424),c={title:"Eval (EVAL)"},i={unversionedId:"Eval_EVAL",id:"Eval_EVAL",isDocsHomePage:!1,title:"Eval (EVAL)",description:"The eval operator creates an action that executes defined program code in the lsFusion\xa0language. Program code is defined as a property whose value should belong to the string class. This is implemented using an\xa0action which takes a line of code as an argument.",source:"@site/docs/Eval_EVAL.md",slug:"/Eval_EVAL",permalink:"/docusaurustest/ru/docs/Eval_EVAL",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Eval_EVAL.md",version:"current",sidebar:"docs",previous:{title:"Custom formula (FORMULA)",permalink:"/docusaurustest/ru/docs/Custom_formula_FORMULA"},next:{title:"Migration",permalink:"/docusaurustest/ru/docs/Migration"}},u=[{value:"Action execution",id:"action-execution",children:[]},{value:"Executable code restrictions",id:"executable-code-restrictions",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:u};function l(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The eval operator creates an action that executes defined program code in the ",Object(n.b)("strong",{parentName:"p"},"lsFusion"),"\xa0language. Program code is defined as a property whose value should belong to the string class. This is implemented using an\xa0",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Actions"},"action")," which takes a line of code as an argument."),Object(n.b)("p",null,"The code that is passed to an action must be a sequence of\xa0",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Instructions"},"instructions"),". It is assumed that one of these instructions will create an action named ",Object(n.b)("strong",{parentName:"p"},"run")," (it is this action that will be executed)."),Object(n.b)("h3",{id:"action-execution"},"Action execution"),Object(n.b)("p",null,"This operator can also execute a single action (rather than a set of instructions): in this case the code should be a sequence of\xa0",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/%D0%9Eperators"},"action operators"),"\xa0and local property declarations.\xa0To refer to the parameters of the action, you can use the special character $ and the parameter number (starting from 1)."),Object(n.b)("h3",{id:"executable-code-restrictions"},"Executable code restrictions"),Object(n.b)("p",null,"In the current implementation, executable code must not contain instructions that modify existing objects in the system. For example, you cannot add ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Events"},"events")," or ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Data_properties_DATA"},"data")," and materialized properties, ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Extensions"},"extend"),"\xa0existing\xa0objects, etc."),Object(n.b)("h3",{id:"language"},"Language"),Object(n.b)("p",null,"To declare an action that executes program code, use the\xa0",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/EVAL_operator"},Object(n.b)("strong",{parentName:"a"},"EVAL")," operator"),"."),Object(n.b)("h3",{id:"examples"},"Examples"),Object(n.b)(r.a,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=eval",mdxType:"CodeSample"}))}l.isMDXComponent=!0}}]);