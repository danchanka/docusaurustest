(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),o=(n(0),n(424)),s={},i={unversionedId:"LSFUS/lsFusionMigration",id:"LSFUS/lsFusionMigration",isDocsHomePage:!1,title:"lsFusionMigration",description:"lsFusionMigration",source:"@site/docs\\LSFUS\\lsFusionMigration.md",slug:"/LSFUS/lsFusionMigration",permalink:"/docusaurustest/docs/LSFUS/lsFusionMigration",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionMigration.md",version:"current"},c=[],l={toc:c};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionmigration"},"lsFusionMigration"),Object(o.b)("h1",{id:"migration"},"Migration"),Object(o.b)("p",null,"An ",Object(o.b)("strong",{parentName:"p"},"lsFusion"),"-based information system uses a relational database management system for permanent data storage. It should be remembered that after certain changes to the system logic, the platform is unable to determine how the data should be migrated. In these cases, the developer must explicitly define the migration method by creating the special ",Object(o.b)("em",{parentName:"p"},"migration file")," ",Object(o.b)("strong",{parentName:"p"},"migration.script"),", which should be in the CLASSPATH of the application server."),Object(o.b)("p",null,"The migration file consists of blocks describing the changes made in the specified version of the database structure. At server startup, all changes from the migration file that have a version higher than the version stored in the database are applied. Changes are applied according to the version, from the lowest version to the highest. If the database structure is changed successfully, the maximum version of all applied blocks is written to the database as the current one. The syntax for the description of each block is as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"V<version number> {\n    change1\n    ...\n    changeN \n}\n")),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"version number")," is a set of one or more numbers separated by a dot. When comparing the numbers of two versions, the first numbers of the versions are compared first, then if equal the second are compared, and so on. If one version contains fewer numbers than another, during comparison zeros are added to the a version with fewer numbers. For example, version number ",Object(o.b)("strong",{parentName:"p"},"1.3")," is equivalent to number ",Object(o.b)("strong",{parentName:"p"},"1.3.0.0"),", and version ",Object(o.b)("strong",{parentName:"p"},"1.2")," is higher than version ",Object(o.b)("strong",{parentName:"p"},"1.1.3"),". In the migration file, the version number is indicated with a capital letter ",Object(o.b)("strong",{parentName:"p"},"V"),": ",Object(o.b)("strong",{parentName:"p"},"V1.0"),", ",Object(o.b)("strong",{parentName:"p"},"V2.0.11"),"."),Object(o.b)("p",null,"The migration file allows you to handle changes to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"Naming_35521066.html#Naming-canonicalname"}),"canonical names"),"\xa0of system elements, which occur when renaming and/or transferring to another namespace. Changes are of the following types:\xa0"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"PROPERTY oldNS.oldName[class1,...,classN] -> newNS.newName[class1,...,classN]\nSTORED PROPERTY oldNS.oldName[class1,...,classN] -> newNS.newName[class1,...,classN]\nFORM PROPERTY oldNS.oldFormName.oldName(object1,...,objectN) -> newNS.newFormName.newName(object1,...,objectN)  \nCLASS oldNS.oldName -> newNS.newName\nOBJECT oldNS.oldClassName.oldName -> newNS.newClassName.newName\nTABLE oldNS.oldName -> newNS.newName\nNAVIGATOR oldNS.oldName -> newNS.newName\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Changing the name of a property or action")),Object(o.b)("p",null,"When renaming a\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperties"}),"property"),"/",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionActions"}),"action")," and/or when moving it to another ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"Naming_35521066.html#Naming-namespace"}),"namespace"),", the canonical name of the property/action changes. Adding a\xa0",Object(o.b)("strong",{parentName:"p"},"PROPERTY\xa0"),"change to the migration file specifying the old and new canonical names will allow you to preserve the security policy settings, as well as settings from the ",Object(o.b)("strong",{parentName:"p"},"Reflection.properties")," table. If the property is ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionData_properties_DATA_"}),"primary"),", to preserve data when changing the canonical name of this property\xa0",Object(o.b)("strong",{parentName:"p"},"it is necessary")," to add\xa0a ",Object(o.b)("strong",{parentName:"p"},"STORED PROPERTY")," change. Then,\xa0when the server starts, the field corresponding to this property in the database table will be renamed.\xa0Otherwise, the old field will be renamed to the field with the name\xa0",Object(o.b)("strong",{parentName:"p"},"<","old ID",">","_","deleted")," (for example, when deleting a property), and a new field will be created with empty values. Apart from that the ",Object(o.b)("strong",{parentName:"p"},"STORED PROPERTY"),"\xa0type is equivalent to the ",Object(o.b)("strong",{parentName:"p"},"PROPERTY")," type."),Object(o.b)("p",null,"On the right side of ",Object(o.b)("strong",{parentName:"p"},"STORED PROPERTY")," and ",Object(o.b)("strong",{parentName:"p"},"PROPERTY")," changes it is not necessary to specify a signature, as here the signature is automatically taken from the left side."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Changing the name of a property/action on a form")),Object(o.b)("p",null,"When changing\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"Properties-and-actions-block_3866665.html#Propertiesandactionsblock-name"}),"the name of the property on a form"),"\xa0using the migration file, you can preserve information from the table settings for this property/action on the form. For this, the ",Object(o.b)("strong",{parentName:"p"},"FORM PROPERTY")," change type is used. The old and new names are the name of the form namespace, the name of the form, and the name of the property on the form, separated by dots. Also, using this type of change you can preserve information from the table settings when changing the canonical name of the form. To do this, add ",Object(o.b)("strong",{parentName:"p"},"FORM PROPERTY")," changes to the migration file for all properties/actions on the form with the changed canonical name of the form."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Changing the name of a custom class")),Object(o.b)("p",null,"When renaming a\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionUser_classes"}),"custom class")," and/or when moving it to another namespace, the canonical name of this class changes. In this case, it is ",Object(o.b)("strong",{parentName:"p"},"essential")," to reflect these changes in the migration file\xa0in order to preserve objects of this class and all data associated with these objects. To do this, add a ",Object(o.b)("strong",{parentName:"p"},"CLASS")," change to the migration file, specifying the old and new class names. This will also automatically rename ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionStatic_objects"}),"static objects")," of this class, if they exist.\xa0"),Object(o.b)("p",null,"It is worth noting that changing the canonical name of a class can lead to changes in the canonical names of data properties. At present these changes are not automatically tracked, and they must also be added to the migration file."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Changing the name of a static object")),Object(o.b)("p",null,"When renaming a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionStatic_objects"}),"static object"),", an ",Object(o.b)("strong",{parentName:"p"},"OBJECT")," change is used, which allows you to preserve data associated with the object. The old and new names are the name of the class namespace, the name of the class, and the name of the object, separated by dots.\xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Changing the name of a table")),Object(o.b)("p",null,"When renaming a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionTables"}),"table")," and/or when moving it to another namespace, the canonical name of this table changes. In this case, after creating a table with a new name, the system automatically moves all the records from the table with the old name in a separate request. However, if you add a ",Object(o.b)("strong",{parentName:"p"},"TABLE"),"\xa0change to the migration file, specifying the old and new canonical table names, a query will be executed to rename the old table, which will be significantly faster."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Changing the name of a navigator element")),Object(o.b)("p",null,"When renaming a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionNavigator"}),"navigator element"),"\xa0and/or when moving it to another namespace, the canonical name of this element changes. In order to preserve the security policy settings associated with this element,\xa0add a\xa0",Object(o.b)("strong",{parentName:"p"},"NAVIGATOR"),"\xa0change to the migration file, specifying the old and new canonical names of the navigator element.\xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Changing the name of a namespace")),Object(o.b)("p",null,"Since the name of a namespace is used in the canonical names of system elements, changing it causes the canonical names of the system elements included in it to change. Therefore, if a namespace name is changed, information on all the above elements must be placed in the migration file. The same must be done when moving system elements to different namespaces."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"migration.script")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"V0.3.1 {\n    STORED PROPERTY Item.gender[Item.Article] -> Item.dataGender[Item.Article] // change of DATA property \n    PROPERTY System.SIDProperty[Reflection.Property] -> Reflection.dbNameProperty[Reflection.Property] // parallel transferring to another namespace and changing of the property name\n    FORM PROPERTY Item.itemForm.name(i) -> Item.itemForm.itemName(i)\n}\n\xa0\nV0.4 {\n    FORM PROPERTY Document.documentForm.name(i) -> Document.itemForm.itemName(i)\n    FORM PROPERTY Item.itemForm.itemName(i) -> Item.itemForm.iname // adding of an explicit name for a property on a form\u0435: iname = itemName(i)\n    CLASS Date.DateInterval -> Date.Interval\n    OBJECT Geo.Direction.North -> Geo.Direction.north\n    TABLE User.oldTable -> User.newTable\n}\n")))}m.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),m=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(n),b=a,d=p["".concat(s,".").concat(b)]||p[b]||h[b]||o;return n?r.a.createElement(d,i(i({ref:t},l),{},{components:n})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);