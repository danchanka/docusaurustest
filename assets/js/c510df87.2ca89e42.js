(window.webpackJsonp=window.webpackJsonp||[]).push([[523],{595:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(749)),c={title:"Type conversion operator"},s={unversionedId:"Type_conversion_operator",id:"Type_conversion_operator",isDocsHomePage:!1,title:"Type conversion operator",description:"The type conversion operator creates a property that performs type conversion.",source:"@site/docs/Type_conversion_operator.md",slug:"/Type_conversion_operator",permalink:"/docusaurustest/docs/next/Type_conversion_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Type_conversion_operator.md",version:"current",sidebar:"docs",previous:{title:"Object group operator",permalink:"/docusaurustest/docs/next/Object_group_operator"},next:{title:"AND, OR, NOT, XOR operators",permalink:"/docusaurustest/docs/next/AND_OR_NOT_XOR_operators"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:p};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The type conversion operator creates a ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"property")," that performs ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Type_conversion"},"type conversion"),"."),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"typeName(expression) \n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The operator\xa0creates a property that converts the value of a certain expression into a value of a specified ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Built-in_classes"},"built-in class"),".\xa0If conversion is impossible, the value of the property will be ",Object(a.b)("strong",{parentName:"p"},"NULL"),"."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"typeName")),Object(a.b)("p",null,"The name of the *\xa0*",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Built-in_classes"},"built-in class")," that the values will be converted into."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"expression")),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Expression"},"expression")," whose value will be converted into the value of the specified built-in class."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"itemCount = DATA INTEGER (Store);\nitemCountToString(s) = BPSTRING[10](itemCount(s));\n\nbarcode = DATA STRING[15] (Item);\nlongBarcode(Item i) = LONG(barcode(i));\n")))}u.isMDXComponent=!0},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,m=l["".concat(c,".").concat(d)]||l[d]||b[d]||a;return r?o.a.createElement(m,s(s({ref:t},i),{},{components:r})):o.a.createElement(m,s({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var i=2;i<a;i++)c[i]=r[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);