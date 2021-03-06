---
title: 'Comparison operators (=, \>, <, ...)'
---

*Comparison operators* create [actions](Properties.md) which return the result of the comparison operation. The values of the created properties belong to the [built-in class](Built-in_classes.md) **BOOLEAN**.

The platform currently supports the following comparison operators:

|<div><br/><div><br/>Operator<br/></div><br/></div>|<div><br/><div><br/>Name<br/></div><br/></div>|<div><br/><div><br/>Description<br/></div><br/></div>|<div><br/><div><br/>Example<br/></div><br/></div>|<div><br/><div><br/>Result<br/></div><br/></div>|
|---|---|---|---|---|
|= or ==|Equality|Takes two operands and returns TRUE if the operands are equal|5 = 5 or 5 == 5|TRUE|
|!=|Inequality|Accepts two operands and returns TRUE if the operands are not equal|3 != 5|TRUE|
|\>, <|Strict comparison|<p>Accepts two operands and returns TRUE if the strict comparison condition is met</p>|3 \> 5|NULL|
|\>=, <=|Non-strict comparison|Accepts two operands and returns TRUE if the non-strict comparison condition is met|4 <= 5|TRUE|

If one of the operands is **NULL**, all operators will return **NULL** as a result.

### Language

Description of [comparison operators](Comparison_operators.md).

### Examples


import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=compare"/>
