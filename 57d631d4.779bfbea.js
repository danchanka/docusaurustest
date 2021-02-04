(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(7),o=(a(0),a(419)),c={title:"Object blocks"},b={unversionedId:"Object_blocks",id:"Object_blocks",isDocsHomePage:!1,title:"Object blocks",description:"Object block of the FORM instruction\xa0 adds objects\xa0(including object groups)\xa0to the form structure, as well as object trees to the interactive form view.",source:"@site/docs\\Object_blocks.md",slug:"/Object_blocks",permalink:"/docusaurustest/docs/Object_blocks",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Object_blocks.md",version:"current",sidebar:"docs",previous:{title:"FORM instruction",permalink:"/docusaurustest/docs/FORM_instruction"},next:{title:"Properties and actions block",permalink:"/docusaurustest/docs/Properties_and_actions_block"}},p=[{value:"<strong>Object tree block</strong>",id:"object-tree-block",children:[]}],i={toc:p};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Object block of the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/FORM_instruction"}),"FORM instruction"),"\xa0 adds ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#Objectblocks-objects"}),"objects"),"\xa0(including object groups)\xa0to the form structure, as well as ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#Objectblocks-tree"}),"object trees")," to the interactive form view."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Object block")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"OBJECTS\xa0groupDeclaration1 [groupOptions1], ...., groupDeclarationN [groupOptionsN]\n")),Object(o.b)("p",null,"Each ",Object(o.b)("em",{parentName:"p"},"groupDeclaration\xa0"),"is a declaration of an object group consisting of several objects:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"[groupName =] (objectDeclaration1, ..., objectDeclarationK)\n")),Object(o.b)("p",null,"\xa0or an object group consisting of a single object:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"objectDeclaration\n")),Object(o.b)("p",null,"Each ",Object(o.b)("em",{parentName:"p"},"objectDeclaration")," declaring an object has the following syntax:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"[[name] [caption] =] classId [ON CHANGE actionId(param1, ..., paramM) | { actionOperator } ]\n")),Object(o.b)("p",null,"The declaration of each object group may be followed by a set of options called ",Object(o.b)("em",{parentName:"p"},"groupOptions"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"viewType\nINIT | FIXED\nPAGESIZE pageSize \nAFTER groupName\nBEFORE groupName\ndefaultObjectsType\nIN propertyGroup\nEXTID extID\nSUBREPORT [subReportExpression]\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"A single ",Object(o.b)("strong",{parentName:"p"},"OBJECTS")," block can contain several comma-delimited declarations of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Interactive-view_1573071.html#Interactiveview-objects"}),"object groups"),". An object group can contain just one object or\xa0several ones. In case of a single object, you can use simplified syntax without specifying the name of an object group and using parentheses. The declaration of an object group may be followed by the options of this group. They are listed one after another in an arbitrary order."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"groupName")),Object(o.b)("p",null,"Name of an object group. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id"}),"Simple ID"),". Must be specified if you need to access an object group consisting of several objects. If an object group consists of a single object, the name of the object group will be equal to the name of the object and doesn't need to be specified."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name")),Object(o.b)("p",null,"Object name. Simple ID. Must be specified if the object class is a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Built-in_classes"}),"built-in class"),".\xa0If the object class is a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/User_classes"}),"custom class"),",\xa0the name doesn't need to be specified. In this case, it will be equal to the name of the class object.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"classId")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-classid"}),"Object class ID"),"\xa0.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"caption")),Object(o.b)("p",null,"Caption of the object being added.\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Literals_35521071.html#Literals-strliteral"}),"String literal"),". If the caption is not specified, the class caption will become the object caption."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ON CHANGE actionName(param1, ..., paramM) |\xa0{ actionOperator }")),Object(o.b)("p",null,"Specifying an ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that will be called when the current object value is changed."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionID")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"Action ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"param1, ..., paramM")),Object(o.b)("p",null,"A list of object names on the form that will be used as action parameters.\xa0The number of these objects must be equal to the number of action parameters.\xa0The name of the object is defined\xa0with a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id"}),"simple ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionOperator")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-contextdependent"}),"Context-dependent action operator"),". You can use the names of already declared objects on the form as parameters."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Object group options"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"viewType")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Interactive-view_1573071.html#Interactiveview-defaultPropertyView"}),"Default view")," for an object group. It is specified with one of the keywords:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"PANEL"),"\xa0-\xa0",Object(o.b)("em",{parentName:"li"},"panel")," view."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"TOOLBAR")," - toolbar display mode."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"GRID*"),"\xa0-\xa0tablecolumn*\xa0 view;. Used by default.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"PAGESIZE")," pageSize"),Object(o.b)("p",null,"Specification of the number of readable objects in the table. By default, the quantity is determined dynamically depending on the size of the component in the user interface and equals to 3","*","<number of visible rows in the table",">",". A value of 0 means that all objects must be read."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"pageSize")),Object(o.b)("p",null,"Number of objects read. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Literals_35521071.html#Literals-intliteral"}),"Integer literal"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"AFTER")," groupName"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"BEFORE")," groupName"),Object(o.b)("p",null,"Specifying that the object tree should be added to the form structure immediately before (keyword\xa0",Object(o.b)("strong",{parentName:"p"},"BEFORE"),") or after (keyword\xa0",Object(o.b)("strong",{parentName:"p"},"AFTER"),") of a specified object group. Typically used with the\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Form_extension"}),"form extension")," mechanism . If a group is added before the group in a tree, then this group should the first in this tree. Accordingly, if a group is added after the group in a tree, this group should be the last in this tree."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"groupName")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#Objectblocks-groupName"}),"Object group name"),".\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"defaultObjectsType")),Object(o.b)("p",null,"Specifying which object collection from the added\xa0object group will be current after the change of the active filters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"FIRST"),"\u2013\xa0specifies that the first object collection will be the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"Interactive-view_1573071.html#Interactiveview-defaultobject"}),"default objects")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LAST")," - last one"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"PREV")," - previous one")),Object(o.b)("p",null,"If this option is not specified, the platform determines the option to be used depending on the current filters."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"IN**\xa0**propertyGroup")),Object(o.b)("p",null,"Specifying the\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Groups_of_properties_and_actions"}),"property/action group")," that the object group belongs to. Used only in the\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Structured-view_29884537.html#Structuredview-hierarchy"}),"hierarchical"),"\xa0view."),Object(o.b)("p",null,"*",Object(o.b)("em",{parentName:"p"},"propertyGroup"),"\xa0\u2013\xa0*the property group name.\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-cid"}),"Composite ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"EXTID extID")),Object(o.b)("p",null,"Specifying the name to be used\xa0for\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Structured-view_29884537.html#Structuredview-extid"}),"export/import"),"\xa0operations performed by this object group. Used only\xa0in\xa0the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Structured_view"}),"structured"),"\xa0view."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"extId")),Object(o.b)("p",null,"String\xa0literal."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"SUBREPORT")),Object(o.b)("p",null,"Specifies that you need to generate a separate\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Print_view"}),"report")," file for this object group while ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Print-view_1573073.html#Printview-buildhierarchy"}),"building the report hierarchy"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"subReportExpression")),Object(o.b)("p",null,"The expression whose value will be used as the name of the \xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Print_view"}),"report"),"\xa0file\xa0for the created\xa0object group. You can use the names of already declared objects on the form as parameters. It is assumed that the values of these objects will be\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Open-form_3014672.html#Openform-params"}),"passed"),"\xa0when the form is opened\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/In_a_print_view_PRINT_"}),"in the print view"),"\xa0(if it's not done, they will be considered equal\xa0",Object(o.b)("strong",{parentName:"p"},"NULL"),")."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null),Object(o.b)("hr",null),Object(o.b)("h3",{id:"object-tree-block"},Object(o.b)("strong",{parentName:"h3"},"Object tree block")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"TREE [name] groupDeclaration1 [parentBlock1], ...., groupDeclarationN [parentBlockN] [treeOptions]\n")),Object(o.b)("p",null,"Each ",Object(o.b)("em",{parentName:"p"},"groupDeclaration")," is a declaration of an object group that is similar to the declaration in an object block described above. Each ",Object(o.b)("em",{parentName:"p"},"parentBlock")," can be described in one of the following ways:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"PARENT propertyId\n(PARENT propertyId1, ..., propertyIdK)\n")),Object(o.b)("p",null,"The first option is used if an object group for which the block is specified consists of a single object, the second one is used for groups of two and more objects."),Object(o.b)("p",null,"The tree",Object(o.b)("em",{parentName:"p"},"Options")," options set may be specified after the declaration of each object tree."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"AFTER groupName\nBEFORE groupName\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Object tree block")," lets you create an ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Interactive-view_1573071.html#Interactiveview-tree"}),"object tree"),". The first specified object group will form a list of top-level objects, each of which will have a child list of objects of the second specified object group and so \xa0on."),Object(o.b)("p",null,"Use the ",Object(o.b)("strong",{parentName:"p"},"PARENT")," block to create ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Interactive-view_1573071.html#Interactiveview-treegroup"}),"hierarchical object groups"),". To do that, specify a property that will define the parent element for an object (or several objects if an object group contains several ones)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name")),Object(o.b)("p",null,"The name of the object tree being created",Object(o.b)("em",{parentName:"p"},"."),"\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id"}),"Simple ID"),".\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"ID of the property")," defining the hierarchy for an object group consisting of a single object. The specified property must have a single parameter and return the parent object of the passed object as its value (or ",Object(o.b)("strong",{parentName:"p"},"NULL"),"\xa0 if the passed object is the top one)."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId1, ..., propertyIdK")),Object(o.b)("p",null,"A list of property ID's defining the hierarchy for an object group consisting of several objects. All specified properties must have the same number of parameters as the number of objects in the object group. Each of these properties must return one of the parent objects of the passed objects as a value (or \xa0",Object(o.b)("strong",{parentName:"p"},"NULL"),"\xa0 if the passed object collection is the top one). The first property should return the first parent object, the second property - the second object, etc. \xa0on."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Object tree options"))),Object(o.b)("p",null,"AFTER groupName"),Object(o.b)("p",null,"BEFORE groupName"),Object(o.b)("p",null,"Specifying that the object tree should be added to the form structure immediately before (keyword\xa0",Object(o.b)("strong",{parentName:"p"},"BEFORE"),") or after (keyword\xa0",Object(o.b)("strong",{parentName:"p"},"AFTER"),") of a specified object group. Typically used with the\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Form_extension"}),"form extension")," mechanism . If a group is added before the group in a tree, then this group should the first in this tree. Accordingly, if a group is added after the group in a tree, this group should be the last in this tree."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"groupName")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#Objectblocks-groupName"}),"Object group name"),".\xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null))}l.isMDXComponent=!0},419:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),l=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},s=function(e){var t=l(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=l(a),j=r,m=s["".concat(c,".").concat(j)]||s[j]||u[j]||o;return a?n.a.createElement(m,b(b({ref:t},i),{},{components:a})):n.a.createElement(m,b({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=j;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var i=2;i<o;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);