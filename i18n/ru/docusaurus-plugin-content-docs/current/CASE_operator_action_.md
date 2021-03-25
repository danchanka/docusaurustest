---
title: 'Оператор CASE (д)'
---

Оператор** CASE** - создание [действия](Actions.md), реализующего [ветвление](Branching_CASE_IF_MULTI_.md).

**Синтаксис** 

    CASE [exclusionType]
        WHEN condition1 THEN action1
        ...
        WHEN conditionN THEN actionN
        [ELSE elseAction]

Описание

Оператор CASE создает действие, которое выполняет одно из переданных ему действий в зависимости от выполнения условий выбора. Условия выбора задаются с помощью свойств, определенных в блоке WHEN. Если условие выбора выполняется, то будет выполнено действие указанное в соответствующем блоке THEN. Если ни одно из условий не выполняется, то будет выполнено действие, определенное в блоке ELSE, если этот блок указан.

### Параметры

** ***exclusionType*

** **[Тип взаимоисключени](Branching_CASE_IF_MULTI_.md#exclusive)[я](Branching_CASE_IF_MULTI_.md#exclusive). Определяет, могут ли одновременно несколько свойств-условий выполняться одновременно при некотором наборе параметров. Задается одним из ключевых слов:

-   **EXCLUSIVE**
-   **OVERRIDE**

Тип **EXCLUSIVE **указывает на то, что никакие из перечисленных условий не могут выполняться одновременно. Тип **OVERRIDE **допускает несколько выполняющихся одновременно условий, в этом случае будет выполнено действие, соответствующее первому выполняемому условию

Тип **OVERRIDE **используется по умолчанию.

*condition1 ... conditionN*

 [Выражения](Expression.md), значения которых определяют условия выбора. 

*action1 ... actionN*

[Контекстно-зависимые операторы](Action_operator.md#contextdependent), описывающие действия, которые могут быть вызваны при выполнении соответствующего условия.

*elseAction*

Контекстно-зависимый оператор, описывающий действие, которое будет выполнено, если ни одно из условий не выполняется. 

### Примеры


import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=ActionSample&block=case"/>