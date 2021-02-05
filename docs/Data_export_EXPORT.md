---
title: 'Data export (EXPORT)'
---

The *data export* operator creates an [action](Actions.md) that reads values of the specified properties for all object collections where the value of the specified property (*condition*) is not **NULL**, and then saves these values to a file in a specified [format](Structured_view.md). 

The condition is optional in this operator and, if not defined, it is considered equal to the [disjunction](Logical_operators_AND_OR_NOT_XOR.md) of all exported properties (i.e., at least one of the properties must be non-**NULL**). 

Similar to the other [set operations](Set_operations.md), the condition must be such that the operation is [correct](Set_operations.md).

### General case

It should be noted that data export is a special case of (syntactic sugar for) [form export](In_a_structured_view_EXPORT_IMPORT.md), in which the exported form is created automatically, named **export** and consists of:

-   one [object group](Form-structure_1573069.html#Formstructure-id-%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0%D1%84%D0%BE%D1%80%D0%BC%D1%8B-objects) named **value** whose objects correspond to exported property parameters (not created if all exported property parameters are fixed values).
-   exported properties. The [built-in](Groups-of-properties-and-actions_2719887.html#Groupsofpropertiesandactions-builtin) **System.private** group is used as the [property group](Form-structure_1573069.html#Formstructure-propertygroup) for the created properties on the form, and the created object group is used as the [display group](Form-structure_1573069.html#Formstructure-drawgroup). If there is only one exported property and it does not have a name, the corresponding property on the form is created with the name **value**.
-   a filter equal to the defined condition.
-   defined orders.

Thus, the behavior of the data export operator (for example, determining the names of the resulting columns/keys, [processing **value**](Structured-view_29884537.html#Structuredview-id-%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-value), etc.) is completely determined by the behavior of the form export operator (as if the above form was passed to it as a parameter).

### Language

To declare an action that exports data, use the [**EXPORT** operator](EXPORT_operator.md).

### Examples



  
