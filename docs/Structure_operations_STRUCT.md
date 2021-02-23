---
title: 'Structure operations (STRUCT, \[\])'
---

The term *structure* is used in the platform to refer to the [classes](Classes.md) which objects consist of a collection of other objects in a fixed order. The platform supports two operators for working with structures:

[table was removed]

Structures support comparison operations which are executed sequentially for each object included in the structure. 

[table was removed]

### Language

To create a property that creates a structure the [**STRUCT** operator](STRUCT_operator.md) is used.

To create a property that returns an object from the structure the [**\[ \]** operator](Operator.md) is used.

### Examples

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=struct"/>


<CodeSample url="https://documentation.lsfusion.org/sample?file=OperatorPropertySample&block=brackets"/>

**  
**
