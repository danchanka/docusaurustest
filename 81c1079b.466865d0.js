(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{256:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(424)),i={},s={unversionedId:"LSFUS/lsFusionWorking_parameters",id:"LSFUS/lsFusionWorking_parameters",isDocsHomePage:!1,title:"lsFusionWorking_parameters",description:"lsFusionWorking parameters",source:"@site/docs\\LSFUS\\lsFusionWorking_parameters.md",slug:"/LSFUS/lsFusionWorking_parameters",permalink:"/docusaurustest/docs/LSFUS/lsFusionWorking_parameters",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionWorking_parameters.md",version:"current"},c=[],p={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionworking-parameters"},"lsFusionWorking parameters"),Object(o.b)("h1",{id:"working-parameters"},"Working parameters"),Object(o.b)("p",null,"The platform working parameters can be set in one of the following ways (in the order of their priorities, lower priority at the bottom):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In Java code in the 'lsfusion.server.physics.admin.Settings.java' file (relevant for platform forks)"),Object(o.b)("li",{parentName:"ul"},"In lsfusion.properties which are typically part of the project and therefore function for all installations by default - parameter name should start with 'settings' (e.g., settings.enableUI)"),Object(o.b)("li",{parentName:"ul"},"In conf/settings.properties (for specific installations) - parameter name should start with 'settings'"),Object(o.b)("li",{parentName:"ul"},"In ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"Launch-parameters_65241244.html#Launchparameters-appjava"}),"Java startup parameters"),"\xa0- parameter name should start with 'D' prefix plus 'settings' (e.g., -Dsettings.enableUI=2)"),Object(o.b)("li",{parentName:"ul"},"In the database: Administration\xa0\u2192 System\xa0\u2192 Settings\xa0\u2192 Parameters. In this interface, you can set both global settings and settings for specific roles"),Object(o.b)("li",{parentName:"ul"},"During the execution of an action using system actions: ",Object(o.b)("strong",{parentName:"li"},"Service.pushSetting","[","STRING, STRING","]"),", ",Object(o.b)("strong",{parentName:"li"},"Service.popSetting","[","STRING","]")," (overriding the value of the property for the entire current thread).")),Object(o.b)("p",null,"In addition to the system parameters, the platform also has\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionLaunch_parameters"}),"launch parameters")," which are set a little differently and are relevant mainly for startup (initialization) processes of various components of the platform and access to these components."))}l.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,b=u["".concat(i,".").concat(f)]||u[f]||m[f]||o;return r?a.a.createElement(b,s(s({ref:t},p),{},{components:r})):a.a.createElement(b,s({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);