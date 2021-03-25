(window.webpackJsonp=window.webpackJsonp||[]).push([[238,436],{312:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(750)),s=r(57),p={title:"JOIN operator"},c={unversionedId:"JOIN_operator",id:"JOIN_operator",isDocsHomePage:!1,title:"JOIN operator",description:"The JOIN operator creates a property that implements a composition.",source:"@site/docs/JOIN_operator.md",slug:"/JOIN_operator",permalink:"/docusaurustest/docs/next/JOIN_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/JOIN_operator.md",version:"current",sidebar:"docs",previous:{title:"IF ... THEN operator",permalink:"/docusaurustest/docs/next/IF_..._THEN_operator"},next:{title:"MAX operator",permalink:"/docusaurustest/docs/next/MAX_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:i};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"JOIN")," operator creates a ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"property")," that implements a ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Composition_JOIN_"},"composition"),"."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'[JOIN] propertyId(expr1, ..., exprN)\n\xa0\n[JOIN] "[" operator "]" (expr1, ..., exprN)\n\xa0\n[JOIN] "[" expression "]" (expr1, ..., exprN) \n')),Object(a.b)("p",null,'Where "',"[",'" and "',"]",'" are ordinary brackets.'),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description"),"\xa0"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"JOIN")," operator creates a property that implements a composition of properties. The ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Composition_JOIN_"},"main property")," can be defined by one of the three following options:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"an ID of the existing property"),Object(a.b)("li",{parentName:"ul"},"a ",Object(a.b)("a",{parentName:"li",href:"/docusaurustest/docs/next/Property_operators#contextindependent"},"context independent")," ",Object(a.b)("a",{parentName:"li",href:"/docusaurustest/docs/next/Property_operators"},"property operator")," enclosed in brackets."),Object(a.b)("li",{parentName:"ul"},"an ",Object(a.b)("a",{parentName:"li",href:"/docusaurustest/docs/next/Expression"},"expression")," enclosed in brackets.")),Object(a.b)("p",null,"The latter two options allow to use as the main property a property\xa0without a name which is created right at the place of use. In certain cases, this can make the code more concise and avoids the explicit declaration of an intermediate property using the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Instruction_="},"= instruction"),' that will not be used anywhere else. An operator or expression enclosed in brackets with an equal sign can use external parameters if necessary. When determining the parameters of the created "anonymous" property, the same rules apply as when creating the property in the ',Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Instruction_="},"= instruction"),", in the case when the parameters are not defined explicitly. \xa0 \xa0"),Object(a.b)("p",null,"Formally, the ",Object(a.b)("strong",{parentName:"p"},"JOIN"),"\xa0operator is also responsible for such constructions as ",Object(a.b)("strong",{parentName:"p"},"propertyID(a, b)"),", i.e. just an existing property with the parameters passed to it. In such cases, when possible, the ",Object(a.b)("strong",{parentName:"p"},"JOIN")," operator will not create a new anonymous property but return the property with the ",Object(a.b)("strong",{parentName:"p"},"propertyID"),".**\xa0**"),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"propertyId")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#propertyid-broken"},"Property ID"),".\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"expr1, ..., exprN")),Object(a.b)("p",null,"A list of expressions defining the arguments of the main property. The number of expressions should be equal to the number of parameters of the main property."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"operator")),Object(a.b)("p",null,"A ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Property_operators"},"context-independent")," property operator that is used to create the main property."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"expression")),Object(a.b)("p",null,"An ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Expression"},"expression")," which is used to define the main property. Cannot be a single parameter."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=join1",mdxType:"CodeSample"}),Object(a.b)("p",null,"**",Object(a.b)("br",{parentName:"p"}),"\n","**"),Object(a.b)("p",null,"Sometimes it\u2019s convenient to define the main property with an expression to simplify the source code and make it more understandable."),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=join2",mdxType:"CodeSample"}))}l.isMDXComponent=!0},57:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return l})),r.d(t,"CodeSample",(function(){return b})),r.d(t,"default",(function(){return m}));var n=r(3),o=r(7),a=r(0),s=r.n(a),p=r(750),c=r(751),i={},u={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},l=[],b=function(e){var t=e.url,r=e.lines,n=Object(a.useState)(""),o=n[0],i=n[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),o?r?Object(p.b)(s.a.Fragment,null,Object(p.b)(c.a,{className:"lsf",metastring:r,mdxType:"CodeBlock"},o),Object(p.b)("br",null)):Object(p.b)(s.a.Fragment,null,Object(p.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(p.b)("br",null)):Object(p.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:l,CodeSample:b};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0}}]);