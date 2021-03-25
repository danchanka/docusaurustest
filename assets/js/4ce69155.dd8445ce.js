(window.webpackJsonp=window.webpackJsonp||[]).push([[215,436],{289:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),s=(n(0),n(750)),o=n(57),c={title:"FORM instruction: Overview",sidebar_label:"Overview"},b={unversionedId:"FORM_instruction",id:"FORM_instruction",isDocsHomePage:!1,title:"FORM instruction: Overview",description:"The FORM\xa0instruction creates a form.",source:"@site/docs/FORM_instruction.md",slug:"/FORM_instruction",permalink:"/docusaurustest/docs/next/FORM_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/FORM_instruction.md",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"CLASS instruction",permalink:"/docusaurustest/docs/next/CLASS_instruction"},next:{title:"Object blocks",permalink:"/docusaurustest/docs/next/Object_blocks"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The ",Object(s.b)("strong",{parentName:"p"},"FORM"),"\xa0instruction creates a ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Forms"},"form"),".\xa0"),Object(s.b)("h3",{id:"syntax"},"Syntax"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"FORM name [caption] formOptions\n    formBlock1\n    ...\n    formBlockN\n;\n")),Object(s.b)("p",null,"After specifying the form name and caption, form options ",Object(s.b)("em",{parentName:"p"},"formOptions:\xa0")," are specified in an arbitrary order"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"IMAGE path\xa0\nAUTOREFRESH period\xa0\n")),Object(s.b)("p",null,"After the form options, the blocks of the form ",Object(s.b)("em",{parentName:"p"},"formBlock1 ... are described in the arbitrary order. formBlockN"),":\xa0"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"OBJECTS ...\xa0\nTREE ...\nPROPERTIES ...\nFILTERS ...\n[EXTEND] FILTERGROUP ...\nORDER ...\nEVENTS ...\nREPORT propertyExpression\nFORMEXTID extID\nEDIT className OBJECT objectName\nLIST className OBJECT objectName \n")),Object(s.b)("h3",{id:"description"},"Description"),Object(s.b)("p",null,"The ",Object(s.b)("strong",{parentName:"p"},"FORM")," instruction declares a new form and adds it to the current ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Modules"},"module"),". In addition, this instruction\xa0is used to\xa0describe ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Form_structure"},"the form structure"),", as well as its ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Static_view"},"static")," and partially ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Interactive_view"},"interactive")," (except ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Form_design"},"form design"),") views. At the beginning of the instruction, name and captions are specified, followed by form options and the declaration containing an arbitrary number of blocks describing the structure of the form. They can be used in any order, provided that each block is declared after the blocks whose elements it uses. Each block can be used any number of times."),Object(s.b)("h3",{id:"parameters"},"Parameters"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"name")),Object(s.b)("p",null,"Form name. ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#id-broken"},"Simple ID"),".\xa0The name must be unique within the current\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Naming#namespace"},"namespace"),"."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"caption")),Object(s.b)("p",null,"Form caption. ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#strliteral-broken"},"String literal"),".\xa0If the caption is not defined, the form's name will be its caption."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"*Form options")," (formOptions)*"),Object(s.b)("p",null,"IMAGE path"),Object(s.b)("p",null,"The relative path to the file with the image that will be used as the form icon.\xa0"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"path")," - path to the file. String literal.\xa0The path is relative to the\xa0 ",Object(s.b)("strong",{parentName:"p"},"images")," directory."),Object(s.b)("p",null,"AUTOREFRESH period"),Object(s.b)("p",null,"Specifying the ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Interactive_view#extra"},"automatic form update")," period.\xa0If the option is not specified, the form will not be updated automatically."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"period")," - a period of time in seconds.\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#intliteral-broken"},"Integral literal"),".\xa0"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"*Form blocks")," (",Object(s.b)("em",{parentName:"p"},"formBlock1 ... formBlockN"),")*"),Object(s.b)("p",null,"OBJECTS ..."),Object(s.b)("p",null,"Adds objects to the form. ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Object_blocks"},"Object block syntax")," ."),Object(s.b)("p",null,"TREE ..."),Object(s.b)("p",null,"Adds an object tree to the form. ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Object_blocks#tree"},"Syntax of the object tree block"),"."),Object(s.b)("p",null,"PROPERTIES ..."),Object(s.b)("p",null,"Adds ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"properties")," and ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Actions"},"actions")," to the form. ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties_and_actions_block"},"Syntax of the property and action block"),"."),Object(s.b)("p",null,"FILTERS ..."),Object(s.b)("p",null,"Adds fixed filters to the form. ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Filters_and_sortings_block#fixedfilters-broken"},"Syntax of the fixed filters block"),"."),Object(s.b)("p",null,"[","EXTEND","]","\xa0FILTERGROUP ..."),Object(s.b)("p",null,"Adds a group of filters to the form or extends an existing one.\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Filters_and_sortings_block#filtergroup"},"Syntax of a filter group block"),"."),Object(s.b)("p",null,"ORDER ..."),Object(s.b)("p",null,"Adds sorting options to the form.\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Filters_and_sortings_block#sort"},"Syntax of the order block"),"."),Object(s.b)("p",null,"EVENTS ..."),Object(s.b)("p",null,"Defines actions that are executed on specific events. ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Event_block#events-broken"},"Syntax of the event block"),Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Event_block"},".")),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"FORMEXTID extID")),Object(s.b)("p",null,"Specifying the name to be used\xa0to\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Structured_view#extid"},"export/import"),"\xa0this form. Used only\xa0in\xa0the ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Structured_view"},"structured"),"\xa0view."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"extId")),Object(s.b)("p",null,"String\xa0literal."),Object(s.b)("p",null,"REPORT propertyExpression"),Object(s.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Specifying the property whose value will be used as the name of the report\xa0file for an empty group. You can use the names of already declared objects on the form as parameters. It is assumed that the values of these objects will be passed when the form is opened in the print view (if it doesn't happen, they will be considered equal to NULL)."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"propertyExpression")),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Expression"},"Expression"),"."),Object(s.b)("p",null,"EDIT \u0441lassName OBJECT objectName"),Object(s.b)("p",null,"Sets the current form as the ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Interactive_view#edtClass"},"edit")," form for all objects of the specified class."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"className")," \u2013 the name of the ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/User_classes"},"custom"),"\xa0. When editing objects of this class, the created form will be opened. Defined with a ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#cid-broken"},"composite ID"),"."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"objectName")," \u2013 the name of the form object that will be used for editing.\xa0Defined with a ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#id-broken"},"simple ID"),"."),Object(s.b)("p",null,"LIST \u0441lassName OBJECT objectName"),Object(s.b)("p",null,"Sets the current form as the ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Interactive_view#edtClass"},"list form")," for the object of the specified class.\xa0"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"className"),"\xa0\u2013 the name of the ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/User_classes"},"custom"),"\xa0class whose objects will be listed using the created form. Defined with\xa0a composite ID."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"objectName"),"\xa0\u2013 the name of the form object whose current value will be used as the object being selected.\xa0Defined with a simple ID."),Object(s.b)("h3",{id:"examples"},"Examples"),Object(s.b)(o.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=FormSample&block=form",mdxType:"CodeSample"}))}u.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),s=n(0),o=n.n(s),c=n(750),b=n(751),i={},p={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},u=[],l=function(e){var t=e.url,n=e.lines,a=Object(s.useState)(""),r=a[0],i=a[1];return Object(s.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return i(e)}))}),[t,i]),r?n?Object(c.b)(o.a.Fragment,null,Object(c.b)(b.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},r),Object(c.b)("br",null)):Object(c.b)(o.a.Fragment,null,Object(c.b)(b.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(c.b)("br",null)):Object(c.b)(b.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:u,CodeSample:l};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0}}]);