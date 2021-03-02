---
title: 'Primitive input (INPUT)'
---

The  *primitive input *operator creates an [action](Actions.md) that requests the client to [input a value](Value_input.md) [of a builtin class](Built-in_classes.md). The user can [cancel the input](Value_input.md#cancellation-and-input-result), for example by pressing the **ESC** key on the keyboard.

As with other value input operators, this operator allows to:

-   specify [initial object values](Value_input.md#initial-values-and-automatic-change)
-   specify [main and alternative](Value_input.md#cancellation-and-input-result) actions. The first is called if the input was successfully completed, the second if not (i.e. if the input was canceled).
-   [change](Value_input.md#initial-values-and-automatic-change) a specified property

This operator can only be used in property  [change event](Form_events.md#property-broken) handlers on a form.

### Language

The syntax of the primitive input operator is described by [the **INPUT** operator](INPUT_operator.md).

### Examples

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://documentation.lsfusion.org/sample?file=ActionSample&block=input"/>