---
title: 'How-to: Physical model'
---

By default, each class in the database creates a separate table that stores all those [properties](Properties.md) whose only parameter is an object of this class. The key in this table is a field that stores a unique object ID. For properties with several parameters, a table will be created with the IDs of parameter objects as keys.

To explicitly specify a table in which all properties with one parameter of this class will be stored, we can use the following construct:



The table in which this field will be stored will be selected according to the same algorithm as for [data properties](Data_properties_DATA_.md). In this case, it will go into the table <Namespace\>**\_animal**.
