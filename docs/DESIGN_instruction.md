---
title: 'DESIGN instruction'
---

The **DESIGN** instruction changes [form design](Form_design.md).

### Syntax

The syntax consists of nested blocks of *design instructions.* The outer block, beginning with the keyword **DESIGN**, defines a [form](Forms.md) whose design will change: 

    DESIGN formName [caption] [CUSTOM] {
        designStatement1
        ...
        designStatementN
    }

Each  *designStatement * describes one design instruction. Design instructions are of the following types: 

    NEW name [insertPos] [{...}];
    MOVE selector [insertPos] [{...}];  
    selector [{...}];   
    REMOVE selector;
    propertyName = value;

The first three instructions – *create* (**NEW**), *move* (**MOVE**), and *modify *– may in turn contain nested blocks of design instructions. The design instructions *remove* (**REMOVE**) and *change property value* (**=**) are simple single instructions. Each navigator instruction must end with a semicolon if it does not contain a nested instruction block.

Each *selector* can be one of the following types:

    componentName
    PROPERTY(formPropertyName)
    FILTERGROUP(filterGroupName)
    PARENT(selector)
    GROUP([propertyGroupSelector][,groupObjectTreeSelector])
    noGroupObjectTreeContainerType
    groupObjectTreeContainerType(groupObjectTreeSelector)

In turn, *groupObjectTreeSelector* can be one of two types:

    groupObjectSelector
    TREE treeSelector

### Description

Using the **DESIGN** instruction the developer can manage the [design](Form_design.md) [of the](Interactive_view.md) interactive form view by creating, moving, and deleting containers and components, as well as changing their certain properties. By default, a [default design](Form_design.md#default-design)  is created for each form, along with appropriate containers. If necessary, you can recreate the design without the default containers and previously configured settings. This is done using the keyword **CUSTOM**.  

Each block of design instructions enclosed in braces alows to modify a particular component and its descendants. Let's call this component the *current component* or the *current container* if we know that the component should be a container in our case. In the external block following the  **DESIGN **keyword, the **main** container is the current component. There are the following design instructions:

-   The *create instruction* (**NEW**) allows to create a new container, making it a descendant of the current one. The newly-created container will be the current component in the design instructions block contained in this instruction.
-   The *move instruction* (**MOVE**)  allows to make an existing component a direct descendant of the current container. This component is first removed from the previous parent container. The component being moved becomes the current component in the design instructions block contained in this instruction. 
-   The *modify* instruction allows to modify the specified component which must be a descendant (not necessarily a child) of the current container. The specified element will be the current component in the design instructions block contained in this instruction.
-   The *remove instruction*(**REMOVE**) allows to remove a specified component from the component hierarchy. The component to be removed has to be a descendant of the current container. 
-   The *change property value instruction*(**=**) allows to change the value of the specified property of the current component.

The component hierarchy described in this instruction can have an arbitrary number of nesting levels and describe any number of components and their properties at each level.

To access design components, you can use their names or address property components on the form (**PROPERTY**), the parent component (**PARENT**), property group components (**GROUP**), and other base components/default design components.

### Parameters

### *Common parameters*

*formName*

The name of the form being changed. [Composite ID](IDs.md#cid-broken).* *

*caption*

The new form caption in the interactive view mode. [String literal](Literals.md#strliteral-broken). The form caption doesn't change in the [navigator](Navigator.md).

*name*

The name of the container being created. [Simple ID](IDs.md#id-broken).

*insertPos*

Component insertion or moving position. Specified with one of the following options:*  
*

**BEFORE** selector

**AFTER** selector 

Specifies that the component should be added or moved before (**BEFORE**) or after (**AFTER**) the specified components. The specified component must be a child of the current container. 

**FIRST**

A keyword specifying that the component should be added or moved to the first position in the list of the current container's children. 

*propertyName*

The name of the component property. The list of existing properties is provided in the tables below.

*value*

The value assigned to the corresponding container property. Acceptable value types are provided in the tables below.

### *Component properties*

[table was removed]

### *Container properties*

[table was removed]

### *Properties of actions and properties on the form*

[table was removed]

### *Toolbar properties*

[table was removed]

### *Other properties*

[table was removed]

### *Selector parameters*

*componentName*

Name of a design component. [Simple ID](IDs.md#id-broken).

*formPropertyName *

[Property/action name on the form](Properties_and_actions_block.md#name-broken)*.*

*filterGroupName*

The name of [a filter group](Filters_and_sortings_block.md#filterName-broken). [Simple ID](IDs.md#id-broken).

*propertyGroupSelector*

The name of a [property group](Groups_of_properties_and_actions.md). [Simple ID](IDs.md#id-broken).

*groupObjectSelector*

The name of an [object group on the form](Object_blocks.md#groupName-broken). [Simple ID](IDs.md#id-broken).

*treeSelector*

The name of [an object tree on the form](Object_blocks.md#treeName-broken). [Simple ID](IDs.md#id-broken).

*noGroupObjectTreeContainerType*

Type of form container:**  
**

-   **BOX** – a common form container
-   **PANEL** – contains components of properties that are displayed in PANEL view and display group of which is undefined.
-   **TOOLBARBOX** – a common toolbar container with property components that are displayed in the panel, marked for placement on the **TOOLBAR**,** **and for which no object group is defined.
-   **TOOLBARLEFT **- the left part of the toolbar
-   **TOOLBARRIGHT** - the right part of the toolbar
-   **TOOLBAR** contains components of properties that are displayed in TOOLBAR view and display group of which is undefined.

*groupObjectTreeContainerType*

The type of an object group / tree container.

-   All types of containers of the *noGroupObjectTreeContainerType* form (identical semantics)
-   **GRIDBOX **- a table container
-   **GRID **- a table component
-   **TOOLBARSYSTEM** - a system toolbar (number of records, group adjustment, etc.).
-   **FILTERGROUPS **- contains filter group components
-   **USERFILTER **- a component that displays custom filters

 **Examples**


import {CodeSample} from './CodeSample.mdx'

<CodeSample url="http://documentation.lsfusion.org:5000/sample?file=FormSample&block=design"/>

The output is the following form:

![](attachments/4718609/43648025.png)
