(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{186:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var a=r(3),o=r(7),n=(r(0),r(419)),p={title:"EXPORT operator"},c={unversionedId:"EXPORT_operator",id:"EXPORT_operator",isDocsHomePage:!1,title:"EXPORT operator",description:"The EXPORT operator: creates an action that exports specified\xa0properties\xa0to a file,\xa0or, in common case, that opens a form\xa0in a structured view.",source:"@site/docs\\EXPORT_operator.md",slug:"/EXPORT_operator",permalink:"/docusaurustest/docs/EXPORT_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/EXPORT_operator.md",version:"current",sidebar:"docs",previous:{title:"EXEC operator",permalink:"/docusaurustest/docs/EXEC_operator"},next:{title:"EXTERNAL operator",permalink:"/docusaurustest/docs/EXTERNAL_operator"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"<em>Source of export\xa0</em>",id:"source-of-export",children:[]},{value:"<em>Export format</em>",id:"export-format",children:[]},{value:"<em>Export destination</em>",id:"export-destination",children:[]},{value:"propertyIdM\xa0<em>, ...,\xa0</em>propertyIdM",id:"propertyidm---propertyidm",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:s};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"EXPORT")," operator: creates an ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that exports ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_export_EXPORT"}),"specified\xa0properties"),"\xa0to a file,\xa0or, in common case, that ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/In_a_structured_view_EXPORT_IMPORT"}),"opens a form"),"\xa0in a structured view.\xa0"),Object(n.b)("h3",{id:"syntax"},"Syntax"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),"EXPORT [exportFormat] [TOP n] FROM [columnId1 =] propertyExpr1, ..., [columnIdN = ] propertyExprN [WHERE whereExpr] [ORDER orderExpr1 [DESC], ..., orderExprL [DESC]] [TO propertyId]\nEXPORT formName [OBJECTS objName1 = expr1, ..., objNameK = exprK] [exportFormat] [TOP n] [TO (propertyId | (groupId1 = propertyId1, ..., groupIdN = propertyIdM))]\n")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"exportFormat"),"\xa0can be specified by one of the following options:"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),"JSON [CHARSET charsetStr]\nXML [ATTR] [CHARSET charsetStr]\nCSV [separator] [HEADER | NOHEADER] [ESCAPE | NOESCAPE] [CHARSET charsetStr]\nXLS [HEADER | NOHEADER]\nXLSX [HEADER | NOHEADER]\nDBF [CHARSET charsetStr]\nTABLE\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("br",{parentName:"strong"}),"Description")),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"EXPORT")," operator creates an action that exports data from the specified properties or form to a file. The following file formats are supported: ",Object(n.b)("strong",{parentName:"p"},"XML"),",\xa0",Object(n.b)("strong",{parentName:"p"},"JSON"),",**\xa0",Object(n.b)("strong",{parentName:"p"},"CSV**"),",\xa0",Object(n.b)("strong",{parentName:"p"},"XLS"),", ",Object(n.b)("strong",{parentName:"p"},"XLSX"),", ",Object(n.b)("strong",{parentName:"p"},"DBF"),",\xa0",Object(n.b)("strong",{parentName:"p"},"TABLE"),".\xa0"),Object(n.b)("p",null,"If no*\xa0",Object(n.b)("em",{parentName:"p"},"export file format"),"\xa0*is specified, it is considered to be ",Object(n.b)("strong",{parentName:"p"},"JSON"),"."),Object(n.b)("p",null,"If the property to which the data is exported is of class ",Object(n.b)("strong",{parentName:"p"},"FILE"),", then the extension of the resulting file is determined depending on the format as follows:"),Object(n.b)("p",null,"When exporting a form in an\xa0",Object(n.b)("strong",{parentName:"p"},"OBJECTS"),"\xa0block, it is possible to add extra filters to check for the equality of the objects on the form with ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"Open-form_3014672.html#Openform-params"}),"the values passed"),". These objects ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"Structured-view_29884537.html#Structuredview-objects"}),"will not participate")," in building the object group hierarchy."),Object(n.b)("h3",{id:"parameters"},"Parameters"),Object(n.b)("h3",{id:"source-of-export"},Object(n.b)("em",{parentName:"h3"},"Source of export\xa0")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"formName")),Object(n.b)("p",null,"The name of the form from which you want to export data.\xa0",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-cid"}),"Composite ID"),"."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"objName1 ... objNameK")),Object(n.b)("p",null,"Names of form objects for which filtered (fixed) values are specified.\xa0",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id"}),"Simple IDs"),"."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"expr1 ... exprK")),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"Expressions")," whose values determine the filtered (fixed) values for form objects."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"propertyExpr1, ..., propertyExprN")),Object(n.b)("p",null,"List\xa0of ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expressions")," from whose values the data is exported.\xa0Each property is mapped to a table column of the result file."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"columnId1, ..., columnIdN")),Object(n.b)("p",null,"A list of column IDs in the resulting file into which data from the corresponding property will be exported. Each list element is either\xa0",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id"}),"a simple ID")," or\xa0a ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"Literals_35521071.html#Literals-strliteral"}),"string literal"),".\xa0If no ID is specified, it is considered equal to expr<Column number",">"," by default."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"whereExpr")),Object(n.b)("p",null,"An expression whose value is a condition for the export. If not specified, it is considered equal to\xa0the ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Logical_operators_AND_OR_NOT_XOR"}),"disjunction")," of\xa0all exported properties (that is, at least one of the properties must be\xa0non-",Object(n.b)("strong",{parentName:"p"},"NULL"),")."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"orderExpr1, ..., orderExprL")),Object(n.b)("p",null,"List\xa0of ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expressions")," by which the exported data is sorted. Only properties present in the list ",Object(n.b)("em",{parentName:"p"},"propertyExpr1, ..., propertyExprN")," can be used"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"DESC")),Object(n.b)("p",null,"Keyword. Specifies reverse sort order. By default, ascending sort is used."),Object(n.b)("h3",{id:"export-format"},Object(n.b)("em",{parentName:"h3"},"Export format")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"ATTR")),Object(n.b)("p",null,"A keyword that specifies that values should be exported to the attributes of the parent tag. If not specified, the values are exported to child tags. Only applicable for export to\xa0",Object(n.b)("strong",{parentName:"p"},"XML"),"."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"separator")),Object(n.b)("p",null,"Delimiter in a ",Object(n.b)("strong",{parentName:"p"},"CSV"),"\xa0file.\xa0",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"Literals_35521071.html#Literals-strliteral"}),"String literal"),". If not specified, then the default delimiter is '",Object(n.b)("strong",{parentName:"p"},";")," '."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"HEADER | NOHEADER")),Object(n.b)("p",null,"Keywords specifying the presence (HEADER) or absence (NOHEADER) of a header string in\xa0a ",Object(n.b)("strong",{parentName:"p"},"CSV"),", ",Object(n.b)("strong",{parentName:"p"},"xls"),", or ",Object(n.b)("strong",{parentName:"p"},"xlsx")," file. The default is NOHEADER."),Object(n.b)("p",null,"When using the NOHEADER option:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"if the column name is one of the predefined names (A, B, ..., Z, AA, ...,\xa0AE), it is exported to the column with the corresponding number, and the following columns are exported to the columns next in order after this column.")))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"ESCAPE | NOESCAPE")),Object(n.b)("p",null,"Keyword specifying the presence (ESCAPE) or absence (NOESCAPE) of escaping for special characters (","\\","\\","r, ","\\","\\",'n, " (double quotes) and the specified delimiter (',Object(n.b)("em",{parentName:"p"},"separator"),") in\xa0a ",Object(n.b)("strong",{parentName:"p"},"CSV"),"\xa0file. It makes sense to use NOESCAPE only in cases where the specified delimiter is guaranteed not to occur in the data. The default is ESCAPE."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"CHARSET charsetStr")),Object(n.b)("p",null,"An option specifying the encoding used for export."),Object(n.b)("p",null,"charsetStr is a string literal that defines the encoding.\xa0"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"TOP n")),Object(n.b)("p",null,"Exports only the first n records.\xa0",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"Literals_35521071.html#Literals-id-%D0%9B%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D0%BB%D1%8B-intliteral"}),"Integer literal"),"."),Object(n.b)("h3",{id:"export-destination"},Object(n.b)("em",{parentName:"h3"},"Export destination")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"propertyId")),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"Property ID")," to which the generated file will be written. This property must not have parameters and its value must be of a file class (",Object(n.b)("strong",{parentName:"p"},"FILE"),",\xa0",Object(n.b)("strong",{parentName:"p"},"RAWFILE"),",\xa0",Object(n.b)("strong",{parentName:"p"},"JSONFILE"),", etc.).\xa0If this property is not specified, the ",Object(n.b)("strong",{parentName:"p"},"System.exportFile")," property is used by default."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"groupId1, ..., groupIdM")),Object(n.b)("p",null,"Names of object groups from the exported form for which you want to export data.\xa0",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id"}),"Simple IDs"),".\xa0Used only for exporting forms to flat formats."),Object(n.b)("h3",{id:"propertyidm---propertyidm"},"propertyIdM\xa0",Object(n.b)("em",{parentName:"h3"},", ...,\xa0"),"propertyIdM"),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"Property IDs")," to which the generated files for specified object groups will be written. These properties must not have parameters and their value must be of file classes (",Object(n.b)("strong",{parentName:"p"},"FILE"),",\xa0",Object(n.b)("strong",{parentName:"p"},"RAWFILE"),",\xa0",Object(n.b)("strong",{parentName:"p"},"JSONFILE"),", etc.). Used only for exporting forms to flat formats.\xa0For\xa0the",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"Static-view_29884533.html#Staticview-empty"}),"empty group"),"\xa0of objects, the name\xa0",Object(n.b)("strong",{parentName:"p"},"root")," is used.\xa0"),Object(n.b)("h3",{id:"examples"},"Examples"))}b.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return O}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),b=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=b(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),l=b(r),u=a,O=l["".concat(p,".").concat(u)]||l[u]||m[u]||n;return r?o.a.createElement(O,c(c({ref:t},i),{},{components:r})):o.a.createElement(O,c({ref:t},i))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,p=new Array(n);p[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var i=2;i<n;i++)p[i]=r[i];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);