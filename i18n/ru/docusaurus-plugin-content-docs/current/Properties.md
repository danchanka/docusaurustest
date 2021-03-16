---
title: 'Свойства'
---

*Свойство* - это элемент системы, который принимает на вход набор объектов (*параметров*) и возвращает в качестве результата ровно один объект (*возвращаемое значение*). 

Тип и особенности вычисления каждого свойства определяются оператором, создающим это свойство.

### Ограничение типов {#types}

В силу особенностей реализации все возвращаемые не **NULL** значения свойства должны быть одного типа. То есть свойство не может для одного набора параметров возвращать, например, строку, а для другого - число.

Такое же ограничение существует и для каждого параметра свойства: свойство не может иметь не **NULL** значение для набора объектов, в котором, например, первый параметр строка, и при этом иметь не **NULL** значение для другого набора объектов, в котором первый параметр - объект.

### Язык

Для создания свойств используется [инструкция **=**](Instruction_=.md). 

### Примеры

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=PropertySample"/>