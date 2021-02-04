(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{229:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(419)),p={title:"EXCLUSIVE operator"},c={unversionedId:"EXCLUSIVE_operator",id:"EXCLUSIVE_operator",isDocsHomePage:!1,title:"EXCLUSIVE operator",description:"The EXCLUSIVE\xa0operator creates a\xa0property that implements\xa0a selection-exclusive)\xa0of one of the values\xa0(polymorphic form).",source:"@site/docs\\EXCLUSIVE_operator.md",slug:"/EXCLUSIVE_operator",permalink:"/docusaurustest/docs/EXCLUSIVE_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/EXCLUSIVE_operator.md",version:"current",sidebar:"docs",previous:{title:"DATA operator",permalink:"/docusaurustest/docs/DATA_operator"},next:{title:"FORMULA operator",permalink:"/docusaurustest/docs/FORMULA_operator"}},s=[],i={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"EXCLUSIVE\xa0"),"operator creates a\xa0",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Properties"}),"property")," that implements\xa0a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"1572905.html#Selection(CASE,IF,MULTI,OVERRIDE,EXCLUSIVE)-exclusive"}),"selection"),"\xa0of one of the values\xa0(polymorphic form)."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"EXCLUSIVE expr1, ..., exprN\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description")),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"EXCLUSIVE")," operator creates a property whose value will be the value of one of the properties specified in the operator. It is assumed that for any set of parameters, at most one of the properties will be non-",Object(a.b)("strong",{parentName:"p"},"NULL"),". The value of the property will be the value of this single non-",Object(a.b)("strong",{parentName:"p"},"NULL")," property, or ",Object(a.b)("strong",{parentName:"p"},"NULL")," if there are no such properties."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"expr1, ..., exprN")),Object(a.b)("p",null,"List\xa0of ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expressions")," whose values will determine the value of the property."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples")),Object(a.b)("hr",null),Object(a.b)("p",null,"**",Object(a.b)("br",{parentName:"p"}),"\n","**"))}u.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),l=u(r),f=n,m=l["".concat(p,".").concat(f)]||l[f]||b[f]||a;return r?o.a.createElement(m,c(c({ref:t},i),{},{components:r})):o.a.createElement(m,c({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var i=2;i<a;i++)p[i]=r[i];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);