(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{213:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(424)),s={},i={unversionedId:"LSFUS/lsFusionIn_a_structured_view_EXPORT_IMPORT_",id:"LSFUS/lsFusionIn_a_structured_view_EXPORT_IMPORT_",isDocsHomePage:!1,title:"lsFusionIn_a_structured_view_EXPORT_IMPORT_",description:"lsFusionIn a structured view (EXPORT, IMPORT)",source:"@site/docs\\LSFUS\\lsFusionIn_a_structured_view_EXPORT_IMPORT_.md",slug:"/LSFUS/lsFusionIn_a_structured_view_EXPORT_IMPORT_",permalink:"/docusaurustest/docs/LSFUS/lsFusionIn_a_structured_view_EXPORT_IMPORT_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionIn_a_structured_view_EXPORT_IMPORT_.md",version:"current"},c=[],u={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionin-a-structured-view-export-import"},"lsFusionIn a structured view (EXPORT, IMPORT)"),Object(o.b)("h1",{id:"in-a-structured-view-export-import"},"In a structured view (EXPORT, IMPORT)"),Object(o.b)("p",null,"This operator creates an action that\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionOpen_form"}),"opens a form"),"\xa0in the\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionStructured_view"}),"structured"),"\xa0view."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Format")),Object(o.b)("p",null,"In this operator, you can define the format that all form data will be converted to:\xa0\xa0",Object(o.b)("strong",{parentName:"p"},"XML"),",\xa0",Object(o.b)("strong",{parentName:"p"},"JSON"),",\xa0",Object(o.b)("strong",{parentName:"p"},"DBF, CSV, XLS"),". The generated file(s) in this format is then written to the specified property."),Object(o.b)("p",null,"Form export is a general case of the \xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionData_export_EXPORT_"}),"data export operator"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Form import")),Object(o.b)("p",null,"Form import is an operation that is opposite to opening the form in a structured view. The import operator accepts files in a structured format, then parses them and saves the data to the properties of the set form in such a way that when this form is exported back into the imported format, it would recreate the original file."),Object(o.b)("p",null,'Since the import operator is essentially an "input operator", the following constraints apply to the form being imported:'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"All form objects must belong to \xa0numeric\xa0or",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"User-classes_2228341.html#Userclasses-abstract"}),"concrete"),"\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionUser_classes"}),"user"),"\xa0classes. Object groups must consist of exactly one object (this constraint is caused by the fact that all the used formats are essentially\xa0lists \u2014 that is, mappings of numbers to values).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Properties and\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Form-structure_1573069.html#Formstructure-filters"}),"filters"),"\xa0on the form should be \xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperty_%D1%81hange_CHANGE_"}),"changeable"),"\xa0by a given value (that is, as a rule, be\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionData_properties_DATA_"}),"primary"),"). Before importing, any existing changes to the imported properties in the current session are canceled."))),Object(o.b)("p",null,"During import, filters change to the default values of value classes of these filters."),Object(o.b)("p",null,"When importing data into objects of numeric classes, 0-based numbering is used. In case of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Structured-view_29884537.html#Structuredview-hierarchy"}),"hierarchical"),' formats, numbering is "end-to-end" (that is, when the object group being imported is encountered for the second and subsequent times, object numbering in it starts from the position that the previous one stopped at).'),Object(o.b)("p",null,"When importing from XLS and CSV without headers (with the ",Object(o.b)("strong",{parentName:"p"},"NOHEADER")," option), the platform automatically attempts to convert data to the necessary type. If it fails, a ",Object(o.b)("strong",{parentName:"p"},"NULL")," value is written to the property. Importing from other formats requires correct types. For example, if a string is required during data import from JSON, and the JSON file contains a number (without quotes), the platform will generate an error."),Object(o.b)("p",null,"If a property (object group) is not found during import, it is ignored (that is, its value remains equal to ",Object(o.b)("strong",{parentName:"p"},"NULL"),")."),Object(o.b)("p",null,"Form import is a general case of the\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionData_import_IMPORT_"}),"data import")," operator."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Language")),Object(o.b)("p",null,"To open the form in the structured\xa0view, use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionEXPORT_operator"}),Object(o.b)("strong",{parentName:"a"},"EXPORT"),"\xa0operator"),". To import a form, use the\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionIMPORT_operator"}),Object(o.b)("strong",{parentName:"a"},"IMPORT"),"\xa0operator"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")))}p.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(r),m=n,d=l["".concat(s,".").concat(m)]||l[m]||b[m]||o;return r?a.a.createElement(d,i(i({ref:t},u),{},{components:r})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);