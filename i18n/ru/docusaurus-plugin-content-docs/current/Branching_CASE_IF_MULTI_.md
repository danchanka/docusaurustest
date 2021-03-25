---
title: 'Ветвление (CASE, IF, MULTI)'
---

*Оператор ветвления* создает [действие](Actions.md), которое для набора *условий* определяет, какое из этих условий выполняется, и вызывает соответствующее этому условию действие.

Все условия задаются как некоторые [свойства](Properties.md) и / или параметры. Соответственно, условие *выполняется*, если значение [с](Properties.md)войства или параметра, с помощью которого задается условие, не равно **NULL**.

### Полиморфная форма {#poly}

Также в этом операторе существует возможность не задавать условие явно, а использовать в качестве условия принадлежность [сигнатуре ](Property_signature_CLASS_.md)соответствующего этому условию действия. Такую форму оператора выбора будем называть *полиморфной*.

### Взаимоисключаемость условий {#exclusive}

Для оператора ветвления можно указать, что все его условия должны быть *взаимоисключающими*. Соответственно, если эта опция указана, а условия не являются взаимоисключающими, платформа выдаст соответствующую ошибку.

Стоит отметить, что такая проверка является не более чем подсказкой платформе (для лучшей оптимизации) и определенным самоконтролем со стороны разработчика. Однако, при этом использование такой проверки позволяет во многих случаях сделать код более прозрачным и читабельным (особенно в полиморфной форме оператора выбора).

### Неявное задание

У этого оператора есть возможность [неявного задания](Action_extension.md) с помощью техники [расширений](Extensions.md), что позволяет, в частности, реализовывать полиморфизм в том виде, в котором это обычно принято делать в ООП.

### Одиночная форма {#single}

Оператор ветвления в *одиночной *форме проверяет ровно одно условие. Если это условие выполняется, то вызывается указанное действие. Также существует возможность указать *альтернативное действие, *которое будет вызвано, если условие не выполняется.


:::info
Тип взаимоисключения и неявное задание для этой формы оператора не имеют смысла / не поддерживаются
:::

### Язык

Для объявления действия, реализующего ветвление в общем случае, используется [оператор **CASE**](CASE_operator_action_.md). Для ветвления в одиночной форме используется [оператор **IF**](IF_..._THEN_operator_action_.md), в полиморфной - [оператор **MULTI**](MULTI_operator_action_.md). 

### Примеры

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=ActionSample&block=case"/>


<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=ActionSample&block=ifthena"/>


<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=ActionSample&block=multi"/>

  

**  
**