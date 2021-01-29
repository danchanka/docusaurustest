---
title: 'Object blocks'
---

Object block of the [FORM instruction](FORM_instruction.md)  adds [objects](#Objectblocks-objects) (including object groups) to the form structure, as well as [object trees](#Objectblocks-tree) to the interactive form view.

**Object block**

**Syntax**

    OBJECTS groupDeclaration1 [groupOptions1], ...., groupDeclarationN [groupOptionsN]

Each *groupDeclaration *is a declaration of an object group consisting of several objects:

    [groupName =] (objectDeclaration1, ..., objectDeclarationK)

 or an object group consisting of a single object:

    objectDeclaration

Each *objectDeclaration* declaring an object has the following syntax:

    [[name] [caption] =] classId [ON CHANGE actionId(param1, ..., paramM) | { actionOperator } ]

The declaration of each object group may be followed by a set of options called *groupOptions*:

    viewType
    INIT | FIXED
    PAGESIZE pageSize 
    AFTER groupName
    BEFORE groupName
    defaultObjectsType
    IN propertyGroup
    EXTID extID
    SUBREPORT [subReportExpression]

**Description**

A single **OBJECTS** block can contain several comma-delimited declarations of [object groups](Interactive-view_1573071.html#Interactiveview-objects). An object group can contain just one object or several ones. In case of a single object, you can use simplified syntax without specifying the name of an object group and using parentheses. The declaration of an object group may be followed by the options of this group. They are listed one after another in an arbitrary order.

**Parameters**

*groupName*

Name of an object group. [Simple ID](IDs_1573053.html#IDs-id). Must be specified if you need to access an object group consisting of several objects. If an object group consists of a single object, the name of the object group will be equal to the name of the object and doesn't need to be specified.

*name*

Object name. Simple ID. Must be specified if the object class is a [built-in class](Built-in_classes.md). If the object class is a [custom class](User_classes.md), the name doesn't need to be specified. In this case, it will be equal to the name of the class object. 

*classId*

[Object class ID](IDs_1573053.html#IDs-classid) . 

*caption*

Caption of the object being added. [String literal](Literals_35521071.html#Literals-strliteral). If the caption is not specified, the class caption will become the object caption.

*ON CHANGE actionName(param1, ..., paramM) | { actionOperator }*

Specifying an [action](Actions.md) that will be called when the current object value is changed.

*actionID*

[Action ID](IDs_1573053.html#IDs-propertyid).

*param1, ..., paramM*

A list of object names on the form that will be used as action parameters. The number of these objects must be equal to the number of action parameters. The name of the object is defined with a [simple ID](IDs_1573053.html#IDs-id-Идентификаторы-id).

*actionOperator*

[Context-dependent action operator](Action-operator_36307157.html#Actionoperator-contextdependent). You can use the names of already declared objects on the form as parameters.

***Object group options***

*viewType*

[Default view](Interactive-view_1573071.html#Interactiveview-defaultPropertyView) for an object group. It is specified with one of the keywords:

-   **PANEL** - *panel* view.
-   **TOOLBAR** - toolbar display mode.
-   **GRID*** - tablecolumn*  view;. Used by default.

*PAGESIZE* pageSize

Specification of the number of readable objects in the table. By default, the quantity is determined dynamically depending on the size of the component in the user interface and equals to 3\*&lt;number of visible rows in the table&gt;. A value of 0 means that all objects must be read.

*pageSize*

Number of objects read. [Integer literal](Literals_35521071.html#Literals-intliteral).

*AFTER* groupName

*BEFORE* groupName

Specifying that the object tree should be added to the form structure immediately before (keyword **BEFORE**) or after (keyword **AFTER**) of a specified object group. Typically used with the [form extension](Form_extension.md) mechanism . If a group is added before the group in a tree, then this group should the first in this tree. Accordingly, if a group is added after the group in a tree, this group should be the last in this tree.

*groupName*

[Object group name](#Objectblocks-groupName). 

*defaultObjectsType*

Specifying which object collection from the added object group will be current after the change of the active filters:

-   **FIRST**– specifies that the first object collection will be the [default objects](Interactive-view_1573071.html#Interactiveview-defaultobject)
-   **LAST** - last one
-   **PREV** - previous one

If this option is not specified, the platform determines the option to be used depending on the current filters.

*IN** **propertyGroup*

Specifying the [property/action group](Groups_of_properties_and_actions.md) that the object group belongs to. Used only in the [hierarchical](Structured-view_29884537.html#Structuredview-hierarchy) view.

**propertyGroup* – *the property group name. [Composite ID](IDs_1573053.html#IDs-cid).

*EXTID extID*

Specifying the name to be used for [export/import](Structured-view_29884537.html#Structuredview-extid) operations performed by this object group. Used only in the [structured](Structured_view.md) view.

*extId*

String literal.

*SUBREPORT*

Specifies that you need to generate a separate [report](Print_view.md) file for this object group while [building the report hierarchy](Print-view_1573073.html#Printview-buildhierarchy).

*subReportExpression*

The expression whose value will be used as the name of the  [report](Print_view.md) file for the created object group. You can use the names of already declared objects on the form as parameters. It is assumed that the values of these objects will be [passed](Open-form_3014672.html#Openform-params) when the form is opened [in the print view](In_a_print_view_PRINT_.md) (if it's not done, they will be considered equal **NULL**).

**Examples**

****************



  
