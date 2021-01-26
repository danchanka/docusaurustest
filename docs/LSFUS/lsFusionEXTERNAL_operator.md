# lsFusionEXTERNAL operator

# EXTERNAL operator

The **EXTERNAL** operator creates an [action](lsFusionActions.md) that implements [accessing to an external system](lsFusionAccess_to_an_external_system_EXTERNAL_.md). 

**Syntax**

    EXTERNAL externalCall [PARAMS paramExpr1, ..., paramExprN] [TO propertyId1. ..., propertyIdM]

externalCall - an external call defined by one of the following syntaxes:

    HTTP [requestType] connectionStrExpr [BODYURL bodyStrExpr] [HEADERS headersPropertyId] [COOKIES cookiesPropertyId] [HEADERSTO headersToPropertyId] [COOKIESTO cookiesToPropertyId]
    SQL connectionStrExpr EXEC execStrExpr
    LSF connectionStrExpr lsfExecType execStrExpr

**Description**

The **EXTERNAL** operator creates an action that makes a request to an external system.

**Parameters**

*HTTP*

Keyword. Specifies that the operator is executing a web server HTTP request.

**requestType**

Keyword. Defines the [method](https://ru.wikipedia.org/wiki/HTTP#%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D1%8B) of the HTTP request:

-   **POST**
-   **GET**
-   **PUT**
-   **DELETE**

The default value is **POST**.**  
**

*SQL*

Keyword. Specifies that the operator executes an SQL server command or commands.

*LSF*

Keyword. Specifies that the operator executes an action of another lsFusion server.

*connectionStrExpr  
*

[Expression](lsFusionExpression.md). ****HTTP****: http request string. **SQL**: DBMS connection string. **LSF**: URL of an lsFusion server (application).

    bodyStrExpr

[Expression](lsFusionExpression.md). Continuation of http request string in BODY. Relevant when BODY has &gt; 1 parameter. If not specified, the parameters are passed in multipart format.

*headersPropertyId*

**headersToPropertyId**

[Property ID](IDs_1573053.html#IDs-propertyid) containing request headers. The property must have exactly one parameter: the name of the request's header. This parameter must belong to a string class. If the property is not specified, headers are ignored/not set.

*cookiesPropertyId*

*cookiesToPropertyId*

[Property ID](IDs_1573053.html#IDs-propertyid) containing request cookies. The property must have exactly one parameter: the name of the cookie. This parameter must belong to a string class. If the property is not specified, cookies are ignored/not set.

lsfExecType

Keyword. Specifies the [way of defining](Access-from-an-external-system_51216539.html#Accessfromanexternalsystem-actiontype) the action:

-   **EXEC** – the name of the action is specified.
-   **EVAL** – the code of the action is specified in the lsFusion language. It is assumed that this code contains a declaration of an action named **run**. This is the action that will be called.
-   **EVAL ACTION** – the action code in the lsFusion language is specified. To access a parameter, the special character $ and the parameter number (starting from 1) are used.

*execStr  
*

Expression. **SQL**: SQL query command(s). **LSF**: The name of an action or code, depending on how the action is defined.

*paramExpr1, ..., paramExprN*

List of expressions whose values will be used as the call parameters.

*propertyId1, ..., propertyIdM*

List of [property IDs](IDs_1573053.html#IDs-id-Синтаксическиеэлементы-propertyid) (without parameters) to which the results will be written.

**Examples**

************************************



  
