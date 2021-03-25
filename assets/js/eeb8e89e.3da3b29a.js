(window.webpackJsonp=window.webpackJsonp||[]).push([[643,436],{57:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return i})),r.d(t,"CodeSample",(function(){return d})),r.d(t,"default",(function(){return m}));var o=r(3),a=r(7),n=r(0),s=r.n(n),c=r(750),p=r(751),u={},b={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},i=[],d=function(e){var t=e.url,r=e.lines,o=Object(n.useState)(""),a=o[0],u=o[1];return Object(n.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return u(e)}))}),[t,u]),a?r?Object(c.b)(s.a.Fragment,null,Object(c.b)(p.a,{className:"lsf",metastring:r,mdxType:"CodeBlock"},a),Object(c.b)("br",null)):Object(c.b)(s.a.Fragment,null,Object(c.b)(p.a,{className:"lsf",mdxType:"CodeBlock"},a),Object(c.b)("br",null)):Object(c.b)(p.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},l={toc:i,CodeSample:d};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},l,r,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},714:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return i}));var o=r(3),a=r(7),n=(r(0),r(750)),s=r(57),c={title:"Object group operator"},p={unversionedId:"Object_group_operator",id:"Object_group_operator",isDocsHomePage:!1,title:"Object group operator",description:"Object group operators are used for creating properties working with the current state of the object group on the form.",source:"@site/docs/Object_group_operator.md",slug:"/Object_group_operator",permalink:"/docusaurustest/docs/next/Object_group_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Object_group_operator.md",version:"current",sidebar:"docs",previous:{title:"UNGROUP operator",permalink:"/docusaurustest/docs/next/UNGROUP_operator"},next:{title:"Type conversion operator",permalink:"/docusaurustest/docs/next/Type_conversion_operator"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:u};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Form_structure"},"Object group")," operators are used for creating ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"properties")," working with the ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Object_group_operations"},"current state")," of the object group on the ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Forms"},"form"),"."),Object(n.b)("h3",{id:"syntax"},"Syntax"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"FILTER groupObjectId\nVIEW groupObjectId\nORDER groupObjectId\n")),Object(n.b)("h3",{id:"description"},"Description"),Object(n.b)("p",null,"Object group operators create properties that accept the same number of parameters as the number of objects in the object group. These operators cannot be used inside ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Expression"},"expressions"),"."),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"FILTER")," operator creates a property which value is\xa0",Object(n.b)("strong",{parentName:"p"},"TRUE")," when the object collection passed as parameters meets all the ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Form_structure#filters"},"filtering")," conditions on the form, otherwise the property value will be ",Object(n.b)("strong",{parentName:"p"},"NULL"),"."),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"VIEW"),"\xa0operator creates a property which value is ",Object(n.b)("strong",{parentName:"p"},"TRUE")," if the object collection passed as parameters is currently displayed on the form, otherwise, the property value will be ",Object(n.b)("strong",{parentName:"p"},"NULL"),"."),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"ORDER")," operator creates a property which value determines the relative order of the object collection on the form passed as a parameter. The value of this property is usually used in ",Object(n.b)("strong",{parentName:"p"},"ORDER")," blocks of the other properties, for example, ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"/docusaurustest/docs/next/PARTITION_operator"},"PARTITION")),", ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"/docusaurustest/docs/next/FOR_operator"},"FOR")),", etc."),Object(n.b)("h3",{id:"parameters"},"Parameters"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"groupObjectId")),Object(n.b)("p",null,"Global ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#groupobjectid-broken"},"object group ID"),"."),Object(n.b)("h3",{id:"examples"},"Examples"),Object(n.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=groupobject",mdxType:"CodeSample"}),Object(n.b)("p",null,"**",Object(n.b)("br",{parentName:"p"}),"\n","**"))}i.isMDXComponent=!0}}]);