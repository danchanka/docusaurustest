---
title: 'Simple constraints'
---

The platform currently supports four types of *simple constraints*: *consequence*, *exception*, *equality*, and *definiteness*. For all simple constraints, an *automatic resolution* mechanism is supported. When this is enabled, instead of throwing an error the platform itself restores system integrity.

[table was removed]

\* A change to **NULL**/non-**NULL** is the following:

-   For [data](Data_properties_DATA.md) properties - [input](Property_change_CHANGE.md) **NULL** or the default value for this property value class.
-   For [membership](Classification_IS_AS.md) to a class - deleting an object \\\\ adding an object of a class for which belonging to the class is checked.
-   For an [aggregation](Grouping_GROUP.md) constraint - (only if changing to non-**NULL**) create an object of the base class (**System**.**Object**), change to non-**NULL** conditions of the aggregation constraint, write the values of the corresponding parameters to all grouping values.

Just as for a basic [constraint](Constraints.md), for each simple constraint, a base event must be defined, which determines when the specified constraint will be checked. 

Note that the definiteness constraint is a special case of the consequence, in which the consequence is a property that must be defined, and the premise is its signature (a property obtained from it using the corresponding [operator](Property_signature_CLASS.md)).

There is also an implicit fifth kind of simple constraint, *uniqueness*, but it is combined with an aggregation operator (which returns this most unique value), and therefore it is not considered here. Together with consequences, this type of constraint allows to implement the [aggregation](Aggregations.md) mechanism. 

### Examples

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://documentation.lsfusion.org/sample?file=InstructionSample&block=means"/>
