---
title: 'Search (SEEK)'
---

*Search* operator tries to make the specified object collection [current](Form-structure_1573069.html#Formstructure-currentObject) for the specified form object group. The objects from the specified object collection shall be called *seek objects*.

**Seek direction**

If the object group for which the search is performed contains objects other than search objects, for these objects (which we will call *additional*) the collection of objects that will be selected as current is determined by special options:

-   **FIRST** - the <u>first</u> matching collection according to the specified order will be selected. 
-   **LAST** - the <u>last</u> matching collection according to the specified order will be selected. 

If the required object collection is not found for the seek objects, the current object collection will be the closest to the desired one. The direction in which this closest object collection will be selected is also determined by the above options:

-   **FIRST** - the <u>next</u> closest collection according to the specified order will be selected. 
-   **LAST** - the <u>previous</u> closest collection according to the specified order will be selected. 

**Setting NULL Values**

Also, this operator allows resetting all objects of the specified group to **NULL**. In this case, the seek direction is not applicable/not specified.

**Language**

To declare an action that implements an object change, use the [**SEEK** operator](SEEK_operator.md).

**Examples**

