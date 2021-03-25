(window.webpackJsonp=window.webpackJsonp||[]).push([[210,461],{284:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var s=a(3),n=a(7),r=(a(0),a(750)),o=a(58),i={title:"Access to an external system (EXTERNAL)"},c={unversionedId:"Access_to_an_external_system_EXTERNAL_",id:"version-1.0.0/Access_to_an_external_system_EXTERNAL_",isDocsHomePage:!1,title:"Access to an external system (EXTERNAL)",description:"The operator for accessing an external system executes a specified code in the language/paradigm of the external system specified. In addition, this operator allows passing objects of\xa0built-in classes as parameters of this type of call, and also writing the\xa0results\xa0of calls to the properties specified (without parameters).",source:"@site/versioned_docs/version-1.0.0/Access_to_an_external_system_EXTERNAL_.md",slug:"/Access_to_an_external_system_EXTERNAL_",permalink:"/docusaurustest/docs/Access_to_an_external_system_EXTERNAL_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/Access_to_an_external_system_EXTERNAL_.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Access from an internal system",permalink:"/docusaurustest/docs/Access_from_an_internal_system"},next:{title:"Access to an internal system (INTERNAL, FORMULA): Overview",permalink:"/docusaurustest/docs/Access_to_an_internal_system_INTERNAL_FORMULA_"}},l=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(s.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The operator for ",Object(r.b)("em",{parentName:"p"},"accessing an external system")," executes a specified code in the language/paradigm of the external system specified. In addition, this operator allows passing objects of\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Built-in_classes"},"built-in classes")," as parameters of this type of call, and also writing the\xa0",Object(r.b)("em",{parentName:"p"},"results"),"\xa0of calls to the properties specified (without parameters)."),Object(r.b)("p",null,"Currently the platform supports the following types of interactions/external systems:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"HTTP - web server HTTP request"),".\xa0")),Object(r.b)("p",null,"For this type of interaction, only the request string (URL)\xa0is specified, which simultaneously determines both the server address and the request to be executed."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Parameters")),Object(r.b)("p",null,"Parameters can be passed both in the request string (to refer to the parameter, the special character $ and the number of this parameter, starting with 1, are used) and in its body (BODY). It is assumed that all parameters not used in the request string are passed to BODY."),Object(r.b)("p",null,"When processing file class parameters (",Object(r.b)("strong",{parentName:"p"},"FILE"),", ",Object(r.b)("strong",{parentName:"p"},"PDFFILE"),", etc.) to BODY,\xa0the ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Media_type"},"content type"),"\xa0of the parameter, depending on the file extension, is determined in accordance with the following ",Object(r.b)("a",{parentName:"p",href:"https://github.com/lsfusion/platform/blob/master/api/src/main/resources/MIMETypes.properties"},"table"),". If the file extension is not found in this table, the content type is set\xa0to application/<file\xa0extension",">","."),Object(r.b)("p",null,"The file extension in this case is determined automatically, similarly to the\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/WRITE_operator#extension-broken"},Object(r.b)("strong",{parentName:"a"},"WRITE"),"\xa0operator"),"."),Object(r.b)("p",null,"In each of the three cases above, if the parameter value is\xa0",Object(r.b)("strong",{parentName:"p"},"NULL"),', "null" is substituted for the file extension in the content type (for example, application/null), and an empty string is passed as the parameter itself.'),Object(r.b)("p",null,"Parameters of classes that differ from those of files are converted into strings and are passed as a text/plain content type.\xa0",Object(r.b)("strong",{parentName:"p"},"NULL"),"\xa0values are passed as empty strings."),Object(r.b)("p",null,"If necessary, using the special ",Object(r.b)("strong",{parentName:"p"},"HEADERS")," option you can define the ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_header_fields"},"headers")," of the request being executed. To do this, you need to specify a property with exactly one parameter of the string class in which the header will be stored, and with the value of the string class in which the value of this header will be stored."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Results")),Object(r.b)("p",null,"When processing a request response,\xa0results\xa0with a content type from the following\xa0",Object(r.b)("a",{parentName:"p",href:"https://github.com/lsfusion/platform/blob/master/api/src/main/resources/MIMETypes.properties"},"table"),"\xa0are considered files, and can only be written to properties whose value class is\xa0",Object(r.b)("strong",{parentName:"p"},"FILE"),'. During this process, the corresponding file\xa0extension is taken from the table mentioned above. If a particular content type is not found in the table, but it starts with "application," the result is still considered a file, and the file extension is taken from the right part of the content\xa0type (for example, for\xa0the "application/abc" content type it will be "abc"). Results with the "application/null" content type are considered equal to ',Object(r.b)("strong",{parentName:"p"},"NULL"),"."),Object(r.b)("p",null,"Results with content types different from the ones mentioned above are considered strings and when writing are automatically converted into the\xa0classes with the value of the properties to which they are being written.\xa0Empty strings are converted to\xa0",Object(r.b)("strong",{parentName:"p"},"NULL"),"."),Object(r.b)("p",null,"If necessary, using the special ",Object(r.b)("strong",{parentName:"p"},"HEADERSTO")," option you can write the ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_header_fields"},"headers")," of the request response received to the specified property. This property must have exactly one parameter of the string class in which the header will be stored, and the value of the string class in which the value of this header will be stored."),Object(r.b)("p",null,"All results are returned in UTF-8 encoding."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Multiple "),"results/*parameters in BODY***"),Object(r.b)("p",null,"If more than one parameter is passed to BODY,\xa0then:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If the option\xa0",Object(r.b)("strong",{parentName:"li"},"BODYURL"),'\xa0is specified, the BODY content type on transmission is\xa0set to "application/x-www-form-urlencoded," and the specified string, in which the parameters are encoded as if they were ',Object(r.b)("a",{parentName:"li",href:"#url-broken"},"passed in the request string"),", is passed as BODY."),Object(r.b)("li",{parentName:"ul"},'Otherwise, during transmission the\xa0response content type is set to "multipart/mixed," and the parameters are passed as components of this BODY.\xa0')),Object(r.b)("p",null,"In turn, if the request response type is multipart/","*"," or application/x-www-form-urlencoded, it will be split into parts, and each part will be considered a separate execution result. In this case, the order of these results is equal to the order of the corresponding parts in the request response."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Note that the processing of parameters and request results is largely similar to their processing during ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Access_from_an_external_system"},"access from an external system")," over the HTTP protocol (here parameters are processed as results and, conversely, results are processed as parameters)"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"SQL - executing an SQL server command"),".\xa0")),Object(r.b)("p",null,"For this type of interaction, a connection string and the SQL command(s) to be executed are specified. Parameters can be passed both in the connection string and in the SQL command. To access the parameter, the special character\xa0$ and the parameter number are used (starting from 1)."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Parameters")),Object(r.b)("p",null,"File class parameters (",Object(r.b)("strong",{parentName:"p"},"FILE"),",\xa0",Object(r.b)("strong",{parentName:"p"},"PDFFILE"),",\xa0etc.)\xa0can be used only in an SQL command (not in the connection string). Furthermore, if any of the parameters, when executed,\xa0is a file in ",Object(r.b)("strong",{parentName:"p"},"TABLE")," format (",Object(r.b)("strong",{parentName:"p"},"TABLEFILE")," or ",Object(r.b)("strong",{parentName:"p"},"\xa0FILE"),"\xa0with the extension ",Object(r.b)("strong",{parentName:"p"},"table"),"), that parameter is considered to be a table and in this case:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"before executing an SQL command, the value of each such parameter is loaded onto the server into a temporary table"),Object(r.b)("li",{parentName:"ul"},"when substituting parameters, the name of the created temporary table is substituted instead of the parameter value itself")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Results")),Object(r.b)("p",null,"The execution results are: for DML requests - numbers equal to the number of processed records; for SELECT requests - files in ",Object(r.b)("strong",{parentName:"p"},"TABLE")," format (",Object(r.b)("strong",{parentName:"p"},"FILE"),"\xa0with the extension ",Object(r.b)("strong",{parentName:"p"},"table"),") containing the results of these requests. The order of these results is equal to the execution order of the corresponding\xa0queries in the SQL command."),Object(r.b)("p",null,"The predefined LOCAL value may be used as the connection string. In this case the connection will be made to the database server used by the platform."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"LSF - calling an action of another lsFusion server"),".\xa0")),Object(r.b)("p",null,"For this type of interaction, the following things need to be specified: the connection string for connecting to the lsFusion server (or its web server, if any), the\xa0action being executed, and the list of properties (without parameters) to whose values the results of the call will be written.\xa0The parameters passed must match the parameters of the action being performed by number and by class."),Object(r.b)("p",null,"The way of defining an action in this type of interaction fully corresponds to the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Access_from_an_external_system#actiontype"},"way of defining")," an action during ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Access_from_an_external_system"},"access from an external system"),"."),Object(r.b)("p",null,"By default, this type of interaction is implemented via HTTP protocol using the corresponding interfaces for access ",Object(r.b)("a",{parentName:"p",href:"#http-broken"},"to")," and ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Access_from_an_external_system#http-broken"},"from")," an external system."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You can also use operators for ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Read_file_READ_"},"reading")," and ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Write_file_WRITE_"},"writing")," files to access external systems (if file exchange is the interface for this interaction)."))),Object(r.b)("h3",{id:"language"},"Language"),Object(r.b)("p",null,"To declare an action that accesses an external system, use the\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/EXTERNAL_operator"},Object(r.b)("strong",{parentName:"a"},"EXTERNAL"),"\xa0operator"),"."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)(o.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=external",mdxType:"CodeSample"}))}b.isMDXComponent=!0},58:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return b})),a.d(t,"CodeSample",(function(){return d})),a.d(t,"default",(function(){return u}));var s=a(3),n=a(7),r=a(0),o=a.n(r),i=a(750),c=a(751),l={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},b=[],d=function(e){var t=e.url,a=e.lines,s=Object(r.useState)(""),n=s[0],l=s[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),n?a?Object(i.b)(o.a.Fragment,null,Object(i.b)(c.a,{className:"lsf",metastring:a,mdxType:"CodeBlock"},n),Object(i.b)("br",null)):Object(i.b)(o.a.Fragment,null,Object(i.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},n),Object(i.b)("br",null)):Object(i.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:b,CodeSample:d};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(s.a)({},m,a,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0}}]);