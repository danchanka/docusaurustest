(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{189:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var a=r(3),s=r(7),o=(r(0),r(423)),n=r(57),c={title:"FORM instruction"},b={unversionedId:"FORM_instruction",id:"FORM_instruction",isDocsHomePage:!1,title:"FORM instruction",description:"The FORM\xa0instruction creates a form.",source:"@site/docs/FORM_instruction.md",slug:"/FORM_instruction",permalink:"/docusaurustest/docs/FORM_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/FORM_instruction.md",version:"current",sidebar:"docs",previous:{title:"CLASS instruction",permalink:"/docusaurustest/docs/CLASS_instruction"},next:{title:"Object blocks",permalink:"/docusaurustest/docs/Object_blocks"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:i};function l(e){var t=e.components,r=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"FORM"),"\xa0instruction creates a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Forms"},"form"),".\xa0"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"FORM name [caption] formOptions\n    formBlock1\n    ...\n    formBlockN\n;\n")),Object(o.b)("p",null,"After specifying the form name and caption, form options ",Object(o.b)("em",{parentName:"p"},"formOptions:\xa0")," are specified in an arbitrary order"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"IMAGE path\xa0\nAUTOREFRESH period\xa0\n")),Object(o.b)("p",null,"After the form options, the blocks of the form ",Object(o.b)("em",{parentName:"p"},"formBlock1 ... are described in the arbitrary order. formBlockN"),":\xa0"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"OBJECTS ...\xa0\nTREE ...\nPROPERTIES ...\nFILTERS ...\n[EXTEND] FILTERGROUP ...\nORDER ...\nEVENTS ...\nREPORT propertyExpression\nFORMEXTID extID\nEDIT className OBJECT objectName\nLIST className OBJECT objectName \n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"FORM")," instruction declares a new form and adds it to the current ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Modules"},"module"),". In addition, this instruction\xa0is used to\xa0describe ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Form_structure"},"the form structure"),", as well as its ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Static_view"},"static")," and partially ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Interactive_view"},"interactive")," (except ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Form_design"},"form design"),") views. At the beginning of the instruction, name and captions are specified, followed by form options and the declaration containing an arbitrary number of blocks describing the structure of the form. They can be used in any order, provided that each block is declared after the blocks whose elements it uses. Each block can be used any number of times."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name")),Object(o.b)("p",null,"Form name. ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#id-broken"},"Simple ID"),".\xa0The name must be unique within the current\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Naming#namespaces"},"namespace"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"caption")),Object(o.b)("p",null,"Form caption. ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#strliteral-broken"},"String literal"),".\xa0If the caption is not defined, the form's name will be its caption."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"*Form options")," (formOptions)*"),Object(o.b)("p",null,"IMAGE path"),Object(o.b)("p",null,"The relative path to the file with the image that will be used as the form icon.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"path")," - path to the file. String literal.\xa0The path is relative to the\xa0 ",Object(o.b)("strong",{parentName:"p"},"images")," directory."),Object(o.b)("p",null,"AUTOREFRESH period"),Object(o.b)("p",null,"Specifying the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Interactive_view#additional-features"},"automatic form update")," period.\xa0If the option is not specified, the form will not be updated automatically."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"period")," - a period of time in seconds.\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#intliteral-broken"},"Integral literal"),".\xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"*Form blocks")," (",Object(o.b)("em",{parentName:"p"},"formBlock1 ... formBlockN"),")*"),Object(o.b)("p",null,"OBJECTS ..."),Object(o.b)("p",null,"Adds objects to the form. ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Object_blocks"},"Object block syntax")," ."),Object(o.b)("p",null,"TREE ..."),Object(o.b)("p",null,"Adds an object tree to the form. ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Object_blocks#object-tree-block"},"Syntax of the object tree block"),"."),Object(o.b)("p",null,"PROPERTIES ..."),Object(o.b)("p",null,"Adds ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Properties"},"properties")," and ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"actions")," to the form. ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Properties_and_actions_block"},"Syntax of the property and action block"),"."),Object(o.b)("p",null,"FILTERS ..."),Object(o.b)("p",null,"Adds fixed filters to the form. ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Filters_and_sortings_block#fixedfilters-broken"},"Syntax of the fixed filters block"),"."),Object(o.b)("p",null,"[","EXTEND","]","\xa0FILTERGROUP ..."),Object(o.b)("p",null,"Adds a group of filters to the form or extends an existing one.\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Filters_and_sortings_block#filter-group-block"},"Syntax of a filter group block"),"."),Object(o.b)("p",null,"ORDER ..."),Object(o.b)("p",null,"Adds sorting options to the form.\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Filters_and_sortings_block#order-block"},"Syntax of the order block"),"."),Object(o.b)("p",null,"EVENTS ..."),Object(o.b)("p",null,"Defines actions that are executed on specific events. ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Event_block#events-broken"},"Syntax of the event block"),Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Event_block"},".")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"FORMEXTID extID")),Object(o.b)("p",null,"Specifying the name to be used\xa0to\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Structured_view#exportimport-name"},"export/import"),"\xa0this form. Used only\xa0in\xa0the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Structured_view"},"structured"),"\xa0view."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"extId")),Object(o.b)("p",null,"String\xa0literal."),Object(o.b)("p",null,"REPORT propertyExpression"),Object(o.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Specifying the property whose value will be used as the name of the report\xa0file for an empty group. You can use the names of already declared objects on the form as parameters. It is assumed that the values of these objects will be passed when the form is opened in the print view (if it doesn't happen, they will be considered equal to NULL)."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyExpression")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Expression"},"Expression"),"."),Object(o.b)("p",null,"EDIT \u0441lassName OBJECT objectName"),Object(o.b)("p",null,"Sets the current form as the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Interactive_view#selectionediting-forms"},"edit")," form for all objects of the specified class."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"className")," \u2013 the name of the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/User_classes"},"custom"),"\xa0. When editing objects of this class, the created form will be opened. Defined with a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#cid-broken"},"composite ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"objectName")," \u2013 the name of the form object that will be used for editing.\xa0Defined with a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#id-broken"},"simple ID"),"."),Object(o.b)("p",null,"LIST \u0441lassName OBJECT objectName"),Object(o.b)("p",null,"Sets the current form as the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Interactive_view#selectionediting-forms"},"list form")," for the object of the specified class.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"className"),"\xa0\u2013 the name of the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/User_classes"},"custom"),"\xa0class whose objects will be listed using the created form. Defined with\xa0a composite ID."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"objectName"),"\xa0\u2013 the name of the form object whose current value will be used as the object being selected.\xa0Defined with a simple ID."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(n.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=FormSample&block=form",mdxType:"CodeSample"}))}l.isMDXComponent=!0}}]);