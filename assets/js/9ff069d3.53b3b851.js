(window.webpackJsonp=window.webpackJsonp||[]).push([[431],{505:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return o}));var a=n(3),l=n(7),s=(n(0),n(750)),c={title:"Naming"},r={unversionedId:"Naming",id:"Naming",isDocsHomePage:!1,title:"Naming",description:"Each\xa0system element may have a name which can be used to access the element.",source:"@site/docs/Naming.md",slug:"/Naming",permalink:"/docusaurustest/docs/next/Naming",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Naming.md",version:"current",sidebar:"docs",previous:{title:"Element identification: Overview",permalink:"/docusaurustest/docs/next/Element_identification"},next:{title:"Search",permalink:"/docusaurustest/docs/next/Search"}},b=[{value:"Namespaces",id:"namespace",children:[]},{value:"Uniqueness",id:"uniqueness",children:[]},{value:"Canonical names",id:"canonicalname",children:[]},{value:"Name policy",id:"name-policy",children:[]},{value:"Language",id:"language",children:[]}],i={toc:b};function o(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Each\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Element_identification"},"system element")," may have a ",Object(s.b)("em",{parentName:"p"},"name")," which can be used to ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Search"},"access")," the element."),Object(s.b)("h3",{id:"namespace"},"Namespaces"),Object(s.b)("p",null,"It is often necessary to use the same name in different contexts. In order not to include this context in the name itself (producing long and bulky names), the platform has the concept of ",Object(s.b)("em",{parentName:"p"},"namespaces"),". Each element is created in a namespace, and if other elements are accessed during the creation process then elements created in the same namespace take precedence. \xa0However, if you do need an element from another namespace, you can always specify the namespace of the element you are looking for explicitly. Also, you can specify additional namespaces that will take precedence when searching for items."),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"You can ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Search"},"find")," more details on how namespaces are used when\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Search"},"finding"),"\xa0elements in the relevant section."))),Object(s.b)("p",null,"The namespace in which elements are created is determined by the ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Modules"},"module"),", and cannot be changed in the future. The same limitation applies to additional priority namespaces."),Object(s.b)("p",null,"Each namespace has its own name, which is its unique ID. Accordingly, the string obtained by concatenating (via a dot) the name of its namespace with the name of each element itself will be called the element's ",Object(s.b)("em",{parentName:"p"},"full name"),".\xa0For example, if the namespace is called\xa0",Object(s.b)("strong",{parentName:"p"},"System"),", and inside it there is a class ",Object(s.b)("strong",{parentName:"p"},"Element"),", then the full name of this class will be ",Object(s.b)("strong",{parentName:"p"},"System.Element"),"."),Object(s.b)("h3",{id:"uniqueness"},"Uniqueness"),Object(s.b)("p",null,"Elements of the system must be named so that the system does not contain any two elements that cannot be distinguished from one another. In most cases, it is necessary and sufficient for the full name of the element to be unique. Exceptions to this rule are metacodes and properties / actions. So, for example, several metacodes may have the same full name if they differ in the number of parameters they take (properties / actions must have a different signature)."),Object(s.b)("h3",{id:"canonicalname"},"Canonical names"),Object(s.b)("p",null,"For some elements of the system, string\xa0",Object(s.b)("em",{parentName:"p"},"canonical names")," are determined and are unique among all elements of the given type\xa0within the system. For most system elements (user-defined classes, property groups, navigator elements, windows, tables) the canonical name is equivalent to the\xa0",Object(s.b)("em",{parentName:"p"},"full name"),"\xa0of that element of the system, which looks as follows:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"<namespace name>.<System element name>\n\nItem.name\nSale.Document\n")),Object(s.b)("p",null,"Since properties and actions can have the same names within the same namespace, the full name of a property may not be\xa0unique. Therefore, the canonical name of the properties / actions also includes a signature, that is, a list of the canonical names of the classes of the property / action's parameters, separated by commas. If a parameter's class is not determined, then the question mark character '",Object(s.b)("strong",{parentName:"p"},"?"),"' is used instead of the canonical class name:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"<namespace name>.<Property/action name> [<class1>,..., <classN>]\n\nItem.gender[Item.Article]\nDate.between [DATE, DATE, DATE]\nDocument.addHeader [Document. Document, STRING]\nMath.sum [?,?]\n")),Object(s.b)("p",null,"Since the signature of properties/actions do not have to contain only custom classes, canonical names are also determined for\xa0builtin classes:\xa0"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Class name"),Object(s.b)("th",{parentName:"tr",align:null},"Canonical name"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"INTEGER")),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"INTEGER"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"LONG")),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"LONG"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"DOUBLE")),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"DOUBLE"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"NUMERIC","[ , ]")),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"NUMERIC"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"BOOLEAN")),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"BOOLEAN"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"DATE")),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"DATE"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"DATETIME")),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"DATETIME"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"TIME")),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"TIME"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"YEAR")),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"YEAR"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"STRING, STRING","[ ]")),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"STRING"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"ISTRING, ISTRING","[ ]")),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"STRING"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"BPSTRING","[ ]")),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"STRING"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"BPISTRING","[ ]")),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"STRING"),"\xa0")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"TEXT")),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"STRING"),"\xa0")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"ITEXT")),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"STRING"),"\xa0")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"RICHTEXT")),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"STRING"),"\xa0")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"COLOR")),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"COLOR"))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"FILE,RAWFILE...")),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",null,"FILE,RAWFILE..."))))),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"In some cases, an element of the property signature may be not a single class but a set of classes. In this case, the canonical name will be more complex."))),Object(s.b)("h3",{id:"name-policy"},"Name policy"),Object(s.b)("p",null,"To avoid name collision, as well as for better readability, it is recommended that you use the following name policy:"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"System elements")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"The name must begin with a lowercase letter (excluding classes).")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"If the name consists of several words, then each subsequent word should begin with a capital letter. For example,\xa0",Object(s.b)("strong",{parentName:"p"},"myFirstName")," ,\xa0",Object(s.b)("strong",{parentName:"p"},"MySuperClass"),"."))),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Classes")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The name of each class should begin with a capital letter.")),Object(s.b)("h3",{id:"language"},"Language"),Object(s.b)("p",null,"Elements are named using ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#id-broken"},"simple IDs"),"."))}o.isMDXComponent=!0}}]);