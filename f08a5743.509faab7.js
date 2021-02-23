(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{397:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var o=n(3),a=n(7),r=(n(0),n(421)),s=n(56),i={title:"How-to: Data import"},c={unversionedId:"How-to_Data_import",id:"How-to_Data_import",isDocsHomePage:!1,title:"How-to: Data import",description:"Example 1",source:"@site/docs\\How-to_Data_import.md",slug:"/How-to_Data_import",permalink:"/docusaurustest/docs/How-to_Data_import",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_Data_import.md",version:"current",sidebar:"docs",previous:{title:"How-to: Data export",permalink:"/docusaurustest/docs/How-to_Data_export"},next:{title:"How-to: Interaction via HTTP protocol",permalink:"/docusaurustest/docs/How-to_Interaction_via_HTTP_protocol"}},l=[],p={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h5",{id:"example-1"},"Example 1"),Object(r.b)("h6",{id:"condition"},"Condition"),Object(r.b)("p",null,"We have the books for which names and prices are defined. The order logic is also defined."),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseImport&block=sample1",mdxType:"CodeSample"}),Object(r.b)("p",null,"We need to create a button that loads the contents of the order from the Excel file selected by the user on their computer."),Object(r.b)("h6",{id:"solution"},"Solution"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseImport&block=solution1",mdxType:"CodeSample"}),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/INPUT_operator"}),"INPUT")," operator which requests a file will display a dialog where the user will be able to choose an .xls or .xlsx file. Once the file is selected successfully, the system will call the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," specified after ",Object(r.b)("strong",{parentName:"p"},"DO"),"."),Object(r.b)("p",null,"It is assumed that a file consists of three columns. The first one (A) contains book codes, the second one (B) contains quantities, and the third one (C) contains prices.\xa0"),Object(r.b)("p",null,"The \xa0",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/IMPORT_operator"}),"IMPORT"),"\xa0operator reads the selected file\xa0and then writes its contents to local properties which take only one argument \u2014 line number. The numbering starts from 0.\xa0The\xa0",Object(r.b)("strong",{parentName:"p"},"imported"),"\xa0property will be set to\xa0",Object(r.b)("strong",{parentName:"p"},"TRUE")," if the file contains a line with the corresponding number.\xa0Then, a corresponding line is created in the order for each of these lines."),Object(r.b)("h5",{id:"example-2"},"Example 2"),Object(r.b)("h6",{id:"condition-1"},"Condition"),Object(r.b)("p",null,"Similar to ",Object(r.b)("strong",{parentName:"p"},"Example 1"),". In addition, we have specified a directory to which an external system puts orders. For each order, a separate CSV file is generated for storing the order date and number (in the denormalized form) along with the book code, quantity, and price."),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseImport&block=sample2",mdxType:"CodeSample"}),Object(r.b)("p",null,"We need to implement an action that will import orders from this folder into the system."),Object(r.b)("h6",{id:"solution-1"},"Solution"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseImport&block=solution2",mdxType:"CodeSample"}),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"listFiles")," action is declared in the ",Object(r.b)("strong",{parentName:"p"},"Utils")," system ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Modules"}),"module"),". The action scans the folder specified in the argument and reads all the files from it and writes their contents to the ",Object(r.b)("strong",{parentName:"p"},"fileName")," and ",Object(r.b)("strong",{parentName:"p"},"fileIsDirectory")," properties."),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/READ_operator"}),"READ")," operator reads the specified file and writes its contents to a local property of the ",Object(r.b)("strong",{parentName:"p"},"FILE")," type which is then processed by the ",Object(r.b)("strong",{parentName:"p"},"IMPORT")," operator. Its arguments specify that the file format is CSV without a title in the first line, with a vertical bar as separator, and with the CP1251 encoding."),Object(r.b)("p",null,"It is assumed that dates and numbers in each line will have the same values. This is why their values are read from the first line with number 0."),Object(r.b)("p",null,"Each file is processed in a separate new ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Change_sessions"}),"change session"),"\xa0and then is saved using the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/APPLY_operator"}),"APPLY")," operator. This operator writes ",Object(r.b)("strong",{parentName:"p"},"TRUE"),"\xa0to the ",Object(r.b)("strong",{parentName:"p"},"canceled")," property when a certain ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Constraints"}),"constraint")," has been violated. Then, the ",Object(r.b)("strong",{parentName:"p"},"MOVE"),"\xa0statement of the ",Object(r.b)("strong",{parentName:"p"},"READ"),' operator moves the file either to "success" folder or "error" folder. This allows us to call the action again without processing the same orders several times.'),Object(r.b)("p",null,"Since the result action has no arguments, we can add it to the scheduler for automatic launch at certain intervals."),Object(r.b)("h5",{id:"example-3"},"Example 3"),Object(r.b)("h6",{id:"condition-2"},"Condition"),Object(r.b)("p",null,"Similar to ",Object(r.b)("strong",{parentName:"p"},"Example 1"),"."),Object(r.b)("p",null,"An external database stores a book directory with their codes and names."),Object(r.b)("p",null,"We need to create an action that will synchronize the book directory with this external database."),Object(r.b)("h6",{id:"solution-2"},"Solution"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseImport&block=solution3",mdxType:"CodeSample"}),Object(r.b)("p",null,"Synchronization consists of the three main actions. First, we create books whose codes can be found in the external database, but not in our database. Then, we update the values for all books that can be found in our database. And finally, books that cannot be found in the external database are removed from our database."),Object(r.b)("p",null,"This guarantees that when the action is started, the book directory will be absolutely identical to that in the external system. This scheme is useful when some master data is maintained in another system. The result action can be added to the scheduler and triggered at certain relatively small time intervals, thereby ensuring near real-time updates for the directory."),Object(r.b)("h5",{id:"example-4"},"Example 4"),Object(r.b)("h6",{id:"condition-3"},"Condition"),Object(r.b)("p",null,"Similar to\xa0",Object(r.b)("strong",{parentName:"p"},"Example 1"),"."),Object(r.b)("p",null,"For each order line, we have added the decoding of this line by color and size."),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseImport&block=sample4",mdxType:"CodeSample"}),Object(r.b)("p",null,"We need to implement the import of orders from the JSON file of the specified structure. A JSON file may look like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),'{\n   "version":"v1",\n   "order":[\n      {\n         "date":"03.01.2018",\n         "number":"430",\n         "detail":[\n            {\n               "item":{\n                  "id":"132",\n                  "info":[\n                     {\n                        "size":"40",\n                        "color":"black",\n                        "quantity":2\n                     },\n                     {\n                        "size":"41",\n                        "color":"white",\n                        "quantity":3\n                     }\n                  ]\n               },\n               "price":1.99\n            },\n            {\n               "item":{\n                  "id":"136",\n                  "info":[\n                     {\n                        "size":"39",\n                        "color":"white",\n                        "quantity":4\n                     },\n                     {\n                        "size":"43",\n                        "color":"red",\n                        "quantity":1\n                     }\n                  ]\n               },\n               "price":2.99\n            }\n         ]\n      },\n      {\n         "date":"04.01.2018",\n         "number":"435",\n         "detail":[\n            {\n               "item":{\n                  "id":"122",\n                  "info":[\n                     {\n                        "size":"L",\n                        "color":"black",\n                        "quantity":1\n                     },\n                     {\n                        "size":"XL",\n                        "color":"white",\n                        "quantity":1\n                     }\n                  ]\n               },\n               "price":11.99\n            },\n            {\n               "item":{\n                  "id":"126",\n                  "info":[\n                     {\n                        "size":"S",\n                        "color":"white",\n                        "quantity":1\n                     },\n                     {\n                        "size":"M",\n                        "color":"red",\n                        "quantity":1\n                     }\n                  ]\n               },\n               "price":12.99\n            }\n         ]\n      },\n   ]\n}\n')),Object(r.b)("p",null,"Solution"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseImport&block=solution4",mdxType:"CodeSample"}),Object(r.b)("p",null,"To implement the import process, we need to declare the form of the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Structured_view"}),"structure")," matching the structure of the JSON file."),Object(r.b)("p",null,"We declare the ",Object(r.b)("strong",{parentName:"p"},"version")," tag at the upmost level without inputs and then add it to the form."),Object(r.b)("p",null,"Since the ",Object(r.b)("strong",{parentName:"p"},"order")," tag is an array, we declare an object with the same name on the form. The platform will create a new object for each array element in the JSON. The ",Object(r.b)("strong",{parentName:"p"},"date")," and ",Object(r.b)("strong",{parentName:"p"},"number"),"\xa0properties for the order will be automatically imported from the corresponding tags in the JSON."),Object(r.b)("p",null,"Similarly, for the ",Object(r.b)("strong",{parentName:"p"},"detail")," tag, we create an object with the same name and then link this object to the ",Object(r.b)("strong",{parentName:"p"},"order")," object using ",Object(r.b)("strong",{parentName:"p"},"FILTERS"),". During the import process, the system will fill the link in the order line based on this filter and the nesting of tags."),Object(r.b)("p",null,"To import values from tags nested in the ",Object(r.b)("strong",{parentName:"p"},"item")," tag, we create a new\xa0",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Groups_of_properties_and_actions"}),"group")," called ",Object(r.b)("strong",{parentName:"p"},"item")," and then place the properties and objects into it. In particular, the local property ",Object(r.b)("strong",{parentName:"p"},"idItem")," is created and then added to the form in this group. Since the property name does not match the tag name, we specify the corresponding name for the property on the form using the ",Object(r.b)("strong",{parentName:"p"},"EXTID")," keyword."))}d.isMDXComponent=!0}}]);