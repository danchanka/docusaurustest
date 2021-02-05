---
title: 'Property signature (CLASS)'
---

The signature operator creates a [property](Properties.md) which determines whether, in terms of [classes](Classes.md), a specified property can have a non-**NULL** value for the arguments passed or not. In fact, this operator deduces possible classes of a given property from its semantics, after which it uses [logical](Logical_operators_AND_OR_NOT_XOR.md) operators and the [classification](Classification_IS_AS.md) operator to create the required property.

### Language

To implement this operator, use the [**CLASS** operator](CLASS_operator.md).

### Examples

