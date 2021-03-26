(window.webpackJsonp=window.webpackJsonp||[]).push([[613,461],{58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"CodeSample",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),s=n(7),o=n(0),i=n.n(o),c=n(750),r=n(751),l={},u={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},d=[],p=function(e){var t=e.url,n=e.lines,a=Object(o.useState)(""),s=a[0],l=a[1];return Object(o.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),s?n?Object(c.b)(i.a.Fragment,null,Object(c.b)(r.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},s),Object(c.b)("br",null)):Object(c.b)(i.a.Fragment,null,Object(c.b)(r.a,{className:"lsf",mdxType:"CodeBlock"},s),Object(c.b)("br",null)):Object(c.b)(r.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:d,CodeSample:p};function b(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},684:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),s=n(7),o=(n(0),n(750)),i=n(58),c={title:"Simple event"},r={unversionedId:"Simple_event",id:"version-1.0.0/Simple_event",isDocsHomePage:!1,title:"Simple event",description:"Simple\xa0event - an event that occurs when the value of the specified property (which shall be called an event\xa0condition)\xa0changes\xa0to non-NULL. This event is a kind of extension of a basic event (adding an additional condition), which means that all the same parameters must be set as for an basic event, in particular:",source:"@site/versioned_docs/version-1.0.0/Simple_event.md",slug:"/Simple_event",permalink:"/docusaurustest/docs/Simple_event",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/Simple_event.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Events: Overview",permalink:"/docusaurustest/docs/Events"},next:{title:"Calculated events",permalink:"/docusaurustest/docs/Calculated_events"}},l=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:l};function d(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Simple"),"\xa0event - an ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Events"},"event")," that occurs when the value of the specified ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Properties"},"property")," (which shall be called an event\xa0",Object(o.b)("em",{parentName:"p"},"condition"),")\xa0changes\xa0to non-",Object(o.b)("strong",{parentName:"p"},"NULL"),". This event is a kind of extension of a basic event (adding an additional condition), which means that all the same parameters must be set as for an basic event, in particular:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"event ",Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Events#type"},"type"),", which determines the point in time when this simple event will occur (including checking the condition)."),Object(o.b)("li",{parentName:"ul"},"event ",Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Events"},"handler")," - an ",Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Actions"},"action")," to be executed upon the occurrence of this simple event")),Object(o.b)("p",null,"Compared to a basic event, a simple event just wraps its handling in a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/Loop_FOR_"},"loop")," operator\xa0whose condition is an\xa0event condition. However, simple events have a number of important additional features:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If the condition does not contain the ",Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Previous_value_PREV_"},"previous value operator (PREV)"),", the platform itself wraps the specified condition in a ",Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Change_operators_SET_CHANGED_..._"},"change operator (SET)"),". This significantly reduces the risk of creating incorrect handling (which will have consequences if the change session is empty)"),Object(o.b)("li",{parentName:"ul"},"Such events are more understandable and readable, as they reflect the classic cause-effect relationship (when one thing occurs, another is done)"),Object(o.b)("li",{parentName:"ul"},'For these events there is the possibility of "recalculation" - that is, executing handlers in a mode where all previous values are ',Object(o.b)("strong",{parentName:"li"},"NULL")," (as if the database were empty). This is useful when an event is created for an existing database, and the old data must also follow the logic of this event."),Object(o.b)("li",{parentName:"ul"},"If the action in a simple event is a single ",Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Property_change_CHANGE_"},"change")," of a given property, this event is easily made\xa0",Object(o.b)("a",{parentName:"li",href:"/docusaurustest/docs/Calculated_events"},"calculated")," and vice versa.")),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To create simple events, use the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/WHEN_instruction"},Object(o.b)("strong",{parentName:"a"},"WHEN")," instruction"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=when",mdxType:"CodeSample"}))}d.isMDXComponent=!0}}]);