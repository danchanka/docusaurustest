(window.webpackJsonp=window.webpackJsonp||[]).push([[603],{674:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(749)),c={title:"Extremum (MAX, MIN)"},i={unversionedId:"Extremum_MAX_MIN_",id:"Extremum_MAX_MIN_",isDocsHomePage:!1,title:"Extremum (MAX, MIN)",description:"The extremum operator creates a property which calculates the maximum or minimum between several specified properties. If the value of any of these properties is\xa0NULL, this property is ignored. If the values of all properties are NULL, the result value is also NULL.",source:"@site/docs/Extremum_MAX_MIN_.md",slug:"/Extremum_MAX_MIN_",permalink:"/docusaurustest/docs/next/Extremum_MAX_MIN_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Extremum_MAX_MIN_.md",version:"current",sidebar:"docs",previous:{title:"Comparison operators (=, \\>, <, ...)",permalink:"/docusaurustest/docs/next/Comparison_operators_=_..._"},next:{title:"String operators (+, CONCAT, SUBSTRING)",permalink:"/docusaurustest/docs/next/String_operators_+_CONCAT_SUBSTRING_"}},s=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"extremum operator")," creates a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"property")," which calculates the maximum or minimum between several specified properties. If the value of any of these properties is\xa0",Object(o.b)("strong",{parentName:"p"},"NULL"),", this property is ignored. If the values of all properties are ",Object(o.b)("strong",{parentName:"p"},"NULL"),", the result value is also ",Object(o.b)("strong",{parentName:"p"},"NULL"),"."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"The maximum property is created using the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/MAX_operator"},Object(o.b)("strong",{parentName:"a"},"MAX")," operator"),", the\xa0minimum - using the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/MIN_operator"},Object(o.b)("strong",{parentName:"a"},"MIN")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"date1 = DATA DATE(INTEGER);\ndate2 = DATA DATE(INTEGER);\nmaxDate (INTEGER i) = MAX date1(i), date2(i);\n\nbalance = DATA INTEGER (Item);\noutcome 'Balance (non-negative)' (Item i) = MAX balance(i), 0;\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"minPrice(Book b) = MIN price1(b), price2(b);\n\ndate (INTEGER i) = DATA DATE (INTEGER);\nminDate (INTEGER i) = MIN date(i), 2001_01_01;\n")))}u.isMDXComponent=!0},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),b=n,d=l["".concat(c,".").concat(b)]||l[b]||m[b]||o;return r?a.a.createElement(d,i(i({ref:t},p),{},{components:r})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);