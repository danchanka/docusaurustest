---
title: 'How-to: Constraints'
---

##### Example 1

###### Condition

There is a book for which a price is defined.


We need to do so that it will be impossible to enter prices higher than 100.

###### Solution


If a user tries to save a book costing over 100 on any form, the user will see a message with a corresponding text. This message will also contain all objects of the **Book** class for which the constraint is violated. Values of properties from the **id** group will be shown for each object.

Both options are identical from the execution perspective. If the platform does not find any [change operator](Change_operators_SET_CHANGED_..._.md) in a constraint, the entire expression is automatically "wrapped" into a **SET** operator.

##### Example 2

###### Condition

We have an order with a date, ID and a posted/not posted flag.


You need to prohibit the change of the order date.

###### Solution


##### Example 3

###### Condition

Identical to  **Example 2**.

You need to prohibit the deletion of a posted order.

###### Solution


When an order is deleted, all of its properties will be **NULL**. That is why you need to you use the **PREV** operator to access its property values.

##### Example 4

###### Condition

Similar to **Example 1** and **Example 2**. Also, the order contains lines with a price and a link to the book.


You need to prohibit the entry of order price values exceeding the price of the book by 10%.

###### Solution


Since the expression contains no change operators, this constraint will be triggered when the price changes for a line, book or book price. Therefore, the user will not be able to change the book price if there have been orders for it with a price lower by up to 10%. If such behavior is not required, you need to explicitly apply change operators to those properties that should trigger constraints upon change.

##### Example 5

###### Condition

Similar to  **Example 4**. Here are added the concept of a customer and the possibility to select books that will be available to the customer.


We need to prohibit the entry of books that are unavailable to the buyer for the order line.

###### Solution


It is important to check that the **book** property for the order line is set because otherwise, the constraint will be applied to all order lines with the yet unselected book. The **CHECKED BY ** block adds the filter for the order line on the book selection form in order to avoid violating the defined constraint. This way, the user will only see books available to the buyer.

##### Example 6

###### Condition

Identical to  **Example 4**.

We need to prohibit the entry of books that are unavailable to the buyer for the order line, but only for posted orders.

###### Solution


The second scenario is similar to the first one, but lets you modify the message shown to the user and the logic of constraint handling.
