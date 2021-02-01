(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{305:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),c=(r(0),r(424)),o={title:"Launch parameters"},i={unversionedId:"LSFUS/Launch_parameters",id:"LSFUS/Launch_parameters",isDocsHomePage:!1,title:"Launch parameters",description:"-   Application server (Server)",source:"@site/docs\\LSFUS\\Launch_parameters.md",slug:"/LSFUS/Launch_parameters",permalink:"/docusaurustest/docs/LSFUS/Launch_parameters",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/Launch_parameters.md",version:"current",sidebar:"docs",previous:{title:"System parameters",permalink:"/docusaurustest/docs/LSFUS/System_parameters"},next:{title:"Launch events",permalink:"/docusaurustest/docs/LSFUS/Launch_events"}},p=[{value:"Application server (Server)",id:"application-server-server",children:[]}],s={toc:p};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Application server (Server)",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#Launchparameters-appjava"}),"Java")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#Launchparameters-applsfusion"}),"lsFusion")))),Object(c.b)("li",{parentName:"ul"},"Web server (Client)",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#Launchparameters-webjava"}),"Java")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#Launchparameters-weblsfusion"}),"lsFusion"))))),Object(c.b)("h3",{id:"application-server-server"},"Application server (Server)"),Object(c.b)("h4",{id:"java"},"Java"),Object(c.b)("p",null,"Java application server startup parameters are set in the launch command (for example, for\xa0",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"57738083.html#Execution(manual)-command"}),"manual"),"\xa0or\xa0",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"57738078.html#Execution(auto)-settings"}),"automatic"),"\xa0installation):"),Object(c.b)("p",null,"Example Tomcat configuration file (",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"#Launchparameters-webp3"}),"section 3")," in context parameters):"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"$CATALINA","_","BASE/conf/","\\","\\","[","enginename","\\","\\","]","/","\\","\\","[","hostname",Object(c.b)("br",{parentName:"strong"}),"]","/ROOT.xml")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'<?xml version=\'1.0\' encoding=\'utf-8\'?>\n<Context>\n    <Parameter name="host" value="localhost" override="false"/>\n    <Parameter name="port" value="7652" override="false"/>\n</Context>\n')),Object(c.b)("p",null,"In addition to the launch parameters, the platform also has ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Working_parameters"}),"system parameters")," which are set a little differently and are relevant mainly for processes of various components of the platform (that is, processes that occur after they are launched)."))}u.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(r),b=a,f=l["".concat(o,".").concat(b)]||l[b]||m[b]||c;return r?n.a.createElement(f,i(i({ref:t},s),{},{components:r})):n.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);