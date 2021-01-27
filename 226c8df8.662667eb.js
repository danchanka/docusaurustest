(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{130:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(424)),p={},c={unversionedId:"LSFUS/lsFusionEXTERNAL_operator",id:"LSFUS/lsFusionEXTERNAL_operator",isDocsHomePage:!1,title:"lsFusionEXTERNAL_operator",description:"lsFusionEXTERNAL operator",source:"@site/docs\\LSFUS\\lsFusionEXTERNAL_operator.md",slug:"/LSFUS/lsFusionEXTERNAL_operator",permalink:"/docusaurustest/docs/LSFUS/lsFusionEXTERNAL_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionEXTERNAL_operator.md",version:"current"},s=[],b={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionexternal-operator"},"lsFusionEXTERNAL operator"),Object(o.b)("h1",{id:"external-operator"},"EXTERNAL operator"),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"EXTERNAL"),"\xa0operator creates an\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionActions"}),"action")," that implements ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionAccess_to_an_external_system_EXTERNAL_"}),"accessing to an external system"),".\xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"EXTERNAL externalCall [PARAMS paramExpr1, ..., paramExprN] [TO propertyId1. ..., propertyIdM]\n")),Object(o.b)("p",null,"externalCall - an external call defined by one of the following syntaxes:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"HTTP [requestType] connectionStrExpr [BODYURL bodyStrExpr] [HEADERS headersPropertyId] [COOKIES cookiesPropertyId] [HEADERSTO headersToPropertyId] [COOKIESTO cookiesToPropertyId]\nSQL connectionStrExpr EXEC execStrExpr\nLSF connectionStrExpr lsfExecType execStrExpr\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"EXTERNAL"),"\xa0operator creates an action that makes a request to an external system."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HTTP")),Object(o.b)("p",null,"Keyword. Specifies that the operator is executing a web server HTTP request."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"requestType")),Object(o.b)("p",null,"Keyword. Defines the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://ru.wikipedia.org/wiki/HTTP#%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D1%8B"}),"method")," of the HTTP request:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"POST")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"GET")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"PUT")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"DELETE"))),Object(o.b)("p",null,"The default value is\xa0",Object(o.b)("strong",{parentName:"p"},"POST"),".**",Object(o.b)("br",{parentName:"p"}),"\n","**"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"SQL")),Object(o.b)("p",null,"Keyword. Specifies that the operator executes an SQL server command or commands."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"LSF")),Object(o.b)("p",null,"Keyword. Specifies that the operator executes an action of another lsFusion server."),Object(o.b)("p",null,"*connectionStrExpr  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"})),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionExpression"}),"Expression"),". *",Object(o.b)("strong",{parentName:"p"},"*HTTP**"),":\xa0http request string. ",Object(o.b)("strong",{parentName:"p"},"SQL"),": DBMS connection string. ",Object(o.b)("strong",{parentName:"p"},"LSF"),": URL of an lsFusion server (application)."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"bodyStrExpr\n")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionExpression"}),"Expression"),".\xa0Continuation of http request string in BODY. Relevant when BODY has ",">"," 1 parameter. If not specified, the parameters are passed in multipart format."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"headersPropertyId")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"headersToPropertyId")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"Property ID")," containing request headers. The property must have exactly one parameter: the name of the request's header. This parameter must belong to a string\xa0class. If the property is not specified, headers are ignored/not set."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"cookiesPropertyId")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"cookiesToPropertyId")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"Property ID")," containing request cookies. The property must have exactly one parameter: the name of the cookie. This parameter must belong to a string\xa0class. If the property is not specified, cookies are ignored/not set."),Object(o.b)("p",null,"lsfExecType"),Object(o.b)("p",null,"Keyword. Specifies the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Access-from-an-external-system_51216539.html#Accessfromanexternalsystem-actiontype"}),"way of defining")," the action:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"EXEC")," \u2013 the name of the action is specified."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"EVAL")," \u2013 the code of the action is specified in the lsFusion language. It is assumed that this code contains a declaration of an action named ",Object(o.b)("strong",{parentName:"li"},"run"),". This is the action that will be called."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"EVAL ACTION")," \u2013 the action code in the lsFusion language is specified. To access a parameter, the special character $ and the parameter number (starting from 1) are used.")),Object(o.b)("p",null,"*execStr  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"})),Object(o.b)("p",null,"Expression. ",Object(o.b)("strong",{parentName:"p"},"SQL"),": SQL query command(s). ",Object(o.b)("strong",{parentName:"p"},"LSF"),": The name of an action or code, depending on how the action is defined."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"paramExpr1, ..., paramExprN")),Object(o.b)("p",null,"List of expressions whose values will be used as the call parameters."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId1, ..., propertyIdM")),Object(o.b)("p",null,"List\xa0of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id-%D0%A1%D0%B8%D0%BD%D1%82%D0%B0%D0%BA%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-propertyid"}),"property IDs"),"\xa0(without parameters) to which the results will be written."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null))}l.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),i=l(r),O=n,m=i["".concat(p,".").concat(O)]||i[O]||u[O]||o;return r?a.a.createElement(m,c(c({ref:t},b),{},{components:r})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=O;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var b=2;b<o;b++)p[b]=r[b];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);