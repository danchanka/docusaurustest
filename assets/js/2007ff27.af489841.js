(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{149:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return p})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return u}));var n=t(3),o=t(7),a=(t(0),t(749)),s={title:"Comparison operators"},p={unversionedId:"Comparison_operators",id:"Comparison_operators",isDocsHomePage:!1,title:"Comparison operators",description:"==, =, !=, **, =**\xa0operators create properties that implement comparison operations.",source:"@site/docs/Comparison_operators.md",slug:"/Comparison_operators",permalink:"/docusaurustest/docs/next/Comparison_operators",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Comparison_operators.md",version:"current",sidebar:"docs",previous:{title:"Change operators",permalink:"/docusaurustest/docs/next/Change_operators"},next:{title:"Property options",permalink:"/docusaurustest/docs/next/Property_options"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:c};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"==, ="),", ",Object(a.b)("strong",{parentName:"p"},"!="),", ",Object(a.b)("strong",{parentName:"p"},"<"),", ",Object(a.b)("strong",{parentName:"p"},">"),", ",Object(a.b)("strong",{parentName:"p"},"<="),", ",Object(a.b)("strong",{parentName:"p"},">","="),"\xa0operators create ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"properties")," that implement ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Comparison_operators_=_..._"},"comparison operations"),"."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"expression1 == expression2\nexpression1 = expression2\nexpression1 != expression2\nexpression1 < expression2\nexpression1 > expression2\nexpression1 <= expression2\nexpression1 >= expression2\n")),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"expression1, expression2")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Expression"},"Expressions")," which values are the arguments of a comparison operator."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"equalBarcodes = barcode(a) == barcode(b);\noutOfIntervalValue1(value, left, right) = value < left OR value > right;\noutOfIntervalValue2(value, left, right) = NOT (value >= left AND value <= right);\n")))}u.isMDXComponent=!0},749:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),u=function(e){var r=o.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=u(e.components);return o.a.createElement(i.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),l=u(t),b=n,d=l["".concat(s,".").concat(b)]||l[b]||m[b]||a;return t?o.a.createElement(d,p(p({ref:r},i),{},{components:t})):o.a.createElement(d,p({ref:r},i))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=b;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var i=2;i<a;i++)s[i]=t[i];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);