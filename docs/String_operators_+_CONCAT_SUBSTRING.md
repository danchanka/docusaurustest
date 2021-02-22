---
title: 'String operators (+, CONCAT, SUBSTRING)'
---

String operators are operators which parameters and result are the properties which values are instances of the string classes. The platform currently supports the following string operators:

[table was removed]

The **+** and **SUBSTRING** operators return **NULL** if one of the operands is **NULL**. The **CONCAT** operator treats **NULL** value of the operand as an empty string (however, concatenation of two **NULL** values still returns **NULL**). Also, in the **CONCAT** operator you can optionally specify the third operand (*delimiter*) which will be inserted if and only if both operands are not **NULL**. For example, CONCAT ' ', 'John', 'Smith' = 'John Smith', but CONCAT ' ', 'John', NULL = 'John'.

### Determining the result class

The result class is defined as:

[table was removed]

where *blankPadded*, *caseInsensitive* and *length* are determined similarly to the rules for construction of a common ancestor for two built-in classes (Strings family).

In the + operator, operands which classes are other than string are cast to strings in accordance with the following table:

[table was removed]

### Examples


import {CodeSample} from './CodeSample.mdx'

<CodeSample url="http://documentation.lsfusion.org:5000/sample?file=OperatorPropertySample&block=concat"/>
