# lsFusionHow-to: Data entry

# How-to: Data entry

##### Example 1

###### Condition

We have a form that displays a list of books. We need to implement an option for entering a name only in upper case. Group change, copy&paste, and similar features must also be supported.



We need to replace the book selection mechanism on the order form so that the genre selection form is called. Additional requirements:

-   The genre specified in the order form must be set as default value for the filter by genre
-   The current book from the order must be set as default value (if it has been selected)
-   The book in the order must be resettable (i. e. it must be possible to set the "Undefined" value)
-   Only allowed books can be selected
-   Group change, copy&paste, and similar features must also be supported for the field.

###### Solution

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15changeNameBook(Genre g, Order o) {
DIALOG booksByGenre OBJECTS // (automatically wrapped in REQUEST, that is, group adjustments, PASTE, etc. are available)
g = g NULL, // NULL input allowed
b = book(o) NULL INPUT bk NULL CONSTRAINTFILTER
// book(o) NULL - substituting book(o) to the input (if necessary, the input can be omitted, that is, the user can simply write b INPUT ..., which in turn is equivalent to b=NULL NULL INPUT ...)
// INPUT b NULL - returning the value of this object "to parameter" bk (return NULL is allowed, that is, there will be a reset button). Since the TO option is not specified, the result will be written to the requestedObject
// CONSTRAINTFILTER - taking into account the constraints for object b on the assumption that the result will be written to the property passed to the input (in this case book(o),
// if necessary, another expression can be specified in the form CONSTRAINTFILTER = dataBook(o)
DO // checking for requestCanceled
book(o)
