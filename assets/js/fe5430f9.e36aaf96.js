(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{416:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return c})),r.d(e,"metadata",(function(){return o})),r.d(e,"toc",(function(){return u})),r.d(e,"default",(function(){return i}));var a=r(3),n=r(7),b=(r(0),r(423)),l=r(57),c={title:"Structure operations (STRUCT, [])"},o={unversionedId:"Structure_operations_STRUCT",id:"Structure_operations_STRUCT",isDocsHomePage:!1,title:"Structure operations (STRUCT, \\[\\])",description:"The term structure is used in the platform to refer to the classes which objects consist of a collection of other objects in a fixed order. The platform supports two operators for working with structures:",source:"@site/docs/Structure_operations_STRUCT.md",slug:"/Structure_operations_STRUCT",permalink:"/docusaurustest/docs/Structure_operations_STRUCT",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Structure_operations_STRUCT.md",version:"current",sidebar:"docs",previous:{title:"String operators (+, CONCAT, SUBSTRING)",permalink:"/docusaurustest/docs/String_operators_+_CONCAT_SUBSTRING"},next:{title:"Type conversion",permalink:"/docusaurustest/docs/Type_conversion"}},u=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:u};function i(t){var e=t.components,r=Object(n.a)(t,["components"]);return Object(b.b)("wrapper",Object(a.a)({},s,r,{components:e,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The term ",Object(b.b)("em",{parentName:"p"},"structure")," is used in the platform to refer to the ",Object(b.b)("a",{parentName:"p",href:"/docusaurustest/docs/Classes"},"classes")," which objects consist of a collection of other objects in a fixed order. The platform supports two operators for working with structures:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},Object(b.b)("div",null,Object(b.b)("br",null),Object(b.b)("div",null,Object(b.b)("br",null),Object(b.b)("div",null,Object(b.b)("br",null),"Operator",Object(b.b)("br",null)),Object(b.b)("br",null)),Object(b.b)("br",null))),Object(b.b)("th",{parentName:"tr",align:null},Object(b.b)("div",null,Object(b.b)("br",null),Object(b.b)("div",null,Object(b.b)("br",null),Object(b.b)("div",null,Object(b.b)("br",null),"Name",Object(b.b)("br",null)),Object(b.b)("br",null)),Object(b.b)("br",null))),Object(b.b)("th",{parentName:"tr",align:null},Object(b.b)("div",null,Object(b.b)("br",null),Object(b.b)("div",null,Object(b.b)("br",null),Object(b.b)("div",null,Object(b.b)("br",null),"Description",Object(b.b)("br",null)),Object(b.b)("br",null)),Object(b.b)("br",null))),Object(b.b)("th",{parentName:"tr",align:null},Object(b.b)("div",null,Object(b.b)("br",null),Object(b.b)("div",null,Object(b.b)("br",null),Object(b.b)("div",null,Object(b.b)("br",null),"Example",Object(b.b)("br",null)),Object(b.b)("br",null)),Object(b.b)("br",null))),Object(b.b)("th",{parentName:"tr",align:null},Object(b.b)("div",null,Object(b.b)("br",null),Object(b.b)("div",null,Object(b.b)("br",null),Object(b.b)("div",null,Object(b.b)("br",null),"Result",Object(b.b)("br",null)),Object(b.b)("br",null)),Object(b.b)("br",null))))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"STRUCT"),Object(b.b)("td",{parentName:"tr",align:null},"Creation"),Object(b.b)("td",{parentName:"tr",align:null},"Creates a ",Object(b.b)("a",{parentName:"td",href:"/docusaurustest/docs/Properties"},"property")," that takes a list of operands and returns a structure consisting of the objects passed"),Object(b.b)("td",{parentName:"tr",align:null},"STRUCT('a', 1)"),Object(b.b)("td",{parentName:"tr",align:null},"STRUCT('a', 1)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"[ ]"),Object(b.b)("td",{parentName:"tr",align:null},"Access"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("p",null,"Creates a property that takes an operand with a fixed integer\xa0and returns an object of the structure specified in the first operand with a number equal to the specified integer")),Object(b.b)("td",{parentName:"tr",align:null},"STRUCT('a',1)","[2]"),Object(b.b)("td",{parentName:"tr",align:null},"1\xa0")))),Object(b.b)("p",null,"Structures support comparison operations which are executed sequentially for each object included in the structure.\xa0"),Object(b.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(b.b)("div",{parentName:"div",className:"admonition-heading"},Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",{parentName:"h5",className:"admonition-icon"},Object(b.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(b.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(b.b)("div",{parentName:"div",className:"admonition-content"},Object(b.b)("p",{parentName:"div"},"To better understand how this works, it\u2019s sufficient to say that physically a structure is just a concatenation of the objects included in this structure converted to bit strings"))),Object(b.b)("h3",{id:"language"},"Language"),Object(b.b)("p",null,"To create a property that creates a structure the ",Object(b.b)("a",{parentName:"p",href:"/docusaurustest/docs/STRUCT_operator"},Object(b.b)("strong",{parentName:"a"},"STRUCT")," operator")," is used."),Object(b.b)("p",null,"To create a property that returns an object from the structure the ",Object(b.b)("a",{parentName:"p",href:"/docusaurustest/docs/Operator"},Object(b.b)("strong",{parentName:"a"},"["," ","]"),"\xa0operator")," is used."),Object(b.b)("h3",{id:"examples"},"Examples"),Object(b.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=struct",mdxType:"CodeSample"}),Object(b.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=brackets",mdxType:"CodeSample"}),Object(b.b)("p",null,"**",Object(b.b)("br",{parentName:"p"}),"\n","**"))}i.isMDXComponent=!0}}]);