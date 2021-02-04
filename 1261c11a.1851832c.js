(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(419)),c={title:"CONCAT operator"},p={unversionedId:"CONCAT_operator",id:"CONCAT_operator",isDocsHomePage:!1,title:"CONCAT operator",description:"The CONCAT operator creates a property that implements a string concatenation.",source:"@site/docs\\CONCAT_operator.md",slug:"/CONCAT_operator",permalink:"/docusaurustest/docs/CONCAT_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CONCAT_operator.md",version:"current",sidebar:"docs",previous:{title:"CLASS operator",permalink:"/docusaurustest/docs/CLASS_operator"},next:{title:"DATA operator",permalink:"/docusaurustest/docs/DATA_operator"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"CONCAT")," operator creates a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Properties"}),"property")," that implements a string ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/String_operators_+_CONCAT_SUBSTRING_"}),"concatenation"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"CONCAT separatorString, concatExpr1, ..., concatExprN\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"CONCAT"),'\xa0operator creates a property that concatenates values using the "separatorString" separator. Here, NULL values are skipped and the separator is inserted only between non-NULL values.'),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"separatorString")),Object(o.b)("p",null,"\xa0A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Literals_35521071.html#Literals-strliteral"}),"string literal")," to be used as a separator."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"concatExpr1, ..., concatExprN")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"Expressions")," whose values are to be concatenated."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("p",null,"**",Object(o.b)("br",{parentName:"p"}),"\n","**"))}u.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,O=l["".concat(c,".").concat(d)]||l[d]||b[d]||o;return r?a.a.createElement(O,p(p({ref:t},i),{},{components:r})):a.a.createElement(O,p({ref:t},i))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);