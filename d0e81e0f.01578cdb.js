(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{357:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(424)),s={},o={unversionedId:"LSFUS/lsFusionScheduler",id:"LSFUS/lsFusionScheduler",isDocsHomePage:!1,title:"lsFusionScheduler",description:"lsFusionScheduler",source:"@site/docs\\LSFUS\\lsFusionScheduler.md",slug:"/LSFUS/lsFusionScheduler",permalink:"/docusaurustest/docs/LSFUS/lsFusionScheduler",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionScheduler.md",version:"current"},c=[],l={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusionscheduler"},"lsFusionScheduler"),Object(a.b)("h1",{id:"scheduler"},"Scheduler"),Object(a.b)("p",null,"The scheduler is designed to automatically execute certain tasks with specified frequency."),Object(a.b)("p",null,"The scheduler is configured in the Administration","\\","\\","Scheduler","\\","\\","Tasks menu.\xa0You can start the scheduler on this form by clicking \xabStart scheduler\xbb button and stop it by clicking \xabStop scheduler\xbb (Fig. 7.11.). If the Server is specified in the system settings, then the scheduler can be launched from this server only (Fig. 1.)."),Object(a.b)("img",{src:"attachments/60555472/65241101.png",height:"250"}),Object(a.b)("p",null,"Fig. 1. Specifying a server to run the scheduler"),Object(a.b)("img",{src:"attachments/60555472/65241102.png",height:"250"}),Object(a.b)("p",null,"Fig. 2. Scheduler start/stop"),Object(a.b)("p",null,"This form determines the composition of Tasks \u2013 buttons \xabAdd\xbb, \xabDelete\xbb.\xa0 The scheduler will execute only active Tasks \u2013 \xabActive\xbb mark. For each task the following required parameters are set:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Start date \u2013 the task will be executed only after the specified date. The time in this field is not tied to the start date; it is tied to the current date and indicates the time of the first task launch within a day. The task repetition is counted from this time. The frequency is set in the \xabRepeat every (seconds)\xbb field. If the period is more than a day (86400 seconds), then the starting date is the date of the server start (restart)."),Object(a.b)("li",{parentName:"ul"},"Repeat every (seconds) \u2013 the task execution frequency."),Object(a.b)("li",{parentName:"ul"},"Countdown \u2013 indicates the time from which to count down the time for the repeated task: either \xabFrom the end of the previous\xbb or \xabFrom the start of the previous\xbb.")),Object(a.b)("p",null,"Also, the optional parameters can be specified:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Time from/Time to \u2013 time limit for the task execution within 24 hours."),Object(a.b)("li",{parentName:"ul"},"Execute at start \u2013 the task is performed only when the server is started (restarted).")),Object(a.b)("p",null,"For each task the following buttons are available:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\xabExecute task\xbb - executes the task manually. The task runs immediately on the button click. If the task is not completed when the button is pressed, it will be launched twice."),Object(a.b)("li",{parentName:"ul"},"\xabRestart task\xbb - executes the task manually. The task runs immediately on the button click. If the task is not completed when the button is pressed, it will be stopped and restarted."),Object(a.b)("li",{parentName:"ul"},"\xabDelete\xbb - deletes the task.")),Object(a.b)("p",null,"Tabs on the \xabTasks\xbb form:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The \xabProperties\xbb tab lists the actions included in the selected task. The sequence of actions is determined by the values in the \xabOrder\xbb field from the smallest to the largest. Only actions with the \xabActive\xbb mark are executed. The \xabIgnore errors\xbb mark allows you to run the action despite the error that occurred in the previous action, otherwise, the current action will not start. An action can be implemented either by built-in commands (the list of commands appears on clicking the \xabAction\xbb field) or user-created scripts \u2013 the \xabScript\xbb field. Some built-in actions require input parameters (usually numeric) which are entered in the \xabAction parameter\xbb field. In the \xabPerform no longer than (seconds)\xbb field the maximum acceptable duration for the execution of this action is indicated. If the action is not completed within the specified period, the system considers it an error."),Object(a.b)("li",{parentName:"ul"},"On the \xabLog\xbb tab the results of the action, when it started and finished, can be traced. If an error preventing the action from being completed has occurred during its execution, then it is marked in the \xabError\xbb field in the log. Some actions are accompanied by informational messages \u2013 mark in the \xabMessages\xbb field. If the log has a mark in the \xabError in messages\xbb field, this means that during the execution inconsistencies with some of the program constraints were found. All errors and messages are followed by notes in the \xabClient messages\xbb section (Fig. 3.).")),Object(a.b)("img",{src:"attachments/60555472/65241103.png",height:"151"}),Object(a.b)("p",null,"Fig. 3. Scheduler log."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"If the task is run once every few days, then on the \xabFilter by day\xbb tab you can specify either the days of the week or days of the month on which the task should be started. If both the days of the week and days of the month are specified, then the task will be executed only on those days of the month that fall on the specified days of the week (Fig. 4.).")),Object(a.b)("img",{src:"attachments/60555472/65241105.png",height:"248"}),Object(a.b)("p",null,"Fig. 4. Setting filter by day."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"On the \xabScheduler settings\xbb tab the maximum number of threads (tasks) that can be executed simultaneously is specified. If the number of threads is not specified, then, by default, up to 5 tasks can be executed simultaneously.")))}u.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=u(n),b=r,m=h["".concat(s,".").concat(b)]||h[b]||d[b]||a;return n?i.a.createElement(m,o(o({ref:t},l),{},{components:n})):i.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);