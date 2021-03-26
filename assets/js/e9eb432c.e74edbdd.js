(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{696:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(7),s=(a(0),a(750)),r={title:"IDE"},c={unversionedId:"IDE",id:"version-1.0.0/IDE",isDocsHomePage:!1,title:"IDE",description:"Table of contents",source:"@site/versioned_docs/version-1.0.0/IDE.md",slug:"/IDE",permalink:"/docusaurustest/docs/IDE",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/IDE.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Coding conventions",permalink:"/docusaurustest/docs/Coding_conventions"},next:{title:"Examples: Overview",permalink:"/docusaurustest/docs/Examples"}},o=[{value:"Table of contents",id:"table-of-contents",children:[]},{value:"Creating a new lsFusion project",id:"newproject",children:[]},{value:"Developing an application",id:"dev",children:[]},{value:"Starting up a server",id:"run",children:[]},{value:"Creating a server startup configuration",id:"configuration",children:[]},{value:"Building an application (with embedded server)",id:"build",children:[]}],l={toc:o};function b(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"table-of-contents"},"Table of contents"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",{parentName:"p",href:"#newproject"},"Creating a new lsFusion project"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",{parentName:"p",href:"#dev"},"Developing an application"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",{parentName:"p",href:"#run"},"Starting up a server"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",{parentName:"p",href:"#configuration"},"Creating a server startup configuration"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",{parentName:"p",href:"#build"},"Building an application (with embedded server)")))),Object(s.b)("h3",{id:"newproject"},"Creating a new lsFusion project"),Object(s.b)("p",null,"Launch ",Object(s.b)("strong",{parentName:"p"},"IDEA")," and select ",Object(s.b)("em",{parentName:"p"},"Create New Project"),",\xa0or when ",Object(s.b)("strong",{parentName:"p"},"IDEA")," is already opened, select ",Object(s.b)("em",{parentName:"p"},"File")," -> ",Object(s.b)("em",{parentName:"p"},"New")," -> ",Object(s.b)("em",{parentName:"p"},"Project")," from the menu."),Object(s.b)("p",null,Object(s.b)("img",{src:a(928).default}),Object(s.b)("img",{src:a(929).default})),Object(s.b)("p",null,"Select project type ",Object(s.b)("strong",{parentName:"p"},"lsFusion"),".\xa0Make sure that the JDK is set and the link to the library with the \xa0",Object(s.b)("strong",{parentName:"p"},"lsFusion")," is selected (when ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Development_auto_"},"automatic installation")," is used, this link is set automatically; otherwise, click ",Object(s.b)("em",{parentName:"p"},"Download")," or select the previously downloaded library ",Object(s.b)("em",{parentName:"p"},"Create"),") and then*",Object(s.b)("em",{parentName:"p"},"\xa0**click\xa0"),"Next*."),Object(s.b)("p",null,Object(s.b)("img",{src:a(930).default})),Object(s.b)("p",null,"Fill in the name of the project and the directory where the source files will be stored. Adjust the connection parameters for the database and application server when necessary. Click ",Object(s.b)("em",{parentName:"p"},"Finish"),"."),Object(s.b)("p",null,Object(s.b)("img",{src:a(931).default})),Object(s.b)("h3",{id:"dev"},"Developing an application"),Object(s.b)("p",null,"All the source code written in ",Object(s.b)("strong",{parentName:"p"},"lsFusion")," is stored by default in src/main/lsfusion."),Object(s.b)("p",null,"To add a new ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Modules"},"module"),", right-click the corresponding folder and select ",Object(s.b)("em",{parentName:"p"},"New\xa0"),"/ ",Object(s.b)("em",{parentName:"p"},"lsFusion")," from the menu:"),Object(s.b)("p",null,Object(s.b)("img",{src:a(932).default})),Object(s.b)("p",null,"You can also create subfolders (by choosing\xa0",Object(s.b)("em",{parentName:"p"},"Package"),") to group similar modules into a directory."),Object(s.b)("h3",{id:"run"},"Starting up a server"),Object(s.b)("p",null,"When you create a new project, a server startup configuration is also created by default. You can run it by selecting \"Run -> Run 'Run lsFusion server,'\" or by clicking on the symbol\xa0",Object(s.b)("img",{src:a(933).default}),"\xa0next to the caption ",Object(s.b)("em",{parentName:"p"},"Run lsFusion server")," in the upper right corner. If startup is successful, the last line in the log should be ",Object(s.b)("em",{parentName:"p"},"Server has successfully started"),"."),Object(s.b)("p",null,Object(s.b)("img",{src:a(934).default})),Object(s.b)("p",null,Object(s.b)("img",{src:a(935).default})),Object(s.b)("p",null,"After the server has been successfully started, you can connect to it over a web-based or desktop client via a shortcut on your desktop."),Object(s.b)("h3",{id:"configuration"},"Creating a server startup configuration"),Object(s.b)("p",null,"If the platform is embedded to an existing project (for example, ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Development_manual_#maven"},"via Maven")," for a Maven project), you may need to manually\xa0create\xa0a server startup configuration for the applications. This is done as follows:"),Object(s.b)("p",null,"In the menu, select ",Object(s.b)("em",{parentName:"p"},"Edit configurations"),":"),Object(s.b)("p",null,Object(s.b)("img",{src:a(936).default})),Object(s.b)("p",null,"In the window that opens, click + in the upper left corner and select ",Object(s.b)("em",{parentName:"p"},"lsFusion Server")," from the drop-down list"),Object(s.b)("p",null,Object(s.b)("img",{src:a(937).default})),Object(s.b)("p",null,"Set the configuration name and the module (if there are several)\xa0for which you need to start the lsFusion application server. In the same window, if necessary, you can specify the build process to be followed at configuration startup, additional parameters for the Java virtual machine, etc."),Object(s.b)("p",null,Object(s.b)("img",{src:a(938).default})),Object(s.b)("h3",{id:"build"},"Building an application (with embedded server)"),Object(s.b)("p",null,"To compile a single JAR file that contains both the developed code and the application server itself, you can use the following ",Object(s.b)("a",{parentName:"p",href:"https://blog.jetbrains.com/idea/2010/08/quickly-create-jar-artifact/"},"guide"),". The result JAR file (",Object(s.b)("em",{parentName:"p"},"artifact"),") can be used to install applications on a production server as described in the section ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Execution_manual_#appservice"},"installing an applications server as a service"),". Note that since\xa0all modules and the server itself will be inside the same JAR file, the installation process is slightly different:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"in the first section\xa0instead of the server JAR file\xa0this file must be downloaded"),Object(s.b)("li",{parentName:"ul"},"the third section (copying application files to the server) can be skipped")))}b.isMDXComponent=!0},928:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/65241572-4a4a765ac64129f10a365ad7d971e4d9.png"},929:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/65241575-213520422c6d0b41d9a366fb514ed100.png"},930:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/65241577-0fd21524f5cbcc20e6c3e8d89112a5ec.png"},931:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/65241579-07003f2b6fedfb885d369a1fbfd9efd6.png"},932:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/65241581-f96b6a90d6837c31f9ab841fd7512070.png"},933:function(e,t,a){"use strict";a.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAWCAYAAAAinad/AAABkElEQVQ4Ee2UO0gDQRCG/9t75eFdxIhFilgYRII2tjZWCoKNgpUoSMDGFIpFqoCFjZWNjYWdjWAhpBMEiVYKIqJiE9TG+CgUTBC9nZWLEjizeQhpBAcGdnZ2vv13dlkln88LNMlYkzglzB+DjexMYuV4Da/vhV91QXrMQCiEo8Il5g7SOH08bxgohWk+Ez7bQtHkSJ+sYv1sEx/k1IVKYVwIQFWhB/wwbRuZ+yyS+2nkXm5rAuUwIjjEQQrATB2mHcSd8ozk4RK2rjIgQVJoFRgHpy93CxWVQQ/6oVl+bOS2sZhdxkPxqQIohTmcw+NEcLUww4BhteDi7QYzeynsXmc9QM0TfQdEVFImyymaq9IHw2AAUzxLpDCHHLBqtycE+qwYFrqn0OEL14eR2y9e+RQ0oWI6Oorx6DCY4lXlUqXKiBy4XjYBdAYiSPUk0GVFy9M/B3Vh7v5jkSEkYhPQmXR5mSnNus+BBEe71opUfBb94d5yQa2BFCa4g8G2AczHE7D0YK16T075/2k9/Wgk+ASZRpR4pMZctgAAAABJRU5ErkJggg=="},934:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/65241582-2ce951636d580b6f84da92d0566d0f57.png"},935:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/65241583-328e1c6d1b0fa845c094f426403b1d9b.png"},936:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/57737363-6d4c9f2696d22cee17e04a988f440f32.png"},937:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/57737364-7899f167483b4e142fb7af0824724254.png"},938:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/57737376-16c8bb42e6a15191a116d9d00c625c46.png"}}]);