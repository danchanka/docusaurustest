---
title: 'Простые события'
---

*Простое* событие - [событие](Events.md), которое происходит при изменении значения заданного [свойства](Properties.md) (будем называть его *условием* события) на не **NULL**. Это событие является своего рода расширением обычного события (добавляя дополнительное условие), а значит для него необходимо задать все те же параметры что и для обычного события, в частности:

-   [тип](Events.md#type) события, которое определяет момент времени, когда это простое событие будет возникать (в том числе проверяться условие).
-   [обработку](Events.md) события - [действие](Actions.md), которое необходимо выполнять при наступлении этого простого события

По сравнению с обычным событием, простое событие не более чем оборачивает свою обработку в оператор [цикла](Loop_FOR_.md), условием которого является условие события. Однако при этом простые события имеют ряд важных дополнительных возможностей:

-   Если условие не содержит внутри [оператор предыдущего значения (PREV)](Previous_value_PREV_.md), то платформа сама оборачивает указанное условие в [оператор изменений (SET)](Change_operators_SET_CHANGED_..._.md). Тем самым значительно снижается вероятность создать некорректную обработку (которая будет иметь последействие при пустой сессии изменений)
-   Такие события понятнее и читабельнее, так как отражают классическую причинно-следственную связь (когда случилось что-то, сделать то-то)
-   Для таких событий существует возможность "перерасчета" - то есть запуска обработки в режиме, когда все предыдущие значения равны **NULL** (как если база данных пустая). Это полезно когда событие создается для уже существующей базы данных, и старые данные также должны соответствовать логике этого события.
-   Если действием в простом событии является одиночное [изменение ](Property_change_CHANGE_.md)некоторого свойства, то такое событие легко преобразуется в [вычисляемое](Calculated_events.md) и наоборот.

### Язык

Для создания простых событий используется [инструкция **WHEN**](WHEN_instruction.md).

### Примеры

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=InstructionSample&block=when"/>