(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(7),a=(n(0),n(419)),c={title:"How-to: SEEK"},i={unversionedId:"How-to_SEEK",id:"How-to_SEEK",isDocsHomePage:!1,title:"How-to: SEEK",description:"Example 1",source:"@site/docs\\How-to_SEEK.md",slug:"/How-to_SEEK",permalink:"/docusaurustest/docs/How-to_SEEK",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_SEEK.md",version:"current",sidebar:"docs",previous:{title:"How-to: NEWSESSION",permalink:"/docusaurustest/docs/How-to_NEWSESSION"},next:{title:"How-to: Events",permalink:"/docusaurustest/docs/How-to_Events"}},s=[],u={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"example-1"},"Example 1"),Object(a.b)("h6",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have a defined logic for books and categories. A form has been created with a list of books categorized."),Object(a.b)("p",null,"We need to create an action that creates a new book, automatically assigns it to the current category and then makes this book active once the user saves and closes the form."),Object(a.b)("h6",{id:"solution"},"Solution"),Object(a.b)("p",null,"After closing the form, we need to call the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/SEEK_operator"}),"SEEK")," operator which will make the added object active."),Object(a.b)("h5",{id:"example-2"},"Example 2"),Object(a.b)("h6",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to ",Object(a.b)("strong",{parentName:"p"},"Example 1"),". We have also added the customer logic. The user can set a price for each customer and book in the dedicated form."),Object(a.b)("p",null,"We need to add a default customer whose data will be populated when the user opens the form."),Object(a.b)("h6",{id:"solution-1"},"Solution"),Object(a.b)("p",null,"The property with the default customer is added to the Settings form on the General tab. The current object will change once the user opens the form, since the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Event_block"}),"ON INIT")," event will be triggered."),Object(a.b)("h5",{id:"example-2-1"},"Example 2"),Object(a.b)("h6",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"Let's assume that we have a report form for which a date range is specified."),Object(a.b)("p",null,"We need to create buttons that will modify the interval to the last week, current month or last month."),Object(a.b)("h6",{id:"solution-2"},"Solution"),Object(a.b)("p",null,"Date properties can be found in the ",Object(a.b)("strong",{parentName:"p"},"Time")," ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Modules"}),"system module")," which is loaded at the very beginning using the ",Object(a.b)("strong",{parentName:"p"},"REQUIRE")," instruction."))}l.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=o,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||a;return n?r.a.createElement(m,i(i({ref:t},u),{},{components:n})):r.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);