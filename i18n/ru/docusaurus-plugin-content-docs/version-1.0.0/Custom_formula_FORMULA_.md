---
title: 'Пользовательская формула (FORMULA)'
---

Оператор *пользовательской формулы* позволяет создавать [свойство](Properties.md), вычисляющее некоторую формулу на языке SQL. При этом, можно задавать различные реализации формулы для различных SQL серверов. Формула задается в виде строки, внутри которой для обращения к параметру используется спецсимвол $ и номер этого параметра (начиная с 1). Соответственно, количество параметров у полученного свойства будет равно максимальному из номеров использованных параметров. 

Использовать оператор рекомендуется, только если задачу невозможно решить при помощи других операторов, а также если гарантированно известно, какие конкретно SQL сервера могут быть использованы, или используемые синтаксические конструкции соответствуют одному из последних стандартов SQL.

### Определение класса результата

По умолчанию, результирующим классом оператора пользовательской формулы является [общий предок](Built-in_classes.md#commonparentclass) всех его операндов. При необходимости, разработчик может задать этот класс явно.

### Язык

Для объявления свойства с помощью пользовательской формулы используется [оператор **FORMULA**](FORMULA_operator.md).

### Примеры

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=OperatorPropertySample&block=formula"/>
