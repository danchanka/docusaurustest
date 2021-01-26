(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{296:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),s=(n(0),n(423)),o={},c={unversionedId:"LSFUS/lsFusionClass_change_CHANGECLASS_DELETE_",id:"LSFUS/lsFusionClass_change_CHANGECLASS_DELETE_",isDocsHomePage:!1,title:"lsFusionClass_change_CHANGECLASS_DELETE_",description:"lsFusionClass change (CHANGECLASS, DELETE)",source:"@site/docs\\LSFUS\\lsFusionClass_change_CHANGECLASS_DELETE_.md",slug:"/LSFUS/lsFusionClass_change_CHANGECLASS_DELETE_",permalink:"/docusaurustest/docs/LSFUS/lsFusionClass_change_CHANGECLASS_DELETE_",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/LSFUS/lsFusionClass_change_CHANGECLASS_DELETE_.md",version:"current"},i=[],u={toc:i};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"lsfusionclass-change-changeclass-delete"},"lsFusionClass change (CHANGECLASS, DELETE)"),Object(s.b)("h1",{id:"class-change-changeclass-delete"},"Class change (CHANGECLASS, DELETE)"),Object(s.b)("p",null,"The\xa0",Object(s.b)("em",{parentName:"p"},"class change"),"\xa0operator creates an ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionActions"}),"action")," that assigns the given\xa0",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionClasses"}),"class")," to all objects where value of a particular\xa0",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperties"}),"property"),"\xa0(",Object(s.b)("em",{parentName:"p"},"condition"),") is not equal to\xa0",Object(s.b)("strong",{parentName:"p"},"NULL"),". The condition can be omitted, in which case it is considered to be equal to ",Object(s.b)("strong",{parentName:"p"},"TRUE"),". \xa0"),Object(s.b)("p",null,"The platform also has a builtin\xa0changeClass\xa0action with two parameters: the first defines the object for which you want to change the class, and the second defines an object of the new class. Since it is much more difficult to determine the possible values of a new class when using the builtin action than in the case of an operator (for which the new class is specified explicitly), it is recommended that you use the operator (and not the builtin action)"),Object(s.b)("p",null,"If there is a non-",Object(s.b)("strong",{parentName:"p"},"NULL")," value of some ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionData_properties_DATA_"}),"data property"),' for which the "changed" object is either its parameter or the value itserf, then this value is automatically changed to ',Object(s.b)("strong",{parentName:"p"},"NULL"),"."),Object(s.b)("p",null,"This behavior is implemented by analogy with ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionCalculated_events"}),"computed")," and ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionSimple_event"}),"simple")," events."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Language")),Object(s.b)("p",null,"To declare an action that implements a change of object classes, use the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionCHANGECLASS_operator"}),Object(s.b)("strong",{parentName:"a"},"CHANGECLASS")," operator")," or ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionDELETE_operator"}),"the ",Object(s.b)("strong",{parentName:"a"},"DELETE")," operator"),"."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Examples")))}l.isMDXComponent=!0},423:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,d=p["".concat(o,".").concat(h)]||p[h]||b[h]||s;return n?r.a.createElement(d,c(c({ref:t},u),{},{components:n})):r.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<s;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);