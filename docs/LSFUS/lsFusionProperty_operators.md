# lsFusionProperty operators

# Property operators

*Property operator* is a syntax construct that describes an [operator](lsFusionOperators.md) creating a [property](lsFusionProperties.md). 

Property operators can be divided into *context dependent* and *context independent*.

**Context dependent operators**

Context dependent property operators can be part of [expressions](lsFusionExpression.md) and use common parameters (context). These operators are:

-   [Arithmetic operators](lsFusionArithmetic_operators.md)

-   [**\[\]** operator](lsFusionOperator_.md)

-   [**ACTIVE TAB** operator](lsFusionACTIVE_TAB_operator.md)

-   [**AGGR** operator](lsFusionAGGR_operator.md)

-   [**CASE** operator](lsFusionCASE_operator.md)

-   [**CLASS** operator](lsFusionCLASS_operator.md)

-   [**CONCAT** operator](lsFusionCONCAT_operator.md)

-   [**EXCLUSIVE** operator](lsFusionEXCLUSIVE_operator.md)

-   [**IF** operator](lsFusionIF_operator.md)

-   [**IF** operator ... **THEN** operator](lsFusionIF_..._THEN_operator.md)

-   [**JOIN** operator](lsFusionJOIN_operator.md)

-   [**MAX** operator](lsFusionMAX_operator.md)

-   [**MIN** operator](lsFusionMIN_operator.md)

-   [**MULTI** operator](lsFusionMULTI_operator.md)

-   [**OVERRIDE** operator](lsFusionOVERRIDE_operator.md)

-   [**PARTITION** operator](lsFusionPARTITION_operator.md)

-   [**GROUP** operator](lsFusionGROUP_operator.md) (without BY block)

-   [**PREV** operator](lsFusionPREV_operator.md)

-   [**RECURSION** operator](lsFusionRECURSION_operator.md)
-   [**STRUCT** operator](lsFusionSTRUCT_operator.md)
-   [**UNGROUP** operator](lsFusionUNGROUP_operator.md)
-   [Type conversion operator](lsFusionType_conversion_operator.md)
-   [**AND**, **OR**, **NOT**, **XOR** operators](lsFusionAND_OR_NOT_XOR_operators.md)
-   [**IS**, **AS** operators](lsFusionIS_AS_operators.md)
-   [Change operators](lsFusionChange_operators.md)
-   [Comparison operators](lsFusionComparison_operators.md)

**Context independent operators**

Context independent property operators differ from the context dependent ones in that they do not just use the upper parameters but define the parameters themselves. As a result, they cannot be part of expressions and can only be used in the [**=** instruction](lsFusionInstruction_=.md) and the [**JOIN** operator](lsFusionJOIN_operator.md): 

-   [**DATA** operator](lsFusionDATA_operator.md)
-   [**GROUP** operator](lsFusionGROUP_operator.md) (with BY block)
-   [**FORMULA** operator](lsFusionFORMULA_operator.md)
-   [**ABSTRACT** operator](lsFusionABSTRACT_operator.md)
-   [Object group operators](lsFusionObject_group_operator.md)
