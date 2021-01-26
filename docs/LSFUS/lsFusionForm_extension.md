# lsFusionForm extension

# Form extension

The [form](lsFusionForms.md) [extension](lsFusionExtensions.md) technique allows the developer to extend the [structure](lsFusionForm_structure.md) and [design](lsFusionInteractive_view.md) of a form created in another module.

Form extension allows you to extract a specific functionality into a separate module, which when loaded will cause new components to be "embedded" into existing forms. The disadvantage of this approach is that this module must know the precise structure and design of the form which it depends on, and when these are modified the module may become inoperative.

**Language**

In order to extend the structure and design of an existing form, the [**EXTEND FORM** instruction](lsFusionEXTEND_FORM_instruction.md) must be used.

**Example**


