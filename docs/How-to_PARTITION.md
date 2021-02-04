---
title: 'How-to: PARTITION'
---

##### Example 1

###### Condition

We have an order with the lines.


We need to number the lines starting from 1 as they are added to the order.

###### Solution


In this case, we sort by internal ID of lines in the order, since we know for sure that this ID increases when the new lines are created.

##### Example 2

###### Condition

We have a list of customer orders with specified dates.


For each order we need to find the date of the previous order placed by the same customer.

###### Solution


Similar to **[How-to: GROUP CONCAT](How-to_GROUP_CONCAT.md)**, the order should be uniquely determined. Therefore, we add the order itself (i. e. its internal ID) as the last argument for **ORDER**.

##### Example 3

###### Condition

We have the current balance for books by batches.


We need to distribute the specified quantity for a specified book by batches according to the FIFO principle.

###### Solution


The **STRICT** parameter means that if the quantity is greater than the total balance for all batches, then the remaining difference will be added to the last batch.  
  
