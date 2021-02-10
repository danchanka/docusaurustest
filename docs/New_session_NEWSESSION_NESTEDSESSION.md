---
title: 'New session (NEWSESSION, NESTEDSESSION)'
---

The new [session](Change_sessions.md) operator allows you to execute an action in a session different from the current one. 

As with other session management operators, you can explicitly specify [nested local properties](Session_management.md#nested-local-properties) for the new session operator.

### Nested sessions

It is also possible to create a new *nested* session. In this case, all changes that occurred in the current session are copied to the nested session (the same happens when [changes are discarded](Cancel_changes_CANCEL.md) in a nested session). At the same time, when you [apply changes](Apply_changes_APPLY.md) in the nested session, all changes are copied back to the current session (without being saved to the database). 

### Language

To create an action that executes another action in a new session, use the [**NEWSESSION** operator](NEWSESSION_operator.md) (for nested sessions, use the [**NESTEDSESSION** operator](NESTEDSESSION_operator.md)).

### Examples



