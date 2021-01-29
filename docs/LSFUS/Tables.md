---
title: 'Tables'
---

For storing and calculating values of the [properties](Properties.md) the **lsFusion** platform uses a relational database. All [data properties](Data_properties_DATA_.md), as well as all calculated [properties](Properties.md) marked as [materialized](Materializations.md), are stored in the fields of the *tables* in the database. For each table, there is a set of key fields with the names **key0**, **key1**, ..., **keyN**, where the object IDs are stored. All other fields store property values in such a way that in the corresponding field of each row there is a property value for the objects with IDs from the key fields. Objects of built-in classes can also be used as table keys.

When creating a table, you must specify a list of the object classes which will be the keys in this table.

**Property table determining**

For each property, you can specify in which table it should be stored. In this case, the number of the table keys must be equal to the number of property parameters, and the parameter classes must match the table key classes. If the table in which the property should be stored is not set explicitly, the property will be placed automatically to the "nearest" existing table in the system (i.e., which number of keys matches the number of the property parameters and the key classes are the closest to the parameter classes). Also if necessary, you can use the special option (**NODEFAULT**) to specify that when automatically determining property tables, this table should be ignored (i.e., a property can only be put into such a table explicitly using the corresponding option (**TABLE**)).

**Table naming**

For each table created in the platform, a corresponding table is created in the database, which name, depending on the selected naming policy, is defined as follows:


