(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{149:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return i}));var a=r(3),n=r(7),o=(r(0),r(419)),p={title:"DATA operator"},c={unversionedId:"DATA_operator",id:"DATA_operator",isDocsHomePage:!1,title:"DATA operator",description:"The DATA operator creates a data property.",source:"@site/docs\\DATA_operator.md",slug:"/DATA_operator",permalink:"/docusaurustest/docs/DATA_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/DATA_operator.md",version:"current",sidebar:"docs",previous:{title:"CONCAT operator",permalink:"/docusaurustest/docs/CONCAT_operator"},next:{title:"EXCLUSIVE operator",permalink:"/docusaurustest/docs/EXCLUSIVE_operator"}},s=[],b={toc:s};function i(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"DATA")," operator creates a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_properties_DATA_"}),"data property"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"DATA [LOCAL [NESTED]] returnClass (argumentClass1, ..., argumentClassN)\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"DATA")," operator creates a data property. This ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Operators"}),"property operator")," cannot be used inside ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expressions"),". The data property can be created local by specifying the keyword ",Object(o.b)("strong",{parentName:"p"},"LOCAL"),".\xa0"),Object(o.b)("p",null,"This operator cannot be used in the\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/JOIN_operator"}),Object(o.b)("strong",{parentName:"a"},"JOIN")," operator"),"\xa0(inside\xa0","[","]","), since a name must be specified for the data property."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"LOCAL")),Object(o.b)("p",null,"A keyword that, when specified, creates a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"688168.html#Dataproperties(DATA)-local"}),"local data property"),".\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NESTED")),Object(o.b)("p",null,"A keyword that, when specified, marks the local property as\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"Session-management_30769221.html#Sessionmanagement-nested"}),"nested"),"\xa0that is, all its changes will be visible in new sessions, and when these sessions are closed, changes to this property will be applied to the current session. Note that this behavior is similar to the behavior of a regular local property (not\xa0",Object(o.b)("strong",{parentName:"p"},"NESTED"),") when using the\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/NEWSESSION_operator"}),Object(o.b)("strong",{parentName:"a"},"NEWSESSION")," operator"),"\xa0with the specified keyword\xa0",Object(o.b)("strong",{parentName:"p"},"NESTED LOCAL"),"\xa0(or just\xa0",Object(o.b)("strong",{parentName:"p"},"NESTED")," if this local property is explicitly specified in the property list)."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"returnClass")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-classid"}),"Class ID"),"\xa0of the return value of a property.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"argumentClass1, ..., argumentClassN")),Object(o.b)("p",null,"A list of class IDs for property arguments.\xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null),Object(o.b)("p",null,"**",Object(o.b)("br",{parentName:"p"}),"\n","**"))}i.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),i=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=i(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=i(r),O=a,m=l["".concat(p,".").concat(O)]||l[O]||u[O]||o;return r?n.a.createElement(m,c(c({ref:t},b),{},{components:r})):n.a.createElement(m,c({ref:t},b))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=O;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var b=2;b<o;b++)p[b]=r[b];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);