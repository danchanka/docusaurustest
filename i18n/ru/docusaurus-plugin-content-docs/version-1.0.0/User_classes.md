---
title: 'Статические объекты'
---

*Статические* (или встроенные)* *объекты - это объекты, которые определяются разработчиком и автоматически встраиваются в систему при старте (если на момент старта они в системе отсуствуют). Кроме того, такие объекты запрещено удалять.

При объявлении [пользовательского класса](Static_objects.md) можно объявить объекты этого класса, которые будут являться статическими объектами. Если это сделать, этот пользовательский класс автоматически [наследуется](Static_objects.md#inheritance) от класса **System.StaticObject**.

Каждому статическому объекту пользовательского класса необходимо задать определенное имя и заголовок, к которым впоследствии можно обращаться при помощи [с](Properties.md)войств **System.staticName\[System.StaticObject\]** и **System.staticCaption**\[System.StaticObject\]**** соответственно. 

Статическими объектами [встроенных классов](Built-in_classes.md) являются конкретные числа, строки, значения дат и т.п., используемые пользователем при описании логики.

Статические объекты можно использовать для создания ограниченного множества объектов некоторого класса. Такое множество можно использовать в качестве перечисляемого типа данных, чтобы предоставлять выбор из ограниченного набора значений. 

### Язык

Статические объекты пользовательских классов задаются в [инструкции **CLASS**](CLASS_instruction.md) в блоке, ограниченном фигурными скобками.

### Примеры

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=StaticObjectSample"/>

**  
**
