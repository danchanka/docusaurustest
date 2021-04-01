(window.webpackJsonp=window.webpackJsonp||[]).push([[311,460],{384:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(749)),i=n(57),s={title:"How-to: INTERNAL"},c={unversionedId:"How-to_INTERNAL",id:"version-1.0.0/How-to_INTERNAL",isDocsHomePage:!1,title:"How-to: INTERNAL",description:"Example 1",source:"@site/versioned_docs/version-1.0.0/How-to_INTERNAL.md",slug:"/How-to_INTERNAL",permalink:"/docusaurustest/docs/How-to_INTERNAL",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/How-to_INTERNAL.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"How-to: FORMULA",permalink:"/docusaurustest/docs/How-to_FORMULA"},next:{title:"How-to: Use Cases: Overview",permalink:"/docusaurustest/docs/How-to_Use_Cases"}},l=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]},{value:"Example 2",id:"example-2-1",children:[{value:"Condition",id:"condition-2",children:[]},{value:"Solution",id:"solution-2",children:[]}]},{value:"Example 4",id:"example-4",children:[{value:"Condition",id:"condition-3",children:[]},{value:"Solution",id:"solution-3",children:[]}]}],p={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We need to implement an action that will display a message with the server's name and IP address."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseInternal&block=solution1",mdxType:"CodeSample"}),Object(a.b)("p",null,"To solve the task, create an action using the ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/INTERNAL_operator"},"INTERNAL")," operator which will generate an object of the \xa0",Object(a.b)("strong",{parentName:"p"},"GetIP"),' class (if the class has a package, then you must also specify "package" in the class name) and will call the ',Object(a.b)("strong",{parentName:"p"},"executeInternal")," method. The source code for this class will be as follows:"),Object(a.b)("h4",{id:"getipjava"},"GetIP.java"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'import lsfusion.server.data.sql.exception.SQLHandledException;\nimport lsfusion.server.language.ScriptingErrorLog;\nimport lsfusion.server.language.ScriptingLogicsModule;\nimport lsfusion.server.logics.action.controller.context.ExecutionContext;\nimport lsfusion.server.logics.property.classes.ClassPropertyInterface;\nimport lsfusion.server.physics.dev.integration.internal.to.InternalAction;\n\nimport java.net.InetAddress;\nimport java.net.UnknownHostException;\nimport java.sql.SQLException;\n\npublic class GetIP extends InternalAction {\n\n    public GetIP(ScriptingLogicsModule LM) {\n        super(LM);\n    }\n\n    @Override\n    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        try {\n            findProperty("ip").change(InetAddress.getLocalHost().toString(), context);\n        } catch (UnknownHostException | ScriptingErrorLog.SemanticErrorException ignored) {\n        }\n    }\n}\n')),Object(a.b)("p",null,"First, the action reads the server parameters using the built-in ",Object(a.b)("strong",{parentName:"p"},"InetAddress")," class. Then it finds the local property ",Object(a.b)("strong",{parentName:"p"},"ip")," declared in the same module as an action and writes the resulting value to it using the ",Object(a.b)("strong",{parentName:"p"},"change")," method."),Object(a.b)("p",null,"There is also an alternative way to set this property:"),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseInternal&block=solution1fusion",mdxType:"CodeSample"}),Object(a.b)("p",null,"The platform will generate the target class, insert the specified code into it and then compile it using the Janino ",Object(a.b)("a",{parentName:"p",href:"https://janino-compiler.github.io/janino/"},"compiler"),". The advantage of this approach is that building the project does not require a dedicated step for compiling the Java code. However, the approach has a number of significant limitations and can be used only in the simplest cases."),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"We need to implement an action that calculates the maximum common divisor of the two integers."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseInternal&block=solution2",mdxType:"CodeSample"}),Object(a.b)("p",null,"The key difference from the previous example is that the action has two ",Object(a.b)("strong",{parentName:"p"},"INTEGER")," arguments. Keep this in mind when writing your own ",Object(a.b)("strong",{parentName:"p"},"CalculateGCD")," class. Here is the source code:"),Object(a.b)("h4",{id:"calculategcdjava"},"CalculateGCD.java"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'import lsfusion.server.data.sql.exception.SQLHandledException;\nimport lsfusion.server.language.ScriptingErrorLog;\nimport lsfusion.server.language.ScriptingLogicsModule;\nimport lsfusion.server.logics.action.controller.context.ExecutionContext;\nimport lsfusion.server.logics.classes.ValueClass;\nimport lsfusion.server.logics.property.classes.ClassPropertyInterface;\nimport lsfusion.server.physics.dev.integration.internal.to.InternalAction;\n\nimport java.math.BigInteger;\nimport java.sql.SQLException;\n\npublic class CalculateGCD extends InternalAction {\n\n    public CalculateGCD(ScriptingLogicsModule LM, ValueClass... classes) {\n        super(LM, classes);\n    }\n\n    @Override\n    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        BigInteger b1 = BigInteger.valueOf((Integer)getParam(0, context));\n        BigInteger b2 = BigInteger.valueOf((Integer)getParam(1, context));\n        BigInteger gcd = b1.gcd(b2);\n        try {\n            findProperty("gcd[]").change(gcd.intValue(), context);\n        } catch (ScriptingErrorLog.SemanticErrorException ignored) {\n        }\n    }\n}\n')),Object(a.b)("p",null,"Values of input properties are read using the ",Object(a.b)("strong",{parentName:"p"},"getParam")," method, in which the first parameter passed is a 0-based index of the property to be read. This method returns an object of class ",Object(a.b)("strong",{parentName:"p"},"Object"),", so explicit type casting is required."),Object(a.b)("h2",{id:"example-2-1"},"Example 2"),Object(a.b)("h3",{id:"condition-2"},"Condition"),Object(a.b)("p",null,"We need to implement an action that calculates the greatest common divisor of two integers, but they are specified as properties for an object."),Object(a.b)("h3",{id:"solution-2"},"Solution"),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseInternal&block=solution3",mdxType:"CodeSample"}),Object(a.b)("p",null,"In this example we first need to read the values of the properties for the passed object, and then to write the result to a property with one input. This is done as follows:"),Object(a.b)("h4",{id:"calculategcdobjectjava"},"CalculateGCDObject.java"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'import lsfusion.server.data.sql.exception.SQLHandledException;\nimport lsfusion.server.data.value.DataObject;\nimport lsfusion.server.language.ScriptingErrorLog;\nimport lsfusion.server.language.ScriptingLogicsModule;\nimport lsfusion.server.logics.action.controller.context.ExecutionContext;\nimport lsfusion.server.logics.classes.ValueClass;\nimport lsfusion.server.logics.property.classes.ClassPropertyInterface;\nimport lsfusion.server.physics.dev.integration.internal.to.InternalAction;\n\nimport java.math.BigInteger;\nimport java.sql.SQLException;\n\npublic class CalculateGCDObject extends InternalAction {\n\n    public CalculateGCDObject(ScriptingLogicsModule LM, ValueClass... classes) {\n        super(LM, classes);\n    }\n\n    @Override\n    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        try {\n            DataObject calculation = (DataObject)getParamValue(0, context);\n            BigInteger a = BigInteger.valueOf((Integer)findProperty("a").read(context, calculation));\n            BigInteger b = BigInteger.valueOf((Integer)findProperty("b").read(context, calculation));\n            BigInteger gcd = a.gcd(b);\n            findProperty("gcd[Calculation]").change(gcd.intValue(), context, calculation);\n        } catch (ScriptingErrorLog.SemanticErrorException ignored) {\n        }\n    }\n}\n')),Object(a.b)("p",null,"The object that is passed is first written to the variable ",Object(a.b)("strong",{parentName:"p"},"calculation"),". This is done using the special ",Object(a.b)("strong",{parentName:"p"},"getParamValue")," method, which returns an object of class ",Object(a.b)("strong",{parentName:"p"},"DataObject"),". This stores the object's ID and class. It will then be used to read and write properties, by passing it as the last parameter to the ",Object(a.b)("strong",{parentName:"p"},"read")," and ",Object(a.b)("strong",{parentName:"p"},"change")," methods. If the property took several objects as input, every of them would need to be passed as the last parameter."),Object(a.b)("p",null,"The full canonical name of the property is used in the ",Object(a.b)("strong",{parentName:"p"},"findProperty")," method, because several ",Object(a.b)("strong",{parentName:"p"},"gcd")," properties are declared in the module. If you only specify the name, then a corresponding error will be issued saying it is impossible to determine the required property."),Object(a.b)("h2",{id:"example-4"},"Example 4"),Object(a.b)("h3",{id:"condition-3"},"Condition"),Object(a.b)("p",null,"We need to implement an action that will generate a sound signal 5 times on the client machine."),Object(a.b)("h3",{id:"solution-3"},"Solution"),Object(a.b)(i.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseInternal&block=solution4",mdxType:"CodeSample"}),Object(a.b)("p",null,"The Java code for an action created using the ",Object(a.b)("strong",{parentName:"p"},"INTERNAL")," operator, runs on the server's virtual machine. So the signal cannot be called directly from the code of a class that inherits from ",Object(a.b)("strong",{parentName:"p"},"InternalAction"),". For this purpose there is a method called ",Object(a.b)("strong",{parentName:"p"},"requestUserInteraction"),", which must be passed a class that inherits from class ",Object(a.b)("strong",{parentName:"p"},"ClientAction"),"."),Object(a.b)("h4",{id:"beepjava"},"Beep.java"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"import lsfusion.server.data.sql.exception.SQLHandledException;\nimport lsfusion.server.language.ScriptingLogicsModule;\nimport lsfusion.server.logics.action.controller.context.ExecutionContext;\nimport lsfusion.server.logics.property.classes.ClassPropertyInterface;\nimport lsfusion.server.physics.dev.integration.internal.to.InternalAction;\n\nimport java.sql.SQLException;\n\npublic class Beep extends InternalAction {\n\n    public Beep(ScriptingLogicsModule LM) {\n        super(LM);\n    }\n\n    @Override\n    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {\n        String result = (String) context.requestUserInteraction(new ClientBeep(5));\n        System.out.println(result);\n    }\n}\n")),Object(a.b)("p",null,"The system halts code execution when this method is called, then passes ",Object(a.b)("strong",{parentName:"p"},"ClientBeep")," (and all classes it uses that are not present in JRE) to the client application, constructs an object with the parameters passed (in this case just the number 5), and calls its ",Object(a.b)("strong",{parentName:"p"},"dispatch")," method. Source code of class ",Object(a.b)("strong",{parentName:"p"},"ClientBeep"),":"),Object(a.b)("h4",{id:"clientbeepjava"},"ClientBeep.java"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'import lsfusion.interop.action.ClientAction;\nimport lsfusion.interop.action.ClientActionDispatcher;\n\nimport java.awt.*;\nimport java.io.IOException;\n\npublic class ClientBeep implements ClientAction {\n    \n    int times;\n\n    public ClientBeep(int times) {\n        this.times = times;\n    }\n\n    @Override\n    public Object dispatch(ClientActionDispatcher dispatcher) throws IOException {\n        for (int i = 0; i < times; i++) {\n            try {\n                Thread.sleep(1000);\n                Toolkit.getDefaultToolkit().beep();\n            } catch (InterruptedException ignored) {\n            }\n        }\n        return "succeed";\n    }\n}\n')),Object(a.b)("p",null,"The object returned by the ",Object(a.b)("strong",{parentName:"p"},"dispatch")," method is returned to the server as the result of executing the\xa0",Object(a.b)("strong",{parentName:"p"},"requestUserInteraction")," method. In this example, the message ",Object(a.b)("em",{parentName:"p"},"succeed")," will be displayed on the server's standard console. Thus, results of code execution on the client can be read on the server."),Object(a.b)("p",null,"Since java code cannot be executed directly in the browser, this action will only work with a desktop client."))}u.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"CodeSample",(function(){return d})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),a=n(0),i=n.n(a),s=n(749),c=n(753),l={},p={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},u=[],d=function(e){var t=e.url,n=e.lines,o=Object(a.useState)(""),r=o[0],l=o[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),r?n?Object(s.b)(i.a.Fragment,null,Object(s.b)(c.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},r),Object(s.b)("br",null)):Object(s.b)(i.a.Fragment,null,Object(s.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},r),Object(s.b)("br",null)):Object(s.b)(c.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},m={toc:u,CodeSample:d};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}))}b.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},751:function(e,t,n){"use strict";var o=n(0),r=n(754);t.a=function(){var e=Object(o.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},752:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},753:function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var o=n(3),r=n(0),a=n.n(r),i=n(755),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(23).a,theme:s};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},b=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=p({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=p({},n,{backgroundColor:null}),r};function h(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var g=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?b(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=p({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==r&&(a.style=void 0!==a.style?p({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),l(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var i=o?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(s))}})),l(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,i=p({},h(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?p({},i.style,r):r),void 0!==n&&(i.key=n),o&&(i.className+=" "+o),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,i=0,s=[],c=[s];i>-1;){for(;(a=o[i]++)<r[i];){var l=void 0,p=t[i],b=n[i][a];if("string"==typeof b?(p=i>0?p:["plain"],l=b):(p=m(p,b.type),b.alias&&(p=m(p,b.alias)),l=b.content),"string"==typeof l){var h=l.split(u),g=h.length;s.push({types:p,content:h[0]});for(var f=1;f<g;f++)d(s),c.push(s=[]),s.push({types:p,content:h[f]})}else i++,t.push(p),n.push(l),o.push(0),r.push(l.length)}i--,t.pop(),n.pop(),o.pop(),r.pop()}return d(s),c}(void 0!==i?t.tokenize(o,i,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var f=n(752),y=n.n(f),v={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(751),O=n(750),x=function(){var e=Object(O.useThemeConfig)().prism,t=Object(j.a)().isDarkTheme,n=e.theme||v,o=e.darkTheme||n;return t?o:n},C=n(756),E=n(58),w=n.n(E),S=/{([\d,-]+)}/,k=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+o+")\\s*$")},I=/(?:title=")(.*)(?:")/;function N(e){var t=e.children,n=e.className,s=e.metastring,l=Object(O.useThemeConfig)().prism,p=Object(r.useState)(!1),u=p[0],d=p[1],m=Object(r.useState)(!1),b=m[0],h=m[1];Object(r.useEffect)((function(){h(!0)}),[]);var f=Object(r.useRef)(null),v=[],j="",E=x(),N=Array.isArray(t)?t.join(""):t;if(s&&S.test(s)){var T=s.match(S)[1];v=y()(T).filter((function(e){return e>0}))}s&&I.test(s)&&(j=s.match(I)[1]);var L=n&&n.replace(/language-/,"");!L&&l.defaultLanguage&&(L=l.defaultLanguage);var P=N.replace(/\n$/,"");if(0===v.length&&void 0!==L){for(var B,A="",D=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return k(["js","jsBlock"]);case"jsx":case"tsx":return k(["js","jsBlock","jsx"]);case"html":return k(["js","jsBlock","html"]);case"python":case"py":return k(["python"]);default:return k()}}(L),H=N.replace(/\n$/,"").split("\n"),M=0;M<H.length;){var R=M+1,_=H[M].match(D);if(null!==_){switch(_.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":A+=R+",";break;case"highlight-start":B=R;break;case"highlight-end":A+=B+"-"+(R-1)+","}H.splice(M,1)}else M+=1}v=y()(A),P=H.join("\n")}var Q=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let a=!1;r.rangeCount>0&&(a=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}n.remove(),a&&(r.removeAllRanges(),r.addRange(a)),o&&o.focus()}(P),d(!0),setTimeout((function(){return d(!1)}),2e3)};return a.a.createElement(g,Object(o.a)({},c,{key:String(b),theme:E,code:P,language:L}),(function(e){var t,n=e.className,r=e.style,s=e.tokens,c=e.getLineProps,l=e.getTokenProps;return a.a.createElement("div",{className:w.a.codeBlockContainer},j&&a.a.createElement("div",{style:r,className:w.a.codeBlockTitle},j),a.a.createElement("div",{className:Object(i.a)(w.a.codeBlockContent,L)},a.a.createElement("div",{tabIndex:0,className:Object(i.a)(n,w.a.codeBlock,"thin-scrollbar",(t={},t[w.a.codeBlockWithTitle]=j,t))},a.a.createElement("div",{className:w.a.codeBlockLines,style:r},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(o.a)({key:t},n),e.map((function(e,t){return a.a.createElement("span",Object(o.a)({key:t},l({token:e,key:t})))})))})))),a.a.createElement("button",{ref:f,type:"button","aria-label":Object(C.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(i.a)(w.a.copyButton),onClick:Q},u?a.a.createElement(C.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(C.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},754:function(e,t,n){"use strict";var o=n(0),r=n.n(o).a.createContext(void 0);t.a=r}}]);