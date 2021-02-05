(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{123:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),o=(a(0),a(419)),i={title:"Launch parameters"},s={unversionedId:"Launch_parameters",id:"Launch_parameters",isDocsHomePage:!1,title:"Launch parameters",description:"-   Application server (Server)",source:"@site/docs\\Launch_parameters.md",slug:"/Launch_parameters",permalink:"/docusaurustest/docs/Launch_parameters",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Launch_parameters.md",version:"current",sidebar:"docs",previous:{title:"System parameters",permalink:"/docusaurustest/docs/System_parameters"},next:{title:"Launch events",permalink:"/docusaurustest/docs/Launch_events"}},c=[{value:"Application server (Server)",id:"application-server-server",children:[]},{value:"$FUSION_DIR$/conf/settings.properties",id:"fusion_dirconfsettingsproperties",children:[]},{value:"Web server (Client)",id:"web-server-client",children:[]}],l={toc:c};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Application server (Server)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#Launchparameters-appjava"}),"Java")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#Launchparameters-applsfusion"}),"lsFusion")))),Object(o.b)("li",{parentName:"ul"},"Web server (Client)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#Launchparameters-webjava"}),"Java")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#Launchparameters-weblsfusion"}),"lsFusion"))))),Object(o.b)("h3",{id:"application-server-server"},"Application server (Server)"),Object(o.b)("h4",{id:"java"},"Java"),Object(o.b)("p",null,"Java application server startup parameters are set in the launch command (for example, for\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Execution_manual#Execution(manual)-command"}),"manual"),"\xa0or\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Execution_auto#Execution(auto)-settings"}),"automatic"),"\xa0installation):"),Object(o.b)("h4",{id:"lsfusion"},"lsFusion"),Object(o.b)("p",null,"lsFusion startup parameters for server\xa0applications can be set in one of the following ways (in the order of their priorities, lower priority at the bottom):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In the resources in the lsfusion.xml file in the places where these parameters are used, after: (relevant for platform forks)"),Object(o.b)("li",{parentName:"ul"},"In lsfusion.properties (usually part of a project, which means it acts by default for all installations)"),Object(o.b)("li",{parentName:"ul"},"In conf/settings.properties (for specific installations)"),Object(o.b)("li",{parentName:"ul"},"In the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#Launchparameters-appjava"}),"Java startup options")," (starting with D, e.g. -Dlogics.topModule=FFF)")),Object(o.b)("p",null,"Example conf/settings.properties file (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#Launchparameters-appp3"}),"section 3"),"):"),Object(o.b)("h3",{id:"fusion_dirconfsettingsproperties"},"$FUSION","_","DIR$/conf/settings.properties"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"db.server=localhost\ndb.name=lsfusion\ndb.user=postgres\ndb.password=pswrd\n\nrmi.port=7652\n")),Object(o.b)("p",null,"By default, it is assumed that the startup parameter files conf/settings.properties and lsfusion.properties are located in the application server's startup folder. However, with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Execution_auto"}),"automatic installation")," under GNU Linux symlinks for these files (as well as for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Journals_and_logs#Journalsandlogs-logs"}),"log")," folders)\xa0 are automatically created to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Execution_auto#Execution(auto)-settings"}),"other files")," whose layout is better aligned with Linux ideology."),Object(o.b)("h3",{id:"web-server-client"},"Web server (Client)"),Object(o.b)("h4",{id:"java-1"},"Java"),Object(o.b)("p",null,"Java web server startup parameters are set in the Tomcat launch command, which, in turn, launches this web server (for example, for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Execution_auto#Execution(auto)-webapp"}),"automatic")," installation).\xa0"),Object(o.b)("h4",{id:"lsfusion-1"},"lsFusion"),Object(o.b)("p",null,"lsFusion startup parameters for the web server can be set in one of the following ways (in the order of their priorities, lower priority at the bottom):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In web applications' ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://tomcat.apache.org/tomcat-7.0-doc/config/context.html#Defining_a_context"}),"context")," parameters:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"in a web application in the file /WEB-INF/web.xml, the context-param tag (relevant for platform forks)"),Object(o.b)("li",{parentName:"ul"},"in a web application in the file /META-INF/context.xml, Context tag, Parameter\xa0tag (relevant for platform forks)"),Object(o.b)("li",{parentName:"ul"},"in Tomcat, in the file $CATALINA","_","BASE/conf/","[","enginename","]","/","[","hostname","]","/","[","contextpath","]",".xml,\xa0tag Context, tag Parameter, where:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"$CATALINA","_","BASE$ is the folder where Tomcat is installed (for example, with",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docusaurustest/docs/Execution_auto#Execution(auto)-settings"}),"automatic")," installation, this folder is $INSTALL","_","DIR/Client)"),Object(o.b)("li",{parentName:"ul"},"[","contextpath","]"," - contextual path of the web application (for example, with ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docusaurustest/docs/Execution_auto#Execution(auto)-settings"}),"automatic"),"\xa0installation this name is empty by default, which in Tomcat is equivalent to the name ROOT; with ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docusaurustest/docs/Execution_manual#Execution(manual)-tomcat"}),"manual")," installation it\xa0depends on the name of the war file),\xa0"),Object(o.b)("li",{parentName:"ul"},"[","enginename","]"," and\xa0","[","hostname","]"," are the names of the tomcat implementation mechanism and the web server computer (for example, with ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docusaurustest/docs/Execution_auto#Execution(auto)-settings"}),"automatic"),"\xa0installation these names are catalina and localhost respectively)"))),Object(o.b)("li",{parentName:"ul"},"in Tomcat, in the file\xa0$CATALINA","_","BASE/conf/server.xml, Context tag, Parameter tag (not recommended)"))),Object(o.b)("li",{parentName:"ul"},"In URL parameters (e.g. ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://tryonline.lsfusion.org?host=3.3.3.3&port=4444"}),"http://tryonline.lsfusion.org?host=3.3.3.3&port = 4444"),")")),Object(o.b)("p",null,"Example Tomcat configuration file (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#Launchparameters-webp3"}),"section 3")," in context parameters):"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"$CATALINA","_","BASE/conf/","\\","\\","[","enginename","\\","\\","]","/","\\","\\","[","hostname",Object(o.b)("br",{parentName:"strong"}),"]","/ROOT.xml")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'<?xml version=\'1.0\' encoding=\'utf-8\'?>\n<Context>\n    <Parameter name="host" value="localhost" override="false"/>\n    <Parameter name="port" value="7652" override="false"/>\n</Context>\n')),Object(o.b)("p",null,"In addition to the launch parameters, the platform also has ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Working_parameters"}),"system parameters")," which are set a little differently and are relevant mainly for processes of various components of the platform (that is, processes that occur after they are launched)."))}u.isMDXComponent=!0},419:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return f}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,f=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return a?n.a.createElement(f,s(s({ref:t},l),{},{components:a})):n.a.createElement(f,s({ref:t},l))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);