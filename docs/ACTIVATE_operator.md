---
title: 'ACTIVATE operator'
---

The **ACTIVATE** operator creates an [action](Actions.md) that [activates](Activation_ACTIVATE.md) a specified [form](Forms.md), tab, property, or action on a form

### Syntax 

    ACTIVATE FORM formName
    ACTIVATE TAB formName.componentSelector
    ACTIVATE PROPERTY formPropertyId

### Description

The **ACTIVATE** operator creates an action that activates a form, a tab, a property or an action on a form. 

### Parameters

*formName*

Form name. [Composite ID](IDs_1573053.html#IDs-cid).

*componentSelector*

Design component [selector](DESIGN-instruction_4718609.html#DESIGNinstruction-selector). The component must be a tab in the tab panel.

*formPropertyId*

The global [ID of a property or action on a form](IDs_1573053.html#IDs-formpropertyid) which should get focus.

### Examples


  
