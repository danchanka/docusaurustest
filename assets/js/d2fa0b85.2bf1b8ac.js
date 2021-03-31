(window.webpackJsonp=window.webpackJsonp||[]).push([[562],{633:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(749)),c={title:"Class change (CHANGECLASS, DELETE)"},s={unversionedId:"Class_change_CHANGECLASS_DELETE_",id:"Class_change_CHANGECLASS_DELETE_",isDocsHomePage:!1,title:"Class change (CHANGECLASS, DELETE)",description:"The\xa0class change\xa0operator creates an action that assigns the given\xa0class to all objects where value of a particular\xa0property\xa0(condition) is not equal to\xa0NULL. The condition can be omitted, in which case it is considered to be equal to TRUE.",source:"@site/docs/Class_change_CHANGECLASS_DELETE_.md",slug:"/Class_change_CHANGECLASS_DELETE_",permalink:"/docusaurustest/docs/next/Class_change_CHANGECLASS_DELETE_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Class_change_CHANGECLASS_DELETE_.md",version:"current",sidebar:"docs",previous:{title:"New object (NEW)",permalink:"/docusaurustest/docs/next/New_object_NEW_"},next:{title:"Session management: Overview",permalink:"/docusaurustest/docs/next/Session_management"}},i=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The\xa0",Object(o.b)("em",{parentName:"p"},"class change"),"\xa0operator creates an ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Actions"},"action")," that assigns the given\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Classes"},"class")," to all objects where value of a particular\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"property"),"\xa0(",Object(o.b)("em",{parentName:"p"},"condition"),") is not equal to\xa0",Object(o.b)("strong",{parentName:"p"},"NULL"),". The condition can be omitted, in which case it is considered to be equal to ",Object(o.b)("strong",{parentName:"p"},"TRUE"),". \xa0"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The platform also has a builtin\xa0changeClass\xa0action with two parameters: the first defines the object for which you want to change the class, and the second defines an object of the new class. Since it is much more difficult to determine the possible values of a new class when using the builtin action than in the case of an operator (for which the new class is specified explicitly), it is recommended that you use the operator (and not the builtin action)"))),Object(o.b)("p",null,"If there is a non-",Object(o.b)("strong",{parentName:"p"},"NULL")," value of some ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Data_properties_DATA_"},"data property"),' for which the "changed" object is either its parameter or the value itserf, then this value is automatically changed to ',Object(o.b)("strong",{parentName:"p"},"NULL"),"."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This behavior is implemented by analogy with ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Calculated_events"},"computed")," and ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Simple_event"},"simple")," events."))),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To declare an action that implements a change of object classes, use the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/CHANGECLASS_operator"},Object(o.b)("strong",{parentName:"a"},"CHANGECLASS")," operator")," or ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/DELETE_operator"},"the ",Object(o.b)("strong",{parentName:"a"},"DELETE")," operator"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"// deleting an object\ndeleteObject(obj)  { DELETE obj; }\n\n// deleting all inactive products\nCLASS Article;\nactive = DATA BOOLEAN (Article);\ndeleteInactiveArticles()  {\n    DELETE Article a WHERE a IS Article AND NOT active(a); // a local parameter a is added corresponding to the objects to be iterated over\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Document;\ndate = DATA DATE (Document);\n\nCLASS ClosedDocument : Document;\n// sets status to closed for all documents with a date older than 2 weeks\nchangeStatus()  {\n    CHANGECLASS Document d TO ClosedDocument WHERE sum(date(d), 14) <= currentDate();\n}\n")))}p.isMDXComponent=!0},749:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return a?r.a.createElement(m,s(s({ref:t},l),{},{components:a})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);