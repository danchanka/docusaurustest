---
title: 'How-to: Physical model'
---

By default, each class in the database creates a separate table that stores all those [properties](Properties.md) whose only parameter is an object of this class. The key in this table is a field that stores a unique object ID. For properties with several parameters, a table will be created with the IDs of parameter objects as keys.

To explicitly specify a table in which all properties with one parameter of this class will be stored, we can use the following construct:

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://documentation.lsfusion.org/sample?file=UseCaseDBModel&block=sample1"/>

With a standard [field naming policy](Tables.md#name), a <[Namespace](Naming.md)\>**\_animal** table will be created within the database, with a key **key0** with the internal ID of an animal and a <[Namespace](Naming.md)\>**\_name\_Animal** field storing its name.

For properties with multiple parameters, we can create a table as follows:

<CodeSample url="https://documentation.lsfusion.org/sample?file=UseCaseDBModel&block=sample2"/>

In this case we create a <Namespace\>**\_animalCountry** table with two keys: **key0** for the animal and **key1** for the country. It will also have a <Namespace\>**\_population\_Animal\_Country** field.

All other properties with signature (**Animal**, **Country**) will also be placed in this table. If some property needs to be placed in a separate table, then the following technique can be used:

<CodeSample url="https://documentation.lsfusion.org/sample?file=UseCaseDBModel&block=sample3"/>

This table will only store properties for which it is explicitly specified. All others will go into the first table declared with the necessary signature.

Computed properties that need to be stored [permanently](Materializations.md) in the table need to be marked with the keyword **MATERIALIZED** :

<CodeSample url="https://documentation.lsfusion.org/sample?file=UseCaseDBModel&block=sample4"/>

The table in which this field will be stored will be selected according to the same algorithm as for [data properties](Data_properties_DATA_.md). In this case, it will go into the table <Namespace\>**\_animal**.
