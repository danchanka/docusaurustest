---
title: 'TABLE instruction'
---

The **TABLE** instruction creates an new [table](Tables.md).

**Syntax**

    TABLE name(className1, ..., classNameN) [FULL | NODEFAULT];

**Description**

The **TABLE ** instruction declares a new table and adds it to the current [module](Modules.md). 

  

**Parameters**

*name*

Table name. [Simple ID](IDs_1573053.html#IDs-id). The name must be unique within the current [namespace](Naming_35521066.html#Naming-namespace).

*className1, ..., classNameN*

List of class names. Each name is a [class ID](IDs_1573053.html#IDs-classname). Specifies classes for the key fields of the table being created. Cannot be empty,

*FULL*

The keyword that, when specified, marks the table as [full](Tables_688175.html#Tables-full) (that is, containing all objects belonging to the classes of the table's key fields).  

*NODEFAULT*

The keyword that, when specified, excludes the table from the process of automatic [property table determining](Tables_688175.html#Tables-property).

**Examples**

********************



  
