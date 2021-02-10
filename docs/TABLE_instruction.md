---
title: 'TABLE instruction'
---

The **TABLE** instruction creates an new [table](Tables.md).

### Syntax

    TABLE name(className1, ..., classNameN) [FULL | NODEFAULT];

### Description

The **TABLE ** instruction declares a new table and adds it to the current [module](Modules.md). 

  

### Parameters

*name*

Table name. [Simple ID](IDs.md#id-broken). The name must be unique within the current [namespace](Naming.md#namespaces).

*className1, ..., classNameN*

List of class names. Each name is a [class ID](IDs.md#classname-broken). Specifies classes for the key fields of the table being created. Cannot be empty,

*FULL*

The keyword that, when specified, marks the table as [full](Tables.md#full-tables) (that is, containing all objects belonging to the classes of the table's key fields).  

*NODEFAULT*

The keyword that, when specified, excludes the table from the process of automatic [property table determining](Tables.md#property-table-determining).

### Examples



  
