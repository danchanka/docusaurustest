---
title: 'AFTER instruction'
---

The **AFTER** instruction  calls an [action](Actions.md) after calling another action. 

**Syntax**

    AFTER action(param1, ..., paramN) DO aspectAction;

**Description**

The **AFTER** instruction defines an action (let's call it an *aspect*) that will be called after the specified action.

**Parameters**

*action*

The [ID](IDs_1573053.html#IDs-propertyid) of the action after which the aspect will be called.

*param1, ..., paramN*

List of action parameter names. Each name is defined [by a simple ID](IDs_1573053.html#IDs-id). These parameters can be accessed when defining an aspect.

*aspectAction*

A [context-dependent action operator](Action-operator_36307157.html#Actionoperator-contextdependent) describing the aspect.

**Examples**

********************



  
