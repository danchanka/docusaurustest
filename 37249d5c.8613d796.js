(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return l}));var r=a(3),s=a(7),o=(a(0),a(421)),p=a(56),n={title:"DATA operator"},c={unversionedId:"DATA_operator",id:"DATA_operator",isDocsHomePage:!1,title:"DATA operator",description:"The DATA operator creates a data property.",source:"@site/docs\\DATA_operator.md",slug:"/DATA_operator",permalink:"/docusaurustest/docs/DATA_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/DATA_operator.md",version:"current",sidebar:"docs",previous:{title:"CONCAT operator",permalink:"/docusaurustest/docs/CONCAT_operator"},next:{title:"EXCLUSIVE operator",permalink:"/docusaurustest/docs/EXCLUSIVE_operator"}},b=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:b};function l(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"DATA")," operator creates a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_properties_DATA"}),"data property"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"DATA [LOCAL [NESTED]] returnClass (argumentClass1, ..., argumentClassN)\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"DATA")," operator creates a data property. This ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Operators"}),"property operator")," cannot be used inside ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expressions"),". The data property can be created local by specifying the keyword ",Object(o.b)("strong",{parentName:"p"},"LOCAL"),".\xa0"),Object(o.b)("p",null,"This operator cannot be used in the\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/JOIN_operator"}),Object(o.b)("strong",{parentName:"a"},"JOIN")," operator"),"\xa0(inside\xa0","[","]","), since a name must be specified for the data property."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"LOCAL")),Object(o.b)("p",null,"A keyword that, when specified, creates a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_properties_DATA#local-data-properties"}),"local data property"),".\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NESTED")),Object(o.b)("p",null,"A keyword that, when specified, marks the local property as\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Session_management#nested-local-properties"}),"nested"),"\xa0that is, all its changes will be visible in new sessions, and when these sessions are closed, changes to this property will be applied to the current session. Note that this behavior is similar to the behavior of a regular local property (not\xa0",Object(o.b)("strong",{parentName:"p"},"NESTED"),") when using the\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/NEWSESSION_operator"}),Object(o.b)("strong",{parentName:"a"},"NEWSESSION")," operator"),"\xa0with the specified keyword\xa0",Object(o.b)("strong",{parentName:"p"},"NESTED LOCAL"),"\xa0(or just\xa0",Object(o.b)("strong",{parentName:"p"},"NESTED")," if this local property is explicitly specified in the property list)."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"returnClass")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#classid-broken"}),"Class ID"),"\xa0of the return value of a property.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"argumentClass1, ..., argumentClassN")),Object(o.b)("p",null,"A list of class IDs for property arguments.\xa0"),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(p.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=OperatorPropertySample&block=data",mdxType:"CodeSample"}),Object(o.b)("p",null,"**",Object(o.b)("br",{parentName:"p"}),"\n","**"))}l.isMDXComponent=!0}}]);