(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{274:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var a=r(3),n=(r(0),r(424));const o={},i={unversionedId:"LSFUS/Navigator",id:"LSFUS/Navigator",isDocsHomePage:!1,title:"Navigator",description:"lsFusionNavigator",source:"@site/docs\\LSFUS\\Navigator.md",slug:"/LSFUS/Navigator",permalink:"/docusaurustest/docs/LSFUS/Navigator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/Navigator.md",version:"current"},c=[],s={toc:c};function u({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"lsfusionnavigator"},"lsFusionNavigator"),Object(n.b)("h1",{id:"navigator"},"Navigator"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Navigator")," is a hierarchical structure (tree) consisting of ",Object(n.b)("em",{parentName:"p"},"navigator elements"),". There are three types of navigator elements:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"folder -\xa0"),"combines other navigator elements into a group. Selecting this element ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"Navigator-design_1310742.html#Navigatordesign-selectedfolder"}),"affects")," the display of its children if they belong to another ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/Navigator_design"}),"window"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"action"),"\xa0\u2013 executes\xa0a specified\xa0",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/Actions"}),"action"),". Only actions that take no arguments can be added to the navigator."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"form"),"\xa0\u2013\xa0",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/In_an_interactive_view_SHOW_DIALOG_"}),"opens")," a specified\xa0",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/Forms"}),"form"),"\xa0in the interactive view and the ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"36307331.html#Inaninteractiveview(SHOW,DIALOG)-flow"}),"asynchronous")," mode.")),Object(n.b)("p",null,"When an element is added to the navigator, a ",Object(n.b)("em",{parentName:"p"},"parent")," element is defined for it. The root element of the navigator is the ",Object(n.b)("strong",{parentName:"p"},"System.root")," folder.\xa0"),Object(n.b)("p",null,"If no navigator elements are displayed in a particular navigator folder, this folder is automatically hidden."),Object(n.b)("p",null,"Just as an ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Interactive_view"}),"interactive")," form view, the navigator is displayed in a 2D space: on the user's device screen. Therefore, it's ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Navigator_design"}),"design")," can/has to be defined, as well as for all other ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"Form-views_29884425.html#Formviews-graphic"}),"graphic")," views."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Language")),Object(n.b)("p",null,"To manage the navigator use the\xa0",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/NAVIGATOR_instruction"}),Object(n.b)("strong",{parentName:"a"},"NAVIGATOR"),"\xa0instruction"),"."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Examples")))}u.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),l=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return r?n.a.createElement(m,c(c({ref:t},u),{},{components:r})):n.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);