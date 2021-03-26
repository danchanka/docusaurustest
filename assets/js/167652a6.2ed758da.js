(window.webpackJsonp=window.webpackJsonp||[]).push([[57,436],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(7),r=(n(0),n(750)),i=n(57),p={title:"How-to: Data export"},c={unversionedId:"How-to_Data_export",id:"How-to_Data_export",isDocsHomePage:!1,title:"How-to: Data export",description:"Example 1",source:"@site/docs/How-to_Data_export.md",slug:"/How-to_Data_export",permalink:"/docusaurustest/docs/next/How-to_Data_export",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_Data_export.md",version:"current",sidebar:"docs",previous:{title:"How-to: Working with external formats: Overview",permalink:"/docusaurustest/docs/next/How-to_Working_with_external_formats"},next:{title:"How-to: Data import",permalink:"/docusaurustest/docs/next/How-to_Data_import"}},s=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],l={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"example-1"},"Example 1"),Object(r.b)("h3",{id:"condition"},"Condition"),Object(r.b)("p",null,"We have sales orders for several books."),Object(r.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExport&block=sample1",mdxType:"CodeSample"}),Object(r.b)("p",null,"We need to create a button that exports the contents of the order in the XML format."),Object(r.b)("h3",{id:"solution"},"Solution"),Object(r.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExport&block=solution1",mdxType:"CodeSample"}),Object(r.b)("p",null,"To upload the data in the XML format, we need to create a form ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Structured_view"},"with the corresponding structure")," and then call the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/EXPORT_operator"},"EXPORT operator"),". This operator will generate a file based on the form and then write the file to the ",Object(r.b)("strong",{parentName:"p"},"exportFile")," property, which is then opened on the client side using the ",Object(r.b)("strong",{parentName:"p"},"open"),' action. The file will be opened in the software associated with its extension (i. e. ".json").'),Object(r.b)("p",null,"The resulting XML will look like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'<Order timeStamp="13.11.18 12:28:58">\n   <Info>\n      <date>13.11.18</date>\n      <number>12</number>\n      <Customer>\n         <name>Customer2</name>\n         <address>Address2</address>\n      </Customer>\n   </Info>\n   <Specification count="2">\n      <Detail>\n         <nameBook>Book2</nameBook>\n         <quantity>1</quantity>\n         <price currency="USD">3.99</price>\n      </Detail>\n      <Detail>\n         <nameBook>Book1</nameBook>\n         <quantity>2</quantity>\n         <price currency="EUR">4.99</price>\n      </Detail>\n   </Specification>\n</Order>\n')),Object(r.b)("p",null,"The parent tag ",Object(r.b)("strong",{parentName:"p"},"Order")," matches the name of the form. Names of all other tags are defined either by a property name on the form (e. g. ",Object(r.b)("strong",{parentName:"p"},"date"),", ",Object(r.b)("strong",{parentName:"p"},"number"),"\xa0or ",Object(r.b)("strong",{parentName:"p"},"count"),") or by the special parameter\xa0",Object(r.b)("strong",{parentName:"p"},"EXTID")," (e. g. ",Object(r.b)("strong",{parentName:"p"},"name")," and ",Object(r.b)("strong",{parentName:"p"},"address"),"). Use of EXTID is preferable when the form contains several properties with the same name, but for different objects."),Object(r.b)("p",null,'To create "intermediate" tags (e. g. ',Object(r.b)("strong",{parentName:"p"},"Info"),", ",Object(r.b)("strong",{parentName:"p"},"Customer")," or ",Object(r.b)("strong",{parentName:"p"},"Specification"),"), the correspondingly nested groups are created to which the necessary properties are then exported."),Object(r.b)("p",null,"Use of the ",Object(r.b)("strong",{parentName:"p"},"ATTR"),"\xa0attribute allows you to put the value not in a separate tag, but in the attribute of a parent tag (e. g. ",Object(r.b)("strong",{parentName:"p"},"timeStamp")," or ",Object(r.b)("strong",{parentName:"p"},"count"),")."),Object(r.b)("p",null,"To put the currency attribute into the ",Object(r.b)("strong",{parentName:"p"},"price")," tag, a group with the corresponding name is created, into which the ",Object(r.b)("strong",{parentName:"p"},"nameCurrency")," and ",Object(r.b)("strong",{parentName:"p"},"price")," properties are then added. Since the ",Object(r.b)("strong",{parentName:"p"},"ATTR")," attribute is specified for currency, the currency is added to the ",Object(r.b)("strong",{parentName:"p"},"price")," tag as attribute. And for the price, the predefined ",Object(r.b)("strong",{parentName:"p"},"EXTID"),"\xa0",Object(r.b)("strong",{parentName:"p"},"value")," is set and therefore the value is written directly to the ",Object(r.b)("strong",{parentName:"p"},"price")," tag. Without all these parameters, the result would be as follows:"),Object(r.b)("p",null,"<price",">","<currency",">","USD</currency",">","<price",">","4.99</price",">","</price",">","."),Object(r.b)("p",null,"If you have a target XML template into which you need to export data, then use the following rules."),Object(r.b)("p",null,"Any tag in the resulting file is generated by one of four elements:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("em",{parentName:"li"},"Property")," (to be declared using ",Object(r.b)("strong",{parentName:"li"},"PROPERTIES"),")."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("em",{parentName:"li"},"Object")," (to be declared using ",Object(r.b)("strong",{parentName:"li"},"OBJECTS"),")."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("em",{parentName:"li"},"Property group")," (to be declared using ",Object(r.b)("strong",{parentName:"li"},"GROUP")," outside the form)."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("em",{parentName:"li"},"Form")," (the upper tag)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If the tag repeats several times in a row (e. g. ",Object(r.b)("strong",{parentName:"p"},"Detail"),"), declare an ",Object(r.b)("em",{parentName:"p"},"object")," with the matching name.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If a tag contains nested tags, but is used only once (e. g. ",Object(r.b)("strong",{parentName:"p"},"Specification"),"), then declare a ",Object(r.b)("em",{parentName:"p"},"property group"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'If the tag contains attributes (e. g. count = "2"), then it must be generated either by a ',Object(r.b)("em",{parentName:"p"},"property group")," or by an ",Object(r.b)("em",{parentName:"p"},"object")," (depending on whether this tag is used once or more).")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If the tag contains a value, then such tag must be generated either by a ",Object(r.b)("em",{parentName:"p"},"property"),"\xa0(e. g. ",Object(r.b)("strong",{parentName:"p"},"nameBook")," or ",Object(r.b)("strong",{parentName:"p"},"quantity"),') with the corresponding name or by an object/property group with the only "nested" property having ',Object(r.b)("strong",{parentName:"p"},"EXTID")," 'value')."))),Object(r.b)("h2",{id:"example-2"},"Example 2"),Object(r.b)("h3",{id:"condition-1"},"Condition"),Object(r.b)("p",null,"Similar to ",Object(r.b)("strong",{parentName:"p"},"Example 1"),"."),Object(r.b)("p",null,"We need to create a button that exports the contents of the order in the JSON format."),Object(r.b)("h3",{id:"solution-1"},"Solution"),Object(r.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExport&block=solution2",mdxType:"CodeSample"}),Object(r.b)("p",null,"The resulting file will look like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'{  \n   "timeStamp":"13.11.18 15:11:45",\n   "Info":{  \n      "date":"13.11.18",\n      "number":"12",\n      "Customer":{  \n         "address":"Address 2",\n         "name":"Customer 2"\n      }\n   },\n   "Specification":{  \n      "count":2,\n      "Detail":[  \n         {  \n            "quantity":1,\n            "price":3.99,\n            "nameBook":"Book 2"\n         },\n         {  \n            "quantity":2,\n            "price":4.99,\n            "nameBook":"Book 1"\n         }\n      ]\n   }\n}\n')),Object(r.b)("p",null,"Note that the ",Object(r.b)("strong",{parentName:"p"},"ATTR")," instruction is ignored when you export data in the JSON format."),Object(r.b)("h2",{id:"example-3"},"Example 3"),Object(r.b)("h3",{id:"condition-2"},"Condition"),Object(r.b)("p",null,"Similar to\xa0",Object(r.b)("strong",{parentName:"p"},"Example 1"),"."),Object(r.b)("p",null,"We need to create a button that exports all the orders for a certain date in the CSV format."),Object(r.b)("h3",{id:"solution-2"},"Solution"),Object(r.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExport&block=solution3",mdxType:"CodeSample"}),Object(r.b)("p",null,"The first action gets a date as input and then generates a flat CSV file with a semicolon delimiter using the ",Object(r.b)("strong",{parentName:"p"},"EXPORT")," operator. The file will look like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"number;customer;book;quantity;price\n14;Customer 1;Book 1;2;8.99\n12;Customer 2;Book 2;1;3.99\n12;Customer 2;Book 1;2;4.99\n")),Object(r.b)("p",null,"The column name is overridden for the first three parameters, while the other two use the names of the corresponding properties. The result is first written to the local property ",Object(r.b)("strong",{parentName:"p"},"file"),". Then the user is prompted to save the file from that property to his workstation. This is done using",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/WRITE_operator"},"WRITE operator"),"."),Object(r.b)("p",null,"The second action opens the form, asks the user to enter a date and then calls the first data export action."))}b.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"CodeSample",(function(){return u})),n.d(t,"default",(function(){return d}));var o=n(3),a=n(7),r=n(0),i=n.n(r),p=n(750),c=n(751),s={},l={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},b=[],u=function(e){var t=e.url,n=e.lines,o=Object(r.useState)(""),a=o[0],s=o[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return s(e)}))}),[t,s]),a?n?Object(p.b)(i.a.Fragment,null,Object(p.b)(c.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},a),Object(p.b)("br",null)):Object(p.b)(i.a.Fragment,null,Object(p.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},a),Object(p.b)("br",null)):Object(p.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:b,CodeSample:u};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0}}]);