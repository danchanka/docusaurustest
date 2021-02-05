---
title: 'Launch parameters'
---

-   Application server (Server)
    -   [Java](#Launchparameters-appjava)
    -   [lsFusion](#Launchparameters-applsfusion)
-   Web server (Client)
    -   [Java](#Launchparameters-webjava)
    -   [lsFusion](#Launchparameters-weblsfusion)

### Application server (Server)

#### Java

Java application server startup parameters are set in the launch command (for example, for [manual](57738083.html#Execution(manual)-command) or [automatic](57738078.html#Execution(auto)-settings) installation):


#### lsFusion

lsFusion startup parameters for server applications can be set in one of the following ways (in the order of their priorities, lower priority at the bottom):

-   In the resources in the lsfusion.xml file in the places where these parameters are used, after: (relevant for platform forks)
-   In lsfusion.properties (usually part of a project, which means it acts by default for all installations)
-   In conf/settings.properties (for specific installations)
-   In the [Java startup options](#Launchparameters-appjava) (starting with D, e.g. -Dlogics.topModule=FFF)


Example conf/settings.properties file ([section 3](#Launchparameters-appp3)):

### $FUSION\_DIR$/conf/settings.properties

    db.server=localhost
    db.name=lsfusion
    db.user=postgres
    db.password=pswrd

    rmi.port=7652

By default, it is assumed that the startup parameter files conf/settings.properties and lsfusion.properties are located in the application server's startup folder. However, with [automatic installation](Execution_auto.md) under GNU Linux symlinks for these files (as well as for [log](Journals-and-logs_60555482.html#Journalsandlogs-logs) folders)  are automatically created to [other files](57738078.html#Execution(auto)-settings) whose layout is better aligned with Linux ideology.

### Web server (Client)

#### Java

Java web server startup parameters are set in the Tomcat launch command, which, in turn, launches this web server (for example, for [automatic](57738078.html#Execution(auto)-webapp) installation). 


#### lsFusion

lsFusion startup parameters for the web server can be set in one of the following ways (in the order of their priorities, lower priority at the bottom):

-   In web applications' [context](http://tomcat.apache.org/tomcat-7.0-doc/config/context.html#Defining_a_context) parameters:
    -   in a web application in the file /WEB-INF/web.xml, the context-param tag (relevant for platform forks)
    -   in a web application in the file /META-INF/context.xml, Context tag, Parameter tag (relevant for platform forks)
    -   in Tomcat, in the file $CATALINA\_BASE/conf/\[enginename\]/\[hostname\]/\[contextpath\].xml, tag Context, tag Parameter, where:
        -   $CATALINA\_BASE$ is the folder where Tomcat is installed (for example, with[automatic](57738078.html#Execution(auto)-settings) installation, this folder is $INSTALL\_DIR/Client)
        -   \[contextpath\] - contextual path of the web application (for example, with [automatic](57738078.html#Execution(auto)-settings) installation this name is empty by default, which in Tomcat is equivalent to the name ROOT; with [manual](57738083.html#Execution(manual)-tomcat) installation it depends on the name of the war file), 
        -   \[enginename\] and \[hostname\] are the names of the tomcat implementation mechanism and the web server computer (for example, with [automatic](57738078.html#Execution(auto)-settings) installation these names are catalina and localhost respectively)
    -   in Tomcat, in the file $CATALINA\_BASE/conf/server.xml, Context tag, Parameter tag (not recommended)
-   In URL parameters (e.g. [http://tryonline.lsfusion.org?host=3.3.3.3&port = 4444](http://tryonline.lsfusion.org?host=3.3.3.3&port=4444))


Example Tomcat configuration file ([section 3](#Launchparameters-webp3) in context parameters):

**$CATALINA\_BASE/conf/\\\\\[enginename\\\\\]/\\\\\[hostname  
\]/ROOT.xml**

    <?xml version='1.0' encoding='utf-8'?>
    <Context>
        <Parameter name="host" value="localhost" override="false"/>
        <Parameter name="port" value="7652" override="false"/>
    </Context>

In addition to the launch parameters, the platform also has [system parameters](Working_parameters.md) which are set a little differently and are relevant mainly for processes of various components of the platform (that is, processes that occur after they are launched).
