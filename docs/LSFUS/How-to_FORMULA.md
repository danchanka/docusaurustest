# lsFusionHow-to: FORMULA

# How-to: FORMULA

##### Example 1

###### Condition

We have a list of orders.



Since single quotes are used in the formula, make sure to [escape](https://ru.wikipedia.org/wiki/%D0%AD%D0%BA%D1%80%D0%B0%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D0%BE%D0%B2) them with a backslash **\\\\**.

Note that the native **BOOLEAN** type allows only 2 values: **TRUE** and **NULL**. Therefore, when composing a logical expression, make sure to convert its negative value to **NULL**. In addition, the platform must explicitly know whether the expression can return an undefined value. This is why the keyword **FORMULA** must be followed by the corresponding marker.

At the database level, the **BOOLEAN** type is stored as numeric value (1 or null), and therefore the properties of this type must also return a numeric value. The developer must check that the return type of the expression matches the specified type. Otherwise, the behavior will be unpredictable (but in most cases a request will simply return an error).

Keep in mind that if any property composed by the **FORMULA** operator receives **NULL** as argument, then the overall result will always be **NULL**.

  
