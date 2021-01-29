---
title: 'Calculated events'
---

*Calculated* events are events that change the value of a property when the value of some other property (*condition*) changes to a non-**NULL** value. Moreover, unlike [simple](Simple_event.md) events, this change is not made at the moment the condition is changed but is calculated each time the changed property is accessed. If the property has already been [changed](Property_сhange_CHANGE_.md) in the same session, this change is considered higher priority than the change in the calculated event.

For each property, there can only be one calculated event that changes this property.  

**Language**

To define calculated events, use [the **&lt;- WHEN** instruction](Instruction_-_WHEN.md).

**Examples**


