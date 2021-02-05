(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(419)),c={title:"SHOW operator"},i={unversionedId:"SHOW_operator",id:"SHOW_operator",isDocsHomePage:!1,title:"SHOW operator",description:"The SHOW\xa0operator creates an action that opens a form\xa0in interactive view.",source:"@site/docs\\SHOW_operator.md",slug:"/SHOW_operator",permalink:"/docusaurustest/docs/SHOW_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/SHOW_operator.md",version:"current",sidebar:"docs",previous:{title:"SEEK operator",permalink:"/docusaurustest/docs/SEEK_operator"},next:{title:"TRY operator",permalink:"/docusaurustest/docs/TRY_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"<em>SHOW operator options</em>",id:"show-operator-options",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"SHOW"),"\xa0operator creates an ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG"}),"opens a form"),"\xa0in interactive view.\xa0"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"SHOW name \n[OBJECTS objName1 = expr1 [NULL], ..., objNameN = exprN [NULL]]\n[formActionOptions]\xa0\n")),Object(o.b)("p",null,"When opening the list/edit form, the syntax is slightly different:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"SHOW classFormType className\n= expr [NULL]\n[formActionOptions]\xa0\n\nformActionOptions\xa0is the options for this action. They can be added one by one in any order:\n\nsyncType\nwindowType\nMANAGESESSION | NOMANAGESESSION\nNEWSESSION | NESTEDSESSION\nCANCEL | NOCANCEL\nREADONLY\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"SHOW")," operator creates an action that opens the specified form.\xa0When opening the form in the\xa0",Object(o.b)("strong",{parentName:"p"},"OBJECTS"),"\xa0block,\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Open-form_3014672.html#Openform-params"}),"initial values")," can be specified\xa0for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Form_structure"}),"Form structure"),"form objects."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name")),Object(o.b)("p",null,"Form name. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-cid"}),"Composite ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"classFormType")),Object(o.b)("p",null,"Keyword. Determines which form to open:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LIST"),"\xa0\u2013 list"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"EDIT"),"\xa0\u2013 edit")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"className")),Object(o.b)("p",null,"The name of the user class whose list/edit form is to be opened. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-cid"}),"Composite ID")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"objName1 ... objNameN")),Object(o.b)("p",null,"Names of form objects for which initial values are specified. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id"}),"Simple IDs"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expr, expr1 ... exprN")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"Expressions")," which values determine the initial values for form objects."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NULL")),Object(o.b)("p",null,"Specifies that the values passed may be\xa0",Object(o.b)("strong",{parentName:"p"},"NULL"),"."),Object(o.b)("h3",{id:"show-operator-options"},Object(o.b)("em",{parentName:"h3"},"SHOW operator options")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"syncType")),Object(o.b)("p",null,"Determines in which ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"36307331.html#Inaninteractiveview(SHOW,DIALOG)-flow"}),"flow control")," mode the operator will work:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"WAIT"),"\xa0- synchronous. Used by default."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"NOWAIT"),"\xa0- asynchronous.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"windowType")),Object(o.b)("p",null,"Method of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"36307331.html#Inaninteractiveview(SHOW,DIALOG)-location"}),"the form layout"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"DOCKED"),"\xa0\u2013 as a tab.\xa0Used by default in asynchronous mode."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"FLOAT"),"\xa0-\xa0as a window. Used by default in synchronous mode.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"MANAGESESSION"),"\xa0|\xa0",Object(o.b)("em",{parentName:"p"},"NOMANAGESESSION")),Object(o.b)("p",null,"Keyword. Determines whether or not the\xa0created form\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Interactive-view_1573071.html#Interactiveview-owner"}),"is considered to be the owner of the session"),"\xa0(if so, in interactive mode the corresponding buttons for managing the session will be shown on the form). By default, the platform tries to determine which mode to use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Interactive-view_1573071.html#Interactiveview-sysactions"}),"automatically")," depending on the context."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CANCEL"),"\xa0|\xa0",Object(o.b)("em",{parentName:"p"},"NOCANCEL")),Object(o.b)("p",null,'Keyword. Determines whether or not to show the "Cancel" system action (',Object(o.b)("strong",{parentName:"p"},"System.formCancel"),")**\xa0**on the form.\xa0By default, the platform tries to\xa0determine which mode to use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Interactive-view_1573071.html#Interactiveview-sysactions"}),"automatically"),"\xa0depending on context."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NEWSESSION | NESTEDSESSION")),Object(o.b)("p",null,"\xa0 \xa0 \xa0 \xa0 Keyword. Determines that the form will be opened in a new (nested) session. By default, the form is opened in the current session."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"READONLY")),Object(o.b)("p",null,"Keyword. If specified, the form is opened in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"36307331.html#Inaninteractiveview(SHOW,DIALOG)-extra"}),"read-only")," mode."),Object(o.b)("h3",{id:"examples"},"Examples"))}s.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),l=s(n),O=r,u=l["".concat(c,".").concat(O)]||l[O]||m[O]||o;return n?a.a.createElement(u,i(i({ref:t},b),{},{components:n})):a.a.createElement(u,i({ref:t},b))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=O;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);