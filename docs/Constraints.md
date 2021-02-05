---
title: 'Constraints'
---

Constraints in the platform determine which values the [data](Data_properties_DATA.md)[properties](Properties.md) can have and which cannot. In general, a constraint is defined as a property which value should always be **NULL**.

In fact, a constraint is a [simple event](Simple_event.md), where condition is the constrained property and handling is [showing](#Constraints-message) all the non-**NULL** values (in the [asynchronous message](In_a_print_view_PRINT.md#Inaprintview(PRINT)-interactive) mode) and [canceling](Cancel_changes_CANCEL.md) all the changes. As well as for a simple event, you need to specify a base [event](Events.md), which determines when the defined constraint is checked. 

Compared to implementation via simple events, constraints have a set of additional advantages:

-   There is a global checking procedure upon a working database for constraints (similarly to "recalculation" technique in simple events which is not applicable here as long as the handler contains the cancel changes operator)
-   Constraints are more understandable and readable since, unlike simple events, they emphasize the static/declarative nature of these rules, i.e. their independence from the moment in time.
-   You can use the created constraint when showing dialogs for changing properties used in this constraint. In this case, an additional filter will be set in the dialog so that, when the property value changes to the selected one, the constraint is not violated.

Note that in some cases, instead of showing a message to the user and canceling the transaction, it is necessary, for example, to automatically resolve the violated constraint. In that case, it is recommended to use [simple constraints](Simple_constraints.md), or, if it is impossible, simple events.

### Show message

For any non-**NULL** value [output](In_a_print_view_PRINT.md) the platform uses an automatically generated [form](Forms.md), consisting of:

-   one [group of objects](Form_structure.md#Formstructure-objects) with the objects corresponding to the parameters of the constrained property.
-   properties with the matching classes belonging to the **System.recognize** [property group](Groups_of_properties_and_actions.md).
-   a [filter](Form_structure.md#Formstructure-filters) equal to the constrained property.
-   a global message defined by the developer when creating the constraint.

### Language

Constraints are created using the [**CONSTRAINT** instruction](CONSTRAINT_instruction.md). 

### Examples
