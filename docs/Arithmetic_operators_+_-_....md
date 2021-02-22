---
title: 'Arithmetic operators (+, -, \*, ...)'
---

*Arithmetic operators* create [properties](Properties.md) whose value is the result of an arithmetic operation. The arguments of these operators must be properties whose values are instances of [number classes](Built-in_classes.md) . The platform currently supports the following arithmetic operators:

[table was removed]

All of these operators return **NULL** if one of the operands is **NULL** . It is also possible to use a special form of summation and difference operators with brackets, in which case **NULL** will be equivalent to 0. The reverse is also true for these type of operators: if the result of an operator in such form is 0, then **NULL is returned** (e. g., 5 (-) 5 = **NULL**):

[table was removed]

### Determining the result class

The result class is determined as:

[table was removed]

  

### Language

Description [of arithmetic operators](Arithmetic_operators.md).

### Examples

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="http://documentation.lsfusion.org:5000/sample?file=OperatorPropertySample&block=arithmetic"/>
