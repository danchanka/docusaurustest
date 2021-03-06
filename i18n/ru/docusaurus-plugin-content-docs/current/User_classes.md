---
title: 'Пользовательские классы'
---

[Классы](Classes.md), которые может создавать разработчик, и экземпляры которых может создавать пользователь, называются *пользовательскими классами*. 

### Наследование {#inheritance}

При создании пользовательского класса **B** можно явно указать, что его [предком](Classes.md) является класс **A.** В этом случае класс **A** будем называть *родительским классом *класса **B**.

Родительским классом пользовательского класса может быть только другой пользовательский класс, наследование от [встроенных классов](Built-in_classes.md) невозможно. Если при создании пользовательского класса не указывается ни один родительский класс, то этот класс неявно наследуется от класса **Object** (находится в [модуле ](Modules.md)**System**). Таким образом, получается, что класс **System.Object** является предком всех пользовательских классов.

В платформе поддерживается множественное наследование пользовательских классов - это означает, что у класса может быть несколько родительских классов. 

### Абстрактные классы {#abstract}

Некоторые пользовательские классы в системе могут быть *абстрактными. *Отличие этих классов от остальных заключается в невозможности создания экземпляра абстрактного класса. Не абстрактные классы в свою очередь называются *конкретными*.

### Изменение класса

В платформе допускается изменение класса уже существующего объекта. Так как объекты могут быть экземплярами только конкретных классов, то запрещено изменять класс объекта на абстрактный.

### Общий предок {#commonparentclass}

В качестве общего предка для нескольких пользовательских классов платформа выбирает класс, от которого наследуются все эти классы, и общее количество "шагов" наследования до этих классов минимально (то есть выбирается наиболее близкий класс).

### Язык

Для добавления нового пользовательского класса в систему используется [инструкция **CLASS**](CLASS_instruction.md).

### Примеры

```lsf
CLASS ABSTRACT Document; // Заголовком этого класса будет 'Document'
CLASS IncomeDocument 'Приход' : Document;
CLASS OutcomeDocument 'Расход' : Document;

CLASS Person;
CLASS Worker;
CLASS Musician : Person, Worker; // множественное наследование

CLASS Barcode 'Штрих-код'; // Родительским классом Barcode будет класс System.Object

CLASS PrintOrientation {
    portrait 'Книжная',
    landscape 'Альбомная'
}
```
