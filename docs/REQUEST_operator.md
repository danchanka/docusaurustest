---
title: 'REQUEST operator'
---

The **REQUEST** operator creates an [action](Actions.md) that [requests a value](Value_request_REQUEST.md).

### Syntax

    REQUEST requestAction 
    DO doAction [ELSE elseAction]

### Description

The **REQUEST** operator creates an action that allows the separation of a request for a value from its handling.

### Parameters

*requestAction*

A [context-dependent action operator](Action_operator.md#context-dependent-operators) that requests a value.

*doAction*

A context-dependent action operator that is executed if the input was completed successfully.

*elseAction*

A context-dependent action operator that is executed if the input was [cancelled](Value_input.md#cancellation-and-input-result).

### Examples


**  
**
