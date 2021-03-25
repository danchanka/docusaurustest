---
title: 'Управление сессиями: Обзор'
sidebar_label: Обзор
---

Существуют следующие операторы работы с сессиями:

-   [Применение изменений (APPLY)](Apply_changes_APPLY_.md)
-   [Отмена изменений (CANCEL)](Cancel_changes_CANCEL_.md)
-   [Новая сессия (NEWSESSION, NESTEDSESSION)](New_session_NEWSESSION_NESTEDSESSION_.md)
-   [Предыдущее значение (PREV)](Previous_value_PREV_.md)
-   [Операторы изменений (SET, CHANGED, ...)](Change_operators_SET_CHANGED_..._.md)


:::info
Отметим, что последние два оператора создают свойства, а не действия.
:::

### Вложенные локальные свойства {#nested}

При выполнении первых трех операторов управления сессиями, значения всех локальных свойств сбрасываются в **NULL**. Это не всегда удобно, и, кроме того, часто бывает необходимо передать данные между разными сессиями / "циклами жизни" одной сессии. Для этого в платформе можно отдельные локальные свойства помечать как *вложенные*. В этом случае:

1.  При создании новой сессии - все значения локального свойства скопируются в создаваемую сессию, а при ее закрытии скопируются назад.
2.  При применении изменений - после завершения транзакции все значения локального свойства сохранятся (по умолчанию, после применения изменений, сессия очищается вместе со значениями всех локальных свойств).
3.  При отмене изменений - все значения локального свойства сохранятся такими же какими были перед отменой изменений.

Пометку вложенности можно делать как глобально для локального свойства (и соответственно для всех его использований), так и отдельно для каждой операции управления сессиями. Также для любой операции управления сессиями можно указать, что все локальные свойства должны быть вложенными.