(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{355:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(419)),i={title:"How-to: INTERNAL"},s={unversionedId:"How-to_INTERNAL",id:"How-to_INTERNAL",isDocsHomePage:!1,title:"How-to: INTERNAL",description:"Example 1",source:"@site/docs\\How-to_INTERNAL.md",slug:"/How-to_INTERNAL",permalink:"/docusaurustest/docs/How-to_INTERNAL",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_INTERNAL.md",version:"current",sidebar:"docs",previous:{title:"How-to: FORMULA",permalink:"/docusaurustest/docs/How-to_FORMULA"},next:{title:"How-to: Use Cases",permalink:"/docusaurustest/docs/How-to_Use_Cases"}},c=[],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"example-1"},"Example 1"),Object(a.b)("h6",{id:"condition"},"Condition"),Object(a.b)("p",null,"We need to implement an action that will display a message with the server's name and IP address."),Object(a.b)("h6",{id:"solution"},"Solution"),Object(a.b)("p",null,"To solve the task, create an action using the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/INTERNAL_operator"}),"INTERNAL")," operator which will generate an object of the \xa0",Object(a.b)("strong",{parentName:"p"},"GetIP"),' class (if the class has a package, then you must also specify "package" in the class name) and will call the ',Object(a.b)("strong",{parentName:"p"},"executeInternal")," method. The source code for this class will be as follows:"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"GetIP.java")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'import lsfusion.server.data.sql.exception.SQLHandledException;\nimport lsfusion.server.language.ScriptingErrorLog;\nimport lsfusion.server.language.ScriptingLogicsModule;\nimport lsfusion.server.logics.action.controller.context.ExecutionContext;\nimport lsfusion.server.logics.property.classes.ClassPropertyInterface;\nimport lsfusion.server.physics.dev.integration.internal.to.InternalAction;\n\nimport java.net.InetAddress;\nimport java.net.UnknownHostException;\nimport java.sql.SQLException;\n\npublic class GetIP extends InternalAction {\n\n    public GetIP(ScriptingLogicsModule LM) {\n        super(LM);\n    }\n\n    @Override\n    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        try {\n            findProperty("ip").change(InetAddress.getLocalHost().toString(), context);\n        } catch (UnknownHostException | ScriptingErrorLog.SemanticErrorException ignored) {\n        }\n    }\n}\n')),Object(a.b)("p",null,"First, the action reads the server parameters using the built-in ",Object(a.b)("strong",{parentName:"p"},"InetAddress")," class. Then it finds the local property ",Object(a.b)("strong",{parentName:"p"},"ip")," declared in the same module as an action and writes the resulting value to it using the ",Object(a.b)("strong",{parentName:"p"},"change")," method."),Object(a.b)("p",null,"There is also an alternative way to set this property:"),Object(a.b)("p",null,"The platform will generate the target class, insert the specified code into it and then compile it using the Janino ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://janino-compiler.github.io/janino/"}),"compiler"),". The advantage of this approach is that building the project does not require a dedicated step for compiling the Java code. However, the approach has a number of significant limitations and can be used only in the simplest cases."),Object(a.b)("h5",{id:"example-2"},"Example 2"),Object(a.b)("h6",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"We need to implement an action that calculates the maximum common divisor of the two integers."),Object(a.b)("h6",{id:"solution-1"},"Solution"),Object(a.b)("p",null,"The key difference from the previous example is that the action has two ",Object(a.b)("strong",{parentName:"p"},"INTEGER")," arguments. Keep this in mind when writing your own ",Object(a.b)("strong",{parentName:"p"},"CalculateGCD")," class. Here is the source code:"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CalculateGCD.java")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'import lsfusion.server.data.sql.exception.SQLHandledException;\nimport lsfusion.server.language.ScriptingErrorLog;\nimport lsfusion.server.language.ScriptingLogicsModule;\nimport lsfusion.server.logics.action.controller.context.ExecutionContext;\nimport lsfusion.server.logics.classes.ValueClass;\nimport lsfusion.server.logics.property.classes.ClassPropertyInterface;\nimport lsfusion.server.physics.dev.integration.internal.to.InternalAction;\n\nimport java.math.BigInteger;\nimport java.sql.SQLException;\n\npublic class CalculateGCD extends InternalAction {\n\n    public CalculateGCD(ScriptingLogicsModule LM, ValueClass... classes) {\n        super(LM, classes);\n    }\n\n    @Override\n    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        BigInteger b1 = BigInteger.valueOf((Integer)getParam(0, context));\n        BigInteger b2 = BigInteger.valueOf((Integer)getParam(1, context));\n        BigInteger gcd = b1.gcd(b2);\n        try {\n            findProperty("gcd[]").change(gcd.intValue(), context);\n        } catch (ScriptingErrorLog.SemanticErrorException ignored) {\n        }\n    }\n}\n')),Object(a.b)("p",null,"Values of input properties are read using the ",Object(a.b)("strong",{parentName:"p"},"getParam")," method, in which the first parameter passed is a 0-based index of the property to be read. This method returns an object of class ",Object(a.b)("strong",{parentName:"p"},"Object"),", so explicit type casting is required."),Object(a.b)("h5",{id:"example-2-1"},"Example 2"),Object(a.b)("h6",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"We need to implement an action that calculates the greatest common divisor of two integers, but they are specified as properties for an object."),Object(a.b)("h6",{id:"solution-2"},"Solution"),Object(a.b)("p",null,"In this example we first need to read the values of the properties for the passed object, and then to write the result to a property with one input. This is done as follows:"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CalculateGCDObject.java")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'import lsfusion.server.data.sql.exception.SQLHandledException;\nimport lsfusion.server.data.value.DataObject;\nimport lsfusion.server.language.ScriptingErrorLog;\nimport lsfusion.server.language.ScriptingLogicsModule;\nimport lsfusion.server.logics.action.controller.context.ExecutionContext;\nimport lsfusion.server.logics.classes.ValueClass;\nimport lsfusion.server.logics.property.classes.ClassPropertyInterface;\nimport lsfusion.server.physics.dev.integration.internal.to.InternalAction;\n\nimport java.math.BigInteger;\nimport java.sql.SQLException;\n\npublic class CalculateGCDObject extends InternalAction {\n\n    public CalculateGCDObject(ScriptingLogicsModule LM, ValueClass... classes) {\n        super(LM, classes);\n    }\n\n    @Override\n    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        try {\n            DataObject calculation = (DataObject)getParamValue(0, context);\n            BigInteger a = BigInteger.valueOf((Integer)findProperty("a").read(context, calculation));\n            BigInteger b = BigInteger.valueOf((Integer)findProperty("b").read(context, calculation));\n            BigInteger gcd = a.gcd(b);\n            findProperty("gcd[Calculation]").change(gcd.intValue(), context, calculation);\n        } catch (ScriptingErrorLog.SemanticErrorException ignored) {\n        }\n    }\n}\n')),Object(a.b)("p",null,"The object that is passed is first written to the variable ",Object(a.b)("strong",{parentName:"p"},"calculation"),". This is done using the special ",Object(a.b)("strong",{parentName:"p"},"getParamValue")," method, which returns an object of class ",Object(a.b)("strong",{parentName:"p"},"DataObject"),". This stores the object's ID and class. It will then be used to read and write properties, by passing it as the last parameter to the ",Object(a.b)("strong",{parentName:"p"},"read")," and ",Object(a.b)("strong",{parentName:"p"},"change")," methods. If the property took several objects as input, every of them would need to be passed as the last parameter."),Object(a.b)("p",null,"The full canonical name of the property is used in the ",Object(a.b)("strong",{parentName:"p"},"findProperty")," method, because several ",Object(a.b)("strong",{parentName:"p"},"gcd")," properties are declared in the module. If you only specify the name, then a corresponding error will be issued saying it is impossible to determine the required property."),Object(a.b)("h5",{id:"example-4"},"Example 4"),Object(a.b)("h6",{id:"condition-3"},"Condition"),Object(a.b)("p",null,"We need to implement an action that will generate a sound signal 5 times on the client machine."),Object(a.b)("h6",{id:"solution-3"},"Solution"),Object(a.b)("p",null,"The Java code for an action created using the ",Object(a.b)("strong",{parentName:"p"},"INTERNAL")," operator, runs on the server's virtual machine. So the signal cannot be called directly from the code of a class that inherits from ",Object(a.b)("strong",{parentName:"p"},"InternalAction"),". For this purpose there is a method called ",Object(a.b)("strong",{parentName:"p"},"requestUserInteraction"),", which must be passed a class that inherits from class ",Object(a.b)("strong",{parentName:"p"},"ClientAction"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Beep.java")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"import lsfusion.server.data.sql.exception.SQLHandledException;\nimport lsfusion.server.language.ScriptingLogicsModule;\nimport lsfusion.server.logics.action.controller.context.ExecutionContext;\nimport lsfusion.server.logics.property.classes.ClassPropertyInterface;\nimport lsfusion.server.physics.dev.integration.internal.to.InternalAction;\n\nimport java.sql.SQLException;\n\npublic class Beep extends InternalAction {\n\n    public Beep(ScriptingLogicsModule LM) {\n        super(LM);\n    }\n\n    @Override\n    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        String result = (String) context.requestUserInteraction(new ClientBeep(5));\n        System.out.println(result);\n    }\n}\n")),Object(a.b)("p",null,"The system halts code execution when this method is called, then passes ",Object(a.b)("strong",{parentName:"p"},"ClientBeep")," (and all classes it uses that are not present in JRE) to the client application, constructs an object with the parameters passed (in this case just the number 5), and calls its ",Object(a.b)("strong",{parentName:"p"},"dispatch")," method. Source code of class ",Object(a.b)("strong",{parentName:"p"},"ClientBeep"),":"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"ClientBeep.java")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'import lsfusion.interop.action.ClientAction;\nimport lsfusion.interop.action.ClientActionDispatcher;\n\nimport java.awt.*;\nimport java.io.IOException;\n\npublic class ClientBeep implements ClientAction {\n    \n    int times;\n\n    public ClientBeep(int times) {\n        this.times = times;\n    }\n\n    @Override\n    public Object dispatch(ClientActionDispatcher dispatcher) throws IOException {\n        for (int i = 0; i < times; i++) {\n            try {\n                Thread.sleep(1000);\n                Toolkit.getDefaultToolkit().beep();\n            } catch (InterruptedException ignored) {\n            }\n        }\n        return "succeed";\n    }\n}\n')),Object(a.b)("p",null,"The object returned by the ",Object(a.b)("strong",{parentName:"p"},"dispatch")," method is returned to the server as the result of executing the\xa0",Object(a.b)("strong",{parentName:"p"},"requestUserInteraction")," method. In this example, the message ",Object(a.b)("em",{parentName:"p"},"succeed")," will be displayed on the server's standard console. Thus, results of code execution on the client can be read on the server."),Object(a.b)("p",null,"Since java code cannot be executed directly in the browser, this action will only work with a desktop client."))}p.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);