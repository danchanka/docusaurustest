# lsFusionAction extension

# Action extension

The [actions](lsFusionActions.md) [extension](lsFusionExtensions.md) technique allows the developer to declare an abstract action in one [module](lsFusionModules.md) and add to it an implementation in other modules. This technique is essentially a "postponed definition" of a [branch operator](lsFusionBranching_CASE_IF_MULTI_.md), where the operator’s title is defined when the property is declared, and branching conditions are added as new functionality (of [classes](lsFusionClasses.md) or [static objects](lsFusionStatic_objects.md)) is added to the system. Furthermore, branching conditions (if branching is not mutually exclusive) can be added both to the beginning and to the end of the abstract action created. Similarly, this technique works with a [sequence operator](lsFusionSequence_..._.md).

For abstract actions, the expected classes of parameters must be specified. Then the platform will automatically check that the added implementations match these classes. Also, if necessary, you can check that for all descendants of the parameter classes at least one implementation is specified (or exactly one, if the conditions are [mutually exclusive](lsFusionSelection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_.md)).

Actions extension allows:

-   Implement the concept of action polymorphism by analogy with certain object-oriented programming languages.
-   Remove dependency between modules by adding specific "entry points," to which new behavior can be added later.

**Polymorphic form**

As with a branching operator, for an abstract action there is a *polymorphic form*, where it is possible not to define a condition explicitly, but to use as a condition matching the [signature](lsFusionProperty_signature_CLASS_.md) of the action that corresponds to this condition.

**Mutual exclusion of conditions**

As for a branch operator, you can specify that all conditions of an abstract action must be *mutually exclusive*. If this option is specified, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error.

It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows to make the code more transparent and readable (especially in a polymorphic form of the abstract action).

**Language**

The key instructions that implement the extension technique are the [**ABSTRACT** operator](lsFusionABSTRACT_operator_action_.md), for declaring an abstract action, and the [**ACTION+** instruction](lsFusionACTION+_instruction.md), for adding an implementation to it.

**Examples**



  
