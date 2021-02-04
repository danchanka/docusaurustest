---
title: 'How-to: GROUP MAX/MIN/AGGR'
---

##### Example 1

###### Condition

We have a set of books, where each book has a unique ID.


We need to find the maximum book ID.

###### Solution


##### Example 2

###### Condition

Similar to **Example 1**.

We need to find a *Book* object by book ID.

###### Solution


The difference between Option 2 and Option 1 is that declaration of this property puts a [constraint](Constraints.md) on the uniqueness of book IDs. Any attempt to add two or more books with the same ID will result in the error message.

##### Example 3

###### Condition

We have a set of books, where each book is associated with a category and price.


We need to calculate the minimum price per category.

###### Solution


##### Example 4

###### Condition

We have a book shipment document.


We need to find a line with a given shipment by shipment document and book.

###### Solution


You can use this property to implement the Search functionality when inputting a shipment document.
