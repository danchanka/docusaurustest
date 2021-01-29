(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{251:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(424)),i={title:"Internationalization"},c={unversionedId:"LSFUS/Internationalization",id:"LSFUS/Internationalization",isDocsHomePage:!1,title:"Internationalization",description:"Internationalization consists of software development techniques that allow adapting the software to the linguistic and cultural particularities of different countries and regions.",source:"@site/docs\\LSFUS\\Internationalization.md",slug:"/LSFUS/Internationalization",permalink:"/docusaurustest/docs/LSFUS/Internationalization",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/Internationalization.md",version:"current"},s=[],l={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Internationalization")," consists of software development techniques that allow adapting the software to the linguistic and cultural particularities of different countries and regions."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Locale\xa0")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Locale"),"\xa0is a set of parameters that defines regional settings, such as:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Language"),Object(o.b)("li",{parentName:"ul"},"Country (which in turn determines the formats for displaying numbers and dates)"),Object(o.b)("li",{parentName:"ul"},"Timezone"),Object(o.b)("li",{parentName:"ul"},"The starting year for a 100-year period, if the year is specified by a two-digit number")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Formats for specifying locale parameters")),Object(o.b)("p",null,"The language and country are specified in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/tutorial/i18n/locale/create.html"}),"standard Java"),'\xa0format. For example, the language can be specified using the lines "ru", "en", and "fr", and the country, respectively, using "RU", "US", and "CA". The timezone is specified in the format supported by the Java method ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/TimeZone.html#getTimeZone-java.lang.String-"}),"TimeZone.getTimeZone"),'\xa0(examples: "PST", "Europe/Minsk", "GMT-8:00").\xa0 The year is specified as a number (example: 1960).'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Determining the current locale")),Object(o.b)("p",null,"The server locale is determined by the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.oracle.com/us/technologies/java/locale-140624.html"}),"default locale")," of the JVM in which the server starts (namely, the startup parameters ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"Launch-parameters_65241244.html#Launchparameters-locale"}),"user.language, user.country, user.timezone, and user.twoDigitYearStart"),"). When the application server starts, the parameters of this locale are automatically saved in the following properties:"),Object(o.b)("p",null,"In the current platform implementation, the above properties allow you both to use the locale parameters of the user's operating system and to set these parameters explicitly for specific users; or, for example, to use the server locale for all users (this is the default behavior)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"String data localization")),Object(o.b)("p",null,"The main task of platform internationalization is to localize the string data that the user sees. When sending text messages, property captions, actions, forms, etc. to the client from the server, these can be translated into another language or otherwise converted depending on the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#Internationalization-current"}),"current locale"),"."),Object(o.b)("p",null,"Localizable strings are created as follows: in the string, in place of the text to be localized, ",Object(o.b)("em",{parentName:"p"},"the string data ID")," is specified in curly brackets (e.g., '{button.cancel}'). When this string is sent to the client, all IDs found in the string are searched for on the server, then each is searched for in all ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Java_resource_bundle"}),"ResourceBundle")," project files in the required locale. If found, the ID in the brackets is replaced with the corresponding text."))}p.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(i,".").concat(f)]||u[f]||b[f]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);