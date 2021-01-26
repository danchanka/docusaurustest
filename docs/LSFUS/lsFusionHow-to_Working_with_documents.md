# lsFusionHow-to: Working with documents

# How-to: Working with documents

##### Posting documents

###### Condition

There is some logic for working with orders.



When you try to delete an invoice created for an order, you will see an error message.

The fundamental difference between this aggregation approach and one based on generating an invoice against an order is that the system automatically ensures synchronization between orders and invoices. When creating order-based invoices, the user has to manually modify them if corresponding orders are changed. Otherwise, it will require a separate event handling mechanism that will be responsible for it.
