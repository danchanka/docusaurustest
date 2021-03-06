---
title: 'ACTION instruction: Overview'
sidebar_label: Overview
---

The **ACTION** instruction creates an [action](Actions.md).

### Syntax

    [ACTION] name [caption] [(param1, ..., paramN)] { operator } [options];
    [ACTION] name [caption] [(param1, ..., paramN)] contextIndependentOperator [options];

### Description

The **ACTION **instruction declares a new action and adds it to the current [module](Modules.md).

The instruction has two forms: the first form creates an action using a [context-dependent](Action_operator.md#contextdependent) action operator, the second form creates a [context-independent](Property_operators.md#contextindependent) one.

Also, when declaring an action, a set of its options can be specified.   

### Parameters

*name *

Action name. [Simple ID](IDs.md#id-broken).

*caption*

Action caption. [String literal](Literals.md#strliteral-broken). If no caption is defined, the action name will be its caption.  

*param1, ..., paramN*

List of parameters. Each of them is defined by a [typed parameter](IDs.md#paramid-broken) These parameters can be later used in the action operator describing the action being created (as well as in some options).

If parameters are not defined explicitly, they will be automatically calculated when the operator is processed. The order of the parameters will match the order of their appearance in the operator. It is recommended to explicitly define action parameters. This will help find typos and other errors in the declaration (for example, a mismatch of the number of defined parameters with the number of parameters of the created action).

*operator*

A [context-dependent](Action_operator.md#contextdependent) action operator describing and creating an action. You can use the parameters defined in this instruction (if any) as operator parameters.

*contextIndependentOperator*

The [context-independent](Action_operator.md#contextindependent) action operator describing and creating an action. 

*options*

[Action options](Action_options.md) . 

### Examples

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://documentation.lsfusion.org/sample?file=ActionSample"/>
