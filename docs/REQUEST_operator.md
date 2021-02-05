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

A [context-dependent action operator](Action-operator_36307157.html#Actionoperator-contextdependent) that requests a value.

*doAction*

A context-dependent action operator that is executed if the input was completed successfully.

*elseAction*

A context-dependent action operator that is executed if the input was [cancelled](Value-input_35520941.html#Valueinput-result).

### Examples


**  
**
