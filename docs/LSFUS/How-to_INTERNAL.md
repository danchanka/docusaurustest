---
title: 'How-to: INTERNAL'
---

##### Example 1

###### Condition

We need to implement an action that will display a message with the server's name and IP address.

###### Solution



The Java code for an action created using the **INTERNAL** operator, runs on the server's virtual machine. So the signal cannot be called directly from the code of a class that inherits from **InternalAction**. For this purpose there is a method called **requestUserInteraction**, which must be passed a class that inherits from class **ClientAction**.

**Beep.java**

    import lsfusion.server.data.sql.exception.SQLHandledException;
    import lsfusion.server.language.ScriptingLogicsModule;
    import lsfusion.server.logics.action.controller.context.ExecutionContext;
    import lsfusion.server.logics.property.classes.ClassPropertyInterface;
    import lsfusion.server.physics.dev.integration.internal.to.InternalAction;

    import java.sql.SQLException;

    public class Beep extends InternalAction {

        public Beep(ScriptingLogicsModule LM) {
            super(LM);
        }

        @Override
        protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {
            String result = (String) context.requestUserInteraction(new ClientBeep(5));
            System.out.println(result);
        }
    }

The system halts code execution when this method is called, then passes **ClientBeep** (and all classes it uses that are not present in JRE) to the client application, constructs an object with the parameters passed (in this case just the number 5), and calls its **dispatch** method. Source code of class **ClientBeep**:

**ClientBeep.java**

    import lsfusion.interop.action.ClientAction;
    import lsfusion.interop.action.ClientActionDispatcher;

    import java.awt.*;
    import java.io.IOException;

    public class ClientBeep implements ClientAction {
        
        int times;

        public ClientBeep(int times) {
            this.times = times;
        }

        @Override
        public Object dispatch(ClientActionDispatcher dispatcher) throws IOException {
            for (int i = 0; i < times; i++) {
                try {
                    Thread.sleep(1000);
                    Toolkit.getDefaultToolkit().beep();
                } catch (InterruptedException ignored) {
                }
            }
            return "succeed";
        }
    }

The object returned by the **dispatch** method is returned to the server as the result of executing the **requestUserInteraction** method. In this example, the message *succeed* will be displayed on the server's standard console. Thus, results of code execution on the client can be read on the server.

Since java code cannot be executed directly in the browser, this action will only work with a desktop client.
