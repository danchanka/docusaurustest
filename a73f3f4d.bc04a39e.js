(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{298:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return i}));var n=r(3),a=r(7),o=(r(0),r(419)),c={title:"EXEC operator"},p={unversionedId:"EXEC_operator",id:"EXEC_operator",isDocsHomePage:!1,title:"EXEC operator",description:"The EXEC\xa0operator creates an action that executes another action.",source:"@site/docs\\EXEC_operator.md",slug:"/EXEC_operator",permalink:"/docusaurustest/docs/EXEC_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/EXEC_operator.md",version:"current",sidebar:"docs",previous:{title:"EVAL operator",permalink:"/docusaurustest/docs/EVAL_operator"},next:{title:"EXPORT operator",permalink:"/docusaurustest/docs/EXPORT_operator"}},s=[],u={toc:s};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"EXEC"),"\xa0operator creates an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Call_EXEC_"}),"executes")," another action."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"[EXEC] actionId(expression1, ..., expressionN)\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"EXEC")," operator creates an action that executes another action, passing it the values of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expressions")," as parameters."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionId")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"Action ID"),".\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expression1, ..., expressionN")),Object(o.b)("p",null,"A list of expressions whose values will be passed to the action being executed as arguments. The number of expressions must be equal to the number of parameters of the action being executed."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"operator")),Object(o.b)("p",null,"An operator that creates the action being executed."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null))}i.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),i=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=i(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=i(r),m=n,O=b["".concat(c,".").concat(m)]||b[m]||l[m]||o;return r?a.a.createElement(O,p(p({ref:t},u),{},{components:r})):a.a.createElement(O,p({ref:t},u))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);