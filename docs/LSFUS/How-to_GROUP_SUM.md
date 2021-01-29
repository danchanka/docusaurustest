---
title: 'How-to: GROUP SUM'
---

##### Example 1

###### Condition

We have a set of books associated with certain category.



  

Unlike the current balance for all the warehouses, it is not reasonable to mark this property as MATERIALIZED if you have only few warehouses — otherwise, UPDATE CONFLICT may occur when several users try to write the movement of the same book at different warehouses simultaneously.
