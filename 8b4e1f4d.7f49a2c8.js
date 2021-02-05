(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{275:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),o=(r(0),r(419)),c={title:"Operator{...}"},s={unversionedId:"Operator_...",id:"Operator_...",isDocsHomePage:!1,title:"Operator{...}",description:"The \xa0{...} operator creates actions that executes a sequence of other actions.",source:"@site/docs\\Operator_....md",slug:"/Operator_...",permalink:"/docusaurustest/docs/Operator_...",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Operator_....md",version:"current",sidebar:"docs",previous:{title:"Action operator",permalink:"/docusaurustest/docs/Action_operator"},next:{title:"ABSTRACT operator (action)",permalink:"/docusaurustest/docs/ABSTRACT_operator_action"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:p};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The \xa0",Object(o.b)("strong",{parentName:"p"},"{...}")," operator creates ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"actions")," that executes a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Sequence_..."}),"sequence of other actions"),".\xa0"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"{\n    operator1\n    ...\n    operatorN\n}\n")),Object(o.b)("p",null,"Operators can be of two types:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"actionOperator\nLOCAL [NESTED] name1, ..., nameN = returnClass (paramClass1, ..., paramClassN)\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"A sequence of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Action_operator"}),"action operators"),"\xa0and ",Object(o.b)("strong",{parentName:"p"},"LOCAL")," operators enclosed in braces creates a new action that sequentially executes specified actions and creates specified ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_properties_DATA"}),"local properties"),". The area of visibility of the local properties created inside the \xa0",Object(o.b)("strong",{parentName:"p"},"{...}")," operator ends at the end of this operator."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionOperator")),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-contextdependent"}),"context-dependent action operator"),". Each operator is followed by a semicolon, except for operators ending in a closing brace. Extra semicolons are not an error."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"NESTED")),Object(o.b)("p",null,"A keyword that, when specified, marks the local property as ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"Session-management_30769221.html#Sessionmanagement-nested"}),"nested"),"; that is, all of its changes will be visible in new sessions, and when these sessions are closed, changes to this property will get to the current session. Note that this behavior is similar to the behavior of a regular local property (not ",Object(o.b)("strong",{parentName:"p"},"NESTED"),") when using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/NEWSESSION_operator"}),Object(o.b)("strong",{parentName:"a"},"NEWSESSION")," operator"),"\xa0with the specified keyword\xa0",Object(o.b)("strong",{parentName:"p"},"NESTED LOCAL"),"\xa0(or just\xa0",Object(o.b)("strong",{parentName:"p"},"NESTED")," if this local property is explicitly specified in the property list)"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name1, ..., nameN")),Object(o.b)("p",null,"A list of names of the local properties being created. The names are defined\xa0by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id"}),"simple ID's"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"returnClass")),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-classid"}),"class ID"),"\xa0of the returned value of the local property.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"argumentClass1, ..., argumentClassN")),Object(o.b)("p",null,"A list of argument class ID's of the local property."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("p",null,"**",Object(o.b)("br",{parentName:"p"}),"\n","**"))}l.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),l=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=l(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=l(r),d=a,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return r?n.a.createElement(m,s(s({ref:t},i),{},{components:r})):n.a.createElement(m,s({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);