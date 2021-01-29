(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{424:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||i;return n?o.a.createElement(m,c(c({ref:t},p),{},{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(424)),a={title:"How-to: INTERNAL"},c={unversionedId:"LSFUS/How-to_INTERNAL",id:"LSFUS/How-to_INTERNAL",isDocsHomePage:!1,title:"How-to: INTERNAL",description:"Example 1",source:"@site/docs\\LSFUS\\How-to_INTERNAL.md",slug:"/LSFUS/How-to_INTERNAL",permalink:"/docusaurustest/docs/LSFUS/How-to_INTERNAL",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/How-to_INTERNAL.md",version:"current"},s=[],p={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"example-1"},"Example 1"),Object(i.b)("h6",{id:"condition"},"Condition"),Object(i.b)("p",null,"We need to implement an action that will display a message with the server's name and IP address."),Object(i.b)("h6",{id:"solution"},"Solution"),Object(i.b)("p",null,"The Java code for an action created using the ",Object(i.b)("strong",{parentName:"p"},"INTERNAL")," operator, runs on the server's virtual machine. So the signal cannot be called directly from the code of a class that inherits from ",Object(i.b)("strong",{parentName:"p"},"InternalAction"),". For this purpose there is a method called ",Object(i.b)("strong",{parentName:"p"},"requestUserInteraction"),", which must be passed a class that inherits from class ",Object(i.b)("strong",{parentName:"p"},"ClientAction"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Beep.java")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"import lsfusion.server.data.sql.exception.SQLHandledException;\nimport lsfusion.server.language.ScriptingLogicsModule;\nimport lsfusion.server.logics.action.controller.context.ExecutionContext;\nimport lsfusion.server.logics.property.classes.ClassPropertyInterface;\nimport lsfusion.server.physics.dev.integration.internal.to.InternalAction;\n\nimport java.sql.SQLException;\n\npublic class Beep extends InternalAction {\n\n    public Beep(ScriptingLogicsModule LM) {\n        super(LM);\n    }\n\n    @Override\n    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        String result = (String) context.requestUserInteraction(new ClientBeep(5));\n        System.out.println(result);\n    }\n}\n")),Object(i.b)("p",null,"The system halts code execution when this method is called, then passes ",Object(i.b)("strong",{parentName:"p"},"ClientBeep")," (and all classes it uses that are not present in JRE) to the client application, constructs an object with the parameters passed (in this case just the number 5), and calls its ",Object(i.b)("strong",{parentName:"p"},"dispatch")," method. Source code of class ",Object(i.b)("strong",{parentName:"p"},"ClientBeep"),":"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"ClientBeep.java")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'import lsfusion.interop.action.ClientAction;\nimport lsfusion.interop.action.ClientActionDispatcher;\n\nimport java.awt.*;\nimport java.io.IOException;\n\npublic class ClientBeep implements ClientAction {\n    \n    int times;\n\n    public ClientBeep(int times) {\n        this.times = times;\n    }\n\n    @Override\n    public Object dispatch(ClientActionDispatcher dispatcher) throws IOException {\n        for (int i = 0; i < times; i++) {\n            try {\n                Thread.sleep(1000);\n                Toolkit.getDefaultToolkit().beep();\n            } catch (InterruptedException ignored) {\n            }\n        }\n        return "succeed";\n    }\n}\n')),Object(i.b)("p",null,"The object returned by the ",Object(i.b)("strong",{parentName:"p"},"dispatch")," method is returned to the server as the result of executing the\xa0",Object(i.b)("strong",{parentName:"p"},"requestUserInteraction")," method. In this example, the message ",Object(i.b)("em",{parentName:"p"},"succeed")," will be displayed on the server's standard console. Thus, results of code execution on the client can be read on the server."),Object(i.b)("p",null,"Since java code cannot be executed directly in the browser, this action will only work with a desktop client."))}l.isMDXComponent=!0}}]);