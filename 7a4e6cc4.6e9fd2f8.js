(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{250:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),o=(r(0),r(421)),s=r(56),p={title:"EXTERNAL operator"},c={unversionedId:"EXTERNAL_operator",id:"EXTERNAL_operator",isDocsHomePage:!1,title:"EXTERNAL operator",description:"The\xa0EXTERNAL\xa0operator creates an\xa0action that implements accessing to an external system.",source:"@site/docs\\EXTERNAL_operator.md",slug:"/EXTERNAL_operator",permalink:"/docusaurustest/docs/EXTERNAL_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/EXTERNAL_operator.md",version:"current",sidebar:"docs",previous:{title:"EXPORT operator",permalink:"/docusaurustest/docs/EXPORT_operator"},next:{title:"FOR operator",permalink:"/docusaurustest/docs/FOR_operator"}},b=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"requestType",id:"requesttype",children:[]},{value:"headersToPropertyId",id:"headerstopropertyid",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:b};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"EXTERNAL"),"\xa0operator creates an\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that implements ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Access_to_an_external_system_EXTERNAL"}),"accessing to an external system"),".\xa0"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"EXTERNAL externalCall [PARAMS paramExpr1, ..., paramExprN] [TO propertyId1. ..., propertyIdM]\n")),Object(o.b)("p",null,"externalCall - an external call defined by one of the following syntaxes:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"HTTP [requestType] connectionStrExpr [BODYURL bodyStrExpr] [HEADERS headersPropertyId] [COOKIES cookiesPropertyId] [HEADERSTO headersToPropertyId] [COOKIESTO cookiesToPropertyId]\nSQL connectionStrExpr EXEC execStrExpr\nLSF connectionStrExpr lsfExecType execStrExpr\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"EXTERNAL"),"\xa0operator creates an action that makes a request to an external system."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HTTP")),Object(o.b)("p",null,"Keyword. Specifies that the operator is executing a web server HTTP request."),Object(o.b)("h3",{id:"requesttype"},"requestType"),Object(o.b)("p",null,"Keyword. Defines the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods"}),"method")," of the HTTP request:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"POST")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"GET")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"PUT")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"DELETE"))),Object(o.b)("p",null,"The default value is\xa0",Object(o.b)("strong",{parentName:"p"},"POST"),".**",Object(o.b)("br",{parentName:"p"}),"\n","**"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"SQL")),Object(o.b)("p",null,"Keyword. Specifies that the operator executes an SQL server command or commands."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"LSF")),Object(o.b)("p",null,"Keyword. Specifies that the operator executes an action of another lsFusion server."),Object(o.b)("p",null,"*connectionStrExpr  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"})),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"Expression"),". *",Object(o.b)("strong",{parentName:"p"},"*HTTP**"),":\xa0http request string. ",Object(o.b)("strong",{parentName:"p"},"SQL"),": DBMS connection string. ",Object(o.b)("strong",{parentName:"p"},"LSF"),": URL of an lsFusion server (application)."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"bodyStrExpr\n")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"Expression"),".\xa0Continuation of http request string in BODY. Relevant when BODY has > 1 parameter. If not specified, the parameters are passed in multipart format."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"headersPropertyId")),Object(o.b)("h3",{id:"headerstopropertyid"},"headersToPropertyId"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#propertyid-broken"}),"Property ID")," containing request headers. The property must have exactly one parameter: the name of the request's header. This parameter must belong to a string\xa0class. If the property is not specified, headers are ignored/not set."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"cookiesPropertyId")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"cookiesToPropertyId")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#propertyid-broken"}),"Property ID")," containing request cookies. The property must have exactly one parameter: the name of the cookie. This parameter must belong to a string\xa0class. If the property is not specified, cookies are ignored/not set."),Object(o.b)("p",null,"lsfExecType"),Object(o.b)("p",null,"Keyword. Specifies the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Access_from_an_external_system#defining-an-action"}),"way of defining")," the action:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"EXEC")," \u2013 the name of the action is specified."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"EVAL")," \u2013 the code of the action is specified in the lsFusion language. It is assumed that this code contains a declaration of an action named ",Object(o.b)("strong",{parentName:"li"},"run"),". This is the action that will be called."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"EVAL ACTION")," \u2013 the action code in the lsFusion language is specified. To access a parameter, the special character $ and the parameter number (starting from 1) are used.")),Object(o.b)("p",null,"*execStr  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"})),Object(o.b)("p",null,"Expression. ",Object(o.b)("strong",{parentName:"p"},"SQL"),": SQL query command(s). ",Object(o.b)("strong",{parentName:"p"},"LSF"),": The name of an action or code, depending on how the action is defined."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"paramExpr1, ..., paramExprN")),Object(o.b)("p",null,"List of expressions whose values will be used as the call parameters."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId1, ..., propertyIdM")),Object(o.b)("p",null,"List\xa0of property IDs\xa0(without parameters) to which the results will be written."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(s.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=ActionSample&block=external",mdxType:"CodeSample"}))}l.isMDXComponent=!0}}]);