(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{322:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return i}));var n=r(3),a=(r(0),r(424));const o={},c={unversionedId:"LSFUS/ASK_operator",id:"LSFUS/ASK_operator",isDocsHomePage:!1,title:"ASK_operator",description:"lsFusionASK operator",source:"@site/docs\\LSFUS\\ASK_operator.md",slug:"/LSFUS/ASK_operator",permalink:"/docusaurustest/docs/LSFUS/ASK_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/ASK_operator.md",version:"current"},p=[],s={toc:p};function i({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusionask-operator"},"lsFusionASK operator"),Object(a.b)("h1",{id:"ask-operator"},"ASK operator"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"ASK"),"\xa0operator creates an action that shows the user a\xa0message in a\xa0",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"4915326.html#Showmessage(MESSAGE,ASK)-dialog"}),"dialog form"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"ASK expression\xa0\n[[alias =] YESNO]\n[DO actionOperator [ELSE elseOperator]]\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description")),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"ASK"),"\xa0operator creates an action that asks the user for confirmation/asks the user a question."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"expression")),Object(a.b)("p",null,"An expression whose value is a message string. If the value is ",Object(a.b)("strong",{parentName:"p"},"NULL"),", the question will not be asked, but the action will be executed."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"YESNO")),Object(a.b)("p",null,"If specified, the user is asked a question (Yes/No)"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"alias")),Object(a.b)("p",null,"The name of the local parameter in which the user's response to the question will be written (Yes = ",Object(a.b)("strong",{parentName:"p"},"TRUE"),", No = ",Object(a.b)("strong",{parentName:"p"},"NULL"),").\xa0",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id"}),"Simple ID"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"actionOperator")),Object(a.b)("p",null,"A ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-id-%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B-%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F-contextdependent"}),"context-dependent action operator")," that is executed if the input was completed successfully. Both upper parameters and the user response parameter (if the question was Yes/No) can be used as parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"elseActionOperator")),Object(a.b)("p",null,"A ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-id-%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B-%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F-contextdependent"}),"context-dependent action operator")," that is executed if the input was cancelled. Only upper parameters can be used as parameters."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example")),Object(a.b)("hr",null))}i.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),l=b(r),m=n,O=l["".concat(c,".").concat(m)]||l[m]||u[m]||o;return r?a.a.createElement(O,p(p({ref:t},i),{},{components:r})):a.a.createElement(O,p({ref:t},i))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);