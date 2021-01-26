# lsFusionSimple event

# Simple event

*Simple* event - an [event](lsFusionEvents.md) that occurs when the value of the specified [property](lsFusionProperties.md) (which shall be called an event *condition*) changes to non-**NULL**. This event is a kind of extension of a basic event (adding an additional condition), which means that all the same parameters must be set as for an basic event, in particular:

-   event [type](Events_688155.html#Events-type), which determines the point in time when this simple event will occur (including checking the condition).
-   event [handler](lsFusionEvents.md) - an [action](lsFusionActions.md) to be executed upon the occurrence of this simple event

Compared to a basic event, a simple event just wraps its handling in a [loop](lsFusionLoop_FOR_.md) operator whose condition is an event condition. However, simple events have a number of important additional features:

-   If the condition does not contain the [previous value operator (PREV)](lsFusionPrevious_value_PREV_.md), the platform itself wraps the specified condition in a [change operator (SET)](lsFusionChange_operators_SET_CHANGED_..._.md). This significantly reduces the risk of creating incorrect handling (which will have consequences if the change session is empty)
-   Such events are more understandable and readable, as they reflect the classic cause-effect relationship (when one thing occurs, another is done)
-   For these events there is the possibility of "recalculation" - that is, executing handlers in a mode where all previous values are **NULL** (as if the database were empty). This is useful when an event is created for an existing database, and the old data must also follow the logic of this event.
-   If the action in a simple event is a single [change](lsFusionProperty_сhange_CHANGE_.md) of a given property, this event is easily made [calculated](lsFusionCalculated_events.md) and vice versa.

**Language**

To create simple events, use the [**WHEN** instruction](lsFusionWHEN_instruction.md).

**Examples**


