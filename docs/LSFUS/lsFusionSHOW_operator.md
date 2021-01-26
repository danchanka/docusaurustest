# lsFusionSHOW operator

# SHOW operator

The **SHOW** operator creates an [action](lsFusionActions.md) that [opens a form](lsFusionIn_an_interactive_view_SHOW_DIALOG_.md) in interactive view. 

**Syntax**

    SHOW name 
    [OBJECTS objName1 = expr1 [NULL], ..., objNameN = exprN [NULL]]
    [formActionOptions] 

When opening the list/edit form, the syntax is slightly different:

    SHOW classFormType className
    = expr [NULL]
    [formActionOptions] 

    formActionOptions is the options for this action. They can be added one by one in any order:

    syncType
    windowType
    MANAGESESSION | NOMANAGESESSION
    NEWSESSION | NESTEDSESSION
    CANCEL | NOCANCEL
    READONLY

**Description**

The **SHOW** operator creates an action that opens the specified form. When opening the form in the **OBJECTS** block, [initial values](Open-form_3014672.html#Openform-params) can be specified for [Form structure](lsFusionForm_structure.md)form objects.

**Parameters**

*name*

Form name. [Composite ID](IDs_1573053.html#IDs-cid).

*classFormType*

Keyword. Determines which form to open:

-   **LIST** – list
-   **EDIT** – edit

*className*

The name of the user class whose list/edit form is to be opened. [Composite ID](IDs_1573053.html#IDs-cid)

*objName1 ... objNameN*

Names of form objects for which initial values are specified. [Simple IDs](IDs_1573053.html#IDs-id).

*expr, expr1 ... exprN*

[Expressions](lsFusionExpression.md) which values determine the initial values for form objects.

*NULL*

Specifies that the values passed may be **NULL**.

***SHOW operator options***

*syncType*

Determines in which [flow control](36307331.html#Inaninteractiveview(SHOW,DIALOG)-flow) mode the operator will work:

-   **WAIT** - synchronous. Used by default.
-   **NOWAIT** - asynchronous.

*windowType*

Method of [the form layout](36307331.html#Inaninteractiveview(SHOW,DIALOG)-location):

-   **DOCKED** – as a tab. Used by default in asynchronous mode.
-   **FLOAT** - as a window. Used by default in synchronous mode.

*MANAGESESSION* | *NOMANAGESESSION*

Keyword. Determines whether or not the created form [is considered to be the owner of the session](Interactive-view_1573071.html#Interactiveview-id-Интерактивноепредставление-session) (if so, in interactive mode the corresponding buttons for managing the session will be shown on the form). By default, the platform tries to determine which mode to use [automatically](Interactive-view_1573071.html#Interactiveview-sysactions) depending on the context.

*CANCEL* | *NOCANCEL*

Keyword. Determines whether or not to show the "Cancel" system action (**System.formCancel**)** **on the form. By default, the platform tries to determine which mode to use [automatically](Interactive-view_1573071.html#Interactiveview-sysactions) depending on context.

*NEWSESSION | NESTEDSESSION*

        Keyword. Determines that the form will be opened in a new (nested) session. By default, the form is opened in the current session.

*READONLY*

Keyword. If specified, the form is opened in [read-only](36307331.html#Inaninteractiveview(SHOW,DIALOG)-extra) mode.

**Examples**

****


