# lsFusionLaunch parameters

# Launch parameters

-   Application server (Server)
    -   [Java](#Launchparameters-appjava)
    -   [lsFusion](#Launchparameters-applsfusion)
-   Web server (Client)
    -   [Java](#Launchparameters-webjava)
    -   [lsFusion](#Launchparameters-weblsfusion)

### Application server (Server)

#### Java

Java application server startup parameters are set in the launch command (for example, for [manual](57738083.html#Execution(manual)-command) or [automatic](57738078.html#Execution(auto)-settings) installation):



Example Tomcat configuration file ([section 3](#Launchparameters-webp3) in context parameters):

**$CATALINA\_BASE/conf/\\\\\[enginename\\\\\]/\\\\\[hostname  
\]/ROOT.xml**

    <?xml version='1.0' encoding='utf-8'?>
    <Context>
        <Parameter name="host" value="localhost" override="false"/>
        <Parameter name="port" value="7652" override="false"/>
    </Context>

In addition to the launch parameters, the platform also has [system parameters](lsFusionWorking_parameters.md) which are set a little differently and are relevant mainly for processes of various components of the platform (that is, processes that occur after they are launched).
