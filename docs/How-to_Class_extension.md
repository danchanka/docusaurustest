---
title: 'How-to: Class extension'
---

The typical scheme for extracting relations between classes to a separate module is as follows:

Create the **MA** module in which the **A** class will be created:


Create the **MB** module in which the **B** class will be created:


Create the **MBA** module in which the relation between the **A** and **B** class will be defined:


Therefore, the **MA** and **MB** modules do not directly depend on each other and the relation between them can be enabled (disabled) by linking (unlinking) the **MBA** module. Note that the **MBA** module extends the functionality of the **MB** module without any changes to its code.

You can use mixin classes when using the metacode as follows:

Suppose that we have a metacode that declares a class and defines certain properties for it:


Note that when calling this metacode, you cannot specify the classes from which the created class must inherit anything. However, this can be implemented through a mixin of classes as follows:

