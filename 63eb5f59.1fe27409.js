(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{216:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(419)),o={title:"Development (manual)"},s={unversionedId:"Development_manual",id:"Development_manual",isDocsHomePage:!1,title:"Development (manual)",description:"To install the application server, IDE, and client, Java version 8 or later must first be installed on the computer.",source:"@site/docs\\Development_manual.md",slug:"/Development_manual",permalink:"/docusaurustest/docs/Development_manual",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Development_manual.md",version:"current",sidebar:"docs",previous:{title:"Manual installation",permalink:"/docusaurustest/docs/Manual_installation"},next:{title:"Execution (manual)",permalink:"/docusaurustest/docs/Execution_manual"}},l=[{value:"Installation in existing Java projects",id:"installation-in-existing-java-projects",children:[]}],c={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To install the application server, IDE, and client, Java version 8 or later must first be installed on the computer."),Object(i.b)("p",null,"For the application server to work, it must have access to the PostgreSQL database management server of at least version 9.2. The PostgreSQL server must accept connections using password authentication by the md5 or trust method. You can configure authorization by editing the pg","_","hba.conf file, as described in the\xa0PostgreSQL ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.postgresql.org/docs/9.2/static/auth-pg-hba-conf.html"}),"documentation"),"."),Object(i.b)("h4",{id:"installing-the-ide-plugin"},"Installing the IDE Plugin"),Object(i.b)("p",null,"To install the plug-in, Intellij IDEA version 2017.1.6 or higher must be installed on the computer."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In the IDEA settings (File >\xa0Settings), select Plugins > Browse repositories, find the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://plugins.jetbrains.com/plugin/7601-lsfusion"}),"lsFusion plugin"),", click Install, and restart IDEA.")),Object(i.b)("h4",{id:"installing-an-application-server-via-ide"},"Installing an application server via IDE"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"When\xa0",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/IDE#IDE-newproject"}),"creating a new lsFusion project"),"\xa0click the Download button\xa0opposed to the lsFusion library: IDEA automatically downloads the JAR file of the latest (non-beta) version of the lsFusion server from the\xa0",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://download.lsfusion.org/java"}),"central server"),"\xa0and installs this file as a dependency of this project (or rather, as its only module: File \u2192 Project Structure \u2192\xa0Modules \u2192 project name \u2192 Dependencies tab). Also, if necessary, you can download another version of the server (different from the latest) or select a previously downloaded server JAR file on the local disk.\xa0\xa0"),Object(i.b)("p",{parentName:"li"},"Note that IDEA remembers the downloaded/specified application server file in its settings and automatically sets it when creating other lsFusion projects.\xa0"))),Object(i.b)("h4",{id:"installing-a-desktop-client"},"Installing a desktop client"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"After the server starts, in the start log one of the last lines will be a line with a link to the JNLP file (for example,\xa0",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://download.lsfusion.org/2.0/lsfusion-client-2.0.jnlp"}),"https://download.lsfusion.org/2.0/lsfusion-client-2.0.jnlp"),"), which when run will automatically install the client using Java Web Start technology.")),Object(i.b)("h2",{id:"installation-in-existing-java-projects"},"Installation in existing Java projects"),Object(i.b)("h4",{id:"installing-an-application-server-via-ide-1"},"Installing an application server via IDE"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Download the lsfusion-server-<version",">",".jar file of the required version (for example, lsfusion-server-2.0.jar) from the\xa0",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://download.lsfusion.org/java"}),"central server"),"\xa0to the folder of the required project module (we will call this folder\xa0",Object(i.b)("em",{parentName:"li"},"$FUSION","_","DIR$"),")."),Object(i.b)("li",{parentName:"ul"},"If the database server is located on another computer, and if authorization is enabled on the database server (for example, for Postgres, using the md5 method and if the postgres password is not empty), set the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/Launch_parameters#Launchparameters-connectdb"}),"database server connection parameters")," (e.g., by creating a startup ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/Launch_parameters#Launchparameters-filesettings"}),"settings file")," in the\xa0project folder)"),Object(i.b)("li",{parentName:"ul"},"Add the downloaded file as a dependency of the required project module (File \u2192 Project Structure \u2192\xa0Modules \u2192 module name \u2192 Dependencies tab \u2192 +)\xa0"),Object(i.b)("li",{parentName:"ul"},"Create a\xa0",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/IDE#IDE-configuration"}),"startup configuration"),"\xa0(when creating a new lsFusion project, this and the upper two sections are done automatically).\xa0If the platform is loaded as a library, instead of creating a configuration you can use a Spring bean with the logicsInstance ID from the lsfusion.xml configuration file, and its start() and stop() methods, responsible for starting and stopping the application server, respectively.")),Object(i.b)("p",null,"\xa0For an existing maven project, server installation and loading can (and should) be done differently (see below).\xa0"),Object(i.b)("h4",{id:"installing-the-application-server-via-maven-only-for-maven-projects"},"Installing the application server via Maven (only for Maven projects)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Register in pom.xml or as parent lsfusion.platform.build:logics, or as dependency lsfusion.platform:server (at present these artifacts are not in the central repository, and so the path to the lsFusion repository must be specified additionally). For example:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"<repositories>\n    <repository>\n        <id>lsfusion</id>\n        <name>lsFusion Public Repository</name>\n        <url>http://repo.lsfusion.org</url>\n    </repository>\n</repositories>\n\n<parent>\n    <groupId>lsfusion.platform.build</groupId>\n    <artifactId>logics</artifactId>\n    <version>2.0</version>\n</parent>\n")),Object(i.b)("p",{parentName:"li"},"The first option (with parent) is good in that:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Maven will automatically configure an uber-jar assembly (i.e., a single file containing all the project files). You can start this assembly using maven profile "assemble" - when this profile is activated, a JAR file with an "assembly" postfix is additionally generated in the package phase, containing not only the project files, but also the files of all the project dependencies, including files of the application server itself. However, in cases where the application server is installed separately from the application itself (for example, using ',Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Execution_auto"}),"automatic installation"),'), including the application server in the resulting uber-jar is undesirable. Therefore, in addition to "assemble," the platform also supports the "noserver" maven profile, which when activated (along with "assemble"), at creation of a JAR file with the "assembly" postfix the application server files will not be included (example command: mvn package assemble noserver).')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Maven and IDE will automatically determine the source and resources directories (for example, src/main/lsfusion is the default)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Maven will automatically configure weaving of the application server aspects. However, this is only rarely necessary - if the project has application RMI servers (that is, objects inheriting lsfusion.interop.server.RmiServerInterface, which are accessed remotely via RMI), or various system annotations of the application server are used (for example, lsfusion.server. base.caches.IdentityLazy for caching execution results)."))),Object(i.b)("p",{parentName:"li"},"In the second case, all of the above must be manually configured directly by the developer."),Object(i.b)("p",{parentName:"li"},"As for other projects not created using the operation for creating a new lsFusion project, for a maven project you must manually create a\xa0",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Launch_parameters#Launchparameters-filesettings"}),"settings file"),"\xa0and\xa0a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/IDE#IDE-configuration"}),"startup configuration"),"\xa0(or, if the platform needs to be loaded as a library, use a\xa0",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#Development(manual)-bean"}),"special Spring bean"),")"))),Object(i.b)("p",null,"If working with a large project, and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Metaprogramming"}),"metacodes")," are actively being used in it (such as ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/lsfusion-solutions/erp"}),"ERP"),"), it is recommended that in the IDEA startup parameters (idea.exe.vmoptions or idea64.exe.vmoptions) the Xmx be increased to at least 2gb."))}p.isMDXComponent=!0},419:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return a?r.a.createElement(m,s(s({ref:t},c),{},{components:a})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);