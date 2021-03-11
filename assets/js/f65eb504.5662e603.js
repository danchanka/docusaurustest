(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{409:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return o})),s.d(t,"metadata",(function(){return i})),s.d(t,"toc",(function(){return l})),s.d(t,"default",(function(){return p}));var a=s(3),r=s(7),n=(s(0),s(423)),o={title:"Projects"},i={unversionedId:"Projects",id:"Projects",isDocsHomePage:!1,title:"Projects",description:"Project is a collection of modules\xa0and additional information (pictures, report design files, etc.) that fully describe the functionality of the information system being created.",source:"@site/docs/Projects.md",slug:"/Projects",permalink:"/docusaurustest/docs/Projects",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Projects.md",version:"current",sidebar:"docs",previous:{title:"Modules",permalink:"/docusaurustest/docs/Modules"},next:{title:"Extensions",permalink:"/docusaurustest/docs/Extensions"}},l=[{value:"Language",id:"language",children:[]}],c={toc:l};function p(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Project")," is a collection of ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Modules"},"modules"),"\xa0and additional information (pictures, report design files, etc.) that fully describe the functionality of the information system being created."),Object(n.b)("p",null,'Projects, like modules, can depend on each other. A project graph should "include" a module graph. That is, if module ',Object(n.b)("strong",{parentName:"p"},"A")," ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Modules#dependencies-between-modules"},"depends")," on module ",Object(n.b)("strong",{parentName:"p"},"B"),", then module ",Object(n.b)("strong",{parentName:"p"},"A")," project should depend on module ",Object(n.b)("strong",{parentName:"p"},"B")," project."),Object(n.b)("p",null,"Also, as a rule, assembly automation and versioning are supported for projects (for example, assembling a single executable file with all dependencies)."),Object(n.b)("h3",{id:"language"},"Language"),Object(n.b)("p",null,"From a technical standpoint, a project is nothing more than a set of files, so project support is not directly a part of the platform. It is assumed that external tools are used for this, from simple built-in IDEs to complex multi-purpose frameworks (such as ",Object(n.b)("a",{parentName:"p",href:"https://maven.apache.org/"},"Maven"),")."),Object(n.b)("p",null,"By default, at startup the platform searches for all files with the LSF extension in the\xa0",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Launch_parameters#classpath-broken"},"classpath"),"\xa0of the application server being started, and considers them loaded modules. Modules are loaded in the order of their\xa0",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/docs/Modules#dependencies-between-modules"},"dependencies"),", so if ",Object(n.b)("strong",{parentName:"p"},"A")," depends on\xa0",Object(n.b)("strong",{parentName:"p"},"B")," and ",Object(n.b)("strong",{parentName:"p"},"C"),", then by default ",Object(n.b)("strong",{parentName:"p"},"B")," is initialized first, then ",Object(n.b)("strong",{parentName:"p"},"C"),", and only then ",Object(n.b)("strong",{parentName:"p"},"A"),"."),Object(n.b)("p",null,"The above behavior can however be changed using the appropriate lsFusion application server startup parameters:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/docusaurustest/docs/Launch_parameters#project-broken"},"logics.includePaths, logics.excludePaths")," - the paths (relative to the classpath) in which the platform will look for LSF files. When specifying these parameters\xa0you can use paths to specific files (for example, A/B/C.lsf) as well as path templates (for example, A/","*"," - all LSF files in folder A and all its subfolders). In addition, in these parameters you can specify several paths/path patterns at once, separated by semicolons - for example, A.lsf; dirB/","*",". The name of a JAR file in the path is ignored (that is, a file in b.jar/C/x.lsf is considered to have the path C/x.lsf). By default, includePaths is equal to ","*"," (that is, all files), and excludedPaths is empty."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/docusaurustest/docs/Launch_parameters#project-broken"},"logics.topModule")," - the name of the top module. If this parameter is specified (not empty), not all LSF files will be loaded, but only the specified module and all its ",Object(n.b)("a",{parentName:"li",href:"/docusaurustest/docs/Modules#dependencies-between-modules"},"dependencies"),". By default, this parameter is considered not specified (empty)."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/docusaurustest/docs/Launch_parameters#project-broken"},"logics.orderDependencies")," - redefinition of the order of dependencies (set as module names separated by commas). Thus, if ",Object(n.b)("strong",{parentName:"li"},"A")," depends on ",Object(n.b)("strong",{parentName:"li"},"B")," and ",Object(n.b)("strong",{parentName:"li"},"C"),", and this parameter contains ",Object(n.b)("strong",{parentName:"li"},"B")," and ",Object(n.b)("strong",{parentName:"li"},"C"),", with ",Object(n.b)("strong",{parentName:"li"},"C")," placed before ",Object(n.b)("strong",{parentName:"li"},"B"),", then ",Object(n.b)("strong",{parentName:"li"},"C")," will be initialized before ",Object(n.b)("strong",{parentName:"li"},"B"),". By default, this parameter is considered not specified (empty); that is, the REQUIRE order is used in the LSF files themselves.")),Object(n.b)("p",null,"Regardless of the parameters described above, the platform always automatically loads the following system modules: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/System.lsf"},Object(n.b)("strong",{parentName:"a"},"System")),", ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Service.lsf"},"Service")),",\xa0",Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Reflection.lsf"},"Reflection")),",\xa0",Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Authentication.lsf"},"Authentication")),",\xa0",Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Security.lsf"},"Security")),",\xa0",Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/SystemEvents.lsf"},"SystemEvents")),",\xa0",Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Scheduler.lsf"},"Scheduler")),",\xa0",Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Email.lsf"},"Email")),",\xa0",Object(n.b)("a",{parentName:"p",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Time.lsf"},Object(n.b)("strong",{parentName:"a"},"Time"),","),"\xa0and ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",{parentName:"strong",href:"https://github.com/lsfusion/platform/blob/master/server/src/main/lsfusion/system/Utils.lsf"},"Utils")),"."))}p.isMDXComponent=!0}}]);