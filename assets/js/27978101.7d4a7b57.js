(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{124:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return o})),s.d(t,"metadata",(function(){return i})),s.d(t,"toc",(function(){return c})),s.d(t,"default",(function(){return u}));var n=s(3),a=s(7),r=(s(0),s(424)),o={title:"Access from an internal system"},i={unversionedId:"Access_from_an_internal_system",id:"Access_from_an_internal_system",isDocsHomePage:!1,title:"Access from an internal system",description:"Java interaction",source:"@site/docs/Access_from_an_internal_system.md",slug:"/Access_from_an_internal_system",permalink:"/docusaurustest/docs/Access_from_an_internal_system",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Access_from_an_internal_system.md",version:"current",sidebar:"docs",previous:{title:"Access from an external system",permalink:"/docusaurustest/docs/Access_from_an_external_system"},next:{title:"Access to an external system (EXTERNAL)",permalink:"/docusaurustest/docs/Access_to_an_external_system_EXTERNAL_"}},c=[{value:"Examples",id:"examples",children:[]}],l={toc:c};function u(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Java interaction")),Object(r.b)("p",null,"In this type of interaction, the internal system can directly access the Java elements of the lsFusion system (as with ordinary Java objects). This means you can perform all the same operations as when using network protocols, while avoiding the significant overhead of such interaction (such as serialization of parameters/deserialization of the result, etc.). In addition, this method of communication is much more convenient and efficient if the interaction is very close (i.e., the process of performing one operation\xa0requires constant access to both sides \u2013 from the lsFusion system to another system and vice versa) and/or requires access to particular platform units."),Object(r.b)("p",null,"It is worth noting that in order to access the Java elements of the lsFusion system directly, you must first obtain a link to an object that will have interfaces for finding these Java elements. This is usually done in one of two ways:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"If the initial call comes from the lsFusion system via the\xa0",Object(r.b)("a",{parentName:"li",href:"/docusaurustest/docs/Access_to_an_internal_system_INTERNAL_FORMULA_#javato-broken"},"Java interaction"),' mechanism, the action object "through which" the call is done\xa0may be used as the "search object" (the class of this action must be inherited from ',Object(r.b)("strong",{parentName:"li"},"lsfusion.server.physics.dev.integration.internal.to.InternalAction"),", which in turn has all the required interfaces)."),Object(r.b)("li",{parentName:"ol"},"If the object from whose method the lsFusion system must be accessed is a Spring bean, a link to the business logic object can be obtained using dependency injection (the bean is accordingly called businessLogics).")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"SQL interaction")),Object(r.b)("p",null,"Systems that have access to the SQL server of the lsFusion system (one such system, for example, is the SQL server itself) can directly access\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Tables"},"tables"),"\xa0and\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Materializations"},"fields")," created by the lsFusion system using SQL server means. It should be kept in mind that while reading data is relatively safe (except for possible deletion/modification of tables and their fields), when writing data no\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Events"},"events"),"\xa0will be triggered (including all elements that use them -\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Constraints"},"constraints"),",\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Aggregations"},"aggregations"),",\xa0etc.), and also no\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/Materializations"},"materializations")," will be recalculated.\xa0For this reason writing data directly to lsFusion system tables is highly discouraged. If doing so is necessary, all of the above factors should be taken into account."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'package lsfusion.server.logics.property.actions;\n\nimport lsfusion.base.BaseUtils;\nimport lsfusion.base.col.interfaces.immutable.ImMap;\nimport lsfusion.interop.remote.UserInfo;\nimport lsfusion.server.classes.ValueClass;\nimport lsfusion.server.data.SQLHandledException;\nimport lsfusion.server.logics.AuthenticationLogicsModule;\nimport lsfusion.server.logics.DataObject;\nimport lsfusion.server.logics.linear.LCP;\nimport lsfusion.server.logics.property.CalcProperty;\nimport lsfusion.server.logics.property.ClassPropertyInterface;\nimport lsfusion.server.logics.property.ExecutionContext;\nimport lsfusion.server.logics.scripted.ScriptingActionProperty;\nimport lsfusion.server.logics.scripted.ScriptingErrorLog;\n\nimport java.sql.SQLException;\nimport java.util.Iterator;\nimport java.util.Random;\n\npublic class GenerateLoginPasswordActionProperty extends ScriptingActionProperty {\n\n    private LCP email;\n    private LCP loginCustomUser;\n    private LCP sha256PasswordCustomUser;\n\n    private final ClassPropertyInterface customUserInterface;\n\n    public GenerateLoginPasswordActionProperty(AuthenticationLogicsModule LM, ValueClass... classes) throws ScriptingErrorLog.SemanticErrorException {\n        super(LM, classes);\n\n        this.email = findProperty("email[Contact]");\n        this.loginCustomUser = findProperty("login[CustomUser]");\n        this.sha256PasswordCustomUser = findProperty("sha256Password[CustomUser]");\n\n        Iterator<ClassPropertyInterface> i = interfaces.iterator();\n        customUserInterface = i.next();\n    }\n\n    public void executeCustom(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        DataObject userObject = context.getDataKeyValue(customUserInterface);\n\n        String currentEmail = (String) email.read(context, userObject);\n\n        String login;\n        int indexMail;\n        if(currentEmail != null && (indexMail = currentEmail.indexOf("@"))>=0)\n            login = currentEmail.substring(0, indexMail);\n        else\n            login = "login" + userObject.object;\n\n        Random rand = new Random();\n        String chars = "0123456789abcdefghijklmnopqrstuvwxyz";\n        String password = "";\n        for(int i=0;i<8;i++)\n            password += chars.charAt(rand.nextInt(chars.length()));\n\n        if (loginCustomUser.read(context, userObject) == null)\n            loginCustomUser.change(login, context, userObject);\n        String sha256Password = BaseUtils.calculateBase64Hash("SHA-256", password, UserInfo.salt);\n        sha256PasswordCustomUser.change(sha256Password, context, userObject);\n    }\n}\n')))}u.isMDXComponent=!0}}]);