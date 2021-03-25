(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{500:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),l=(n(0),n(750)),i={title:"Working parameters"},o={unversionedId:"Working_parameters",id:"version-1.0.0/Working_parameters",isDocsHomePage:!1,title:"Working parameters",description:"The platform working parameters can be set in one of the following ways (in the order of their priorities, lower priority at the bottom):",source:"@site/versioned_docs/version-1.0.0/Working_parameters.md",slug:"/Working_parameters",permalink:"/docusaurustest/docs/Working_parameters",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/Working_parameters.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Launch events",permalink:"/docusaurustest/docs/Launch_events"},next:{title:"User interface",permalink:"/docusaurustest/docs/User_interface"}},b=[],s={toc:b};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The platform working parameters can be set in one of the following ways (in the order of their priorities, lower priority at the bottom):"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"In Java code in the 'lsfusion.server.physics.admin.Settings.java' file (relevant for platform forks)"),Object(l.b)("li",{parentName:"ul"},"In lsfusion.properties which are typically part of the project and therefore function for all installations by default - parameter name should start with 'settings' (e.g., settings.enableUI)"),Object(l.b)("li",{parentName:"ul"},"In conf/settings.properties (for specific installations) - parameter name should start with 'settings'"),Object(l.b)("li",{parentName:"ul"},"In ",Object(l.b)("a",{parentName:"li",href:"/docusaurustest/docs/Launch_parameters#appjava"},"Java startup parameters"),"\xa0- parameter name should start with 'D' prefix plus 'settings' (e.g., -Dsettings.enableUI=2)"),Object(l.b)("li",{parentName:"ul"},"In the database: Administration\xa0\u2192 System\xa0\u2192 Settings\xa0\u2192 Parameters. In this interface, you can set both global settings and settings for specific roles"),Object(l.b)("li",{parentName:"ul"},"During the execution of an action using system actions: ",Object(l.b)("strong",{parentName:"li"},"Service.pushSetting","[","STRING, STRING","]"),", ",Object(l.b)("strong",{parentName:"li"},"Service.popSetting","[","STRING","]")," (overriding the value of the property for the entire current thread).")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("br",null),Object(l.b)("br",null)),Object(l.b)("th",{parentName:"tr",align:null},"Parameter Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enableUI"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"Determines user interface access, including ",Object(l.b)("a",{parentName:"td",href:"/docusaurustest/docs/Access_from_an_external_system#form-broken"},"form api")),Object(l.b)("br",null),Object(l.b)("p",null,"2 - Allow anonymous access"),Object(l.b)("br",null),Object(l.b)("p",null,"1 - Allow authenticated access only"),Object(l.b)("br",null),Object(l.b)("p",null,"0 - Do not allow access")),Object(l.b)("td",{parentName:"tr",align:null},"1 (2\xa0- if the server is started in ",Object(l.b)("a",{parentName:"td",href:"/docusaurustest/docs/Launch_parameters#devmode-broken"},"development mode"),")")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enableAPI"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"Determines access to the program interface excluding form api"),Object(l.b)("br",null),Object(l.b)("p",null,"2 - Allow anonymous access"),Object(l.b)("br",null),Object(l.b)("p",null,"1 - Allow authenticated access only"),Object(l.b)("br",null),Object(l.b)("p",null,"0 - Do not allow access")),Object(l.b)("td",{parentName:"tr",align:null},"1 (2\xa0- if the server is started in ",Object(l.b)("a",{parentName:"td",href:"/docusaurustest/docs/Launch_parameters#devmode-broken"},"development mode"),")")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"freeConnections"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"Maximum number of connections in the connection pool on the application server"),Object(l.b)("td",{parentName:"tr",align:null},"12")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"statDegree"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"The base used to estimate the number of records (statistics) by all optimizers. With that, optimizers consider any number of records equal to the specified base to a certain degree (for example, if the number of records is really 1000 and the base is 5, then the optimizer considers the number of records equal to 5 to the 4th degree). Thus, the larger the base, the less accurate the statistics become, which means the compilation time, the size of the caches and generated requests are reduced, but this can significantly increase the likelihood of errors when building the correct query plan."),Object(l.b)("td",{parentName:"tr",align:null},"5")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("div",{class:"content-wrapper"},Object(l.b)("br",null),Object(l.b)("p",null,"authTokenExpiration"),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"Authentication token expiration time in minutes."),Object(l.b)("td",{parentName:"tr",align:null},"60 *24 (1 day)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"reserveIDStep"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"The number of IDs that the application server immediately reserves for optimization when performing single object adding operations (with asynchronous input, single NEW, etc.)"),Object(l.b)("td",{parentName:"tr",align:null},"50")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"excessThreadAllocatedBytes,\xa0"),Object(l.b)("br",null),Object(l.b)("p",null,"accessInterruptCount")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"long, int")),Object(l.b)("td",{parentName:"tr",align:null},"Determine the threshold and the number of iterations of memory measurement during which this threshold is exceeded after which the Java thread will be automatically interrupted. This mechanism is typically used to increase the fault tolerance of the application server."),Object(l.b)("td",{parentName:"tr",align:null},"5GB, 4")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"queryLengthTimeout")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"int"),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("br",null),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},"Parameters of the query materialization mechanism. queryLengthTimeout defines the minimum query length for which the mechanism is enabled"),Object(l.b)("td",{parentName:"tr",align:null},"1000")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"useRequestTimeout"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"Enables the mechanism for repeated remote calls if these calls take too long. It is necessary for resolving situations when a call is made on the server, but the response is lost due to network problems. The latter usually happens when the application server is running in a virtualized environment. Thus, in this case, it is recommended to enable this setting and disable it in the opposite case."),Object(l.b)("td",{parentName:"tr",align:null},"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"tempTablesTimeThreshold,\xa0"),Object(l.b)("br",null),Object(l.b)("p",null,"tempTablesCountThreshold"),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("br",null),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},"int, int"),Object(l.b)("td",{parentName:"tr",align:null},'Determine the minimum lifespan threshold (in seconds) of a temporary table and the number of tables per connection, upon exceeding which these temporary tables are cleared/deleted in the routine mode. The minimum lifespan threshold for the table should be commensurate with the standard using time of the temporary table. The smaller these thresholds, the lower the resource consumption by the database server, but the higher the likelihood of "cache rotation"'),Object(l.b)("td",{parentName:"tr",align:null},"240, 40.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"queryRowCountPessLimit,\xa0"),Object(l.b)("br",null),Object(l.b)("p",null,"queryRowCountOptDivider")),Object(l.b)("td",{parentName:"tr",align:null},"int, int"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"Parameters of the protection mechanism against too large queries.\xa0queryRowCountPessLimit - minimum number of records for which this protection is activated,\xa0queryRowCountOptDivider - the threshold at which the application server throws an error (is\xa0set as part of all memory available for the application server, e.g., if the parameter value is 50 and the memory capacity is 100GB, then the threshold is 100GB/50=2GB).")),Object(l.b)("td",{parentName:"tr",align:null},"1000, 50")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"queryLengthLimit"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"Parameters of the protection mechanism against too long queries.\xa0queryLengthLimit - the length of the request upon exceeding which the application server throws an error."),Object(l.b)("td",{parentName:"tr",align:null},"2000000")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"remoteLogTime"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"Runtime threshold (in milliseconds) at which the remote call is written to the corresponding log (server-remote)"),Object(l.b)("td",{parentName:"tr",align:null},"3000")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"explainThreshold, explainJavaStack,"),Object(l.b)("br",null),Object(l.b)("p",null,"explainCompile")),Object(l.b)("td",{parentName:"tr",align:null},"int, boolean, boolean"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"Output parameters of ",Object(l.b)("a",{parentName:"td",href:"/docusaurustest/docs/Journals_and_logs#explain-broken"},"query execution plan logs")),Object(l.b)("br",null),Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"explainThreshold - runtime threshold (in milliseconds) at which SQL request is written to the corresponding log (explain). Used only if Service.explainAnalyzeMode","[User]"," is enabled for the user."),Object(l.b)("br",null),Object(l.b)("li",null,"explainJavaStack - determines whether the Java stack should also be logged in addition to the LSF stack."),Object(l.b)("br",null),Object(l.b)("li",null,"explainCompile - outputs to a special log (explaincompile) information about the compilation of the query (proposed plans, pushing conditions into subqueries, etc.)."),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},"100, false, false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"startServerAnyWay"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"Start the server, even if there are errors in the index structure or metadata synchronization"),Object(l.b)("td",{parentName:"tr",align:null},"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"conflictSleepThreshold,\xa0"),Object(l.b)("br",null),Object(l.b)("p",null,"conflictSleepTimeDegree")),Object(l.b)("td",{parentName:"tr",align:null},"int, int"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"Parameters for resolving repeated update conflicts:"),Object(l.b)("br",null),Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"conflictSleepThreshold - the number of unsuccessful attempts (when a conflict arose) after which the mechanism should be enabled."),Object(l.b)("br",null),Object(l.b)("li",null,"conflictSleepTimeDegree - time base (in seconds), at the degree of which counted in the number of attempts the thread should be stopped (e.g., if the base is 2 then for 3 attempts timeout will be 8, for 4 - 16, etc.)"),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},"3, 2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"timeoutNanosPerRow"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"The average number of nanoseconds to process one row (is used to estimate the approximate time of the request execution). If this estimated time is exceeded, the platform tries to materialize some subqueries (or somehow change this request to a more pessimistic one) and run the query again. Reducing this parameter value may lead to more frequent materializations and additional repeated executions of the query in general, increasing it may lead to the use of incorrect plans (in the first place, nested loops on joining large tables), for example, in cases when the SQL server evaluates the subquery statistics incorrectly."),Object(l.b)("td",{parentName:"tr",align:null},"20")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"deadLockThreshold"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"Parameters for resolving repeated deadlocks.\xa0deadLockThreshold -\xa0the number of unsuccessful attempts (when a deadlock occurred) after which the mechanism should be enabled.\xa0"),Object(l.b)("td",{parentName:"tr",align:null},"0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"periodRestartConnections,\xa0"),Object(l.b)("br",null),Object(l.b)("p",null,"percentRestartConnections")),Object(l.b)("td",{parentName:"tr",align:null},"int, int"),Object(l.b)("td",{parentName:"tr",align:null},"Parameters of the connection restarting mechanism.\xa0periodRestartConnections - determines how often (a period in seconds) this mechanism is launched.\xa0percentRestartConnections - determines the percentage of connections with the maximum scoring that will be restarted."),Object(l.b)("td",{parentName:"tr",align:null},"60, 1")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"closeFormDelay"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"The period provided to the client to finish processing the form after initiating its closure on the server (this mechanism is necessary for saving a round trip request when closing the form)."),Object(l.b)("td",{parentName:"tr",align:null},"5000")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"constraintRowsLimit"),Object(l.b)("td",{parentName:"tr",align:null},"int"),Object(l.b)("td",{parentName:"tr",align:null},"Determines the number of rows that should be displayed within a constraint violation message"),Object(l.b)("td",{parentName:"tr",align:null},"30")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"defaultCompareForStringContains"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"Use Contains as the default filter in custom filters"),Object(l.b)("td",{parentName:"tr",align:null},"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"limitHintIncrementComplexity,"),Object(l.b)("br",null),Object(l.b)("p",null,"limitComplexityGrowthCoeff,"),Object(l.b)("br",null),Object(l.b)("p",null,"limitHintIncrementStat,"),Object(l.b)("br",null),Object(l.b)("p",null,"limitHintIncrementValueComplexity,"),Object(l.b)("br",null),Object(l.b)("p",null,"limitApplyHintIncrementComplexity,"),Object(l.b)("br",null),Object(l.b)("p",null,"limitApplyHintIncrementStat,")),Object(l.b)("td",{parentName:"tr",align:null},"int, double, int, int, int, int"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"Parameters for managing the complexity of changes (materialization of property changes when the complexity of incremental calculations becomes too large):"),Object(l.b)("br",null),Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"limitHintIncrementComplexity - complexity threshold (defined as the approximate number of executed operators). When exceeded, property changes are materialized into a temporary table. This threshold must be exceeded either by the condition that defines the object collections for which the property has changed, or directly by the value of this property (for the value it is additionally verified that the increase in complexity compared to the calculation without changes exceeds limitComplexityGrowthCoeff)"),Object(l.b)("br",null),Object(l.b)("li",null,"limitHintIncrementStat - the threshold of the estimated number of object collections for which the property changes, upon exceeding which the changes will not materialize (to avoid materialization of too large amount of data). This value is multiplied by the square of the ratio of the change complexity to the threshold (the greater the complexity, the less harm in the additional effort for maintaining a large amount of data), and also after this multiplication the resulting threshold is checked for being no less than the maximum number of records out of all used temporary tables (if less, then it is increased to this value)."),Object(l.b)("br",null),Object(l.b)("li",null,"limitHintIncrementValueComplexity - if one of the property parameters is a known constant value, its changes will not be materialized by default. At the same time, complexity can increase very quickly, so there is an additional threshold in the platform, upon exceeding which changes will be materialized even in this case (with a constant parameter). However, if a property is marked with a special COMPLEX option or depends on such a property, its changes having a constant value as one of the parameters will never be materialized."),Object(l.b)("br",null),Object(l.b)("li",null,"limitApplyHintIncrementComplexity,\xa0limitApplyHintIncrementStat - parameters similar to the upper ones without the Apply prefix, and thus used when executing actions inside the ",Object(l.b)("a",{parentName:"td",href:"/docusaurustest/docs/Apply_changes_APPLY_"},"changes applying (APPLY)"),"\xa0operator (e.g., inside event handling)"),Object(l.b)("br",null)),Object(l.b)("br",null),Object(l.b)("p",null,"Upon increasing all of the above parameters, the compiler and the optimizer will have more information (possibly redundant) for building more efficient plans, but will also consume more of the processor time/memory (often significantly, therefore it is not recommended to set them too large)")),Object(l.b)("td",{parentName:"tr",align:null},"50, 1.5, 200, 1000, 100, 1000")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"excessThreadAllocatedBytes,"),Object(l.b)("br",null),Object(l.b)("p",null,"excessInterruptCount,\xa0"),Object(l.b)("br",null),Object(l.b)("p",null,"threadAllocatedMemoryPeriod")),Object(l.b)("td",{parentName:"tr",align:null},"long, int, int"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"Parameters of the excessive memory consumption preventing mechanism on the application server:"),Object(l.b)("br",null),Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"excessThreadAllocatedBytes - the number of bytes upon exceeding which the thread is considered as consuming too much memory"),Object(l.b)("br",null),Object(l.b)("li",null,"excessInterruptCount - the number of consecutive measurements during which the thread consumes too much memory. When exceeded, the thread will be interrupted"),Object(l.b)("br",null),Object(l.b)("li",null,"threadAllocatedMemoryPeriod - period (in seconds) that determines how often memory consumption by threads is measured"),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},"5368709120L (5GB), 4, 180 (3 minutes)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"useSavePointsThreshold,"),Object(l.b)("br",null),Object(l.b)("p",null,"savePointCountForExceptions,\xa0"),Object(l.b)("br",null),Object(l.b)("p",null,"updateSavePointsMinMultiplier,\xa0"),Object(l.b)("br",null),Object(l.b)("p",null,"updateSavePointsMaxMultiplier")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"int, int,"),Object(l.b)("br",null),Object(l.b)("p",null,"double, double")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,"Parameters of the mechanism for using savepoints in transactions (used to avoid restarting the entire transaction, for example, in the subquery materialization mechanism):"),Object(l.b)("br",null),Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"useSavePointsThreshold - the number of simultaneous savepoints on the application server. The higher, the less likely transactions will be restarted, but the more likely some DBMSs (for example, Postgres) will initiate global locks (LWLock in Postgres). This parameter is adaptive and can change depending on the actual need to use savepoints (since the savepoint mechanism is turned on only after a certain number of transaction restarts).\xa0"),Object(l.b)("br",null),Object(l.b)("li",null,"savePointCountForExceptions - the number of transaction restarts, upon exceeding which the savepoint mechanism is enabled (-1 - fully disable).\xa0"),Object(l.b)("br",null),Object(l.b)("li",null,"updateSavePointsMaxMultiplier, updateSavePointsMinMultiplier - the minimum and maximum coefficients that can be set by the server when adaptively determining the\xa0number of simultaneous savepoints on the application server (for example, by default these coefficients are 0.8 and 3.0, i.e. the minimum targeted number of simultaneous savepoints is 5",Object(l.b)("em",{parentName:"td"},"0.8=4, the maximum is 5"),"3=15)"),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},"5, -1, 0.8, 3.0")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"editLogicalOnSingleClick"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"Determines whether an event of changing a property of a logical type on the form is triggered by a single (true) or double (false) mouse click"),Object(l.b)("td",{parentName:"tr",align:null},"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"editActionOnSingleClick"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"Determines whether the action call event on the form is triggered by a single (true) or double (false) mouse click"),Object(l.b)("td",{parentName:"tr",align:null},"false")))),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"In addition to the system parameters, the platform also has\xa0",Object(l.b)("a",{parentName:"p",href:"/docusaurustest/docs/Launch_parameters"},"launch parameters")," which are set a little differently and are relevant mainly for startup (initialization) processes of various components of the platform and access to these components."))))}c.isMDXComponent=!0}}]);