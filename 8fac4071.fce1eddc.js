(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{282:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var s=a(3),i=a(7),n=(a(0),a(421)),o=a(56),r={title:"Tables"},l={unversionedId:"Tables",id:"Tables",isDocsHomePage:!1,title:"Tables",description:"For storing and calculating values of the properties the lsFusion platform uses a relational database. All data properties, as well as all calculated properties marked as materialized, are stored in the fields of the tables in the database. For each table, there is a set of key fields with the names key0, key1, ..., keyN, where the object IDs are stored. All other fields store property values in such a way that in the corresponding field of each row\xa0there is a property value for the objects with IDs from the key fields.\xa0Objects of\xa0built-in classes can also be used as table keys.",source:"@site/docs\\Tables.md",slug:"/Tables",permalink:"/docusaurustest/docs/Tables",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Tables.md",version:"current",sidebar:"docs",previous:{title:"Indexes",permalink:"/docusaurustest/docs/Indexes"},next:{title:"Management",permalink:"/docusaurustest/docs/Management"}},c=[{value:"Property table determining",id:"property-table-determining",children:[]},{value:"Table naming",id:"table-naming",children:[]},{value:"Field naming",id:"field-naming",children:[]},{value:"Default tables",id:"default-tables",children:[]},{value:"Default indexes",id:"default-indexes",children:[]},{value:"Full tables",id:"full-tables",children:[]},{value:"Storing belonging to the class",id:"storing-belonging-to-the-class",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(s.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"For storing and calculating values of the ",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Properties"}),"properties")," the ",Object(n.b)("strong",{parentName:"p"},"lsFusion")," platform uses a relational database. All ",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_properties_DATA"}),"data properties"),", as well as all calculated ",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Properties"}),"properties")," marked as ",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Materializations"}),"materialized"),", are stored in the fields of the ",Object(n.b)("em",{parentName:"p"},"tables")," in the database. For each table, there is a set of key fields with the names ",Object(n.b)("strong",{parentName:"p"},"key0"),", ",Object(n.b)("strong",{parentName:"p"},"key1"),", ..., ",Object(n.b)("strong",{parentName:"p"},"keyN"),", where the object IDs are stored. All other fields store property values in such a way that in the corresponding field of each row\xa0there is a property value for the objects with IDs from the key fields.\xa0Objects of\xa0built-in classes can also be used as table keys."),Object(n.b)("p",null,"When creating a table, you must specify a list of the object\xa0classes\xa0which will be the keys in this table."),Object(n.b)("h3",{id:"property-table-determining"},"Property table determining"),Object(n.b)("p",null,'For each property, you can specify in which table it should be stored. In this case, the number of the table keys must be equal to the number of property parameters, and the parameter classes must match the table key classes. If the table in which the property should be stored is not set explicitly, the property will be placed automatically to the "nearest" existing table in the system (i.e., which number of keys matches the number of the property parameters and the key classes are the closest to the parameter classes). Also if necessary, you can use the special option (',Object(n.b)("strong",{parentName:"p"},"NODEFAULT"),") to specify that when automatically determining property tables, this table should be ignored (i.e., a property can only be put into such a table explicitly using the corresponding option (",Object(n.b)("strong",{parentName:"p"},"TABLE"),"))."),Object(n.b)("h3",{id:"table-naming"},"Table naming"),Object(n.b)("p",null,"For each table created in the\xa0platform, a corresponding table is created in the database, which name, depending on the selected naming policy, is defined as follows:"),Object(n.b)("p",null,"[table was removed]"),Object(n.b)("p",null,"The naming policy is defined using the ",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Launch_parameters#namingpolicy-broken"}),"db.namingPolicy")," startup parameter."),Object(n.b)("h3",{id:"field-naming"},"Field naming"),Object(n.b)("p",null,"The values of each property are always stored exactly in one field, which name, depending on the selected naming policy, is defined as follows:"),Object(n.b)("p",null,"[table was removed]"),Object(n.b)("p",null,"If necessary, for each property, the developer can explicitly specify the name of the field in which this property will be stored. Also, it is possible to create a custom policy for naming property fields if the above does not suit for some reason."),Object(n.b)("p",null,"Using too short property naming policy (in case the number of materialized properties is large enough) can significantly complicate ",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Naming"}),"naming")," these properties (keeping them unique), or, accordingly, lead to the case when you will need to explicitly name the fields in which these properties will be stored too often."),Object(n.b)("p",null,"The naming policy is defined using the ",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Launch_parameters#namingpolicy-broken"}),"db.namingPolicy")," startup parameter."),Object(n.b)("h3",{id:"default-tables"},"Default tables"),Object(n.b)("p",null,"If the system cannot determine the table in which the property should be put, then a table with a name equal to ",Object(n.b)("strong",{parentName:"p"},"_","auto","_","<class ID 1 in the\xa0property signature",">","_","<class ID 2 in the\xa0property signature",">","_","...<class ID n\xa0in the\xa0property signature",">")," is automatically created. For example, for a property with class arguments DATE, Item.Item, Country.Country, INTEGER, the table ",Object(n.b)("strong",{parentName:"p"},"auto","_","DATE","_","Item","_","Item","_","Country","_","Country","_","INTEGER")," will be created.\xa0However, it is recommended to avoid situations when the default table is used and explicitly specify the tables in which properties will be stored."),Object(n.b)("p",null,"Also, it is possible to create a custom policy for naming tables in the platform if the basic policy does not suit for some reason."),Object(n.b)("h3",{id:"default-indexes"},"Default indexes"),Object(n.b)("p",null,"By default, a unique ",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Indexes"}),"index")," is built for each table by its key fields\xa0",Object(n.b)("strong",{parentName:"p"},"key0"),",\xa0",Object(n.b)("strong",{parentName:"p"},"key1"),", ...,\xa0",Object(n.b)("strong",{parentName:"p"},"keyN"),"\xa0named as\xa0",Object(n.b)("strong",{parentName:"p"},"pk","_","<table ID",">")," where N is the number of key fields in the table minus 1. Also indexes on key fields\xa0",Object(n.b)("strong",{parentName:"p"},"keyK"),", ...,\xa0",Object(n.b)("strong",{parentName:"p"},"keyN"),"\xa0with names like\xa0",Object(n.b)("strong",{parentName:"p"},"<table ID",">","_","keyK ","_","...","_"," keyN","_","idx")," are automatically added for all\xa0",Object(n.b)("strong",{parentName:"p"},"K"),"\xa0from 1 to\xa0",Object(n.b)("strong",{parentName:"p"},"N"),"."),Object(n.b)("h3",{id:"full-tables"},"Full tables"),Object(n.b)("p",null,"Let's say that the table is ",Object(n.b)("em",{parentName:"p"},"full")," if for each of its keys it contains all existing in the system objects of this key class. In general, the fullness of a table is specified explicitly using the special option (",Object(n.b)("strong",{parentName:"p"},"FULL"),") and is implemented via an implicit creation of a materialized ",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Classification_IS_AS"}),"classification")," property (we will call it the ",Object(n.b)("em",{parentName:"p"},"fullness")," property). However, in some cases, the platform may not create this property if it determines that the table already has properties which guarantee that it contains all the necessary objects (for example, the property of belonging to the class)."),Object(n.b)("p",null,"By default, the fullness property is named ",Object(n.b)("strong",{parentName:"p"},"_","FULL","_","TableName"),".\xa0Also, when defining the field name of this property, the short naming policy is used (since there can be exactly one such field in the table and there is no point in creating bulky names)."),Object(n.b)("p",null,"It is worth noting that the fullness of the table is important only from the execution optimization perspective (for example, the server knows that a certain table has all objects of the required class, and instead of LEFT JOIN uses INNER JOIN, which may be critical in some cases), and just as the table mechanism itself, it does not affect the logic of the system."),Object(n.b)("h3",{id:"storing-belonging-to-the-class"},"Storing belonging to the class"),Object(n.b)("p",null,"Belonging to the class is basic data similar to ",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_properties_DATA"}),"data")," properties. Thus, like data properties, this belonging is stored in the field of a certain table. At the same time, this table is determined similar to the table for the other materialized properties (assuming that the belonging to the class is a property with one parameter of this class), with the only difference being that at first only full tables are processed (i.e., they have higher priority), and only if no full tables are found, the remaining (not full) tables are processed."),Object(n.b)("p",null,"If a certain table for each of its keys\xa0stores the belonging to the class of all descendants of the class of this key, firstly it is automatically marked as full (even if it was not specified explicitly), and secondly, the fullness property is not created for it (it is assumed that the role of this property is fulfilled by the property of belonging to the class itself)."),Object(n.b)("p",null,"By default, the property of belonging to the class is named ",Object(n.b)("strong",{parentName:"p"},"_","CLASS","_","TableName"),". Also, when determining the field name of this property, the short naming policy is used (since there can be exactly one such field in the table and there is no point in creating bulky names)."),Object(n.b)("h3",{id:"language"},"Language"),Object(n.b)("p",null,"To create tables, use the\xa0",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/TABLE_instruction"}),Object(n.b)("strong",{parentName:"a"},"TABLE")," instruction"),". To specify the table which should store the property, use the ",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/Property_options"}),Object(n.b)("strong",{parentName:"a"},"TABLE")," option")," in the property options."),Object(n.b)("h3",{id:"examples"},"Examples"),Object(n.b)(o.CodeSample,{url:"http://documentation.lsfusion.org:5000/sample?file=InstructionSample&block=table",mdxType:"CodeSample"}))}b.isMDXComponent=!0}}]);