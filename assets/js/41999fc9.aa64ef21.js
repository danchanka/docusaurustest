(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{167:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return p})),o.d(t,"default",(function(){return d}));var n=o(3),a=o(7),i=(o(0),o(424)),r=o(57),s={title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)"},c={unversionedId:"Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_",id:"Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_",isDocsHomePage:!1,title:"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)",description:"The selection operator creates a property that determines for a set of\xa0conditions\xa0which condition is met, and returns the value of the result corresponding to that condition. If none of the conditions is met, then the value of the created property will be NULL.",source:"@site/docs/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_.md",slug:"/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_",permalink:"/docusaurustest/docs/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_.md",version:"current",sidebar:"docs",previous:{title:"Property signature (CLASS)",permalink:"/docusaurustest/docs/Property_signature_CLASS_"},next:{title:"Set operations: Overview",permalink:"/docusaurustest/docs/Set_operations"}},p=[{value:"Polymorphic form",id:"poly",children:[]},{value:"Mutual exclusion of conditions",id:"exclusive",children:[]},{value:"Implicit definition",id:"implicit-definition",children:[]},{value:"Single form",id:"single",children:[]},{value:"Determining the result class",id:"determining-the-result-class",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:p};function d(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"selection")," operator creates a property that determines for a set of\xa0",Object(i.b)("em",{parentName:"p"},"conditions\xa0"),"which condition is met, and returns the value of the ",Object(i.b)("em",{parentName:"p"},"result")," corresponding to that condition. If none of the conditions is met, then the value of the created property will be ",Object(i.b)("strong",{parentName:"p"},"NULL"),".\xa0"),Object(i.b)("p",null,"All conditions and results are defined as some properties and/or parameters. Accordingly, a condition ",Object(i.b)("em",{parentName:"p"},"is satisfied")," if the value of the property or parameter by which this condition is set is not equal to ",Object(i.b)("strong",{parentName:"p"},"NULL"),".\xa0"),Object(i.b)("h3",{id:"poly"},"Polymorphic form"),Object(i.b)("p",null,"The platform also allows you to define a condition and the corresponding result with one property. In this case, the condition may be either matching the property's ",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Property_signature_CLASS_"},"signature"),",\xa0or the property itself. We will call this the",Object(i.b)("em",{parentName:"p"},"polymorphic")," form of the operator."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Note that the ",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Extremum_MAX_MIN_"},"extremum operator")," and logical operators basically are also varieties of the selection operator (and of\xa0its polymorphic form, i.e. the conditions and result are defined by one property)"))),Object(i.b)("h3",{id:"exclusive"},"Mutual exclusion of conditions"),Object(i.b)("p",null,"The selection operator lets you specify that all its conditions are ",Object(i.b)("em",{parentName:"p"},"mutually exclusive"),". If this option is specified, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."),Object(i.b)("p",null,"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows you to make the code more transparent and readable (especially with the polymorphic form of the selection operator)."),Object(i.b)("h3",{id:"implicit-definition"},"Implicit definition"),Object(i.b)("p",null,"This operator supports\xa0",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Property_extension"},"implicit definition"),"\xa0using the technique of extensions, which allows, in particular, to implement polymorphism in the form that is common practice in OOP."),Object(i.b)("h3",{id:"single"},"Single form"),Object(i.b)("p",null,"The\xa0",Object(i.b)("em",{parentName:"p"},"single\xa0"),"form of the selection operator checks exactly one condition. If this condition is met, the value of the specified result is returned. It is also possible to specify an\xa0",Object(i.b)("em",{parentName:"p"},"alternative result\xa0"),"which value is returned if the condition is not met."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Type of mutual exclusion and implicit definition do not make sense/are not supported for this form of the operator"))),Object(i.b)("h3",{id:"determining-the-result-class"},"Determining the result class"),Object(i.b)("p",null,"The result class of the selection operator is the common ancestor (builtin or ",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/User_classes#commonparentclass"},"user-defined"),") of its operands."),Object(i.b)("h3",{id:"language"},"Language"),Object(i.b)("p",null,"To create a property implementing a general form of selection, the\xa0",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"/docusaurustest/docs/CASE_operator"},"CASE"))," operator is used. The polymorphic form of the selection operator is implemented using the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"/docusaurustest/docs/MULTI_operator"},"MULTI")),",\xa0",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"/docusaurustest/docs/OVERRIDE_operator"},"OVERRIDE"),"\xa0and ",Object(i.b)("a",{parentName:"strong",href:"/docusaurustest/docs/EXCLUSIVE_operator"},"EXCLUSIVE")),",",Object(i.b)("strong",{parentName:"p"},"\xa0operators; the"),"single form using the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"/docusaurustest/docs/IF_operator"},"IF")),"\xa0and ",Object(i.b)("strong",{parentName:"p"},"IF ... THEN")," operator (the only operator that allows the specification of an alternative result)."),Object(i.b)("h3",{id:"examples"},"Examples"),Object(i.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=case",mdxType:"CodeSample"}),Object(i.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=multi",mdxType:"CodeSample"}),Object(i.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=override",mdxType:"CodeSample"}),Object(i.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=exclusive",mdxType:"CodeSample"}),Object(i.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=if",mdxType:"CodeSample"}),Object(i.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=ifthen",mdxType:"CodeSample"}),Object(i.b)("p",null,"**",Object(i.b)("br",{parentName:"p"}),"\n","**"))}d.isMDXComponent=!0}}]);