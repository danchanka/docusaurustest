(window.webpackJsonp=window.webpackJsonp||[]).push([[378,461],{452:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return r})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return d}));var n=o(3),s=o(7),a=(o(0),o(750)),c=o(58),i={title:"How-to: Action extension"},r={unversionedId:"How-to_Action_extension",id:"version-1.0.0/How-to_Action_extension",isDocsHomePage:!1,title:"How-to: Action extension",description:"We can use the following scheme to implement polymorphism:",source:"@site/versioned_docs/version-1.0.0/How-to_Action_extension.md",slug:"/How-to_Action_extension",permalink:"/docusaurustest/docs/How-to_Action_extension",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/How-to_Action_extension.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"How-to: Property extension",permalink:"/docusaurustest/docs/How-to_Property_extension"},next:{title:"How-to: Form extension",permalink:"/docusaurustest/docs/How-to_Form_extension"}},l=[{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]}],p={toc:l};function d(e){var t=e.components,o=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We can use the following scheme to implement polymorphism:"),Object(a.b)("h3",{id:"example-1"},"Example 1"),Object(a.b)("p",null,"Create an abstract class\xa0",Object(a.b)("strong",{parentName:"p"},"Shape")," with an abstract action\xa0",Object(a.b)("strong",{parentName:"p"},"whoAmI"),":"),Object(a.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseActionShape&block=shape",mdxType:"CodeSample"}),Object(a.b)("p",null,"Then, create\xa0",Object(a.b)("strong",{parentName:"p"},"Square"),"\xa0and\xa0",Object(a.b)("strong",{parentName:"p"},"Circle")," classes inherited from\xa0",Object(a.b)("strong",{parentName:"p"},"Shape"),"\xa0:"),Object(a.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseActionShape&block=concreteclass",mdxType:"CodeSample"}),Object(a.b)("p",null,"Define the implementation of ",Object(a.b)("strong",{parentName:"p"},"whoAmI")," for the created classes:"),Object(a.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseActionShape&block=concreteaction",mdxType:"CodeSample"}),Object(a.b)("p",null,"When executing the ",Object(a.b)("strong",{parentName:"p"},"whoAmI")," action, all the actions added as an implementation will be called. In this case, a corresponding message will appear depending on the argument."),Object(a.b)("h3",{id:"example-2"},"Example 2"),Object(a.b)("p",null,"Suppose that we need to implement an action that copies an object (e. g. the ",Object(a.b)("strong",{parentName:"p"},"Book")," class) with its semantics defined in multiple modules. This can be implemented as follows:"),Object(a.b)("p",null,"Declare the ",Object(a.b)("strong",{parentName:"p"},"Book")," class and the actions to copy it:"),Object(a.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseActionBook",mdxType:"CodeSample"}),Object(a.b)("p",null,"In the dependent module ",Object(a.b)("strong",{parentName:"p"},"MyBook"),",\xa0we want to extend the ",Object(a.b)("strong",{parentName:"p"},"Book")," class with new properties and also define the action to copy them:"),Object(a.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseActionMyBook",mdxType:"CodeSample"}))}d.isMDXComponent=!0},58:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return p})),o.d(t,"toc",(function(){return d})),o.d(t,"CodeSample",(function(){return m})),o.d(t,"default",(function(){return b}));var n=o(3),s=o(7),a=o(0),c=o.n(a),i=o(750),r=o(751),l={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},d=[],m=function(e){var t=e.url,o=e.lines,n=Object(a.useState)(""),s=n[0],l=n[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),s?o?Object(i.b)(c.a.Fragment,null,Object(i.b)(r.a,{className:"lsf",metastring:o,mdxType:"CodeBlock"},s),Object(i.b)("br",null)):Object(i.b)(c.a.Fragment,null,Object(i.b)(r.a,{className:"lsf",mdxType:"CodeBlock"},s),Object(i.b)("br",null)):Object(i.b)(r.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},u={toc:d,CodeSample:m};function b(e){var t=e.components,o=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0}}]);