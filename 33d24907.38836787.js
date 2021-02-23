(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return l}));var r=a(3),o=a(7),p=(a(0),a(421)),n=a(56),c={title:"APPLY operator"},s={unversionedId:"APPLY_operator",id:"APPLY_operator",isDocsHomePage:!1,title:"APPLY operator",description:"The APPLY operator creates an action that applies changes to the database.",source:"@site/docs\\APPLY_operator.md",slug:"/APPLY_operator",permalink:"/docusaurustest/docs/APPLY_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/APPLY_operator.md",version:"current",sidebar:"docs",previous:{title:"ACTIVE FORM operator",permalink:"/docusaurustest/docs/ACTIVE_FORM_operator"},next:{title:"ASK operator",permalink:"/docusaurustest/docs/ASK_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:i};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"The ",Object(p.b)("strong",{parentName:"p"},"APPLY")," operator creates an ",Object(p.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that ",Object(p.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Apply_changes_APPLY"}),"applies changes")," to the database."),Object(p.b)("h3",{id:"syntax"},"Syntax"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{}),"APPLY [nestedBlock] [SERIALIZABLE] [action]\n")),Object(p.b)("p",null,"where\xa0",Object(p.b)("em",{parentName:"p"},"nestedBlock"),"\xa0has one of two possible syntaxes:"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{}),"NESTED LOCAL\nNESTED (propertyId1, ..., propertyIdN)\n")),Object(p.b)("h3",{id:"description"},"Description"),Object(p.b)("p",null,"The ",Object(p.b)("strong",{parentName:"p"},"APPLY")," operator creates an action that applies changes to the database. By specifying the keyword ",Object(p.b)("strong",{parentName:"p"},"NESTED"),"\xa0you can specify ",Object(p.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_properties_DATA#local-data-properties"}),"local properties")," whose changes are not dropped when applying the changes. This operator also includes an action to be executed before applying the changes to the database."),Object(p.b)("h3",{id:"parameters"},"Parameters"),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"LOCAL")),Object(p.b)("p",null,"Keyword. If specified, all local properties preserve their changes after the ",Object(p.b)("strong",{parentName:"p"},"APPLY")," operator is executed.\xa0"),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"propertyId1, ..., propertyIdN")),Object(p.b)("p",null,"List of local properties. Each list element is a ",Object(p.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#propertyid-broken"}),"property ID"),". The local properties specified in the list will preserve their\xa0changes after the operator is executed."),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"SERIALIZABLE")),Object(p.b)("p",null,'A keyword that sets the transaction isolation level to "Serializable."'),Object(p.b)("p",null,Object(p.b)("em",{parentName:"p"},"action")),Object(p.b)("p",null,"A ",Object(p.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Action_operator#context-dependent-operators"}),"context-dependent operator")," that describes an action to be executed before applying changes. It is executed in the same transaction as the application of changes."),Object(p.b)("h3",{id:"examples"},"Examples"),Object(p.b)(n.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=apply",mdxType:"CodeSample"}))}l.isMDXComponent=!0}}]);