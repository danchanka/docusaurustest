(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{373:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return n})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return d}));var r=o(3),a=o(7),s=(o(0),o(424)),i=o(57),l={title:"How-to: Overriding values"},n={unversionedId:"How-to_Overriding_values",id:"How-to_Overriding_values",isDocsHomePage:!1,title:"How-to: Overriding values",description:"Often there are tasks when it is necessary to give the user opportunity to enter the value of some attribute for some general object and then override it for some specific object.",source:"@site/docs/How-to_Overriding_values.md",slug:"/How-to_Overriding_values",permalink:"/docusaurustest/docs/How-to_Overriding_values",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_Overriding_values.md",version:"current",sidebar:"docs",previous:{title:"How-to: Using objects as templates",permalink:"/docusaurustest/docs/How-to_Using_objects_as_templates"},next:{title:"How-to: Binding properties",permalink:"/docusaurustest/docs/How-to_Binding_properties"}},c=[],p={toc:c};function d(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Often there are tasks when it is necessary to give the user opportunity to enter the value of some attribute for some general object and then override it for some specific object."),Object(s.b)("p",null,"Let's take a look when you need to define a trade mark-up for a book. At the same time, we have the logic of categories defined. These categories form a tree by specifying a parent for each category. The user should be able to set a mark-up for any product and category at any level."),Object(s.b)("p",null,"Let's define the logic of categories and the ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Data_properties_DATA_"},"data property")," of this category's markup."),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseOverride&block=block1",mdxType:"CodeSample"}),Object(s.b)("p",null,"The ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/RECURSION_operator"},"RECURSION")," operator is used to calculate the ",Object(s.b)("em",{parentName:"p"},"level")," property for given two categories. This property will be equal to two to the power of N, where N is the distance between these categories."),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseOverride&block=block2",mdxType:"CodeSample"}),Object(s.b)("p",null,"Let's create a property that will determine the corresponding parent by category and level."),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseOverride&block=block3",mdxType:"CodeSample"}),Object(s.b)("p",null,'Let\'s find the minimal level of a category for which the a mark-up is defined. It will also be the level of "closest upper" category with a set mark-up.'),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseOverride&block=block4",mdxType:"CodeSample"}),Object(s.b)("p",null,"We use this level to determine the category and its mark-up."),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseOverride&block=block5",mdxType:"CodeSample"}),Object(s.b)("p",null,"Thus, the ",Object(s.b)("strong",{parentName:"p"},"overMarkup")," property will contain the required markup value for this category with its hierarchy taken into account."),Object(s.b)("p",null,"Let's now define the logic for books. Each of them is associated with a certain category that may be located at any level of the category hierarchy."),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseOverride&block=block6",mdxType:"CodeSample"}),Object(s.b)("p",null,"Let's define the data property of a product markup. After that, let's construct an overridden property that will return a product markup if it's not ",Object(s.b)("strong",{parentName:"p"},"NULL")," and a previously created property with a category markup."),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseOverride&block=block7",mdxType:"CodeSample"}),Object(s.b)("p",null,"Finally, let's design a form that will allow the user to enter the markup for categories and products at the same time. Let's output both the data and the overridden markup for the category and the product. Note that changes in overridden properties on the form will be displayed immediately, but saved only when the corresponding button is clicked."),Object(s.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseOverride&block=block7",mdxType:"CodeSample"}),Object(s.b)("p",null,"As a result, the form with the filled data will look like this:"),Object(s.b)("p",null,Object(s.b)("img",{src:o(530).default})))}d.isMDXComponent=!0},530:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/46367612-46992522ae9783dad1fc2e055f1ce3ea.png"}}]);