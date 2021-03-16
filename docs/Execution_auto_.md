---
title: 'Execution (auto)'
---

|Stage|Windows|Linux|
|---|---|---|
|Installation|In addition to installing lsFusion, these installers/scripts also install OpenJDK, PostgreSQL, and Tomcat. Tomcat is embedded into the lsFusion Client installation, and OpenJDK and PostgreSQL are installed separately (in particular, in separate folders).|
|<div class="content-wrapper"><br/><p>Executable exe files:</p><br/><p>lsFusion<strong> 4.1 </strong>Server &amp; Client (+ OpenJDK 11.0.9, PostgreSQL 13.1(x64)/10.8(x32), Tomcat <strong>9.0.21</strong>):</p><br/><ul><br/><li><p>[x32](http://download.lsfusion.org/exe/lsfusion-4.1.exe)</p></li><br/><li>x64</li><br/></ul><br/><div id="expander-1222173586" class="expand-container"><br/><div id="expander-control-1222173586" class="expand-control"><br/>Older versions<br/></div><br/><div id="expander-content-1222173586" class="expand-content"><br/><div id="expander-1102603016" class="expand-container"><br/><div id="expander-control-1102603016" class="expand-control"><br/>lsFusion 4.0 Server &amp; Client<br/></div><br/><div id="expander-content-1102603016" class="expand-content"><br/><ul><br/><li>[x32](https://download.lsfusion.org/exe/lsfusion-4.0.exe)</li><br/><li>[x64](https://download.lsfusion.org/exe/lsfusion-4.0-x64.exe)</li><br/></ul><br/></div><br/></div><br/><div id="expander-413051964" class="expand-container"><br/><div id="expander-control-413051964" class="expand-control"><br/>lsFusion 3.1 Server &amp; Client<br/></div><br/><div id="expander-content-413051964" class="expand-content"><br/><ul><br/><li>[x32](https://download.lsfusion.org/exe/lsfusion-3.1.exe)</li><br/><li>[x64](https://download.lsfusion.org/exe/lsfusion-3.1-x64.exe)</li><br/></ul><br/></div><br/></div><br/><div id="expander-1540234433" class="expand-container"><br/><div id="expander-control-1540234433" class="expand-control"><br/>lsFusion 2.4 Server &amp; Client<br/></div><br/><div id="expander-content-1540234433" class="expand-content"><br/><ul><br/><li>[x32](https://download.lsfusion.org/exe/lsfusion-2.4.exe)</li><br/><li>[x64](https://download.lsfusion.org/exe/lsfusion-2.4-x64.exe)</li><br/></ul><br/></div><br/></div><br/></div><br/></div><br/><p>Subsequently, $INSTALL_DIR$ refers to the folder selected during the installation of lsFusion (by default, Program Files/lsFusion <version\>). It is also assumed that all parameters (ports, web context name) are left equal to default values.</p><br/></div>|<div class="content-wrapper"><br/><p>Bash scripts using yum / apt (the latest stable releases are used as minor versions):</p><br/><p>lsFusion <strong>4</strong> Server &amp; Client (+ OpenJDK <strong>1.8</strong>, PostgreSQL <strong>13</strong>, Tomcat <strong>9.0.21</strong>):</p><br/><div class="table-wrap"><br/><table class="wrapped confluenceTable"><br/><colgroup><br/><col  /><br/><col  /><br/></colgroup><br/><tbody><br/><tr class="header"><br/><th class="confluenceTh">OS</th><br/><th class="confluenceTh">Command / Script</th><br/></tr><br/><br/><tr class="odd"><br/><td class="confluenceTd">RHEL 7 / CentOS 7 / Fedora 29</td><br/><td class="confluenceTd"><div class="content-wrapper"><br/><p>source <(curl -s [https://download.lsfusion.org/yum/install-lsfusion4](https://download.lsfusion.org/yum/install-lsfusion4))</p><br/></div></td><br/></tr><br/><tr class="even"><br/><td class="confluenceTd">Ubuntu 18 / Debian 9</td><br/><td class="confluenceTd"><p>source <(curl -s [https://download.lsfusion.org/apt/install-lsfusion4](https://download.lsfusion.org/apt/install-lsfusion4))</p><br/><p>PostgreSQL installs version <strong>10</strong>, since that is the only one in the central repository</p></td><br/></tr><br/></tbody><br/></table><br/></div><br/></div>|
|<br /><br/>After installation<br /><br/><br /><br/>|Ports|<p>After the installation is completed, the following will by default be locally installed on the computer and launched as services:</p><br/><ul><br/><li>DB server (PostgreSQL) on port 5432</li><br/><li>application server (Server) on port 7652</li><br/><li>web server (Client) on port 8080</li><br/></ul>|
|<p>Installing / updating anapplication</p>|<div class="content-wrapper"><br/><p>In order to upload the developed logic to the installed application server (Server), you must:</p><br/><p>Place [modules](Modules.md) developed in the lsFusion language as files with an lsf extension in a folder located in the server's [classpath](Launch_parameters.md#classpath-broken) (default value for automatic installation, see below). In addition, the rest of the resource files if any must also be placed there (e.g. report files, compiled Java files, images, etc.). These files may be placed in subfolders of the classpath, as well as inside jar files (zip archives with the jar extension). After all the files have been copied, you need to [restart](#restart-broken) the server.</p><br/><div><br/><div><br/><p>It is often convenient to place all project files inside a single jar file. To generate such a file automatically, you can use [Maven](Development_manual_.md#uber-broken) (with assemble and noserver profiles) or the build tools built into the [IDE](IDE.md#build).</p><br/></div><br/></div><br/><p>By default, the server's classpath is equal to $APP_DIR$;$APP_DIR$/*;server.jar, i.e. the $APP_DIR$ folder and all its subfolders, all jar files in the $APP_DIR$ folder (but not its subfolders), and also the jar file of the application server itself</p><br/><p>$APP_DIR$ is equal to:</p><br/></div>|
|$INSTALL_DIR$/lib|<p>*/var/lib/lsfusion*</p><br/><p>The application server is installed and started under the automatically created non-privileged user *lsfusion* so files in the folder should be accessible for this user to read. </p>|
|<p>Installing / updating clients</p>|<div class="content-wrapper"><br/><p>To give users access to the installed system, you must:</p><br/><p>Send users a link to http://<web address of the web server (Client)\>:8080. When users open this link, they will be redirected by default to the login page, where, if necessary, they can install the desktop client via Java Web Start (requires Java (JDK) installed, for example, by following [this](https://developers.redhat.com/products/openjdk/download) link with registration or this one [without](https://github.com/ojdkbuild/ojdkbuild)).</p><br/><p>Web and desktop clients are updated automatically with [updates to the web server](#webupdate-broken) (Client).</p><br/><div><br/><div><br/><p>Under Windows, you can also use desktop client [installers](http://download.lsfusion.org/exe/) (lsfusion-desktop- * files with the correct OS version and bit width). However, unlike installing with Java Web Start, a desktop client installed in this way will not be automatically updated. Therefore, you will need to update it manually by downloading the file of the new version of the desktop client (lsfusion-client-4.<new version\>.jar) from [the central server](https://download.lsfusion.org/java) and replacing the $INSTALL_DIR$/client.jar file with it</p><br/></div><br/></div><br/></div>|
|<br /><br/>|All paths and commands are given below for the major version 4 of the platform (for other versions just replace 4 with the required number, for example lsfusion4-server → lsfusion11-server)|
|*All paths by default*|*Paths changed (in particular with symlinks) in accordance with Linux ideology*|
|Updating|<p>Programs installed separately (OpenJDK, PostgreSQL) are also updated separately (for more details about this process, see the documentation for these programs)</p><br/><p>Platform components are also updated separately from each other. To do this, you must:</p>|
|<div class="content-wrapper"><br/><p>Download the file of the new version of the component from [the central server](https://download.lsfusion.org/java) and replace the following file with it:</p><br/></div>|Run the command:|
|Application Server (Server)|<p>File on the central server: lsfusion-server-4.<new version\>.jar</p><br/><p>File to replace: $INSTALL_DIR$/Server/server.jar</p>|<div class="content-wrapper"><br/><div class="table-wrap"><br/><table class="wrapped confluenceTable"><br/><colgroup><br/><col  /><br/><col  /><br/></colgroup><br/><tbody><br/><tr class="header"><br/><th class="confluenceTh">OS</th><br/><th class="confluenceTh">Command</th><br/></tr><br/><br/><tr class="odd"><br/><td class="confluenceTd">RHEL 7 / CentOS 7 / Fedora 29</td><br/><td class="confluenceTd"><div class="content-wrapper"><br/><div class="code panel pdl" ><br/><div class="codeHeader panelHeader pdl hide-border-bottom"><br/><strong></strong><br/> Expand source<br/></div><br/><div class="codeContent panelContent pdl hide-toolbar"><br/><div class="sourceCode" id="cb1" data-syntaxhighlighter-params="brush: bash; gutter: false; theme: Confluence; collapse: true" data-theme="Confluence" ><pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb1-1">[](#1-broken)<span class="ex">yum</span> update lsfusion4_server</span></code></pre></div><br/></div><br/></div><br/></div></td><br/></tr><br/><tr class="even"><br/><td class="confluenceTd">Ubuntu 18 / Debian 9</td><br/><td class="confluenceTd"><div class="content-wrapper"><br/><div class="code panel pdl" ><br/><div class="codeHeader panelHeader pdl hide-border-bottom"><br/><strong></strong><br/> Expand source<br/></div><br/><div class="codeContent panelContent pdl hide-toolbar"><br/><div class="sourceCode" id="cb2" data-syntaxhighlighter-params="brush: bash; gutter: false; theme: Confluence; collapse: true" data-theme="Confluence" ><pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb2-1">[](#1-broken)<span class="ex">apt</span> install lsfusion4_server</span></code></pre></div><br/></div><br/></div><br/></div></td><br/></tr><br/></tbody><br/></table><br/></div><br/></div>|
|<div class="content-wrapper"><br/><p>Web server (Client)</p><br/></div>|<div class="content-wrapper"><br/>File on the central server: lsfusion-server-4..jar<br/><p>File to replace: $INSTALL_DIR$/Client/webapps/ROOT.war</p><br/><p>To update Tomcat, you need to download the archive with the new version of Tomcat and unzip it to the $INSTALL_DIR$/Client folder without the webapps directory and the [startup parameters](#webapp-broken) file</p><br/></div>|<div class="content-wrapper"><br/><div class="table-wrap"><br/><table class="wrapped confluenceTable"><br/><colgroup><br/><col  /><br/><col  /><br/></colgroup><br/><tbody><br/><tr class="header"><br/><th class="confluenceTh">OS</th><br/><th class="confluenceTh">Command</th><br/></tr><br/><br/><tr class="odd"><br/><td class="confluenceTd">RHEL 7 / CentOS 7 / Fedora 29</td><br/><td class="confluenceTd"><div class="content-wrapper"><br/><div class="code panel pdl" ><br/><div class="codeHeader panelHeader pdl hide-border-bottom"><br/><strong></strong><br/> Expand source<br/></div><br/><div class="codeContent panelContent pdl hide-toolbar"><br/><div class="sourceCode" id="cb3" data-syntaxhighlighter-params="brush: bash; gutter: false; theme: Confluence; collapse: true" data-theme="Confluence" ><pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb3-1">[](#1-broken)<span class="ex">yum</span> update lsfusion4_client</span></code></pre></div><br/></div><br/></div><br/></div></td><br/></tr><br/><tr class="even"><br/><td class="confluenceTd">Ubuntu 18 / Debian 9</td><br/><td class="confluenceTd"><div class="content-wrapper"><br/><div class="code panel pdl" ><br/><div class="codeHeader panelHeader pdl hide-border-bottom"><br/><strong></strong><br/> Expand source<br/></div><br/><div class="codeContent panelContent pdl hide-toolbar"><br/><div class="sourceCode" id="cb4" data-syntaxhighlighter-params="brush: bash; gutter: false; theme: Confluence; collapse: true" data-theme="Confluence" ><pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb4-1">[](#1-broken)<span class="ex">apt</span> install lsfusion4_client</span></code></pre></div><br/></div><br/></div><br/></div></td><br/></tr><br/></tbody><br/></table><br/></div><br/></div>|
|Custom installation<br /><br/><br /><br/><br /><br/>|If any of the programs listed in the installation (platform components) do not need to be installed / are already installed on your computer:|
|These programs can be excluded during installation using the corresponding graphical interface.|<div class="content-wrapper"><br/><p>The following are scripts for installing specific platform components:</p><br/><p>Database Server - PostgreSQL <strong>11</strong>:</p><br/><div class="table-wrap"><br/><table class="wrapped confluenceTable"><br/><colgroup><br/><col  /><br/><col  /><br/></colgroup><br/><tbody><br/><tr class="header"><br/><th class="confluenceTh">OS</th><br/><th class="confluenceTh">Command / Script</th><br/></tr><br/><br/><tr class="odd"><br/><td class="confluenceTd">RHEL 7 / CentOS 7 / Fedora 29</td><br/><td class="confluenceTd"><p>source <(curl -s [https://download.lsfusion.org/yum/install-lsfusion4-db](https://download.lsfusion.org/yum/install-lsfusion2-db))</p></td><br/></tr><br/><tr class="even"><br/><td class="confluenceTd">Ubuntu 18 / Debian 9</td><br/><td class="confluenceTd"><p>source <(curl -s [https://download.lsfusion.org/apt/install-lsfusion4-db](https://download.lsfusion.org/apt/install-lsfusion2-db))</p><br/><p>PostgreSQL <strong>10</strong></p></td><br/></tr><br/></tbody><br/></table><br/></div><br/><p>Application Server - lsFusion 4 Server (+ OpenJDK <strong>1.8</strong>): </p><br/><div class="table-wrap"><br/><table class="wrapped confluenceTable"><br/><tbody><br/><tr class="header"><br/><th class="confluenceTh">OS</th><br/><th class="confluenceTh">Command / Script</th><br/></tr><br/><br/><tr class="odd"><br/><td class="confluenceTd">RHEL 7+ / CentOS 7+ / Fedora 29+</td><br/><td class="confluenceTd">source <(curl -s [https://download.lsfusion.org/yum/install-lsfusion4-server](https://download.lsfusion.org/yum/install-lsfusion2-server))</td><br/></tr><br/><tr class="even"><br/><td class="confluenceTd">Ubuntu 18 / Debian 9</td><br/><td class="confluenceTd">source <(curl -s [https://download.lsfusion.org/apt/install-lsfusion4-server](https://download.lsfusion.org/yum/install-lsfusion2-server))</td><br/></tr><br/></tbody><br/></table><br/></div><br/><p>Web server - lsFusion 4 Client (+ Tomcat <strong>9.0.20</strong>): </p><br/><div class="table-wrap"><br/><table class="wrapped confluenceTable"><br/><tbody><br/><tr class="header"><br/><th class="confluenceTh">OS</th><br/><th class="confluenceTh">Command / Script</th><br/></tr><br/><br/><tr class="odd"><br/><td class="confluenceTd">RHEL 7+ / CentOS 7+ / Fedora 29+</td><br/><td class="confluenceTd">source <(curl -s [https://download.lsfusion.org/yum/install-lsfusion4-client](https://download.lsfusion.org/yum/install-lsfusion2-client))</td><br/></tr><br/><tr class="even"><br/><td class="confluenceTd">Ubuntu 18 / Debian 9</td><br/><td class="confluenceTd">source <(curl -s [https://download.lsfusion.org/apt/install-lsfusion4-client](https://download.lsfusion.org/yum/install-lsfusion2-client))</td><br/></tr><br/></tbody><br/></table><br/></div><br/></div>|
|<div class="content-wrapper"><br/><p>When installing platform components on different computers, it is also necessary to [configure the parameters](#settings-broken) to connect them to each other:</p><br/><div class="table-wrap"><br/><table class="wrapped confluenceTable"><br/><tbody><br/><tr class="header"><br/><th class="confluenceTh">Components on different computers</th><br/><th class="confluenceTh">Connection parameters</th><br/><th class="confluenceTh">Configurable file</th><br/></tr><br/><br/><tr class="odd"><br/><td class="confluenceTd">DB server and application server (Server)</td><br/><td class="confluenceTd"><p>[Application server to DB server](Launch_parameters.md)</p></td><br/><td class="confluenceTd">[File](#lsfusionapp-broken) lsFusion application server startup parameters</td><br/></tr><br/><tr class="even"><br/><td class="confluenceTd">Application server (Server) and web server (Client)</td><br/><td class="confluenceTd"><p>[Web server to application server](Launch_parameters.md#connectapp-broken)</p></td><br/><td class="confluenceTd">[File](#webapp-broken) lsFusion web server startup parameters</td><br/></tr><br/></tbody><br/></table><br/></div><br/><div><br/><div><br/><p>When installing under Windows, the above parameters are requested during the installation process and the parameter files are configured automatically.</p><br/></div><br/></div><br/></div>|
|<div class="content-wrapper"><br/><p>Manual setup </p><br/></div><br/><div class="content-wrapper"><br/><p>(file paths, service names)</p><br/></div><br/><br /><br/><br /><br/><br /><br/><br /><br/><br /><br/><br /><br/><br /><br/><br/><p><br /><br/></p><br/><p><br /><br/></p><br/><br /><br/><br /><br/>|||||
|<div class="content-wrapper"><br/><p>[Startup parameters](Launch_parameters.md)</p><br/><p><br /><br/></p><br/><p><br /><br/></p><br/></div><br/><p><br /><br/></p><br/><p><br /><br/></p><br/><p><br /><br/></p><br/><p><br /><br/></p><br/><p><br /><br/></p>|<div class="content-wrapper"><br/><p>Application server (Server):</p><br/></div>|
|<p>[Java](Launch_parameters.md#appjava) </p>|<p>Java tab in the graphical interface $INSTALL_DIR/Server/bin/lsfusion4_serverw.exe</p><br/><ul><br/><li>[classpath](Launch_parameters.md#classpath-broken) - the Classpath parameter in the same tab</li><br/></ul>|<p>the <strong>FUSION_OPTS</strong> parameter in the file /etc/lsfusion4-server/lsfusion.conf</p><br/><ul><br/><li>[classpath](Launch_parameters.md#classpath-broken): the <strong>CLASSPATH</strong> parameter in the same file</li><br/></ul>|
|<div class="content-wrapper"><br/><p>[lsFusion](Launch_parameters.md#appp3-broken) </p><br/></div>|<div class="content-wrapper"><br/><p>the file $INSTALL_DIR/Server/conf/settings.properties</p><br/></div>|<div class="content-wrapper"><br/><p>the file /etc/lsfusion4-server/settings.properties</p><br/></div>|
|Web server (Client): |
|<p>[Java](Launch_parameters.md#webjava) </p>|<p>Java tab in the graphical interface $INSTALL_DIR/Client/bin/lsfusion4_serverw.exe</p>|<div class="content-wrapper"><br/><p>the <strong>CATALINA_OPTS</strong> parameter in the file /etc/lsfusion4-client/lsfusion.conf</p><br/></div>|
|<p>[lsFusion](Launch_parameters.md#webp3-broken) </p>|<p>the file $INSTALL_DIR/Client/conf/catalina/localhost/ROOT.xml</p>|<div class="content-wrapper"><br/><p>the file /etc/lsfusion4-client/catalina/localhost/ROOT.xml</p><br/></div>|
|<p>Desktop client: Java parameters are set inside the j2se tag in the jnlp file</p>|
|<div class="content-wrapper"><br/><p>Restart </p><br/></div>|<div class="content-wrapper"><br/><p>Any changes made to the startup parameters, as well as changes to lsFusion modules, require a server restart (when changing lsFusion modules only the application server (Server)). This can be done with:</p><br/><p>Application server (Server)</p><br/></div>|
|<div class="content-wrapper"><br/><p>GUI:</p><br/><p>Control Panel → Admin → Services → lsFusion 4 Server</p><br/><p>or</p><br/><div class="code panel pdl" ><br/><div class="codeHeader panelHeader pdl hide-border-bottom" ><br/><strong>Command</strong><br/> Expand source<br/></div><br/><div class="codeContent panelContent pdl hide-toolbar"><br/><div class="sourceCode" id="cb5" data-syntaxhighlighter-params="brush: bash; gutter: false; theme: Confluence; collapse: true" data-theme="Confluence" ><pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb5-1">[](#1-broken)<span class="co"># Stop server</span></span><br/><span id="cb5-2">[](#1-broken)<span class="va">$INSTALL_DIR</span><span class="ex">/Server/bin/lsfusion4_server.exe</span> //SS//lsfusion4_server</span><br/><span id="cb5-3">[](#1-broken)</span><br/><span id="cb5-4">[](#1-broken)<span class="co"># Start server</span></span><br/><span id="cb5-5">[](#1-broken)<span class="va">$INSTALL_DIR</span><span class="ex">/Server/bin/lsfusion4_server.exe</span> //ES//lsfusion4_server</span></code></pre></div><br/></div><br/></div><br/></div>|<div class="content-wrapper"><br/><div class="code panel pdl" ><br/><div class="codeHeader panelHeader pdl hide-border-bottom" ><br/><strong>Command</strong><br/> Expand source<br/></div><br/><div class="codeContent panelContent pdl hide-toolbar"><br/><div class="sourceCode" id="cb6" data-syntaxhighlighter-params="brush: bash; gutter: false; theme: Confluence; collapse: true" data-theme="Confluence" ><pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb6-1">[](#1-broken)<span class="co"># Stop server</span></span><br/><span id="cb6-2">[](#1-broken)<span class="ex">systemctl</span> stop lsfusion4-server</span><br/><span id="cb6-3">[](#1-broken)</span><br/><span id="cb6-4">[](#1-broken)<span class="co"># Start server</span></span><br/><span id="cb6-5">[](#1-broken)<span class="ex">systemctl</span> start lsfusion4-server</span></code></pre></div><br/></div><br/></div><br/><br /><br/><br/></div>|
|Web server (Client)|
|<div class="content-wrapper"><br/><p>GUI:</p><br/><p>Control Panel → Admin → Services → lsFusion 4 Client</p><br/><p>or</p><br/><div class="code panel pdl" ><br/><div class="codeHeader panelHeader pdl hide-border-bottom" ><br/><strong>Command</strong><br/> Expand source<br/></div><br/><div class="codeContent panelContent pdl hide-toolbar"><br/><div class="sourceCode" id="cb7" data-syntaxhighlighter-params="brush: bash; gutter: false; theme: Confluence; collapse: true" data-theme="Confluence" ><pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb7-1">[](#1-broken)<span class="co"># Stop server</span></span><br/><span id="cb7-2">[](#1-broken)<span class="va">$INSTALL_DIR</span><span class="ex">/Client/bin/lsfusion4_client.exe</span> //SS//lsfusion4_client</span><br/><span id="cb7-3">[](#1-broken)</span><br/><span id="cb7-4">[](#1-broken)<span class="co"># Start server</span></span><br/><span id="cb7-5">[](#1-broken)<span class="va">$INSTALL_DIR</span><span class="ex">/Client/bin/lsfusion4_client.exe</span> //ES//lsfusion4_client</span></code></pre></div><br/></div><br/></div><br/></div>|<div class="content-wrapper"><br/><div class="code panel pdl" ><br/><div class="codeHeader panelHeader pdl hide-border-bottom" ><br/><strong>Command</strong><br/> Expand source<br/></div><br/><div class="codeContent panelContent pdl hide-toolbar"><br/><div class="sourceCode" id="cb8" data-syntaxhighlighter-params="brush: bash; gutter: false; theme: Confluence; collapse: true" data-theme="Confluence" ><pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb8-1">[](#1-broken)<span class="co"># Stop client</span></span><br/><span id="cb8-2">[](#1-broken)<span class="ex">systemctl</span> stop lsfusion4-client</span><br/><span id="cb8-3">[](#1-broken)</span><br/><span id="cb8-4">[](#1-broken)<span class="co"># Start client</span></span><br/><span id="cb8-5">[](#1-broken)<span class="ex">systemctl</span> start lsfusion4-client</span></code></pre></div><br/></div><br/></div><br/></div>|
|<div class="content-wrapper"><br/>[Logs](Journals_and_logs.md#logs)<br /><br/><br /><br/><br /><br/><br /><br/><br/><p><br /><br/></p><br/><p><br /><br/></p><br/></div><br/><br /><br/><br /><br/><br /><br/><br /><br/><br/><p><br /><br/></p><br/><div class="content-wrapper"><br/><p><br /><br/></p><br/></div><br/><p><br /><br/></p>|<p>Platform logs are written to the following folders:</p><br/><p>Application server (Server):</p>|
|<div class="content-wrapper"><br/><p>$INSTALL_DIR$/Server/logs</p><br/></div>|/var/log/lsfusion4-server|
|Web server (Client):|
|$INSTALL_DIR$/Client/logs|/var/log/lsfusion4-client|
|<p>The main logs (including the process of stopping and starting the server) are located in:</p><br/><ul><br/><li>Application server (Server) - stdout</li><br/><li>Web server (Client) - catalina.out (since the web server runs on Tomcat)*.*</li><br/></ul><br/><p>Desktop client logs: $USER_DIR$/.fusion/logs, where $USER_DIR$ is the user folder:</p>|
|Users/<username\>|/home/<username\>|
|[Locale](Internationalization.md)|The locale used by the platform is determined based on the locale installed in the operating system. If necessary, it can be changed with:|
|<p>GUI:</p><br/><p>Control Panel → Language and Regional Standards</p>|<div class="content-wrapper"><br/><div class="code panel pdl" ><br/><div class="codeHeader panelHeader pdl hide-border-bottom" ><br/><strong>Command</strong><br/> Expand source<br/></div><br/><div class="codeContent panelContent pdl hide-toolbar"><br/><div class="sourceCode" id="cb9" data-syntaxhighlighter-params="brush: bash; gutter: false; theme: Confluence; collapse: true" data-theme="Confluence" ><pre class="sourceCode bash"><code class="sourceCode bash"><span id="cb9-1">[](#1-broken)<span class="ex">localectl</span> set-locale LANG=ru_RU.utf8</span></code></pre></div><br/></div><br/></div><br/></div>|