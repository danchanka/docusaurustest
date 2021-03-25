---
title: 'Инструкция FORM: Обзор'
sidebar_label: Обзор
---

Инструкция **FORM** - создание [формы](Forms.md). 

### Синтаксис

    FORM name [caption] formOptions
        formBlock1
        ...
        formBlockN
    ;

После указания имени и заголовка формы в произвольном порядке указываются опции формы *formOptions: *

    IMAGE path 
    AUTOREFRESH period 

После опций формы описываются в произвольном порядке блоки формы *formBlock1 ... formBlockN*: 

    OBJECTS ... 
    TREE ...
    PROPERTIES ...
    FILTERS ...
    [EXTEND] FILTERGROUP ...
    ORDER ...
    EVENTS ...
    REPORT propertyExpression
    FORMEXTID extID
    EDIT className OBJECT objectName
    LIST className OBJECT objectName 

### Описание

Инструкция **FORM** объявляет новую форму и добавляет ее в текущий [модуль](Modules.md). Кроме того эта инструкция позволяет описать [структуру формы](Form_structure.md), а также ее [статичное](Static_view.md) и частично [интерактивное](Interactive_view.md) (за исключением [дизайна формы](Form_design.md)) представление. В начале инструкции задаются имя и заголовки, затем указываются опции формы, а затем объявление содержит произвольное количество блоков, описывающих структуру формы. Их можно использовать в любом порядке, при условии что каждый блок объявляется позже блоков, элементы которых он использует. Каждый блок может использоваться произвольное количество раз.

### Параметры

*name*

Имя формы. [Простой идентификатор](IDs.md#id-broken). Имя должно быть уникально в пределах текущего [пространства имен](http://documentation.lsfusion.org/pages/viewpage.action?pageId=1146884).

*caption*

Заголовок формы. [Строковый литерал](IDs.md#strliteral-broken). Если заголовок не задан, то заголовком формы будет являться ее имя.

***Опции формы** (formOptions)*

IMAGE path

Указание относительного пути к файлу с картинкой, которая будет отображаться в качестве иконки формы. 

*path* - путь к файлу. Строковый литерал. Путь указывается относительно каталога **images**.

AUTOREFRESH period

Указание периода [автоматического обновления](Interactive_view.md#extra) формы через интервал времени. Если опция не задана, то форма автоматически обновляться не будет.

*period* - период времени в секундах. [Целочисленный литерал](IDs.md#intliteral-broken). 

***Блоки формы** (*formBlock1 ... formBlockN*)*

OBJECTS ...

Добавляет объекты на форму. [Синтаксис блока объектов](Object_blocks.md).

TREE ...

Добавляет дерево объектов на форму. [Синтаксис блока дерева объектов](Object_blocks.md#tree).

PROPERTIES ...

Добавляет [свойства](Properties.md) и [действия](Actions.md) на форму. [Синтаксис блока свойств и действий](Properties_and_actions_block.md).

FILTERS ...

Добавляет фиксированные фильтры на форму. [Синтаксис блока фиксированных фильтров](Filters_and_sortings_block.md#fixedfilters-broken).

\[EXTEND\] FILTERGROUP ...

Добавляет группу фильтров на форму либо расширяет существующую. [Синтаксис блока группы фильтров](Filters_and_sortings_block.md#filtergroup).

ORDER ...

Добавляет сортировки на форму. [Синтаксис блока сортировок](Filters_and_sortings_block.md#sort).

EVENTS ...

Устанавливает действия, выполняемые при определенных событиях. [Синтаксис блока событий](Event_block.md#events-broken)[.](Event_block.md)

*FORMEXTID extID*

Указание имени, которое будет использоваться для [экспорта / импорта](Structured_view.md#extid) этой формы. Используется только в [структурированном](Structured_view.md) представлении.

*extId*

Строковый литерал.

REPORT propertyExpression

        Указание свойства, значение которого будет использовано в качестве имени файла отчета для пустой группы. В качестве параметров можно использовать имена уже объявленных объектов на форме. Предполагается, что значения этих объектов будут переданы при открытии формы в печатном представлении (если этого не будет сделано, они будут считаться равными NULL).

  

*propertyExpression*

  

[Выражение](Expression.md).

EDIT сlassName OBJECT objectName

Устанавливает текущую форму в качестве формы [редактирования](Interactive_view.md#edtClass) объектов указанного класса.

*className* - имя [пользовательского](Static_objects.md) класса, при редактировании объектов которого будет вызываться описываемая форма. Задается [составным идентификатором](IDs.md#cid-broken).

*objectName* - имя объекта формы, который будет использоваться для редактирования. Задается [простым идентификатором](IDs.md#id-broken).

LIST сlassName OBJECT objectName

Устанавливает текущую форму в качестве формы [выбора](Interactive_view.md#edtClass) объекта указанного класса. 

*className* - имя [пользовательского](Static_objects.md) класса, для выбора объекта которого будет вызываться описываемая форма. Задается составным идентификатором.

*objectName* - имя объекта формы, текущее значение которого будет использоваться в качестве выбираемого объекта. Задается простым идентификатором.

### Примеры


import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=FormSample&block=form"/>

  