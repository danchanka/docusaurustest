# lsFusionEXPORT operator

# EXPORT operator

The **EXPORT** operator: creates an [action](lsFusionActions.md) that exports [specified properties](lsFusionData_export_EXPORT_.md) to a file, or, in common case, that [opens a form](lsFusionIn_a_structured_view_EXPORT_IMPORT_.md) in a structured view. 

**Syntax**

    EXPORT [exportFormat] [TOP n] FROM [columnId1 =] propertyExpr1, ..., [columnIdN = ] propertyExprN [WHERE whereExpr] [ORDER orderExpr1 [DESC], ..., orderExprL [DESC]] [TO propertyId]
    EXPORT formName [OBJECTS objName1 = expr1, ..., objNameK = exprK] [exportFormat] [TOP n] [TO (propertyId | (groupId1 = propertyId1, ..., groupIdN = propertyIdM))]

*exportFormat* can be specified by one of the following options:

    JSON [CHARSET charsetStr]
    XML [ATTR] [CHARSET charsetStr]
    CSV [separator] [HEADER | NOHEADER] [ESCAPE | NOESCAPE] [CHARSET charsetStr]
    XLS [HEADER | NOHEADER]
    XLSX [HEADER | NOHEADER]
    DBF [CHARSET charsetStr]
    TABLE

**  
Description**

The **EXPORT** operator creates an action that exports data from the specified properties or form to a file. The following file formats are supported: **XML**, **JSON**,** **CSV****, **XLS**, **XLSX**, **DBF**, **TABLE**. 

If no* *export file format* *is specified, it is considered to be **JSON**.

If the property to which the data is exported is of class **FILE**, then the extension of the resulting file is determined depending on the format as follows:



  

  
