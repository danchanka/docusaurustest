(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{363:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return m}));var a=n(3),s=n(7),r=(n(0),n(423)),o={},c={unversionedId:"LSFUS/lsFusionNaming",id:"LSFUS/lsFusionNaming",isDocsHomePage:!1,title:"lsFusionNaming",description:"lsFusionNaming",source:"@site/docs\\LSFUS\\lsFusionNaming.md",slug:"/LSFUS/lsFusionNaming",permalink:"/docusaurustest/docs/LSFUS/lsFusionNaming",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/LSFUS/lsFusionNaming.md",version:"current"},i=[],l={toc:i};function m(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"lsfusionnaming"},"lsFusionNaming"),Object(r.b)("h1",{id:"naming"},"Naming"),Object(r.b)("p",null,"Each\xa0",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionElement_identification"}),"system element")," may have a ",Object(r.b)("em",{parentName:"p"},"name")," which can be used to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionSearch"}),"access")," the element."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Namespaces")),Object(r.b)("p",null,"It is often necessary to use the same name in different contexts. In order not to include this context in the name itself (producing long and bulky names), the platform has the concept of ",Object(r.b)("em",{parentName:"p"},"namespaces"),". Each element is created in a namespace, and if other elements are accessed during the creation process then elements created in the same namespace take precedence. \xa0However, if you do need an element from another namespace, you can always specify the namespace of the element you are looking for explicitly. Also, you can specify additional namespaces that will take precedence when searching for items."),Object(r.b)("p",null,"You can ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionSearch"}),"find")," more details on how namespaces are used when\xa0",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionSearch"}),"finding"),"\xa0elements in the relevant section."),Object(r.b)("p",null,"The namespace in which elements are created is determined by the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionModules"}),"module"),", and cannot be changed in the future. The same limitation applies to additional priority namespaces."),Object(r.b)("p",null,"Each namespace has its own name, which is its unique ID. Accordingly, the string obtained by concatenating (via a dot) the name of its namespace with the name of each element itself will be called the element's ",Object(r.b)("em",{parentName:"p"},"full name"),".\xa0For example, if the namespace is called\xa0",Object(r.b)("strong",{parentName:"p"},"System"),", and inside it there is a class ",Object(r.b)("strong",{parentName:"p"},"Element"),", then the full name of this class will be ",Object(r.b)("strong",{parentName:"p"},"System.Element"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Uniqueness")),Object(r.b)("p",null,"Elements of the system must be named so that the system does not contain any two elements that cannot be distinguished from one another. In most cases, it is necessary and sufficient for the full name of the element to be unique. Exceptions to this rule are metacodes and properties / actions. So, for example, several metacodes may have the same full name if they differ in the number of parameters they take (properties / actions must have a different signature)."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Canonical names")),Object(r.b)("p",null,"For some elements of the system, string\xa0",Object(r.b)("em",{parentName:"p"},"canonical names")," are determined and are unique among all elements of the given type\xa0within the system. For most system elements (user-defined classes, property groups, navigator elements, windows, tables) the canonical name is equivalent to the\xa0",Object(r.b)("em",{parentName:"p"},"full name"),"\xa0of that element of the system, which looks as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"<namespace name>.<System element name>\n\nItem.name\nSale.Document\n")),Object(r.b)("p",null,"Since properties and actions can have the same names within the same namespace, the full name of a property may not be\xa0unique. Therefore, the canonical name of the properties / actions also includes a signature, that is, a list of the canonical names of the classes of the property / action's parameters, separated by commas. If a parameter's class is not determined, then the question mark character '",Object(r.b)("strong",{parentName:"p"},"?"),"' is used instead of the canonical class name:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"<namespace name>.<Property/action name> [<class1>,..., <classN>]\n\nItem.gender[Item.Article]\nDate.between [DATE, DATE, DATE]\nDocument.addHeader [Document. Document, STRING]\nMath.sum [?,?]\n")),Object(r.b)("p",null,"Since the signature of properties/actions do not have to contain only custom classes, canonical names are also determined for\xa0builtin classes:\xa0"),Object(r.b)("p",null,"In some cases, an element of the property signature may be not a single class but a set of classes. In this case, the canonical name will be more complex."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Name policy")),Object(r.b)("p",null,"To avoid name collision, as well as for better readability, it is recommended that you use the following name policy:"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"System elements")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The name must begin with a lowercase letter (excluding classes).")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If the name consists of several words, then each subsequent word should begin with a capital letter. For example,\xa0",Object(r.b)("strong",{parentName:"p"},"myFirstName")," ,\xa0",Object(r.b)("strong",{parentName:"p"},"MySuperClass"),"."))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Classes")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The name of each class should begin with a capital letter.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Language")),Object(r.b)("p",null,"Elements are named using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id"}),"simple IDs"),"."))}m.isMDXComponent=!0},423:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),s=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),m=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=m(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},b=s.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=m(n),b=a,d=p["".concat(o,".").concat(b)]||p[b]||u[b]||r;return n?s.a.createElement(d,c(c({ref:t},l),{},{components:n})):s.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);