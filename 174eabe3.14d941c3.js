(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{110:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),s=(r(0),r(424)),o={},i={unversionedId:"LSFUS/lsFusionTables",id:"LSFUS/lsFusionTables",isDocsHomePage:!1,title:"lsFusionTables",description:"lsFusionTables",source:"@site/docs\\LSFUS\\lsFusionTables.md",slug:"/LSFUS/lsFusionTables",permalink:"/docusaurustest/docs/LSFUS/lsFusionTables",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionTables.md",version:"current"},c=[],l={toc:c};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"lsfusiontables"},"lsFusionTables"),Object(s.b)("h1",{id:"tables"},"Tables"),Object(s.b)("p",null,"For storing and calculating values of the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperties"}),"properties")," the ",Object(s.b)("strong",{parentName:"p"},"lsFusion")," platform uses a relational database. All ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionData_properties_DATA_"}),"data properties"),", as well as all calculated ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperties"}),"properties")," marked as ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionMaterializations"}),"materialized"),", are stored in the fields of the ",Object(s.b)("em",{parentName:"p"},"tables")," in the database. For each table, there is a set of key fields with the names ",Object(s.b)("strong",{parentName:"p"},"key0"),", ",Object(s.b)("strong",{parentName:"p"},"key1"),", ..., ",Object(s.b)("strong",{parentName:"p"},"keyN"),", where the object IDs are stored. All other fields store property values in such a way that in the corresponding field of each row\xa0there is a property value for the objects with IDs from the key fields.\xa0Objects of\xa0built-in classes can also be used as table keys."),Object(s.b)("p",null,"When creating a table, you must specify a list of the object\xa0classes\xa0which will be the keys in this table."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Property table determining")),Object(s.b)("p",null,'For each property, you can specify in which table it should be stored. In this case, the number of the table keys must be equal to the number of property parameters, and the parameter classes must match the table key classes. If the table in which the property should be stored is not set explicitly, the property will be placed automatically to the "nearest" existing table in the system (i.e., which number of keys matches the number of the property parameters and the key classes are the closest to the parameter classes). Also if necessary, you can use the special option (',Object(s.b)("strong",{parentName:"p"},"NODEFAULT"),") to specify that when automatically determining property tables, this table should be ignored (i.e., a property can only be put into such a table explicitly using the corresponding option (",Object(s.b)("strong",{parentName:"p"},"TABLE"),"))."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Table naming")),Object(s.b)("p",null,"For each table created in the\xa0platform, a corresponding table is created in the database, which name, depending on the selected naming policy, is defined as follows:"))}p.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,h=u["".concat(o,".").concat(d)]||u[d]||b[d]||s;return r?n.a.createElement(h,i(i({ref:t},l),{},{components:r})):n.a.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);