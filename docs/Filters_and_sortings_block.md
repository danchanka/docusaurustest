---
title: 'Filters and sortings block'
---

The filter and order block of the [FORM instruction](FORM_instruction.md) – add [filters](Form-structure_1573069.html#Formstructure-filters) and [orderings](Form-structure_1573069.html#Formstructure-sort) to the form structure; add [filter groups](Interactive-view_1573071.html#Interactiveview-filtergroup) to the interactive form view.

Fixed filter block

**Syntax**

    FILTERS expression1, ..., expressionN

**Description**

The fixed filters block adds filters that will be automatically applied when any form data is read. One block can list an arbitrary number of filters separated by a comma .

Each filter is defined with an  [expression](Expression.md) that defines the filtering condition. In all expressions and context-dependent action operators you can use the names of the objects already declared on the form as parameters.

**Parameters**

*expression1, ..., expressionN*

List of filter expressions.

**Examples**

****************


