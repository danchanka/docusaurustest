---
title: 'Working parameters'
---

The platform working parameters can be set in one of the following ways (in the order of their priorities, lower priority at the bottom):

-   In Java code in the 'lsfusion.server.physics.admin.Settings.java' file (relevant for platform forks)
-   In lsfusion.properties which are typically part of the project and therefore function for all installations by default - parameter name should start with 'settings' (e.g., settings.enableUI)
-   In conf/settings.properties (for specific installations) - parameter name should start with 'settings'
-   In [Java startup parameters](Launch_parameters.md#java) - parameter name should start with 'D' prefix plus 'settings' (e.g., -Dsettings.enableUI=2)
-   In the database: Administration → System → Settings → Parameters. In this interface, you can set both global settings and settings for specific roles
-   During the execution of an action using system actions: **Service.pushSetting\[STRING, STRING\]**, **Service.popSetting\[STRING\]** (overriding the value of the property for the entire current thread).


In addition to the system parameters, the platform also has [launch parameters](Launch_parameters.md) which are set a little differently and are relevant mainly for startup (initialization) processes of various components of the platform and access to these components.
