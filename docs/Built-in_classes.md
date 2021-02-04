---
title: 'Built-in classes'
---

*Built-in classes* are [classes](Classes.md) whose instances are objects belonging to primitive data types such as integers, strings, etc. 


### Inheritance

The builtin classes can be divided into four class *families* (assuming that each of the remaining classes forms its own class family)


The builtin classes inherit only from one another within a single family, and cannot inherit from or be inherited by user classes. Inheritance within each family works on the principle that the narrower class inherits from the broader one.

### **Common ancestor**

According to this inheritance mechanism, the common ancestor of two builtin classes (e.g. for the [selection](Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_.md) operation) is determined as follows:

*Strings*:

    result = STRING[blankPadded = s1.blankPadded OR s2.blankPadded, caseInsensitive = s1.caseInsensitive OR s2.caseInsensitive, length = MAX(s1.length, s2.length)]

where *blankPadded*, *caseInsensitive* and *length* are in turn determined as:


*Numbers*:

    IF p1.integerPart >= p2.integerPart AND p1.precision >= p2.precision
        result = p1 
    ELSE IF p1.integerPart >= p2.integerPart AND p1.precision >= p2.precision
        result = p2 
    ELSE IF p1.integerPart > p2.integerPart  
        result = NUMERIC[p1.integerPart+p2.precision, p2.precision]
    ELSE  
        result = NUMERIC[p2.integerPart+p1.precision, p1.precision]

where integerPart and precision, in turn, are determined as:


*Files of a specific type*:

    IF p1 = p2
        result = p1
    ELSE
        result = RAWFILE

*Links to files of a specific type*:

    IF p1 = p2
        result = p1
    ELSE
        result = RAWLINK

Note that sometimes in programming the definition of a common parent class is associated with *implicit typecasting*.

### Default value

It is sometimes necessary to use some value for a built-in class which will differ from **NULL** (for example, in an import condition with [data import](Data_import_IMPORT_.md)). Let's call this value the *default value*. It is defined as follows:


### Extensions of specific type files

When files of a specific type (**JSONFILE**, **XMLFILE**, ...) are cast into a file of dynamic type (**FILE**), whether explicitly or implicitly (e.g. with [data import](Data_import_IMPORT_.md) without specifying a format or when [working with external systems](Access_to_an_external_system_EXTERNAL_.md)), the extension of the result file is determined as follows:


### The order of determining the result property when [accessing from an external system](Access-from-an-external-system_51216539.html#Accessfromanexternalsystem-httpresult)

