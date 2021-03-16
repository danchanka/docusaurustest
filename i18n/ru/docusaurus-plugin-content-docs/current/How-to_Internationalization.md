---
title: 'How-to: Интернационализация'
---

Система поддерживает [интернационализацию](Internationalization.md) путем передачи на клиента значений, локализованных в зависимости от того, какой язык выбран у пользователя. Локализуются все значения, которые заключены в фигурные скобки. Предположим, необходимо реализовать простую форму со списком книг и их ценой, с возможностью добавления/удаления.

Объявим логику обычным способом, только вместо задания названий в явную, вместо них будем использовать идентификаторы.

import {CodeSample} from './CodeSample.mdx'

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=UseCaseInternationalization&block=sample1"/>

Затем создаем новый Resource Bundle, куда пропишем значения идентификаторов на разных языках :

![](attachments/60555378/60555382.png)

Называем его, например, **I18nResourceBundle** (система будет считывать только файлы, которые заканчиваются на **ResourceBundle**) и выбираем языки, которые будут использоваться :

![](attachments/60555378/60555383.png)

Далее, для каждого идентификатора прописываем значения на каждом из выбранных языков :

![](attachments/60555378/60555384.png)

После запуска, по умолчанию, все названия будут показываться на языке сервера (который, в свою очередь, по умолчанию, определяется по языку операционной системы) :

![](attachments/60555378/60555385.png)

Для конкретного пользователя можно изменить язык и страну в его профиле :

![](attachments/60555378/60555386.png)

В таком случае, когда пользователь зайдет заново в систему, то все названия будут показываться ему на выбранном языке :

![](attachments/60555378/60555387.png)

Идентификаторы можно также использовать и в выражениях :

<CodeSample url="https://ru-documentation.lsfusion.org/sample?file=UseCaseInternationalization&block=sample2"/>

При этом надо помнить, что такие выражения не следует использовать в [материализациях](Materializations.md). 

Система не умеет автоматически локализовывать пользовательские данные. Ответственность за это несет непосредственно разработчик.