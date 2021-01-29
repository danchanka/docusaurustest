(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{295:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(424)),p={title:"JOIN operator"},c={unversionedId:"LSFUS/JOIN_operator",id:"LSFUS/JOIN_operator",isDocsHomePage:!1,title:"JOIN operator",description:"The JOIN operator creates a property that implements a composition.",source:"@site/docs\\LSFUS\\JOIN_operator.md",slug:"/LSFUS/JOIN_operator",permalink:"/docusaurustest/docs/LSFUS/JOIN_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/JOIN_operator.md",version:"current"},s=[],i={toc:s};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"JOIN")," operator creates a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Properties"}),"property")," that implements a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Composition_JOIN_"}),"composition"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),'[JOIN] propertyId(expr1, ..., exprN)\n\xa0\n[JOIN] "[" operator "]" (expr1, ..., exprN)\n\xa0\n[JOIN] "[" expression "]" (expr1, ..., exprN) \n')),Object(o.b)("p",null,'Where "',"[",'" and "',"]",'" are ordinary brackets.'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description"),"\xa0"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"JOIN")," operator creates a property that implements a composition of properties. The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Composition_JOIN_"}),"main property")," can be defined by one of the three following options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"an ID of the existing property"),Object(o.b)("li",{parentName:"ul"},"a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"Property-operators_36307155.html#Propertyoperators-contextindependent"}),"context independent")," ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/Property_operators"}),"property operator")," enclosed in brackets."),Object(o.b)("li",{parentName:"ul"},"an ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/Expression"}),"expression")," enclosed in brackets.")),Object(o.b)("p",null,"The latter two options allow to use as the main property a property\xa0without a name which is created right at the place of use. In certain cases, this can make the code more concise and avoids the explicit declaration of an intermediate property using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Instruction_="}),"= instruction"),' that will not be used anywhere else. An operator or expression enclosed in brackets with an equal sign can use external parameters if necessary. When determining the parameters of the created "anonymous" property, the same rules apply as when creating the property in the ',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Instruction_="}),"= instruction"),", in the case when the parameters are not defined explicitly. \xa0 \xa0"),Object(o.b)("p",null,"Formally, the ",Object(o.b)("strong",{parentName:"p"},"JOIN"),"\xa0operator is also responsible for such constructions as ",Object(o.b)("strong",{parentName:"p"},"propertyID(a, b)"),", i.e. just an existing property with the parameters passed to it. In such cases, when possible, the ",Object(o.b)("strong",{parentName:"p"},"JOIN")," operator will not create a new anonymous property but return the property with the ",Object(o.b)("strong",{parentName:"p"},"propertyID"),".**\xa0**"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"Property ID"),".\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expr1, ..., exprN")),Object(o.b)("p",null,"A list of expressions defining the arguments of the main property. The number of expressions should be equal to the number of parameters of the main property."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"operator")),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Property_operators"}),"context-independent")," property operator that is used to create the main property."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expression")),Object(o.b)("p",null,"An ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Expression"}),"expression")," which is used to define the main property. Cannot be a single parameter."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null))}b.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,O=u["".concat(p,".").concat(m)]||u[m]||l[m]||o;return r?a.a.createElement(O,c(c({ref:t},i),{},{components:r})):a.a.createElement(O,c({ref:t},i))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var i=2;i<o;i++)p[i]=r[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);