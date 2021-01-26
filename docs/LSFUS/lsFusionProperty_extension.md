# lsFusionProperty extension

# Property extension

The [properties](lsFusionProperties.md) [extension](lsFusionExtensions.md) technique allows the developer to declare an *abstract action* in one [module](lsFusionModules.md) and define its implementation in other modules. This technique is essentially a "postponed definition" of a [selection operator](lsFusionSelection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_.md), where the operator’s title is defined when the property is declared, and as new functionality (of [classes](lsFusionClasses.md) or [static objects](lsFusionStatic_objects.md)) is added, selection options are added to the system. Furthermore, variants of selection (if it is not mutually exclusive) can be added both to the beginning and to the end of the abstract property created.

For abstract properties, the expected classes of parameters must be specified. Then the platform will automatically check that the implementations added match these classes. Also, if necessary, you can check that for all descendants of the parameter classes at least one implementation is specified (or exactly one, if the conditions are [mutually exclusive](lsFusionSelection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_.md)).

Extension of properties allows you to:

-   Implement the concept of property polymorphism by analogy with certain object-oriented programming languages.
-   Remove dependency between modules by adding specific "entry points" to change the way properties are calculated.

**Polymorphic form**

Just as [for a selection operator](1572905.html#Selection(CASE,IF,MULTI,OVERRIDE,EXCLUSIVE)-poly), for an abstract property there is a *polymorphic form* where the selection condition and the result corresponding to it are set by a single property. Accordingly, as in a selection operator, either belonging to the [signature ](lsFusionProperty_signature_CLASS_.md)of this property or the property itself can be a condition.

**Mutual exclusion of conditions**

As [for a selection operator](1572905.html#Selection(CASE,IF,MULTI,OVERRIDE,EXCLUSIVE)-exclusive), you can specify that all conditions of an abstract property must be *mutually exclusive*. If this option is set, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error.

It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows you to make the code more transparent and readable (especially given a polymorphic form of the abstract property).

**Language**

The key instructions that implement the extension procedure are the [**ABSTRACT** operator](lsFusionABSTRACT_operator.md),for declaring an abstract action, and the [**+=** instruction](lsFusionInstruction_+=.md), for defining its implementation.

**Example**

****


