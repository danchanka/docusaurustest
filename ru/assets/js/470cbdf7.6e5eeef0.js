(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var l=n(3),a=n(7),o=(n(0),n(423)),r={title:"Journals and logs"},s={unversionedId:"Journals_and_logs",id:"Journals_and_logs",isDocsHomePage:!1,title:"Journals and logs",description:"Logs {logs}",source:"@site/docs/Journals_and_logs.md",slug:"/Journals_and_logs",permalink:"/docusaurustest/ru/docs/Journals_and_logs",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Journals_and_logs.md",version:"current",sidebar:"docs",previous:{title:"Scheduler",permalink:"/docusaurustest/ru/docs/Scheduler"},next:{title:"Profiler",permalink:"/docusaurustest/ru/docs/Profiler"}},i=[{value:"Logs",id:"logs",children:[]},{value:"Logs",id:"logs",children:[]}],c={toc:i};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(l.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"logs"},"Logs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Error log (fig. 1).")),Object(o.b)("p",null,"This log contains all errors that occurred during the operation. Errors are divided into the following classes (the \xabObject class\xbb column):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"errors that occurred on the server \u2013\u2013 errors are displayed on a white background and are included in class \xabException on server\xbb;"),Object(o.b)("li",{parentName:"ul"},"errors that occurred on the server and were received by the client application \u2013\u2013 errors are displayed on a pink background and are included in class \xabException on server (from client)\xbb;"),Object(o.b)("li",{parentName:"ul"},"errors that occurred in the client application \u2013 errors are displayed on a yellow background and fall into two classes: \xabException on client\xbb and \xabException on web client\xbb;"),Object(o.b)("li",{parentName:"ul"},"connection errors \u2013 errors are displayed on a blue background and are divided into two classes:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\xabTemporary connection loss\xbb - connection with the server was interrupted, but was then restored;"),Object(o.b)("li",{parentName:"ul"},"\xabPermanent connection loss\xbb - connection with the server was interrupted and could not be restored;")))),Object(o.b)("p",null,Object(o.b)("img",{src:n(491).default})),Object(o.b)("p",null,"\xa0Fig. 1 Error log."),Object(o.b)("p",null,"The \xabException trace\xbb section displays the java stack for the error; the \xabException LSF trace\xbb displays the lsfusion stack.\xa0"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Connection Log (fig. 2).")),Object(o.b)("p",null,Object(o.b)("img",{src:n(492).default}),"**\xa0**"),Object(o.b)("p",null,"Fig. 2 Connection Log."),Object(o.b)("p",null,"The log stores information about users who connected to the system, from which computer, the characteristics of that computer, as well as information about the date and time of connection / disconnection. On the form, you can display the users currently working with the database: \xabActive connections\xbb."),Object(o.b)("p",null,"The \xabForm\xbb section shows which forms the user entered and how many times. The \xabSession\xbb section lets you trace when changes were applied, for some forms."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The startup log stores information about the dates and times when the application server was started (restarted). You can also see the name of the computer on which the server is installed and the version of the application (if filled in during the build).")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The change log contains more detailed information about the changes which were reflected in the \xabSession\xbb section of the connection log (fig. 3.).")),Object(o.b)("p",null,Object(o.b)("img",{src:n(493).default})),Object(o.b)("p",null,"Fig. 3 Change log."),Object(o.b)("p",null,"The \xabChange\xbb column displays a list of Properties (columns) where the values changed, as well as the number of changes (rows). Only changes in the current form are logged: dependent Properties that change simultaneously on other tables do not feature on this list."),Object(o.b)("p",null,"The form lets you filter the changes made by users (excluding system changes) by checking \xabOnly user changes\xbb."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The client application log contains information about the quality of the connection while working with the application server for a given period of time (fig. 4.).")),Object(o.b)("p",null,Object(o.b)("img",{src:n(494).default})),Object(o.b)("p",null,"Fig. 4 Client application log."),Object(o.b)("p",null,"As well as system memory indicators, you can analyze the average response time (ping) in milliseconds and the memory available to and used by the java application on client computers in the upper part of the form. The period to be analyzed is set by entering \xabDate from\xbb and \xabDate to\xbb in the \xabDate and time\xbb section. In addition to dates, you can also set a threshold value here for the same indicators (ping and memory)\u2013this allows you to get the total time (in seconds) when the client PC has exceeded the threshold values."),Object(o.b)("p",null,"The \xabData\xbb tab at the bottom provides a chronology of changes in response time and in memory available and used. This information is displayed for the Desktop client only."),Object(o.b)("p",null,"How much information should be stored in these logs is indicated in the Admin form ","\\","\\"," Settings ","\\","\\"," Logging tab (fig. 5.)."),Object(o.b)("p",null,Object(o.b)("img",{src:n(495).default})),Object(o.b)("p",null,"Fig. 5 Setting the number of days for logging."),Object(o.b)("p",null,"If you need to track changes to the individual values of any\xa0 Properties (columns), a mechanism for user logging has been developed to allow you to do it. For example, let's say you need to record changes to an employee's last name in the Employees directory. To do this:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"go to any entry in the \xabSurname\xbb column and right-click to bring up the \xabConfigure property policy\xbb menu (fig. 6.);")),Object(o.b)("p",null,Object(o.b)("img",{src:n(496).default})),Object(o.b)("p",null,"Fig. 6 Select a property to log changes."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"in the \xabSecurity policy\xbb form, check \xabLogged by user\xbb and click \xabOK\xbb (fig. 7.);")),Object(o.b)("p",null,Object(o.b)("img",{src:n(497).default})),Object(o.b)("p",null,"Fig. 7 Setting user logging."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"once you restart the application server, right-clicking on the \xabSurname\xbb property will bring up an additional \xabShow Change History\xbb menu item. If the surname for the current record has been changed by someone, then this will be reflected in the property change history (fig. 8).")),Object(o.b)("h3",{id:""},Object(o.b)("img",{src:n(498).default})),Object(o.b)("p",null,"Fig. 8. Property change history."),Object(o.b)("p",null,"The retention time for these logs is set to the same retention time as for the Change Log."),Object(o.b)("h3",{id:"logs"},"Logs"),Object(o.b)("p",null,"The following set of logs is supported for each platform component in the platform:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Component"),Object(o.b)("th",{parentName:"tr",align:null},"Folder"),Object(o.b)("th",{parentName:"tr",align:null},"Logs"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Application server (Server)"),Object(o.b)("td",{parentName:"tr",align:null},"$FUSION_DIR$/logs, where $FUSION_DIR$ is the application server startup folder"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("div",{class:"content-wrapper"},Object(o.b)("br",null),Object(o.b)("ul",null,Object(o.b)("br",null),Object(o.b)("li",null,"stdout - standard output log (output to the standard output stream, i.e. to the OS console, IDE, etc.). Includes start and explain logs."),Object(o.b)("br",null),Object(o.b)("li",null,"stderr - general error log"),Object(o.b)("br",null),Object(o.b)("li",null,"start - a log of the stop and start process"),Object(o.b)("br",null),Object(o.b)("li",null,"remote, invocation - logs of processes related to accessing the application server"),Object(o.b)("br",null),Object(o.b)("li",null,"sql, sqlhand, sqlconnection, sqlconflict, sqladjust - logs of processes related to accessing the database server"),Object(o.b)("br",null),Object(o.b)("li",null,"explain, explaincompile - logs where query plans are displayed (database server and application server, respectively)"),Object(o.b)("br",null),Object(o.b)("li",null,"lru - log of memory management processes (mainly LRU caches)"),Object(o.b)("br",null),Object(o.b)("li",null,"allocatedbytes - log of memory allocation processes"),Object(o.b)("br",null),Object(o.b)("li",null,"assert - a log of various checks on meeting specified conditions (or rather, non-meeting)"),Object(o.b)("br",null),Object(o.b)("li",null,"mail - mail log"),Object(o.b)("br",null),Object(o.b)("li",null,"jasperReports - JasperReports log"),Object(o.b)("br",null),Object(o.b)("li",null,"jdbc - jdbc driver log"),Object(o.b)("br",null),Object(o.b)("li",null,"exinfo - a log of additional information (not included in the above)"),Object(o.b)("br",null)),Object(o.b)("br",null)))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Web server (Client)"),Object(o.b)("td",{parentName:"tr",align:null},"$CATALINA_BASE$/logs,\xa0\xa0where\xa0$CATALINA_BASE$ is the folder where Tomcat is installed"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("ul",null,Object(o.b)("br",null),Object(o.b)("li",null,"catalina.out - general output log"),Object(o.b)("br",null),Object(o.b)("li",null,"gwtlog, gwtlog-err - GWT logs"),Object(o.b)("br",null),Object(o.b)("li",null,"invocation -\xa0logs of processes related to accessing the web server"),Object(o.b)("br",null)))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Desktop client"),Object(o.b)("td",{parentName:"tr",align:null},"$USER_DIR$/.fusion/logs,\xa0where $USER_DIR$ is the user folder"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("ul",null,Object(o.b)("br",null),Object(o.b)("li",null,"stdout - standard output log (output to the standard output stream, i.e. to the OS console, IDE, etc.)."),Object(o.b)("br",null),Object(o.b)("li",null,"stderr - general error log"),Object(o.b)("br",null),Object(o.b)("li",null,"remote, invocation - logs of processes related to accessing the application server"),Object(o.b)("br",null),Object(o.b)("li",null,"jasperReports - JasperReports log"),Object(o.b)("br",null)))))),Object(o.b)("p",null,"With ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Execution_auto"},"automatic installation")," under Linux, symlinks for these folders (as well as for the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Launch_parameters#applsfusion"},"lsFusion launch parameters"),") are automatically created to ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Execution_auto#logs-broken"},"other folders")," whose location is better aligned with Linux ideology."))}b.isMDXComponent=!0},491:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241132-a78ad45f17ae5241063f3bed45a573fc.png"},492:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241133-5696a142aee31ad27fa735a5fb071342.png"},493:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241134-77c906c0463d46fcfdeb0daa6c8f1b1d.png"},494:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241135-746459cb2512064a6afcf809a358f92d.png"},495:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241136-82a4ded811cb69cd37024f69d542a851.png"},496:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241138-4bbe3199b2d5daecd4f2f189ddac25b5.png"},497:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241139-757d6d4e309da6be74572557eea3aa48.png"},498:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/65241140-befbd6aed40287bfe38660bddbaa7ba9.png"}}]);