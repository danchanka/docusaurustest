---
title: 'How-to: CHANGE'
---

##### Example 1

###### Task

We have a sales order for the books.


We need to create an action to place the order on 30 days from today and apply a 5% discount.

###### Solution


##### Example 2

###### Task

Similar to **Example 1**, except that a specification was added to the order. The current price for each book is also defined.


We need to create an action to populate all the lines in the order with current prices for the corresponding books.

###### Solution


Make sure to use WHERE in the action. Otherwise, the prices will be set for all lines of all orders in the database.
