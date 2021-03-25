(window.webpackJsonp=window.webpackJsonp||[]).push([[102,436],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return m}));var o=n(3),s=n(7),a=(n(0),n(750)),r=n(57),c={title:"Form extension"},u={unversionedId:"Form_extension",id:"Form_extension",isDocsHomePage:!1,title:"Form extension",description:"The\xa0form extension\xa0technique\xa0allows the developer to extend the structure and design\xa0of a form created in another module.",source:"@site/docs/Form_extension.md",slug:"/Form_extension",permalink:"/docusaurustest/docs/next/Form_extension",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Form_extension.md",version:"current",sidebar:"docs",previous:{title:"Action extension",permalink:"/docusaurustest/docs/next/Action_extension"},next:{title:"Metaprogramming",permalink:"/docusaurustest/docs/next/Metaprogramming"}},d=[{value:"Language",id:"language",children:[]},{value:"Example",id:"example",children:[]}],i={toc:d};function m(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Forms"},"form")," ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Extensions"},"extension"),"\xa0technique\xa0allows the developer to extend the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Form_structure"},"structure")," and ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Interactive_view"},"design"),"\xa0of a form created in another module."),Object(a.b)("p",null,'Form extension allows you to extract a specific functionality into a separate module, which when loaded will cause new components to be "embedded" into existing forms. The disadvantage of this approach is that this module must know the precise structure and design of the form which it depends on, and when these are modified the module may become inoperative.'),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"In order to extend the structure and design of an existing form, the\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/EXTEND_FORM_instruction"},Object(a.b)("strong",{parentName:"a"},"EXTEND FORM")," instruction")," must be used."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=FormSample&block=extendform",mdxType:"CodeSample"}))}m.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return m})),n.d(t,"CodeSample",(function(){return l})),n.d(t,"default",(function(){return b}));var o=n(3),s=n(7),a=n(0),r=n.n(a),c=n(750),u=n(751),d={},i={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},m=[],l=function(e){var t=e.url,n=e.lines,o=Object(a.useState)(""),s=o[0],d=o[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return d(e)}))}),[t,d]),s?n?Object(c.b)(r.a.Fragment,null,Object(c.b)(u.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},s),Object(c.b)("br",null)):Object(c.b)(r.a.Fragment,null,Object(c.b)(u.a,{className:"lsf",mdxType:"CodeBlock"},s),Object(c.b)("br",null)):Object(c.b)(u.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},p={toc:m,CodeSample:l};function b(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0}}]);