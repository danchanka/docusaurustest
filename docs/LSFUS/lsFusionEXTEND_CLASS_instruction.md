# lsFusionEXTEND CLASS instruction

# EXTEND CLASS instruction

The **EXTEND CLASS** instruction [extends](lsFusionClass_extension.md) an existing class.

**Syntax**

    EXTEND CLASS name 
    [{
        objectName1 [objectCaption1],
        ...
        objectNameM [objectCaptionM]
    }] 
    [: parent1, ..., parentN];

**Description**

The **EXTEND CLASS** instruction extends an existing [custom class](lsFusionUser_classes.md) with additional parent classes and new[static objects](lsFusionStatic_objects.md). You can also extend [abstract classes](User-classes_2228341.html#Userclasses-abstract) by adding parent classes to them.

**Parameters**

*name *

Class name. A [Composite ID](IDs_1573053.html#IDs-cid). 

*objectName1, ..., objectNameM*

Names of new static objects of the specified class. Each name is defined [by a simple ID](IDs_1573053.html#IDs-id). Name values are stored in the **System.staticName** system property.

*objectCaption1, ..., objectCaptionM*

Captions of new static objects of the specified class. Each caption is a [string literal](IDs_1573053.html#IDs-strliteral). If the caption is not defined, the name of the static object will be its caption. Caption values are stored in the **System.staticCaption** system property.

*parent1, ..., parentN*

A list of names of new parent classes. Each name is defined by a composite ID. 

**Examples**

************



  
