(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{165:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(424)),i={},c={unversionedId:"LSFUS/lsFusionINDEX_instruction",id:"LSFUS/lsFusionINDEX_instruction",isDocsHomePage:!1,title:"lsFusionINDEX_instruction",description:"lsFusionINDEX instruction",source:"@site/docs\\LSFUS\\lsFusionINDEX_instruction.md",slug:"/LSFUS/lsFusionINDEX_instruction",permalink:"/docusaurustest/docs/LSFUS/lsFusionINDEX_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionINDEX_instruction.md",version:"current"},s=[],p={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionindex-instruction"},"lsFusionINDEX instruction"),Object(o.b)("h1",{id:"index-instruction"},"INDEX instruction"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"INDEX")," instruction creates a new ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionIndexes"}),"index"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"INDEX field1, ..., fieldN;\n")),Object(o.b)("p",null,"Each field of the ",Object(o.b)("em",{parentName:"p"},"fieldi")," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionTables"}),"table")," that the system should use to build an index can be described either by specifying a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperties"}),"property")," stored in this table:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"propertyId(param1, ..., paramN)\n")),Object(o.b)("p",null,"or by specifying a typed parameter referring to the corresponding key field:\xa0"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"param\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"The \xa0",Object(o.b)("strong",{parentName:"p"},"INDEX")," instruction adds a new index by an ordered list of fields of a certain table. The list must contain at least one property. The table that the index should be built for is determined by the first property in the list. Also, the parameters passed to this property are used to determine the correspondence of the parameters to the key fields of the table. Accordingly, all other properties in the list should have the same number of parameters and be stored in the same table as the first property. The parameters specified in the list will correspond to the key fields of the table."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId")),Object(o.b)("p",null,"The ID of the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"property")," that should be stored in the table for which the index is being created."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(o.b)("p",null,"A list of property parameters. Each element of the list is a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-paramid"}),"typed parameter"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"param")),Object(o.b)("p",null,"A typed parameter that determines the key field of the table.*  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null))}l.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);