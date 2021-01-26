# lsFusionCLASS instruction

# CLASS instruction

**CLASS **instruction creates a new [custom class](lsFusionUser_classes.md).

**Syntax**

    CLASS ABSTRACT name [caption] [: parent1, ..., parentN];
     
    CLASS name [caption] 
    [{
        objectName1 [objectCaption1],
        ...
        objectNameM [objectCaptionM]
    }] 
    [: parent1, ..., parentN];

**Description**

The **CLASS** instruction declares a new class and adds it to the current [модуль](lsFusionModules.md). 

The instruction has two forms:  **CLASS ABSTRACT** for declaring an [abstract class](User-classes_2228341.html#Userclasses-abstract) and just **CLASS** for declaring a concrete class. In the latter case, during declaration, you can declare the [static objects](lsFusionStatic_objects.md)  of this class and specify their names and captions in a curly brackets block.   

**Parameters**

*name *

Class name. [Simple ID](IDs_1573053.html#IDs-id). The name must be unique within the current [namespace](Naming_35521066.html#Naming-namespace).

*caption*

Class header. [String literal](Literals_35521071.html#Literals-strliteral). If the caption is not defined, the name of the class will be its caption.  

*objectName1, ..., objectNameM*

The names of [static](lsFusionStatic_objects.md) objects of this class. Each name is defined by a simple ID. Name values are stored in the **System.staticName** system property.

*objectCaption1, ..., objectCaptionM*

Captions of static objects of this class. Each caption is a string literal. If the caption is not defined, the name of the static object will be its caption. Caption values are stored in the **System.staticCaption** system property.

*parent1, ..., parentN*

List of parent class names. Each name is defined by a [composite ID](IDs_1573053.html#IDs-cid). If the list of parent classes is not specified, the class is inherited from the **System.Object** class.  

**Examples**

********



  
