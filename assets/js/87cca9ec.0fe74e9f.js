(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{443:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),l=(r(0),r(749)),o={title:"Logical operators (AND, OR, NOT, XOR)"},c={unversionedId:"Logical_operators_AND_OR_NOT_XOR_",id:"Logical_operators_AND_OR_NOT_XOR_",isDocsHomePage:!1,title:"Logical operators (AND, OR, NOT, XOR)",description:"Logical operators create properties that consider their arguments as logical values of class BOOLEAN\xa0and whose return value is also a value of class BOOLEAN. If the value of an argument of an logical operator is not NULL, then the argument is treated as the value TRUE of class BOOLEAN, otherwise as NULL.",source:"@site/docs/Logical_operators_AND_OR_NOT_XOR_.md",slug:"/Logical_operators_AND_OR_NOT_XOR_",permalink:"/docusaurustest/docs/next/Logical_operators_AND_OR_NOT_XOR_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Logical_operators_AND_OR_NOT_XOR_.md",version:"current",sidebar:"docs",previous:{title:"Arithmetic operators (+, -, \\*, ...)",permalink:"/docusaurustest/docs/next/Arithmetic_operators_+_-_..._"},next:{title:"Comparison operators (=, \\>, <, ...)",permalink:"/docusaurustest/docs/next/Comparison_operators_=_..._"}},b=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:b};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Logical operators")," create ",Object(l.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"properties")," that consider their arguments as logical values ",Object(l.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Built-in_classes"},"of class ",Object(l.b)("strong",{parentName:"a"},"BOOLEAN")),"\xa0and whose return value is also a value of class ",Object(l.b)("strong",{parentName:"p"},"BOOLEAN"),". If the value of an argument of an logical operator is not ",Object(l.b)("strong",{parentName:"p"},"NULL"),", then the argument is treated as the value ",Object(l.b)("strong",{parentName:"p"},"TRUE")," of class ",Object(l.b)("strong",{parentName:"p"},"BOOLEAN"),", otherwise as ",Object(l.b)("strong",{parentName:"p"},"NULL"),"."),Object(l.b)("p",null,"The platform currently supports the following logical operators:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),"Operator",Object(l.b)("br",null))),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),"Name",Object(l.b)("br",null))),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),"Description",Object(l.b)("br",null))),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),"Example",Object(l.b)("br",null))),Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",null,Object(l.b)("br",null),"Result",Object(l.b)("br",null))))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"AND"),Object(l.b)("td",{parentName:"tr",align:null},"Conjunction"),Object(l.b)("td",{parentName:"tr",align:null},"Takes two operands and returns ",Object(l.b)("strong",null,"TRUE")," if both operands are non-",Object(l.b)("strong",null,"NULL")),Object(l.b)("td",{parentName:"tr",align:null},"TRUE AND TRUE"),Object(l.b)("td",{parentName:"tr",align:null},"TRUE")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"OR"),Object(l.b)("td",{parentName:"tr",align:null},"Disjunction"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"Takes two operands and returns ",Object(l.b)("strong",null,"TRUE")," if either operand is non-",Object(l.b)("strong",null,"NULL"))),Object(l.b)("td",{parentName:"tr",align:null},"NULL OR TRUE"),Object(l.b)("td",{parentName:"tr",align:null},"TRUE")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"NOT"),Object(l.b)("td",{parentName:"tr",align:null},"Negation"),Object(l.b)("td",{parentName:"tr",align:null},"Takes one operand and returns ",Object(l.b)("strong",null,"TRUE")," if the operands is ",Object(l.b)("strong",null,"NULL")),Object(l.b)("td",{parentName:"tr",align:null},"NOT TRUE"),Object(l.b)("td",{parentName:"tr",align:null},"NULL")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"XOR"),Object(l.b)("td",{parentName:"tr",align:null},"Exception"),Object(l.b)("td",{parentName:"tr",align:null},"Takes two operands and returns ",Object(l.b)("strong",null,"TRUE")," if exactly one operand is non-",Object(l.b)("strong",null,"NULL")),Object(l.b)("td",{parentName:"tr",align:null},"TRUE XOR TRUE"),Object(l.b)("td",{parentName:"tr",align:null},"NULL")))),Object(l.b)("h3",{id:"language"},"Language"),Object(l.b)("p",null,"Description of ",Object(l.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/AND_OR_NOT_XOR_operators"},"logical operator syntax"),"."),Object(l.b)("h3",{id:"examples"},"Examples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-lsf"},"likes = DATA BOOLEAN (Person, Person);\nlikes(Person a, Person b, Person c) = likes(a, b) AND likes(a, c);\noutOfInterval1(value, left, right) = value < left OR value > right;\noutOfInterval2(value, left, right) = NOT (value >= left AND value <= right);\n")))}u.isMDXComponent=!0},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),i=u(r),O=n,d=i["".concat(o,".").concat(O)]||i[O]||p[O]||l;return r?a.a.createElement(d,c(c({ref:t},s),{},{components:r})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=O;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);