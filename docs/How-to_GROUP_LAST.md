---
title: 'How-to: GROUP LAST'
---

##### Example 1

###### Condition

We have a set of books associated with a certain category, and the dates of their receipt.


We need to find the latest received book in the selected category.

###### Solution


It is important to remember that order in the  **ORDER* *** clause should be uniquely determined. To do this, the book (specifically, its internal ID) should be used as the second parameter since several books may have the same date of receipt.

##### Example 2 

###### Condition

Similar to **Example 1**, but the author and genre list are specified for each book.


We need to find the most popular category by author and genre.

###### Solution


##### Example 3

###### Condition

We have a certain set of books and the information about price changes per book and warehouse. Each object of the **Ledger** class reflects a single change in price since a specific date.


We need to identify the current price for a given book at the warehouse.

###### Solution


##### Example 4

###### Condition

Similar to **Example 3**.

We need to find the price valid for a specific date for a book at the warehouse.

###### Solution


##### Example 5

###### Condition

Similar to Example 4, except that a change in price has an expiration date. If this date is not specified, then the price is not limited in time.


###### Solution


Note that the expression *NOT dateTo(l) < date* does not always mean the same as *dateTo(l) \>= date*. The difference occurs when the value *dateTo(l)* equals *NULL*. In the first case, *dateTo(l) < date* equals *NULL*(i. e. FALSE), while *NOT NULL* equals TRUE. In the second case, the expression obviously equals *NULL* (i. e. FALSE).
