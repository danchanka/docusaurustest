(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{340:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(423)),c={},p={unversionedId:"LSFUS/lsFusionCHANGE_operator",id:"LSFUS/lsFusionCHANGE_operator",isDocsHomePage:!1,title:"lsFusionCHANGE_operator",description:"lsFusionCHANGE operator",source:"@site/docs\\LSFUS\\lsFusionCHANGE_operator.md",slug:"/LSFUS/lsFusionCHANGE_operator",permalink:"/docusaurustest/docs/LSFUS/lsFusionCHANGE_operator",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/LSFUS/lsFusionCHANGE_operator.md",version:"current"},s=[],i={toc:s};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionchange-operator"},"lsFusionCHANGE operator"),Object(o.b)("h1",{id:"change-operator"},"CHANGE operator"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"CHANGE")," operator creates an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionActions"}),"action")," that ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperty_%D1%81hange_CHANGE_"}),"changes properties"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"[CHANGE] propertyId(expr1, ..., exprN) <- valueExpr [WHERE whereExpr]\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"CHANGE"),"\xa0operator creates an action that changes a property when a condition is met. This operator \xa0can add its own local parameters when specifying the property whose value is to be changed. These parameters correspond to the objects being iterated and are not parameters of the created action.\xa0"),Object(o.b)("p",null,"The condition is defined by the ",Object(o.b)("strong",{parentName:"p"},"WHERE")," block. If this block is not specified, it is assumed that the condition is always met.\xa0"),Object(o.b)("p",null,"The keyword ",Object(o.b)("strong",{parentName:"p"},"CHANGE"),", which defines an operator, may be omitted.**\xa0**"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"ID of the property")," whose value is being changed. The property must be created by certain operators so that its value can be changed. You can change the values of properties created using the operators ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"/docusaurustest/docs/LSFUS/lsFusionDATA_operator"}),"DATA"))," , ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"/docusaurustest/docs/LSFUS/lsFusionABSTRACT_operator"}),"ABSTRACT")),", and ",Object(o.b)("strong",{parentName:"p"},"LOCAL"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expr1, ..., exprN")),Object(o.b)("p",null,"A list of expressions or typed parameters defining arguments to the property being changed. When using typed parameters, you can both access already declared parameters and declare new local parameters. When using expressions, new local parameters cannot be added.\xa0The number of expressions in this list must equal to the number of parameters of the property being changed.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"valueExpr")),Object(o.b)("p",null,"The expression to whose value the property value must be changed."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"whereExpr")),Object(o.b)("p",null,"An expression whose value is a condition for the change being created. If not specified, it is considered equal to ",Object(o.b)("strong",{parentName:"p"},"TRUE"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null))}b.isMDXComponent=!0},423:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=b(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||l[d]||o;return r?a.a.createElement(m,p(p({ref:t},i),{},{components:r})):a.a.createElement(m,p({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);