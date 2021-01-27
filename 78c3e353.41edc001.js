(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{248:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(424)),i={},c={unversionedId:"LSFUS/lsFusionAction_options",id:"LSFUS/lsFusionAction_options",isDocsHomePage:!1,title:"lsFusionAction_options",description:"lsFusionAction options",source:"@site/docs\\LSFUS\\lsFusionAction_options.md",slug:"/LSFUS/lsFusionAction_options",permalink:"/docusaurustest/docs/LSFUS/lsFusionAction_options",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionAction_options.md",version:"current"},p=[],s={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionaction-options"},"lsFusionAction options"),Object(o.b)("h1",{id:"action-options"},"Action options"),Object(o.b)("p",null,"When declaring an ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionActions"}),"action"),"\xa0in the\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionACTION_instruction"}),Object(o.b)("strong",{parentName:"a"},"ACTION"),"\xa0instruction")," a certain set of\xa0",Object(o.b)("em",{parentName:"p"},"action options")," may be specified at the end of the declaration.\xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("p",null,"Options are listed one after another in arbitrary order, separated by spaces or line feeds:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"propertyOption1 ... propertyOptionN\n")),Object(o.b)("p",null,"The following set of options is supported (the syntax of each option is indicated on a separate line):"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"IN groupName\nviewType\nON eventType { actionOperator }\nEDITKEY key [SHOW | HIDE]\nASON eventType [ACTION] propertyId\nIMAGE path\nCONFIRM\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description and parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"IN\xa0groupName")),Object(o.b)("p",null,"Specifying the\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionGroups_of_properties_and_actions"}),"group of properties and actions")," to which the action belongs. If the option is not specified, then the action will belong by default to the\xa0",Object(o.b)("strong",{parentName:"p"},"System.private")," group."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"groupName"),"\xa0- a group name.\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-cid"}),"Composite ID"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Interactive view block"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"viewType")),Object(o.b)("p",null,"Specifying the type of the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Interactive-view_1573071.html#Interactiveview-property"}),"action view"),"\xa0when added to the form."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"GRID"),"\xa0- table column"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"TOOLBAR"),"\xa0- toolbar"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"PANEL"),"\xa0- panel")),Object(o.b)("p",null,"It is similar to specifying the viewType option in the\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperties_and_actions_block"}),"property block")," of the\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionFORM_instruction"}),Object(o.b)("strong",{parentName:"a"},"FORM"),"instruction\xa0"),". Thus, if this option is not specified either in the action options or in the property block directly on the form, the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Interactive-view_1573071.html#Interactiveview-defaultPropertyView"}),"default view"),"\xa0of the action display group on the form is used."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ON eventType { actionOperator\xa0}")),Object(o.b)("p",null,"Specifying an action that will be the default handler of a certain\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionForm_events"}),"event"),"\xa0for all the interactive views of this action. Can be overridden in the property block of the ",Object(o.b)("strong",{parentName:"p"},"FORM"),"\xa0instruction."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventType")),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionForm_events"}),"form event"),"\xa0type. It is specified by one of the keywords:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CHANGE"),"\xa0-\xa0occurs when the user tries to change the value of the specified property"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CHANGEWYS"),"\xa0-\xa0occurs when the user tries to change the value of the specified property using a special input mechanism. You can read more in the description of the\xa0",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/lsFusionForm_events"}),"form events"),"\xa0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"GROUPCHANGE"),"\xa0-\xa0occurs when the user tries to change the property value for all objects in the table (group editing)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"EDIT"),"\xa0-\xa0occurs when the user tries to edit the object that is the value of the specified property"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CONTEXTMENU\xa0"),"[","caption","]","\xa0- the user has selected the specified item in the property context menu on the form.\xa0If necessary, you can also define the caption of this menu item (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"Literals_35521071.html#Literals-strliteral"}),"string literal"),"). If it is not specified, then, by default, it will be the same as the action caption.")))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionOperator")),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-id-%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B-%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F-contextdependent"}),"context-dependent action operator"),". An operator that defines the action executed on an event. You can use the parameters of the property itself as operator parameters."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ASON eventType\xa0","[","ACTION","]"," propertyId")),Object(o.b)("p",null,"Specifies that this action will be the default handler of a\xa0certain\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionForm_events"}),"event"),"\xa0for all the interactive views of the specified property or action.\xa0Can be overridden in the\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperties_and_actions_block"}),"property and action block"),"\xa0of the\xa0",Object(o.b)("strong",{parentName:"p"},"FORM")," instruction.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventType")),Object(o.b)("p",null,"Similar to the ON block."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId")),Object(o.b)("p",null,"An ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"ID of the property or action")," for which the created action will be executed when the specified form event occurs."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ACTION")),Object(o.b)("p",null,"Keyword. If specified, it is considered that the action is set in propertyId. If not specified, it is initially considered that a property is defined in\xa0propertyId; otherwise, if no property is found, it is considered that an action is specified in propertyId."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"IMAGE\xa0path")),Object(o.b)("p",null,"Specifies the file with the image to be displayed as an action icon."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"path"),"\xa0is the relative path to the file.\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Literals_35521071.html#Literals-strliteral"}),"String literal"),". The path is specified relative to the\xa0",Object(o.b)("strong",{parentName:"p"},"images")," folder."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"DESIGN instruction default values block"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"EDITKEY key\xa0","[","SHOW | HIDE","]")),Object(o.b)("p",null,"Specifies a\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Form-events_5636111.html#Formevents-keyboard"}),"keyboard shortcut")," which triggers this action. Sets the value for the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Form-design_29884443.html#Formdesign-defaultDesign"}),"default\xa0design")," and can be overridden in the\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionDESIGN_instruction"}),Object(o.b)("strong",{parentName:"a"},"DESIGN"),"\xa0instruction"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"key"),"\xa0-*\xa0",Object(o.b)("em",{parentName:"p"}," a ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"Literals_35521071.html#Literals-strliteral"}),"string literal")," that defines a keyboard shortcut"),".\xa0*The definition method is identical to that for a parameter in the Java class method\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://docs.oracle.com/javase/7/docs/api/javax/swing/KeyStroke.html#getKeyStroke(java.lang.String)"}),"Keystroke.getKeystroke(String)"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"SHOW"),"\xa0- a keyword. If specified, the keyboard shortcut will be displayed in the action caption. Used by default."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HIDE"),"\xa0- a\xa0keyword. If specified, the\xa0keyboard shortcut will not be displayed in the action caption.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CONFIRM")),Object(o.b)("p",null,"Keyword. If specified, the user will be asked to confirm the\xa0action when it is executed.\xa0Sets the value for the\xa0default design and can be overridden in the\xa0",Object(o.b)("strong",{parentName:"p"},"DESIGN")," instruction."))}b.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=b(n),O=r,d=l["".concat(i,".").concat(O)]||l[O]||u[O]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=O;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);