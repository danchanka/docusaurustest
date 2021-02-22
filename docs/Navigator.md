---
title: 'Navigator'
---

*Navigator* is a hierarchical structure (tree) consisting of *navigator elements*. There are three types of navigator elements:

-   *folder - *combines other navigator elements into a group. Selecting this element [affects](Navigator_design.md#selected-folder) the display of its children if they belong to another [window](Navigator_design.md).
-   *action* – executes a specified [action](Actions.md). Only actions that take no arguments can be added to the navigator.
-   *form* – [opens](In_an_interactive_view_SHOW_DIALOG.md) a specified [form](Forms.md) in the interactive view and the [asynchronous](In_an_interactive_view_SHOW_DIALOG.md#flow-management) mode.

When an element is added to the navigator, a *parent* element is defined for it. The root element of the navigator is the **System.root** folder. 

If no navigator elements are displayed in a particular navigator folder, this folder is automatically hidden.

Just as an [interactive](Interactive_view.md) form view, the navigator is displayed in a 2D space: on the user's device screen. Therefore, it's [design](Navigator_design.md) can/has to be defined, as well as for all other [graphic](Form_views.md#graphic-view) views.

### Language

To manage the navigator use the [**NAVIGATOR** instruction](NAVIGATOR_instruction.md).

### Examples

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="http://documentation.lsfusion.org:5000/sample?file=InstructionSample&block=navigator"/>
