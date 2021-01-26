# lsFusionBEFORE instruction

# BEFORE instruction

The **BEFORE** instruction calls an [action](lsFusionActions.md) before calling another action. 

**Syntax**

    BEFORE action(param1, ..., paramN) DO aspectAction;

Description

The **BEFORE** instruction defines an action (let's call it an *aspect*) that will be called before the specified one.

**Parameters**

*action*

The[ID](IDs_1573053.html#IDs-propertyid) of the action before which the aspect will be called.

*param1, ..., paramN*

List of action parameter names. Each name is defined [by a simple ID](IDs_1573053.html#IDs-id). These parameters can be accessed while defining an aspect.

*aspectAction*

A [context-dependent action operator](Action-operator_36307157.html#Actionoperator-contextdependent) describing the aspect.

**Examples**

********************



  
