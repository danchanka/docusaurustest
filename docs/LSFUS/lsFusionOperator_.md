# lsFusionOperator \[\]

# Operator \[\]

The **\[\]** operator creates a [property](lsFusionProperties.md) that returns an object from a [structure](lsFusionStructure_operations_STRUCT_.md).

**Syntax**

    expr "[" number "]"

Where "\[" and "\]" are ordinary square brackets.

**Description**

The **\[\]** operator creates a property that takes a structure as input and returns one of the objects of this structure. Objects are accessed using the sequence number of the object. 

**Parameters**

*expr*

An [expression](lsFusionExpression.md) whose value must be a structure.

*number*

The sequence number of an object. [Numeric literal](Literals_35521071.html#Literals-intliteral). Must be within the range of \[1..N\], where N is the number of objects in the structure.

**Examples**

****



**  
**
