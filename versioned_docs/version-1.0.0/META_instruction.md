---
title: 'META instruction'
---

The **META** instruction creates a new [metacode](Metaprogramming.md#metacode).

### Syntax

    META name(param1, ..., paramN)
        statement1
        ...
        statementM
    END

### Description

The **META** instruction declares a new metacode and adds it to the current [module](Modules.md). 

The **META** instruction is an exception - it is not supposed to end with a colon.  

### Parameters

*name*

Metacode name. [Simple ID](IDs.md). Must be unique within the current namespace among metacodes with the same number of parameters.

*param1, ..., paramN*

List of metacode parameters. Each parameter is defined by a simple ID. The list cannot be empty.

*statement1 ... statementM*

A sequence of  [instructions](Instructions.md) represented by a block of code. Instructions may contain [special operations \#\# and \#\#\#](Metaprogramming.md#concat) used for concatenating [lexemes](Tokens.md). Instructions cannot include another **META** instruction.

### Examples


import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://documentation.lsfusion.org/sample?file=InstructionSample&block=meta"/>

  
