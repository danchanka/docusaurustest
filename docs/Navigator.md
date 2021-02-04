---
title: 'Navigator'
---

*Navigator* is a hierarchical structure (tree) consisting of *navigator elements*. There are three types of navigator elements:

-   *folder - *combines other navigator elements into a group. Selecting this element [affects](Navigator-design_1310742.html#Navigatordesign-selectedfolder) the display of its children if they belong to another [window](Navigator_design.md).
-   *action* – executes a specified [action](Actions.md). Only actions that take no arguments can be added to the navigator.
-   *form* – [opens](In_an_interactive_view_SHOW_DIALOG_.md) a specified [form](Forms.md) in the interactive view and the [asynchronous](36307331.html#Inaninteractiveview(SHOW,DIALOG)-flow) mode.

When an element is added to the navigator, a *parent* element is defined for it. The root element of the navigator is the **System.root** folder. 

If no navigator elements are displayed in a particular navigator folder, this folder is automatically hidden.

Just as an [interactive](Interactive_view.md) form view, the navigator is displayed in a 2D space: on the user's device screen. Therefore, it's [design](Navigator_design.md) can/has to be defined, as well as for all other [graphic](Form-views_29884425.html#Formviews-graphic) views.

**Language**

To manage the navigator use the [**NAVIGATOR** instruction](NAVIGATOR_instruction.md).

**Examples**

