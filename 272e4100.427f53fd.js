(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{132:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return r})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return p}));var n=o(3),i=o(7),a=(o(0),o(421)),s=o(56),l={title:"How-to: Binding properties"},r={unversionedId:"How-to_Binding_properties",id:"How-to_Binding_properties",isDocsHomePage:!1,title:"How-to: Binding properties",description:"Example 1",source:"@site/docs\\How-to_Binding_properties.md",slug:"/How-to_Binding_properties",permalink:"/docusaurustest/docs/How-to_Binding_properties",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_Binding_properties.md",version:"current",sidebar:"docs",previous:{title:"How-to: Overriding values",permalink:"/docusaurustest/docs/How-to_Overriding_values"},next:{title:"How-to: Metaprogramming",permalink:"/docusaurustest/docs/How-to_Metaprogramming"}},c=[],d={toc:c};function p(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"example-1"},"Example 1"),Object(a.b)("h6",{id:"condition"},"Condition"),Object(a.b)("p",null,"The concepts of Country, Region and City are defined. A region and a city are always located in a certain country. A city may have a specified region, but need not."),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDependentProperties&block=sample1",mdxType:"CodeSample"}),Object(a.b)("p",null,"We need to define the logic such that a city can only be linked to a region belonging to the country it is in."),Object(a.b)("h6",{id:"solution"},"Solution"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDependentProperties&block=solution1",mdxType:"CodeSample"}),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/CONSTRAINT_instruction"}),"CONSTRAINT")," instruction defines a condition that must always be ",Object(a.b)("strong",{parentName:"p"},"NULL"),". In this case, the constraint based on this condition will be violated if there is a country defined for the region, a region for the city, and a country for the region, and the region's country is not the same as the city's country. The ",Object(a.b)("strong",{parentName:"p"},"CHECKED BY"),"\xa0block indicates that when you select a region in a dialog, the regions will be filtered by default so as not to violate this constraint. It should be noted that if no country has yet been set for the given city then the condition will always be ",Object(a.b)("strong",{parentName:"p"},"NULL"),", and all existing regions will be shown in the dialog."),Object(a.b)("h5",{id:"example-2"},"Example 2"),Object(a.b)("h6",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to Example 1."),Object(a.b)("p",null,"We need to make it so that the country is automatically filled when a region is chosen."),Object(a.b)("h6",{id:"solution-1"},"Solution"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDependentProperties&block=solution2",mdxType:"CodeSample"}),Object(a.b)("p",null,"It should be noted that after the user has chosen a region and a country is set, when the dialog is called again, only the regions of the selected country will be displayed. If the user wants to see all the regions again, he will need to clear the country first. The expression checks that the country has not changed is added to provide the following behavior: if the cities are changed by external actions that change both the country and the region, then the country should not be changed with this event."),Object(a.b)("h5",{id:"example-3"},"Example 3"),Object(a.b)("h6",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"Similar to\xa0Example 1."),Object(a.b)("p",null,"We need to create the same kind of association between the region and the city, but in such a way that a region cannot be selected until a country has been set first."),Object(a.b)("h6",{id:"solution-2"},"Solution"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDependentProperties&block=solution3",mdxType:"CodeSample"}),Object(a.b)("p",null,"The difference from the first example is that the new condition will also be true if a region is set and a country is not. Therefore, in this case the dialog will not display any regions."),Object(a.b)("h5",{id:"example-4"},"Example 4"),Object(a.b)("h6",{id:"condition-3"},"Condition"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 1"),"."),Object(a.b)("p",null,"If the user first selects a region, and then a country that does not correspond to the original region, the user will receive an error message when trying to save."),Object(a.b)("p",null,"We need to make it so that the region is dropped when a new country is selected, if the region does not correspond to that country."),Object(a.b)("h6",{id:"solution-3"},"Solution"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDependentProperties&block=solution4",mdxType:"CodeSample"}),Object(a.b)("h5",{id:"example-5"},"Example 5"),Object(a.b)("h6",{id:"condition-4"},"Condition"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 1"),"."),Object(a.b)("p",null,"The solution to the first example has one drawback. The system will not allow you to change the country of a particular region, if the city links to it. The constraint will be violated."),Object(a.b)("p",null,"We need to make it so that when a region's country is changed, it also changes automatically for all that region's cities."),Object(a.b)("h6",{id:"solution-4"},"Solution"),Object(a.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseDependentProperties&block=solution5",mdxType:"CodeSample"}))}p.isMDXComponent=!0}}]);