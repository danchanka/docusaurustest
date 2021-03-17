(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{257:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return u})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return c}));var o=a(3),n=a(7),s=(a(0),a(424)),r=a(57),i={title:"How-to: Numbering"},u={unversionedId:"How-to_Numbering",id:"How-to_Numbering",isDocsHomePage:!1,title:"How-to: Numbering",description:"Let's suppose we have a set of books. For each of these books, we define a number as an integer.",source:"@site/docs/How-to_Numbering.md",slug:"/How-to_Numbering",permalink:"/docusaurustest/docs/How-to_Numbering",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_Numbering.md",version:"current",sidebar:"docs",previous:{title:"How-to: Registers",permalink:"/docusaurustest/docs/How-to_Registers"},next:{title:"How-to: Using objects as templates",permalink:"/docusaurustest/docs/How-to_Using_objects_as_templates"}},l=[],m={toc:l};function c(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Let's suppose we have a set of books. For each of these books, we define a number as an integer."),Object(s.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseNumerating&block=numbermaster",mdxType:"CodeSample"}),Object(s.b)("p",null,"We implement a property that will find a book by its number. It can be useful, for example, for importing data where each book is identified by a number. It can be used to get a link to a book object by getting its number as a parameter."),Object(s.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseNumerating&block=numberaggr",mdxType:"CodeSample"}),Object(s.b)("p",null,"The ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Grouping_GROUP_"},"GROUP AGGR")," operator automatically adds a constraint on the uniqueness of the number. If you try to save the same number to the database, you will get an error message."),Object(s.b)("p",null,"Let's add an ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Events"},"event")," that will automatically number books by increasing the maximum number existing in the database."),Object(s.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseNumerating&block=numbergenerate",mdxType:"CodeSample"}),Object(s.b)("p",null,"The event will be triggered at the moment of saving a book to the database in the same transaction."),Object(s.b)("p",null,"In some situations, you may need to apply different numbering for the same object. For this purpose, you can add a special ",Object(s.b)("strong",{parentName:"p"},"Numerator")," class."),Object(s.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseNumerating&block=numerator",mdxType:"CodeSample"}),Object(s.b)("p",null,"The ",Object(s.b)("strong",{parentName:"p"},"value")," property will store the current value of the numerator that will be written to the number of the necessary object. To achieve this, a reference to a particular numerator is set for an object (for example, an order). If such a reference is specified at the time of object creation, you need to automatically assign the numerator's current value increased by one to the order number."),Object(s.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseNumerating&block=numeratororder",mdxType:"CodeSample"}),Object(s.b)("p",null,"The event conditions check if the number has been changed in order to avoid changing it if the user specified it manually (or if it was assigned during import)."),Object(s.b)("p",null,'An important difference between the numerator and "assigning the maximum value plus one" is the support of the simultaneous object creation. In this case, if two users simultaneously create objects, the last started saving user will get a message about number duplication and will need to manually re-save it. Changes made in all events in this way will be "rolled back" and re-saving will generate a new number. If you use a numerator, the last user\'s transaction will get a CONFLICT UPDATE on the ',Object(s.b)("strong",{parentName:"p"},"value")," field for the numerator (since both transactions change the field of the same row in the database). The system will then automatically roll back the transaction and all the changes made in the event and will start processing it again without the user's involvement. This way, the user will only experience slower data saving (up two times slower), but no additional actions will be required."),Object(s.b)("p",null,"You can define a default numerator with property without arguments so that the user does not have to select a numerator every time. After that, you can create an event that will automatically set the numerator if the user doesn't choose it manually."),Object(s.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseNumerating&block=numeratororderdefault",mdxType:"CodeSample"}))}c.isMDXComponent=!0}}]);