# lsFusionOVERRIDE operator

# OVERRIDE operator

The **OVERRIDE** operator creates a [property](lsFusionProperties.md) that implements the [selection](1572905.html#Selection(CASE,IF,MULTI,OVERRIDE,EXCLUSIVE)-exclusive) of one of the values (polymorphic form).

**Syntax**

    OVERRIDE expr1, ..., exprN

**Description**

The **OVERRIDE** operator creates a property whose value will be the value of one of the properties specified in the operator. Selection is made among properties with a non-**NULL** value. If multiple properties are non-**NULL**, the value of the first of these properties is selected.

**Parameters**

*expr1, ..., exprN*

List of [expressions](lsFusionExpression.md) whose values will determine the value of the property.

**Examples**

****



  
