---
title: 'Action extension'
---

The [actions](Actions.md) [extension](Extensions.md) technique allows the developer to declare an abstract action in one [module](Modules.md) and add to it an implementation in other modules. This technique is essentially a "postponed definition" of a [branch operator](Branching_CASE_IF_MULTI_.md), where the operator’s title is defined when the property is declared, and branching conditions are added as new functionality (of [classes](Classes.md) or [static objects](Static_objects.md)) is added to the system. Furthermore, branching conditions (if branching is not mutually exclusive) can be added both to the beginning and to the end of the abstract action created. Similarly, this technique works with a [sequence operator](Sequence_..._.md).

For abstract actions, the expected classes of parameters must be specified. Then the platform will automatically check that the added implementations match these classes. Also, if necessary, you can check that for all descendants of the parameter classes at least one implementation is specified (or exactly one, if the conditions are [mutually exclusive](Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_.md)).

Actions extension allows:

-   Implement the concept of action polymorphism by analogy with certain object-oriented programming languages.
-   Remove dependency between modules by adding specific "entry points," to which new behavior can be added later.

### Polymorphic form {#poly}

As with a branching operator, for an abstract action there is a *polymorphic form*, where it is possible not to define a condition explicitly, but to use as a condition matching the [signature](Property_signature_CLASS_.md) of the action that corresponds to this condition.

### Mutual exclusion of conditions {#exclusive}

As for a branch operator, you can specify that all conditions of an abstract action must be *mutually exclusive*. If this option is specified, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error.

It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows to make the code more transparent and readable (especially in a polymorphic form of the abstract action).

### Language

The key instructions that implement the extension technique are the [**ABSTRACT** operator](ABSTRACT_operator_action_.md), for declaring an abstract action, and the [**ACTION+** instruction](ACTION+_instruction.md), for adding an implementation to it.

### Examples

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://documentation.lsfusion.org/sample?file=ActionSample&block=abstract"/>


<CodeSample url="https://documentation.lsfusion.org/sample?file=InstructionSample&block=extendaction"/>

  
