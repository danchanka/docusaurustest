(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{297:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(424)),c={},l={unversionedId:"LSFUS/lsFusionInternal_call_INTERNAL_",id:"LSFUS/lsFusionInternal_call_INTERNAL_",isDocsHomePage:!1,title:"lsFusionInternal_call_INTERNAL_",description:"lsFusionInternal call (INTERNAL)",source:"@site/docs\\LSFUS\\lsFusionInternal_call_INTERNAL_.md",slug:"/LSFUS/lsFusionInternal_call_INTERNAL_",permalink:"/docusaurustest/docs/LSFUS/lsFusionInternal_call_INTERNAL_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionInternal_call_INTERNAL_.md",version:"current"},s=[],i={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusioninternal-call-internal"},"lsFusionInternal call (INTERNAL)"),Object(o.b)("h1",{id:"internal-call-internal"},"Internal call (INTERNAL)"),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"internal call")," operator allows to create actions in programming languages other than the lsFusion language.**\xa0",Object(o.b)("strong",{parentName:"p"},"The platform currently supports external actions only in the "),"Java** language."),Object(o.b)("p",null,"This operator also makes it possible to directly specify the source for an action in Java, as well as the name of a Java class for which the bytecode is located in a separate Java file. In the second case it is assumed that the file is within the classpath of the server's virtual machine; the Java class itself must inherit from\xa0",Object(o.b)("strong",{parentName:"p"},"lsfusion.server.physics.dev.integration.internal.to.InternalAction"),". The class's ",Object(o.b)("strong",{parentName:"p"},"executeInternal(lsfusion.server.logics.action.controller.context.ExecutionContext\xa0context)")," method will be executed."),Object(o.b)("p",null,"This operator allows to specify which classes the action created can take, and whether or not it can take ",Object(o.b)("strong",{parentName:"p"},"NULL")," values. If the specified conditions are not met, the created action is not executed: control simply passes to the next action."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Language")),Object(o.b)("p",null,"To declare an action implemented in ",Object(o.b)("strong",{parentName:"p"},"Java")," use the \xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionINTERNAL_operator"}),Object(o.b)("strong",{parentName:"a"},"INTERNAL"),"\xa0operator"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")))}u.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||b[f]||o;return n?a.a.createElement(m,l(l({ref:t},i),{},{components:n})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);