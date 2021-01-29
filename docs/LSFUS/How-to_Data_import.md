# lsFusionHow-to: Data import

# How-to: Data import

##### Example 1

###### Condition

We have the books for which names and prices are defined. The order logic is also defined.



To implement the import process, we need to declare the form of the [structure](Structured_view.md) matching the structure of the JSON file.

We declare the **version** tag at the upmost level without inputs and then add it to the form.

Since the **order** tag is an array, we declare an object with the same name on the form. The platform will create a new object for each array element in the JSON. The **date** and **number** properties for the order will be automatically imported from the corresponding tags in the JSON.

Similarly, for the **detail** tag, we create an object with the same name and then link this object to the **order** object using **FILTERS**. During the import process, the system will fill the link in the order line based on this filter and the nesting of tags.

To import values from tags nested in the **item** tag, we create a new [group](Groups_of_properties_and_actions.md) called **item** and then place the properties and objects into it. In particular, the local property **idItem** is created and then added to the form in this group. Since the property name does not match the tag name, we specify the corresponding name for the property on the form using the **EXTID** keyword.
