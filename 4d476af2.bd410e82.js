(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{187:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var a=r(3),o=r(7),n=(r(0),r(424)),s={},c={unversionedId:"LSFUS/lsFusionData_export_EXPORT_",id:"LSFUS/lsFusionData_export_EXPORT_",isDocsHomePage:!1,title:"lsFusionData_export_EXPORT_",description:"lsFusionData export (EXPORT)",source:"@site/docs\\LSFUS\\lsFusionData_export_EXPORT_.md",slug:"/LSFUS/lsFusionData_export_EXPORT_",permalink:"/docusaurustest/docs/LSFUS/lsFusionData_export_EXPORT_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/website/docs/LSFUS/lsFusionData_export_EXPORT_.md",version:"current"},p=[],i={toc:p};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"lsfusiondata-export-export"},"lsFusionData export (EXPORT)"),Object(n.b)("h1",{id:"data-export-export"},"Data export (EXPORT)"),Object(n.b)("p",null,"The ",Object(n.b)("em",{parentName:"p"},"data\xa0export"),"\xa0operator creates an\xa0",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionActions"}),"action")," that reads values of the specified properties for all object collections where the value of the specified property (",Object(n.b)("em",{parentName:"p"},"condition"),") is not ",Object(n.b)("strong",{parentName:"p"},"NULL"),", and then saves these values to a file in a specified ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionStructured_view"}),"format"),".\xa0"),Object(n.b)("p",null,"The condition is optional in this operator and, if not defined, it is considered equal to the\xa0",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionLogical_operators_AND_OR_NOT_XOR_"}),"disjunction")," of all exported properties (i.e., at least one of the properties must be non-",Object(n.b)("strong",{parentName:"p"},"NULL"),").\xa0"),Object(n.b)("p",null,"Similar to the other\xa0",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionSet_operations"}),"set operations"),", the condition must be such that the operation is\xa0",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionSet_operations"}),"correct"),"."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"General case")),Object(n.b)("p",null,"It should be noted that data export is a special case of (syntactic sugar for) ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionIn_a_structured_view_EXPORT_IMPORT_"}),"form export"),", in which the exported form is created automatically, named ",Object(n.b)("strong",{parentName:"p"},"export")," and consists of:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"one\xa0",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"Form-structure_1573069.html#Formstructure-id-%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0%D1%84%D0%BE%D1%80%D0%BC%D1%8B-objects"}),"object group"),"\xa0named\xa0",Object(n.b)("strong",{parentName:"li"},"value")," whose objects correspond to exported property parameters (not created if all exported property parameters are fixed values)."),Object(n.b)("li",{parentName:"ul"},"exported properties. The ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"Groups-of-properties-and-actions_2719887.html#Groupsofpropertiesandactions-builtin"}),"built-in"),"\xa0",Object(n.b)("strong",{parentName:"li"},"System.private"),"\xa0group is used as the\xa0",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"Form-structure_1573069.html#Formstructure-propertygroup"}),"property group"),"\xa0for the created properties on the form,\xa0and the created object group is used as the\xa0",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"Form-structure_1573069.html#Formstructure-drawgroup"}),"display group"),". If there is only one exported property and it does not have a name, the corresponding property on the form is created with the name\xa0",Object(n.b)("strong",{parentName:"li"},"value"),"."),Object(n.b)("li",{parentName:"ul"},"a filter equal to the defined condition."),Object(n.b)("li",{parentName:"ul"},"defined orders.")),Object(n.b)("p",null,"Thus, the behavior of the data export operator (for example, determining the names of the resulting columns/keys, ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"Structured-view_29884537.html#Structuredview-id-%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-value"}),"processing\xa0",Object(n.b)("strong",{parentName:"a"},"value")),",\xa0etc.) is completely determined by the behavior of the form export operator (as if the above form was passed to it as a parameter)."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Language")),Object(n.b)("p",null,"To declare an action that exports data, use the\xa0",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionEXPORT_operator"}),Object(n.b)("strong",{parentName:"a"},"EXPORT")," operator"),"."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Examples")),Object(n.b)("hr",null))}u.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=u(r),d=a,m=l["".concat(s,".").concat(d)]||l[d]||b[d]||n;return r?o.a.createElement(m,c(c({ref:t},i),{},{components:r})):o.a.createElement(m,c({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<n;i++)s[i]=r[i];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);