---
title: 'IMPORT operator'
---

The **IMPORT** operator creates an [action](Actions.md) that imports data from a specified file into [specified properties (parameters)](Data_import_IMPORT_.md) or, in general, into a [specified form](57737720.html#Inastructuredview(EXPORT,IMPORT)-importForm).

**Syntax**

    IMPORT [importFormat] FROM fileExpr importDestination [DO actionOperator [ELSE elseActionOperator]]
    IMPORT formName [importFormat] [FROM (fileExpr | (groupId1 = fileExpr1 [, ..., groupIdM = fileExprM])]

*importFormat* can be specified by one of the following options:

    JSON [CHARSET charsetStr]
    XML [ATTR] [CHARSET charsetStr]
    CSV [separator] [HEADER | NOHEADER] [ESCAPE | NOESCAPE] [CHARSET charsetStr]
    XLS [HEADER | NOHEADER] [SHEET (sheetExpr | ALL)]
    DBF [CHARSET charsetStr]
    TABLE

*importDestination* can be specified by one of the following options:

    TO [(objClassId1, objClassId2, ..., objClassIdK)] propertyId1 [= columnId1], ..., propertyIdN [= columnIdN] [WHERE whereId]
    FIELDS [(objClassId1 objAlias1, objClassId2 objAlias1, ..., objClassIdK objAliasK)] propClassId1 [propAlias1 =] columnId1 [NULL], ..., propClassIdN [propAliasN =] columnIdN [NULL]

    Description

The **IMPORT** operator creates an action that imports data from a specified file into the values of specified properties or into a specified form. 

If * *the format of the imported file* *is not specified, it is determined automatically depending on the class of the imported file (or on the extension, if the class is **FILE**), in the following way:


