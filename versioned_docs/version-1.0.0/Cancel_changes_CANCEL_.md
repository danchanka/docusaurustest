---
title: 'Cancel changes (CANCEL)'
---

The *cancel changes* operator completely clears the current [change session](Change_sessions.md).

As with other session management operators, you can explicitly specify [nested local properties](Session_management.md#nested) for the cancel operator.

:::caution
This operator works differently if executed inside [events](Events.md#change) handling: in this case, it cancels [applying the changes](Apply_changes_APPLY_.md) that led to this handling
:::

### Language

To declare an action that implements cancellation, use the [**CANCEL** operator](CANCEL_operator.md).

### Examples

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://documentation.lsfusion.org/sample?file=ActionSample&block=cancel"/>
