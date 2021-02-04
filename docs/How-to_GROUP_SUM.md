---
title: 'How-to: GROUP SUM'
---

##### Example 1

###### Condition

We have a set of books associated with certain category.


We need to calculate the number of books in the category.

###### Solution


##### Example 2

###### Condition

We have a set of books associated with certain tags. Each book can be associated with several tags at the same time.


We need to calculate the number of books in the tag.

###### Solution


##### Example 3

###### Condition

We have the information about the movement of books: each record is linked to the book itself and the warehouse where the movement occured, and also contains quantity and types of operations (receipt/shipment).


We need to calculate the current balance for a book at the warehouse.

###### Solution


It is recommended to mark the **currentBalance** property as **[MATERIALIZED](Materializations.md)**, so that when reading the current balances, the system could take the calculated value from the **bookStock** table instead of recalculating this value based on all movements. Though this will slow down the writing process (since writing each movement will require updating the current balance), the reading process will become much faster.

Note that you do not need to define explicitly in which table to keep the **currentBalance** property, since the system will use the signature to find out the most suitable table for it (in this case, this will be **bookStock**).

##### Example 4

###### Condition

Similar to **Example 3**, except that each movement is associated with the date of movement.


We need to calculate the current balance for a given book at the warehouse for the specific date (as of the morning, without the movements occured on that day).

###### Solution


  

The second option is preferable. Since requests usually refer to recent dates, the server will be calculating the result "retrospectively" from the current balance, thereby analyzing fewer records.

##### Example 5

###### Condition

Similar to **Example 3**, except that we need to calculate the current balance for a given book across all the warehouses.

###### Solution


  

Unlike the current balance for all the warehouses, it is not reasonable to mark this property as MATERIALIZED if you have only few warehouses — otherwise, UPDATE CONFLICT may occur when several users try to write the movement of the same book at different warehouses simultaneously.
