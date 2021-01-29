# lsFusionHow-to: Namespaces

# How-to: Namespaces

Occasionally, you will find yourself in situations where you will need to use the same [name](Naming.md) for different system elements. For this purpose, you can assign them to different namespaces that are defined for a module using the [NAMESPACE](Module_header.md) instruction. By default, the namespace matches the name of the module.

Let's create two modules, **UseCaseNamePurchase** and **UseCaseNameSale**, that declare the logic of purchase and sell orders :



If you don't specify the namespace, the class from **Purchase** will be used. You still can explicitly specify the namespace (for example, **Sale**).
