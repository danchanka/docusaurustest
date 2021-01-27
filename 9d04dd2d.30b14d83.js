(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{299:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(424)),p={},i={unversionedId:"LSFUS/lsFusionPRINT_operator",id:"LSFUS/lsFusionPRINT_operator",isDocsHomePage:!1,title:"lsFusionPRINT_operator",description:"lsFusionPRINT operator",source:"@site/docs\\LSFUS\\lsFusionPRINT_operator.md",slug:"/LSFUS/lsFusionPRINT_operator",permalink:"/docusaurustest/docs/LSFUS/lsFusionPRINT_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/website/docs/LSFUS/lsFusionPRINT_operator.md",version:"current"},b=[],c={toc:b};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionprint-operator"},"lsFusionPRINT operator"),Object(o.b)("h1",{id:"print-operator"},"PRINT operator"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"PRINT"),"\xa0operator creates an\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionActions"}),"action"),"\xa0that ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionIn_a_print_view_PRINT_"}),"opens a form"),"\xa0in print view.\xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"PRINT name \n[OBJECTS objName1 = expr1, ..., objNameN = exprN]\n[formActionOptions]\xa0\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"formActionOptions")," -\xa0additional options for this action. There are several possible option syntaxes in this operator:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"printFormat [SHEET sheetProperty] [PASSWORD passwordExpr] [TO propertyId]\n[PREVIEW | NOPREVIEW] [syncType] [TO printerExpr]\nMESSAGE [syncType] [TOP n]\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"PRINT"),"\xa0operator creates an action that prints the specified form. When printing a form\xa0in the\xa0",Object(o.b)("strong",{parentName:"p"},"OBJECTS"),"\xa0block you can add ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Open-form_3014672.html#Openform-params"}),"additional filters")," for form objects\xa0to check these objects for equality to the values\xa0passed."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name")),Object(o.b)("p",null,"Form name.\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-cid"}),"Composite ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"objName1 ... objNameN")),Object(o.b)("p",null,"Names of form objects for which additional filters are specified. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id"}),"Simple IDs"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expr1 ... exprN")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionExpression"}),"Expressions")," whose values determine the filtered (fixed) values for form objects."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Additional options"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"printFormat")),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"57737722.html#Inaprintview(PRINT)-format"}),"print format")," is specified by one of these keywords:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"PDF"),"\xa0\u2013 the form will be exported to a PDF file."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"XLS"),",\xa0",Object(o.b)("strong",{parentName:"li"},"XLSX"),"\xa0\u2013 the form will be exported to a file in one of the specified EXCEL formats."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"DOC"),", ",Object(o.b)("strong",{parentName:"li"},"DOCX"),"\xa0\u2013 the form will be exported to a file in one of the specified WORD formats."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"RTF"),"\xa0\u2013 the form will be exported to an RTF file."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"HTML"),"\xa0\u2013 the form will be exported to an HTML file.")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"sheetProperty\n")),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id-%D0%A1%D0%B8%D0%BD%D1%82%D0%B0%D0%BA%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-propertyid"}),"ID of the property")," whose value is used as the name of the sheet in the exported file. The property must not have parameters.\xa0It is used for ",Object(o.b)("strong",{parentName:"p"},"XLS")," and ",Object(o.b)("strong",{parentName:"p"},"XLSX")," print formats."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"passwordExpr")),Object(o.b)("p",null,"An expression whose value determines the password that sets the read-only mode for the exported file. Used for\xa0",Object(o.b)("strong",{parentName:"p"},"XLS"),"\xa0and\xa0",Object(o.b)("strong",{parentName:"p"},"XLSX")," print formats."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id-%D0%A1%D0%B8%D0%BD%D1%82%D0%B0%D0%BA%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-propertyid"}),"Property ID")," to which the generated file will be written. The property must not have parameters. If a property is not specified, the generated file is sent to the client and opened by the operating system"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"PREVIEW")),Object(o.b)("p",null,"Keyword. If specified, the form is displayed in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"57737722.html#Inaprintview(PRINT)-interactive"}),"preview")," mode.\xa0This mode is used by default if no other modes/formats are specified."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NOPREVIEW")),Object(o.b)("p",null,"Keyword. If specified, the form is immediately (without preview) sent for printing."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"printerExpr")),Object(o.b)("p",null,"An expression whose value determines the name of the printer to which the print job will be sent. If no printer with the specified name is found (or specified), the default printer is selected."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"MESSAGE")),Object(o.b)("p",null,"Keyword. If specified, the form displays data to the user in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"57737722.html#Inaprintview(PRINT)-interactive"}),"message")," mode."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"TOP n")),Object(o.b)("p",null,"Displays only the first N entries. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Literals_35521071.html#Literals-intliteral"}),"Integer literal"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"syncType")),Object(o.b)("p",null,"Determines when the created action should be continued:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"WAIT"),"\xa0- after the client completes the action (closes the preview/message form). Used by default."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"NOWAIT"),"\xa0-\xa0after preparation of the information for sending to the client (form data is read).")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null))}s.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),l=s(r),u=n,O=l["".concat(p,".").concat(u)]||l[u]||m[u]||o;return r?a.a.createElement(O,i(i({ref:t},c),{},{components:r})):a.a.createElement(O,i({ref:t},c))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);