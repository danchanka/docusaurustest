# lsFusionAction operator

# Action operator

*Action operator* is a syntax construct that describes an [operator](lsFusionОperators.md) creating an [action](lsFusionActions.md).

Action operators can be divided into *context dependent* and *context independent*.

**Context dependent operators**

Context dependent action operators can use external context parameters. They can be used wherever you need to define an action, for example, when creating another action or [event](lsFusionEvents.md). These operators are:

-   [**{...}** operator](lsFusionOperator_..._.md)

-   [**ACTIVATE** operator](lsFusionACTIVATE_operator.md)
-   [**ACTIVE FORM** operator](lsFusionACTIVE_FORM_operator.md)
-   [**APPLY** operator](lsFusionAPPLY_operator.md)
-   [**ASK** operator](lsFusionASK_operator.md)
-   [**BREAK** operator](lsFusionBREAK_operator.md)
-   [**CANCEL** operator](lsFusionCANCEL_operator.md)
-   [**CASE** operator (action)](lsFusionCASE_operator_action_.md)
-   [**CHANGE** operator](lsFusionCHANGE_operator.md)
-   [**CHANGECLASS** operator](lsFusionCHANGECLASS_operator.md)
-   [**DELETE** operator](lsFusionDELETE_operator.md)
-   [**DIALOG** operator](lsFusionDIALOG_operator.md)
-   [**EMAIL** operator](lsFusionEMAIL_operator.md)
-   [**EVAL** operator](lsFusionEVAL_operator.md)
-   [**EXEC** operator](lsFusionEXEC_operator.md)
-   [**EXPORT** operator](lsFusionEXPORT_operator.md)
-   [**FOR** operator](lsFusionFOR_operator.md)
-   [**IF** ... **THEN** operator (action)](lsFusionIF_..._THEN_operator_action_.md)
-   [**IMPORT** operator](lsFusionIMPORT_operator.md)
-   [**INPUT** operator](lsFusionINPUT_operator.md)
-   [**MESSAGE** operator](lsFusionMESSAGE_operator.md)
-   [**MULTI** operator (action)](lsFusionMULTI_operator_action_.md)
-   [**NEW** operator](lsFusionNEW_operator.md)
-   [**NESTEDSESSION** operator](lsFusionNESTEDSESSION_operator.md)
-   [**NEWEXECUTOR** operator](lsFusionNEWEXECUTOR_operator.md)
-   [**NEWSESSION** operator](lsFusionNEWSESSION_operator.md)
-   [**NEWTHREAD** operator](lsFusionNEWTHREAD_operator.md)
-   [**PRINT** operator](lsFusionPRINT_operator.md)
-   [**READ** operator](lsFusionREAD_operator.md)
-   [**REQUEST** operator](lsFusionREQUEST_operator.md)
-   [**RETURN** operator](lsFusionRETURN.md)
-   [**SEEK** operator](lsFusionSEEK_operator.md)
-   [**SHOW** operator](lsFusionSHOW_operator.md)
-   [**TRY** operator](lsFusionTRY_operator.md)
-   [**WHILE** operator](lsFusionWHILE_operator.md)
-   [**WRITE** operator](lsFusionWRITE_operator.md)

**Context independent operators**

Context independent action operators cannot use external context parameters. Thus they can only be used in the [**ACTION** instruction](lsFusionACTION_instruction.md):

-   [**ABSTRACT** operator](lsFusionABSTRACT_operator_action_.md)
-   [**INTERNAL** operator](lsFusionINTERNAL_operator.md)

  
