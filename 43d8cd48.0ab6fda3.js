(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{170:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return s})),n.d(e,"toc",(function(){return o})),n.d(e,"default",(function(){return p}));var a=n(3),b=n(7),r=(n(0),n(421)),l=n(56),c={title:"String operators (+, CONCAT, SUBSTRING)"},s={unversionedId:"String_operators_+_CONCAT_SUBSTRING",id:"String_operators_+_CONCAT_SUBSTRING",isDocsHomePage:!1,title:"String operators (+, CONCAT, SUBSTRING)",description:"String operators are operators which parameters and result are the properties which values are instances of the string classes. The platform currently supports the following string operators:",source:"@site/docs\\String_operators_+_CONCAT_SUBSTRING.md",slug:"/String_operators_+_CONCAT_SUBSTRING",permalink:"/docusaurustest/docs/String_operators_+_CONCAT_SUBSTRING",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/String_operators_+_CONCAT_SUBSTRING.md",version:"current",sidebar:"docs",previous:{title:"Extremum (MAX, MIN)",permalink:"/docusaurustest/docs/Extremum_MAX_MIN"},next:{title:"Structure operations (STRUCT, \\[\\])",permalink:"/docusaurustest/docs/Structure_operations_STRUCT"}},o=[{value:"Determining the result class",id:"determining-the-result-class",children:[]},{value:"Examples",id:"examples",children:[]}],O={toc:o};function p(t){var e=t.components,n=Object(b.a)(t,["components"]);return Object(r.b)("wrapper",Object(a.a)({},O,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"String operators are operators which parameters and result are the properties which values are instances of the string classes. The platform currently supports the following string operators:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("div",null,Object(r.b)("br",null),Object(r.b)("div",null,Object(r.b)("br",null),"Operator",Object(r.b)("br",null)),Object(r.b)("br",null))),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("div",null,Object(r.b)("br",null),Object(r.b)("div",null,Object(r.b)("br",null),"Name",Object(r.b)("br",null)),Object(r.b)("br",null))),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("div",null,Object(r.b)("br",null),Object(r.b)("div",null,Object(r.b)("br",null),"Description",Object(r.b)("br",null)),Object(r.b)("br",null))),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("div",null,Object(r.b)("br",null),Object(r.b)("div",null,Object(r.b)("br",null),"Example",Object(r.b)("br",null)),Object(r.b)("br",null))),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("div",null,Object(r.b)("br",null),Object(r.b)("div",null,Object(r.b)("br",null),"Result",Object(r.b)("br",null)),Object(r.b)("br",null))))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",null,"+, ",Object(r.b)("strong",null,Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"/docusaurustest/docs/CONCAT_operator"}),"CONCAT")))),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Concatenation"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Takes two operands and returns a string obtained by concatenating the strings specified in the operands"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"'a' + 'b'"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"'ab'")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",null,"SUBSTRING")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Substring"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("p",null,"Takes three operands and\xa0returns a substring obtained from the string specified in the first operand, starting with the character specified in the second operand, and having length specified in the third operand")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SUBSTRING('abc', 2, 2)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"'bc'")))),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"+")," and ",Object(r.b)("strong",{parentName:"p"},"SUBSTRING")," operators return ",Object(r.b)("strong",{parentName:"p"},"NULL")," if one of the operands is ",Object(r.b)("strong",{parentName:"p"},"NULL"),".\xa0The ",Object(r.b)("strong",{parentName:"p"},"CONCAT"),"\xa0operator treats\xa0",Object(r.b)("strong",{parentName:"p"},"NULL"),"\xa0value of the operand as an empty string (however, concatenation of two ",Object(r.b)("strong",{parentName:"p"},"NULL")," values still returns ",Object(r.b)("strong",{parentName:"p"},"NULL"),"). Also, in the ",Object(r.b)("strong",{parentName:"p"},"CONCAT")," operator you can optionally specify the third operand (",Object(r.b)("em",{parentName:"p"},"delimiter"),") which will be inserted if and only if both operands are not ",Object(r.b)("strong",{parentName:"p"},"NULL"),". For example, CONCAT ' ', 'John', 'Smith' = 'John Smith', but CONCAT ' ', 'John', NULL = 'John'."),Object(r.b)("h3",{id:"determining-the-result-class"},"Determining the result class"),Object(r.b)("p",null,"The result class is defined as:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Operator"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",null,"+"),", ",Object(r.b)("strong",null,"CONCAT")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("pre",null,Object(r.b)("code",null,"result = STRING","[p1.blankPadded AND p2.blankPadded, p1.caseInsensitive OR p2.caseInsensitive, p1.length + p2.length]")))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",null,"SUBSTRING(p, from, length)")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("pre",null,Object(r.b)("code",null,"result = STRING","[p.blankPadded, p.caseInsensitive, length]")))))),Object(r.b)("p",null,"where ",Object(r.b)("em",{parentName:"p"},"blankPadded"),",\xa0",Object(r.b)("em",{parentName:"p"},"caseInsensitive"),"\xa0and\xa0",Object(r.b)("em",{parentName:"p"},"length")," are determined similarly to the rules for construction of a common ancestor\xa0for two\xa0built-in classes (Strings family)."),Object(r.b)("p",null,"In the + operator, operands which classes are other than string are cast to strings in accordance with the following table:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Class"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Cast class"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("p",null,Object(r.b)("strong",null,"DATE"),", ",Object(r.b)("strong",null,"DATETIME"),", ",Object(r.b)("strong",null,"TIME"))),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",null,"STRING","[25]"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",null,"NUMERIC")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",null,"STRING","[p.length]"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",null,"LOGICAL")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",null,"STRING","[1]"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",null,"FILE")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",null,"TEXT"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"/docusaurustest/docs/User_classes"}),"Object")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",null,"STRING","[10]"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Other"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",null,"STRING","[8]"))))),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=concat",mdxType:"CodeSample"}))}p.isMDXComponent=!0}}]);