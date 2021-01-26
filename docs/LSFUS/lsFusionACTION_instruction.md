# lsFusionACTION instruction

# ACTION instruction

The **ACTION** instruction creates an [action](lsFusionActions.md).

**Syntax**

    [ACTION] name [caption] [(param1, ..., paramN)] { operator } [options];
    [ACTION] name [caption] [(param1, ..., paramN)] contextIndependentOperator [options];

**Description**

The **ACTION **instruction declares a new action and adds it to the current [module](lsFusionModules.md).

The instruction has two forms: the first form creates an action using a [context-dependent](Action-operator_36307157.html#Actionoperator-contextdependent) action operator, the second form creates a [context-independent](Property-operators_36307155.html#Propertyoperators-contextindependent) one.

Also, when declaring an action, a set of its options can be specified.   

**Parameters**

*name *

Action name. [Simple ID](IDs_1573053.html#IDs-id-Синтаксическиеэлементы-id).

*caption*

Action caption. [String literal](Literals_35521071.html#Literals-strliteral). If no caption is defined, the action name will be its caption.  

*param1, ..., paramN*

List of parameters. Each of them is defined by a [typed parameter](IDs_1573053.html#IDs-paramid) These parameters can be later used in the action operator describing the action being created (as well as in some options).

If parameters are not defined explicitly, they will be automatically calculated when the operator is processed. The order of the parameters will match the order of their appearance in the operator. It is recommended to explicitly define action parameters. This will help find typos and other errors in the declaration (for example, a mismatch of the number of defined parameters with the number of parameters of the created action).

*operator*

A [context-dependent](Action-operator_36307157.html#Actionoperator-id-Операторы-действия-contextdependent) action operator describing and creating an action. You can use the parameters defined in this instruction (if any) as operator parameters.

*contextIndependentOperator*

The [context-independent](Action-operator_36307157.html#Actionoperator-contextindependent) action operator describing and creating an action. 

*options*

[Action options](lsFusionAction_options.md) . 

**Examples**


