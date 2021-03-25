---
title: 'Оператор RECURSION'
---

Оператор **RECURSION -** создание [свойства](Properties.md), реализующего [рекурсию](Recursion_RECURSION_.md).

### Синтаксис 

    RECURSION initialExpr STEP stepExpr [CYCLES YES | CYCLES NO | CYCLES IMPOSSIBLE]

### Описание

Оператор **RECURSION** создает свойство, реализующее рекурсию. [Выражения](Expression.md), которое описывает очередной шаг рекурсии, может содержать, кроме обычного обращения к параметрам свойства, обращение к значению параметра на предыдущем шаге. Это обращение имеет синтаксис **$name**, где **name** - имя параметра.

### Параметры

*initialExpr*

Выражение, значение которого является начальным свойством.

*stepExpr*

Выражение, значение которого является свойством шага рекурсии. Допускает специальный синтаксис (**$name**) для обращения к значению параметра **name** на предыдущем шаге.

*CYCLES YES*

        Обозначает, что циклы допускаются.

*CYCLES NO*

        Обозначает, что циклы не допускаются. Эта опция используется по умолчанию.

*CYCLES IMPOSSIBLE*

        Обозначает, что циклы невозможны.

### Примеры


import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=OperatorPropertySample&block=recursion1"/>

**  
**

Заметим, что числа Фибоначчи можно реализовать без добавления параметра to:

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=OperatorPropertySample&block=recursion2"/>

Но в текущей реализации оптимизатор платформы в меньшей степени ориентирован на работу с числами, поэтому пока не может определить, что функция шага возрастающая, и сам остановить рекурсию, искусственно создав соответствующие условие, как это сделано в верхнем примере. Еще больше вопросов возникает, когда это свойство необходимо отображать в динамическом списке (а в статическом списке это невозможно сделать, так как количество не **NULL** значений бесконечно). В этом случае необходимо также учитывать текущей порядок в этом списке, и также проталкивать его внутрь запроса. Эти ограничения будут устранены в будущих версиях, но в текущей версии их рекомендуется учитывать.