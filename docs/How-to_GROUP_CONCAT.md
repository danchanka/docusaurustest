---
title: 'How-to: GROUP CONCAT'
---

##### Example 1

###### Condition

We have a set of books associated with certain priority tags.


We need to retrieve a list of book tags separated by commas in alphabetical order.

###### Solution


It is recommended that you specify the sizes of all the properties created using **GROUP CONCAT** that will be visible on a form. By default, the system implements the "pessimistic" scenario and reserves a lot of space for such properties.

##### Example 2

###### Condition

We have a set of books associated with certain categories and authors.


We need to retrieve a list of all authors by category separated by commas in descending order of the number of books.

###### Solution

