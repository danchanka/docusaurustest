# lsFusionSet operations

# Set operations

One of the key features of the platform is the ability to execute certain operations for all object collections for which the values of one or more [properties](Properties.md) are not **NULL**. In the property logic such an operation is the calculation of various *aggregate functions*. 

**Aggregate functions**

An aggregate function calculates a certain *result* as a single object on a set of object collections. This function is defined by the *initial value* (typically **NULL**), [properties](Properties.md) that it uses (*operands*), *operation of addition* to the *intermediate result* of the current operand values, and *conversion function* of the intermediate result to the final (typically the intermediate result is the final result).

Aggregate function is *commutative* if the order in which the object collections of the original set are iterated over does not matter when calculating the result. 

The table below shows the currently supported types of aggregate functions:


