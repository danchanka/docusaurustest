(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(424)),s={},c={unversionedId:"LSFUS/lsFusionSession_management",id:"LSFUS/lsFusionSession_management",isDocsHomePage:!1,title:"lsFusionSession_management",description:"lsFusionSession management",source:"@site/docs\\LSFUS\\lsFusionSession_management.md",slug:"/LSFUS/lsFusionSession_management",permalink:"/docusaurustest/docs/LSFUS/lsFusionSession_management",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionSession_management.md",version:"current"},l=[],i={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionsession-management"},"lsFusionSession management"),Object(o.b)("h1",{id:"session-management"},"Session management"),Object(o.b)("p",null,"The system has the following operators for working with sessions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/lsFusionApply_changes_APPLY_"}),"Apply changes (APPLY)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/lsFusionCancel_changes_CANCEL_"}),"Cancel changes (CANCEL)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/lsFusionNew_session_NEWSESSION_NESTEDSESSION_"}),"New session (NEWSESSION, NESTEDSESSION)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/lsFusionPrevious_value_PREV_"}),"Previous value (PREV)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/lsFusionChange_operators_SET_CHANGED_..._"}),"Change operators (SET, CHANGED, ...)"))),Object(o.b)("p",null,"Note that the latter two operators create properties, not actions."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Nested local properties")),Object(o.b)("p",null,"When the first three session management operators are executed, all local properties are reset to ",Object(o.b)("strong",{parentName:"p"},"NULL"),' . This is not always convenient. Besides, you may often need to pass data between different sessions or "life cycles" of the same session. To do that, you can mark specific local properties as ',Object(o.b)("em",{parentName:"p"},"nested"),". In this case:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"When a new session is created, all values of the local property are copied to it and are copied back when it closes."),Object(o.b)("li",{parentName:"ol"},"When changes are applied, all values of the local property are preserved after the transaction is completed (by default, after applying changes the session is cleared along with the values of all local properties)."),Object(o.b)("li",{parentName:"ol"},"When changes are canceled, all values of the local property will remain the same as they were before the cancellation.")),Object(o.b)("p",null,"The nesting mark can be added both globally for a local property (and, accordingly, for all of its uses), and separately for each session control operation. For every session management operation, you can also specify that all local properties should be nested."))}u.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(s,".").concat(m)]||p[m]||b[m]||o;return n?r.a.createElement(d,c(c({ref:t},i),{},{components:n})):r.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);