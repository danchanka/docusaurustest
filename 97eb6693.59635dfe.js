(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{280:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(419)),s={title:"In a structured view (EXPORT, IMPORT)"},c={unversionedId:"In_a_structured_view_EXPORT_IMPORT_",id:"In_a_structured_view_EXPORT_IMPORT_",isDocsHomePage:!1,title:"In a structured view (EXPORT, IMPORT)",description:"This operator creates an action that\xa0opens a form\xa0in the\xa0structured\xa0view.",source:"@site/docs\\In_a_structured_view_EXPORT_IMPORT_.md",slug:"/In_a_structured_view_EXPORT_IMPORT_",permalink:"/docusaurustest/docs/In_a_structured_view_EXPORT_IMPORT_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/In_a_structured_view_EXPORT_IMPORT_.md",version:"current",sidebar:"docs",previous:{title:"In a print view (PRINT)",permalink:"/docusaurustest/docs/In_a_print_view_PRINT_"},next:{title:"Navigator",permalink:"/docusaurustest/docs/Navigator"}},i=[],p={toc:i};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This operator creates an action that\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Open_form"}),"opens a form"),"\xa0in the\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Structured_view"}),"structured"),"\xa0view."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Format")),Object(o.b)("p",null,"In this operator, you can define the format that all form data will be converted to:\xa0\xa0",Object(o.b)("strong",{parentName:"p"},"XML"),",\xa0",Object(o.b)("strong",{parentName:"p"},"JSON"),",\xa0",Object(o.b)("strong",{parentName:"p"},"DBF, CSV, XLS"),". The generated file(s) in this format is then written to the specified property."),Object(o.b)("p",null,"Form export is a general case of the \xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_export_EXPORT_"}),"data export operator"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Form import")),Object(o.b)("p",null,"Form import is an operation that is opposite to opening the form in a structured view. The import operator accepts files in a structured format, then parses them and saves the data to the properties of the set form in such a way that when this form is exported back into the imported format, it would recreate the original file."),Object(o.b)("p",null,'Since the import operator is essentially an "input operator", the following constraints apply to the form being imported:'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"All form objects must belong to \xa0numeric\xa0or",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"User-classes_2228341.html#Userclasses-abstract"}),"concrete"),"\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/User_classes"}),"user"),"\xa0classes. Object groups must consist of exactly one object (this constraint is caused by the fact that all the used formats are essentially\xa0lists \u2014 that is, mappings of numbers to values).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Properties and\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"Form-structure_1573069.html#Formstructure-filters"}),"filters"),"\xa0on the form should be \xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Property_change_CHANGE_"}),"changeable"),"\xa0by a given value (that is, as a rule, be\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_properties_DATA_"}),"primary"),"). Before importing, any existing changes to the imported properties in the current session are canceled."))),Object(o.b)("p",null,"During import, filters change to the default values of value classes of these filters."),Object(o.b)("p",null,"When importing data into objects of numeric classes, 0-based numbering is used. In case of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"Structured-view_29884537.html#Structuredview-hierarchy"}),"hierarchical"),' formats, numbering is "end-to-end" (that is, when the object group being imported is encountered for the second and subsequent times, object numbering in it starts from the position that the previous one stopped at).'),Object(o.b)("p",null,"When importing from XLS and CSV without headers (with the ",Object(o.b)("strong",{parentName:"p"},"NOHEADER")," option), the platform automatically attempts to convert data to the necessary type. If it fails, a ",Object(o.b)("strong",{parentName:"p"},"NULL")," value is written to the property. Importing from other formats requires correct types. For example, if a string is required during data import from JSON, and the JSON file contains a number (without quotes), the platform will generate an error."),Object(o.b)("p",null,"If a property (object group) is not found during import, it is ignored (that is, its value remains equal to ",Object(o.b)("strong",{parentName:"p"},"NULL"),")."),Object(o.b)("p",null,"Form import is a general case of the\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_import_IMPORT_"}),"data import")," operator."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Language")),Object(o.b)("p",null,"To open the form in the structured\xa0view, use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/EXPORT_operator"}),Object(o.b)("strong",{parentName:"a"},"EXPORT"),"\xa0operator"),". To import a form, use the\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/IMPORT_operator"}),Object(o.b)("strong",{parentName:"a"},"IMPORT"),"\xa0operator"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")))}u.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),u=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=u(r),m=a,d=b["".concat(s,".").concat(m)]||b[m]||l[m]||o;return r?n.a.createElement(d,c(c({ref:t},p),{},{components:r})):n.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=r[p];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);