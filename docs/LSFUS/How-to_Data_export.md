---
title: 'How-to: Data export'
---

##### Example 1

###### Condition

We have sales orders for several books.



The first action gets a date as input and then generates a flat CSV file with a semicolon delimiter using the **EXPORT** operator. The file will look like this:

    number;customer;book;quantity;price
    14;Customer 1;Book 1;2;8.99
    12;Customer 2;Book 2;1;3.99
    12;Customer 2;Book 1;2;4.99

The column name is overridden for the first three parameters, while the other two use the names of the corresponding properties. The result is first written to the local property **file**. Then the user is prompted to save the file from that property to his workstation. This is done using[WRITE operator](WRITE_operator.md).

The second action opens the form, asks the user to enter a date and then calls the first data export action.
