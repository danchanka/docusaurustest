(window.webpackJsonp=window.webpackJsonp||[]).push([[615],{686:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(749)),p={title:"Property options"},i={unversionedId:"Property_options",id:"Property_options",isDocsHomePage:!1,title:"Property options",description:"When a property is declared in the = instruction a set of property options can be specified at the end of the declaration",source:"@site/docs/Property_options.md",slug:"/Property_options",permalink:"/docusaurustest/docs/next/Property_options",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Property_options.md",version:"current",sidebar:"docs",previous:{title:"Comparison operators",permalink:"/docusaurustest/docs/next/Comparison_operators"},next:{title:"ACTION instruction: Overview",permalink:"/docusaurustest/docs/next/ACTION_instruction"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description and parameters",id:"description-and-parameters",children:[]},{value:"<em>Interactive view block</em>",id:"interactive-view-block",children:[]},{value:"<em>DESIGN instruction default values block</em>",id:"design-instruction-default-values-block",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:s};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"property")," is declared in the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Instruction_="},"= instruction")," a set of ",Object(o.b)("em",{parentName:"p"},"property options")," can be specified at the end of the declaration\xa0"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("p",null,"Options are listed one after another in arbitrary order, separated by spaces or line feeds:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"propertyOption1 ... propertyOptionN\n")),Object(o.b)("p",null,"The following set of options is supported (the syntax of each option is indicated on a separate line):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"IN groupName\nviewType\nON eventType { actionOperator }\nEDITKEY key [SHOW | HIDE]\nMATERIALIZED\nTABLE tableName\nINDEXED\nNONULL [DELETE] eventClause\nAUTOSET\nCHARWIDTH width [FLEX | NOFLEX]\nREGEXP rexpr [message] \nECHO\nDEFAULTCOMPARE [compare]\n")),Object(o.b)("h3",{id:"description-and-parameters"},"Description and parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"IN groupName")),Object(o.b)("p",null,"Specifying the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Groups_of_properties_and_actions"},"group of properties and actions")," to which the property belongs. If the option is not specified, then the property will belong by default to the group ",Object(o.b)("strong",{parentName:"p"},"System.private"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"groupName -")," group name. ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#cid-broken"},"Compound ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"MATERIALIZED")),Object(o.b)("p",null,"Keyword marking the property as ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Materializations"},"materialized"),". These properties will be stored in the database's ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Tables"},"table")," fields."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"TABLE tableName")),Object(o.b)("p",null,"Specifies the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Tables"},"table"),' where the property will be stored. The number of table keys must be equal to the number of property arguments, and the argument classes must match the table key classes. If no table is specified, the property will automatically be placed in the "nearest" existing table in the system.'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"tableName")," - table name. Composite ID.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"INDEXED")),Object(o.b)("p",null,"Keyword. If specified, an ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Indexes"},"index")," by this property is created. Similar to using the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/INDEX_instruction"},Object(o.b)("strong",{parentName:"a"},"INDEX")," instruction"),".\xa0**\xa0**"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NONULL\xa0","[","DELETE","]"," eventClause")),Object(o.b)("p",null,"Adds a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Simple_constraints"},"definiteness")," constraint. If this constraint is violated as a result of some changes for some objects, either the corresponding message will be displayed, or, if ",Object(o.b)("strong",{parentName:"p"},"DELETE")," is specified, such objects will be deleted."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"DELETE")),Object(o.b)("p",null,"Keyword that, if specified, then when the property becomes ",Object(o.b)("strong",{parentName:"p"},"NULL"),", objects that are property arguments will be deleted."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventClause")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Event_description_block"},"Event type description block"),". Describes the event by which the property will be checked for ",Object(o.b)("strong",{parentName:"p"},"NULL"),"."),Object(o.b)("h3",{id:"interactive-view-block"},Object(o.b)("em",{parentName:"h3"},"Interactive view block")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"viewType")),Object(o.b)("p",null,"Specifying the type of ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Interactive_view#property"},"property view")," when added to the form."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"GRID"),"\xa0- table column"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"TOOLBAR"),"\xa0- toolbar"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"PANEL"),"\xa0- panel")),Object(o.b)("p",null,"It is similar to specifying the viewType option in the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties_and_actions_block"},"property block")," of the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/FORM_instruction"},Object(o.b)("strong",{parentName:"a"},"FORM"),"instruction"),". Thus, if this option is not specified either in the property options or in the property block directly on the form, the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Interactive_view#defaultPropertyView-broken"},"default view")," of the property display group on the form is used."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ON eventType { actionOperator\xa0}")),Object(o.b)("p",null,"Specifying an action that will be the default handler of a certain\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Form_events"},"form event"),"\xa0for all the interactive views of this property. Can be overridden in the property block of the ",Object(o.b)("strong",{parentName:"p"},"FORM"),"instruction."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventType")),Object(o.b)("p",null,"Type of form event. Specified by one of the following options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CHANGE")," - occurs when the user tries to change the value of a property."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CHANGEWYS")," -**\xa0**occurs\xa0when the user tries to change the value of the specified property using a special input mechanism.\xa0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"GROUPCHANGE")," - occurs when the user tries to change the property value for all objects in the table (group editing). \xa0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"EDIT")," - occurs when the user tries to edit the object that is the value of the specified property.\xa0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CONTEXTMENU\xa0"),"[","caption","]","\xa0- the user has selected the specified item in the property context menu on the form.\xa0If necessary, you can also define the caption of this menu item (",Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/next/Literals#strliteral-broken"},"string literal"),"). If it is not specified, then, by default, it will be the same as the action caption.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionOperator")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Action_operator#contextdependent"},"Context-dependent action operator"),". An operator that defines the action executed on an event. You can use the parameters of the property itself as operator parameters."),Object(o.b)("h3",{id:"design-instruction-default-values-block"},Object(o.b)("em",{parentName:"h3"},"DESIGN instruction default values block")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CHARWIDTH\xa0width\xa0"),"[","FLEX | NOFLEX","]"),Object(o.b)("p",null,"Specifying the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Form_design#valueWidth-broken"},"number of characters"),"\xa0of the property value that should be visible to the user.\xa0Sets the value for the default design\xa0; can be overridden in\xa0a ",Object(o.b)("strong",{parentName:"p"},"DESIGN")," instruction."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"width")),Object(o.b)("p",null,"Number of characters.\xa0Integer literal.\xa0"),Object(o.b)("p",null,"*",Object(o.b)("em",{parentName:"p"},"FLEX"),"  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"})),Object(o.b)("p",null,"Keyword. If specified, the extension coefficient of the property value is automatically set equal to its base size."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOFLEX")),Object(o.b)("p",null,"Keyword. If specified, the extension coefficient of the property value is automatically set equal to zero."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"REGEXP rexpr\xa0","[","message","]")),Object(o.b)("p",null,"Specifying a regular expression to which the property value should correspond after editing. Sets the value for the default design and can be overridden in the ",Object(o.b)("strong",{parentName:"p"},"DESIGN")," instruction."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"rexpr")),Object(o.b)("p",null,"A string literal that describes the regular expression. Rules are similar to the rules ",Object(o.b)("a",{parentName:"p",href:"http://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html"},"accepted in Java")," ."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"message")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"S"),"tring literal describing the message that will be shown to the user if they enter a value that does not match the regular expression. If not specified, a default message will be displayed."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ECHO")),Object(o.b)("p",null,"A keyword that causes asterisk (","*",") characters to be displayed instead of a property value.\xa0Used, for example, for passwords. Can be overridden in the ",Object(o.b)("strong",{parentName:"p"},"DESIGN")," instruction.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CHANGEKEY key ","[","SHOW\xa0|\xa0HIDE","]","\xa0")),Object(o.b)("p",null,"Specifies a\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Form_events#keyboard-broken"},"key combination")," which triggers editing of this property. Sets the value for the default design and can be overridden in the ",Object(o.b)("strong",{parentName:"p"},"DESIGN")," instruction."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"key")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Literals#strliteral-broken"},"String literal")," describing the key combination ",Object(o.b)("em",{parentName:"p"},".\xa0")," The method of specifying is similar to the method of specifying a parameter in the Java class\xa0method ",Object(o.b)("a",{parentName:"p",href:"http://docs.oracle.com/javase/7/docs/api/javax/swing/KeyStroke.html#getKeyStroke(java.lang.String)"},"Keystroke.getKeystroke (String)"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"SHOW")),Object(o.b)("p",null,"Keyword. When specified, the key combination will be displayed in the property caption. Used by default."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HIDE")),Object(o.b)("p",null,"Keyword. When specified, the key combination will not be displayed in the property caption.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"DEFAULTCOMPARE")),Object(o.b)("p",null,"Specifies a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Interactive_view#userfilters"},"default filter")," type for the property."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"compare")),Object(o.b)("p",null,"Default filter type. ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Literals#strliteral-broken"},"String literal"),". Can be one the following values: '=', '",">","', '<', '",">","=',\xa0'<=',\xa0'!=', 'START","_","WITH', 'CONTAINS', 'ENDS","_","WITH', 'LIKE'. The default value is '=' **\xa0",Object(o.b)("strong",{parentName:"p"}," for all data types except case-insensitive string types, for which the default value is 'CONTAINS'"),".\xa0",Object(o.b)("strong",{parentName:"p"}," If "),"System.defaultCompareForStringContains\xa0",Object(o.b)("strong",{parentName:"p"}," is enabled,\xa0default value is 'CONTAINS'"),"\xa0",Object(o.b)("strong",{parentName:"p"},"for all string data regardless of case sensitivity.\xa0Can be overridden in the "),"DESIGN** instruction."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"cost 'Cost' (i) = DATA NUMERIC[12,3] (Item);        // property defined by the context-independent DATA property operator\nweightedSum 'Weighted amount' (a, b) = 2*a + 3*b;       // property defined by expression\ndiff = a - b;                                           // the caption of this property will be 'diff' and the parameters will be (a, b)\n\nteamName 'Team name' = DATA BPSTRING[30](Team) IN baseGroup TABLE team; // property defined by DATA operator with additional property options\n")))}b.isMDXComponent=!0},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=b(r),d=n,m=l["".concat(p,".").concat(d)]||l[d]||u[d]||o;return r?a.a.createElement(m,i(i({ref:t},c),{},{components:r})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);