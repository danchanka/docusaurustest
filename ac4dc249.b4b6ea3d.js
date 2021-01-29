(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{305:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var a=r(3),n=(r(0),r(424));const c={},o={unversionedId:"LSFUS/Launch_parameters",id:"LSFUS/Launch_parameters",isDocsHomePage:!1,title:"Launch_parameters",description:"lsFusionLaunch parameters",source:"@site/docs\\LSFUS\\Launch_parameters.md",slug:"/LSFUS/Launch_parameters",permalink:"/docusaurustest/docs/LSFUS/Launch_parameters",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/Launch_parameters.md",version:"current"},i=[{value:"Application server (Server)",id:"application-server-server",children:[]}],p={toc:i};function u({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"lsfusionlaunch-parameters"},"lsFusionLaunch parameters"),Object(n.b)("h1",{id:"launch-parameters"},"Launch parameters"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Application server (Server)",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"#Launchparameters-appjava"}),"Java")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"#Launchparameters-applsfusion"}),"lsFusion")))),Object(n.b)("li",{parentName:"ul"},"Web server (Client)",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"#Launchparameters-webjava"}),"Java")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"#Launchparameters-weblsfusion"}),"lsFusion"))))),Object(n.b)("h3",{id:"application-server-server"},"Application server (Server)"),Object(n.b)("h4",{id:"java"},"Java"),Object(n.b)("p",null,"Java application server startup parameters are set in the launch command (for example, for\xa0",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"57738083.html#Execution(manual)-command"}),"manual"),"\xa0or\xa0",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"57738078.html#Execution(auto)-settings"}),"automatic"),"\xa0installation):"),Object(n.b)("p",null,"Example Tomcat configuration file (",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"#Launchparameters-webp3"}),"section 3")," in context parameters):"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"$CATALINA","_","BASE/conf/","\\","\\","[","enginename","\\","\\","]","/","\\","\\","[","hostname",Object(n.b)("br",{parentName:"strong"}),"]","/ROOT.xml")),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),'<?xml version=\'1.0\' encoding=\'utf-8\'?>\n<Context>\n    <Parameter name="host" value="localhost" override="false"/>\n    <Parameter name="port" value="7652" override="false"/>\n</Context>\n')),Object(n.b)("p",null,"In addition to the launch parameters, the platform also has ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Working_parameters"}),"system parameters")," which are set a little differently and are relevant mainly for processes of various components of the platform (that is, processes that occur after they are launched)."))}u.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),l=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(r),m=a,f=s["".concat(o,".").concat(m)]||s[m]||b[m]||c;return r?n.a.createElement(f,i(i({ref:t},u),{},{components:r})):n.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<c;u++)o[u]=r[u];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);