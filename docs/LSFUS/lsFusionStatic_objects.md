# lsFusionStatic objects

# Static objects

*Static* (or built-in) objects are objects that are defined by the developer and are automatically created on system startup (if they are not стартаpresent in the system at launch time). Also, such objects are prohibited from being deleted.

When declaring a [custom class](lsFusionUser_classes.md), you can declare objects of this class which will be static objects. If you do this, this custom class automatically [inherits](User-classes_2228341.html#Userclasses-inheritance) from class **System.StaticObject**.

For each static object of a custom class name and title must be specified. Later these name and title can be accessed using the [properties](lsFusionProperties.md) **System.staticName\[System.StaticObject\]** and **System.staticCaption**\[System.StaticObject\]**** respectively. 

Static objects of [built-in classes](lsFusionBuilt-in_classes.md) are numbers, strings, date values, etc., used by the user in describing the logic.

Static objects can be used to create a limited set of objects of a certain class. Such a set can be used as an enumerated data type to provide a choice from a limited set of values. 

**Language**

Static objects of custom classes are defined in the [CLASS **instruction**](lsFusionCLASS_instruction.md) in a block enclosed in braces.

**Examples**



  
