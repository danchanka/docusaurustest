(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{318:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var s=n(3),r=n(7),a=(n(0),n(424)),o={},i={unversionedId:"LSFUS/lsFusionAccess_from_an_internal_system",id:"LSFUS/lsFusionAccess_from_an_internal_system",isDocsHomePage:!1,title:"lsFusionAccess_from_an_internal_system",description:"lsFusionAccess from an internal system",source:"@site/docs\\LSFUS\\lsFusionAccess_from_an_internal_system.md",slug:"/LSFUS/lsFusionAccess_from_an_internal_system",permalink:"/docusaurustest/docs/LSFUS/lsFusionAccess_from_an_internal_system",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/website/docs/LSFUS/lsFusionAccess_from_an_internal_system.md",version:"current"},c=[],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(s.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusionaccess-from-an-internal-system"},"lsFusionAccess from an internal system"),Object(a.b)("h1",{id:"access-from-an-internal-system"},"Access from an internal system"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Java interaction")),Object(a.b)("p",null,"In this type of interaction, the internal system can directly access the Java elements of the lsFusion system (as with ordinary Java objects). This means you can perform all the same operations as when using network protocols, while avoiding the significant overhead of such interaction (such as serialization of parameters/deserialization of the result, etc.). In addition, this method of communication is much more convenient and efficient if the interaction is very close (i.e., the process of performing one operation\xa0requires constant access to both sides \u2013 from the lsFusion system to another system and vice versa) and/or requires access to particular platform units."),Object(a.b)("p",null,"It is worth noting that in order to access the Java elements of the lsFusion system directly, you must first obtain a link to an object that will have interfaces for finding these Java elements. This is usually done in one of two ways:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"If the initial call comes from the lsFusion system via the\xa0",Object(a.b)("a",Object(s.a)({parentName:"li"},{href:"51216543.html#Accesstoaninternalsystem(INTERNAL,FORMULA)-javato"}),"Java interaction"),' mechanism, the action object "through which" the call is done\xa0may be used as the "search object" (the class of this action must be inherited from ',Object(a.b)("strong",{parentName:"li"},"lsfusion.server.physics.dev.integration.internal.to.InternalAction"),", which in turn has all the required interfaces)."),Object(a.b)("li",{parentName:"ol"},"If the object from whose method the lsFusion system must be accessed is a Spring bean, a link to the business logic object can be obtained using dependency injection (the bean is accordingly called businessLogics).")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"SQL interaction")),Object(a.b)("p",null,"Systems that have access to the SQL server of the lsFusion system (one such system, for example, is the SQL server itself) can directly access\xa0",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionTables"}),"tables"),"\xa0and\xa0",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionMaterializations"}),"fields")," created by the lsFusion system using SQL server means. It should be kept in mind that while reading data is relatively safe (except for possible deletion/modification of tables and their fields), when writing data no\xa0",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionEvents"}),"events"),"\xa0will be triggered (including all elements that use them -\xa0",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionConstraints"}),"constraints"),",\xa0",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionAggregations"}),"aggregations"),",\xa0etc.), and also no\xa0",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionMaterializations"}),"materializations")," will be recalculated.\xa0For this reason writing data directly to lsFusion system tables is highly discouraged. If doing so is necessary, all of the above factors should be taken into account."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples")),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{}),'package lsfusion.server.logics.property.actions;\n\nimport lsfusion.base.BaseUtils;\nimport lsfusion.base.col.interfaces.immutable.ImMap;\nimport lsfusion.interop.remote.UserInfo;\nimport lsfusion.server.classes.ValueClass;\nimport lsfusion.server.data.SQLHandledException;\nimport lsfusion.server.logics.AuthenticationLogicsModule;\nimport lsfusion.server.logics.DataObject;\nimport lsfusion.server.logics.linear.LCP;\nimport lsfusion.server.logics.property.CalcProperty;\nimport lsfusion.server.logics.property.ClassPropertyInterface;\nimport lsfusion.server.logics.property.ExecutionContext;\nimport lsfusion.server.logics.scripted.ScriptingActionProperty;\nimport lsfusion.server.logics.scripted.ScriptingErrorLog;\n\nimport java.sql.SQLException;\nimport java.util.Iterator;\nimport java.util.Random;\n\npublic class GenerateLoginPasswordActionProperty extends ScriptingActionProperty {\n\n    private LCP email;\n    private LCP loginCustomUser;\n    private LCP sha256PasswordCustomUser;\n\n    private final ClassPropertyInterface customUserInterface;\n\n    public GenerateLoginPasswordActionProperty(AuthenticationLogicsModule LM, ValueClass... classes) throws ScriptingErrorLog.SemanticErrorException {\n        super(LM, classes);\n\n        this.email = findProperty("email[Contact]");\n        this.loginCustomUser = findProperty("login[CustomUser]");\n        this.sha256PasswordCustomUser = findProperty("sha256Password[CustomUser]");\n\n        Iterator<ClassPropertyInterface> i = interfaces.iterator();\n        customUserInterface = i.next();\n    }\n\n    public void executeCustom(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        DataObject userObject = context.getDataKeyValue(customUserInterface);\n\n        String currentEmail = (String) email.read(context, userObject);\n\n        String login;\n        int indexMail;\n        if(currentEmail != null && (indexMail = currentEmail.indexOf("@"))>=0)\n            login = currentEmail.substring(0, indexMail);\n        else\n            login = "login" + userObject.object;\n\n        Random rand = new Random();\n        String chars = "0123456789abcdefghijklmnopqrstuvwxyz";\n        String password = "";\n        for(int i=0;i<8;i++)\n            password += chars.charAt(rand.nextInt(chars.length()));\n\n        if (loginCustomUser.read(context, userObject) == null)\n            loginCustomUser.change(login, context, userObject);\n        String sha256Password = BaseUtils.calculateBase64Hash("SHA-256", password, UserInfo.salt);\n        sha256PasswordCustomUser.change(sha256Password, context, userObject);\n    }\n}\n')))}u.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var s=n(0),r=n.n(s);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=s,d=m["".concat(o,".").concat(f)]||m[f]||p[f]||a;return n?r.a.createElement(d,i(i({ref:t},l),{},{components:n})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);