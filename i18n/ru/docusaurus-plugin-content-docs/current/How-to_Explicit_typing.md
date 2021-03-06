---
title: 'How-to: Явная типизация'
---

Иногда возникают ситуации, когда необходимо использовать одинаковое [имя](Naming.md) для разных свойств или действий системы. 

Например создадим два свойства с именем **sum**, одно из которых вычисляет сумму строки заказа, а второе - сумму всего заказа:

```lsf
sum = DATA NUMERIC[10,2] (OrderDetail);
sum = GROUP SUM sum(OrderDetail od) BY order(od);
```

Соответственно, первое свойство принимает на вход один параметр класса **OrderDetail**, а второе - один параметр класса **Order**.

Теперь если создать, к примеру, ограничение с одним параметром, и попытаться обратиться к свойству с именем **sum** без явного указания класса этого параметра платформа выдаст ошибку:

![](attachments/65241514/65241516.png)

Все такие обращения требуют явного указания класса параметров:

```lsf
CONSTRAINT sum(Order o) < 0 MESSAGE 'Сумма заказа должна быть положительной';
```

  

  
