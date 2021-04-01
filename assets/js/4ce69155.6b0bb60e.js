(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{287:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(749)),c={title:"FORM instruction: Overview",sidebar_label:"Overview"},s={unversionedId:"FORM_instruction",id:"FORM_instruction",isDocsHomePage:!1,title:"FORM instruction: Overview",description:"The FORM\xa0instruction creates a form.",source:"@site/docs/FORM_instruction.md",slug:"/FORM_instruction",permalink:"/docusaurustest/docs/next/FORM_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/FORM_instruction.md",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"CLASS instruction",permalink:"/docusaurustest/docs/next/CLASS_instruction"},next:{title:"Object blocks",permalink:"/docusaurustest/docs/next/Object_blocks"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"FORM"),"\xa0instruction creates a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Forms"},"form"),".\xa0"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"FORM name [caption] formOptions\n    formBlock1\n    ...\n    formBlockN\n;\n")),Object(o.b)("p",null,"After specifying the form name and caption, form options ",Object(o.b)("em",{parentName:"p"},"formOptions:\xa0")," are specified in an arbitrary order"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"IMAGE path\xa0\nAUTOREFRESH period\xa0\n")),Object(o.b)("p",null,"After the form options, the blocks of the form ",Object(o.b)("em",{parentName:"p"},"formBlock1 ... are described in the arbitrary order. formBlockN"),":\xa0"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"OBJECTS ...\xa0\nTREE ...\nPROPERTIES ...\nFILTERS ...\n[EXTEND] FILTERGROUP ...\nORDER ...\nEVENTS ...\nREPORT propertyExpression\nFORMEXTID extID\nEDIT className OBJECT objectName\nLIST className OBJECT objectName \n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"FORM")," instruction declares a new form and adds it to the current ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Modules"},"module"),". In addition, this instruction\xa0is used to\xa0describe ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Form_structure"},"the form structure"),", as well as its ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Static_view"},"static")," and partially ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Interactive_view"},"interactive")," (except ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Form_design"},"form design"),") views. At the beginning of the instruction, name and captions are specified, followed by form options and the declaration containing an arbitrary number of blocks describing the structure of the form. They can be used in any order, provided that each block is declared after the blocks whose elements it uses. Each block can be used any number of times."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name")),Object(o.b)("p",null,"Form name. ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#id-broken"},"Simple ID"),".\xa0The name must be unique within the current\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Naming#namespace"},"namespace"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"caption")),Object(o.b)("p",null,"Form caption. ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#strliteral-broken"},"String literal"),".\xa0If the caption is not defined, the form's name will be its caption."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"*Form options")," (formOptions)*"),Object(o.b)("p",null,"IMAGE path"),Object(o.b)("p",null,"The relative path to the file with the image that will be used as the form icon.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"path")," - path to the file. String literal.\xa0The path is relative to the\xa0 ",Object(o.b)("strong",{parentName:"p"},"images")," directory."),Object(o.b)("p",null,"AUTOREFRESH period"),Object(o.b)("p",null,"Specifying the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Interactive_view#extra"},"automatic form update")," period.\xa0If the option is not specified, the form will not be updated automatically."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"period")," - a period of time in seconds.\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#intliteral-broken"},"Integral literal"),".\xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"*Form blocks")," (",Object(o.b)("em",{parentName:"p"},"formBlock1 ... formBlockN"),")*"),Object(o.b)("p",null,"OBJECTS ..."),Object(o.b)("p",null,"Adds objects to the form. ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Object_blocks"},"Object block syntax")," ."),Object(o.b)("p",null,"TREE ..."),Object(o.b)("p",null,"Adds an object tree to the form. ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Object_blocks#tree"},"Syntax of the object tree block"),"."),Object(o.b)("p",null,"PROPERTIES ..."),Object(o.b)("p",null,"Adds ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"properties")," and ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Actions"},"actions")," to the form. ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties_and_actions_block"},"Syntax of the property and action block"),"."),Object(o.b)("p",null,"FILTERS ..."),Object(o.b)("p",null,"Adds fixed filters to the form. ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Filters_and_sortings_block#fixedfilters-broken"},"Syntax of the fixed filters block"),"."),Object(o.b)("p",null,"[","EXTEND","]","\xa0FILTERGROUP ..."),Object(o.b)("p",null,"Adds a group of filters to the form or extends an existing one.\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Filters_and_sortings_block#filtergroup"},"Syntax of a filter group block"),"."),Object(o.b)("p",null,"ORDER ..."),Object(o.b)("p",null,"Adds sorting options to the form.\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Filters_and_sortings_block#sort"},"Syntax of the order block"),"."),Object(o.b)("p",null,"EVENTS ..."),Object(o.b)("p",null,"Defines actions that are executed on specific events. ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Event_block#events-broken"},"Syntax of the event block"),Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Event_block"},".")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"FORMEXTID extID")),Object(o.b)("p",null,"Specifying the name to be used\xa0to\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Structured_view#extid"},"export/import"),"\xa0this form. Used only\xa0in\xa0the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Structured_view"},"structured"),"\xa0view."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"extId")),Object(o.b)("p",null,"String\xa0literal."),Object(o.b)("p",null,"REPORT propertyExpression"),Object(o.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Specifying the property whose value will be used as the name of the report\xa0file for an empty group. You can use the names of already declared objects on the form as parameters. It is assumed that the values of these objects will be passed when the form is opened in the print view (if it doesn't happen, they will be considered equal to NULL)."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyExpression")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Expression"},"Expression"),"."),Object(o.b)("p",null,"EDIT \u0441lassName OBJECT objectName"),Object(o.b)("p",null,"Sets the current form as the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Interactive_view#edtClass"},"edit")," form for all objects of the specified class."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"className")," \u2013 the name of the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/User_classes"},"custom"),"\xa0. When editing objects of this class, the created form will be opened. Defined with a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#cid-broken"},"composite ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"objectName")," \u2013 the name of the form object that will be used for editing.\xa0Defined with a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#id-broken"},"simple ID"),"."),Object(o.b)("p",null,"LIST \u0441lassName OBJECT objectName"),Object(o.b)("p",null,"Sets the current form as the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Interactive_view#edtClass"},"list form")," for the object of the specified class.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"className"),"\xa0\u2013 the name of the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/User_classes"},"custom"),"\xa0class whose objects will be listed using the created form. Defined with\xa0a composite ID."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"objectName"),"\xa0\u2013 the name of the form object whose current value will be used as the object being selected.\xa0Defined with a simple ID."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Document;\n\n// declaring the Documents form\nFORM documents 'Documents'\n    OBJECTS d = Document // Adding one object of the Document class. The object will be available by this name in the DESIGN, SHOW, EXPORT, DIALOG, etc. operators.\n\n\n    // ... adding properties and filters to the form\n\n    LIST Document OBJECT d // marking that this form should be used when it is necessary to select a document, while the d object should be used as a return value\n;\n\nCLASS Item;\n\n// declaring the Product form\nFORM item 'Product'\n    OBJECTS i = Item PANEL // adding an object of the Item class and marking that it should be displayed in the panel (i.e., only one value is visible)\n\n    // ... adding properties and filters to the form\n\n    EDIT Item OBJECT i // marking that this form should be used when it is necessary to add or edit a product\n;\n\n// declaring a form with a list of Products\nFORM items 'Products'\n    OBJECTS i = Item\n\n    // ... adding properties and filters to the form\n\n    PROPERTIES(i) NEWSESSION NEW, EDIT // adding buttons that will create and edit the product using the item form\n;\n\nCLASS Invoice;\nCLASS InvoiceDetail;\n\n// declaring the invoice print form\nFORM printInvoice\n    OBJECTS i = Invoice // adding an object of the invoice class for which printing will be executed\n\n    // ... adding properties and filters to the form\n;\n\n// splitting the form definition into two instructions (the second instruction can be transferred to another module)\nEXTEND FORM printInvoice\n    OBJECTS d = InvoiceDetail // adding invoice lines, each of which will be used in the report as a detail\n\n    // ... adding properties and filters to the form\n;\nprint (Invoice invoice)  { PRINT printInvoice OBJECTS i = invoice; } // declaring an action that will open the invoice print form\n")))}l.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?a.a.createElement(m,s(s({ref:t},b),{},{components:n})):a.a.createElement(m,s({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);