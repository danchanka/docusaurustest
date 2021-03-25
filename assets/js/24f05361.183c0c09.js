(window.webpackJsonp=window.webpackJsonp||[]).push([[86,461],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return l}));var n=a(3),o=a(7),r=(a(0),a(750)),s=a(58),i={title:"Previous value (PREV)"},c={unversionedId:"Previous_value_PREV_",id:"version-1.0.0/Previous_value_PREV_",isDocsHomePage:!1,title:"Previous value (PREV)",description:"The previous value\xa0operator creates a property that returns the value of the specified property at the beginning of the session (that is, the current value in the database ignoring the session changes).",source:"@site/versioned_docs/version-1.0.0/Previous_value_PREV_.md",slug:"/Previous_value_PREV_",permalink:"/docusaurustest/docs/Previous_value_PREV_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/Previous_value_PREV_.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"New session (NEWSESSION, NESTEDSESSION)",permalink:"/docusaurustest/docs/New_session_NEWSESSION_NESTEDSESSION_"},next:{title:"Change operators (SET, CHANGED, ...)",permalink:"/docusaurustest/docs/Change_operators_SET_CHANGED_..._"}},u=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],d={toc:u};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"previous value"),"\xa0operator creates a ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Properties"},"property")," that returns the value of the specified property at the beginning of the session (that is, the current value in the database ignoring the session changes)."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This operator is calculated differently inside the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Events#change"},"event")," handling: here it returns the value at the time of the previous occurrence of this event (or rather, at the time when all its handling were completed)."))),Object(r.b)("h3",{id:"language"},"Language"),Object(r.b)("p",null,"To declare a property that returns a previous value, use the\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/PREV_operator"},Object(r.b)("strong",{parentName:"a"},"PREV")," operator"),".\xa0"),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)(s.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=prev",mdxType:"CodeSample"}))}l.isMDXComponent=!0},58:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return l})),a.d(t,"CodeSample",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(3),o=a(7),r=a(0),s=a.n(r),i=a(750),c=a(751),u={},d={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},l=[],p=function(e){var t=e.url,a=e.lines,n=Object(r.useState)(""),o=n[0],u=n[1];return Object(r.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return u(e)}))}),[t,u]),o?a?Object(i.b)(s.a.Fragment,null,Object(i.b)(c.a,{className:"lsf",metastring:a,mdxType:"CodeBlock"},o),Object(i.b)("br",null)):Object(i.b)(s.a.Fragment,null,Object(i.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},o),Object(i.b)("br",null)):Object(i.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:l,CodeSample:p};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0}}]);