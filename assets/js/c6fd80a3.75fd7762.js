(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{355:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(3),o=a(7),i=(a(0),a(424)),r={title:"Migration"},s={unversionedId:"Migration",id:"Migration",isDocsHomePage:!1,title:"Migration",description:"An lsFusion-based information system uses a relational database management system for permanent data storage. It should be remembered that after certain changes to the system logic, the platform is unable to determine how the data should be migrated. In these cases, the developer must explicitly define the migration method by creating the special migration file migration.script, which should be in the CLASSPATH of the application server.",source:"@site/docs/Migration.md",slug:"/Migration",permalink:"/docusaurustest/docs/Migration",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Migration.md",version:"current",sidebar:"docs",previous:{title:"Eval (EVAL)",permalink:"/docusaurustest/docs/Eval_EVAL_"},next:{title:"Internationalization",permalink:"/docusaurustest/docs/Internationalization"}},c=[{value:"Changing the name of a property or action",id:"changing-the-name-of-a-property-or-action",children:[]},{value:"Changing the name of a property/action on a form",id:"changing-the-name-of-a-propertyaction-on-a-form",children:[]},{value:"Changing the name of a custom class",id:"changing-the-name-of-a-custom-class",children:[]},{value:"Changing the name of a static object",id:"changing-the-name-of-a-static-object",children:[]},{value:"Changing the name of a table",id:"changing-the-name-of-a-table",children:[]},{value:"Changing the name of a navigator element",id:"changing-the-name-of-a-navigator-element",children:[]},{value:"Changing the name of a namespace",id:"changing-the-name-of-a-namespace",children:[]},{value:"Example",id:"example",children:[]},{value:"migration.script",id:"migrationscript",children:[]}],h={toc:c};function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"An ",Object(i.b)("strong",{parentName:"p"},"lsFusion"),"-based information system uses a relational database management system for permanent data storage. It should be remembered that after certain changes to the system logic, the platform is unable to determine how the data should be migrated. In these cases, the developer must explicitly define the migration method by creating the special ",Object(i.b)("em",{parentName:"p"},"migration file")," ",Object(i.b)("strong",{parentName:"p"},"migration.script"),", which should be in the CLASSPATH of the application server."),Object(i.b)("p",null,"The migration file consists of blocks describing the changes made in the specified version of the database structure. At server startup, all changes from the migration file that have a version higher than the version stored in the database are applied. Changes are applied according to the version, from the lowest version to the highest. If the database structure is changed successfully, the maximum version of all applied blocks is written to the database as the current one. The syntax for the description of each block is as follows:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"V<version number> {\n    change1\n    ...\n    changeN \n}\n")),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"version number")," is a set of one or more numbers separated by a dot. When comparing the numbers of two versions, the first numbers of the versions are compared first, then if equal the second are compared, and so on. If one version contains fewer numbers than another, during comparison zeros are added to the a version with fewer numbers. For example, version number ",Object(i.b)("strong",{parentName:"p"},"1.3")," is equivalent to number ",Object(i.b)("strong",{parentName:"p"},"1.3.0.0"),", and version ",Object(i.b)("strong",{parentName:"p"},"1.2")," is higher than version ",Object(i.b)("strong",{parentName:"p"},"1.1.3"),". In the migration file, the version number is indicated with a capital letter ",Object(i.b)("strong",{parentName:"p"},"V"),": ",Object(i.b)("strong",{parentName:"p"},"V1.0"),", ",Object(i.b)("strong",{parentName:"p"},"V2.0.11"),"."),Object(i.b)("p",null,"The migration file allows you to handle changes to ",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Naming#canonicalname"},"canonical names"),"\xa0of system elements, which occur when renaming and/or transferring to another namespace. Changes are of the following types:\xa0"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"PROPERTY oldNS.oldName[class1,...,classN] -> newNS.newName[class1,...,classN]\nSTORED PROPERTY oldNS.oldName[class1,...,classN] -> newNS.newName[class1,...,classN]\nFORM PROPERTY oldNS.oldFormName.oldName(object1,...,objectN) -> newNS.newFormName.newName(object1,...,objectN)  \nCLASS oldNS.oldName -> newNS.newName\nOBJECT oldNS.oldClassName.oldName -> newNS.newClassName.newName\nTABLE oldNS.oldName -> newNS.newName\nNAVIGATOR oldNS.oldName -> newNS.newName\n")),Object(i.b)("h3",{id:"changing-the-name-of-a-property-or-action"},"Changing the name of a property or action"),Object(i.b)("p",null,"When renaming a\xa0",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Properties"},"property"),"/",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"action")," and/or when moving it to another ",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Naming#namespace"},"namespace"),", the canonical name of the property/action changes. Adding a\xa0",Object(i.b)("strong",{parentName:"p"},"PROPERTY\xa0"),"change to the migration file specifying the old and new canonical names will allow you to preserve the security policy settings, as well as settings from the ",Object(i.b)("strong",{parentName:"p"},"Reflection.properties")," table. If the property is ",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Data_properties_DATA_"},"primary"),", to preserve data when changing the canonical name of this property\xa0",Object(i.b)("strong",{parentName:"p"},"it is necessary")," to add\xa0a ",Object(i.b)("strong",{parentName:"p"},"STORED PROPERTY")," change. Then,\xa0when the server starts, the field corresponding to this property in the database table will be renamed.\xa0Otherwise, the old field will be renamed to the field with the name\xa0",Object(i.b)("strong",{parentName:"p"},"<old ID",">","_","deleted")," (for example, when deleting a property), and a new field will be created with empty values. Apart from that the ",Object(i.b)("strong",{parentName:"p"},"STORED PROPERTY"),"\xa0type is equivalent to the ",Object(i.b)("strong",{parentName:"p"},"PROPERTY")," type."),Object(i.b)("p",null,"On the right side of ",Object(i.b)("strong",{parentName:"p"},"STORED PROPERTY")," and ",Object(i.b)("strong",{parentName:"p"},"PROPERTY")," changes it is not necessary to specify a signature, as here the signature is automatically taken from the left side."),Object(i.b)("h3",{id:"changing-the-name-of-a-propertyaction-on-a-form"},"Changing the name of a property/action on a form"),Object(i.b)("p",null,"When changing\xa0",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Properties_and_actions_block#name-broken"},"the name of the property on a form"),"\xa0using the migration file, you can preserve information from the table settings for this property/action on the form. For this, the ",Object(i.b)("strong",{parentName:"p"},"FORM PROPERTY")," change type is used. The old and new names are the name of the form namespace, the name of the form, and the name of the property on the form, separated by dots. Also, using this type of change you can preserve information from the table settings when changing the canonical name of the form. To do this, add ",Object(i.b)("strong",{parentName:"p"},"FORM PROPERTY")," changes to the migration file for all properties/actions on the form with the changed canonical name of the form."),Object(i.b)("h3",{id:"changing-the-name-of-a-custom-class"},"Changing the name of a custom class"),Object(i.b)("p",null,"When renaming a\xa0",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/User_classes"},"custom class")," and/or when moving it to another namespace, the canonical name of this class changes. In this case, it is ",Object(i.b)("strong",{parentName:"p"},"essential")," to reflect these changes in the migration file\xa0in order to preserve objects of this class and all data associated with these objects. To do this, add a ",Object(i.b)("strong",{parentName:"p"},"CLASS")," change to the migration file, specifying the old and new class names. This will also automatically rename ",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Static_objects"},"static objects")," of this class, if they exist.\xa0"),Object(i.b)("p",null,"It is worth noting that changing the canonical name of a class can lead to changes in the canonical names of data properties. At present these changes are not automatically tracked, and they must also be added to the migration file."),Object(i.b)("h3",{id:"changing-the-name-of-a-static-object"},"Changing the name of a static object"),Object(i.b)("p",null,"When renaming a ",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Static_objects"},"static object"),", an ",Object(i.b)("strong",{parentName:"p"},"OBJECT")," change is used, which allows you to preserve data associated with the object. The old and new names are the name of the class namespace, the name of the class, and the name of the object, separated by dots.\xa0"),Object(i.b)("h3",{id:"changing-the-name-of-a-table"},"Changing the name of a table"),Object(i.b)("p",null,"When renaming a ",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Tables"},"table")," and/or when moving it to another namespace, the canonical name of this table changes. In this case, after creating a table with a new name, the system automatically moves all the records from the table with the old name in a separate request. However, if you add a ",Object(i.b)("strong",{parentName:"p"},"TABLE"),"\xa0change to the migration file, specifying the old and new canonical table names, a query will be executed to rename the old table, which will be significantly faster."),Object(i.b)("h3",{id:"changing-the-name-of-a-navigator-element"},"Changing the name of a navigator element"),Object(i.b)("p",null,"When renaming a ",Object(i.b)("a",{parentName:"p",href:"/docusaurustest/docs/Navigator"},"navigator element"),"\xa0and/or when moving it to another namespace, the canonical name of this element changes. In order to preserve the security policy settings associated with this element,\xa0add a\xa0",Object(i.b)("strong",{parentName:"p"},"NAVIGATOR"),"\xa0change to the migration file, specifying the old and new canonical names of the navigator element.\xa0"),Object(i.b)("h3",{id:"changing-the-name-of-a-namespace"},"Changing the name of a namespace"),Object(i.b)("p",null,"Since the name of a namespace is used in the canonical names of system elements, changing it causes the canonical names of the system elements included in it to change. Therefore, if a namespace name is changed, information on all the above elements must be placed in the migration file. The same must be done when moving system elements to different namespaces."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("h3",{id:"migrationscript"},"migration.script"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"V0.3.1 {\n    STORED PROPERTY Item.gender[Item.Article] -> Item.dataGender[Item.Article] // change of DATA property \n    PROPERTY System.SIDProperty[Reflection.Property] -> Reflection.dbNameProperty[Reflection.Property] // parallel transferring to another namespace and changing of the property name\n    FORM PROPERTY Item.itemForm.name(i) -> Item.itemForm.itemName(i)\n}\n\xa0\nV0.4 {\n    FORM PROPERTY Document.documentForm.name(i) -> Document.itemForm.itemName(i)\n    FORM PROPERTY Item.itemForm.itemName(i) -> Item.itemForm.iname // adding of an explicit name for a property on a form\u0435: iname = itemName(i)\n    CLASS Date.DateInterval -> Date.Interval\n    OBJECT Geo.Direction.North -> Geo.Direction.north\n    TABLE User.oldTable -> User.newTable\n}\n")))}m.isMDXComponent=!0}}]);