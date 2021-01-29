# lsFusionMULTI operator (action)

# MULTI operator (action)

The **MULTI** operator creates an [action](Actions.md) that implements [branching](5275770.html#Branching(CASE,IF,MULTI)-poly) (polymorphic form).

**Syntax**

     MULTI [exclusionType] action1, ..., actionN 

**Description**

The **MULTI** operator creates an action that executes one of the actions passed to it depending on whether the selection conditions are met. The property selection condition is that the parameters match this action [signature](CLASS_operator.md). 

**Parameters**

*exclusionType*

[Type of mutual exclusion](5275770.html#Branching(CASE,IF,MULTI)-exclusive). Determines whether several conditions for the action selection can be met simultaneously with a certain set of parameters. It is specified by one of the keywords:

-   **EXCLUSIVE**
-   **OVERRIDE**

The **EXCLUSIVE** type indicates that the conditions for the action selection cannot be met simultaneously. The **OVERRIDE** type allows several conditions to be met simultaneously, in which case the first action in the list which selection condition is met will be selected. 

The **EXCLUSIVE** type is used by default.

*action1, ..., actionN* ** ** 

A list of [context dependent action operators](Action-operator_36307157.html#Actionoperator-contextdependent) which define the actions from which the selection is made.

**Example**

************************************************



  
