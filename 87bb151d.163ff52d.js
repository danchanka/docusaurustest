(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{266:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),c=(a(0),a(424)),o={},b={unversionedId:"LSFUS/lsFusionObject_blocks",id:"LSFUS/lsFusionObject_blocks",isDocsHomePage:!1,title:"lsFusionObject_blocks",description:"lsFusionObject blocks",source:"@site/docs\\LSFUS\\lsFusionObject_blocks.md",slug:"/LSFUS/lsFusionObject_blocks",permalink:"/docusaurustest/docs/LSFUS/lsFusionObject_blocks",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/website/docs/LSFUS/lsFusionObject_blocks.md",version:"current"},p=[],l={toc:p};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"lsfusionobject-blocks"},"lsFusionObject blocks"),Object(c.b)("h1",{id:"object-blocks"},"Object blocks"),Object(c.b)("p",null,"Object block of the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionFORM_instruction"}),"FORM instruction"),"\xa0 adds ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#Objectblocks-objects"}),"objects"),"\xa0(including object groups)\xa0to the form structure, as well as ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#Objectblocks-tree"}),"object trees")," to the interactive form view."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Object block")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Syntax")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"OBJECTS\xa0groupDeclaration1 [groupOptions1], ...., groupDeclarationN [groupOptionsN]\n")),Object(c.b)("p",null,"Each ",Object(c.b)("em",{parentName:"p"},"groupDeclaration\xa0"),"is a declaration of an object group consisting of several objects:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"[groupName =] (objectDeclaration1, ..., objectDeclarationK)\n")),Object(c.b)("p",null,"\xa0or an object group consisting of a single object:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"objectDeclaration\n")),Object(c.b)("p",null,"Each ",Object(c.b)("em",{parentName:"p"},"objectDeclaration")," declaring an object has the following syntax:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"[[name] [caption] =] classId [ON CHANGE actionId(param1, ..., paramM) | { actionOperator } ]\n")),Object(c.b)("p",null,"The declaration of each object group may be followed by a set of options called ",Object(c.b)("em",{parentName:"p"},"groupOptions"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"viewType\nINIT | FIXED\nPAGESIZE pageSize \nAFTER groupName\nBEFORE groupName\ndefaultObjectsType\nIN propertyGroup\nEXTID extID\nSUBREPORT [subReportExpression]\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Description")),Object(c.b)("p",null,"A single ",Object(c.b)("strong",{parentName:"p"},"OBJECTS")," block can contain several comma-delimited declarations of ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"Interactive-view_1573071.html#Interactiveview-objects"}),"object groups"),". An object group can contain just one object or\xa0several ones. In case of a single object, you can use simplified syntax without specifying the name of an object group and using parentheses. The declaration of an object group may be followed by the options of this group. They are listed one after another in an arbitrary order."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"groupName")),Object(c.b)("p",null,"Name of an object group. ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id"}),"Simple ID"),". Must be specified if you need to access an object group consisting of several objects. If an object group consists of a single object, the name of the object group will be equal to the name of the object and doesn't need to be specified."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"name")),Object(c.b)("p",null,"Object name. Simple ID. Must be specified if the object class is a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionBuilt-in_classes"}),"built-in class"),".\xa0If the object class is a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionUser_classes"}),"custom class"),",\xa0the name doesn't need to be specified. In this case, it will be equal to the name of the class object.\xa0"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"classId")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-classid"}),"Object class ID"),"\xa0.\xa0"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"caption")),Object(c.b)("p",null,"Caption of the object being added.\xa0",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"Literals_35521071.html#Literals-strliteral"}),"String literal"),". If the caption is not specified, the class caption will become the object caption."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"ON CHANGE actionName(param1, ..., paramM) |\xa0{ actionOperator }")),Object(c.b)("p",null,"Specifying an ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionActions"}),"action")," that will be called when the current object value is changed."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"actionID")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"Action ID"),"."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"param1, ..., paramM")),Object(c.b)("p",null,"A list of object names on the form that will be used as action parameters.\xa0The number of these objects must be equal to the number of action parameters.\xa0The name of the object is defined\xa0with a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id-%D0%98%D0%B4%D0%B5%D0%BD%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80%D1%8B-id"}),"simple ID"),"."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"actionOperator")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-contextdependent"}),"Context-dependent action operator"),". You can use the names of already declared objects on the form as parameters."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("em",{parentName:"strong"},"Object group options"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"viewType")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"Interactive-view_1573071.html#Interactiveview-defaultPropertyView"}),"Default view")," for an object group. It is specified with one of the keywords:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"PANEL"),"\xa0-\xa0",Object(c.b)("em",{parentName:"li"},"panel")," view."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"TOOLBAR")," - toolbar display mode."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"GRID*"),"\xa0-\xa0tablecolumn*\xa0 view;. Used by default.")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"PAGESIZE")," pageSize"),Object(c.b)("p",null,"Specification of the number of readable objects in the table. By default, the quantity is determined dynamically depending on the size of the component in the user interface and equals to 3","*","<","number of visible rows in the table",">",". A value of 0 means that all objects must be read."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"pageSize")),Object(c.b)("p",null,"Number of objects read. ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"Literals_35521071.html#Literals-intliteral"}),"Integer literal"),"."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"AFTER")," groupName"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"BEFORE")," groupName"),Object(c.b)("p",null,"Specifying that the object tree should be added to the form structure immediately before (keyword\xa0",Object(c.b)("strong",{parentName:"p"},"BEFORE"),") or after (keyword\xa0",Object(c.b)("strong",{parentName:"p"},"AFTER"),") of a specified object group. Typically used with the\xa0",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionForm_extension"}),"form extension")," mechanism . If a group is added before the group in a tree, then this group should the first in this tree. Accordingly, if a group is added after the group in a tree, this group should be the last in this tree."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"groupName")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#Objectblocks-groupName"}),"Object group name"),".\xa0"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"defaultObjectsType")),Object(c.b)("p",null,"Specifying which object collection from the added\xa0object group will be current after the change of the active filters:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"FIRST"),"\u2013\xa0specifies that the first object collection will be the ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"Interactive-view_1573071.html#Interactiveview-defaultobject"}),"default objects")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"LAST")," - last one"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"PREV")," - previous one")),Object(c.b)("p",null,"If this option is not specified, the platform determines the option to be used depending on the current filters."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"IN**\xa0**propertyGroup")),Object(c.b)("p",null,"Specifying the\xa0",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionGroups_of_properties_and_actions"}),"property/action group")," that the object group belongs to. Used only in the\xa0",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"Structured-view_29884537.html#Structuredview-hierarchy"}),"hierarchical"),"\xa0view."),Object(c.b)("p",null,"*",Object(c.b)("em",{parentName:"p"},"propertyGroup"),"\xa0\u2013\xa0*the property group name.\xa0",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-cid"}),"Composite ID"),"."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"EXTID extID")),Object(c.b)("p",null,"Specifying the name to be used\xa0for\xa0",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"Structured-view_29884537.html#Structuredview-extid"}),"export/import"),"\xa0operations performed by this object group. Used only\xa0in\xa0the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionStructured_view"}),"structured"),"\xa0view."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"extId")),Object(c.b)("p",null,"String\xa0literal."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"SUBREPORT")),Object(c.b)("p",null,"Specifies that you need to generate a separate\xa0",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionPrint_view"}),"report")," file for this object group while ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"Print-view_1573073.html#Printview-buildhierarchy"}),"building the report hierarchy"),"."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"subReportExpression")),Object(c.b)("p",null,"The expression whose value will be used as the name of the \xa0",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionPrint_view"}),"report"),"\xa0file\xa0for the created\xa0object group. You can use the names of already declared objects on the form as parameters. It is assumed that the values of these objects will be\xa0",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"Open-form_3014672.html#Openform-params"}),"passed"),"\xa0when the form is opened\xa0",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionIn_a_print_view_PRINT_"}),"in the print view"),"\xa0(if it's not done, they will be considered equal\xa0",Object(c.b)("strong",{parentName:"p"},"NULL"),")."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Examples")),Object(c.b)("hr",null))}s.isMDXComponent=!0},424:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},i=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),i=s(a),j=n,O=i["".concat(o,".").concat(j)]||i[j]||u[j]||c;return a?r.a.createElement(O,b(b({ref:t},l),{},{components:a})):r.a.createElement(O,b({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=j;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var l=2;l<c;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);