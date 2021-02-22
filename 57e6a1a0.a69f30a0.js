(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{199:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),o=(a(0),a(421)),s=a(56),p={title:"INPUT operator"},c={unversionedId:"INPUT_operator",id:"INPUT_operator",isDocsHomePage:!1,title:"INPUT operator",description:"The\xa0INPUT\xa0operator creates an\xa0action that inputs a primitive.",source:"@site/docs\\INPUT_operator.md",slug:"/INPUT_operator",permalink:"/docusaurustest/docs/INPUT_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/INPUT_operator.md",version:"current",sidebar:"docs",previous:{title:"IMPORT operator",permalink:"/docusaurustest/docs/IMPORT_operator"},next:{title:"MESSAGE operator",permalink:"/docusaurustest/docs/MESSAGE_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:i};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"INPUT"),"\xa0operator creates an\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Primitive_input_INPUT"}),"inputs a primitive"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"INPUT inputOptions \n[CHANGE [= changeExpr]]\n[DO actionOperator [ELSE elseActionOperator]]\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"inputOptions")," - input options. Specified\xa0by one of the following syntaxes:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"[alias =] builtInClassName\n[alias] = expr\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"INPUT"),"\xa0operator creates an action which allows to request the value of one of the\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Built-in_classes"}),"built-in classes")," from the user."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"builtInClassName")),Object(o.b)("p",null,"The name of one of the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Built-in_classes"}),"built-in classes"),".\xa0"),Object(o.b)("p",null,"expr"),Object(o.b)("p",null,"\xa0 \xa0 \xa0 \xa0\xa0An ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expression"),", which value determines the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Value_input#initial-values-and-automatic-change"}),"initial value")," of the input."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"alias")),Object(o.b)("p",null,"The name of the local parameter to which the input result is written.\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#id-broken"}),"Simple ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CHANGE")),Object(o.b)("p",null,"A keyword specifying that in addition to the value input the result needs to be written to the specified property."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"changeExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expression")," that determines the property to which the input result is written.\xa0By default, the property specified as the initial input value is used."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionOperator")),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Action_operator#context-dependent-operators"}),"context-dependent action operator")," that is executed if the input was completed successfully."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"elseActionOperator")),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Action_operator#context-dependent-operators"}),"context-dependent action operator")," that is executed if the input was cancelled. The input result parameter cannot be used as parameters."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(s.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=ActionSample&block=input",mdxType:"CodeSample"}))}b.isMDXComponent=!0}}]);