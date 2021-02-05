---
title: 'Instruction ='
---

The **= ** instruction creates a new [property](Properties.md).

### Syntax

    name [caption] [(param1, ..., paramN)] = expression [options];
    name [caption] [(param1, ..., paramN)] = contextIndependentOperator [options];

### Description

The **= ** instruction declares a new property and adds it to the current [module](Modules.md).

When creating a property, the instruction has two forms:

-   The first form describes and creates a property using an [expression](Expression.md). 
-   The second form describes the property using one of the [context-independent](Property_operators.md#Propertyoperators-contextindependent) [property operators](Property_operators.md) that cannot be part of an expression.

When declaring a property, its set of options can also be specified.   

### Parameters

*name *

The name of the property. [Simple ID](IDs.md#IDs-id).

*caption*

Property caption. [String literal](Literals.md#Literals-strliteral). If no caption is specified, then the property caption will be its name.  

*param1, ..., paramN*

List of parameters. Each of these is specified by a [typed parameter](IDs.md#IDs-paramid). These parameters can then be used in the expression describing the property being created (as well as in some options).

If parameters are not specified explicitly, they will be automatically calculated when processing the expression. The order of the parameters will correspond to the order in which the parameters appear in the expression. It is recommended that you explicitly specify property parameters. This will allow to find typos and other errors in the declaration (for example, a mismatch of the number of parameters provided with the number of parameters of the created property).

*expression*

An expression that describes and creates a property. 

*contextIndependentOperator*

A context-independent property operator that describes and creates a property. 

*options*

[Property options](Property_options.md). 

### Examples

