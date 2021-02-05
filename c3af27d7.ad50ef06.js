(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{341:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(419)),c={title:"New threads (NEWTHREAD, NEWEXECUTOR)"},i={unversionedId:"New_threads_NEWTHREAD_NEWEXECUTOR",id:"New_threads_NEWTHREAD_NEWEXECUTOR",isDocsHomePage:!1,title:"New threads (NEWTHREAD, NEWEXECUTOR)",description:"The new thread operator allows you to execute an action in a thread other than the current one.",source:"@site/docs\\New_threads_NEWTHREAD_NEWEXECUTOR.md",slug:"/New_threads_NEWTHREAD_NEWEXECUTOR",permalink:"/docusaurustest/docs/New_threads_NEWTHREAD_NEWEXECUTOR",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/New_threads_NEWTHREAD_NEWEXECUTOR.md",version:"current",sidebar:"docs",previous:{title:"Exit (RETURN)",permalink:"/docusaurustest/docs/Exit_RETURN"},next:{title:"Exception handling (TRY)",permalink:"/docusaurustest/docs/Exception_handling_TRY"}},s=[{value:"New thread pool",id:"new-thread-pool",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"new thread")," operator allows you to execute an action in a thread other than the current one.\xa0"),Object(o.b)("p",null,"By default, an action is executed once in a new thread, immediately after the creation of this thread. However, if necessary, the action can be executed with a defined delay and/or performed continuously at a specified time interval.\xa0"),Object(o.b)("p",null,"The action can also be executed in a new thread on behalf of a specified connection (for example, some user). In this case, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/User_IS_interaction"}),"user interaction")," operators may be used inside the action, including ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Open_form"}),"form opening")," in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG"}),"interactive")," view (by default, when you use these operators, the platform will throw an error)."),Object(o.b)("p",null,"The delay, interval and connection in this statement are defined as certain\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Properties"}),"properties"),"."),Object(o.b)("h3",{id:"new-thread-pool"},"New thread pool"),Object(o.b)("p",null,"Sometimes the number of simultaneously running threads\xa0must be limited to a certain value (as a rule, this is done if the executed actions are not critical and the moment in time when they are completed is not so important). To implement this functionality, the platform has an operator for creating a ",Object(o.b)("em",{parentName:"p"},"new thread pool"),". This allows the operator to perform an action in such a way that all new threads generated inside this action come into this thread pool, which at the same time can include no more than a specified number of threads."),Object(o.b)("p",null,"The number of threads is defined as a property."),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To declare an action that executes another action in a new thread, use the\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/NEWTHREAD_operator"}),Object(o.b)("strong",{parentName:"a"},"NEWTHREAD")," operator"),". To perform an action in a new thread pool, use the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/NEWEXECUTOR_operator"}),Object(o.b)("strong",{parentName:"a"},"NEWEXECUTOR")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"))}p.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,b=d["".concat(c,".").concat(h)]||d[h]||l[h]||o;return n?a.a.createElement(b,i(i({ref:t},u),{},{components:n})):a.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);