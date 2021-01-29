---
title: 'Materials management'
---

##### Description of the "Materials management" task

The information system being created using the **lsFusion**  platform must support very basic supply chain execution capabilities.

For simplicity, let's define one type of document in our system that increases the stock balance — a receipt from the supplier; and one type of document that does the opposite — a shipment for a wholesale to a customer.

##### Defining domain logic

The information system will consist of a set of [modules](Modules.md), each implementing a logically isolated piece of functionality. Each module can use the functionality of other modules, which involves special syntax constructions for defining module dependencies.

Based on our task, let's define the list of modules to be implemented: stock module, item module, legal entity module, receipt module, shipment module, current balance module. We will separately define the main module that will be executed and will basically be a compound solution. The composition of modules can be different and is determined by the developer depending on the need to re-use the functionality elsewhere.

###### Defining a stock

Let's create a module where we will define a stock instance and its attributes.


