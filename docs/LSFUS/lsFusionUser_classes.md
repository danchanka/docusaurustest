# lsFusionUser classes

# User classes

[Classes](lsFusionClasses.md) that a developer can create and the instances of which a user can create are called *custom classes*. 

**Inheritance**

When creating custom class **B** you can explicitly specify that its [parent](lsFusionClasses.md) is class **A.** In this case, class **A** shall be called the *parent class *of class **B**.

A parent class of a custom class can only be another custom class. Inheriting from [built-in classes](lsFusionBuilt-in_classes.md) is not possible. If no parent class is specified when creating a custom class, this class is implicitly inherited from the **Object** class (located in the **System** [module](lsFusionModules.md)). Thus, the **System.Object** class is the parent object of all custom classes.

The platform supports multiple inheritance of custom classes, meaning that a class can have several parent classes. 

**Abstract classes**

Some custom classes in the system can be *abstract. *The difference between these classes and the rest is that it is impossible to create an instance of an abstract class. Non-abstract classes, in turn, are called *concrete*.

**Class change**

The platform allows changing the class of an existing object. Since objects can only be instances of concrete classes, it is forbidden to change the class of an object to abstract.

**Common ancestor**

As a common ancestor for several custom classes, the platform selects a class from which all these classes are inherited, and the total number of "steps" of inheritance to these classes is minimal (that is, the closest class is selected).

**Language**

To add a new custom class to the system, use the [**CLASS** instruction](lsFusionCLASS_instruction.md).

**Examples**


