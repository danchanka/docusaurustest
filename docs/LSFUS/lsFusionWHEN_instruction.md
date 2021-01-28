# lsFusionWHEN instruction

# WHEN instruction

The **WHEN** instruction adds a [simple event](lsFusionSimple_event.md) handler.

**Syntax **

    WHEN eventClause eventExpr [ORDER [DESC] orderExpr1, ..., orderExprN] DO eventAction;

**Description**

The **WHEN** instruction adds a simple event handler. In a condition expression you can implicitly declare local parameters that can then be used in the event handler.

Also, the **ORDER** block can be used to define the order in which the handler will be called for an object collection for which the condition on the simple event has been met. 

Using the **WHEN** instruction is much like the following instruction:

    ON eventClause FOR eventExpr [ORDER [DESC] orderExpr1, ..., orderExprN] DO eventAction;

but it also has [a number of advantages](lsFusionSimple_event.md).

**Parameters**

*eventClause*

[Event description block](lsFusionEvent_description_block.md). Describes the [base event](lsFusionEvents.md) for the created handler.

*eventExpr*

An [expression](lsFusionExpression.md) whose value is used as a condition for the created simple event. If the obtained property does not contain the [**PREV**](lsFusionPrevious_value_PREV_.md) operator, the platform automatically wraps it into the [**CHANGE**](lsFusionProperty_сhange_CHANGE_.md) **operator**.

*eventAction*

A [context-dependent operator](Action-operator_36307157.html#Actionoperator-contextdependent) that describes an action to be added as an event handler.

*DESC*

Keyword. Specifies a reverse iteration order for object collections. 

*orderExpr1, ..., orderExprM*

A list of expressions that defines the order in which handlers will be called for object collections for which an event condition has been met. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc. 

**Examples**



**  
**
