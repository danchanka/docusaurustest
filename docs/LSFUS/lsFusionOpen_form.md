# lsFusionOpen form

# Open form

The *open form* operator creates an [action](lsFusionActions.md) that opens the specified [form](lsFusionForms.md).

**Form selection**

In addition to explicitly specifying the form to be opened, the platform also allows to open the [list/edit](Interactive-view_1573071.html#Interactiveview-edtClass) form for objects of the specified class. In this case, you only need to specify the corresponding option and specify the custom class whose list/edit form needs to be opened instead of a form.

**View type**

When a form is opened, the [view](lsFusionForm_views.md) type which will be used to display the form needs to be specified:

-   [In an interactive view (SHOW, DIALOG)](lsFusionIn_an_interactive_view_SHOW_DIALOG_.md)
-   In a static view:
    -   [In a print view (PRINT)](lsFusionIn_a_print_view_PRINT_.md)
    -   [In a structured view (EXPORT, IMPORT)](lsFusionIn_a_structured_view_EXPORT_IMPORT_.md)

**Passing objects**

When you open a form, you can pass a value for each of its objects from the calling context, which will be used as follows depending on the view:

-   In interactive view: the passed value is set as the [current](Form-structure_1573069.html#Formstructure-currentObject) object.
-   In a static view: an additional [filter](Form-structure_1573069.html#Formstructure-filters) will be set so that the object must be [equal](lsFusionComparison_operators_=_..._.md) to the passed value.

By default, all passed values of objects must be defined (not **NULL**);** **otherwise the action will not be executed and will simply transfer control to the next action. However, in the interactive view, the developer can change this behavior using the corresponding option (that is, allowing **NULL** values). In this case (as in the case when no object is passed at all), the [default object](Interactive-view_1573071.html#Interactiveview-defaultobject) will be selected as the current object. 

It is worth noting that passing objects in the interactive view is basically the same as the [object seek](lsFusionSearch_SEEK_.md) operation after the form is opened. In this case, the passed objects are the seek objects, and the [seek direction](5832724.html#Search(SEEK)-direction) is determined by the default object type (**PREV** here is equivalent to **FIRST**).
