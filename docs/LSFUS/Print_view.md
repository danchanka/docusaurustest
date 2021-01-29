# lsFusionPrint view

# Print view

Print view of the [form](Forms.md) consists of a set of templates (*reports*). When data is substituted in these templates, a *document* is formed in graphic (with pixel positioning) or pseudographic (with cell positioning) format. This document is displayed to the user using a special graphic component, inside which the user can navigate through pages, zoom in/out within pages and print the contents of the component or export it to various formats (for example, PDF or Excel). If necessary, it is possible to skip the display of the component to the user and send the document for printing or save it into a selected file in the specified format.

For each report, a set of the form [object groups](Form-structure_1573069.html#Formstructure-objects) that it will display is determined.

**Report hierarchy**

Similar to an object group, each report has a *parent* report, so all reports form a hierarchy. The report hierarchy should:

-   include [the hierarchy of object groups](Static_view.md), i.e. if a group of objects of one report is a child of a group of objects of the other report, then the first report must match the second one or be its child as well
-   within one report, each group of objects must have exactly one child.

**Building report hierarchy**

Based on the report hierarchy restrictions, only "chains" of object groups can be included in one report (i.e., G1, G2, G3, ... Gn, where G2 is the only linear child object of G1, G3 is the only child of G2, etc.). Thus, the decision on how to break object groups into reports comes down to whether to merge an object group with its only child (if there is one) or not. By default, such a merge is performed, however, if necessary, the developer can disable it by specifying the corresponding option (**SUBREPORT**) for a child object group.

Using this option comes down to whether to display data for a parent object group when the child object group has no data.

**Report hierarchy example**

The form is similar to the [example of building an object group hierarchy](Static-view_29884533.html#Staticview-hierarchysample):


