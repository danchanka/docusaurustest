---
title: 'Materializations'
---

Almost any aggregated [property](Properties.md) in the platform can be *materialized*. In this case, the property will be stored in the database permanently and automatically updated when the data on which this property depends is changed. At the same time, when reading the values of the materialized property, these values will be read directly from the database, as if the property was [data](Data_properties_DATA.md) (and not calculated every time). Accordingly, all data properties are materialized by definition.

A property can be materialized if and only if for it there is a finite number of object collections for which the value of this property is not **NULL** (that is, the iteration operation for all of its non-**NULL** values is [correct](Set-operations_4391029.html#Setoperations-correct))

### Language

To materialize a property, use the [**MATERIALIZED** option](Property-options_7798786.html#Propertyoptions-persistent) in the property options.

### Examples

