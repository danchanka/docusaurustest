(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{115:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var o=r(3),a=r(7),n=(r(0),r(424)),p={title:"Structured view"},i={unversionedId:"LSFUS/Structured_view",id:"LSFUS/Structured_view",isDocsHomePage:!1,title:"Structured view",description:"All structured views (formats) can be divided into two types:",source:"@site/docs\\LSFUS\\Structured_view.md",slug:"/LSFUS/Structured_view",permalink:"/docusaurustest/docs/LSFUS/Structured_view",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/Structured_view.md",version:"current",sidebar:"docs",previous:{title:"Report design",permalink:"/docusaurustest/docs/LSFUS/Report_design"},next:{title:"Open form",permalink:"/docusaurustest/docs/LSFUS/Open_form"}},s=[],c={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"All structured views (",Object(n.b)("em",{parentName:"p"},"formats"),") can be divided into two types:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Hierarchical")," (XML, JSON) - single text file; the information for ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"Form-structure_1573069.html#Formstructure-objects"}),"object groups"),"\xa0is put as a list\xa0inside the information for ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"Static-view_29884533.html#Staticview-hierarchy"}),"parent")," groups."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Flat")," (DBF, CSV, XLS, TABLE) - one table file for each object group, and each object group with more than one level of ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"Static-view_29884533.html#Staticview-hierarchy"}),"nesting")," should have a column in its table named ",Object(n.b)("strong",{parentName:"li"},"parent"),' which should contain the "upper" row number in the parent group table.')),Object(n.b)("p",null,"Working with flat formats with a hierarchy depth greater than one is not very convenient (because in this case, the developer has to maintain an additional column), therefore, usually flat formats are used only for working with simple forms (with a hierarchy depth less than one). In other cases, hierarchical formats are usually used."),Object(n.b)("p",null,"Formats\xa0are also divided into:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"human-readable (text) and binary. All hierarchical formats\xa0are human-readable, flat can be either binary (DBF, TABLE, XLS), or human-readable (CSV). You can and should specify the encoding for human-readable formats (UTF-8 is used by default)."),Object(n.b)("li",{parentName:"ul"},"standardized and internal. At the moment, only one internal format is supported: TABLE (a table of values). All the other formats are standardized. Internal format files are processed in a special way in some\xa0",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/Integration"}),"integration"),"\xa0operations (e.g.,\xa0in\xa0",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"51216541.html#Accesstoanexternalsystem(EXTERNAL)-table"}),"SQL calls"),"). In addition, internal formats can be used to communicate lsFusion systems with each other.")),Object(n.b)("p",null,"In the current implementation the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"Form-structure_1573069.html#Formstructure-groupcolumns"}),"group-in-columns")," platforms are ignored in a structured view."),Object(n.b)("p",null,"When building an object group ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"Static-view_29884533.html#Staticview-hierarchy"}),"hierarchy")," in a structured view, the object groups that have all their objects ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"Open-form_3014672.html#Openform-params"}),"passed")," on the form opening are ignored (as if these object groups did not exist)."),Object(n.b)("p",null,"If the property ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"Form-structure_1573069.html#Formstructure-drawgroup"}),"display group"),"\xa0is specified explicitly in a\xa0structured view, then\xa0this group should not be earlier than the default one (if the specified group appears earlier, then the\xa0default display group will be used anyway)."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Export/import name")),Object(n.b)("p",null,"The name of the property on the form that will be used during export/import can be specified explicitly using the corresponding option (",Object(n.b)("strong",{parentName:"p"},"EXTID"),"). Unless this is done, the name of the property on the form will be used as the name of the export/import. If it is also not specified, then the name of the property itself will be the name of the export/import (without adding parameter objects to its end, as it is done in the other mechanisms -\xa0",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Print_view"}),"reports"),", customizing interactive\xa0view\xa0",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Form_design"}),"design"),", etc.). The export/import names of object groups and property groups are determined similarly."),Object(n.b)("p",null,"Because of the grammar nature, the option for specifying import/export name of the form (specifically, its ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"Static-view_29884533.html#Staticview-empty"}),"empty group")," of objects) is called ",Object(n.b)("strong",{parentName:"p"},"FORMEXTID")," (not ",Object(n.b)("strong",{parentName:"p"},"EXTID"),")."),Object(n.b)("p",null,"Unlike property names on the form, property export/import names (",Object(n.b)("strong",{parentName:"p"},"EXTID"),") of different properties can be equal if these properties are located in different nodes of the hierarchy (i.e., different groups of objects/properties). The same applies to export/import names of object groups and property groups."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Hierarchical view")),Object(n.b)("p",null,"Before directly proceeding with the form export/import, the platform builds a hierarchy of properties, groups of objects/properties as follows:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The hierarchy of objects/properties groups is built in accordance with the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Static_view"}),"hierarchy"),"\xa0of object groups and property ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"Form-structure_1573069.html#Formstructure-drawgroup"}),"display groups"),": a property display group is considered the parent of this property, the hierarchy of object groups is preserved.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Then for each ",Object(n.b)("strong",{parentName:"p"},"X")," object group:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Groups_of_properties_and_actions"}),"property groups")," that all ",Object(n.b)("strong",{parentName:"p"},"X"),"\xa0descendants belong to are determined, then these property groups and their ancestors are automatically included in the hierarchy. Also:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"property groups become the parents of ",Object(n.b)("strong",{parentName:"p"},"X"),"\xa0descendants that belong to those groups")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"the hierarchy of property groups is preserved")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"the ",Object(n.b)("strong",{parentName:"p"},"X")," object group becomes the parent of the uppermost (i.e., that without parents) of the used property groups."))),Object(n.b)("p",{parentName:"li"},"In a hierarchical view, object groups can be included in property groups as well as properties.\xa0"),Object(n.b)("p",{parentName:"li"},"The described algorithm is very similar to the algorithm for building property containers in the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"Form-design_29884443.html#Formdesign-defaultDesign"}),"default design")," (with the only difference being that it does not use the hierarchy of object groups). Like in the container building mechanism, the same property group can be included in the hierarchy several times for different groups of objects."))))),Object(n.b)("p",null,"After the hierarchy is built, the form is exported/imported recursively according to the following rules:\xa0"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"JSON"),":"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),'JSON result ::= \n    { JSON with properties, groups of objects/properties without parents }\n\nJSON with properties, groups of objects/properties ::= \n    JSON of the property 1 | JSON of the property group 1 | JSON of the object group 1\n    JSON of the property 2 | JSON of the property group 2 | JSON of the object group 2\n    ...\n    JSON of the property M | JSON of the property group M | JSON of the object group M\n\nJSON of the property ::=\n    "property name on the form" : property value\n\nJSON of the property group ::=\n    "property group name" : { JSON with child properties, groups of properties/objects }\n\nJSON of the object group ::=\n    "object group name" : [\n        { JSON with child properties, groups of properties/objects 1 }, \n        { JSON with child properties, groups of properties/objects 2 },\n        ... \n        { JSON with child properties, groups of properties/objects N },\n    ]\n')),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"XML"),":"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),"XML result ::= \n    <form name> XML with properties, groups of properties/objects without parents </\u0438\u043c\u044f \u0444\u043e\u0440\u043c\u044b>\n\nXML with properties, groups of properties/objects ::= \n    XML of the property 1 | XML of the property group 1 | XML of the object group 1\n    XML of the property 2 | XML of the property group 2 | XML of the object group 2\n    ...\n    XML of the property M | XML of the property group M | XML of the object group M\n\nXML of the property ::= \n    <property name on the form> property value </\u0438\u043c\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043d\u0430 \u0444\u043e\u0440\u043c\u0435>\n\nXML of the property group ::=\n    <property group name> XML with child properties, groups of properties/objects </\u0438\u043c\u044f \u0433\u0440\u0443\u043f\u043f\u044b \u0441\u0432\u043e\u0439\u0441\u0442\u0432>\n\nXML of the object group ::=\n    <object group name> XML with child properties, groups of properties/objects 1 </\u0438\u043c\u044f \u0433\u0440\u0443\u043f\u043f\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432>\n    <object group name> XML with child properties, groups of properties/objects 2 </\u0438\u043c\u044f \u0433\u0440\u0443\u043f\u043f\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432>\n    ...\n    <object group name> XML with child properties, groups of properties/objects N </\u0438\u043c\u044f \u0433\u0440\u0443\u043f\u043f\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432>\n")),Object(n.b)("p",null,"When exporting/importing to XML, the special ATTR option can be specified for a property on the form. Thus, when exporting/importing that property, its value will be stored not in a separate tag, but in the attribute of the parent tag:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),'<\u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0442\u0435\u0433 ... \u0438\u043c\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043d\u0430 \u0444\u043e\u0440\u043c\u0435 = "\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430" ...>\n')),Object(n.b)("p",null,"When importing from XML, the name of the uppermost tag (in the rule) is ignored (according to the XML specification, there should be only one such tag)."),Object(n.b)("p",null,"Properties with ",Object(n.b)("strong",{parentName:"p"},"NULL")," values, as well as property groups that do not have any tags inside\xa0as a result of export, are not exported (ignored)."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Predefined value")),Object(n.b)("p",null,"When importing JSON, if for an object group an array (\xa0","["," ","]",'\xa0) of values contains not an object (\xa0{ } ), but a specific value (for example, a number or a string), then this value is automatically converted\xa0to an object { "',Object(n.b)("strong",{parentName:"p"},"value"),'" : value }. A similar conversion is performed when exporting an object group to JSON: if the object contains exactly one ',Object(n.b)("strong",{parentName:"p"},"value"),' key (i.e., it has the form { "',Object(n.b)("strong",{parentName:"p"},"value"),'" : value}), then instead of it, the value for this ',Object(n.b)("strong",{parentName:"p"},"value"),' key is substituted to the resulting JSON. In addition to "ordinary" object groups, the same conversions are also performed for the ',Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"Static-view_29884533.html#Staticview-empty"}),"empty")," root object group, i.e., for example JSON ","[",'"ab","vv"',"]",' is processed as JSON\xa0{ "',Object(n.b)("strong",{parentName:"p"},"value"),'" : ',"[",'"ab","vv"',"]","\xa0}."),Object(n.b)("p",null,"When importing/exporting XML, if the property is named ",Object(n.b)("strong",{parentName:"p"},"value"),", then the\xa0value of this property will be stored not in a separate tag, but inside (in the text) the parent tag (i.e., as if the parent tag itself was a property view). This behavior is usually used if the parent tag has other tags/attributes in it (XML specification allows this)."),Object(n.b)("p",null,"When importing XML, if the object group is named ",Object(n.b)("strong",{parentName:"p"},"value"),", then all tags are read (with any name).\xa0"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"XML namespaces")),Object(n.b)("p",null,"Unlike other formats, XML supports a concept of namespaces for tags and attributes."),Object(n.b)("p",null,"For example, in lsFusion to export a property to a tag with a specified namespace, you must specify the name of this property using a special syntax:"),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),"[namespace[=uri]:]name\n")),Object(n.b)("p",null,"For example, h:table or h=",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.w3.org/TR/html4:table"}),"http://www.w3.org/TR/html4:table"),". The namespace name may be empty if necessary. If no URI is specified for the namespace, it is inherited from the namespace with the same name of the parent tags. If there are no namespaces with that name in the parent tags, URI is automatically considered equal to ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.w3.org/"}),"http://www.w3.org/")," of the namespace",">","."),Object(n.b)("p",null,"It is not possible to specify the property name described above (for example, h:table) in the lsFusion syntax (since the name cannot contain a colon), therefore, to specify such an export name, you should use the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"#Structuredview-extid"}),"described above")," ",Object(n.b)("strong",{parentName:"p"},"EXTID")," option."),Object(n.b)("p",null,"If a namespace must be declared in a tag\xa0, but the tag itself should not belong to it, you must add a property marked\xa0",Object(n.b)("strong",{parentName:"p"},"ATTR"),"\xa0and named xmlns:namespace to the export. It is assumed that the value of this property will contain the URI of the declared namespace."),Object(n.b)("p",null,"Working with namespaces is similar when importing properties, as well as when working with object groups/property groups."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Flat view")),Object(n.b)("p",null,"Each file for an object group in flat view is a table in which:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Rows are object collections of this object group."),Object(n.b)("li",{parentName:"ul"},"Columns are properties, which ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"Form-structure_1573069.html#Formstructure-drawgroup"}),"display groups"),"\xa0are equal to this object group.")),Object(n.b)("p",null,"In CSV format (when there is no first header line), the columns are named similarly to XLS (i.e., A is the first, B is the second, etc.)"),Object(n.b)("p",null,"If a column with the form property name is not found when importing the form, then the column next to the column of the previous\xa0property in the list of form properties is selected for import (in this case, the ",Object(n.b)("strong",{parentName:"p"},"parent")," column is considered the first)."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Language")),Object(n.b)("p",null,"All of the above options, as well as defining the form structure,\xa0can be done using the\xa0",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/FORM_instruction"}),Object(n.b)("strong",{parentName:"a"},"FORM"),"\xa0instruction"),"."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Open form")),Object(n.b)("p",null,"To display the form in structured view, the corresponding ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Open_form"}),"open form"),"\xa0in a\xa0",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/In_a_structured_view_EXPORT_IMPORT_"}),"structured view","\xa0"),"operator is used."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Examples")))}l.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var o=r(0),a=r.n(o);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=l(r),h=o,m=b["".concat(p,".").concat(h)]||b[h]||u[h]||n;return r?a.a.createElement(m,i(i({ref:t},c),{},{components:r})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,p=new Array(n);p[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<n;c++)p[c]=r[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);