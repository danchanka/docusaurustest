---
title: 'GROUP instruction'
---

The **GROUP** instruction creates a new [property group](Groups_of_properties_and_actions.md).

**Syntax**

    GROUP name [caption] [EXTID extID] [: parentName];

**Description**

The  **GROUP **instruction declares a new property group and adds it to the current [module](Modules.md).  

**Parameters**

*name *

Group name. [Simple ID](IDs_1573053.html#IDs-id-Синтаксическиеэлементы-id). The name must be unique within the current [namespace](Naming_35521066.html#Naming-namespace).

*caption*

Group caption. [String literal](Literals_35521071.html#Literals-strliteral). If the caption is not defined, the name of the group will be its caption.  

*EXTID extID*

Specifying the name to be used to [export/import](Structured-view_29884537.html#Structuredview-extid) this property group. Used only in the [structured](Structured_view.md) view.

*extId*

String literal.

*parentName*

Name of the parent group. [Сomposite ID](IDs_1573053.html#IDs-id-Синтаксическиеэлементы-cid). If the name of the parent group is not defined, the **System.private** group becomes the parent.  

**Examples**



**  
**
