# lsFusionHow-to: Internationalization

# How-to: Internationalization

The system supports  [internationalization](Internationalization.md) by passing to the client values localized according to the language chosen by the user. All values in braces are localized. Let's assume that we need to implement a simple form with a list of books and their prices that we can create/delete.

We will declare logic in the usual way, but instead of specifying names explicitly, we will be using IDs.



Remember that such expressions cannot be used in [materializations](Materializations.md). 

The system cannot automatically localize user data. The developer is responsible for this.
