(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{351:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),o=(r(0),r(424)),c={title:"AGGR operator"},s={unversionedId:"LSFUS/AGGR_operator",id:"LSFUS/AGGR_operator",isDocsHomePage:!1,title:"AGGR operator",description:"The\xa0AGGR\xa0operator creates an aggregation.",source:"@site/docs\\LSFUS\\AGGR_operator.md",slug:"/LSFUS/AGGR_operator",permalink:"/docusaurustest/docs/LSFUS/AGGR_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/AGGR_operator.md",version:"current"},p=[],i={toc:p};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"AGGR"),"\xa0operator creates an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Aggregations"}),"aggregation"),"."),Object(o.b)("p",null,"*",Object(o.b)("strong",{parentName:"p"},"*Syntax\xa0"),Object(o.b)("br",{parentName:"p"}),"\n","**"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"AGGR aggrClass WHERE aggrExpr\n")),Object(o.b)("p",null,"*",Object(o.b)("strong",{parentName:"p"},"*Description**")),Object(o.b)("p",null,"In addition to the property that is the result of this operator and contains the value of the aggregated object, for each parameter the ",Object(o.b)("strong",{parentName:"p"},"AGGR")," operator also creates a data property with one parameter, whose ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/User_classes"}),"class")," is equal to the class of the aggregated object. The value class and name of this property are equal to the class and name of the parameter for which this property is created. Accordingly, when creating an aggregated object, the value of the parameter for which the aggregated object is created is automatically written to this property."),Object(o.b)("p",null,"Creating an aggregation is in many ways similar to the following instructions (example for 2 parameters):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"prm1 = DATA class1 (aggrClass);\nprm2 = DATA class2 (aggrClass);\nresult = GROUP AGGR aggrClass aggrObject BY prm1(aggrObject), prm2(aggrObject);\n\n// if aggrExpr becomes non-null, create an object of class aggrClass (equivalent to whereExpr => result (prm1, prm2) RESOLVE LEFT)\nWHEN SET(aggrExpr) AND NOT result(prm1, prm2)\n    NEW aggrObject = aggrClass {\n        prm1(aggrObject) <- prm1;\n        prm2(aggrObject) <- prm2;\n    }\n\n// if aggrExpr becomes null, remove an object (equivalent to aggrClass aggrObject IS aggrClass => result(prm1(aggrObject),prm2(aggrObject)) RESOLVE RIGHT)\nWHEN aggrClass aggrObject IS aggrClass AND DROPPED(result(prm1(aggrObject),prm2(aggrObject))) DO\n    DELETE aggrObject;\n")),Object(o.b)("p",null,"but it is a more declarative and readable instruction, and therefore using it is recommended"),Object(o.b)("p",null,"Unlike other context-dependent operators, the ",Object(o.b)("strong",{parentName:"p"},"AGGR")," operator cannot be used in\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Expression"}),"expressions")," inside other operators (in this sense it is more like context-independent operators), or in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/JOIN_operator"}),Object(o.b)("strong",{parentName:"a"},"JOIN")," operator"),"\xa0(inside\xa0","[","=\xa0","]",")"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"aggrClass")),Object(o.b)("p",null,"The value class of the aggregated object."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"aggrExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Expression"}),"expression"),"\xa0whose value defines an aggregated property."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")))}l.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),l=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=l(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},g=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=l(r),g=a,m=b["".concat(c,".").concat(g)]||b[g]||u[g]||o;return r?n.a.createElement(m,s(s({ref:t},i),{},{components:r})):n.a.createElement(m,s({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);