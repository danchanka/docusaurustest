# lsFusionINPUT operator

# INPUT operator

The **INPUT** operator creates an [action](lsFusionActions.md) that [inputs a primitive](lsFusionPrimitive_input_INPUT_.md).

**Syntax**

    INPUT inputOptions 
    [CHANGE [= changeExpr]]
    [DO actionOperator [ELSE elseActionOperator]]

*inputOptions* - input options. Specified by one of the following syntaxes:

    [alias =] builtInClassName
    [alias] = expr

**Description**

The **INPUT** operator creates an action which allows to request the value of one of the [built-in classes](lsFusionBuilt-in_classes.md) from the user.

**Parameters**

*builtInClassName*

The name of one of the [built-in classes](lsFusionBuilt-in_classes.md). 

expr

        An [expression](lsFusionExpression.md), which value determines the [initial value](Value-input_35520941.html#Valueinput-initial) of the input.

*alias*

The name of the local parameter to which the input result is written. [Simple ID](IDs_1573053.html#IDs-id-Идентификаторы-id).

*CHANGE*

A keyword specifying that in addition to the value input the result needs to be written to the specified property.

*changeExpr*

An [expression](lsFusionExpression.md) that determines the property to which the input result is written. By default, the property specified as the initial input value is used.

*actionOperator*

A [context-dependent action operator](Action-operator_36307157.html#Actionoperator-id-Операторы-действия-contextdependent) that is executed if the input was completed successfully.

*elseActionOperator*

A [context-dependent action operator](Action-operator_36307157.html#Actionoperator-id-Операторы-действия-contextdependent) that is executed if the input was cancelled. The input result parameter cannot be used as parameters.

**Examples**

********************************************



  
