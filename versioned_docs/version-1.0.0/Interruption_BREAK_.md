---
title: 'Interruption (BREAK)'
---

The *interrupt operator* creates an [action](Actions.md) that exits the most nested loop ([normal](Loop_FOR_.md) or [recursive](Recursive_loop_WHILE_.md)) within which this action is located. Control is transferred to the first action following the loop. If the created action is not inside a loop, its behavior becomes similar to the action created by the [exit operator](Exit_RETURN_.md). 

### Language

The interrupt operator syntax is described by the [**BREAK** operator](BREAK_operator.md). 

### Examples

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://documentation.lsfusion.org/sample?file=ActionSample&block=break"/>
