(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{239:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return i}));var n=r(3),a=r(7),o=(r(0),r(424)),p={title:"FORMULA operator"},c={unversionedId:"LSFUS/FORMULA_operator",id:"LSFUS/FORMULA_operator",isDocsHomePage:!1,title:"FORMULA operator",description:"The FORMULA operator creates a property that implements a custom formula.",source:"@site/docs\\LSFUS\\FORMULA_operator.md",slug:"/LSFUS/FORMULA_operator",permalink:"/docusaurustest/docs/LSFUS/FORMULA_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/FORMULA_operator.md",version:"current"},s=[],l={toc:s};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"FORMULA")," operator creates a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Properties"}),"property")," that implements a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Custom_formula_FORMULA_"}),"custom formula"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"FORMULA [NULL] [className] [syntaxType1] text1, ..., [syntaxTypeN] textN\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"FORMULA")," operator creates a property that executes an arbitrary formula in SQL. It is possible to specify different formulas for different SQL dialects so that these properties are portable between different DBMSs.\xa0"),Object(o.b)("p",null,"This property operator cannot be used inside ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Expression"}),"expressions"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NULL")),Object(o.b)("p",null,"Keyword specifying that the property being created may return ",Object(o.b)("strong",{parentName:"p"},"NULL")," if all parameter values are non-",Object(o.b)("strong",{parentName:"p"},"NULL"),". If not specified, then the property must be defined so that for non-",Object(o.b)("strong",{parentName:"p"},"NULL")," parameters it will always return a non-",Object(o.b)("strong",{parentName:"p"},"NULL")," value (failure to fulfill this condition may lead to unpredictable results)"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"className")),Object(o.b)("p",null,"The name of the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Built-in_classes"}),"builtin class"),"\xa0of the value returned by the property. If not specified, the resulting class is considered to be the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Built-in-classes_2031657.html#Built-inclasses-commonparentclass"}),"common ancestor"),"\xa0of all property operands."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"syntaxType1, ..., syntaxTypeN")),Object(o.b)("p",null,"Keywords defining SQL dialect types. The following types are currently supported:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"PG")," - PostgreSQL syntax"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"MS")," - MS SQL Server syntax")),Object(o.b)("p",null,"If the dialect type is not specified explicitly, then the corresponding formula text is set as the default text. Each of the types (or the lack of a type) must appear in the operator no more than once."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"text1, ..., textN")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-strliteral"}),"String literals"),", each of which contains a formula in SQL syntax. The notation ",Object(o.b)("strong",{parentName:"p"},"$1"),", ",Object(o.b)("strong",{parentName:"p"},"$2")," etc. is used to pass property parameters to the formula, where the number denotes the property parameter number. Parameter numbers start from 1. The number of parameters in the created property will be equal to the maximum parameter number specified in the description of the formula."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null),Object(o.b)("p",null,"**",Object(o.b)("br",{parentName:"p"}),"\n","**"))}i.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),i=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=i(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=i(r),m=n,f=b["".concat(p,".").concat(m)]||b[m]||u[m]||o;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var l=2;l<o;l++)p[l]=r[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);