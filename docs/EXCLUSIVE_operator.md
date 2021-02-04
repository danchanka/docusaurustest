---
title: 'EXCLUSIVE operator'
---

The **EXCLUSIVE **operator creates a [property](Properties.md) that implements a [selection](1572905.html#Selection(CASE,IF,MULTI,OVERRIDE,EXCLUSIVE)-exclusive) of one of the values (polymorphic form).

**Syntax**

    EXCLUSIVE expr1, ..., exprN

**Description**

The **EXCLUSIVE** operator creates a property whose value will be the value of one of the properties specified in the operator. It is assumed that for any set of parameters, at most one of the properties will be non-**NULL**. The value of the property will be the value of this single non-**NULL** property, or **NULL** if there are no such properties.

**Parameters**

*expr1, ..., exprN*

List of [expressions](Expression.md) whose values will determine the value of the property.

**Examples**

****


**  
**
