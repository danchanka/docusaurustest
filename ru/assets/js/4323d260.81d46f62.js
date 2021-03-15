(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{167:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var o=a(3),r=a(7),n=(a(0),a(423)),s=a(424),i={title:"Interactive view"},c={unversionedId:"Interactive_view",id:"Interactive_view",isDocsHomePage:!1,title:"Interactive view",description:"A form opened in interactive mode is a graphical component with a certain\xa0design in which the user can trigger various events and thereby navigate through system objects, view and change\xa0property values, execute\xa0actions,\xa0and so on. Developers can also use an\xa0additional set of operators with this view, making it possible to manage the open form.",source:"@site/docs/Interactive_view.md",slug:"/Interactive_view",permalink:"/docusaurustest/ru/docs/Interactive_view",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Interactive_view.md",version:"current",sidebar:"docs",previous:{title:"Form views",permalink:"/docusaurustest/ru/docs/Form_views"},next:{title:"Form design",permalink:"/docusaurustest/ru/docs/Form_design"}},l=[{value:"Object views",id:"objects",children:[]},{value:"Object trees",id:"tree",children:[]},{value:"Property views",id:"property",children:[]},{value:"Filter group",id:"filtergroup",children:[]},{value:"Custom filters/orders",id:"userfilters",children:[]},{value:"Default objects selection",id:"defaultobject",children:[]},{value:"Object operators",id:"objectoperators",children:[]},{value:"Selection/editing forms",id:"edtClass",children:[]},{value:"Session owner",id:"owner",children:[]},{value:"System actions for form/session lifecycle management",id:"sysactions",children:[]},{value:"Additional features",id:"extra",children:[]},{value:"Language",id:"language",children:[]},{value:"Open form",id:"open-form",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"A form opened in ",Object(n.b)("em",{parentName:"p"},"interactive")," mode is a graphical component with a certain\xa0",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Form_design"},"design")," in which the user can trigger various ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Form_events"},"events")," and thereby navigate through system objects, view and change\xa0",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Properties"},"property")," values, execute\xa0",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Actions"},"actions"),",\xa0and so on. Developers can also use an\xa0",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Form_operators"},"additional set of operators")," with this view, making it possible to manage the open form."),Object(n.b)("h3",{id:"objects"},"Object views"),Object(n.b)("p",null,"In the interactive view,\xa0object groups can be displayed in a table. The rows in the table are object collections, and the columns are properties. The records displayed in the table and their order are determined by the current ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Form_structure#filters"},"filters")," and ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Form_structure#sort"},"orders"),"."),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Form_structure#currentObject-broken"},"Current values")," of objects can change either as a result of an action created using the special search operator ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Search_SEEK"},"(SEEK)"),", or as a result of a change to the current row, if an object group is displayed in a table."),Object(n.b)("p",null,"When an object group is displayed in a table, the number of rows (object collections) displayed can either be determined automatically based on the height of the visible part of the table, or specified by the developer explicitly when creating the form."),Object(n.b)("h3",{id:"tree"},"Object trees"),Object(n.b)("p",null,"The platform also allows to display multiple object groups in one table simultaneously. This happens similarly to the ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Static_view#hierarchy"},"object group hierarchy")," in a static view, i.e. if we have two groups ",Object(n.b)("strong",{parentName:"p"},"A")," and ",Object(n.b)("strong",{parentName:"p"},"B"),' then, in the "joined" table, the first object collection from ',Object(n.b)("strong",{parentName:"p"},"A")," is displayed first, then all object collections from ",Object(n.b)("strong",{parentName:"p"},"B")," (as filtered), then a second object collection from ",Object(n.b)("strong",{parentName:"p"},"A"),", then again all the object collections from ",Object(n.b)("strong",{parentName:"p"},"B")," and so on. In this case, it is highly desirable that the filters for ",Object(n.b)("strong",{parentName:"p"},"B")," used all objects from ",Object(n.b)("strong",{parentName:"p"},"A,\xa0")," since otherwise combining these groups into a single tree doesn't make sense. Initially, when a form is opened in the table, only\xa0objects of the topmost object group are displayed, but at the same time, a special column is created on the left of the table, using which the user can open nodes on his own and thus view only objects of interest in the lower object groups. Another function of this created column is to demonstrate the nesting of nodes by tabulating the elements inside this column (this allows the user to better understand what level of the hierarchy he is currently at)."),Object(n.b)("p",null,"Object trees also\xa0can be used to display hierarchical data (such as classifiers). In this case, the descendants of the object collection of a group in the tree can be not only object collections of lower groups but also object collections of the same group (such an object group shall be called ",Object(n.b)("em",{parentName:"p"},"hierarchical"),'). To determine these child object collections in a hierarchical object group, it is necessary to define an additional filter for it \u2013 which, unlike regular filters, can refer not only to the values of the filtered object collections but also to the values of the "upper in the tree" object collection (the same approach is used in the\xa0',Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Recursion_RECURSION"},"recursion"),' operator). It is highly desirable that the hierarchical filter uses all the values of the upper object collections, since otherwise, as with filters between different groups of objects, creating such a tree doesn\'t make sense. Initially, it is assumed that all values of the "upper in the tree" object collection are ',Object(n.b)("strong",{parentName:"p"},"NULL"),"."),Object(n.b)("p",null,"In the current platform implementation, hierarchical groups allow only trees to be displayed (not directed graphs). Accordingly, it is allowed to use only values of the upper object collections and properties that take lower (filtered) values of objects as input for a hierarchical filter (so that it is guaranteed that the same tree node cannot be reached in different ways)"),Object(n.b)("p",null,'The properties of different object groups in the tree are arranged in columns under each other, that is, the first column displays the first properties of each object group, the second column displays the second ones, and so on. The total number of tree columns is determined by the last group of objects on the tree (all "extra" properties of the upper groups are simply ignored).'),Object(n.b)("h3",{id:"property"},"Property views"),Object(n.b)("p",null,"Any property or\xa0action can be displayed on a form\xa0in one of the following\xa0",Object(n.b)("em",{parentName:"p"},"views"),":"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Panel")," (",Object(n.b)("strong",{parentName:"li"},"PANEL"),"): a separate component that displays a property caption and this property value for the current values of the form objects."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Toolbar")," (",Object(n.b)("strong",{parentName:"li"},"TOOLBAR"),"): similar to a panel, but this component has a different default location (immediately below the table), and if the table to which a toolbar belongs is hidden then the toolbar is hidden with it."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"table column"),"\xa0(",Object(n.b)("strong",{parentName:"li"},"GRID"),"): a separate column in the table that displays the property values for all object collections (rows) in the table.")),Object(n.b)("p",null,"For each object group, you can specify which ",Object(n.b)("em",{parentName:"p"},"default view"),"\xa0the properties of this group will be displayed in (by default, this view is a table column). If the property has no parameters (that is, it does not have a display group), it is displayed in a panel. Actions are always displayed in a panel by default."),Object(n.b)("p",null,"For the remainder of the section, the behavior of properties and actions is exactly the same and so we will use only the term property (behavior is absolutely identical for actions)."),Object(n.b)("p",null,"If necessary, the developer can explicitly specify which view a property should use."),Object(n.b)("p",null,"If at any point there are no properties displayed in the table for the object group, the table is automatically hidden."),Object(n.b)("p",null,"By default, the caption of each property on the form is the title of the property itself. If necessary, the developer can specify a different caption, or, if you need even more flexibility, use a property as a caption. This caption property can receive ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Form_structure#groupcolumns-broken"},"upper")," objects of the displayed property as input.\xa0It is also worth noting that if ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Form_structure#groupcolumns-broken"},"groups-in-columns")," are defined for the property, then it is desirable to have different captions for the created columns (in order to distinguish them somehow): in this case, it is recommended to use a property that receives all (!) objects of the defined group-in-columns as input."),Object(n.b)("p",null,"In addition to the captions, you can define colors (both the background color and the text color) for each property view on a form, as well as a condition that needs to be met for the property to be displayed. Like the caption, each of these parameters is defined using some property."),Object(n.b)("h3",{id:"filtergroup"},"Filter group"),Object(n.b)("p",null,"In order to provide the user with an interface for choosing filters to apply, they can be combined into\xa0",Object(n.b)("em",{parentName:"p"},"filter groups"),". For each of these groups, a special component will be created on the form: the user can use it to select one filter from the group as the current active filter. If several filters in one group are applied to different object groups, then the component will be displayed for the last of them."),Object(n.b)("p",null,"The developer can specify a name for each filter group which can be used to access it in the future (for example, in\xa0form design)."),Object(n.b)("h3",{id:"userfilters"},"Custom filters/orders"),Object(n.b)("p",null,"The user can change existing orders or add their own, as well as add their own filters using the corresponding interfaces:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Orders \u2013\xa0by double-clicking on the column heading."),Object(n.b)("li",{parentName:"ul"},"Filters \u2013\xa0by using the corresponding button under the table for each object group. By default, the filter is set to the active property in the table, and filters it for equality to the entered value (for all types except case-insensitive string types, where the filter is set to include the entered string). If necessary, the developer can specify the default filtering type explicitly by using the corresponding option.")),Object(n.b)("h3",{id:"defaultobject"},"Default objects selection"),Object(n.b)("p",null,"In the interactive form view, object group filters can change as a result of various user actions\xa0(for example, changing the upper objects of these filters, selecting filters in the filter group, etc.), after which the ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Form_structure#currentObject-broken"},"current")," objects may no longer meet the conditions of the new filters. Also, when ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Open_form"},"a form is opened"),", some objects may not be ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Open_form#params"},"passed")," or may be passed equal to ",Object(n.b)("strong",{parentName:"p"},"NULL"),". In both of these cases, it is necessary to change the current objects, to some current\xa0",Object(n.b)("em",{parentName:"p"},"default objects.\xa0")," The platform provides several options for selecting new current objects:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"First (",Object(n.b)("strong",{parentName:"li"},"FIRST"),") - the first\xa0object collection (in accordance with the current order)"),Object(n.b)("li",{parentName:"ul"},"Last (",Object(n.b)("strong",{parentName:"li"},"LAST"),") \u2013 last object collection."),Object(n.b)("li",{parentName:"ul"},"Previous (",Object(n.b)("strong",{parentName:"li"},"PREV"),") \u2013 the previous object collection (or as close to it as possible)."),Object(n.b)("li",{parentName:"ul"},"Undefined (",Object(n.b)("strong",{parentName:"li"},"NULL"),") \u2013 ",Object(n.b)("strong",{parentName:"li"},"NULL")," values collection.")),Object(n.b)("p",null,"If none of these options is explicitly specified, the platform will try to determine whether the permanent filters in the group of objects are a) mutually exclusive for different values of the upper objects (if any), and/or b) the filter selects a very small percentage of the total number of objects of the specified classes. In both of these cases, it makes no sense to search for the previous object and, by default, the first object is selected (",Object(n.b)("strong",{parentName:"p"},"FIRST"),"); in all other cases, the previous object (",Object(n.b)("strong",{parentName:"p"},"PREV"),")."),Object(n.b)("p",null,"It is worth noting that the selection of objects by default is pretty the same as the\xa0",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Search_SEEK"},"object search"),"operation, where the search objects are:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"for type PREV",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"on opening a form: either the passed objects, or, if there are none, the last used objects for the form object class."),Object(n.b)("li",{parentName:"ul"},"in other cases: the previous current object values"))),Object(n.b)("li",{parentName:"ul"},"for other types",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"on opening the form - passed objects"),Object(n.b)("li",{parentName:"ul"},"in other cases \u2013 an empty object collection")))),Object(n.b)("p",null,"Search direction is determined by the object's default type (",Object(n.b)("strong",{parentName:"p"},"PREV"),"\xa0here is equivalent to\xa0",Object(n.b)("strong",{parentName:"p"},"FIRST"),")."),Object(n.b)("h3",{id:"objectoperators"},"Object operators"),Object(n.b)("p",null,"When adding properties to a form, you can use a predefined set of operators that implement the most common scenarios for working with objects instead of using specific properties (thus avoiding the need to create and name these properties outside the form each time):"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Object value (",Object(n.b)("strong",{parentName:"li"},"VALUE"),") \u2013 for a form object of\xa0built-in class\xa0, a special property with one argument will be added which displays the current object value and allows the user to change it. For\xa0",Object(n.b)("a",{parentName:"li",href:"/docusaurustest/ru/docs/User_classes"},"custom classes"),", a\xa0property will be added which displays the object ID in the database; when you try to change it, it shows a dialog with a list of objects of that class. The selected value will be used as the current value of the object on the form."),Object(n.b)("li",{parentName:"ul"},"Create object (",Object(n.b)("strong",{parentName:"li"},"NEW"),") \u2013 adds an action without arguments, which ",Object(n.b)("a",{parentName:"li",href:"/docusaurustest/ru/docs/New_object_NEW"},"creates")," an object of the class of the passed form object (or the class explicitly specified by the developer), after which it automatically makes this object current. If the class has descendants, the user will be shown a dialog where he can select specific child class. If any filters are applied to the form object, for which the object is created, the system will try to ",Object(n.b)("a",{parentName:"li",href:"/docusaurustest/ru/docs/Property_change_CHANGE"},"change")," the newly created object's properties so that it meets these filter conditions (as a rule, for created objects, a default value of the class of each filter's value is written to that filter)"),Object(n.b)("li",{parentName:"ul"},"Edit object (",Object(n.b)("strong",{parentName:"li"},"EDIT)"),"\xa0\u2013 adds an action with one argument, which calls the ",Object(n.b)("strong",{parentName:"li"},"System.formEdit")," action (which, in turn, open the default ",Object(n.b)("a",{parentName:"li",href:"#edtClass"},"edit form")," for the edited object class).\xa0"),Object(n.b)("li",{parentName:"ul"},"Create and edit an object (",Object(n.b)("strong",{parentName:"li"},"NEWEDIT"),") \u2013 adds an action without arguments which creates an object of the form object class, calls the edit object action (",Object(n.b)("strong",{parentName:"li"},"EDIT"),"), and if the input is not ",Object(n.b)("a",{parentName:"li",href:"/docusaurustest/ru/docs/Value_input#result"},"canceled"),", sets the added object as current."),Object(n.b)("li",{parentName:"ul"},"Delete object (",Object(n.b)("strong",{parentName:"li"},"DELETE"),") \u2013 adds an action with one argument which deletes the current object.")),Object(n.b)("p",null,"You can also specify options for the last four operators (ignored for all other actions):"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/docusaurustest/ru/docs/New_session_NEWSESSION_NESTEDSESSION"},"New Session")," (",Object(n.b)("strong",{parentName:"li"},"NEWSESSION"),") \u2013 in this case, the action added to the form will be executed in a new session.\xa0When opening forms in a new session, it is important to remember that changes made in the current session (form) will not be visible. Thus, this mechanism is only recommended if the form is opened from a form in which the user cannot change anything, or if the properties and actions of the two forms do not intersect in any way. Note that when the operator is used to create a new object (NEW) in a new session, the object is not only created but also edited (NEWEDIT) (otherwise, the session would immediately close and your changes would be lost)."),Object(n.b)("li",{parentName:"ul"},"Nested Session (",Object(n.b)("strong",{parentName:"li"},"NESTEDSESSION"),") \u2013 the action will be executed in a new nested session. As with a new session, ",Object(n.b)("strong",{parentName:"li"},"NEW")," is replaced by ",Object(n.b)("strong",{parentName:"li"},"NEWEDIT"),".")),Object(n.b)("h3",{id:"edtClass"},"Selection/editing forms"),Object(n.b)("p",null,"For each form, you can specify that it is the default form for viewing/editing objects of a given class. In this case, this form will be opened when you call actions created using the operators for object operations (create/edit an object). The same form will be opened when the corresponding \xa0",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Open_form#form"},"form selection"),"\xa0option is used in the form opening operator."),Object(n.b)("p",null,"If list/edit form is not defined for a class, the platform will create one automatically. This form will consist of one object of the class, along with all properties matching the class and belonging to the\xa0",Object(n.b)("strong",{parentName:"p"},"System.base")," ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Groups_of_properties_and_actions"},"property group"),". Also, actions of ",Object(n.b)("a",{parentName:"p",href:"#new-broken"},"creating"),", ",Object(n.b)("a",{parentName:"p",href:"#edit-broken"},"editing")," and ",Object(n.b)("a",{parentName:"p",href:"#delete-broken"},"deleting")," an object in a ",Object(n.b)("a",{parentName:"p",href:"#newsession-broken"},"new session")," will be automatically added to the form, along with the ",Object(n.b)("a",{parentName:"p",href:"#value-broken"},"object value")," property if there are no properties from the ",Object(n.b)("strong",{parentName:"p"},"System.id"),' property group corresponding to the class of the object (that is, no "ID" of the object has been added to the form).'),Object(n.b)("h3",{id:"owner"},"Session owner"),Object(n.b)("p",null,"Since a form is opened by default in the current session, it may not always be safe to apply/cancel changes to this session: for example, the changes made in other forms may accidentally be applied. To avoid such situations, the platform has the concept of a ",Object(n.b)("em",{parentName:"p"},"session owner")," \u2013 a form which is responsible for managing the life cycle of the session (for example, applying / canceling changes). By default, it is considered that a form is the session owner if the session did not have any other owner when the form was ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/In_an_interactive_view_SHOW_DIALOG"},"opened"),"."),Object(n.b)("p",null,"To implement the mechanism for working with session owners the platform uses a numerical ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Data_properties_DATA#local"},"local")," property called ",Object(n.b)("strong",{parentName:"p"},"System.sessionOwners"),". Accordingly, this property is incremented by ",Object(n.b)("strong",{parentName:"p"},"1")," when you open a form and decremented by ",Object(n.b)("strong",{parentName:"p"},"1"),' when you close it. Thus, it shows the nesting depth of the "form opening stack", and is ',Object(n.b)("strong",{parentName:"p"},"NULL")," if the session has no owner and not ",Object(n.b)("strong",{parentName:"p"},"NULL")," otherwise."),Object(n.b)("p",null,"If necessary, the developer can explicitly specify when opening a form that this form is the owner of the session that it uses."),Object(n.b)("p",null,'Session ownership only affects the display / behavior of system actions for managing the life cycle of a form / session. When using the remaining actions, it is recommended that the developer should consider the risk of applying the "wrong" changes by himself (and, for example, use the mentioned above ',Object(n.b)("strong",{parentName:"p"},"System.sessionOwners")," property)."),Object(n.b)("h3",{id:"sysactions"},"System actions for form/session lifecycle management"),Object(n.b)("p",null,"The following system\xa0actions\xa0are automatically added to any form (their names are specified in brackets):"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Refresh (",Object(n.b)("strong",{parentName:"li"},"System.formRefresh"),") - updates the current state of the form, re-reading all the information from the database."),Object(n.b)("li",{parentName:"ul"},"Save (",Object(n.b)("strong",{parentName:"li"},"System.formApply"),") - saves the changes made on the form to the database."),Object(n.b)("li",{parentName:"ul"},"Cancel (",Object(n.b)("strong",{parentName:"li"},"System.formCancel"),") - cancels all changes made on\xa0the ",Object(n.b)("em",{parentName:"li"},"form"),"."),Object(n.b)("li",{parentName:"ul"},"OK (",Object(n.b)("strong",{parentName:"li"},"System.formOk"),") \u2013 closes the current form and, if the form is the session owner, applies the changes to the database."),Object(n.b)("li",{parentName:"ul"},"Close (",Object(n.b)("strong",{parentName:"li"},"System.formClose"),") - closes the current\xa0",Object(n.b)("em",{parentName:"li"},"form")," and does nothing with the changes."),Object(n.b)("li",{parentName:"ul"},"Drop (",Object(n.b)("strong",{parentName:"li"},"System.formDrop"),") \u2013 closes the current form and returns ",Object(n.b)("strong",{parentName:"li"},"NULL")," as the selected object.")),Object(n.b)("p",null,"By default, these system actions have the following visibility conditions:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Action"),Object(n.b)("th",{parentName:"tr",align:null},"Condition"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"Refresh"),Object(n.b)("td",{parentName:"tr",align:null},"Always")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"Save, Cancel"),Object(n.b)("td",{parentName:"tr",align:null},"If the form is the owner and actions that change the current session can be called on the form. Cancel may not be shown if the platform determines that canceling the changes is guaranteed to lead to a change of the ",Object(n.b)("a",{parentName:"td",href:"/docusaurustest/ru/docs/Open_form#params"},"initial values")," of form objects (i.e., selecting other objects)")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"OK, Close"),Object(n.b)("td",{parentName:"tr",align:null},"If the form was opened ",Object(n.b)("a",{parentName:"td",href:"/docusaurustest/ru/docs/In_an_interactive_view_SHOW_DIALOG#flow"},"synchronously"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"Drop"),Object(n.b)("td",{parentName:"tr",align:null},"If the form is opened synchronously, returns a value and allows ",Object(n.b)("strong",null,"NULL")," values to be passed")))),Object(n.b)("p",null,"If necessary, all these actions can be shown/hidden by removing the corresponding components from\xa0the ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Form_design"},"form design"),"\xa0and/or using the corresponding options in the ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Open_form"},"open form")," operator."),Object(n.b)("h3",{id:"extra"},"Additional features"),Object(n.b)("p",null,"You can specify an\xa0image file which will be displayed as the form's icon."),Object(n.b)("p",null,"Also, if necessary, you can enable ",Object(n.b)("em",{parentName:"p"},"automatic update")," mode for a form: the",Object(n.b)("strong",{parentName:"p"},"System.formRefresh")," action will then be executed for the form at a specified interval."),Object(n.b)("h3",{id:"language"},"Language"),Object(n.b)("p",null,"All of the above options, as well as defining the form structure,\xa0can be done using the ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/FORM_instruction"},Object(n.b)("strong",{parentName:"a"},"FORM")," instruction"),"."),Object(n.b)("h3",{id:"open-form"},"Open form"),Object(n.b)("p",null,"To display the form in the interactive view, the corresponding ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Open_form"},"open form")," operator is used in ",Object(n.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/In_an_interactive_view_SHOW_DIALOG"},"interactive view"),"."),Object(n.b)("h3",{id:"examples"},"Examples"),Object(n.b)(s.a,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=show",mdxType:"CodeSample"}),Object(n.b)(s.a,{url:"https://documentation.lsfusion.org/sample?file=ActionSample&block=dialog",mdxType:"CodeSample"}))}p.isMDXComponent=!0}}]);