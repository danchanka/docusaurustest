(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{350:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(424)),i={title:"Journals and logs"},l={unversionedId:"LSFUS/Journals_and_logs",id:"LSFUS/Journals_and_logs",isDocsHomePage:!1,title:"Journals and logs",description:"Logs",source:"@site/docs\\LSFUS\\Journals_and_logs.md",slug:"/LSFUS/Journals_and_logs",permalink:"/docusaurustest/docs/LSFUS/Journals_and_logs",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/Journals_and_logs.md",version:"current",sidebar:"docs",previous:{title:"Scheduler",permalink:"/docusaurustest/docs/LSFUS/Scheduler"},next:{title:"Profiler",permalink:"/docusaurustest/docs/LSFUS/Profiler"}},c=[{value:"Logs",id:"logs",children:[]},{value:"Logs",id:"logs-1",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"logs"},"Logs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Error log (fig. 1).")),Object(a.b)("p",null,"This log contains all errors that occurred during the operation. Errors are divided into the following classes (the \xabObject class\xbb column):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"errors that occurred on the server \u2013\u2013 errors are displayed on a white background and are included in class \xabException on server\xbb;"),Object(a.b)("li",{parentName:"ul"},"errors that occurred on the server and were received by the client application \u2013\u2013 errors are displayed on a pink background and are included in class \xabException on server (from client)\xbb;"),Object(a.b)("li",{parentName:"ul"},"errors that occurred in the client application \u2013 errors are displayed on a yellow background and fall into two classes: \xabException on client\xbb and \xabException on web client\xbb;"),Object(a.b)("li",{parentName:"ul"},"connection errors \u2013 errors are displayed on a blue background and are divided into two classes:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\xabTemporary connection loss\xbb - connection with the server was interrupted, but was then restored;"),Object(a.b)("li",{parentName:"ul"},"\xabPermanent connection loss\xbb - connection with the server was interrupted and could not be restored;")))),Object(a.b)("img",{src:"attachments/60555482/65241132.png",height:"250"}),Object(a.b)("p",null,"\xa0Fig. 1 Error log."),Object(a.b)("p",null,"The \xabException trace\xbb section displays the java stack for the error; the \xabException LSF trace\xbb displays the lsfusion stack.\xa0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Connection Log (fig. 2).")),Object(a.b)("img",{src:"attachments/60555482/65241133.png",height:"250"}),"**\xa0**",Object(a.b)("p",null,"Fig. 2 Connection Log."),Object(a.b)("p",null,"The log stores information about users who connected to the system, from which computer, the characteristics of that computer, as well as information about the date and time of connection / disconnection. On the form, you can display the users currently working with the database: \xabActive connections\xbb."),Object(a.b)("p",null,"The \xabForm\xbb section shows which forms the user entered and how many times. The \xabSession\xbb section lets you trace when changes were applied, for some forms."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The startup log stores information about the dates and times when the application server was started (restarted). You can also see the name of the computer on which the server is installed and the version of the application (if filled in during the build).")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The change log contains more detailed information about the changes which were reflected in the \xabSession\xbb section of the connection log (fig. 3.).")),Object(a.b)("img",{src:"attachments/60555482/65241134.png",height:"249"}),Object(a.b)("p",null,"Fig. 3 Change log."),Object(a.b)("p",null,"The \xabChange\xbb column displays a list of Properties (columns) where the values changed, as well as the number of changes (rows). Only changes in the current form are logged: dependent Properties that change simultaneously on other tables do not feature on this list."),Object(a.b)("p",null,"The form lets you filter the changes made by users (excluding system changes) by checking \xabOnly user changes\xbb."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The client application log contains information about the quality of the connection while working with the application server for a given period of time (fig. 4.).")),Object(a.b)("img",{src:"attachments/60555482/65241135.png",height:"217"}),Object(a.b)("p",null,"Fig. 4 Client application log."),Object(a.b)("p",null,"As well as system memory indicators, you can analyze the average response time (ping) in milliseconds and the memory available to and used by the java application on client computers in the upper part of the form. The period to be analyzed is set by entering \xabDate from\xbb and \xabDate to\xbb in the \xabDate and time\xbb section. In addition to dates, you can also set a threshold value here for the same indicators (ping and memory)\u2013this allows you to get the total time (in seconds) when the client PC has exceeded the threshold values."),Object(a.b)("p",null,"The \xabData\xbb tab at the bottom provides a chronology of changes in response time and in memory available and used. This information is displayed for the Desktop client only."),Object(a.b)("p",null,"How much information should be stored in these logs is indicated in the Admin form ","\\","\\"," Settings ","\\","\\"," Logging tab (fig. 5.)."),Object(a.b)("img",{src:"attachments/60555482/65241136.png",height:"250"}),Object(a.b)("p",null,"Fig. 5 Setting the number of days for logging."),Object(a.b)("p",null,"If you need to track changes to the individual values of any\xa0 Properties (columns), a mechanism for user logging has been developed to allow you to do it. For example, let's say you need to record changes to an employee's last name in the Employees directory. To do this:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"go to any entry in the \xabSurname\xbb column and right-click to bring up the \xabConfigure property policy\xbb menu (fig. 6.);")),Object(a.b)("img",{src:"attachments/60555482/65241138.png",height:"148"}),Object(a.b)("p",null,"Fig. 6 Select a property to log changes."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"in the \xabSecurity policy\xbb form, check \xabLogged by user\xbb and click \xabOK\xbb (fig. 7.);")),Object(a.b)("img",{src:"attachments/60555482/65241139.png",height:"165"}),Object(a.b)("p",null,"Fig. 7 Setting user logging."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"once you restart the application server, right-clicking on the \xabSurname\xbb property will bring up an additional \xabShow Change History\xbb menu item. If the surname for the current record has been changed by someone, then this will be reflected in the property change history (fig. 8).")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("img",{src:"attachments/60555482/65241140.png",height:"250"}))),Object(a.b)("p",null,"Fig. 8. Property change history."),Object(a.b)("p",null,"The retention time for these logs is set to the same retention time as for the Change Log."),Object(a.b)("h3",{id:"logs-1"},"Logs"),Object(a.b)("p",null,"The following set of logs is supported for each platform component in the platform:"),Object(a.b)("p",null,"With ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Execution_auto_"}),"automatic installation")," under Linux, symlinks for these folders (as well as for the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"Launch-parameters_65241244.html#Launchparameters-applsfusion"}),"lsFusion launch parameters"),") are automatically created to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"57738078.html#Execution(auto)-logs"}),"other folders")," whose location is better aligned with Linux ideology."))}u.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=u(n),b=o,d=h["".concat(i,".").concat(b)]||h[b]||p[b]||a;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);