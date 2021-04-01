(window.webpackJsonp=window.webpackJsonp||[]).push([[627],{698:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var s=t(3),a=t(7),r=(t(0),t(749)),o={title:"New session (NEWSESSION, NESTEDSESSION)"},c={unversionedId:"New_session_NEWSESSION_NESTEDSESSION_",id:"New_session_NEWSESSION_NESTEDSESSION_",isDocsHomePage:!1,title:"New session (NEWSESSION, NESTEDSESSION)",description:"The new session operator allows you to execute an action in a session different from the current one.",source:"@site/docs/New_session_NEWSESSION_NESTEDSESSION_.md",slug:"/New_session_NEWSESSION_NESTEDSESSION_",permalink:"/docusaurustest/docs/next/New_session_NEWSESSION_NESTEDSESSION_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/New_session_NEWSESSION_NESTEDSESSION_.md",version:"current",sidebar:"docs",previous:{title:"Cancel changes (CANCEL)",permalink:"/docusaurustest/docs/next/Cancel_changes_CANCEL_"},next:{title:"Previous value (PREV)",permalink:"/docusaurustest/docs/next/Previous_value_PREV_"}},i=[{value:"Nested sessions",id:"nested",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:i};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(s.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The new ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Change_sessions"},"session")," operator allows you to execute an action in a session different from the current one.\xa0"),Object(r.b)("p",null,"As with other session management operators, you can explicitly specify\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Session_management#nested"},"nested local properties")," for the new session operator."),Object(r.b)("h3",{id:"nested"},"Nested sessions"),Object(r.b)("p",null,"It is also possible to create a new ",Object(r.b)("em",{parentName:"p"},"nested")," session.\xa0In this case, all changes that occurred in the current session are copied to the nested session (the same happens when ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Cancel_changes_CANCEL_"},"changes are discarded")," in a nested session). At the same time, when you ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Apply_changes_APPLY_"},"apply changes")," in the nested session, all changes are copied back to the current session (without being saved to the database).\xa0"),Object(r.b)("h3",{id:"language"},"Language"),Object(r.b)("p",null,"To create an action that executes another action in a new session, use\xa0the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/NEWSESSION_operator"},Object(r.b)("strong",{parentName:"a"},"NEWSESSION")," operator"),"\xa0(for nested sessions, use the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/NESTEDSESSION_operator"},Object(r.b)("strong",{parentName:"a"},"NESTEDSESSION")," operator"),")."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"testNewSession ()  {\n    NEWSESSION {\n        NEW c = Currency {\n            name(c) <- 'USD';\n            code(c) <- 866;\n        }\n        APPLY;\n    }\n    // here a new object of class Currency is already in the database\n\n    LOCAL local = BPSTRING[10] (Currency);\n    local(Currency c) <- 'Local';\n    NEWSESSION {\n        MESSAGE (GROUP SUM 1 IF local(Currency c) == 'Local'); // will return NULL\n    }\n    NEWSESSION NESTED (local) {\n        MESSAGE (GROUP SUM 1 IF local(Currency c) == 'Local'); // will return the number of objects of class Currency\n    }\n\n    NEWSESSION {\n        NEW s = Sku {\n            id(s) <- 1234;\n            name(s) <- 'New Sku';\n            SHOW sku OBJECTS s = s;\n        }\n    }\n\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"testNestedSession ()  {\n    NESTEDSESSION {\n        name(Sku s) <- 'aaa';\n        APPLY; // in fact, the changes will not be applied to the database, but to the \"upper\" session\n    }\n\n    MESSAGE (GROUP SUM 1 IF name(Sku s) == 'aaa'); // returns all rows\n    CANCEL;\n    MESSAGE (GROUP SUM 1 IF name(Sku s) == 'aaa'); // returns NULL if there was no Sku named aaa in the database before\n\n}\n\nFORM sku\n    OBJECTS s = Sku PANEL\n    PROPERTIES(s) id, name\n;\nnewNestedSession()  {\n    NESTEDSESSION {\n        NEW s = Sku {\n            // shows the form, but any changes in it will not be applied to the database, but will be saved in the \"upper session\" session\n            SHOW sku OBJECTS s = s;\n        }\n    }\n}\n")))}l.isMDXComponent=!0},749:function(e,n,t){"use strict";t.d(n,"a",(function(){return S})),t.d(n,"b",(function(){return E}));var s=t(0),a=t.n(s);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},S=function(e){var n=l(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),S=l(t),d=s,E=S["".concat(o,".").concat(d)]||S[d]||p[d]||r;return t?a.a.createElement(E,c(c({ref:n},u),{},{components:t})):a.a.createElement(E,c({ref:n},u))}));function E(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,o=new Array(r);o[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:s,o[1]=c;for(var u=2;u<r;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);