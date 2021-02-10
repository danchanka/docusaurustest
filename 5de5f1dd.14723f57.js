(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{206:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),c=(r(0),r(419)),o={title:"FORM instruction"},s={unversionedId:"FORM_instruction",id:"FORM_instruction",isDocsHomePage:!1,title:"FORM instruction",description:"The FORM\xa0instruction creates a form.",source:"@site/docs\\FORM_instruction.md",slug:"/FORM_instruction",permalink:"/docusaurustest/docs/FORM_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/FORM_instruction.md",version:"current",sidebar:"docs",previous:{title:"CLASS instruction",permalink:"/docusaurustest/docs/CLASS_instruction"},next:{title:"Object blocks",permalink:"/docusaurustest/docs/Object_blocks"}},b=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:b};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"FORM"),"\xa0instruction creates a ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Forms"}),"form"),".\xa0"),Object(c.b)("h3",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"FORM name [caption] formOptions\n    formBlock1\n    ...\n    formBlockN\n;\n")),Object(c.b)("p",null,"After specifying the form name and caption, form options ",Object(c.b)("em",{parentName:"p"},"formOptions:\xa0")," are specified in an arbitrary order"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"IMAGE path\xa0\nAUTOREFRESH period\xa0\n")),Object(c.b)("p",null,"After the form options, the blocks of the form ",Object(c.b)("em",{parentName:"p"},"formBlock1 ... are described in the arbitrary order. formBlockN"),":\xa0"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"OBJECTS ...\xa0\nTREE ...\nPROPERTIES ...\nFILTERS ...\n[EXTEND] FILTERGROUP ...\nORDER ...\nEVENTS ...\nREPORT propertyExpression\nFORMEXTID extID\nEDIT className OBJECT objectName\nLIST className OBJECT objectName \n")),Object(c.b)("h3",{id:"description"},"Description"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"FORM")," instruction declares a new form and adds it to the current ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Modules"}),"module"),". In addition, this instruction\xa0is used to\xa0describe ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Form_structure"}),"the form structure"),", as well as its ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Static_view"}),"static")," and partially ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Interactive_view"}),"interactive")," (except ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Form_design"}),"form design"),") views. At the beginning of the instruction, name and captions are specified, followed by form options and the declaration containing an arbitrary number of blocks describing the structure of the form. They can be used in any order, provided that each block is declared after the blocks whose elements it uses. Each block can be used any number of times."),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"name")),Object(c.b)("p",null,"Form name. ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#id-broken"}),"Simple ID"),".\xa0The name must be unique within the current\xa0",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Naming#namespaces"}),"namespace"),"."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"caption")),Object(c.b)("p",null,"Form caption. ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#strliteral-broken"}),"String literal"),".\xa0If the caption is not defined, the form's name will be its caption."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"*Form options")," (formOptions)*"),Object(c.b)("p",null,"IMAGE path"),Object(c.b)("p",null,"The relative path to the file with the image that will be used as the form icon.\xa0"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"path")," - path to the file. String literal.\xa0The path is relative to the\xa0 ",Object(c.b)("strong",{parentName:"p"},"images")," directory."),Object(c.b)("p",null,"AUTOREFRESH period"),Object(c.b)("p",null,"Specifying the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Interactive_view#additional-features"}),"automatic form update")," period.\xa0If the option is not specified, the form will not be updated automatically."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"period")," - a period of time in seconds.\xa0",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#intliteral-broken"}),"Integral literal"),".\xa0"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"*Form blocks")," (",Object(c.b)("em",{parentName:"p"},"formBlock1 ... formBlockN"),")*"),Object(c.b)("p",null,"OBJECTS ..."),Object(c.b)("p",null,"Adds objects to the form. ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Object_blocks"}),"Object block syntax")," ."),Object(c.b)("p",null,"TREE ..."),Object(c.b)("p",null,"Adds an object tree to the form. ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Object_blocks#object-tree-block"}),"Syntax of the object tree block"),"."),Object(c.b)("p",null,"PROPERTIES ..."),Object(c.b)("p",null,"Adds ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Properties"}),"properties")," and ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"actions")," to the form. ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Properties_and_actions_block"}),"Syntax of the property and action block"),"."),Object(c.b)("p",null,"FILTERS ..."),Object(c.b)("p",null,"Adds fixed filters to the form. ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Filters_and_sortings_block#fixedfilters-broken"}),"Syntax of the fixed filters block"),"."),Object(c.b)("p",null,"[","EXTEND","]","\xa0FILTERGROUP ..."),Object(c.b)("p",null,"Adds a group of filters to the form or extends an existing one.\xa0",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Filters_and_sortings_block#filter-group-block"}),"Syntax of a filter group block"),"."),Object(c.b)("p",null,"ORDER ..."),Object(c.b)("p",null,"Adds sorting options to the form.\xa0",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Filters_and_sortings_block#order-block"}),"Syntax of the order block"),"."),Object(c.b)("p",null,"EVENTS ..."),Object(c.b)("p",null,"Defines actions that are executed on specific events. ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Event_block#events-broken"}),"Syntax of the event block"),Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Event_block"}),".")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"FORMEXTID extID")),Object(c.b)("p",null,"Specifying the name to be used\xa0to\xa0",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Structured_view#exportimport-name"}),"export/import"),"\xa0this form. Used only\xa0in\xa0the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Structured_view"}),"structured"),"\xa0view."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"extId")),Object(c.b)("p",null,"String\xa0literal."),Object(c.b)("p",null,"REPORT propertyExpression"),Object(c.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Specifying the property whose value will be used as the name of the report\xa0file for an empty group. You can use the names of already declared objects on the form as parameters. It is assumed that the values of these objects will be passed when the form is opened in the print view (if it doesn't happen, they will be considered equal to NULL)."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"propertyExpression")),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"Expression"),"."),Object(c.b)("p",null,"EDIT \u0441lassName OBJECT objectName"),Object(c.b)("p",null,"Sets the current form as the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Interactive_view#selectionediting-forms"}),"edit")," form for all objects of the specified class."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"className")," \u2013 the name of the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/User_classes"}),"custom"),"\xa0. When editing objects of this class, the created form will be opened. Defined with a ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#cid-broken"}),"composite ID"),"."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"objectName")," \u2013 the name of the form object that will be used for editing.\xa0Defined with a ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#id-broken"}),"simple ID"),"."),Object(c.b)("p",null,"LIST \u0441lassName OBJECT objectName"),Object(c.b)("p",null,"Sets the current form as the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Interactive_view#selectionediting-forms"}),"list form")," for the object of the specified class.\xa0"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"className"),"\xa0\u2013 the name of the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/User_classes"}),"custom"),"\xa0class whose objects will be listed using the created form. Defined with\xa0a composite ID."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"objectName"),"\xa0\u2013 the name of the form object whose current value will be used as the object being selected.\xa0Defined with a simple ID."),Object(c.b)("h3",{id:"examples"},"Examples"))}p.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(o,".").concat(d)]||u[d]||l[d]||c;return r?n.a.createElement(m,s(s({ref:t},i),{},{components:r})):n.a.createElement(m,s({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var s={};for(var b in t)hasOwnProperty.call(t,b)&&(s[b]=t[b]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<c;i++)o[i]=r[i];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);