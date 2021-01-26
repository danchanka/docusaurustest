(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{423:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},O=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=u(r),O=n,f=b["".concat(p,".").concat(O)]||b[O]||l[O]||a;return r?o.a.createElement(f,c(c({ref:t},i),{},{components:r})):o.a.createElement(f,c({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=O;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var i=2;i<a;i++)p[i]=r[i];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(423)),p={},c={unversionedId:"LSFUS/lsFusionEXPORT_operator",id:"LSFUS/lsFusionEXPORT_operator",isDocsHomePage:!1,title:"lsFusionEXPORT_operator",description:"lsFusionEXPORT operator",source:"@site/docs\\LSFUS\\lsFusionEXPORT_operator.md",slug:"/LSFUS/lsFusionEXPORT_operator",permalink:"/docusaurustest/docs/LSFUS/lsFusionEXPORT_operator",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/LSFUS/lsFusionEXPORT_operator.md",version:"current"},s=[],i={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusionexport-operator"},"lsFusionEXPORT operator"),Object(a.b)("h1",{id:"export-operator"},"EXPORT operator"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"EXPORT")," operator: creates an ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionActions"}),"action")," that exports ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionData_export_EXPORT_"}),"specified\xa0properties"),"\xa0to a file,\xa0or, in common case, that ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionIn_a_structured_view_EXPORT_IMPORT_"}),"opens a form"),"\xa0in a structured view.\xa0"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"EXPORT [exportFormat] [TOP n] FROM [columnId1 =] propertyExpr1, ..., [columnIdN = ] propertyExprN [WHERE whereExpr] [ORDER orderExpr1 [DESC], ..., orderExprL [DESC]] [TO propertyId]\nEXPORT formName [OBJECTS objName1 = expr1, ..., objNameK = exprK] [exportFormat] [TOP n] [TO (propertyId | (groupId1 = propertyId1, ..., groupIdN = propertyIdM))]\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"exportFormat"),"\xa0can be specified by one of the following options:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"JSON [CHARSET charsetStr]\nXML [ATTR] [CHARSET charsetStr]\nCSV [separator] [HEADER | NOHEADER] [ESCAPE | NOESCAPE] [CHARSET charsetStr]\nXLS [HEADER | NOHEADER]\nXLSX [HEADER | NOHEADER]\nDBF [CHARSET charsetStr]\nTABLE\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("br",{parentName:"strong"}),"Description")),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"EXPORT")," operator creates an action that exports data from the specified properties or form to a file. The following file formats are supported: ",Object(a.b)("strong",{parentName:"p"},"XML"),",\xa0",Object(a.b)("strong",{parentName:"p"},"JSON"),",**\xa0",Object(a.b)("strong",{parentName:"p"},"CSV**"),",\xa0",Object(a.b)("strong",{parentName:"p"},"XLS"),", ",Object(a.b)("strong",{parentName:"p"},"XLSX"),", ",Object(a.b)("strong",{parentName:"p"},"DBF"),",\xa0",Object(a.b)("strong",{parentName:"p"},"TABLE"),".\xa0"),Object(a.b)("p",null,"If no*\xa0",Object(a.b)("em",{parentName:"p"},"export file format"),"\xa0*is specified, it is considered to be ",Object(a.b)("strong",{parentName:"p"},"JSON"),"."),Object(a.b)("p",null,"If the property to which the data is exported is of class ",Object(a.b)("strong",{parentName:"p"},"FILE"),", then the extension of the resulting file is determined depending on the format as follows:"))}u.isMDXComponent=!0}}]);