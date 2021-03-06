---
title: 'Search'
---

Each element in the system contains certain information that allows it [to be uniquely identified](Element_identification.md) among other elements of the system. However, providing all the information about the element in each place it is used is rather cumbersome; so the platform has a special *search* algorithm, which allows you to find the desired element with only part of the information about it (for example, only a short [name](Naming.md) and the [module](Modules.md) which uses the item you are searching for).

In general, a search algorithm consists of one or more *search steps. *The steps are executed one after another so that if the required element is not found in the first step, the second step is executed, then the next and so on until either the required element is found or the steps are completed (in the latter case, the platform will throw an error that the element was not found).

Each search step, in turn, consists of several substeps:

-   *Step conditions* - a set of conditions, each of which must be met in order for the step to make sense at all. This check is done before any elements of the system are examined, and depends entirely on the context of the call.
-   *Selection conditions* - a set of conditions, each of which must be met for any element that is potentially the required element. In this step, the elements are independent of each other, and the result of this step is a selected *set of candidates, *to be the required element.
-   *Selection operations* - a list of operations each of which filters a set of candidates, depending on which of the candidates in this set is potentially "better" (that is, with a higher probability) suited for the role of the required element.

If, after performing the last selection operation, there remains:

-   exactly one element - it is considered to be the required element. 
-   more than one element - the platform will throw an error that it is not possible to unambiguously determine the required element
-   zero elements - the platform will either go to the next search step (if one exists) or it will throw an error that the element was not found.

Below are the steps, conditions and operations of the search algorithm, depending on the type of the required element:

|Element type|Search step|Step conditions|Selection conditions|Selection operations|
|---|---|---|---|---|
|[Modules](Modules.md)|<br /><br/>|<p><br /><br/></p>|<ul><br/><li>Name equals[...](#name)</li><br/></ul>|<br /><br/>|
|[Forms](Forms.md), [Classes](User_classes.md), [Navigator Elements](Navigator.md), [Property and action groups](Groups_of_properties_and_actions.md) , [Tables](Tables.md), [Navigator Design](Navigator_design.md)|<br /><br/>|<p><br /><br/></p>|<ul><br/><li>Name matches[...](#name)</li><br/><li>Located in dependent module[...](#module)</li><br/><li>Located in specified namespace (if explicitly specified)[...](#namespace)</li><br/></ul>|<ul><br/><li>Selection of a priority namespace (if the namespace is not explicitly specified)[...](#priority)</li><br/></ul>|
|<p>[Metacodes](Metaprogramming.md)</p>|<br /><br/>|<p><br /><br/></p>|<ul><br/><li>Name matches[...](#name)</li><br/><li>Located in dependent module[...](#module)</li><br/><li>Located in specified namespace (if explicitly specified)[...](#namespace)</li><br/><li>Number of parameters matches[...](#metacode)</li><br/></ul>|<ul><br/><li>Selection of a priority namespace (if the namespace is not explicitly specified)[...](#priority)</li><br/></ul>|
|[Properties](Properties.md), [Actions](Actions.md)|Local|<ul><br/><li>Search for property inside action[...](#locals)</li><br/><li>Namespace not specified explicitly[...](#nonamespace)</li><br/></ul>|<ul><br/><li>Name matches[...](#name)</li><br/><li>Located upper in the stack[...](#stack)</li><br/><li>Parameters classes match[...](#direct)</li><br/></ul>|<ul><br/><li>Selection of more specific classes of parameters[...](#concrete)</li><br/></ul>|
|Local common|<ul><br/><li>Search for property inside action[...](#locals)</li><br/><li>Namespace not specified explicitly[...](#nonamespace)</li><br/></ul>|<ul><br/><li>Name matches[...](#name)</li><br/><li>Located upper in the stack[...](#stack)</li><br/><li>Parameters classes intersect[...](#indirect)</li><br/></ul>|<p><br /><br/></p><br/><p><br /><br/></p>|
|Global|<br /><br/>|<ul><br/><li>Name matches[...](#name)</li><br/><li>Located in dependent module[...](#module)</li><br/><li>Located in specified namespace (if explicitly specified)[...](#namespace)</li><br/><li>Parameters classes match[...](#direct)</li><br/><li>Abstract property (if an abstract property is being searched for)[...](#abstract)</li><br/></ul>|<ul><br/><li>Selection of a priority namespace (if the namespace is not explicitly specified)[...](#priority)</li><br/><li>Selection of non-matching classes of parameters (if an abstract property is being searched for)[...](#notequals)</li><br/><li>Selection of more specific classes of parameters[...](#concrete)</li><br/></ul>|
|Global common|<ul><br/><li>Not searching for an abstract property[...](#notabstract)</li><br/></ul>|<ul><br/><li>Name matches[...](#name)</li><br/><li>Located in dependent module[...](#module)</li><br/><li>Located in specified namespace (if explicitly specified)[...](#namespace)</li><br/><li>Parameters classes intersect[...](#indirect)</li><br/></ul>|<ul><br/><li>Selection of a priority namespace (if the namespace is not explicitly specified)[...](#priority)</li><br/></ul>|

Description of steps, conditions and operations of the search algorithm:

## Name matches {#name}

The name of the candidate matches the search name (must always be specified explicitly when searching). The comparison is case-sensitive (i.e. aA != AA).

## Located in dependent module {#module}

Candidate module [depends on](Modules.md#depends) the module in which the search is performed.

## Located in specified namespace (if explicitly specified) {#namespace}

[Namespace](Naming.md#namespace) of the candidate equals the namespace of the search (if this namespace is specified explicitly).

## Selection of a priority namespace (if the namespace is not explicitly specified) {#priority}

If the current set contains candidates from the namespace in which the search is performed, all other candidates are deleted from the set of candidates, and the selection operation is completed. If not, a similar action is repeated for *priority* namespaces of the module in which the search is being performed (in the order in which these priority namespaces were set). If nothing is found for them either, the set of candidates remains unchanged.

## Number of parameters matches {#metacode}

The number of parameters of the candidate is equal to the number of parameters of the call.

## Search for property inside action {#locals}

This step is only executed to search for a property, and only if this search is inside some action (and not, for example, in a form declaration).

### Namespace not specified explicitly {#nonamespace}

This step is only executed if no search namespace is specified.

## Located upper in the stack {#stack}

The candidate is a [local property](Data_properties_DATA_.md#local) and:

-   is declared inside an operator of a [sequence](Sequence_..._.md) that executes an action that refers to the required element.
-   is declared earlier than the action that directly refers to the required element.

## Suitable classes of parameters {#direct}

[Classes of call parameters](#call-broken) [match](#directclasses-broken) [the classes of the candidate's parameters](#decl-broken) or classes of the referring parameters are unknown.

## Classes of parameters intersect {#indirect}

[Classes of the referring parameters](#call-broken) [intersect](#indirectclasses-broken) with [classes of the candidate's parameters](#decl-broken).

## Selection of more specific classes of parameters {#concrete}

If the set of candidates includes properties **A** and **B** such that **A**'s parameter classes match **B**'s, then property **B** is removed from the set of candidates.

## Not searching for an abstract property {#notabstract}

This step is not executed if a property (action) is searched in the [extension](Property_extension.md) operator of the property (action), and the searched property is an extensible (abstract) property (when searching for properties in the right one part of extension operator implementation the common search mechanism is used).

## Abstract property (if an abstract property is being searched for) {#abstract}

The candidate is an [abstract](Property_extension.md) property (action).

## Selection of non-matching classes of parameters (if an abstract property is being searched for) {#notequals}

If:

-   the search is for an abstract property (action)
-   the referring parameter classes are not explicitly specified
-   the set of candidates includes properties (actions) whose parameter classes are equal to the classes of the call's parameters
-   the set of candidates includes properties (actions) whose parameter classes are not equal to the classes of the call's parameters

Then: properties (actions) from the third section are deleted from the set of candidates (i.e., those for which the parameter classes are equal to the classes of the referring parameters)

#### Additional operations to search for properties / actions

*Matching parameter classes*

Let's say that the classes of parameters (A1, ..., An) *match* the classes of parameters (B1, ..., Bm) if:

-   n = m, i.e. the number of parameters is the same
-   for each parameter **i**, one of the following is true:
    -   Ai is unknown (equal to **?**)
    -   Bi is unknown (equal to **?**)
    -   Ai [inherits](User_classes.md#inheritance) from Bi (more specifically, the set of descendant classes of Bi includes the set of descendant classes of Ai)

*Intersection of parameter classes*

Let's say that the classes of parameters (A1, ..., An) *intersect with* the classes of parameters (B1, ..., Bm) if:

-   n = m, i.e. the number of parameters is the same
-   for each parameter **i**, one of the following is true:
    -   Ai is unknown (equal to **?**)
    -   Bi is unknown (equal to **?**)
    -   Ai and Bi have a common descendant (more specifically, the set of descendant classes of Bi intersects with the set of descendant classes of Ai)

*Defining the classes of the referring parameters*

When a call is made a property (action), if the parameter classes are not explicitly set, the platform tries to automatically determine them from the reference context. The following is an (incomplete) list of possible contexts, and how the platform determines the referring parameter classes in these cases:

|Context|Call parameter classes|
|---|---|
|Composition / Call|Classes of the values of argument properties|
|Use on the form|Classes of objects taken by the required property/action|
|Add actions to the navigator|Empty list|
|Results of input, external access|Empty list|
|Simple partitioning|Classes of the values of group properties (<strong>BY</strong> block)|
|Nested local properties in session operators|Unknown|
|Data import|If a list of values is imported (<strong>LIST</strong>), the empty list, otherwise a list of a single <strong>INTEGER</strong> element|

*Determining parameter classes of a property (action)*

If the parameter classes of a property (action) are not explicitly specified, the platform tries to automatically determine them from the property (action) implementation. The following is an (incomplete) list of possible implementations, and how the platform determines property (action) parameter classes in these cases:

|Context|Call parameter classes|
|---|---|
|Expressions|Classes of the parameters (in the order of their use)|
|Primary, Abstract|Classes are specified explicitly in the operator itself|
|Formula, Internal Call|The classes can be specified explicitly in the operator itself; if not specified, all parameter classes are considered unknown (<strong>?</strong>) and the number is determined by the specifics of the particular operator|
|Grouping|Classes of the values of group properties (<strong>BY</strong> block)|
|Operations with object groups|Classes of objects belonging to the used objects group|

#### Examples


import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://documentation.lsfusion.org/sample?file=ResolveASample"/>


<CodeSample url="https://documentation.lsfusion.org/sample?file=ResolveBSample"/>


<CodeSample url="https://documentation.lsfusion.org/sample?file=ResolveCSample"/>

**  
**
