(window.webpackJsonp=window.webpackJsonp||[]).push([[422,436],{496:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return i})),o.d(t,"toc",(function(){return d})),o.d(t,"default",(function(){return m}));var n=o(3),s=o(7),a=(o(0),o(750)),r=o(57),c={title:"How-to: Form extension"},i={unversionedId:"How-to_Form_extension",id:"How-to_Form_extension",isDocsHomePage:!1,title:"How-to: Form extension",description:"Let's assume there is a module that describes the\xa0Sku form that is used to edit SKU values:",source:"@site/docs/How-to_Form_extension.md",slug:"/How-to_Form_extension",permalink:"/docusaurustest/docs/next/How-to_Form_extension",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_Form_extension.md",version:"current",sidebar:"docs",previous:{title:"How-to: Action extension",permalink:"/docusaurustest/docs/next/How-to_Action_extension"},next:{title:"How-to: Integration: Overview",permalink:"/docusaurustest/docs/next/How-to_Integration"}},d=[],u={toc:d};function m(e){var t=e.components,o=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Let's assume there is a module that describes the\xa0",Object(a.b)("strong",{parentName:"p"},"Sku")," form that is used to edit SKU values:"),Object(a.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFormSku",mdxType:"CodeSample"}),Object(a.b)("p",null,"We need to implement additional functionality for adding multiple barcodes to an SKU. This can be done by creating a new module that will introduce a new\xa0",Object(a.b)("strong",{parentName:"p"},"Barcode"),"\xa0class and extend the functionality of the Sku edit form by adding the possibility to enter barcodes:"),Object(a.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseFormBarcode",mdxType:"CodeSample"}),Object(a.b)("p",null,"Note that the\xa0",Object(a.b)("strong",{parentName:"p"},"Barcode"),"\xa0module assumes that there is a\xa0",Object(a.b)("strong",{parentName:"p"},"Sku")," form with an\xa0",Object(a.b)("strong",{parentName:"p"},"s"),"\xa0 object and a container called\xa0",Object(a.b)("strong",{parentName:"p"},"skuDetails"),". If the form changes for some reason, the \xa0",Object(a.b)("strong",{parentName:"p"},"Barcode"),"\xa0module will become inoperable."))}m.isMDXComponent=!0},57:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return d})),o.d(t,"metadata",(function(){return u})),o.d(t,"toc",(function(){return m})),o.d(t,"CodeSample",(function(){return l})),o.d(t,"default",(function(){return b}));var n=o(3),s=o(7),a=o(0),r=o.n(a),c=o(750),i=o(751),d={},u={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},m=[],l=function(e){var t=e.url,o=e.lines,n=Object(a.useState)(""),s=n[0],d=n[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return d(e)}))}),[t,d]),s?o?Object(c.b)(r.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",metastring:o,mdxType:"CodeBlock"},s),Object(c.b)("br",null)):Object(c.b)(r.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},s),Object(c.b)("br",null)):Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},p={toc:m,CodeSample:l};function b(e){var t=e.components,o=Object(s.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0}}]);