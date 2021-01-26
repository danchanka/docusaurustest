# lsFusionApply changes (APPLY)

# Apply changes (APPLY)

The *apply changes* operator saves all changes made to the database, and also triggers the handling of all synchronous global [events](lsFusionEvents.md).

For this operator you can also define an *applied* action to be executed before events handling is triggered, but it will be done in the same transaction. Execution within a single transaction increases its performance and integrity. It should be kept in mind, however, that when canceling changes, for example, all changes made in this applied action will also be canceled. During event handling the apply operation may be canceled if the [cancel changes](lsFusionCancel_changes_CANCEL_.md) operator is executed. If this occurs, in the **System.canceled** property a value of **TRUE** is written (if not, then **NULL**).

After completion of operation (whether successful or unsuccessful), all messages shown to the user during event handling are written to the special property **System.applyMessage**.

As with other session management operators, you can explicitly specify [nested local properties](Session-management_30769221.html#Sessionmanagement-nested) for the apply changes operator, which will preserve their changes after the operator is executed.


