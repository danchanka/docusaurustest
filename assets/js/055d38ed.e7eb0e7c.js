(window.webpackJsonp=window.webpackJsonp||[]).push([[16,461],{58:function(e,s,t){"use strict";t.r(s),t.d(s,"frontMatter",(function(){return u})),t.d(s,"metadata",(function(){return d})),t.d(s,"toc",(function(){return l})),t.d(s,"CodeSample",(function(){return p})),t.d(s,"default",(function(){return m}));var n=t(3),o=t(7),a=t(0),r=t.n(a),c=t(750),i=t(751),u={},d={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},l=[],p=function(e){var s=e.url,t=e.lines,n=Object(a.useState)(""),o=n[0],u=n[1];return Object(a.useEffect)((function(){fetch(s).then((function(e){return e.text()})).then((function(e){return u(e)}))}),[s,u]),o?t?Object(c.b)(r.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",metastring:t,mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(r.a.Fragment,null,Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(c.b)("br",null)):Object(c.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},S={toc:l,CodeSample:p};function m(e){var s=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},S,t,{components:s,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},88:function(e,s,t){"use strict";t.r(s),t.d(s,"frontMatter",(function(){return c})),t.d(s,"metadata",(function(){return i})),t.d(s,"toc",(function(){return u})),t.d(s,"default",(function(){return l}));var n=t(3),o=t(7),a=(t(0),t(750)),r=t(58),c={title:"New session (NEWSESSION, NESTEDSESSION)"},i={unversionedId:"New_session_NEWSESSION_NESTEDSESSION_",id:"version-1.0.0/New_session_NEWSESSION_NESTEDSESSION_",isDocsHomePage:!1,title:"New session (NEWSESSION, NESTEDSESSION)",description:"The new session operator allows you to execute an action in a session different from the current one.",source:"@site/versioned_docs/version-1.0.0/New_session_NEWSESSION_NESTEDSESSION_.md",slug:"/New_session_NEWSESSION_NESTEDSESSION_",permalink:"/docusaurustest/docs/New_session_NEWSESSION_NESTEDSESSION_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/New_session_NEWSESSION_NESTEDSESSION_.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Cancel changes (CANCEL)",permalink:"/docusaurustest/docs/Cancel_changes_CANCEL_"},next:{title:"Previous value (PREV)",permalink:"/docusaurustest/docs/Previous_value_PREV_"}},u=[{value:"Nested sessions",id:"nested",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:u};function l(e){var s=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,t,{components:s,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The new ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Change_sessions"},"session")," operator allows you to execute an action in a session different from the current one.\xa0"),Object(a.b)("p",null,"As with other session management operators, you can explicitly specify\xa0",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Session_management#nested"},"nested local properties")," for the new session operator."),Object(a.b)("h3",{id:"nested"},"Nested sessions"),Object(a.b)("p",null,"It is also possible to create a new ",Object(a.b)("em",{parentName:"p"},"nested")," session.\xa0In this case, all changes that occurred in the current session are copied to the nested session (the same happens when ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Cancel_changes_CANCEL_"},"changes are discarded")," in a nested session). At the same time, when you ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Apply_changes_APPLY_"},"apply changes")," in the nested session, all changes are copied back to the current session (without being saved to the database).\xa0"),Object(a.b)("h3",{id:"language"},"Language"),Object(a.b)("p",null,"To create an action that executes another action in a new session, use\xa0the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/NEWSESSION_operator"},Object(a.b)("strong",{parentName:"a"},"NEWSESSION")," operator"),"\xa0(for nested sessions, use the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/NESTEDSESSION_operator"},Object(a.b)("strong",{parentName:"a"},"NESTEDSESSION")," operator"),")."),Object(a.b)("h3",{id:"examples"},"Examples"),Object(a.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=newsession",mdxType:"CodeSample"}),Object(a.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=nestedsession",mdxType:"CodeSample"}))}l.isMDXComponent=!0}}]);