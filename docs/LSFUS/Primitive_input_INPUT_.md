# lsFusionPrimitive input (INPUT)

# Primitive input (INPUT)

The  *primitive input *operator creates an [action](Actions.md) that requests the client to [input a value](Value_input.md) [of a builtin class](Built-in_classes.md). The user can [cancel the input](Value-input_35520941.html#Valueinput-result), for example by pressing the **ESC** key on the keyboard.

As with other value input operators, this operator allows to:

-   specify [initial object values](Value-input_35520941.html#Valueinput-id-Вводзначения-initial)
-   specify [main and alternative](Value-input_35520941.html#Valueinput-result) actions. The first is called if the input was successfully completed, the second if not (i.e. if the input was canceled).
-   [change](Value-input_35520941.html#Valueinput-id-Вводзначения-initial) a specified property

This operator can only be used in property  [change event](Form-events_5636111.html#Formevents-property) handlers on a form.

**Language**

The syntax of the primitive input operator is described by [the **INPUT** operator](INPUT_operator.md).

**Examples**


