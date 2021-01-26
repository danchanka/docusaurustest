# lsFusionNEW operator

# NEW operator

The **NEW** operator creates an [action](lsFusionActions.md) that [creates objects](lsFusionNew_object_NEW_.md) of the specified [class](lsFusionClasses.md).

**Syntax**

    NEW className [WHERE whereExpr] [TO propertyId(prm1, ..., prmN)]

**Description**

The **NEW** operator creates an action which creates objects of the specified class and writes them as the returned values of certain [properties](lsFusionProperties.md). This operator can add its local parameters when defining a condition in the WHERE block. These parameters correspond to the objects being iterated for which the object will be created and are not parameters of the created action. 

The **TO** block is used to define the [data property](lsFusionData_properties_DATA_.md) to which value the created object is written. 

There is a special option with the same name (**NEW**) in the [**FOR** operator](lsFusionFOR_operator.md) for creating objects, and it is recommended to use it when possible.

**Parameters**

*className*

Name of the [custom](lsFusionUser_classes.md) class for the created objects. [Composite ID](IDs_1573053.html#IDs-cid).

*whereExpr*

An [expression](lsFusionExpression.md) which value is the condition of the created action. In this expression you can both access already declared parameters and declare new local parameters.

*propertyId*

An [ID of the property](IDs_1573053.html#IDs-propertyid) to which value the created objects are written. If the property is not specified, then:

-   if the condition is not defined, it is automatically set to  **System.addedObject\[\]**
-   if the condition is defined, the created objects are not written anywhere

*prm1, ..., prmN*

A list of data property parameter names. You can use only the local parameters that were added in the **WHERE** block. The number of parameters in the list must be equal to the number of parameters of the data property. 

**Examples**

************************************************



  
