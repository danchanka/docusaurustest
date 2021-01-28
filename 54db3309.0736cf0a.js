(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{201:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(424)),s={},c={unversionedId:"LSFUS/lsFusionMESSAGE_operator",id:"LSFUS/lsFusionMESSAGE_operator",isDocsHomePage:!1,title:"lsFusionMESSAGE_operator",description:"lsFusionMESSAGE operator",source:"@site/docs\\LSFUS\\lsFusionMESSAGE_operator.md",slug:"/LSFUS/lsFusionMESSAGE_operator",permalink:"/docusaurustest/docs/LSFUS/lsFusionMESSAGE_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionMESSAGE_operator.md",version:"current"},i=[],p={toc:i};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusionmessage-operator"},"lsFusionMESSAGE operator"),Object(a.b)("h1",{id:"message-operator"},"MESSAGE operator"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"MESSAGE")," operator creates an ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionActions"}),"action")," that shows the user a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionShow_message_MESSAGE_ASK_"}),"message"),".**\xa0**"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"MESSAGE expression [syncType]\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description")),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"MESSAGE")," operator creates an action which shows a window with a text message to the user. The text message can be a string constant or a more complex ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionExpression"}),"expression")," which value is or can be converted to a string."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"expression")),Object(a.b)("p",null,"An expression which value is the message text."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"syncType")),Object(a.b)("p",null,"Specifies when the created action should be completed:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"WAIT"),"\xa0- after the client completes the action (closes the message). This value is used by default."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"NOWAIT"),"\xa0-\xa0right after the information is ready for sending to the client (the message text is read). If several\xa0",Object(a.b)("strong",{parentName:"li"},"MESSAGE"),"\xa0",Object(a.b)("strong",{parentName:"li"},"NOWAIT"),"\xa0actions are called during the execution of some continuous action, they do not create separate messages but are concatenated with the previous messages of the same type. A single concatenated message will be shown to the user at the end of the continuous action as a result.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples")),Object(a.b)("hr",null))}u.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return O}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(r),m=n,O=l["".concat(s,".").concat(m)]||l[m]||b[m]||a;return r?o.a.createElement(O,c(c({ref:t},p),{},{components:r})):o.a.createElement(O,c({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var p=2;p<a;p++)s[p]=r[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);