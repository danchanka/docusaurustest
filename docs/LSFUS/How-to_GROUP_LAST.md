---
title: 'How-to: GROUP LAST'
---

##### Example 1

###### Condition

We have a set of books associated with a certain category, and the dates of their receipt.



Note that the expression *NOT dateTo(l) &lt; date* does not always mean the same as *dateTo(l) &gt;= date*. The difference occurs when the value *dateTo(l)* equals *NULL*. In the first case, *dateTo(l) &lt; date* equals *NULL*(i. e. FALSE), while *NOT NULL* equals TRUE. In the second case, the expression obviously equals *NULL* (i. e. FALSE).
