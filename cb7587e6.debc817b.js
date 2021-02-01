(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{355:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),s=n(7),a=(n(0),n(424)),o={title:"New session (NEWSESSION, NESTEDSESSION)"},c={unversionedId:"LSFUS/New_session_NEWSESSION_NESTEDSESSION_",id:"LSFUS/New_session_NEWSESSION_NESTEDSESSION_",isDocsHomePage:!1,title:"New session (NEWSESSION, NESTEDSESSION)",description:"The new session operator allows you to execute an action in a session different from the current one.",source:"@site/docs\\LSFUS\\New_session_NEWSESSION_NESTEDSESSION_.md",slug:"/LSFUS/New_session_NEWSESSION_NESTEDSESSION_",permalink:"/docusaurustest/docs/LSFUS/New_session_NEWSESSION_NESTEDSESSION_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/New_session_NEWSESSION_NESTEDSESSION_.md",version:"current",sidebar:"docs",previous:{title:"Cancel changes (CANCEL)",permalink:"/docusaurustest/docs/LSFUS/Cancel_changes_CANCEL_"},next:{title:"Previous value (PREV)",permalink:"/docusaurustest/docs/LSFUS/Previous_value_PREV_"}},i=[],u={toc:i};function p(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The new ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Change_sessions"}),"session")," operator allows you to execute an action in a session different from the current one.\xa0"),Object(a.b)("p",null,"As with other session management operators, you can explicitly specify\xa0",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"Session-management_30769221.html#Sessionmanagement-nested"}),"nested local properties")," for the new session operator."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Nested sessions")),Object(a.b)("p",null,"It is also possible to create a new ",Object(a.b)("em",{parentName:"p"},"nested")," session.\xa0In this case, all changes that occurred in the current session are copied to the nested session (the same happens when ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Cancel_changes_CANCEL_"}),"changes are discarded")," in a nested session). At the same time, when you ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Apply_changes_APPLY_"}),"apply changes")," in the nested session, all changes are copied back to the current session (without being saved to the database).\xa0"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Language")),Object(a.b)("p",null,"To create an action that executes another action in a new session, use\xa0the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/NEWSESSION_operator"}),Object(a.b)("strong",{parentName:"a"},"NEWSESSION")," operator"),"\xa0(for nested sessions, use the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/NESTEDSESSION_operator"}),Object(a.b)("strong",{parentName:"a"},"NESTEDSESSION")," operator"),")."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples")))}p.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return d}));var r=n(0),s=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=s.a.createContext({}),p=function(e){var t=s.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},S=function(e){var t=p(e.components);return s.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},b=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),S=p(n),b=r,d=S["".concat(o,".").concat(b)]||S[b]||l[b]||a;return n?s.a.createElement(d,c(c({ref:t},u),{},{components:n})):s.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);