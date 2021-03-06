---
title: 'Class extension'
---

The class [extension](Extensions.md) technique allows the developer to *inherit* one [class](Classes.md) from another after its creation. Also, using this mechanism you can add extra [static objects](Static_objects.md) to a class.

Class extension, together with the [property](Property_extension.md) and [action extension](Action_extension.md) technique, allows you to:

-   Extract the relations between classes into a separate module, thereby obtaining a more modular architecture.
-   Modify the functionality of an existing module without making any changes to it.
-   Declare classes in the [metacode](Metaprogramming.md) by defining the inheritance of a class outside its bounds.

### Language

To extend a class, use the [**EXTEND CLASS** instruction](EXTEND_CLASS_instruction.md).

### Examples

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://documentation.lsfusion.org/sample?file=InstructionSample&block=extendclass"/>
