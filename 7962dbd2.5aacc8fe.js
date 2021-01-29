(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{236:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return i}));var n=r(3),a=(r(0),r(424));const o={},c={unversionedId:"LSFUS/RECURSION_operator",id:"LSFUS/RECURSION_operator",isDocsHomePage:!1,title:"RECURSION_operator",description:"lsFusionRECURSION operator",source:"@site/docs\\LSFUS\\RECURSION_operator.md",slug:"/LSFUS/RECURSION_operator",permalink:"/docusaurustest/docs/LSFUS/RECURSION_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/RECURSION_operator.md",version:"current"},s=[],p={toc:s};function i({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusionrecursion-operator"},"lsFusionRECURSION operator"),Object(a.b)("h1",{id:"recursion-operator"},"RECURSION operator"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"RECURSION\xa0"),"operator\xa0creates a\xa0",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Properties"}),"property")," that implements\xa0",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Recursion_RECURSION_"}),"recursion"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Syntax\xa0")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"RECURSION initialExpr STEP stepExpr [CYCLES YES | CYCLES NO | CYCLES IMPOSSIBLE]\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description")),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"RECURSION")," operator creates a property that implements recursion. ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Expression"}),"Expressions")," that describe the next step of the recursion may access not only the property parameters but also the parameters at the previous step. This access has the syntax ",Object(a.b)("strong",{parentName:"p"},"$name"),", where ",Object(a.b)("strong",{parentName:"p"},"name")," is the name of the parameter."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"initialExpr")),Object(a.b)("p",null,"An expression whose value is the initial property."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"stepExpr")),Object(a.b)("p",null,"An expression whose value is a property of a recursion step. Allows a special syntax (",Object(a.b)("strong",{parentName:"p"},"$name"),") to access the value of the ",Object(a.b)("strong",{parentName:"p"},"name")," parameter in the previous step."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"CYCLES YES")),Object(a.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Specifies that cycles are allowed."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"CYCLES NO")),Object(a.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Specifies that cycles are not allowed. This option is used by default."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"CYCLES IMPOSSIBLE")),Object(a.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Specifies that cycles are not possible."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples")),Object(a.b)("hr",null),Object(a.b)("p",null,"In the current implementation, however, the platform optimizer is less focused on working with numbers, so it cannot yet determine that the step function is increasing and stop the recursion on its own,\xa0artificially\xa0creating the corresponding condition, as is done in the above example. Even more questions arise when this property needs to be displayed in a dynamic list (and in a static list this cannot be done at all, since the number of non-",Object(a.b)("strong",{parentName:"p"},"NULL")," values is infinite). In this case, the current order in this list must also be taken into account and also pushed\xa0into the query. These limitations will be removed in future versions, but in the current version it is recommended to take them into account."))}i.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=u(r),m=n,O=l["".concat(c,".").concat(m)]||l[m]||b[m]||o;return r?a.a.createElement(O,s(s({ref:t},i),{},{components:r})):a.a.createElement(O,s({ref:t},i))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);