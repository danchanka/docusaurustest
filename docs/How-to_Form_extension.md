---
title: 'How-to: Form extension'
---

Let's assume there is a module that describes the **Sku** form that is used to edit SKU values:


We need to implement additional functionality for adding multiple barcodes to an SKU. This can be done by creating a new module that will introduce a new **Barcode** class and extend the functionality of the Sku edit form by adding the possibility to enter barcodes:


Note that the **Barcode** module assumes that there is a **Sku** form with an **s**  object and a container called **skuDetails**. If the form changes for some reason, the  **Barcode** module will become inoperable.
