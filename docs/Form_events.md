---
title: 'Form events'
---

While the application is running, there is a number of events for each form that occur as a result of certain user actions:

*Global*

-   **QUERYCLOSE** - the user tries to close the form by clicking on the corresponding button in the form header.
-   **QUERYOK** - the user tries to close a modal form by double-clicking on any row in the table.

*For objects on the form*

-   **CHANGE** - user [changed](Interactive_view.md#object-views) the [current value](Form_structure.md#currentObject-broken) of an object.

*For properties or actions on the form*

-   **CHANGE** - the user initiated a property change or action call.
-   **CHANGEWYS** - the user initiated a WYSIWYG property change using the PASTE operation or a special input mechanism 
-   **GROUPCHANGE** - the user initiated a property change for all objects in the table
-   **EDIT** - the user initiated editing of an object
-   **CONTEXTMENU** - the user selected the specified item in the context menu of a property (action) on the form

There are also several so-called *derivative* events that are nothing more than syntactic sugar, but at the same time allow you more effectively to solve typical problems that arise when working with forms:

*Global*

-   **INIT** - occurs immediately after the form is opened.
-   **APPLY** - occurs when the form session is saved to the database (inside the transaction, at the very beginning, before global event handling is performed).**  
    **
-   **APPLY BEFORE** - occurs immediately before the form session is saved to the database (before the start of the transaction).
-   **APPLY AFTER** - occurs immediately after the form session is successfully saved to the database (after the end of the transaction).
-   **CANCEL** - occurs when the form session changes are canceled.
-   **CLOSE** - occurs when the **System.formClose** action is executed.
-   **DROP** - occurs when the **System.formDrop** action is executed.

If the form is [the session owner](Interactive_view.md#session-owner) (meaning that when the **System.formOk** action is executed the form session [is saved](Apply_changes_APPLY.md)):

-   **OK, OK BEFORE, OK AFTER** - occurs when the **System.formOk** action is executed, at the moments similar to the corresponding moments for the **APPLY** event (i.e. inside, before and after the transaction). In this case, **OK** and **OK BEFORE** handlers are executed before executing **APPLY** and **APPLY BEFORE** handlers, and **OK AFTER** is executed after **APPLY AFTER**.

If the form is not the session owner:

-   **OK** - occurs when the**System.formOk** action is executed

If **OK BEFORE** and **OK AFTER** handlers are defined, but the form is not the session owner, these handlers are still executed, respectively before and after the **OK** event handler.

If, after the execution of event handlers with the **BEFORE** postfix, the **System.applyCanceled** property value equals **TRUE**, further execution of the action that led to the occurrence of this event is stopped (for example, with **APPLY BEFORE**, saving the session is interrupted as if one of the existing constraints had been [violated](Constraints.md)).

For the remainder of the section, the behavior of properties and actions is exactly the same and so we will use only the term property (behavior is absolutely identical for actions).

The developer can execute certain actions (*handlers*) when any of the events described above occurs. In the current implementation there can be several handlers for global events and form object events, but only one for form property events. In the first case, the handler is added to the corresponding list, in the second case, the handler replaces the existing one.

For property, it is possible to define its event handlers for the whole logics at once. In that case, these handlers will be automatically added to all forms where these properties are displayed.

You can also specify a keyboard shortcut for each property, pressing which triggers the property's **CHANGE** event. If several properties on the form correspond to one key combination, the event will be triggered only for the property whose component is closest to the current active component in the component hierarchy.

### Default handlers

For some events, the platform automatically creates default handlers:

QUERYCLOSE

       Calls the **System.formClose** action

QUERYOK

       Calls the **System.formOk** action

*CHANGE*

The user is requested for an object of the changed property value class, after which the received object is written to this property. If the property is not [mutable](Property_change_CHANGE.md#changeable-properties), the [user filter](Interactive_view.md#custom-filtersorders) mechanism for this property (or for the property specified using the corresponding option) is automatically called.

*GROUPCHANGE*

Calls the **CHANGE** event handler for all objects that meet the filter conditions of the object group in which the changed property is displayed. 

If property event handler uses (even [implicitly](Value_request_REQUEST.md#implicit-use)) the [value request](Value_request_REQUEST.md) operator, then default handler can be created [in a different way](Value_request_REQUEST.md#defaultChange-broken).

For an *object request* from the user, depending on the type of class , the following operators are used:

-   Builtin classes - the [input primitive](Primitive_input_INPUT.md) operator.
-   [Custom classes](User_classes.md) - the [open form](In_an_interactive_view_SHOW_DIALOG.md) operator. The form is the [list](Interactive_view.md#selectionediting-forms) form for this class. 

### Standard handlers

For properties and actions on the form, it is also possible to define the following *standard* change event handlers (**CHANGE**, **CHANGEWYS**, **GROUPCHANGE**, **EDIT**): 

-   *Read Only *(**READONLY**) - if the property is displayed in the table, the handler will be similar to **CHANGE** default handler when the property is not mutable (that is, the user filter mechanism will be called). If the property is not displayed in the table, nothing will happen. You can also make this option conditional (**READONLYIF**) (that is, change only if the value of some property is not **NULL**).
-   *Selector* (**SELECTOR**) - when you try to make a change, a dialog will be shown in which the user will be asked to change the [current value](Form_structure.md#currentObject-broken) of the object.

### Language

To define the form event handlers, use the **ON** option in the **FORM** instruction ([events](Event_block.md) block, [properties and actions](Properties_and_actions_block.md) block, [objects](Object_blocks.md#object-block) block), as well as in [property options](Property_options.md). 

### Examples

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://documentation.lsfusion.org/sample?file=FormSample&block=events"/>

  
