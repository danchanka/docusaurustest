(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{394:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return p})),o.d(t,"metadata",(function(){return i})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return b}));var a=o(3),n=o(7),r=(o(0),o(421)),s=o(56),p={title:"How-to: Interaction via HTTP protocol"},i={unversionedId:"How-to_Interaction_via_HTTP_protocol",id:"How-to_Interaction_via_HTTP_protocol",isDocsHomePage:!1,title:"How-to: Interaction via HTTP protocol",description:"Example 1",source:"@site/docs\\How-to_Interaction_via_HTTP_protocol.md",slug:"/How-to_Interaction_via_HTTP_protocol",permalink:"/docusaurustest/docs/How-to_Interaction_via_HTTP_protocol",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_Interaction_via_HTTP_protocol.md",version:"current",sidebar:"docs",previous:{title:"How-to: Data import",permalink:"/docusaurustest/docs/How-to_Data_import"},next:{title:"How-to: Frontend",permalink:"/docusaurustest/docs/How-to_Frontend"}},l=[],c={toc:l};function b(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h5",{id:"example-1"},"Example 1"),Object(r.b)("h6",{id:"task"},"Task"),Object(r.b)("p",null,"We have a certain set of cities associated with their countries."),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExternal&block=sample1",mdxType:"CodeSample"}),Object(r.b)("p",null,"We need to send an HTTP request for adding a city in the JSON format to a certain url."),Object(r.b)("h6",{id:"solution"},"Solution"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExternal&block=solution1",mdxType:"CodeSample"}),Object(r.b)("p",null,"The\xa0",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_export_EXPORT"}),"EXPORT"),"\xa0operator will create a JSON in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Built-in_classes"}),"FILE")," format and then will write it to the exportFile property. Here is an example of the generated file:\xa0"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'{"countryId":"123","name":"San Francisco"}\n')),Object(r.b)("p",null,"Then we call the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Access_to_an_external_system_EXTERNAL"}),"EXTERNAL")," operator, which sends a request to the specified url passing there the contents of the generated file as Body. In this case, since the property in the FROM block has the type JSON, ",Object(r.b)("em",{parentName:"p"},"application/json")," will be used as the content type. <namespace",">","<property name",">"," is encoded in the url. In this case, the namespace of the action being called (",Object(r.b)("strong",{parentName:"p"},"createCity"),") is ",Object(r.b)("strong",{parentName:"p"},"Location"),". All parameters are passed consequently with the ID\xa0",Object(r.b)("strong",{parentName:"p"},"p"),". \xa0The response from the server will be written to the ",Object(r.b)("strong",{parentName:"p"},"result")," property. Suppose that the response is received in the JSON format and has one of the following types:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'{"code":"0","message":"OK"}\n\n{"code":"1","message":"Invalid country code"}\n')),Object(r.b)("p",null,"The response is handled by the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_import_IMPORT"}),"IMPORT")," operator which parses the corresponding parameters into the ",Object(r.b)("strong",{parentName:"p"},"code")," and ",Object(r.b)("strong",{parentName:"p"},"message")," properties respectively. If any error occurs, the user will see a corresponding error message."),Object(r.b)("h5",{id:"example-2"},"Example 2"),Object(r.b)("h6",{id:"task-1"},"Task"),Object(r.b)("p",null,"Similar to ",Object(r.b)("strong",{parentName:"p"},"Example 1"),".\xa0"),Object(r.b)("p",null,"We need to handle the incoming HTTP request and create a new city in the database with the parameters provided in the request."),Object(r.b)("h6",{id:"solution-1"},"Solution"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExternal&block=solution2",mdxType:"CodeSample"}),Object(r.b)("p",null,"Since the property is named ",Object(r.b)("strong",{parentName:"p"},"createCity")," and located in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Modules"}),"module")," with the namespace ",Object(r.b)("strong",{parentName:"p"},"Location"),", the url on which the request will be handled looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"http://localhost:7651/exec?action=Location.createCity\n")),Object(r.b)("p",null,"Body of the HTTP request will be passed as a parameter of the type ",Object(r.b)("strong",{parentName:"p"},"FILE"),". The values read from the ",Object(r.b)("strong",{parentName:"p"},"countryId")," and ",Object(r.b)("strong",{parentName:"p"},"name")," parameters are written to the local properties ",Object(r.b)("strong",{parentName:"p"},"cy")," and ",Object(r.b)("strong",{parentName:"p"},"ne")," respectively."),Object(r.b)("p",null,"If there is no country with the corresponding code, then a JSON file is generated similar to that described in the previous example, and the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Exit_RETURN"}),"RETURN")," operator is called to abort execution. By default, the response message value is also stored in the ",Object(r.b)("strong",{parentName:"p"},"exportFile")," property."),Object(r.b)("p",null,'If all the actions are completed successfully, the corresponding "OK message" is generated in response.'),Object(r.b)("h5",{id:"example-3"},"Example 3"),Object(r.b)("h6",{id:"task-2"},"Task"),Object(r.b)("p",null,"We have the logic of book orders."),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExternal&block=sample3",mdxType:"CodeSample"}),Object(r.b)("p",null,"We need to send an HTTP request for creating a new order in the JSON format to a certain url."),Object(r.b)("h6",{id:"solution-2"},"Solution"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExternal&block=solution3",mdxType:"CodeSample"}),Object(r.b)("p",null,"To create a JSON with nested tags, we need to create a form with the corresponding objects linked via the ",Object(r.b)("strong",{parentName:"p"},"FILTERS")," block of operators. Based on the dependencies between objects, the system will generate a JSON file with the corresponding structure. In the considering example, the output JSON structure will look like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n   "dt":"20.08.18",\n   "nm":"1",\n   "detail":[\n      {\n         "pr":5.99,\n         "id":"b1",\n         "qn":3\n      },\n      {\n         "pr":6.99,\n         "id":"b2",\n         "qn":2\n      }\n   ]\n}\n')),Object(r.b)("p",null,'We do not create a custom tag for "order", since the object value is passed as an argument to the ',Object(r.b)("strong",{parentName:"p"},"EXPORT")," operator.",Object(r.b)("br",{parentName:"p"}),"\n","In this example, the response to the HTTP request is ignored."),Object(r.b)("h5",{id:"example-4"},"Example 4"),Object(r.b)("h6",{id:"task-3"},"Task"),Object(r.b)("p",null,"Similar to\xa0",Object(r.b)("strong",{parentName:"p"},"Example 3"),".\xa0"),Object(r.b)("p",null,"We need to handle the incoming HTTP request and create a new order in the database with the parameters provided in the request."),Object(r.b)("h6",{id:"solution-3"},"Solution"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExternal&block=solution4",mdxType:"CodeSample"}),Object(r.b)("p",null,"To import the corresponding file in the JSON format, we need to create a form of a similar structure, except that the INTEGER type will be used as object classes. During the import process, the tag values will be placed in the properties with the corresponding names. The ",Object(r.b)("strong",{parentName:"p"},"date")," and ",Object(r.b)("strong",{parentName:"p"},"number")," properties have no parameters, since their values in JSON are provided at the topmost level."),Object(r.b)("h5",{id:"example-5"},"Example 5"),Object(r.b)("h6",{id:"condition"},"Condition"),Object(r.b)("p",null,"Similar to\xa0",Object(r.b)("strong",{parentName:"p"},"Example 4"),".\xa0"),Object(r.b)("p",null,"We need to send an HTTP request to create an order in the JSON format to a certain url as in the previous example, except that everything must be wrapped in the ",Object(r.b)("strong",{parentName:"p"},"order")," tag."),Object(r.b)("h6",{id:"solution-4"},"Solution"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExternal&block=solution5",mdxType:"CodeSample"}),Object(r.b)("p",null,"Unlike the previous example, here we create a property ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Groups_of_properties_and_actions"}),"group")," named ",Object(r.b)("strong",{parentName:"p"},"order")," using the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/GROUP_operator"}),"GROUP"),' operator. When declaring a form, we put all the properties of the purchase order as well as the "detail" object into this property group. The result JSON will look like this:'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n   "order":{\n      "dt":"20.08.18",\n      "nm":"1",\n      "detail":[\n         {\n            "pr":5.99,\n            "id":"b1",\n            "qn":3\n         },\n         {\n            "pr":6.99,\n            "id":"b2",\n            "qn":2\n         }\n      ]\n   }\n}\n')),Object(r.b)("h5",{id:"example-6"},"Example 6"),Object(r.b)("h6",{id:"condition-1"},"Condition"),Object(r.b)("p",null,"Similar to\xa0",Object(r.b)("strong",{parentName:"p"},"Example 5"),".\xa0"),Object(r.b)("p",null,"We need to handle the incoming HTTP request and create a new order in the database with the parameters provided in the request."),Object(r.b)("h6",{id:"solution-5"},"Solution"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExternal&block=solution6",mdxType:"CodeSample"}),Object(r.b)("p",null,"Just as in the export process, we put all the properties and the ",Object(r.b)("strong",{parentName:"p"},"detail"),' object to the "order" group to correctly receive the new version of JSON.'),Object(r.b)("h5",{id:"example-7"},"Example 7"),Object(r.b)("h6",{id:"task-4"},"Task"),Object(r.b)("p",null,"Similar to\xa0",Object(r.b)("strong",{parentName:"p"},"Example 3"),".\xa0"),Object(r.b)("p",null,"We need to return a list of order numbers for a given date using an HTTP GET request in which this date is provided."),Object(r.b)("h6",{id:"solution-6"},"Solution"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseExternal&block=solution7",mdxType:"CodeSample"}),Object(r.b)("p",null,"The url to which the HTTP request should be sent will look like this: \xa0 http://localhost:7651/exec?action=Location.getOrdersByDate&p=12.11.2018\xa0."),Object(r.b)("p",null,"The response JSON will look like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'{\n    "order": [\n        {\n            "nm": "42"\n        },\n        {\n            "nm": "65"\n        }\n    ]\n}\n')))}b.isMDXComponent=!0}}]);