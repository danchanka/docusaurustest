---
title: 'Арифметические операторы (+, -, \*, ...)'
---

*Арифметические операторы* создают [свойства](Properties.md), значением которых является результат арифметической операции. Аргументами этих операторов должны являются свойства, значения которых являются экземплярами [числовых классов](Built-in_classes.md). В платформе на данный момент поддерживаются следующие арифметические операторы:

|Оператор|Название|Описание|Пример|Результат|
|---|---|---|---|---|
|<strong>+</strong>|Сумма|Принимает два операнда на вход и возвращает их сумму|3 + 5|8|
|<strong>-</strong>|Разность|<p>Принимает два операнда на вход и возвращает их разность</p><br/><p>Также у этого оператора есть унарная форма, в этом случае первый операнд считается равным 0</p>|<p>5 - 3</p><br/><p>-3</p>|<p>2</p><br/><p>-3</p>|
|<strong>*</strong>|Произведение|Принимает два операнда на вход и возвращает их произведение|3 * 5|15|
|<strong>/</strong>|Отношение|Принимает два операнда на вход и возвращает их отношение|15 / 3|5|

Все эти операторы возвращают **NULL**, если один из операндов **NULL**. Для операторов суммы и разности также есть возможность использовать специальную форму со скобками, в этом случае **NULL** будет эквивалентен 0. Причем для этих операторов будет верно и обратное - если результат оператора в такой форме равен 0, то возвращается **NULL** (к примеру 5 (-) 5 = **NULL**):

|<strong>Оператор</strong>|<strong>Название</strong>|<strong>Описание</strong>|<strong>Пример</strong>|<strong>Результат</strong>|
|---|---|---|---|---|
|<strong>(+)</strong>|Сумма|Принимает два операнда на вход, возвращает их сумму, трактует <strong>NULL</strong> как 0|<p>3 (+) 5</p><br/><p>3 (+) <strong>NULL</strong></p>|<p>8</p><br/><p>3</p>|
|<strong>(-)</strong>|Разность|Принимает два операнда на вход, возвращает их разность, трактует <strong>NULL</strong> как 0|<p>5 (-) 3</p><br/><p>5 (-) <strong>NULL</strong></p><br/><p>5 (-) 5</p>|<p>2</p><br/><p>5</p><br/><p><strong>NULL</strong></p>|

### Определение класса результата

Класс результата определяется как:

|Оператор|Результат|
|---|---|
|<strong>+</strong>, <strong>-</strong>|[Общий предок](Built-in_classes.md#commonparentclass) (семейство - Числа)|
|<strong>*</strong>|<pre><code>NUMERIC[p1.IntegerPart + p1.Precision + p2.IntegerPart + p2.Precision, p1.Precision + p2.Precision]</code></pre>|
|<strong>/</strong>|<pre><code>NUMERIC[p1.IntegerPart + p1.Precision + p2.IntegerPart + p2.Precision, p1.Precision + p2.IntegerPart]</code></pre>|

 

### Язык

Описание [арифметических операторов](Arithmetic_operators.md).

### Примеры

```lsf
sum(a, b) = a + b;
transform(a, b, c) = -a * (b (+) c);
```
