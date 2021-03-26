(window.webpackJsonp=window.webpackJsonp||[]).push([[116,436],{190:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return d}));var n=o(3),a=o(7),r=(o(0),o(750)),s=o(57),i={title:"How-to: FORMULA"},l={unversionedId:"How-to_FORMULA",id:"How-to_FORMULA",isDocsHomePage:!1,title:"How-to: FORMULA",description:"Example 1",source:"@site/docs/How-to_FORMULA.md",slug:"/How-to_FORMULA",permalink:"/docusaurustest/docs/next/How-to_FORMULA",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_FORMULA.md",version:"current",sidebar:"docs",previous:{title:"How-to: Access to internal systems: Overview",permalink:"/docusaurustest/docs/next/How-to_Access_to_internal_systems"},next:{title:"How-to: INTERNAL",permalink:"/docusaurustest/docs/next/How-to_INTERNAL"}},c=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 3",id:"example-3",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]}],u={toc:c};function d(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"example-1"},"Example 1"),Object(r.b)("h3",{id:"condition"},"Condition"),Object(r.b)("p",null,"We have a list of orders."),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFormula&block=sample1",mdxType:"CodeSample"}),Object(r.b)("p",null,"We need to export this list to CSV and keep the date in the ISO format (YYYY-MM-DD)."),Object(r.b)("h3",{id:"solution"},"Solution"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFormula&block=solution1",mdxType:"CodeSample"}),Object(r.b)("p",null,"To solve this task we use the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/FORMULA_operator"},"FORMULA")," operator to create a new property that takes a date and returns its value as a string in the YYYY-MM-DD format. The expression contains ",Object(r.b)("a",{parentName:"p",href:"https://www.postgresql.org/docs/11/functions-formatting.html"},"to","_","char")," which is a standard PostgreSQL function."),Object(r.b)("h2",{id:"example-2"},"Example 2"),Object(r.b)("h3",{id:"condition-1"},"Condition"),Object(r.b)("p",null,"Similar to ",Object(r.b)("strong",{parentName:"p"},"Example 1"),". New lines containing quantity and amount have been added to the orders."),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFormula&block=sample2",mdxType:"CodeSample"}),Object(r.b)("p",null,"We need to export all the lines from a given order as CSV file in which quantities and amounts are shortened to 3 and 2 characters respectively. In addition, the numbers must be split into triads."),Object(r.b)("h3",{id:"solution-1"},"Solution"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFormula&block=solution2",mdxType:"CodeSample"}),Object(r.b)("p",null,"We create the toString property that takes two parameters (numeric value and format) and returns a value of the ",Object(r.b)("strong",{parentName:"p"},"TEXT")," type. When exporting, we pass the required format as the second parameter."),Object(r.b)("h2",{id:"example-3"},"Example 3"),Object(r.b)("h3",{id:"condition-2"},"Condition"),Object(r.b)("p",null,"Similar to ",Object(r.b)("strong",{parentName:"p"},"Example 2"),"."),Object(r.b)("p",null,"We need to add a column that will be marked when the given order number contains only digits."),Object(r.b)("h3",{id:"solution-2"},"Solution"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFormula&block=solution3",mdxType:"CodeSample"}),Object(r.b)("p",null,"Since single quotes are used in the formula, make sure to ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Escape_character"},"escape")," them with a backslash ",Object(r.b)("strong",{parentName:"p"},"\\","\\"),"."),Object(r.b)("p",null,"Note that the native ",Object(r.b)("strong",{parentName:"p"},"BOOLEAN")," type allows only 2 values: ",Object(r.b)("strong",{parentName:"p"},"TRUE")," and ",Object(r.b)("strong",{parentName:"p"},"NULL"),". Therefore, when composing a logical expression, make sure to convert its negative value to ",Object(r.b)("strong",{parentName:"p"},"NULL"),". In addition, the platform must explicitly know whether the expression can return an undefined value. This is why the keyword ",Object(r.b)("strong",{parentName:"p"},"FORMULA")," must be followed by the corresponding marker."),Object(r.b)("p",null,"At the database level, the ",Object(r.b)("strong",{parentName:"p"},"BOOLEAN")," type is stored as numeric value (1 or null), and therefore the properties of this type must also return a numeric value. The developer must check that the return type of the expression matches the specified type. Otherwise, the behavior will be unpredictable (but in most cases a request will simply return an error)."),Object(r.b)("p",null,"Keep in mind that if any property composed by the ",Object(r.b)("strong",{parentName:"p"},"FORMULA")," operator receives ",Object(r.b)("strong",{parentName:"p"},"NULL")," as argument, then the overall result will always be ",Object(r.b)("strong",{parentName:"p"},"NULL"),"."))}d.isMDXComponent=!0},57:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return u})),o.d(t,"toc",(function(){return d})),o.d(t,"CodeSample",(function(){return p})),o.d(t,"default",(function(){return b}));var n=o(3),a=o(7),r=o(0),s=o.n(r),i=o(750),l=o(751),c={},u={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},d=[],p=function(e){var t=e.url,o=e.lines,n=Object(r.useState)(""),a=n[0],c=n[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return c(e)}))}),[t,c]),a?o?Object(i.b)(s.a.Fragment,null,Object(i.b)(l.a,{className:"lsf",metastring:o,mdxType:"CodeBlock"},a),Object(i.b)("br",null)):Object(i.b)(s.a.Fragment,null,Object(i.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},a),Object(i.b)("br",null)):Object(i.b)(l.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:d,CodeSample:p};function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,o,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0}}]);