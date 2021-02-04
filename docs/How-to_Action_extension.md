---
title: 'How-to: Action extension'
---

We can use the following scheme to implement polymorphism:

###### Example 1

Create an abstract class **Shape** with an abstract action **whoAmI**:


Then, create **Square** and **Circle** classes inherited from **Shape** :


Define the implementation of **whoAmI** for the created classes:


When executing the **whoAmI** action, all the actions added as an implementation will be called. In this case, a corresponding message will appear depending on the argument.

###### Example 2

Suppose that we need to implement an action that copies an object (e. g. the **Book** class) with its semantics defined in multiple modules. This can be implemented as follows:

Declare the **Book** class and the actions to copy it:


In the dependent module **MyBook**, we want to extend the **Book** class with new properties and also define the action to copy them:

