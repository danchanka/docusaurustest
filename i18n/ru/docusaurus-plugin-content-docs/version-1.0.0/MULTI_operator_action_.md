---
title: 'Оператор MULTI (д)'
---

Оператор **MULTI** - создание [действия](Actions.md), реализующего [ветвление](Branching_CASE_IF_MULTI_.md#poly) (полиморфная форма).

### Синтаксис

     MULTI [exclusionType] action1, ..., actionN 

### Описание

Оператор **MULTI **создает действие, которое выполняет одно из переданных ему действий в зависимости от выполнения условий выбора. Условием выбора свойства является принадлежность параметров [сигнатуре](CLASS_operator.md) этого действия. 

### Параметры

*exclusionType*

[Тип взаимоисключения](Branching_CASE_IF_MULTI_.md#exclusive). Определяет, могут ли несколько условий выбора действия одновременно выполняться при некотором наборе наборе параметров. Задается одним из ключевых слов:

-   **EXCLUSIVE**
-   **OVERRIDE**

Тип **EXCLUSIVE **указывает на то, что условия выбора действия не могут одновременно выполняться. Тип **OVERRIDE **допускает несколько одновременно выполняющихся условий, в этом случае будет выбрано первое в списке действие с выполняющимся условием выбора. 

Тип **EXCLUSIVE **используется по умолчанию.

*action1, ..., actionN* ** ** 

Список [контекстно-зависимых операторов-действий](Action_operator.md#contextdependent), описывающих действия, из которых будет производиться выбор.

### Пример


import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=ActionSample&block=multi"/>

  
