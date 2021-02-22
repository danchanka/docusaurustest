(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{239:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),i=a(7),r=(a(0),a(421)),o={title:"Internationalization"},s={unversionedId:"Internationalization",id:"Internationalization",isDocsHomePage:!1,title:"Internationalization",description:"Internationalization consists of software development techniques that allow adapting the software to the linguistic and cultural particularities of different countries and regions.",source:"@site/docs\\Internationalization.md",slug:"/Internationalization",permalink:"/docusaurustest/docs/Internationalization",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Internationalization.md",version:"current",sidebar:"docs",previous:{title:"Migration",permalink:"/docusaurustest/docs/Migration"},next:{title:"Execution",permalink:"/docusaurustest/docs/Execution"}},l=[{value:"Locale\xa0",id:"locale",children:[]},{value:"Formats for specifying locale parameters",id:"formats-for-specifying-locale-parameters",children:[]},{value:"Determining the current locale",id:"determining-the-current-locale",children:[]},{value:"String data localization",id:"string-data-localization",children:[]}],c={toc:l};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Internationalization")," consists of software development techniques that allow adapting the software to the linguistic and cultural particularities of different countries and regions."),Object(r.b)("h3",{id:"locale"},"Locale\xa0"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Locale"),"\xa0is a set of parameters that defines regional settings, such as:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Language"),Object(r.b)("li",{parentName:"ul"},"Country (which in turn determines the formats for displaying numbers and dates)"),Object(r.b)("li",{parentName:"ul"},"Timezone"),Object(r.b)("li",{parentName:"ul"},"The starting year for a 100-year period, if the year is specified by a two-digit number")),Object(r.b)("h3",{id:"formats-for-specifying-locale-parameters"},"Formats for specifying locale parameters"),Object(r.b)("p",null,"The language and country are specified in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/tutorial/i18n/locale/create.html"}),"standard Java"),'\xa0format. For example, the language can be specified using the lines "ru", "en", and "fr", and the country, respectively, using "RU", "US", and "CA". The timezone is specified in the format supported by the Java method ',Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/TimeZone.html#getTimeZone-java.lang.String-"}),"TimeZone.getTimeZone"),'\xa0(examples: "PST", "Europe/Minsk", "GMT-8:00").\xa0 The year is specified as a number (example: 1960).'),Object(r.b)("h3",{id:"determining-the-current-locale"},"Determining the current locale"),Object(r.b)("p",null,"The server locale is determined by the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.oracle.com/us/technologies/java/locale-140624.html"}),"default locale")," of the JVM in which the server starts (namely, the startup parameters ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Launch_parameters#locale-broken"}),"user.language, user.country, user.timezone, and user.twoDigitYearStart"),"). When the application server starts, the parameters of this locale are automatically saved in the following properties:"),Object(r.b)("p",null,"[table was removed]"),Object(r.b)("p",null,"The server locale is used as ",Object(r.b)("em",{parentName:"p"},"current")," when the action in which localization is being performed is initiated by the system, and not by a particular user (i.e., the system user is considered the current user)."),Object(r.b)("p",null,"Otherwise, the current locale is determined by the values of the following properties (the user who initiated the action is passed as a parameter):"),Object(r.b)("p",null,"[table was removed]"),Object(r.b)("p",null,"In the current platform implementation, the above properties allow you both to use the locale parameters of the user's operating system and to set these parameters explicitly for specific users; or, for example, to use the server locale for all users (this is the default behavior)."),Object(r.b)("h3",{id:"string-data-localization"},"String data localization"),Object(r.b)("p",null,"The main task of platform internationalization is to localize the string data that the user sees. When sending text messages, property captions, actions, forms, etc. to the client from the server, these can be translated into another language or otherwise converted depending on the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#determining-the-current-locale"}),"current locale"),"."),Object(r.b)("p",null,"Localizable strings are created as follows: in the string, in place of the text to be localized, ",Object(r.b)("em",{parentName:"p"},"the string data ID")," is specified in curly brackets (e.g., '{button.cancel}'). When this string is sent to the client, all IDs found in the string are searched for on the server, then each is searched for in all ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Java_resource_bundle"}),"ResourceBundle")," project files in the required locale. If found, the ID in the brackets is replaced with the corresponding text."))}u.isMDXComponent=!0}}]);