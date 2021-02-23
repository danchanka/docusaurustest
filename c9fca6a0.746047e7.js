(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{349:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return d}));var s=a(3),r=a(7),o=(a(0),a(421)),n=a(56),c={title:"EVAL operator"},i={unversionedId:"EVAL_operator",id:"EVAL_operator",isDocsHomePage:!1,title:"EVAL operator",description:"The EVAL operator: creating an action that executes code in the lsFusion language.",source:"@site/docs\\EVAL_operator.md",slug:"/EVAL_operator",permalink:"/docusaurustest/docs/EVAL_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/EVAL_operator.md",version:"current",sidebar:"docs",previous:{title:"EMAIL operator",permalink:"/docusaurustest/docs/EMAIL_operator"},next:{title:"EXEC operator",permalink:"/docusaurustest/docs/EXEC_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:p};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(s.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"EVAL")," operator: creating an ",Object(o.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that ",Object(o.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Eval_EVAL"}),"executes code")," in the ",Object(o.b)("strong",{parentName:"p"},"lsFusion")," language."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(s.a)({parentName:"pre"},{}),"EVAL [ACTION] expression [PARAMS paramExpr1, ..., paramExprN]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"EVAL")," operator is designed to execute program code\xa0while the server is running. The operator takes as its argument a string containing source code. This string\xa0can be a simple string ",Object(o.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Constant"}),"constant")," or a more complex ",Object(o.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expression")," that evaluates to a string."),Object(o.b)("p",null,"The code that is passed should consist of a sequence of ",Object(o.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Instructions"}),"instructions"),"\xa0(or ",Object(o.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/%D0%9Eperators"}),"action operators"),"\xa0and local property declarations, if the ",Object(o.b)("strong",{parentName:"p"},"ACTION")," option is specified). When the action is executed, this code is inserted into a ",Object(o.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Modules"}),"module")," with a unique name. The module header is generated by the system: it declares a unique name for the module and lists all the modules that are in the project in the ",Object(o.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Module_header"}),Object(o.b)("strong",{parentName:"a"},"REQUIRE")," instruction"),". Thus, you can use all ",Object(o.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Element_identification"}),"elements")," from other modules in the code passed in the ",Object(o.b)("strong",{parentName:"p"},"EVAL")," operator. If the ",Object(o.b)("strong",{parentName:"p"},"ACTION")," option is not specified, it is assumed that one of the passed instructions will be the creation of action with the name\xa0",Object(o.b)("strong",{parentName:"p"},"run\xa0"),"(it is this action that will be executed)."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expression")),Object(o.b)("p",null,"An ",Object(o.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expression")," whose value is the string to be executed."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ACTION")),Object(o.b)("p",null,"Keyword."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"paramExpr1, ..., paramExprN")),Object(o.b)("p",null,"A list of expressions whose values will be passed to the action being executed as arguments. The number of expressions must be equal to the number of parameters of the action being executed."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(n.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=eval",mdxType:"CodeSample"}))}d.isMDXComponent=!0}}]);