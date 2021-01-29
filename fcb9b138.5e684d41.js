(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{414:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(424)),c={title:"ACTION instruction"},i={unversionedId:"LSFUS/ACTION_instruction",id:"LSFUS/ACTION_instruction",isDocsHomePage:!1,title:"ACTION instruction",description:"The ACTION instruction\xa0creates an\xa0action.",source:"@site/docs\\LSFUS\\ACTION_instruction.md",slug:"/LSFUS/ACTION_instruction",permalink:"/docusaurustest/docs/LSFUS/ACTION_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/ACTION_instruction.md",version:"current"},p=[],s={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ACTION")," instruction\xa0creates an\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Actions"}),"action"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"[ACTION] name [caption] [(param1, ..., paramN)] { operator } [options];\n[ACTION] name [caption] [(param1, ..., paramN)] contextIndependentOperator [options];\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ACTION\xa0"),"instruction declares a new action and adds it to the current\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Modules"}),"module"),"."),Object(o.b)("p",null,"The instruction has two forms: the first form creates an action using a\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-contextdependent"}),"context-dependent"),"\xa0action operator, the second form creates a\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Property-operators_36307155.html#Propertyoperators-contextindependent"}),"context-independent")," one."),Object(o.b)("p",null,"Also, when declaring an action, a set of its options can be specified. \xa0\xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"name\xa0")),Object(o.b)("p",null,"Action name.\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id-%D0%A1%D0%B8%D0%BD%D1%82%D0%B0%D0%BA%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-id"}),"Simple ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"caption")),Object(o.b)("p",null,"Action caption.\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Literals_35521071.html#Literals-strliteral"}),"String literal"),". If no caption is defined, the action name will be its caption. \xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(o.b)("p",null,"List of parameters. Each of them is defined by a\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-paramid"}),"typed parameter"),"\xa0These parameters can be later used in the action operator describing the action being created (as well as in some options)."),Object(o.b)("p",null,"If parameters are not defined explicitly, they will be automatically calculated when the operator is processed. The order of the parameters will match the order of their appearance in the operator. It is recommended to explicitly define action parameters. This will help find typos and other errors in the declaration (for example, a mismatch of the number of defined parameters with the number of parameters of the created action)."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"operator")),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-id-%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B-%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F-contextdependent"}),"context-dependent"),"\xa0action operator describing and creating an action.\xa0You can use the parameters defined in this instruction (if any) as operator parameters."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"contextIndependentOperator")),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-contextindependent"}),"context-independent"),"\xa0action operator describing and creating an action.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"options")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Action_options"}),"Action options")," .\xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")))}b.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=b(n),m=r,d=l["".concat(c,".").concat(m)]||l[m]||u[m]||o;return n?a.a.createElement(d,i(i({ref:t},s),{},{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);