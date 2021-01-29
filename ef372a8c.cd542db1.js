(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{400:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var a=r(3),n=(r(0),r(424));const o={},p={unversionedId:"LSFUS/Property_options",id:"LSFUS/Property_options",isDocsHomePage:!1,title:"Property_options",description:"lsFusionProperty options",source:"@site/docs\\LSFUS\\Property_options.md",slug:"/LSFUS/Property_options",permalink:"/docusaurustest/docs/LSFUS/Property_options",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/Property_options.md",version:"current"},c=[],i={toc:c};function b({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"lsfusionproperty-options"},"lsFusionProperty options"),Object(n.b)("h1",{id:"property-options"},"Property options"),Object(n.b)("p",null,"When a ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Properties"}),"property")," is declared in the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Instruction_="}),"= instruction")," a set of ",Object(n.b)("em",{parentName:"p"},"property options")," can be specified at the end of the declaration\xa0"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Syntax")),Object(n.b)("p",null,"Options are listed one after another in arbitrary order, separated by spaces or line feeds:"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),"propertyOption1 ... propertyOptionN\n")),Object(n.b)("p",null,"The following set of options is supported (the syntax of each option is indicated on a separate line):"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),"IN groupName\nviewType\nON eventType { actionOperator }\nEDITKEY key [SHOW | HIDE]\nMATERIALIZED\nTABLE tableName\nINDEXED\nNONULL [DELETE] eventClause\nAUTOSET\nCHARWIDTH width [FLEX | NOFLEX]\nREGEXP rexpr [message] \nECHO\nDEFAULTCOMPARE [compare]\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Description and parameters")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"IN groupName")),Object(n.b)("p",null,"Specifying the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Groups_of_properties_and_actions"}),"group of properties and actions")," to which the property belongs. If the option is not specified, then the property will belong by default to the group ",Object(n.b)("strong",{parentName:"p"},"System.private"),"."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"groupName -")," group name. ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-cid"}),"Compound ID"),"."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"MATERIALIZED")),Object(n.b)("p",null,"Keyword marking the property as ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Materializations"}),"materialized"),". These properties will be stored in the database's ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Tables"}),"table")," fields."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"TABLE tableName")),Object(n.b)("p",null,"Specifies the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Tables"}),"table"),' where the property will be stored. The number of table keys must be equal to the number of property arguments, and the argument classes must match the table key classes. If no table is specified, the property will automatically be placed in the "nearest" existing table in the system.'),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"tableName")," - table name. Composite ID.\xa0"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"INDEXED")),Object(n.b)("p",null,"Keyword. If specified, an ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Indexes"}),"index")," by this property is created. Similar to using the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/INDEX_instruction"}),Object(n.b)("strong",{parentName:"a"},"INDEX")," instruction"),".\xa0**\xa0**"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"NONULL\xa0","[","DELETE","]"," eventClause")),Object(n.b)("p",null,"Adds a ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Simple_constraints"}),"definiteness")," constraint. If this constraint is violated as a result of some changes for some objects, either the corresponding message will be displayed, or, if ",Object(n.b)("strong",{parentName:"p"},"DELETE")," is specified, such objects will be deleted."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"DELETE")),Object(n.b)("p",null,"Keyword that, if specified, then when the property becomes ",Object(n.b)("strong",{parentName:"p"},"NULL"),", objects that are property arguments will be deleted."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"eventClause")),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Event_description_block"}),"Event type description block"),". Describes the event by which the property will be checked for ",Object(n.b)("strong",{parentName:"p"},"NULL"),"."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("em",{parentName:"strong"},"Interactive view block"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"viewType")),Object(n.b)("p",null,"Specifying the type of ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"Interactive-view_1573071.html#Interactiveview-property"}),"property view")," when added to the form."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"GRID"),"\xa0- table column"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"TOOLBAR"),"\xa0- toolbar"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"PANEL"),"\xa0- panel")),Object(n.b)("p",null,"It is similar to specifying the viewType option in the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Properties_and_actions_block"}),"property block")," of the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/FORM_instruction"}),Object(n.b)("strong",{parentName:"a"},"FORM"),"instruction"),". Thus, if this option is not specified either in the property options or in the property block directly on the form, the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"Interactive-view_1573071.html#Interactiveview-defaultPropertyView"}),"default view")," of the property display group on the form is used."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"ON eventType { actionOperator\xa0}")),Object(n.b)("p",null,"Specifying an action that will be the default handler of a certain\xa0",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Form_events"}),"form event"),"\xa0for all the interactive views of this property. Can be overridden in the property block of the ",Object(n.b)("strong",{parentName:"p"},"FORM"),"instruction."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"eventType")),Object(n.b)("p",null,"Type of form event. Specified by one of the following options:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"CHANGE")," - occurs when the user tries to change the value of a property."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"CHANGEWYS")," -**\xa0**occurs\xa0when the user tries to change the value of the specified property using a special input mechanism.\xa0"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"GROUPCHANGE")," - occurs when the user tries to change the property value for all objects in the table (group editing). \xa0"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"EDIT")," - occurs when the user tries to edit the object that is the value of the specified property.\xa0"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"CONTEXTMENU\xa0"),"[","caption","]","\xa0- the user has selected the specified item in the property context menu on the form.\xa0If necessary, you can also define the caption of this menu item (",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"Literals_35521071.html#Literals-strliteral"}),"string literal"),"). If it is not specified, then, by default, it will be the same as the action caption.")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"actionOperator")),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-contextdependent"}),"Context-dependent action operator"),". An operator that defines the action executed on an event. You can use the parameters of the property itself as operator parameters."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("em",{parentName:"strong"},"DESIGN instruction default values block"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"CHARWIDTH\xa0width\xa0"),"[","FLEX | NOFLEX","]"),Object(n.b)("p",null,"Specifying the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"Form-design_29884443.html#Formdesign-valueWidth"}),"number of characters"),"\xa0of the property value that should be visible to the user.\xa0Sets the value for the default design\xa0; can be overridden in\xa0a ",Object(n.b)("strong",{parentName:"p"},"DESIGN")," instruction."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"width")),Object(n.b)("p",null,"Number of characters.\xa0Integer literal.\xa0"),Object(n.b)("p",null,"*",Object(n.b)("em",{parentName:"p"},"FLEX"),"  "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"})),Object(n.b)("p",null,"Keyword. If specified, the extension coefficient of the property value is automatically set equal to its base size."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"NOFLEX")),Object(n.b)("p",null,"Keyword. If specified, the extension coefficient of the property value is automatically set equal to zero."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"REGEXP rexpr\xa0","[","message","]")),Object(n.b)("p",null,"Specifying a regular expression to which the property value should correspond after editing. Sets the value for the default design and can be overridden in the ",Object(n.b)("strong",{parentName:"p"},"DESIGN")," instruction."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"rexpr")),Object(n.b)("p",null,"A string literal that describes the regular expression. Rules are similar to the rules ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"http://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html"}),"accepted in Java")," ."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"message")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"S"),"tring literal describing the message that will be shown to the user if they enter a value that does not match the regular expression. If not specified, a default message will be displayed."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"ECHO")),Object(n.b)("p",null,"A keyword that causes asterisk (","*",") characters to be displayed instead of a property value.\xa0Used, for example, for passwords. Can be overridden in the ",Object(n.b)("strong",{parentName:"p"},"DESIGN")," instruction.\xa0"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"CHANGEKEY key ","[","SHOW\xa0|\xa0HIDE","]","\xa0")),Object(n.b)("p",null,"Specifies a\xa0",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"Form-events_5636111.html#Formevents-keyboard"}),"key combination")," which triggers editing of this property. Sets the value for the default design and can be overridden in the ",Object(n.b)("strong",{parentName:"p"},"DESIGN")," instruction."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"key")),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"Literals_35521071.html#Literals-strliteral"}),"String literal")," describing the key combination ",Object(n.b)("em",{parentName:"p"},".\xa0")," The method of specifying is similar to the method of specifying a parameter in the Java class\xa0method ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"http://docs.oracle.com/javase/7/docs/api/javax/swing/KeyStroke.html#getKeyStroke(java.lang.String)"}),"Keystroke.getKeystroke (String)"),"."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"SHOW")),Object(n.b)("p",null,"Keyword. When specified, the key combination will be displayed in the property caption. Used by default."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"HIDE")),Object(n.b)("p",null,"Keyword. When specified, the key combination will not be displayed in the property caption.\xa0"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"DEFAULTCOMPARE")),Object(n.b)("p",null,"Specifies a ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"Interactive-view_1573071.html#Interactiveview-userfilters"}),"default filter")," type for the property."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"compare")),Object(n.b)("p",null,"Default filter type. ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"Literals_35521071.html#Literals-strliteral"}),"String literal"),". Can be one the following values: '=', '",">","', '","<","', '",">","=',\xa0'","<","=',\xa0'!=', 'START","_","WITH', 'CONTAINS', 'ENDS","_","WITH', 'LIKE'. The default value is '=' **\xa0",Object(n.b)("strong",{parentName:"p"}," for all data types except case-insensitive string types, for which the default value is 'CONTAINS'"),".\xa0",Object(n.b)("strong",{parentName:"p"}," If "),"System.defaultCompareForStringContains\xa0",Object(n.b)("strong",{parentName:"p"}," is enabled,\xa0default value is 'CONTAINS'"),"\xa0",Object(n.b)("strong",{parentName:"p"},"for all string data regardless of case sensitivity.\xa0Can be overridden in the "),"DESIGN** instruction."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Examples")))}b.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),l=s(r),m=a,O=l["".concat(p,".").concat(m)]||l[m]||u[m]||o;return r?n.a.createElement(O,c(c({ref:t},b),{},{components:r})):n.a.createElement(O,c({ref:t},b))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var b=2;b<o;b++)p[b]=r[b];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);