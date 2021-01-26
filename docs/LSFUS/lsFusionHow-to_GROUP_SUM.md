# lsFusionHow-to: GROUP SUM

# How-to: GROUP SUM

##### Example 1

###### Condition

We have a set of books associated with certain category.



We need to calculate the current balance for a given book at the warehouse for the specific date (as of the morning, without the movements occured on that day).

###### Solution

1
2
3
4
5// Option 1
balance1 'Balance as of date' (Book b, Stock s, DATE d) = GROUP SUM (IF out(Ledger l) THEN -quantity(l) ELSE quantity(l)) IF date(l) &lt; d BY book(l), stock(l);
// Option 2
balance2 'Balance as of date' (Book b, Stock s, DATE d) = currentBalance(b, s) (-) \[ GROUP SUM (IF out(Ledger l) THEN -quantity(l) ELSE quantity(l)) IF date(l) &gt;= d BY book(l), stock(l)\](b, s);

The second option is preferable. Since requests usually refer to recent dates, the server will be calculating the result "retrospectively" from the current balance, thereby analyzing fewer records.

##### Example 5

###### Condition

Similar to **Example 3**, except that we need to calculate the current balance for a given book across all the warehouses.

###### Solution

1currentBalance 'Current balance' (Book b) = GROUP SUM currentBalance(b, Stock s);

Unlike the current balance for all the warehouses, it is not reasonable to mark this property as MATERIALIZED if you have only few warehouses — otherwise, UPDATE CONFLICT may occur when several users try to write the movement of the same book at different warehouses simultaneously.
