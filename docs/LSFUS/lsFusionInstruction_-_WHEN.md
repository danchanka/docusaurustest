# lsFusionInstruction&lt;- WHEN

# Instruction&lt;- WHEN

The **&lt;- WHEN** instruction creates a [calculated event](lsFusionCalculated_events.md).

**Syntax**

    propertyId(param1, ..., paramN) <- valueExpr WHEN eventExpr;

**Description**

The **&lt;-WHEN** instruction creates a calculated event for the [property](lsFusionData_properties_DATA_.md) specified on the left side of the instruction. This operator ** ** can declare its own local parameters when specifying the property whose value will [change](lsFusionProperty_сhange_CHANGE_.md). These parameters can then be used in expressions of the condition and value to which the property will change.

Only one calculated event can be defined for a property. 

**Parameters**

*propertyId*

[ID of the property](IDs_1573053.html#IDs-propertyid) whose value will be changed when the event occurs.

*param1, ..., paramN*

[Typed parameters](IDs_1573053.html#IDs-paramid) properties whose value will be changed when the event occurs. The number of these parameters must be equal to the number of parameters of the property being changed.

valueExpr

The expression to whose value the property value must be changed.

*eventExpr*

An expression whose value is a condition for the generated event.

**Examples**

****



  
