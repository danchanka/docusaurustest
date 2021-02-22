---
title: 'Write file (WRITE)'
---

The *write file* operator creates an [action](Actions.md) which reads a file from the value of some property and saves it to the defined source.

The source is set as a [property](Properties.md) whose values are instances of [string classes](Built-in_classes.md). The following types of data sources (URLs) are supported: **FILE**, **FTP**, **SFTP**

### Language

To declare an action that writes a file, use the [**WRITE** operator](WRITE_operator.md).

### Examples


import {CodeSample} from './CodeSample.mdx'

<CodeSample url="http://documentation.lsfusion.org:5000/sample?file=ActionSample&block=write"/>
