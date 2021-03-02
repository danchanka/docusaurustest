---
title: 'Action options'
---

When declaring an [action](Actions.md) in the [**ACTION** instruction](ACTION_instruction.md) a certain set of *action options* may be specified at the end of the declaration. 

### Syntax

Options are listed one after another in arbitrary order, separated by spaces or line feeds:

    propertyOption1 ... propertyOptionN

The following set of options is supported (the syntax of each option is indicated on a separate line):

    IN groupName
    viewType
    ON eventType { actionOperator }
    EDITKEY key [SHOW | HIDE]
    ASON eventType [ACTION] propertyId
    IMAGE path
    CONFIRM

### Description and parameters

*IN groupName*

Specifying the [group of properties and actions](Groups_of_properties_and_actions.md) to which the action belongs. If the option is not specified, then the action will belong by default to the **System.private** group.

*groupName* - a group name. [Composite ID](IDs.md#cid-broken).

### *Interactive view block*

*viewType*

Specifying the type of the [action view](Interactive_view.md#property-views) when added to the form.

-   **GRID** - table column
-   **TOOLBAR** - toolbar
-   **PANEL** - panel

It is similar to specifying the viewType option in the [property block](Properties_and_actions_block.md) of the [**FORM**instruction ](FORM_instruction.md). Thus, if this option is not specified either in the action options or in the property block directly on the form, the [default view](Interactive_view.md#defaultPropertyView-broken) of the action display group on the form is used.

*ON eventType { actionOperator }*

Specifying an action that will be the default handler of a certain [event](Form_events.md) for all the interactive views of this action. Can be overridden in the property block of the **FORM** instruction.

*eventType*

A [form event](Form_events.md) type. It is specified by one of the keywords:

-   -   **CHANGE** - occurs when the user tries to change the value of the specified property
    -   **CHANGEWYS** - occurs when the user tries to change the value of the specified property using a special input mechanism. You can read more in the description of the [form events](Form_events.md) 
    -   **GROUPCHANGE** - occurs when the user tries to change the property value for all objects in the table (group editing)
    -   **EDIT** - occurs when the user tries to edit the object that is the value of the specified property
    -   **CONTEXTMENU **\[caption\] - the user has selected the specified item in the property context menu on the form. If necessary, you can also define the caption of this menu item ([string literal](Literals.md#strliteral-broken)). If it is not specified, then, by default, it will be the same as the action caption.

*actionOperator*

A [context-dependent action operator](Action_operator.md#context-dependent-operators). An operator that defines the action executed on an event. You can use the parameters of the property itself as operator parameters.

*ASON eventType \[ACTION\] propertyId*

Specifies that this action will be the default handler of a certain [event](Form_events.md) for all the interactive views of the specified property or action. Can be overridden in the [property and action block](Properties_and_actions_block.md) of the **FORM** instruction. 

*eventType*

Similar to the ON block.

*propertyId*

An [ID of the property or action](IDs.md#propertyid-broken) for which the created action will be executed when the specified form event occurs.

*ACTION*

Keyword. If specified, it is considered that the action is set in propertyId. If not specified, it is initially considered that a property is defined in propertyId; otherwise, if no property is found, it is considered that an action is specified in propertyId.

*IMAGE path*

Specifies the file with the image to be displayed as an action icon.

*path* is the relative path to the file. [String literal](Literals.md#strliteral-broken). The path is specified relative to the **images** folder.

### *DESIGN instruction default values block*

*EDITKEY key \[SHOW | HIDE\]*

Specifies a [keyboard shortcut](Form_events.md#keyboard-broken) which triggers this action. Sets the value for the [default design](Form_design.md#default-design) and can be overridden in the [**DESIGN** instruction](DESIGN_instruction.md).

*key* -* * a [string literal](Literals.md#strliteral-broken) that defines a keyboard shortcut*. *The definition method is identical to that for a parameter in the Java class method [Keystroke.getKeystroke(String)](http://docs.oracle.com/javase/7/docs/api/javax/swing/KeyStroke.html#getKeyStroke(java.lang.String)).

*SHOW* - a keyword. If specified, the keyboard shortcut will be displayed in the action caption. Used by default.

*HIDE* - a keyword. If specified, the keyboard shortcut will not be displayed in the action caption. 

*CONFIRM*

Keyword. If specified, the user will be asked to confirm the action when it is executed. Sets the value for the default design and can be overridden in the **DESIGN** instruction.

  