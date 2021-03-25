---
title: 'IF ... THEN operator'
---

The **IF ... THEN** operator creates a [property](Properties.md) that implements [selection](Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_.md) with one condition (single form).

### Syntax

    IF condition 
        THEN value
        [ELSE alternativeValue]

### Description

The **IF ... THEN** operator creates an action that implements conditional selection. The condition is defined using a property. If this condition is met, that is, the value of the property does not equal **NULL**, then the value of the created property will be the value of the property specified in the **THEN** block; otherwise, the value will be the value of the property in the **ELSE** block, or **NULL** if no **ELSE** block was specified.** **

### Parameters

*condition*

[Expression](Expression.md) defining a condition. 

*value*

An expression whose value will be the value of the created property if the condition is met.

*alternativeValue*

An expression whose value will be the value of the created property if the condition is not met.

### Examples


import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=ifthen"/>

**  
**