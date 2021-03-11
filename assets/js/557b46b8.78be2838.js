(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{196:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var o=r(3),a=r(7),n=(r(0),r(423)),p=r(57),s={title:"JOIN operator"},c={unversionedId:"JOIN_operator",id:"JOIN_operator",isDocsHomePage:!1,title:"JOIN operator",description:"The JOIN operator creates a property that implements a composition.",source:"@site/docs/JOIN_operator.md",slug:"/JOIN_operator",permalink:"/docusaurustest/docs/JOIN_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/JOIN_operator.md",version:"current",sidebar:"docs",previous:{title:"IF ... THEN operator",permalink:"/docusaurustest/docs/IF_..._THEN_operator"},next:{title:"MAX operator",permalink:"/docusaurustest/docs/MAX_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"JOIN")," operator creates a ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Properties"},"property")," that implements a ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Composition_JOIN"},"composition"),"."),Object(n.b)("h3",{id:"syntax"},"Syntax"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},'[JOIN] propertyId(expr1, ..., exprN)\n\xa0\n[JOIN] "[" operator "]" (expr1, ..., exprN)\n\xa0\n[JOIN] "[" expression "]" (expr1, ..., exprN) \n')),Object(n.b)("p",null,'Where "',"[",'" and "',"]",'" are ordinary brackets.'),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Description"),"\xa0"),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"JOIN")," operator creates a property that implements a composition of properties. The ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Composition_JOIN"},"main property")," can be defined by one of the three following options:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"an ID of the existing property"),Object(n.b)("li",{parentName:"ul"},"a ",Object(n.b)("a",{parentName:"li",href:"/docusaurustest/docs/Property_operators#context-independent-operators"},"context independent")," ",Object(n.b)("a",{parentName:"li",href:"/docusaurustest/docs/Property_operators"},"property operator")," enclosed in brackets."),Object(n.b)("li",{parentName:"ul"},"an ",Object(n.b)("a",{parentName:"li",href:"/docusaurustest/docs/Expression"},"expression")," enclosed in brackets.")),Object(n.b)("p",null,"The latter two options allow to use as the main property a property\xa0without a name which is created right at the place of use. In certain cases, this can make the code more concise and avoids the explicit declaration of an intermediate property using the ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Instruction_="},"= instruction"),' that will not be used anywhere else. An operator or expression enclosed in brackets with an equal sign can use external parameters if necessary. When determining the parameters of the created "anonymous" property, the same rules apply as when creating the property in the ',Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Instruction_="},"= instruction"),", in the case when the parameters are not defined explicitly. \xa0 \xa0"),Object(n.b)("p",null,"Formally, the ",Object(n.b)("strong",{parentName:"p"},"JOIN"),"\xa0operator is also responsible for such constructions as ",Object(n.b)("strong",{parentName:"p"},"propertyID(a, b)"),", i.e. just an existing property with the parameters passed to it. In such cases, when possible, the ",Object(n.b)("strong",{parentName:"p"},"JOIN")," operator will not create a new anonymous property but return the property with the ",Object(n.b)("strong",{parentName:"p"},"propertyID"),".**\xa0**"),Object(n.b)("h3",{id:"parameters"},"Parameters"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"propertyId")),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#propertyid-broken"},"Property ID"),".\xa0"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"expr1, ..., exprN")),Object(n.b)("p",null,"A list of expressions defining the arguments of the main property. The number of expressions should be equal to the number of parameters of the main property."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"operator")),Object(n.b)("p",null,"A ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Property_operators"},"context-independent")," property operator that is used to create the main property."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"expression")),Object(n.b)("p",null,"An ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Expression"},"expression")," which is used to define the main property. Cannot be a single parameter."),Object(n.b)("h3",{id:"examples"},"Examples"),Object(n.b)(p.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=join1",mdxType:"CodeSample"}),Object(n.b)("p",null,"**",Object(n.b)("br",{parentName:"p"}),"\n","**"),Object(n.b)("p",null,"Sometimes it\u2019s convenient to define the main property with an expression to simplify the source code and make it more understandable."),Object(n.b)(p.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=join2",mdxType:"CodeSample"}))}u.isMDXComponent=!0}}]);