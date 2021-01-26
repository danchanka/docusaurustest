# lsFusionProperty options

# Property options

When a [property](lsFusionProperties.md) is declared in the [= instruction](lsFusionInstruction_=.md) a set of *property options* can be specified at the end of the declaration 

**Syntax**

Options are listed one after another in arbitrary order, separated by spaces or line feeds:

    propertyOption1 ... propertyOptionN

The following set of options is supported (the syntax of each option is indicated on a separate line):

    IN groupName
    viewType
    ON eventType { actionOperator }
    EDITKEY key [SHOW | HIDE]
    MATERIALIZED
    TABLE tableName
    INDEXED
    NONULL [DELETE] eventClause
    AUTOSET
    CHARWIDTH width [FLEX | NOFLEX]
    REGEXP rexpr [message] 
    ECHO
    DEFAULTCOMPARE [compare]

**Description and parameters**

*IN groupName*

Specifying the [group of properties and actions](lsFusionGroups_of_properties_and_actions.md) to which the property belongs. If the option is not specified, then the property will belong by default to the group **System.private**.

*groupName -* group name. [Compound ID](IDs_1573053.html#IDs-cid).

*MATERIALIZED*

Keyword marking the property as [materialized](lsFusionMaterializations.md). These properties will be stored in the database's [table](lsFusionTables.md) fields.

*TABLE tableName*

Specifies the [table](lsFusionTables.md) where the property will be stored. The number of table keys must be equal to the number of property arguments, and the argument classes must match the table key classes. If no table is specified, the property will automatically be placed in the "nearest" existing table in the system.

*tableName* - table name. Composite ID. 

*INDEXED*

Keyword. If specified, an [index](lsFusionIndexes.md) by this property is created. Similar to using the [**INDEX** instruction](lsFusionINDEX_instruction.md). ** **

*NONULL \[DELETE\] eventClause*

Adds a [definiteness](lsFusionSimple_constraints.md) constraint. If this constraint is violated as a result of some changes for some objects, either the corresponding message will be displayed, or, if **DELETE** is specified, such objects will be deleted.

*DELETE*

Keyword that, if specified, then when the property becomes **NULL**, objects that are property arguments will be deleted.

*eventClause*

[Event type description block](lsFusionEvent_description_block.md). Describes the event by which the property will be checked for **NULL**.

***Interactive view block***

*viewType*

Specifying the type of [property view](Interactive-view_1573071.html#Interactiveview-property) when added to the form.

-   **GRID** - table column
-   **TOOLBAR** - toolbar
-   **PANEL** - panel

It is similar to specifying the viewType option in the [property block](lsFusionProperties_and_actions_block.md) of the [**FORM**instruction](lsFusionFORM_instruction.md). Thus, if this option is not specified either in the property options or in the property block directly on the form, the [default view](Interactive-view_1573071.html#Interactiveview-defaultPropertyView) of the property display group on the form is used.

*ON eventType { actionOperator }*

Specifying an action that will be the default handler of a certain [form event](lsFusionForm_events.md) for all the interactive views of this property. Can be overridden in the property block of the **FORM**instruction.

*eventType*

Type of form event. Specified by one of the following options:

-   **CHANGE** - occurs when the user tries to change the value of a property.
-   **CHANGEWYS** -** **occurs when the user tries to change the value of the specified property using a special input mechanism. 
-   **GROUPCHANGE** - occurs when the user tries to change the property value for all objects in the table (group editing).  
-   **EDIT** - occurs when the user tries to edit the object that is the value of the specified property. 
-   **CONTEXTMENU **\[caption\] - the user has selected the specified item in the property context menu on the form. If necessary, you can also define the caption of this menu item ([string literal](Literals_35521071.html#Literals-strliteral)). If it is not specified, then, by default, it will be the same as the action caption.

*actionOperator*

[Context-dependent action operator](Action-operator_36307157.html#Actionoperator-contextdependent). An operator that defines the action executed on an event. You can use the parameters of the property itself as operator parameters.

***DESIGN instruction default values block***

*CHARWIDTH width *\[FLEX | NOFLEX\]

Specifying the [number of characters](Form-design_29884443.html#Formdesign-valueWidth) of the property value that should be visible to the user. Sets the value for the default design ; can be overridden in a **DESIGN** instruction.

*width*

Number of characters. Integer literal. 

**FLEX*  
*

Keyword. If specified, the extension coefficient of the property value is automatically set equal to its base size.

**NOFLEX**

Keyword. If specified, the extension coefficient of the property value is automatically set equal to zero.

*REGEXP rexpr \[message\]*

Specifying a regular expression to which the property value should correspond after editing. Sets the value for the default design and can be overridden in the **DESIGN** instruction.

*rexpr*

A string literal that describes the regular expression. Rules are similar to the rules [accepted in Java](http://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html) .

*message*

*S*tring literal describing the message that will be shown to the user if they enter a value that does not match the regular expression. If not specified, a default message will be displayed.

*ECHO*

A keyword that causes asterisk (\*) characters to be displayed instead of a property value. Used, for example, for passwords. Can be overridden in the **DESIGN** instruction. 

*CHANGEKEY key \[SHOW | HIDE\] *

Specifies a [key combination](Form-events_5636111.html#Formevents-keyboard) which triggers editing of this property. Sets the value for the default design and can be overridden in the **DESIGN** instruction.

*key*

[String literal](Literals_35521071.html#Literals-strliteral) describing the key combination *. * The method of specifying is similar to the method of specifying a parameter in the Java class method [Keystroke.getKeystroke (String)](http://docs.oracle.com/javase/7/docs/api/javax/swing/KeyStroke.html#getKeyStroke(java.lang.String)).

*SHOW*

Keyword. When specified, the key combination will be displayed in the property caption. Used by default.

*HIDE*

Keyword. When specified, the key combination will not be displayed in the property caption. 

*DEFAULTCOMPARE*

Specifies a [default filter](Interactive-view_1573071.html#Interactiveview-userfilters) type for the property.

*compare*

Default filter type. [String literal](Literals_35521071.html#Literals-strliteral). Can be one the following values: '=', '&gt;', '&lt;', '&gt;=', '&lt;=', '!=', 'START\_WITH', 'CONTAINS', 'ENDS\_WITH', 'LIKE'. The default value is '=' ** ** for all data types except case-insensitive string types, for which the default value is 'CONTAINS'**. ** If **System.defaultCompareForStringContains ** is enabled, default value is 'CONTAINS'** **for all string data regardless of case sensitivity. Can be overridden in the **DESIGN** instruction.

**Examples**


