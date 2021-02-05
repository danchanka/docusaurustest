---
title: 'CONCAT operator'
---

The **CONCAT** operator creates a [property](Properties.md) that implements a string [concatenation](String_operators_+_CONCAT_SUBSTRING.md).

### Syntax

    CONCAT separatorString, concatExpr1, ..., concatExprN

### Description

The **CONCAT** operator creates a property that concatenates values using the "separatorString" separator. Here, NULL values are skipped and the separator is inserted only between non-NULL values.

### Parameters

*separatorString*

 A [string literal](Literals_35521071.html#Literals-strliteral) to be used as a separator.

*concatExpr1, ..., concatExprN*

[Expressions](Expression.md) whose values are to be concatenated.

### Examples



**  
**

  
