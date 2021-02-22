---
title: 'ON instruction'
---

The **ON** instruction adds an [event](Events.md) handler.

### Syntax 

    ON eventClause eventAction;

### Description

The **ON** instruction adds an event handler for the specified event. 

### Parameters

*eventClause*

This [event description block](Event_description_block.md) describes an event for which a handler needs to be added.

*eventAction*

This [context-dependent action operator](Action_operator.md#context-dependent-operators) describes the event handler.

### Examples

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="http://documentation.lsfusion.org:5000/sample?file=InstructionSample&block=on"/>

 

*  
*
