---
title: 'How-to: CASE/IF/OVERRIDE'
---

##### Example 1

###### Task

We have a set of white books and black books.


We need to define a property that returns the color of a given book.

###### Solution


These two expressions provide identical results.

##### Example 2

###### Task

We have multiple purchase orders to suppliers for books. For each purchase order defined it's status if it was placed, agreed and delivered. In this example these statuses are declared as [data](Data_properties_DATA.md) properties, but in more sophisticated cases they may be calculated.


We need to obtain the current status of an order.

###### Solution


##### Example 3

###### Task

We have a set of books described in **Example 1**.

We need to set a markup for the book and also provide an option for setting a default value.

###### Solution


##### Example 4

###### Task

The same set of books from **Example 1**, but categorized.


We need to set a markup for a book and also provide an option for setting a default value for the corresponding category.

###### Solution


##### Example 5

###### Task

We have a set of enumerated books.


We need to find the number following the maximum book number.

###### Solution


We use the operator (+) instead of the regular operator +, because otherwise if no books are found, then the standard increment by 1 will return **NULL**.
