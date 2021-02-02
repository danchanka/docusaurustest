---
title: 'How-to: Events'
---

##### Example 1

###### Condition

We have an order with a date, a number and a marker of whether it is closed.



When deleting an order and triggering an event with the **DROPPED** modifier, it is important to remember that the object no longer exists and all properties that take it as input will give **NULL** values. Therefore, we need to access them not directly, but through the **PREV** operator.
