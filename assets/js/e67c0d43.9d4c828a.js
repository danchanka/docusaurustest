(window.webpackJsonp=window.webpackJsonp||[]).push([[616,436],{57:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return l})),a.d(t,"CodeSample",(function(){return u})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),o=a(0),s=a.n(o),p=a(750),i=a(751),c={},b={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},l=[],u=function(e){var t=e.url,a=e.lines,n=Object(o.useState)(""),r=n[0],c=n[1];return Object(o.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return c(e)}))}),[t,c]),r?a?Object(p.b)(s.a.Fragment,null,Object(p.b)(i.a,{className:"lsf",metastring:a,mdxType:"CodeBlock"},r),Object(p.b)("br",null)):Object(p.b)(s.a.Fragment,null,Object(p.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(p.b)("br",null)):Object(p.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:l,CodeSample:u};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},687:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),o=(a(0),a(750)),s=a(57),p={title:"Property options"},i={unversionedId:"Property_options",id:"Property_options",isDocsHomePage:!1,title:"Property options",description:"When a property is declared in the = instruction a set of property options can be specified at the end of the declaration",source:"@site/docs/Property_options.md",slug:"/Property_options",permalink:"/docusaurustest/docs/next/Property_options",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Property_options.md",version:"current",sidebar:"docs",previous:{title:"Comparison operators",permalink:"/docusaurustest/docs/next/Comparison_operators"},next:{title:"ACTION instruction: Overview",permalink:"/docusaurustest/docs/next/ACTION_instruction"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Description and parameters",id:"description-and-parameters",children:[]},{value:"<em>Interactive view block</em>",id:"interactive-view-block",children:[]},{value:"<em>DESIGN instruction default values block</em>",id:"design-instruction-default-values-block",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"property")," is declared in the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Instruction_="},"= instruction")," a set of ",Object(o.b)("em",{parentName:"p"},"property options")," can be specified at the end of the declaration\xa0"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("p",null,"Options are listed one after another in arbitrary order, separated by spaces or line feeds:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"propertyOption1 ... propertyOptionN\n")),Object(o.b)("p",null,"The following set of options is supported (the syntax of each option is indicated on a separate line):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"IN groupName\nviewType\nON eventType { actionOperator }\nEDITKEY key [SHOW | HIDE]\nMATERIALIZED\nTABLE tableName\nINDEXED\nNONULL [DELETE] eventClause\nAUTOSET\nCHARWIDTH width [FLEX | NOFLEX]\nREGEXP rexpr [message] \nECHO\nDEFAULTCOMPARE [compare]\n")),Object(o.b)("h3",{id:"description-and-parameters"},"Description and parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"IN groupName")),Object(o.b)("p",null,"Specifying the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Groups_of_properties_and_actions"},"group of properties and actions")," to which the property belongs. If the option is not specified, then the property will belong by default to the group ",Object(o.b)("strong",{parentName:"p"},"System.private"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"groupName -")," group name. ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#cid-broken"},"Compound ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"MATERIALIZED")),Object(o.b)("p",null,"Keyword marking the property as ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Materializations"},"materialized"),". These properties will be stored in the database's ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Tables"},"table")," fields."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"TABLE tableName")),Object(o.b)("p",null,"Specifies the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Tables"},"table"),' where the property will be stored. The number of table keys must be equal to the number of property arguments, and the argument classes must match the table key classes. If no table is specified, the property will automatically be placed in the "nearest" existing table in the system.'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"tableName")," - table name. Composite ID.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"INDEXED")),Object(o.b)("p",null,"Keyword. If specified, an ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Indexes"},"index")," by this property is created. Similar to using the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/INDEX_instruction"},Object(o.b)("strong",{parentName:"a"},"INDEX")," instruction"),".\xa0**\xa0**"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NONULL\xa0","[","DELETE","]"," eventClause")),Object(o.b)("p",null,"Adds a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Simple_constraints"},"definiteness")," constraint. If this constraint is violated as a result of some changes for some objects, either the corresponding message will be displayed, or, if ",Object(o.b)("strong",{parentName:"p"},"DELETE")," is specified, such objects will be deleted."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"DELETE")),Object(o.b)("p",null,"Keyword that, if specified, then when the property becomes ",Object(o.b)("strong",{parentName:"p"},"NULL"),", objects that are property arguments will be deleted."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventClause")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Event_description_block"},"Event type description block"),". Describes the event by which the property will be checked for ",Object(o.b)("strong",{parentName:"p"},"NULL"),"."),Object(o.b)("h3",{id:"interactive-view-block"},Object(o.b)("em",{parentName:"h3"},"Interactive view block")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"viewType")),Object(o.b)("p",null,"Specifying the type of ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Interactive_view#property"},"property view")," when added to the form."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"GRID"),"\xa0- table column"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"TOOLBAR"),"\xa0- toolbar"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"PANEL"),"\xa0- panel")),Object(o.b)("p",null,"It is similar to specifying the viewType option in the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties_and_actions_block"},"property block")," of the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/FORM_instruction"},Object(o.b)("strong",{parentName:"a"},"FORM"),"instruction"),". Thus, if this option is not specified either in the property options or in the property block directly on the form, the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Interactive_view#defaultPropertyView-broken"},"default view")," of the property display group on the form is used."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ON eventType { actionOperator\xa0}")),Object(o.b)("p",null,"Specifying an action that will be the default handler of a certain\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Form_events"},"form event"),"\xa0for all the interactive views of this property. Can be overridden in the property block of the ",Object(o.b)("strong",{parentName:"p"},"FORM"),"instruction."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventType")),Object(o.b)("p",null,"Type of form event. Specified by one of the following options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CHANGE")," - occurs when the user tries to change the value of a property."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CHANGEWYS")," -**\xa0**occurs\xa0when the user tries to change the value of the specified property using a special input mechanism.\xa0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"GROUPCHANGE")," - occurs when the user tries to change the property value for all objects in the table (group editing). \xa0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"EDIT")," - occurs when the user tries to edit the object that is the value of the specified property.\xa0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CONTEXTMENU\xa0"),"[","caption","]","\xa0- the user has selected the specified item in the property context menu on the form.\xa0If necessary, you can also define the caption of this menu item (",Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/next/Literals#strliteral-broken"},"string literal"),"). If it is not specified, then, by default, it will be the same as the action caption.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionOperator")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Action_operator#contextdependent"},"Context-dependent action operator"),". An operator that defines the action executed on an event. You can use the parameters of the property itself as operator parameters."),Object(o.b)("h3",{id:"design-instruction-default-values-block"},Object(o.b)("em",{parentName:"h3"},"DESIGN instruction default values block")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CHARWIDTH\xa0width\xa0"),"[","FLEX | NOFLEX","]"),Object(o.b)("p",null,"Specifying the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Form_design#valueWidth-broken"},"number of characters"),"\xa0of the property value that should be visible to the user.\xa0Sets the value for the default design\xa0; can be overridden in\xa0a ",Object(o.b)("strong",{parentName:"p"},"DESIGN")," instruction."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"width")),Object(o.b)("p",null,"Number of characters.\xa0Integer literal.\xa0"),Object(o.b)("p",null,"*",Object(o.b)("em",{parentName:"p"},"FLEX"),"  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"})),Object(o.b)("p",null,"Keyword. If specified, the extension coefficient of the property value is automatically set equal to its base size."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOFLEX")),Object(o.b)("p",null,"Keyword. If specified, the extension coefficient of the property value is automatically set equal to zero."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"REGEXP rexpr\xa0","[","message","]")),Object(o.b)("p",null,"Specifying a regular expression to which the property value should correspond after editing. Sets the value for the default design and can be overridden in the ",Object(o.b)("strong",{parentName:"p"},"DESIGN")," instruction."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"rexpr")),Object(o.b)("p",null,"A string literal that describes the regular expression. Rules are similar to the rules ",Object(o.b)("a",{parentName:"p",href:"http://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html"},"accepted in Java")," ."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"message")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"S"),"tring literal describing the message that will be shown to the user if they enter a value that does not match the regular expression. If not specified, a default message will be displayed."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ECHO")),Object(o.b)("p",null,"A keyword that causes asterisk (","*",") characters to be displayed instead of a property value.\xa0Used, for example, for passwords. Can be overridden in the ",Object(o.b)("strong",{parentName:"p"},"DESIGN")," instruction.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CHANGEKEY key ","[","SHOW\xa0|\xa0HIDE","]","\xa0")),Object(o.b)("p",null,"Specifies a\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Form_events#keyboard-broken"},"key combination")," which triggers editing of this property. Sets the value for the default design and can be overridden in the ",Object(o.b)("strong",{parentName:"p"},"DESIGN")," instruction."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"key")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Literals#strliteral-broken"},"String literal")," describing the key combination ",Object(o.b)("em",{parentName:"p"},".\xa0")," The method of specifying is similar to the method of specifying a parameter in the Java class\xa0method ",Object(o.b)("a",{parentName:"p",href:"http://docs.oracle.com/javase/7/docs/api/javax/swing/KeyStroke.html#getKeyStroke(java.lang.String)"},"Keystroke.getKeystroke (String)"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"SHOW")),Object(o.b)("p",null,"Keyword. When specified, the key combination will be displayed in the property caption. Used by default."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HIDE")),Object(o.b)("p",null,"Keyword. When specified, the key combination will not be displayed in the property caption.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"DEFAULTCOMPARE")),Object(o.b)("p",null,"Specifies a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Interactive_view#userfilters"},"default filter")," type for the property."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"compare")),Object(o.b)("p",null,"Default filter type. ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Literals#strliteral-broken"},"String literal"),". Can be one the following values: '=', '",">","', '<', '",">","=',\xa0'<=',\xa0'!=', 'START","_","WITH', 'CONTAINS', 'ENDS","_","WITH', 'LIKE'. The default value is '=' **\xa0",Object(o.b)("strong",{parentName:"p"}," for all data types except case-insensitive string types, for which the default value is 'CONTAINS'"),".\xa0",Object(o.b)("strong",{parentName:"p"}," If "),"System.defaultCompareForStringContains\xa0",Object(o.b)("strong",{parentName:"p"}," is enabled,\xa0default value is 'CONTAINS'"),"\xa0",Object(o.b)("strong",{parentName:"p"},"for all string data regardless of case sensitivity.\xa0Can be overridden in the "),"DESIGN** instruction."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=PropertySample",mdxType:"CodeSample"}))}l.isMDXComponent=!0}}]);