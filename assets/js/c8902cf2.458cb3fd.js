(window.webpackJsonp=window.webpackJsonp||[]).push([[532,460],{57:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return p})),o.d(t,"toc",(function(){return b})),o.d(t,"CodeSample",(function(){return u})),o.d(t,"default",(function(){return m}));var r=o(3),n=o(7),a=o(0),c=o.n(a),s=o(749),i=o(753),l={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},b=[],u=function(e){var t=e.url,o=e.lines,r=Object(a.useState)(""),n=r[0],l=r[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),n?o?Object(s.b)(c.a.Fragment,null,Object(s.b)(i.a,{className:"lsf",metastring:o,mdxType:"CodeBlock"},n),Object(s.b)("br",null)):Object(s.b)(c.a.Fragment,null,Object(s.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},n),Object(s.b)("br",null)):Object(s.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:b,CodeSample:u};function m(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},d,o,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},604:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return i})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return b}));var r=o(3),n=o(7),a=(o(0),o(749)),c=o(57),s={title:"Object blocks"},i={unversionedId:"Object_blocks",id:"version-1.0.0/Object_blocks",isDocsHomePage:!1,title:"Object blocks",description:"Object block of the FORM instruction\xa0 adds objects\xa0(including object groups)\xa0to the form structure, as well as object trees to the interactive form view.",source:"@site/versioned_docs/version-1.0.0/Object_blocks.md",slug:"/Object_blocks",permalink:"/docusaurustest/docs/Object_blocks",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/Object_blocks.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"FORM instruction: Overview",permalink:"/docusaurustest/docs/FORM_instruction"},next:{title:"Properties and actions block",permalink:"/docusaurustest/docs/Properties_and_actions_block"}},l=[{value:"Object block",id:"objects",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"<em>Object group options</em>",id:"object-group-options",children:[]},{value:"Examples",id:"examples",children:[]},{value:"<strong>Object tree block</strong>",id:"tree",children:[]},{value:"Syntax",id:"syntax-1",children:[]},{value:"Description",id:"description-1",children:[]},{value:"Parameters",id:"parameters-1",children:[]},{value:"<em>Object tree options</em>",id:"object-tree-options",children:[]},{value:"Examples",id:"examples-1",children:[]}],p={toc:l};function b(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Object block of the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/FORM_instruction"},"FORM instruction"),"\xa0 adds ",Object(a.b)("a",{parentName:"p",href:"#objects"},"objects"),"\xa0(including object groups)\xa0to the form structure, as well as ",Object(a.b)("a",{parentName:"p",href:"#tree"},"object trees")," to the interactive form view."),Object(a.b)("h3",{id:"objects"},"Object block"),Object(a.b)("h3",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"OBJECTS\xa0groupDeclaration1 [groupOptions1], ...., groupDeclarationN [groupOptionsN]\n")),Object(a.b)("p",null,"Each ",Object(a.b)("em",{parentName:"p"},"groupDeclaration\xa0"),"is a declaration of an object group consisting of several objects:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"[groupName =] (objectDeclaration1, ..., objectDeclarationK)\n")),Object(a.b)("p",null,"\xa0or an object group consisting of a single object:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"objectDeclaration\n")),Object(a.b)("p",null,"Each ",Object(a.b)("em",{parentName:"p"},"objectDeclaration")," declaring an object has the following syntax:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"[[name] [caption] =] classId [ON CHANGE actionId(param1, ..., paramM) | { actionOperator } ]\n")),Object(a.b)("p",null,"The declaration of each object group may be followed by a set of options called ",Object(a.b)("em",{parentName:"p"},"groupOptions"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"viewType\nINIT | FIXED\nPAGESIZE pageSize \nAFTER groupName\nBEFORE groupName\ndefaultObjectsType\nIN propertyGroup\nEXTID extID\nSUBREPORT [subReportExpression]\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"A single ",Object(a.b)("strong",{parentName:"p"},"OBJECTS")," block can contain several comma-delimited declarations of ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Interactive_view#objects"},"object groups"),". An object group can contain just one object or\xa0several ones. In case of a single object, you can use simplified syntax without specifying the name of an object group and using parentheses. The declaration of an object group may be followed by the options of this group. They are listed one after another in an arbitrary order."),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"groupName")),Object(a.b)("p",null,"Name of an object group. ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#id-broken"},"Simple ID"),". Must be specified if you need to access an object group consisting of several objects. If an object group consists of a single object, the name of the object group will be equal to the name of the object and doesn't need to be specified."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"name")),Object(a.b)("p",null,"Object name. Simple ID. Must be specified if the object class is a ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Built-in_classes"},"built-in class"),".\xa0If the object class is a ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/User_classes"},"custom class"),",\xa0the name doesn't need to be specified. In this case, it will be equal to the name of the class object.\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"classId")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#classid-broken"},"Object class ID"),"\xa0.\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"caption")),Object(a.b)("p",null,"Caption of the object being added.\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Literals#strliteral-broken"},"String literal"),". If the caption is not specified, the class caption will become the object caption."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"ON CHANGE actionName(param1, ..., paramM) |\xa0{ actionOperator }")),Object(a.b)("p",null,"Specifying an ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"action")," that will be called when the current object value is changed."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"actionID")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#propertyid-broken"},"Action ID"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"param1, ..., paramM")),Object(a.b)("p",null,"A list of object names on the form that will be used as action parameters.\xa0The number of these objects must be equal to the number of action parameters.\xa0The name of the object is defined\xa0with a ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#id-broken"},"simple ID"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"actionOperator")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Action_operator#contextdependent"},"Context-dependent action operator"),". You can use the names of already declared objects on the form as parameters."),Object(a.b)("h3",{id:"object-group-options"},Object(a.b)("em",{parentName:"h3"},"Object group options")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"viewType")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Interactive_view#defaultPropertyView-broken"},"Default view")," for an object group. It is specified with one of the keywords:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"PANEL"),"\xa0-\xa0",Object(a.b)("em",{parentName:"li"},"panel")," view."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"TOOLBAR")," - toolbar display mode."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"GRID*"),"\xa0-\xa0tablecolumn*\xa0 view;. Used by default.")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"PAGESIZE")," pageSize"),Object(a.b)("p",null,"Specification of the number of readable objects in the table. By default, the quantity is determined dynamically depending on the size of the component in the user interface and equals to 3","*","<number of visible rows in the table",">",". A value of 0 means that all objects must be read."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"pageSize")),Object(a.b)("p",null,"Number of objects read. ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Literals#intliteral-broken"},"Integer literal"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"AFTER")," groupName"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"BEFORE")," groupName"),Object(a.b)("p",null,"Specifying that the object tree should be added to the form structure immediately before (keyword\xa0",Object(a.b)("strong",{parentName:"p"},"BEFORE"),") or after (keyword\xa0",Object(a.b)("strong",{parentName:"p"},"AFTER"),") of a specified object group. Typically used with the\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Form_extension"},"form extension")," mechanism . If a group is added before the group in a tree, then this group should the first in this tree. Accordingly, if a group is added after the group in a tree, this group should be the last in this tree."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"groupName")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"#groupName-broken"},"Object group name"),".\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"defaultObjectsType")),Object(a.b)("p",null,"Specifying which object collection from the added\xa0object group will be current after the change of the active filters:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"FIRST"),"\u2013\xa0specifies that the first object collection will be the ",Object(a.b)("a",{parentName:"li",href:"/docusaurustest/docs/Interactive_view#defaultobject"},"default objects")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"LAST")," - last one"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"PREV")," - previous one")),Object(a.b)("p",null,"If this option is not specified, the platform determines the option to be used depending on the current filters."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"IN**\xa0**propertyGroup")),Object(a.b)("p",null,"Specifying the\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Groups_of_properties_and_actions"},"property/action group")," that the object group belongs to. Used only in the\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Structured_view#hierarchy"},"hierarchical"),"\xa0view."),Object(a.b)("p",null,"*",Object(a.b)("em",{parentName:"p"},"propertyGroup"),"\xa0\u2013\xa0*the property group name.\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#cid-broken"},"Composite ID"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"EXTID extID")),Object(a.b)("p",null,"Specifying the name to be used\xa0for\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Structured_view#extid"},"export/import"),"\xa0operations performed by this object group. Used only\xa0in\xa0the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Structured_view"},"structured"),"\xa0view."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"extId")),Object(a.b)("p",null,"String\xa0literal."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"SUBREPORT")),Object(a.b)("p",null,"Specifies that you need to generate a separate\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Print_view"},"report")," file for this object group while ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Print_view#buildhierarchy"},"building the report hierarchy"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"subReportExpression")),Object(a.b)("p",null,"The expression whose value will be used as the name of the \xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Print_view"},"report"),"\xa0file\xa0for the created\xa0object group. You can use the names of already declared objects on the form as parameters. It is assumed that the values of these objects will be\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Open_form#params"},"passed"),"\xa0when the form is opened\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_a_print_view_PRINT_"},"in the print view"),"\xa0(if it's not done, they will be considered equal\xa0",Object(a.b)("strong",{parentName:"p"},"NULL"),")."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=FormSample&block=objects",mdxType:"CodeSample"}),Object(a.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=FormSample&block=view",mdxType:"CodeSample"}),Object(a.b)("h3",{id:"tree"},Object(a.b)("strong",{parentName:"h3"},"Object tree block")),Object(a.b)("h3",{id:"syntax-1"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"TREE [name] groupDeclaration1 [parentBlock1], ...., groupDeclarationN [parentBlockN] [treeOptions]\n")),Object(a.b)("p",null,"Each ",Object(a.b)("em",{parentName:"p"},"groupDeclaration")," is a declaration of an object group that is similar to the declaration in an object block described above. Each ",Object(a.b)("em",{parentName:"p"},"parentBlock")," can be described in one of the following ways:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"PARENT propertyId\n(PARENT propertyId1, ..., propertyIdK)\n")),Object(a.b)("p",null,"The first option is used if an object group for which the block is specified consists of a single object, the second one is used for groups of two and more objects."),Object(a.b)("p",null,"The tree",Object(a.b)("em",{parentName:"p"},"Options")," options set may be specified after the declaration of each object tree."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"AFTER groupName\nBEFORE groupName\n")),Object(a.b)("h3",{id:"description-1"},"Description"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Object tree block")," lets you create an ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Interactive_view#tree"},"object tree"),". The first specified object group will form a list of top-level objects, each of which will have a child list of objects of the second specified object group and so \xa0on."),Object(a.b)("p",null,"Use the ",Object(a.b)("strong",{parentName:"p"},"PARENT")," block to create ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Interactive_view#treegroup-broken"},"hierarchical object groups"),". To do that, specify a property that will define the parent element for an object (or several objects if an object group contains several ones)."),Object(a.b)("h3",{id:"parameters-1"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"name")),Object(a.b)("p",null,"The name of the object tree being created",Object(a.b)("em",{parentName:"p"},"."),"\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#id-broken"},"Simple ID"),".\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"propertyId")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#propertyid-broken"},"ID of the property")," defining the hierarchy for an object group consisting of a single object. The specified property must have a single parameter and return the parent object of the passed object as its value (or ",Object(a.b)("strong",{parentName:"p"},"NULL"),"\xa0 if the passed object is the top one)."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"propertyId1, ..., propertyIdK")),Object(a.b)("p",null,"A list of property ID's defining the hierarchy for an object group consisting of several objects. All specified properties must have the same number of parameters as the number of objects in the object group. Each of these properties must return one of the parent objects of the passed objects as a value (or \xa0",Object(a.b)("strong",{parentName:"p"},"NULL"),"\xa0 if the passed object collection is the top one). The first property should return the first parent object, the second property - the second object, etc. \xa0on."),Object(a.b)("h3",{id:"object-tree-options"},Object(a.b)("em",{parentName:"h3"},"Object tree options")),Object(a.b)("p",null,"AFTER groupName"),Object(a.b)("p",null,"BEFORE groupName"),Object(a.b)("p",null,"Specifying that the object tree should be added to the form structure immediately before (keyword\xa0",Object(a.b)("strong",{parentName:"p"},"BEFORE"),") or after (keyword\xa0",Object(a.b)("strong",{parentName:"p"},"AFTER"),") of a specified object group. Typically used with the\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Form_extension"},"form extension")," mechanism . If a group is added before the group in a tree, then this group should the first in this tree. Accordingly, if a group is added after the group in a tree, this group should be the last in this tree."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"groupName")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"#groupName-broken"},"Object group name"),".\xa0"),Object(a.b)("h3",{id:"examples-1"},"Examples"),Object(a.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=FormSample&block=tree",mdxType:"CodeSample"}))}b.isMDXComponent=!0},749:function(e,t,o){"use strict";o.d(t,"a",(function(){return b})),o.d(t,"b",(function(){return m}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},b=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(o),d=r,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||a;return o?n.a.createElement(m,s(s({ref:t},l),{},{components:o})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=o[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},751:function(e,t,o){"use strict";var r=o(0),n=o(754);t.a=function(){var e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},752:function(e,t){function o(e){let t,o=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))o.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,n,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==n&&".."!==n&&"\u2025"!==n||(a+=e);for(let t=r;t!==a;t+=e)o.push(t)}}return o}t.default=o,e.exports=o},753:function(e,t,o){"use strict";o.d(t,"a",(function(){return I}));var r=o(3),n=o(0),a=o.n(n),c=o(755),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:o(23).a,theme:s};function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}var b=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},d=function(e,t){var o=e.length;return o>0&&e[o-1]===t?e:e.concat(t)},m=function(e,t){var o=e.plain,r=Object.create(null),n=e.styles.reduce((function(e,o){var r=o.languages,n=o.style;return r&&!r.includes(t)||o.types.forEach((function(t){var o=p({},e[t],n);e[t]=o})),e}),r);return n.root=o,n.plain=p({},o,{backgroundColor:null}),n};function h(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(o[r]=e[r]);return o}var j=function(e){function t(){for(var t=this,o=[],r=arguments.length;r--;)o[r]=arguments[r];e.apply(this,o),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var o=e.theme?m(e.theme,e.language):void 0;return t.themeDict=o})),l(this,"getLineProps",(function(e){var o=e.key,r=e.className,n=e.style,a=p({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==n&&(a.style=void 0!==a.style?p({},a.style,n):n),void 0!==o&&(a.key=o),r&&(a.className+=" "+r),a})),l(this,"getStyleForToken",(function(e){var o=e.types,r=e.empty,n=o.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===n&&"plain"===o[0])return r?{display:"inline-block"}:void 0;if(1===n&&!r)return a[o[0]];var c=r?{display:"inline-block"}:{},s=o.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(s))}})),l(this,"getTokenProps",(function(e){var o=e.key,r=e.className,n=e.style,a=e.token,c=p({},h(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==n&&(c.style=void 0!==c.style?p({},c.style,n):n),void 0!==o&&(c.key=o),r&&(c.className+=" "+r),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,o=e.language,r=e.code,n=e.children,a=this.getThemeDict(this.props),c=t.languages[o];return n({tokens:function(e){for(var t=[[]],o=[e],r=[0],n=[e.length],a=0,c=0,s=[],i=[s];c>-1;){for(;(a=r[c]++)<n[c];){var l=void 0,p=t[c],m=o[c][a];if("string"==typeof m?(p=c>0?p:["plain"],l=m):(p=d(p,m.type),m.alias&&(p=d(p,m.alias)),l=m.content),"string"==typeof l){var h=l.split(b),j=h.length;s.push({types:p,content:h[0]});for(var f=1;f<j;f++)u(s),i.push(s=[]),s.push({types:p,content:h[f]})}else c++,t.push(p),o.push(l),r.push(0),n.push(l.length)}c--,t.pop(),o.pop(),r.pop(),n.pop()}return u(s),i}(void 0!==c?t.tokenize(r,c,o):[r]),className:"prism-code language-"+o,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component);var f=o(752),O=o.n(f),g={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},y=o(751),v=o(750),N=function(){var e=Object(v.useThemeConfig)().prism,t=Object(y.a)().isDarkTheme,o=e.theme||g,r=e.darkTheme||o;return t?r:o},k=o(756),w=o(58),E=o.n(w),T=/{([\d,-]+)}/,x=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},o=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+o+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},S=/(?:title=")(.*)(?:")/;function I(e){var t=e.children,o=e.className,s=e.metastring,l=Object(v.useThemeConfig)().prism,p=Object(n.useState)(!1),b=p[0],u=p[1],d=Object(n.useState)(!1),m=d[0],h=d[1];Object(n.useEffect)((function(){h(!0)}),[]);var f=Object(n.useRef)(null),g=[],y="",w=N(),I=Array.isArray(t)?t.join(""):t;if(s&&T.test(s)){var D=s.match(T)[1];g=O()(D).filter((function(e){return e>0}))}s&&S.test(s)&&(y=s.match(S)[1]);var C=o&&o.replace(/language-/,"");!C&&l.defaultLanguage&&(C=l.defaultLanguage);var P=I.replace(/\n$/,"");if(0===g.length&&void 0!==C){for(var _,R="",A=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"]);case"jsx":case"tsx":return x(["js","jsBlock","jsx"]);case"html":return x(["js","jsBlock","html"]);case"python":case"py":return x(["python"]);default:return x()}}(C),B=I.replace(/\n$/,"").split("\n"),F=0;F<B.length;){var L=F+1,M=B[F].match(A);if(null!==M){switch(M.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":R+=L+",";break;case"highlight-start":_=L;break;case"highlight-end":R+=_+"-"+(L-1)+","}B.splice(F,1)}else F+=1}g=O()(R),P=B.join("\n")}var U=function(){!function(e,{target:t=document.body}={}){const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const n=document.getSelection();let a=!1;n.rangeCount>0&&(a=n.getRangeAt(0)),t.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}o.remove(),a&&(n.removeAllRanges(),n.addRange(a)),r&&r.focus()}(P),u(!0),setTimeout((function(){return u(!1)}),2e3)};return a.a.createElement(j,Object(r.a)({},i,{key:String(m),theme:w,code:P,language:C}),(function(e){var t,o=e.className,n=e.style,s=e.tokens,i=e.getLineProps,l=e.getTokenProps;return a.a.createElement("div",{className:E.a.codeBlockContainer},y&&a.a.createElement("div",{style:n,className:E.a.codeBlockTitle},y),a.a.createElement("div",{className:Object(c.a)(E.a.codeBlockContent,C)},a.a.createElement("div",{tabIndex:0,className:Object(c.a)(o,E.a.codeBlock,"thin-scrollbar",(t={},t[E.a.codeBlockWithTitle]=y,t))},a.a.createElement("div",{className:E.a.codeBlockLines,style:n},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var o=i({line:e,key:t});return g.includes(t+1)&&(o.className=o.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(r.a)({key:t},o),e.map((function(e,t){return a.a.createElement("span",Object(r.a)({key:t},l({token:e,key:t})))})))})))),a.a.createElement("button",{ref:f,type:"button","aria-label":Object(k.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(c.a)(E.a.copyButton),onClick:U},b?a.a.createElement(k.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(k.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},754:function(e,t,o){"use strict";var r=o(0),n=o.n(r).a.createContext(void 0);t.a=n}}]);