(window.webpackJsonp=window.webpackJsonp||[]).push([[393],{466:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(749)),s={title:"How-to: Frontend"},i={unversionedId:"How-to_Frontend",id:"How-to_Frontend",isDocsHomePage:!1,title:"How-to: Frontend",description:"The easiest way to organize the interaction of a React application with an application based on lsFusion is communication via the HTTP protocol through the JSON API. To export a list of objects meeting a specified condition, it is most convenient to use the interface located at the eval/action Url. You can pass lsFusion program code to it in BODY, and it will then be executed. If you need to return data from your request, use the EXPORT operator. By default it returns data in JSON format, which is then easily processed using JavaScript.",source:"@site/docs/How-to_Frontend.md",slug:"/How-to_Frontend",permalink:"/docusaurustest/docs/next/How-to_Frontend",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_Frontend.md",version:"current",sidebar:"docs",previous:{title:"How-to: Interaction via HTTP protocol",permalink:"/docusaurustest/docs/next/How-to_Interaction_via_HTTP_protocol"},next:{title:"How-to: Access to internal systems: Overview",permalink:"/docusaurustest/docs/next/How-to_Access_to_internal_systems"}},l=[{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]},{value:"Example 3",id:"example-3",children:[]},{value:"Example 4",id:"example-4",children:[]},{value:"Example 5",id:"example-5",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The easiest way to organize the interaction of a React application with an application based on lsFusion is ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Access_from_an_external_system"},"communication via the HTTP protocol")," through the JSON API. To export a list of objects meeting a specified condition, it is most convenient to use the interface located at the eval/action Url. You can pass lsFusion program code to it in BODY, and it will then be executed. If you need to return data from your request, use the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/EXPORT_operator"},"EXPORT")," operator. By default it returns data in JSON format, which is then easily processed using JavaScript."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"In these examples we will make requests without authorization. For the server to start accepting requests without authorization, you need to set the ",Object(r.b)("strong",{parentName:"p"},"enableAPI")," option in the Administration/Settings form on the Settings tab to the value 2."),Object(r.b)("p",{parentName:"div"},"A safer way would be to create a separate action for each request, with an @@api marker. and set ",Object(r.b)("strong",{parentName:"p"},"enableAPI")," to the value 0. In this case, the server will only accept requests for these specific actions and from an authorized user. Inside these actions, before starting processing you can check for availability to the user using the ",Object(r.b)("strong",{parentName:"p"},"currentUser()")," property."))),Object(r.b)("h3",{id:"example-1"},"Example 1"),Object(r.b)("p",null,"For clarity, we implement the simple form from the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Score_table"},"Score table")," example (in read-only mode)."),Object(r.b)("p",null,"We will implement reading flat data set as a function with one parameter \u2013 the query text, \u2013 to which EXPORT FROM is added on the left:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'const url = "https://demo.lsfusion.org/hockeystats/eval/action";\nfunction select(script) {\n  const params = {\n    method: "post",\n    body: "EXPORT FROM " + script\n  }\n  return fetch(url, params).then(response => response.json());\n}\n')),Object(r.b)("p",null,"For example, a request with the following content"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'select("date(Game g), hostTeamName(g), hostGoals(g), guestGoals(g), guestTeamName(g), resultName(g)")\n')),Object(r.b)("p",null,"will return JSON of the form"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'[\n   {\n      "date":"05.02.19",\n      "hostGoals":3,\n      "guestTeamName":"New York Rangers",\n      "hostTeamName":"Detroit Red Wings",\n      "guestGoals":2,\n      "resultName":"\u041f\u041e"\n   },\n   {\n      "date":"13.02.19",\n      "hostGoals":2,\n      "guestTeamName":"Toronto Maple Leafs",\n      "hostTeamName":"Montreal Canadiens",\n      "guestGoals":0,\n      "resultName":"\u041f"\n   },\n   {\n      "date":"15.02.19",\n      "hostGoals":3,\n      "guestTeamName":"Montreal Canadiens",\n      "hostTeamName":"New York Rangers",\n      "guestGoals":5,\n      "resultName":"\u041f"\n   },\n   {\n      "date":"17.02.19",\n      "hostGoals":2,\n      "guestTeamName":"Detroit Red Wings",\n      "hostTeamName":"Toronto Maple Leafs",\n      "guestGoals":1,\n      "resultName":"\u041f\u0411"\n   }\n]\n')),Object(r.b)("p",null,"It only remains to use this data as a state(s) for React component(s) (for example, using ",Object(r.b)("a",{parentName:"p",href:"https://material-ui.com/"},"Material-UI"),"):"),Object(r.b)("h3",{id:"example-2"},"Example 2"),Object(r.b)("p",null,"Let's consider a slightly more complicated case, when you need to make parameterized queries depending on data selected by the user. For backend logic we'll take the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Materials_management"},"Material Flow Management")," example."),Object(r.b)("p",null,"Suppose we need to build a form in which we need to show shipments, with the ability to filter by date and warehouse. And when the user selects a specific document, its lines should be displayed."),Object(r.b)("p",null,"To implement a request to the backend to receive shipments with filtering, we declare a function:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'const url = "https://demo.lsfusion.org/mm/eval/action";\nfunction select(script, data) {\n  var formData = new FormData();\n\n  formData.append("script", "EXPORT FROM " + script);\n  for (var name in data) {\n    formData.append(name, data[name]);\n  }\n  const params = {\n    method: "post",\n    headers: {\n      "Content-type": "multipart/form-data"\n    },\n    body: formData\n  };\n  return fetch(url, params).then(response => response.json());\n}\n')),Object(r.b)("p",null,"The first ",Object(r.b)("strong",{parentName:"p"},"select")," function makes a POST request with content type\xa0multipart/form-data, passing the text of the request to the server as its first parameter and the values of the request as its other parameters."),Object(r.b)("p",null,"For example, a function call of the form"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'select("id = Shipment s, number(s) WHERE date(s) = $1", { date: new Date().toISOString().substr(0, 10) })\n')),Object(r.b)("p",null,"will return all shipments for today's date. It should be noted that the name of the date parameter is not used in the backend, and can be absolutely anything. Only the order of the parameters is important."),Object(r.b)("p",null,"For convenience, we also declare a function that will generate a request by adding to the filter only those parameters whose values are not null:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'function selectWhere(script, wheres) {\n  var exprs = [], params = {};\n  for (var i = 0; i < wheres.length; i++) {\n    if (wheres[i].value != null) {\n      exprs.push(wheres[i].expr + "=$" + (i + 1));\n      params = { ...params, ...{ ["p" + i]: wheres[i].value } };\n    }\n  }\n  return select(script + (exprs.length > 0 ? " WHERE " : "") + exprs.join(" AND "), params);\n}\n')),Object(r.b)("p",null,"The corresponding function call above can be replaced with:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'selectWhere("id = Shipment s, number(s)", [{ expr: "date(s)", value : new Date().toISOString().substr(0, 10) }])\n')),Object(r.b)("p",null,"Using the requests described above, we implement the required logic. To do this, we define two components:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Shipments"),", which will display the list of documents using the List component (from Material-UI, as mentioned above). It will also contain a ",Object(r.b)("strong",{parentName:"li"},"Filters")," component, using which the user will set the parameters for filtering."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Details"),", which will display the lines of the selected document. If needed, it could be embedded in the ",Object(r.b)("strong",{parentName:"li"},"Shipments")," component.")),Object(r.b)("p",null,"The rest of the code will look like this:"),Object(r.b)("h3",{id:"example-3"},"Example 3"),Object(r.b)("p",null,"We implement a simple CRUD interface for entering goods."),Object(r.b)("p",null,"Since this will require changing the information in the database, we declare a function that will execute arbitrary code on the platform (with error handling):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'function handleErrors(response) {\n  if (!response.ok) {\n    response.text().then(text => console.log(text));\n    throw Error(response);\n  }\n  return response;\n}\n\nfunction evaluate(script, data) {\n  var formData = new FormData();\n\n\n  formData.append("script", script);\n  for (var name in data) {\n    formData.append(name, data[name]);\n  }\n  const params = {\n    method: "post",\n    headers: {\n      "Content-type": "multipart/form-data"\n    },\n    body: formData\n  };\n  return fetch(url, params).then(handleErrors);\n}\n')),Object(r.b)("p",null,"For example, to create an item in the database you would need to execute the following code:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'evaluate("NEW s = Item { name(s) <- $1; barcode(s) <- $2; salePrice(s) <- $3; APPLY; }", { name : "My item", barcode : "4341", salePrice : 2.34 } )\n')),Object(r.b)("p",null,"As in the examples above, the names of the parameters are not important: their order is what matters. The ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/APPLY_operator"},"APPLY")," operator saves changes to the database. Without it, the data will not be saved and will be discarded upon completion of the request."),Object(r.b)("p",null,"To change the attributes of the product, you can use the following code (where id is the product's internal ID):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'evaluate("FOR Item s = $0 DO { name(s) <- $1; barcode(s) <- $2; salePrice(s) <- $3; APPLY; }", { id : 32494, name : "My item", barcode : "4341", salePrice : 2.34 })\n')),Object(r.b)("p",null,"To delete a given product:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'evaluate("DELETE s WHERE s AS Item = $1; APPLY; ", { id : 32494 })\n')),Object(r.b)("p",null,"The code implementing the user interface may look like this:"),Object(r.b)("h3",{id:"example-4"},"Example 4"),Object(r.b)("p",null,"In this example, we implement the ability to view and edit a list of documents with lines."),Object(r.b)("p",null,"It will be necessary to pass the set of lines from a specific document to the server. So as to perform all the changes with one request, rather than having to make separate requests for each line, we will pass them as a parameter in a JSON-format file. To do this, we modify our ",Object(r.b)("strong",{parentName:"p"},"evaluate")," function as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'function isObject(obj) {\n  return obj === Object(obj);\n}\nfunction evaluate(script, data) {\n  var formData = new FormData();\n\n\n  formData.append("script", script);\n  console.log(data);\n  for (var name in data) {\n    if (isObject(data[name]))\n      formData.append(\n        name,\n        new Blob([JSON.stringify(data[name])], { type: "application/json" })\n      );\n    else formData.append(name, data[name]);\n  }\n  const params = {\n    method: "post",\n    headers: {\n      "Content-type": "multipart/form-data"\n    },\n    body: formData\n  };\n  return fetch(url, params).then(handleErrors);\n}\n')),Object(r.b)("p",null,"If an object is passed as a field in the\xa0",Object(r.b)("strong",{parentName:"p"},"data")," object, it is now converted to JSON and passed as a file of type application/json."),Object(r.b)("p",null,"In order to accept this file as the final parameter ($5 in this example) and update the lines by deleting the old ones and creating new ones, we will use the following code on the platform:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"IMPORT JSON FROM $5 AS FILE FIELDS LONG item, NUMERIC[16,3] quantity, NUMERIC[16,3] price, NUMERIC[16,3] sum DO \n    NEW d = ShipmentDetail { \n        shipment(d) <- s; \n        item(d) <- GROUP MAX i AS Item IF LONG(i) = item; \n        quantity(d) <- quantity; \n        price(d) <- price; \n        sum(d) <- sum; \n    }\n")),Object(r.b)("p",null,"To parse the JSON we use the special ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IMPORT_operator"},"IMPORT")," operator. It assumes that it will receive a flat JSON as an array of objects with numerical fields ",Object(r.b)("strong",{parentName:"p"},"item"),", ",Object(r.b)("strong",{parentName:"p"},"quantity"),", ",Object(r.b)("strong",{parentName:"p"},"price")," and ",Object(r.b)("strong",{parentName:"p"},"sum"),". A ",Object(r.b)("strong",{parentName:"p"},"ShipmentDetail")," will be created for each object. It is then linked to the corresponding object ",Object(r.b)("strong",{parentName:"p"},"s")," of class ",Object(r.b)("strong",{parentName:"p"},"Shipment"),". After this the SKU with the internal code equals to the passed one is written, and then the other properties are written. Parsing of more complex JSON can be found in examples\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/How-to_Data_import"},"How-to: Data import")," and\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/How-to_Interaction_via_HTTP_protocol"},"How-to: Interaction via HTTP protocol"),"."),Object(r.b)("p",null,"Saving changes may violate a ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Constraints"},"constraint"),". In this case, the changes will not be saved to the database (however, they will remain in the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Change_sessions"},"change session"),"). In this event the value ",Object(r.b)("strong",{parentName:"p"},"TRUE")," will be written to the ",Object(r.b)("strong",{parentName:"p"},"canceled")," property, and a constraint message will be written to the ",Object(r.b)("strong",{parentName:"p"},"applyMessage")," property. In order to handle this situation, we will use the following code on the platform:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"APPLY; \nIF canceled() THEN \n    EXPORT FROM message = applyMessage();\n")),Object(r.b)("p",null,"If the changes fail the message is returned in the BODY of the response in JSON form with a single field ",Object(r.b)("strong",{parentName:"p"},"applyMessage"),"."),Object(r.b)("p",null,"The final code that is passed to ",Object(r.b)("strong",{parentName:"p"},"evaluate")," for, e.g., creating a document will look like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"NEW s = Shipment {\n    number(s) <- $1; date(s) <- $2; customer(s) <- $3; stock(s) <- $4;\n    IMPORT JSON FROM $5 AS FILE FIELDS LONG item, NUMERIC[16,3] quantity, NUMERIC[16,3] price, NUMERIC[16,3] sum DO \n        NEW d = ShipmentDetail { \n            shipment(d) <- s; \n            item(d) <- GROUP MAX i AS Item IF LONG(i) = item; \n            quantity(d) <- quantity; \n            price(d) <- price; \n            sum(d) <- sum; \n        }\n    APPLY; \n    IF canceled() THEN \n        EXPORT FROM message = applyMessage();\n}\n")),Object(r.b)("p",null,"For editing (first, existing lines are deleted), accordingly:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"FOR Shipment s = $0 DO {\n    number(s) <- $1; date(s) <- $2; customer(s) <- $3; stock(s) <- $4;\n    DELETE ShipmentDetail d WHERE shipment(d) = s;\n    IMPORT JSON FROM $5 AS FILE FIELDS LONG item, NUMERIC[16,3] quantity, NUMERIC[16,3] price, NUMERIC[16,3] sum DO \n        NEW d = ShipmentDetail { \n            shipment(d) <- s; \n            item(d) <- GROUP MAX i AS Item IF LONG(i) = item; \n            quantity(d) <- quantity; \n            price(d) <- price; \n            sum(d) <- sum; \n        }\n    APPLY; \n    IF canceled() THEN \n        EXPORT FROM message = applyMessage();\n}\n")),Object(r.b)("p",null,"To handle the constraint violation error (since the response status will be 200 in this implementation in both cases), we assume that if the BODY of the answer is empty then there is no error. If there is any text, then this is the JSON containing the text of the constraint. For example, we can use the following code:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'evaluate("...").then(response =>\n    response.text().then(text => {\n        if (text === "") {\n            // ok\n        } else {\n            console.log(JSON.parse(text).applyMessage);\n        }\n      })\n    );\n')),Object(r.b)("p",null,"The implementation of the entire task may look as follows:"),Object(r.b)("h3",{id:"example-5"},"Example 5"),Object(r.b)("p",null,"By analogy with ",Object(r.b)("strong",{parentName:"p"},"Example 1"),", we implement the Score table form with editing ability using the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Access_from_an_external_system#form-broken"},"Form API"),". To use it, you need to link the\xa0",Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@lsfusion/core"},"@lsfusion/core")," library."),Object(r.b)("p",null,"First of all, you need to initialize the form using the ",Object(r.b)("strong",{parentName:"p"},"create")," function after loading the main component:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'componentDidMount() {\n  create(updateState => this.setState(updateState), url, {\n    name: "MainForm"\n  });\n}\n')),Object(r.b)("p",null,"The first parameter passed is the callback function to which the initial state of the form will be passed after the response from the server:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'{\n   "game":{\n      "list":[\n         {\n            "date":"05.02.19",\n            "hostGoals":3,\n            "guestTeamName":"New York Rangers",\n            "hostTeamName":"Detroit Red Wings",\n            "guestGoals":2,\n            "value":6054,\n            "resultName":"\u041f\u041e"\n         },\n         {\n            "date":"13.02.19",\n            "hostGoals":2,\n            "guestTeamName":"Toronto Maple Leafs",\n            "hostTeamName":"Montreal Canadiens",\n            "guestGoals":0,\n            "value":6063,\n            "resultName":"\u041f"\n         },\n         {\n            "date":"15.02.19",\n            "hostGoals":3,\n            "guestTeamName":"Montreal Canadiens",\n            "hostTeamName":"New York Rangers",\n            "guestGoals":5,\n            "value":6072,\n            "resultName":"\u041f"\n         },\n         {\n            "date":"17.02.19",\n            "hostGoals":2,\n            "guestTeamName":"Detroit Red Wings",\n            "hostTeamName":"Toronto Maple Leafs",\n            "guestGoals":1,\n            "value":6075,\n            "resultName":"\u041f\u0411"\n         }\n      ],\n      "value":6054\n   },\n   "team":{\n      "list":[\n         {\n            "gamesLostSO":0,\n            "goalsConceded":3,\n            "gamesLostOT":0,\n            "goalsScored":7,\n            "gamesWon":2,\n            "points":6,\n            "gamesWonOT":0,\n            "gamesLost":0,\n            "gamesPlayed":2,\n            "name":"Montreal Canadiens",\n            "gamesWonSO":0,\n            "place":1,\n            "value":6064\n         },\n         {\n            "gamesLostSO":1,\n            "goalsConceded":4,\n            "gamesLostOT":0,\n            "goalsScored":4,\n            "gamesWon":0,\n            "points":3,\n            "gamesWonOT":1,\n            "gamesLost":0,\n            "gamesPlayed":2,\n            "name":"Detroit Red Wings",\n            "gamesWonSO":0,\n            "place":2,\n            "value":6057\n         },\n         {\n            "gamesLostSO":0,\n            "goalsConceded":3,\n            "gamesLostOT":0,\n            "goalsScored":2,\n            "gamesWon":0,\n            "points":2,\n            "gamesWonOT":0,\n            "gamesLost":1,\n            "gamesPlayed":2,\n            "name":"Toronto Maple Leafs",\n            "gamesWonSO":1,\n            "place":3,\n            "value":10993\n         },\n         {\n            "gamesLostSO":0,\n            "goalsConceded":8,\n            "gamesLostOT":1,\n            "goalsScored":5,\n            "gamesWon":0,\n            "points":1,\n            "gamesWonOT":0,\n            "gamesLost":1,\n            "gamesPlayed":2,\n            "name":"New York Rangers",\n            "gamesWonSO":0,\n            "place":4,\n            "value":6061\n         }\n      ],\n      "value":6064\n   }\n}\n')),Object(r.b)("p",null,"The returned JSON also has other utility fields."),Object(r.b)("p",null,"Object tables can be read from ",Object(r.b)("strong",{parentName:"p"},"game.list")," and ",Object(r.b)("strong",{parentName:"p"},"team.list"),"\xa0respectively. Current objects are stored in ",Object(r.b)("strong",{parentName:"p"},"game.value")," and ",Object(r.b)("strong",{parentName:"p"},"team.value"),". We use this data to form two tables, of games and of teams. To mark the current row we use the equals function, which compares, for example, the values from ",Object(r.b)("strong",{parentName:"p"},"game.value")," and ",Object(r.b)("strong",{parentName:"p"},"game.list","[","<row",">","]",".value"),". This is necessary because ",Object(r.b)("strong",{parentName:"p"},"value")," may contain more complex objects, if several objects are declared in the object group."),Object(r.b)("p",null,"Until the form has loaded, the helper function ",Object(r.b)("strong",{parentName:"p"},"formCreated")," returns ",Object(r.b)("strong",{parentName:"p"},"false")," and tables are not displayed."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"if (!formCreated(this.state)) return <div>Loading</div>;\n")),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"numberOfPendingRequests")," function also lets us display on the form the number of requests to the server for which no response has yet been received."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'<div>\n{numberOfPendingRequests(this.state) > 0\n    ? "Loading, number of requests : " +\n    numberOfPendingRequests(this.state)\n    : ""}\n</div>\n')),Object(r.b)("p",null,"Changing the current object on the form and the values of its properties is done using the ",Object(r.b)("strong",{parentName:"p"},"change")," function."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"change(updateState => this.setState(updateState), changes);\n")),Object(r.b)("p",null,"It takes a callback that will change the current state and an object that stores a list of changes. The current state of the form (the App object) is constantly updated after each call to ",Object(r.b)("strong",{parentName:"p"},"change")," with new values, taking into account changes made earlier by the user."),Object(r.b)("p",null,"For example, to change the currently selected game we can use the following call:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"change(updateState => this.setState(updateState), { game : { value : 6063 } });\n")),Object(r.b)("p",null,"Here 6063 is the ",Object(r.b)("strong",{parentName:"p"},"value")," of the selected object."),Object(r.b)("p",null,"To change the value of a property, we can use the following code:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"change(updateState => this.setState(updateState), { game : { value : 6063, hostGoals : 3 } });\n")),Object(r.b)("p",null,"This call changes the current object to the game with the ID 6063 and the value of the host team's goals to the passed value (3). If you do not pass the ",Object(r.b)("strong",{parentName:"p"},"value")," tag, then the goal change will be made for the previously selected game."),Object(r.b)("p",null,"The same scheme is used to change properties that are not data, but are a simple ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Composition_JOIN_"},"composition")," of object properties:\xa0"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'change(updateState => this.setState(updateState), { game : { value : 6063, hostTeamName: "Montreal Canadiens" } });\n')),Object(r.b)("p",null,"The system itself will find the team with the given name and change the value of the host team to the one it finds."),Object(r.b)("p",null,"To select a team from the list, you can use the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/JedWatson/react-select"},"react-select")," component. Reading of many teams can be organized using the ",Object(r.b)("strong",{parentName:"p"},"select")," function declared in the first example."),Object(r.b)("p",null,"The following shows the fully working source code:"))}p.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),b=a,d=m["".concat(s,".").concat(b)]||m[b]||u[b]||r;return n?o.a.createElement(d,i(i({ref:t},c),{},{components:n})):o.a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);