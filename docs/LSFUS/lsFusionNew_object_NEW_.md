# lsFusionNew object (NEW)

# New object (NEW)

The *new object* operator creates an [action](lsFusionActions.md) that creates objects of a specified [custom class](lsFusionUser_classes.md) for object collections where the value of some [property](lsFusionProperties.md) (*condition*) is not **NULL**. The condition can be omitted, in which case it is considered to be equal to **TRUE**.

This operator also allows you to set a [primary property](lsFusionData_properties_DATA_.md), to whose values the added objects will be written. If no condition is specified, by default this property is considered to be **addedObject**.

The custom class whose objects will be created by this operator must be concrete.

You can also create objects using the corresponding [option](5275768.html#Loop(FOR)-addobject) in the [loop](lsFusionLoop_FOR_.md) operator.

**Language**

To declare an action that implements objects creation, use the [**NEW** operator](lsFusionNEW_operator.md). The **NEW** option in the [**FOR** operator](lsFusionFOR_operator.md) is also used to implement similar functionality.

**Examples**


