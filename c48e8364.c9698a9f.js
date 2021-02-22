(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{344:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return r}));var n=a(3),s=a(7),c=(a(0),a(421)),i={title:"Naming"},o={unversionedId:"Naming",id:"Naming",isDocsHomePage:!1,title:"Naming",description:"Each\xa0system element may have a name which can be used to access the element.",source:"@site/docs\\Naming.md",slug:"/Naming",permalink:"/docusaurustest/docs/Naming",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Naming.md",version:"current",sidebar:"docs",previous:{title:"Element identification",permalink:"/docusaurustest/docs/Element_identification"},next:{title:"Search",permalink:"/docusaurustest/docs/Search"}},l=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Uniqueness",id:"uniqueness",children:[]},{value:"Canonical names",id:"canonical-names",children:[]},{value:"Name policy",id:"name-policy",children:[]},{value:"Language",id:"language",children:[]}],m={toc:l};function r(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Each\xa0",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Element_identification"}),"system element")," may have a ",Object(c.b)("em",{parentName:"p"},"name")," which can be used to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Search"}),"access")," the element."),Object(c.b)("h3",{id:"namespaces"},"Namespaces"),Object(c.b)("p",null,"It is often necessary to use the same name in different contexts. In order not to include this context in the name itself (producing long and bulky names), the platform has the concept of ",Object(c.b)("em",{parentName:"p"},"namespaces"),". Each element is created in a namespace, and if other elements are accessed during the creation process then elements created in the same namespace take precedence. \xa0However, if you do need an element from another namespace, you can always specify the namespace of the element you are looking for explicitly. Also, you can specify additional namespaces that will take precedence when searching for items."),Object(c.b)("p",null,"You can ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Search"}),"find")," more details on how namespaces are used when\xa0",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Search"}),"finding"),"\xa0elements in the relevant section."),Object(c.b)("p",null,"The namespace in which elements are created is determined by the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Modules"}),"module"),", and cannot be changed in the future. The same limitation applies to additional priority namespaces."),Object(c.b)("p",null,"Each namespace has its own name, which is its unique ID. Accordingly, the string obtained by concatenating (via a dot) the name of its namespace with the name of each element itself will be called the element's ",Object(c.b)("em",{parentName:"p"},"full name"),".\xa0For example, if the namespace is called\xa0",Object(c.b)("strong",{parentName:"p"},"System"),", and inside it there is a class ",Object(c.b)("strong",{parentName:"p"},"Element"),", then the full name of this class will be ",Object(c.b)("strong",{parentName:"p"},"System.Element"),"."),Object(c.b)("h3",{id:"uniqueness"},"Uniqueness"),Object(c.b)("p",null,"Elements of the system must be named so that the system does not contain any two elements that cannot be distinguished from one another. In most cases, it is necessary and sufficient for the full name of the element to be unique. Exceptions to this rule are metacodes and properties / actions. So, for example, several metacodes may have the same full name if they differ in the number of parameters they take (properties / actions must have a different signature)."),Object(c.b)("h3",{id:"canonical-names"},"Canonical names"),Object(c.b)("p",null,"For some elements of the system, string\xa0",Object(c.b)("em",{parentName:"p"},"canonical names")," are determined and are unique among all elements of the given type\xa0within the system. For most system elements (user-defined classes, property groups, navigator elements, windows, tables) the canonical name is equivalent to the\xa0",Object(c.b)("em",{parentName:"p"},"full name"),"\xa0of that element of the system, which looks as follows:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"<namespace name>.<System element name>\n\nItem.name\nSale.Document\n")),Object(c.b)("p",null,"Since properties and actions can have the same names within the same namespace, the full name of a property may not be\xa0unique. Therefore, the canonical name of the properties / actions also includes a signature, that is, a list of the canonical names of the classes of the property / action's parameters, separated by commas. If a parameter's class is not determined, then the question mark character '",Object(c.b)("strong",{parentName:"p"},"?"),"' is used instead of the canonical class name:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"<namespace name>.<Property/action name> [<class1>,..., <classN>]\n\nItem.gender[Item.Article]\nDate.between [DATE, DATE, DATE]\nDocument.addHeader [Document. Document, STRING]\nMath.sum [?,?]\n")),Object(c.b)("p",null,"Since the signature of properties/actions do not have to contain only custom classes, canonical names are also determined for\xa0builtin classes:\xa0"),Object(c.b)("p",null,"[table was removed]"),Object(c.b)("p",null,"In some cases, an element of the property signature may be not a single class but a set of classes. In this case, the canonical name will be more complex."),Object(c.b)("h3",{id:"name-policy"},"Name policy"),Object(c.b)("p",null,"To avoid name collision, as well as for better readability, it is recommended that you use the following name policy:"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"System elements")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"The name must begin with a lowercase letter (excluding classes).")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"If the name consists of several words, then each subsequent word should begin with a capital letter. For example,\xa0",Object(c.b)("strong",{parentName:"p"},"myFirstName")," ,\xa0",Object(c.b)("strong",{parentName:"p"},"MySuperClass"),"."))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Classes")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The name of each class should begin with a capital letter.")),Object(c.b)("h3",{id:"language"},"Language"),Object(c.b)("p",null,"Elements are named using ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#id-broken"}),"simple IDs"),"."))}r.isMDXComponent=!0}}]);