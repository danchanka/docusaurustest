(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{419:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,m=l["".concat(c,".").concat(b)]||l[b]||d[b]||o;return n?a.a.createElement(m,s(s({ref:t},u),{},{components:n})):a.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(419)),c={title:"Eval (EVAL)"},s={unversionedId:"Eval_EVAL_",id:"Eval_EVAL_",isDocsHomePage:!1,title:"Eval (EVAL)",description:"The eval operator creates an action that executes defined program code in the lsFusion\xa0language. Program code is defined as a property whose value should belong to the string class. This is implemented using an\xa0action which takes a line of code as an argument.",source:"@site/docs\\Eval_EVAL_.md",slug:"/Eval_EVAL_",permalink:"/docusaurustest/docs/Eval_EVAL_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Eval_EVAL_.md",version:"current",sidebar:"docs",previous:{title:"Custom formula (FORMULA)",permalink:"/docusaurustest/docs/Custom_formula_FORMULA_"},next:{title:"Migration",permalink:"/docusaurustest/docs/Migration"}},i=[],u={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The eval operator creates an action that executes defined program code in the ",Object(o.b)("strong",{parentName:"p"},"lsFusion"),"\xa0language. Program code is defined as a property whose value should belong to the string class. This is implemented using an\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," which takes a line of code as an argument."),Object(o.b)("p",null,"The code that is passed to an action must be a sequence of\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Instructions"}),"instructions"),". It is assumed that one of these instructions will create an action named ",Object(o.b)("strong",{parentName:"p"},"run")," (it is this action that will be executed)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Action execution")),Object(o.b)("p",null,"This operator can also execute a single action (rather than a set of instructions): in this case the code should be a sequence of\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/%D0%9Eperators"}),"action operators"),"\xa0and local property declarations.\xa0To refer to the parameters of the action, you can use the special character $ and the parameter number (starting from 1)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Executable code restrictions")),Object(o.b)("p",null,"In the current implementation, executable code must not contain instructions that modify existing objects in the system. For example, you cannot add ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Events"}),"events")," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_properties_DATA_"}),"data")," and materialized properties, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Extensions"}),"extend"),"\xa0existing\xa0objects, etc."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Language")),Object(o.b)("p",null,"To declare an action that executes program code, use the\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/EVAL_operator"}),Object(o.b)("strong",{parentName:"a"},"EVAL")," operator"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")))}p.isMDXComponent=!0}}]);