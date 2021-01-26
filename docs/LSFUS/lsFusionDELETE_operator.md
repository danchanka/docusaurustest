# lsFusionDELETE operator

# DELETE operator

The **DELETE** operator creates an [action](lsFusionActions.md) that [deletes objects](lsFusionClass_change_CHANGECLASS_DELETE_.md).

**Syntax**

    DELETE expr [WHERE whereExpr]

**Description**

The **DELETE** operator creates an action that deletes objects for which a certain condition is met. This operator can add its local [parameter](lsFusionActions.md), which will correspond to the objects being iterated. In this case, the **WHERE** block is mandatory. 

**Parameters**

*expr*

An [expression](lsFusionExpression.md) or [typed parameter](IDs_1573053.html#IDs-paramid). You can either use an already declared parameter as a typed parameter, or declare a new local parameter. When using an expression, new local parameters cannot be added.

*whereExpr*

An [expression](lsFusionExpression.md) whose value is for the action being created. If not set, it is considered as equal to **TRUE**.

**Examples**

****************************



  
