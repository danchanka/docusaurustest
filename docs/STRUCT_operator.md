---
title: 'STRUCT operator'
---

The **STRUCT** operator creates a [property](Properties.md) that creates a [structure](Structure_operations_STRUCT.md).

### Syntax

    STRUCT(expr1, ..., exprN)   

### Description

The **STRUCT** operator creates a property whose value will be a structure created from the objects passed. 

### Parameters

*expr1, ..., exprN*

List of [expressions](Expression.md) whose values will be elements of the structure. The list cannot be empty.

### Examples


import {CodeSample} from './CodeSample.mdx'

<CodeSample url="http://documentation.lsfusion.org:5000/sample?file=OperatorPropertySample&block=struct"/>

**  
**
