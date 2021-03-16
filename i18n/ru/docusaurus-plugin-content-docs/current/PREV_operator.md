---
title: 'Оператор PREV'
---

Оператор **PREV -** создание свойства при помощи [оператора предыдущего значения](Previous_value_PREV_.md).

### Синтаксис

    PREV(propExpr)

### Описание

Оператор **PREV** создает свойство, возвращающее значение другого свойства на момент начала текущей сессии (или на момент предыдущего события в [событийном](Events.md#change) режиме). То есть значение, которое было до изменений, произошедших в текущей сессии.

**PREV** это именно оператор, а не встроенное свойство с [композицией](Composition_JOIN_.md), поэтому **PREV**(f(a)) не равно \[**PREV**(a)\](f(a)).

### Параметры

*propExpr*

[Выражения](Expression.md), значение которого определяет свойство, для которого необходимо получить предыдущее значение.

### Примеры


import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=OperatorPropertySample&block=prev"/>

**  
**