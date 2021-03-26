(window.webpackJsonp=window.webpackJsonp||[]).push([[33,436],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(750)),s=n(57),c={title:"INPUT operator"},p={unversionedId:"INPUT_operator",id:"INPUT_operator",isDocsHomePage:!1,title:"INPUT operator",description:"The\xa0INPUT\xa0operator creates an\xa0action that inputs a primitive.",source:"@site/docs/INPUT_operator.md",slug:"/INPUT_operator",permalink:"/docusaurustest/docs/next/INPUT_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/INPUT_operator.md",version:"current",sidebar:"docs",previous:{title:"IMPORT operator",permalink:"/docusaurustest/docs/next/IMPORT_operator"},next:{title:"MESSAGE operator",permalink:"/docusaurustest/docs/next/MESSAGE_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:i};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"INPUT"),"\xa0operator creates an\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Actions"},"action")," that ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Primitive_input_INPUT_"},"inputs a primitive"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"INPUT inputOptions \n[CHANGE [= changeExpr]]\n[DO actionOperator [ELSE elseActionOperator]]\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"inputOptions")," - input options. Specified\xa0by one of the following syntaxes:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[alias =] builtInClassName\n[alias] = expr\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"INPUT"),"\xa0operator creates an action which allows to request the value of one of the\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Built-in_classes"},"built-in classes")," from the user."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"builtInClassName")),Object(o.b)("p",null,"The name of one of the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Built-in_classes"},"built-in classes"),".\xa0"),Object(o.b)("p",null,"expr"),Object(o.b)("p",null,"\xa0 \xa0 \xa0 \xa0\xa0An ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Expression"},"expression"),", which value determines the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Value_input#initial"},"initial value")," of the input."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"alias")),Object(o.b)("p",null,"The name of the local parameter to which the input result is written.\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#id-broken"},"Simple ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CHANGE")),Object(o.b)("p",null,"A keyword specifying that in addition to the value input the result needs to be written to the specified property."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"changeExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Expression"},"expression")," that determines the property to which the input result is written.\xa0By default, the property specified as the initial input value is used."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionOperator")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Action_operator#contextdependent"},"context-dependent action operator")," that is executed if the input was completed successfully."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"elseActionOperator")),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Action_operator#contextdependent"},"context-dependent action operator")," that is executed if the input was cancelled. The input result parameter cannot be used as parameters."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=input",mdxType:"CodeSample"}))}l.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"CodeSample",(function(){return d})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),o=n(0),s=n.n(o),c=n(750),p=n(751),i={},u={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},l=[],d=function(e){var t=e.url,n=e.lines,a=Object(o.useState)(""),r=a[0],i=a[1];return Object(o.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),r?n?Object(c.b)(s.a.Fragment,null,Object(c.b)(p.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},r),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(p.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(c.b)("br",null)):Object(c.b)(p.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},b={toc:l,CodeSample:d};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0}}]);