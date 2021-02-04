---
title: 'NESTEDSESSION operator'
---

The **NESTEDSESSION** operator creates an [action](Actions.md) that executes the other action in a [nested session](30769225.html#Newsession(NEWSESSION,NESTEDSESSION)-nested).

### Syntax

    NESTEDSESSION action 

### Description

The **NESTEDSESSION** operator creates an action which executes the other action in a nested session. With that, all changes that have already been made in the current session get into the created nested session. Also, all changes that are made in the nested session will get into the current session when [the changes are applied](Apply_changes_APPLY_.md) in the nested session.

### Parameters

*action *

A [context-dependent action operator](Action-operator_36307157.html#Actionoperator-contextdependent) that defines an action to be executed in the nested session.

### Examples



  
