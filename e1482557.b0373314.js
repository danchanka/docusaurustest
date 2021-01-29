(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{377:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(424)),c={title:"ACTION+ instruction"},i={unversionedId:"LSFUS/ACTION+_instruction",id:"LSFUS/ACTION+_instruction",isDocsHomePage:!1,title:"ACTION+ instruction",description:"The ACTION+ \xa0instruction adds an implementation (branching condition) to\xa0an abstract action.",source:"@site/docs\\LSFUS\\ACTION+_instruction.md",slug:"/LSFUS/ACTION+_instruction",permalink:"/docusaurustest/docs/LSFUS/ACTION+_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/ACTION+_instruction.md",version:"current"},p=[],s={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ACTION+")," \xa0instruction adds an implementation (branching condition) to\xa0an ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Action_extension"}),"abstract action"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"[ACTION] actionId(param1, ..., paramN) + { implAction }\n[ACTION] actionId(param1, ..., paramN) + WHEN whenExpr THEN { implAction }\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ACTION+")," instruction adds an implementation to an abstract action. The syntax for adding an implementation depends on the type of abstract action. If the abstract action is of type\xa0",Object(o.b)("strong",{parentName:"p"},"CASE"),", then the implementation should be described using\xa0",Object(o.b)("strong",{parentName:"p"},"WHEN ... THEN ...")," otherwise, the implementation should be described simply as an action.\xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,"*",Object(o.b)("em",{parentName:"p"},"actionId"),"  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"})),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"ID")," of the\xa0abstract action.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(o.b)("p",null,"List of parameters that will be used to define the implementation. Each element is a\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-paramid"}),"typed parameter"),". The\xa0number of these parameters must be equal to the number of parameters of the abstract action. These parameters can then be used in the implementation operator of the abstract property and in the selection condition expression of this implementation."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"implAction")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-id-%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B-%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F-contextdependent"}),"Context-dependent action operator")," whose value determines the implementation of the abstract action.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"whenExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Expression"}),"expression")," whose value determines the selection condition of the implementation of an abstract property (action) that has type\xa0",Object(o.b)("strong",{parentName:"p"},"CASE"),".\xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null))}b.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,O=u["".concat(c,".").concat(m)]||u[m]||l[m]||o;return n?a.a.createElement(O,i(i({ref:t},s),{},{components:n})):a.a.createElement(O,i({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);