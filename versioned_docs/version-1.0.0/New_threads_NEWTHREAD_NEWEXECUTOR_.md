---
title: 'New threads (NEWTHREAD, NEWEXECUTOR)'
---

The *new thread* operator allows you to execute an action in a thread other than the current one. 

By default, an action is executed once in a new thread, immediately after the creation of this thread. However, if necessary, the action can be executed with a defined delay and/or performed continuously at a specified time interval. 

The action can also be executed in a new thread on behalf of a specified connection (for example, some user). In this case, [user interaction](User_IS_interaction.md) operators may be used inside the action, including [form opening](Open_form.md) in [interactive](In_an_interactive_view_SHOW_DIALOG_.md) view (by default, when you use these operators, the platform will throw an error).

The delay, interval and connection in this statement are defined as certain [properties](Properties.md).

### New thread pool

Sometimes the number of simultaneously running threads must be limited to a certain value (as a rule, this is done if the executed actions are not critical and the moment in time when they are completed is not so important). To implement this functionality, the platform has an operator for creating a *new thread pool*. This allows the operator to perform an action in such a way that all new threads generated inside this action come into this thread pool, which at the same time can include no more than a specified number of threads.

The number of threads is defined as a property.

### Language

To declare an action that executes another action in a new thread, use the [**NEWTHREAD** operator](NEWTHREAD_operator.md). To perform an action in a new thread pool, use the [**NEWEXECUTOR** operator](NEWEXECUTOR_operator.md).

### Examples

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://documentation.lsfusion.org/sample?file=ActionSample&block=newthread"/>


<CodeSample url="https://documentation.lsfusion.org/sample?file=ActionSample&block=newexecutor"/>

  

  

  
