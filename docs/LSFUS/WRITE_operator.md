# lsFusionWRITE operator

# WRITE operator

The **WRITE** operator creates an [action](Actions.md) that [writes a file](Write_file_WRITE_.md) from a property to an external resource. 

**Syntax**

    WRITE [CLIENT [DIALOG]] fileExpr TO urlExpr [APPEND]

**Description**

The **WRITE**  operator creates an action that writes a file from the property to an external resource located at the specified URL.

The following URL types are supported:

    [file://]path_to_file
    [s]ftp://username:password[;charset]@host:port[/path_to_file][?passivemode=true|false]

It is assumed that the file extension is not specified in the URL (that is, the period (.) is also considered a part of the file name). This extension is determined automatically based on the class of the file being written:



****  
****
