(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{369:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(424)),i={},p={unversionedId:"LSFUS/lsFusionIMPORT_operator",id:"LSFUS/lsFusionIMPORT_operator",isDocsHomePage:!1,title:"lsFusionIMPORT_operator",description:"lsFusionIMPORT operator",source:"@site/docs\\LSFUS\\lsFusionIMPORT_operator.md",slug:"/LSFUS/lsFusionIMPORT_operator",permalink:"/docusaurustest/docs/LSFUS/lsFusionIMPORT_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionIMPORT_operator.md",version:"current"},c=[],s={toc:c};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusionimport-operator"},"lsFusionIMPORT operator"),Object(a.b)("h1",{id:"import-operator"},"IMPORT operator"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"IMPORT")," operator creates an ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionActions"}),"action")," that imports\xa0data from a specified file into ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionData_import_IMPORT_"}),"specified properties (parameters)"),"\xa0or, in general, into a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"57737720.html#Inastructuredview(EXPORT,IMPORT)-importForm"}),"specified form"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"IMPORT [importFormat] FROM fileExpr importDestination [DO actionOperator [ELSE elseActionOperator]]\nIMPORT formName [importFormat] [FROM (fileExpr | (groupId1 = fileExpr1 [, ..., groupIdM = fileExprM])]\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"importFormat"),"\xa0can be specified by one of the following options:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"JSON [CHARSET charsetStr]\nXML [ATTR] [CHARSET charsetStr]\nCSV [separator] [HEADER | NOHEADER] [ESCAPE | NOESCAPE] [CHARSET charsetStr]\nXLS [HEADER | NOHEADER] [SHEET (sheetExpr | ALL)]\nDBF [CHARSET charsetStr]\nTABLE\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"importDestination"),"\xa0can be specified by one of the following options:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"TO [(objClassId1, objClassId2, ..., objClassIdK)] propertyId1 [= columnId1], ..., propertyIdN [= columnIdN] [WHERE whereId]\nFIELDS [(objClassId1 objAlias1, objClassId2 objAlias1, ..., objClassIdK objAliasK)] propClassId1 [propAlias1 =] columnId1 [NULL], ..., propClassIdN [propAliasN =] columnIdN [NULL]\n\nDescription\n")),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"IMPORT")," operator creates an action that imports data from a specified file into the values of specified properties or into a specified form.\xa0"),Object(a.b)("p",null,"If *\xa0",Object(a.b)("em",{parentName:"p"},"the format of the imported file"),"\xa0*is not specified, it is determined automatically depending on the class of the imported file (or on the extension, if the class is ",Object(a.b)("strong",{parentName:"p"},"FILE"),"), in the following way:"))}l.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,O=u["".concat(i,".").concat(f)]||u[f]||b[f]||a;return r?o.a.createElement(O,p(p({ref:t},s),{},{components:r})):o.a.createElement(O,p({ref:t},s))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);