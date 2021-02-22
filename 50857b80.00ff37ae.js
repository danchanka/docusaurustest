(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{189:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return l}));var o=r(3),a=r(7),p=(r(0),r(421)),n=r(56),s={title:"EXPORT operator"},c={unversionedId:"EXPORT_operator",id:"EXPORT_operator",isDocsHomePage:!1,title:"EXPORT operator",description:"The EXPORT operator: creates an action that exports specified\xa0properties\xa0to a file,\xa0or, in common case, that opens a form\xa0in a structured view.",source:"@site/docs\\EXPORT_operator.md",slug:"/EXPORT_operator",permalink:"/docusaurustest/docs/EXPORT_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/EXPORT_operator.md",version:"current",sidebar:"docs",previous:{title:"EXEC operator",permalink:"/docusaurustest/docs/EXEC_operator"},next:{title:"EXTERNAL operator",permalink:"/docusaurustest/docs/EXTERNAL_operator"}},b=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"<em>Source of export\xa0</em>",id:"source-of-export",children:[]},{value:"<em>Export format</em>",id:"export-format",children:[]},{value:"<em>Export destination</em>",id:"export-destination",children:[]},{value:"propertyIdM\xa0<em>, ...,\xa0</em>propertyIdM",id:"propertyidm---propertyidm",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:b};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(o.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"The ",Object(p.b)("strong",{parentName:"p"},"EXPORT")," operator: creates an ",Object(p.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that exports ",Object(p.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_export_EXPORT"}),"specified\xa0properties"),"\xa0to a file,\xa0or, in common case, that ",Object(p.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/In_a_structured_view_EXPORT_IMPORT"}),"opens a form"),"\xa0in a structured view.\xa0"),Object(p.b)("h3",{id:"syntax"},"Syntax"),Object(p.b)("pre",null,Object(p.b)("code",Object(o.a)({parentName:"pre"},{}),"EXPORT [exportFormat] [TOP n] FROM [columnId1 =] propertyExpr1, ..., [columnIdN = ] propertyExprN [WHERE whereExpr] [ORDER orderExpr1 [DESC], ..., orderExprL [DESC]] [TO propertyId]\nEXPORT formName [OBJECTS objName1 = expr1, ..., objNameK = exprK] [exportFormat] [TOP n] [TO (propertyId | (groupId1 = propertyId1, ..., groupIdN = propertyIdM))]\n")),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"exportFormat"),"\xa0can be specified by one of the following options:"),Object(p.b)("pre",null,Object(p.b)("code",Object(o.a)({parentName:"pre"},{}),"JSON [CHARSET charsetStr]\nXML [ATTR] [CHARSET charsetStr]\nCSV [separator] [HEADER | NOHEADER] [ESCAPE | NOESCAPE] [CHARSET charsetStr]\nXLS [HEADER | NOHEADER]\nXLSX [HEADER | NOHEADER]\nDBF [CHARSET charsetStr]\nTABLE\n")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},Object(p.b)("br",{parentName:"strong"}),"Description")),Object(p.b)("p",null,"The ",Object(p.b)("strong",{parentName:"p"},"EXPORT")," operator creates an action that exports data from the specified properties or form to a file. The following file formats are supported: ",Object(p.b)("strong",{parentName:"p"},"XML"),",\xa0",Object(p.b)("strong",{parentName:"p"},"JSON"),",**\xa0",Object(p.b)("strong",{parentName:"p"},"CSV**"),",\xa0",Object(p.b)("strong",{parentName:"p"},"XLS"),", ",Object(p.b)("strong",{parentName:"p"},"XLSX"),", ",Object(p.b)("strong",{parentName:"p"},"DBF"),",\xa0",Object(p.b)("strong",{parentName:"p"},"TABLE"),".\xa0"),Object(p.b)("p",null,"If no*\xa0",Object(p.b)("em",{parentName:"p"},"export file format"),"\xa0*is specified, it is considered to be ",Object(p.b)("strong",{parentName:"p"},"JSON"),"."),Object(p.b)("p",null,"If the property to which the data is exported is of class ",Object(p.b)("strong",{parentName:"p"},"FILE"),", then the extension of the resulting file is determined depending on the format as follows:"),Object(p.b)("p",null,"[table was removed]"),Object(p.b)("p",null,"When exporting a form in an\xa0",Object(p.b)("strong",{parentName:"p"},"OBJECTS"),"\xa0block, it is possible to add extra filters to check for the equality of the objects on the form with ",Object(p.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Open_form#passing-objects"}),"the values passed"),". These objects ",Object(p.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Structured_view#objects-broken"}),"will not participate")," in building the object group hierarchy."),Object(p.b)("h3",{id:"parameters"},"Parameters"),Object(p.b)("h3",{id:"source-of-export"},Object(p.b)("em",{parentName:"h3"},"Source of export\xa0")),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"formName")),Object(p.b)("p",null,"The name of the form from which you want to export data.\xa0",Object(p.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#cid-broken"}),"Composite ID"),"."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"objName1 ... objNameK")),Object(p.b)("p",null,"Names of form objects for which filtered (fixed) values are specified.\xa0",Object(p.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#id-broken"}),"Simple IDs"),"."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"expr1 ... exprK")),Object(p.b)("p",null,Object(p.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"Expressions")," whose values determine the filtered (fixed) values for form objects."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"propertyExpr1, ..., propertyExprN")),Object(p.b)("p",null,"List\xa0of ",Object(p.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expressions")," from whose values the data is exported.\xa0Each property is mapped to a table column of the result file."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"columnId1, ..., columnIdN")),Object(p.b)("p",null,"A list of column IDs in the resulting file into which data from the corresponding property will be exported. Each list element is either\xa0",Object(p.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#id-broken"}),"a simple ID")," or\xa0a ",Object(p.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Literals#strliteral-broken"}),"string literal"),".\xa0If no ID is specified, it is considered equal to expr<Column number",">"," by default."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"whereExpr")),Object(p.b)("p",null,"An expression whose value is a condition for the export. If not specified, it is considered equal to\xa0the ",Object(p.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Logical_operators_AND_OR_NOT_XOR"}),"disjunction")," of\xa0all exported properties (that is, at least one of the properties must be\xa0non-",Object(p.b)("strong",{parentName:"p"},"NULL"),")."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"orderExpr1, ..., orderExprL")),Object(p.b)("p",null,"List\xa0of ",Object(p.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expressions")," by which the exported data is sorted. Only properties present in the list ",Object(p.b)("em",{parentName:"p"},"propertyExpr1, ..., propertyExprN")," can be used"),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"DESC")),Object(p.b)("p",null,"Keyword. Specifies reverse sort order. By default, ascending sort is used."),Object(p.b)("h3",{id:"export-format"},Object(p.b)("em",{parentName:"h3"},"Export format")),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"ATTR")),Object(p.b)("p",null,"A keyword that specifies that values should be exported to the attributes of the parent tag. If not specified, the values are exported to child tags. Only applicable for export to\xa0",Object(p.b)("strong",{parentName:"p"},"XML"),"."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"separator")),Object(p.b)("p",null,"Delimiter in a ",Object(p.b)("strong",{parentName:"p"},"CSV"),"\xa0file.\xa0",Object(p.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Literals#strliteral-broken"}),"String literal"),". If not specified, then the default delimiter is '",Object(p.b)("strong",{parentName:"p"},";")," '."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"HEADER | NOHEADER")),Object(p.b)("p",null,"Keywords specifying the presence (HEADER) or absence (NOHEADER) of a header string in\xa0a ",Object(p.b)("strong",{parentName:"p"},"CSV"),", ",Object(p.b)("strong",{parentName:"p"},"xls"),", or ",Object(p.b)("strong",{parentName:"p"},"xlsx")," file. The default is NOHEADER."),Object(p.b)("p",null,"When using the NOHEADER option:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"if the column name is one of the predefined names (A, B, ..., Z, AA, ...,\xa0AE), it is exported to the column with the corresponding number, and the following columns are exported to the columns next in order after this column.")))),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"ESCAPE | NOESCAPE")),Object(p.b)("p",null,"Keyword specifying the presence (ESCAPE) or absence (NOESCAPE) of escaping for special characters (","\\","\\","r, ","\\","\\",'n, " (double quotes) and the specified delimiter (',Object(p.b)("em",{parentName:"p"},"separator"),") in\xa0a ",Object(p.b)("strong",{parentName:"p"},"CSV"),"\xa0file. It makes sense to use NOESCAPE only in cases where the specified delimiter is guaranteed not to occur in the data. The default is ESCAPE."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"CHARSET charsetStr")),Object(p.b)("p",null,"An option specifying the encoding used for export."),Object(p.b)("p",null,"charsetStr is a string literal that defines the encoding.\xa0"),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"TOP n")),Object(p.b)("p",null,"Exports only the first n records.\xa0",Object(p.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Literals#intliteral-broken"}),"Integer literal"),"."),Object(p.b)("h3",{id:"export-destination"},Object(p.b)("em",{parentName:"h3"},"Export destination")),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"propertyId")),Object(p.b)("p",null,Object(p.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#propertyid-broken"}),"Property ID")," to which the generated file will be written. This property must not have parameters and its value must be of a file class (",Object(p.b)("strong",{parentName:"p"},"FILE"),",\xa0",Object(p.b)("strong",{parentName:"p"},"RAWFILE"),",\xa0",Object(p.b)("strong",{parentName:"p"},"JSONFILE"),", etc.).\xa0If this property is not specified, the ",Object(p.b)("strong",{parentName:"p"},"System.exportFile")," property is used by default."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"groupId1, ..., groupIdM")),Object(p.b)("p",null,"Names of object groups from the exported form for which you want to export data.\xa0",Object(p.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#id-broken"}),"Simple IDs"),".\xa0Used only for exporting forms to flat formats."),Object(p.b)("h3",{id:"propertyidm---propertyidm"},"propertyIdM\xa0",Object(p.b)("em",{parentName:"h3"},", ...,\xa0"),"propertyIdM"),Object(p.b)("p",null,Object(p.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#propertyid-broken"}),"Property IDs")," to which the generated files for specified object groups will be written. These properties must not have parameters and their value must be of file classes (",Object(p.b)("strong",{parentName:"p"},"FILE"),",\xa0",Object(p.b)("strong",{parentName:"p"},"RAWFILE"),",\xa0",Object(p.b)("strong",{parentName:"p"},"JSONFILE"),", etc.). Used only for exporting forms to flat formats.\xa0For\xa0the",Object(p.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Static_view#empty-object-group"}),"empty group"),"\xa0of objects, the name\xa0",Object(p.b)("strong",{parentName:"p"},"root")," is used.\xa0"),Object(p.b)("h3",{id:"examples"},"Examples"),Object(p.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=ActionSample&block=exportplain",mdxType:"CodeSample"}),Object(p.b)(n.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=ActionSample&block=export",mdxType:"CodeSample"}))}l.isMDXComponent=!0}}]);