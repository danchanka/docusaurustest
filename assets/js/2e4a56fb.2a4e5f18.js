(window.webpackJsonp=window.webpackJsonp||[]).push([[108,461],{182:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(7),o=(a(0),a(750)),s=a(58),p={title:"IMPORT operator"},i={unversionedId:"IMPORT_operator",id:"version-1.0.0/IMPORT_operator",isDocsHomePage:!1,title:"IMPORT operator",description:"The IMPORT operator creates an action that imports\xa0data from a specified file into specified properties (parameters)\xa0or, in general, into a specified form.",source:"@site/versioned_docs/version-1.0.0/IMPORT_operator.md",slug:"/IMPORT_operator",permalink:"/docusaurustest/docs/IMPORT_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/IMPORT_operator.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"IF ... THEN operator (action)",permalink:"/docusaurustest/docs/IF_..._THEN_operator_action_"},next:{title:"INPUT operator",permalink:"/docusaurustest/docs/INPUT_operator"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"<em>Source of import</em>",id:"source-of-import",children:[]},{value:"<em>Import format</em>",id:"import-format",children:[]},{value:"<em>Import destination</em>",id:"import-destination",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:c};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"IMPORT")," operator creates an ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"action")," that imports\xa0data from a specified file into ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Data_import_IMPORT_"},"specified properties (parameters)"),"\xa0or, in general, into a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/In_a_structured_view_EXPORT_IMPORT_#importForm"},"specified form"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"IMPORT [importFormat] FROM fileExpr importDestination [DO actionOperator [ELSE elseActionOperator]]\nIMPORT formName [importFormat] [FROM (fileExpr | (groupId1 = fileExpr1 [, ..., groupIdM = fileExprM])]\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"importFormat"),"\xa0can be specified by one of the following options:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"JSON [CHARSET charsetStr]\nXML [ATTR] [CHARSET charsetStr]\nCSV [separator] [HEADER | NOHEADER] [ESCAPE | NOESCAPE] [CHARSET charsetStr]\nXLS [HEADER | NOHEADER] [SHEET (sheetExpr | ALL)]\nDBF [CHARSET charsetStr]\nTABLE\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"importDestination"),"\xa0can be specified by one of the following options:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"TO [(objClassId1, objClassId2, ..., objClassIdK)] propertyId1 [= columnId1], ..., propertyIdN [= columnIdN] [WHERE whereId]\nFIELDS [(objClassId1 objAlias1, objClassId2 objAlias1, ..., objClassIdK objAliasK)] propClassId1 [propAlias1 =] columnId1 [NULL], ..., propClassIdN [propAliasN =] columnIdN [NULL]\n\nDescription\n")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"IMPORT")," operator creates an action that imports data from a specified file into the values of specified properties or into a specified form.\xa0"),Object(o.b)("p",null,"If *\xa0",Object(o.b)("em",{parentName:"p"},"the format of the imported file"),"\xa0*is not specified, it is determined automatically depending on the class of the imported file (or on the extension, if the class is ",Object(o.b)("strong",{parentName:"p"},"FILE"),"), in the following way:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("p",null,"Format")),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("p",null,"Extension")),Object(o.b)("th",{parentName:"tr",align:null},"Class"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"JSON")),Object(o.b)("td",{parentName:"tr",align:null},"json"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"JSONFILE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"XML")),Object(o.b)("td",{parentName:"tr",align:null},"xml"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"XMLFILE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"CSV")),Object(o.b)("td",{parentName:"tr",align:null},"csv"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"CSVFILE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"XLS")),Object(o.b)("td",{parentName:"tr",align:null},"xls or xlsx"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"EXCELFILE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"DBF")),Object(o.b)("td",{parentName:"tr",align:null},"dbf"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"DBFFILE"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"TABLE")),Object(o.b)("td",{parentName:"tr",align:null},"table"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",null,"TABLEFILE"))))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The first passed file is used to automatically determine a flat file format by its extension"))),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("h3",{id:"source-of-import"},Object(o.b)("em",{parentName:"h3"},"Source of import")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"fileExpr")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Expression"},"Expression")," whose value is the imported file. The value of the expression must be an object of a file class (",Object(o.b)("strong",{parentName:"p"},"FILE"),", ",Object(o.b)("strong",{parentName:"p"},"RAWFILE"),", ",Object(o.b)("strong",{parentName:"p"},"JSONFILE")," etc. ).\xa0If this expression is not specified when importing a form, then the default expression is\xa0",Object(o.b)("strong",{parentName:"p"},"System.importFile()"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"groupId1, ..., groupIdM")),Object(o.b)("p",null,"Names of object groups of the imported form for which you want to import data.\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#id-broken"},"Simple IDs"),".\xa0Used only for importing a form from flat formats."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"fileExpr1 , ..., fileExprM")),Object(o.b)("p",null,"Expressions whose values are files that need to be imported for the specified object groups. The value of each expression must be an object of a file class (",Object(o.b)("strong",{parentName:"p"},"FILE"),", ",Object(o.b)("strong",{parentName:"p"},"RAWFILE"),", ",Object(o.b)("strong",{parentName:"p"},"JSONFILE")," etc. ). Used only to import forms from flat formats.\xa0For\xa0the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Static_view#empty"},"empty object group"),",\xa0the name\xa0",Object(o.b)("strong",{parentName:"p"},"root")," is used.\xa0"),Object(o.b)("h3",{id:"import-format"},Object(o.b)("em",{parentName:"h3"},"Import format")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ATTR")),Object(o.b)("p",null,"A keyword that specifies that values should be read from the attributes of an element. If not specified, then reading happens from child elements. Only applicable for import from\xa0",Object(o.b)("strong",{parentName:"p"},"XML"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"separator")),Object(o.b)("p",null,"Delimiter in a ",Object(o.b)("strong",{parentName:"p"},"CSV"),"\xa0file.\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Literals#strliteral-broken"},"String literal"),". If not specified, then the default delimiter is '",Object(o.b)("strong",{parentName:"p"},";")," '."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"HEADER | NOHEADER")),Object(o.b)("p",null,"Keywords specifying the presence (",Object(o.b)("strong",{parentName:"p"},"HEADER"),") or absence (",Object(o.b)("strong",{parentName:"p"},"NOHEADER"),") of a header string in\xa0a ",Object(o.b)("strong",{parentName:"p"},"CSV"),"\xa0, or\xa0",Object(o.b)("strong",{parentName:"p"},"XLS"),"\xa0file. The default is ",Object(o.b)("strong",{parentName:"p"},"NOHEADER"),"."),Object(o.b)("p",null,"When using the ",Object(o.b)("strong",{parentName:"p"},"NOHEADER")," option:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"column names are considered to be: A, B, ..., Z, AA, ..., \xa0AE,\xa0..."),Object(o.b)("li",{parentName:"ul"},"if a column is not found / does not match the type of the destination property, the value of this column is considered to be ",Object(o.b)("strong",{parentName:"li"},"NULL")," (in other import formats, in the platform throws an error in these cases).")))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ESCAPE | NOESCAPE")),Object(o.b)("p",null,"Keyword specifying the presence (",Object(o.b)("strong",{parentName:"p"},"ESCAPE"),") or absence (",Object(o.b)("strong",{parentName:"p"},"NOESCAPE"),") of escaping for special characters (","\\","\\","r, ","\\","\\",'n, " (double quotes)) and the specified delimiter (',Object(o.b)("em",{parentName:"p"},"separator"),") in a\xa0",Object(o.b)("strong",{parentName:"p"},"CSV"),"\xa0file. It makes sense to use ",Object(o.b)("strong",{parentName:"p"},"NOESCAPE")," only in cases where the specified delimiter is guaranteed not to occur in the data. The default is ",Object(o.b)("strong",{parentName:"p"},"ESCAPE"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"SHEET sheetExpr")),Object(o.b)("p",null,"An option specifying the import of a specific sheet from an Excel file. If the option is not specified, then sheet number 1 is taken."),Object(o.b)("p",null,"sheetExpr - an expression whose value determines the number of the sheet imported from the Excel file. The value of the expression must be of class ",Object(o.b)("strong",{parentName:"p"},"INTEGER")," or ",Object(o.b)("strong",{parentName:"p"},"LONG"),". Numbering starts from 1."),Object(o.b)("p",null,"ALL - a keyword that means that import will be from all sheets of the excel file."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CHARSET charsetStr")),Object(o.b)("p",null,"An option specifying the encoding used for import."),Object(o.b)("p",null,"charsetStr is a string literal that defines the encoding.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionOperator")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Action_operator#contextdependent"},"Context-dependent action operator")," describing the action that is executed for each imported record."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"elseActionOperator")),Object(o.b)("p",null,"A context-dependent action operator describing the action that is executed if no records have been imported. Parameters into which\xa0data is imported cannot be used as parameters of this action."),Object(o.b)("h3",{id:"import-destination"},Object(o.b)("em",{parentName:"h3"},"Import destination")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"formName")),Object(o.b)("p",null,"The name of the form into which data has to be imported.\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#cid-broken"},"Composite ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"objClassId1, ..., objClassIdK")),Object(o.b)("p",null,"Classes\xa0of the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Data_import_IMPORT_#objects-broken"},"imported"),"\xa0objects. Specified by ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#classid-broken"},"class IDs"),".\xa0K <= 1. By default, it is assumed that what is being imported is one object of class\xa0",Object(o.b)("strong",{parentName:"p"},"INTEGER"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"objAlias1, ..., objAliasK")),Object(o.b)("p",null,"Names of local parameters into which imported objects are written.\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#id-broken"},"Simple IDs"),".\xa0K <= 1. By default, it is assumed that one object is being imported with the name\xa0",Object(o.b)("strong",{parentName:"p"},"row"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId1, ..., propertyIdN")),Object(o.b)("p",null,"List\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/IDs#propertyid-broken"},"property IDs")," into which columns (fields) of data are imported. Property parameters and their classes must match the imported objects and their classes."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"columnId1, ..., columnIdN")),Object(o.b)("p",null,"A list of column IDs in the source file from which data will be imported to the corresponding property. Each element of the list is specified either by\xa0a simple ID or by a\xa0string literal. When the ID of a nonexistent column is specified, or in the absence of an ID, the column corresponding to the property is the column that follows the column specified for the previous property in the list, or the first if the first property is specified.\xa0For ",Object(o.b)("strong",{parentName:"p"},"DBF")," files,\xa0column IDs are case-insensitive.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"whereId")),Object(o.b)("p",null,"Property ID to which\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Built-in_classes#defaultvalue"},"a default value"),"\xa0of the class of this property\xa0value will be written for each imported object.\xa0Property parameters and classes must match the imported objects and their classes.\xa0If the property is not specified and the number of imported objects is greater than 0, a property with the name ",Object(o.b)("strong",{parentName:"p"},"imported")," and classes of imported objects (e.g. ",Object(o.b)("strong",{parentName:"p"},"System.imported","[","INTEGER","]"),") is used."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propClassId1, ..., "),"propClassId",Object(o.b)("em",{parentName:"p"},"N")),Object(o.b)("p",null,"List of names\xa0of ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Built-in_classes"},"builtin classes"),"\xa0of the imported columns."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propAlias1, ..., propAliasN")),Object(o.b)("p",null,"Names of local parameters into which columns (fields) of data are imported.\xa0Simple IDs. If the name is not specified, then the name of the column (field) in the source file will be used as the parameter name."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NULL")),Object(o.b)("p",null,"Keyword. Specifies that\xa0",Object(o.b)("strong",{parentName:"p"},"NULL"),"\xa0values during import (if the imported format supports them) will not be replaced with default values (for example, 0 for numbers, the empty string for strings, etc. )."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=import",mdxType:"CodeSample"}),Object(o.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=importForm",mdxType:"CodeSample"}))}l.isMDXComponent=!0},58:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return l})),a.d(t,"CodeSample",(function(){return m})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),o=a(0),s=a.n(o),p=a(750),i=a(751),c={},b={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},l=[],m=function(e){var t=e.url,a=e.lines,r=Object(o.useState)(""),n=r[0],c=r[1];return Object(o.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return c(e)}))}),[t,c]),n?a?Object(p.b)(s.a.Fragment,null,Object(p.b)(i.a,{className:"lsf",metastring:a,mdxType:"CodeBlock"},n),Object(p.b)("br",null)):Object(p.b)(s.a.Fragment,null,Object(p.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},n),Object(p.b)("br",null)):Object(p.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},d={toc:l,CodeSample:m};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0}}]);