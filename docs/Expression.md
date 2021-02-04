---
title: 'Expression'
---

An *expression* is a combination of [property operators](Property_operators.md) and [parameters](Properties.md). When an expression is evaluated sequentially in [priority](Operator_priority.md)  order, all the operators are executed.

The result of that execution will be either a [property](Properties.md) or a parameter (in the case of single-parameter expression). Their value shall be called the *value* of the expression.

An expression can be described by the following set of recursive rules:


An expression cannot include [context-independent](Property-operators_36307155.html#Propertyoperators-contextindependent) property operators.

**Examples**


**  
**
