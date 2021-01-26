# lsFusionClass change (CHANGECLASS, DELETE)

# Class change (CHANGECLASS, DELETE)

The *class change* operator creates an [action](lsFusionActions.md) that assigns the given [class](lsFusionClasses.md) to all objects where value of a particular [property](lsFusionProperties.md) (*condition*) is not equal to **NULL**. The condition can be omitted, in which case it is considered to be equal to **TRUE**.  

The platform also has a builtin changeClass action with two parameters: the first defines the object for which you want to change the class, and the second defines an object of the new class. Since it is much more difficult to determine the possible values of a new class when using the builtin action than in the case of an operator (for which the new class is specified explicitly), it is recommended that you use the operator (and not the builtin action)

If there is a non-**NULL** value of some [data property](lsFusionData_properties_DATA_.md) for which the "changed" object is either its parameter or the value itserf, then this value is automatically changed to **NULL**.

This behavior is implemented by analogy with [computed](lsFusionCalculated_events.md) and [simple](lsFusionSimple_event.md) events.

**Language**

To declare an action that implements a change of object classes, use the [**CHANGECLASS** operator](lsFusionCHANGECLASS_operator.md) or [the **DELETE** operator](lsFusionDELETE_operator.md).

**Examples**


