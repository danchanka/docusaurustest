(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{198:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(423)),p={},s={unversionedId:"LSFUS/lsFusionJOIN_operator",id:"LSFUS/lsFusionJOIN_operator",isDocsHomePage:!1,title:"lsFusionJOIN_operator",description:"lsFusionJOIN operator",source:"@site/docs\\LSFUS\\lsFusionJOIN_operator.md",slug:"/LSFUS/lsFusionJOIN_operator",permalink:"/docusaurustest/docs/LSFUS/lsFusionJOIN_operator",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/LSFUS/lsFusionJOIN_operator.md",version:"current"},c=[],i={toc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusionjoin-operator"},"lsFusionJOIN operator"),Object(a.b)("h1",{id:"join-operator"},"JOIN operator"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"JOIN")," operator creates a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperties"}),"property")," that implements a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionComposition_JOIN_"}),"composition"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'[JOIN] propertyId(expr1, ..., exprN)\n\xa0\n[JOIN] "[" operator "]" (expr1, ..., exprN)\n\xa0\n[JOIN] "[" expression "]" (expr1, ..., exprN) \n')),Object(a.b)("p",null,'Where "',"[",'" and "',"]",'" are ordinary brackets.'),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description"),"\xa0"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"JOIN")," operator creates a property that implements a composition of properties. The ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionComposition_JOIN_"}),"main property")," can be defined by one of the three following options:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"an ID of the existing property"),Object(a.b)("li",{parentName:"ul"},"a ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"Property-operators_36307155.html#Propertyoperators-contextindependent"}),"context independent")," ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperty_operators"}),"property operator")," enclosed in brackets."),Object(a.b)("li",{parentName:"ul"},"an ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/lsFusionExpression"}),"expression")," enclosed in brackets.")),Object(a.b)("p",null,"The latter two options allow to use as the main property a property\xa0without a name which is created right at the place of use. In certain cases, this can make the code more concise and avoids the explicit declaration of an intermediate property using the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionInstruction_="}),"= instruction"),' that will not be used anywhere else. An operator or expression enclosed in brackets with an equal sign can use external parameters if necessary. When determining the parameters of the created "anonymous" property, the same rules apply as when creating the property in the ',Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionInstruction_="}),"= instruction"),", in the case when the parameters are not defined explicitly. \xa0 \xa0"),Object(a.b)("p",null,"Formally, the ",Object(a.b)("strong",{parentName:"p"},"JOIN"),"\xa0operator is also responsible for such constructions as ",Object(a.b)("strong",{parentName:"p"},"propertyID(a, b)"),", i.e. just an existing property with the parameters passed to it. In such cases, when possible, the ",Object(a.b)("strong",{parentName:"p"},"JOIN")," operator will not create a new anonymous property but return the property with the ",Object(a.b)("strong",{parentName:"p"},"propertyID"),".**\xa0**"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"propertyId")),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"Property ID"),".\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"expr1, ..., exprN")),Object(a.b)("p",null,"A list of expressions defining the arguments of the main property. The number of expressions should be equal to the number of parameters of the main property."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"operator")),Object(a.b)("p",null,"A ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperty_operators"}),"context-independent")," property operator that is used to create the main property."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"expression")),Object(a.b)("p",null,"An ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionExpression"}),"expression")," which is used to define the main property. Cannot be a single parameter."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples")),Object(a.b)("hr",null))}u.isMDXComponent=!0},423:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},O=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),b=u(r),O=n,m=b["".concat(p,".").concat(O)]||b[O]||l[O]||a;return r?o.a.createElement(m,s(s({ref:t},i),{},{components:r})):o.a.createElement(m,s({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=O;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var i=2;i<a;i++)p[i]=r[i];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);