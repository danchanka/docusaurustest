---
title: 'Пустая инструкция'
---

*Пустая инструкция* - специальная инструкция, представляющая из себя одну точку с запятой.

### Синтаксис

    ;

### Описание

Пустая инструкция предназначена для того, чтобы лишние точки с запятой не диагностировались как ошибка. Например, инструкции, последний символ которых является закрывающей фигурной скобкой, не должны заканчиваться точкой с запятой, но если точка с запятой все же будет поставлена, то ошибки не будет, так как это будет трактоваться как две различные инструкции. 

### Пример


import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=InstructionSample&block=empty"/>

  
