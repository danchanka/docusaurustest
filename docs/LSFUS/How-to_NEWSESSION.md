---
title: 'How-to: NEWSESSION'
---

##### Example 1

###### Condition

We have an order with a number and a posted/not posted flag.



If you use the [NESTEDSESSION](NESTEDSESSION_operator.md) operator, then all the changes made in the "upper" change session will be available in the nested session. If the user closes the form without clicking OK, then all changes made directly in the form will be lost. If the user clicks OK, then the changes will be written to the "upper" change session rather than to the database. They will be written to the database along with the changes made in the main **orders** form.

It is not allowed to use **NEWSESSION** here simply because the **orderPayments** form will not be able to see the newly created order which has not yet been added to the database (since changes made in the "upper" session are not visible in the nested one), and thus the behavior will be unpredictable.

If we do not use any session management operator at all, then if the user make any changes in the **orderPayments** form and clicks the Close button, the changes will still be "saved", though the user might not expect that.
