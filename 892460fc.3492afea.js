(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{274:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(421)),o=n(56),l={title:"Form design"},c={unversionedId:"Form_design",id:"Form_design",isDocsHomePage:!1,title:"Form design",description:"The form design defines how a\xa0form\xa0is displayed in the interactive\xa0view.",source:"@site/docs\\Form_design.md",slug:"/Form_design",permalink:"/docusaurustest/docs/Form_design",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Form_design.md",version:"current",sidebar:"docs",previous:{title:"Interactive view",permalink:"/docusaurustest/docs/Interactive_view"},next:{title:"Form events",permalink:"/docusaurustest/docs/Form_events"}},s=[{value:"Containers",id:"containers",children:[]},{value:"Base components",id:"base-components",children:[]},{value:"Dimensions and components layout",id:"dimensions-and-components-layout",children:[]},{value:"Default dimensions and layout",id:"default-dimensions-and-layout",children:[]},{value:"Window size",id:"window-size",children:[]},{value:"<strong>Default design</strong>",id:"default-design",children:[]},{value:"Default design example",id:"default-design-example",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],b={toc:s};function p(e){var t=e.components,l=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"form design")," defines how a\xa0",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Forms"}),"form"),"\xa0is displayed in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Interactive_view"}),"interactive"),"\xa0view."),Object(r.b)("p",null,"As with any GUI, form\xa0design is a hierarchy whose nodes are ",Object(r.b)("em",{parentName:"p"},"components"),". Components, in turn, can be:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"containers"),": components that contain other components."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"base components"),": graphical vews of the elements described in the\xa0",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/Form_structure"}),"form structure"),"\xa0and the form",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/Interactive_view"}),"interactive view"),".")),Object(r.b)("p",null,"Each\xa0component must have its own unique name within\xa0",Object(r.b)("em",{parentName:"p"},"the form"),".\xa0"),Object(r.b)("h3",{id:"containers"},"Containers"),Object(r.b)("p",null,"All children of any\xa0container\xa0make an ordered list. It is necessary to determine how the child components of each\xa0container\xa0on the form should be placed. To do this, one of the following\xa0",Object(r.b)("em",{parentName:"p"},"types"),"\xa0can be specified for a\xa0container:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Vertical container"),"\xa0(",Object(r.b)("strong",{parentName:"li"},"CONTAINERV"),"): children are placed from top to bottom."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Horizontal container"),"\xa0(",Object(r.b)("strong",{parentName:"li"},"CONTAINERH"),"): children are placed from left to right."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Tabbed panel"),"\xa0(",Object(r.b)("strong",{parentName:"li"},"TABBED"),"): at any given time exactly one child component is shown. This component is determined by user via selecting the corresponding tab."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Column container"),"\xa0(",Object(r.b)("strong",{parentName:"li"},"COLUMNS"),"): components are placed in a fixed number of columns. When a child component is added, it is placed in the first column with the minimum number of components. In fact, columns are filled first from left to right and then, when the number of columns reaches the specified one, a new row begins, which is located relative to the previous ones from top to bottom; the layout then goes again from left to right and so on.\xa0"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Vertical splitter"),"\xa0(",Object(r.b)("strong",{parentName:"li"},"SPLITV"),"): can be used only if the container has exactly two child components. In this case they are arranged from top to bottom, and the user can change how much space is given to each of them."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Horizontal splitter"),"\xa0(",Object(r.b)("strong",{parentName:"li"},"SPLITH"),"): similar to a\xa0vertical splitter, but the child components are placed from left to right."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Scrollable container"),"\xa0(",Object(r.b)("strong",{parentName:"li"},"SCROLL"),"): can be used only if the container has exactly one child component. This single component occupies all the space it needs in the container, and if there is not enough a scroll bar appears.")),Object(r.b)("p",null,"In future versions, the last three types of containers (",Object(r.b)("strong",{parentName:"p"},"SPLITV"),", ",Object(r.b)("strong",{parentName:"p"},"SPLITH"),", ",Object(r.b)("strong",{parentName:"p"},"SCROLL"),") will be deprecated and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/lsfusion/platform/issues/22"}),"replaced")," with the corresponding split and scroll options in vertical and horizontal containers."),Object(r.b)("p",null,"The default container type\xa0is\xa0vertical container (CONTAINERV)",Object(r.b)("em",{parentName:"p"},".")),Object(r.b)("p",null,"If at some point a\xa0container\xa0has no child components\xa0, or they are invisible, it is automatically hidden. In turn, if a\xa0component\xa0is not a child of any\xa0container, then it will not be shown on the form."),Object(r.b)("h3",{id:"base-components"},"Base components"),Object(r.b)("p",null,"When defining the form design, the developer can use the following base components, which are created automatically based on the form structure:"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Object groups / trees"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Table/Tree"),"\xa0(",Object(r.b)("strong",{parentName:"li"},"GRID"),"): a component consisting of rows and columns in which the rows correspond to object collections of the corresponding\xa0",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/Form_structure"}),"group of objects")," and columns correspond to\xa0",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/Properties"}),"properties"),"\xa0and\xa0",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/Actions"}),"actions"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"System toolbar"),"\xa0(",Object(r.b)("strong",{parentName:"li"},"TOOLBARSYSTEM"),"): a panel consisting of buttons with which the user can execute various system actions on the rows in the table. Automatically hidden if the\xa0table\xa0becomes invisible."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"User filter"),"\xa0(",Object(r.b)("strong",{parentName:"li"},"USERFILTER"),"): a component with which the user can create and apply their own filters to a\xa0table.")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Filter groups")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Filter group"),"\xa0(",Object(r.b)("strong",{parentName:"li"},"FILTERGROUP"),"): a component with which the user can activate the filters they need in a form's ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/Interactive_view#filter-group"}),"filter groups"),".")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Properties / Actions")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Property panel"),"\xa0(",Object(r.b)("strong",{parentName:"li"},"PROPERTY"),"): a component that displays the title and current value of a\xa0property. The caption can be either to the left of the value cell or at the top. Not shown if the\xa0property\xa0is displayed in the\xa0table.")),Object(r.b)("h3",{id:"dimensions-and-components-layout"},"Dimensions and components layout"),Object(r.b)("p",null,"The developer can control how the platform distributes the available container sizes between its internal components, as well as how these components will be located relative to each other."),Object(r.b)("p",null,"First of all, for each component you can specify the ",Object(r.b)("em",{parentName:"p"},"base")," size that this component will receive in any case, regardless of the algorithm for placing its container."),Object(r.b)("p",null,"To determine the final size of the components and their location inside the container, the following algorithm is used:"),Object(r.b)("p",null,"For each container, one of the directions is considered to be\xa0",Object(r.b)("em",{parentName:"p"},"dynamic"),", and the other ",Object(r.b)("em",{parentName:"p"},"static"),". The dynamic direction is determined from the name of the container, for example, for a vertical container, the dynamic direction will be vertical; for a horizontal splitter it will be horizontal. For a columned or scrollable container, as well as a tab panel, the dynamic direction is considered to be the vertical. Further, depending on the direction:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Dynamic: all components are placed one after another, in the order they are added to the container. Also, ",Object(r.b)("em",{parentName:"p"},"extension coefficient")," (",Object(r.b)("strong",{parentName:"p"},"flex"),") can be specified for each component. In this case, the space remaining in the container (that is, minus the basic dimensions of all internal components) is divided between all components in proportion to their extension coefficients.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Static: ",Object(r.b)("em",{parentName:"p"},"alignment")," can be specified for each component (",Object(r.b)("strong",{parentName:"p"},"alignment"),"). Its values can be ",Object(r.b)("em",{parentName:"p"},"At the start")," (",Object(r.b)("strong",{parentName:"p"},"START"),"), ",Object(r.b)("em",{parentName:"p"},"Center")," (",Object(r.b)("strong",{parentName:"p"},"CENTER"),"), ",Object(r.b)("em",{parentName:"p"},"At the end")," (",Object(r.b)("strong",{parentName:"p"},"END"),"), or ",Object(r.b)("em",{parentName:"p"},"Stretch")," (",Object(r.b)("strong",{parentName:"p"},"STRETCH"),"). In the first three cases, the component gets its base size as the final size, and is positioned in accordance with the specified type of alignment (that is, at the beginning, center, or end). If Stretch is used as the type of alignment, the final size of the component will be the size of the top container (but not less than the base size), and it will be located exactly in the center.\xa0"),Object(r.b)("p",{parentName:"li"},"For example, in the case of a vertical upper container, if the component is set to align at the start then it will be located on the maximum left of the container; if it is set to Stretch, the component will occupy all the space from the left to the right border."))),Object(r.b)("p",null,"This component layout algorithm is a special case of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/TR/css-flexbox-1/"}),"CSS Flexible Box Layout")," (and is implemented using it in the web client). For example, the CSS flex-grow property corresponds to the extension coefficient, and flex-basis corresponds to the base size."),Object(r.b)("p",null,"The column container breaks its static (horizontal) direction into ",Object(r.b)("strong",{parentName:"p"},"N")," identical parts (where ",Object(r.b)("strong",{parentName:"p"},"N")," is the number of columns): each part then has its own components, as if this part were a separate vertical container."),Object(r.b)("p",null,"For base components, you can specify the ",Object(r.b)("em",{parentName:"p"},"automatic size")," option (",Object(r.b)("strong",{parentName:"p"},"autoSize"),"): in this case, the base size will change automatically in to enclose exactly the entire contents of this base component (for example, for a table: all its records plus a title)."),Object(r.b)("p",null,"The properties\xa0layout in a table\xa0(or rather, the columns that display their values) is done the same way as if the table were a horizontal container, and the columns of the table were internal components of this container.\xa0"),Object(r.b)("p",null,"Since the current implementation uses the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3schools.com/cssref/pr_tab_table-layout.asp"}),"CSS Table Layout Fixed")," mechanism to place columns inside the table in the Web client, and its capabilities are significantly limited, the extension coefficient for properties displayed in the table can be equal either to 0 or to the base size."),Object(r.b)("p",null,"The caption and the value cell are placed inside the property panel in the same way as if the panel were a container (horizontal if the caption is on the left, vertical if at the top), in which the cell has an extension coefficient of 1, the caption is 0 and the alignment of both is set to \xa0STRETCH\xa0"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Property value cell sizes")),Object(r.b)("p",null,"When displaying properties, you can explicitly specify\xa0dimensions of the entire container (together with the caption, if the property is in a panel) and also the dimensions of the ",Object(r.b)("em",{parentName:"p"},"value cell")," itself. To do this, add the prefix\xa0",Object(r.b)("strong",{parentName:"p"},"value"),"\xa0to the size name,\xa0e.g. ",Object(r.b)("strong",{parentName:"p"},"valueWidth"),"). Also, it is worth noting that these dimensions (those of the value cells, and not the entire container) are also used to determine the column widths if the property is displayed in a table."),Object(r.b)("p",null,"For property value cells, it is also possible to specify the base width not in pixels, but using a\xa0",Object(r.b)("em",{parentName:"p"},"sample value")," (",Object(r.b)("strong",{parentName:"p"},"widthValue"),")\xa0In this case, the platform\xa0takes into account the user's font/mask/locale to calculate and set the width in pixels so that the user can see exactly the specified sample value (no more, no less). It is assumed that the sample value must be either a string or of a class equal to the class of the property value."),Object(r.b)("p",null,"In addition, cell widths can be specified in ",Object(r.b)("em",{parentName:"p"},"characters")," (",Object(r.b)("strong",{parentName:"p"},"charWidth")," ), which is equivalent to giving a string sample value consisting of the given number of zeros."),Object(r.b)("p",null,"In the last two cases (that is, when specifying the width as a sample value or in characters), if the property value class implies the presence of\xa0buttons on the right during\xa0",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Primitive_input_INPUT"}),"input"),"\xa0(for example, ",Object(r.b)("strong",{parentName:"p"},"DATE"),"\xa0class), then the width of this button (21 pixels) is added to the width of the property value cell."),Object(r.b)("h3",{id:"default-dimensions-and-layout"},"Default dimensions and layout"),Object(r.b)("p",null,"By default, the extension coefficient and alignment for components are determined as follows:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Component"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Extension coefficient"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Alignment"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Table / Tree"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"STRETCH")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Component inside scrollable containers, splitters and tabbed panel"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"STRETCH")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Property panel inside a horizontal container or property in a table. The property values are objects of\xa0built-in classes\xa0of dynamic length (i.e. strings and numbers)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"With of the value cell"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"START")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Property panel inside a vertical container. The property values are objects of\xa0builtin classes\xa0of dynamic length (i.e. strings and numbers)"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"STRETCH")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"All others"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"START")))),Object(r.b)("p",null,"The base container size (except the tab panel) is equal by default to the sum of the base sizes of all its child components for the dynamic direction, and the maximum for the static direction.\xa0The base\xa0height of the tab panel is the sum of the base height of its current tab and the height of the tab title bar, the base width is the same as the base width of the current tab."),Object(r.b)("p",null,"The base width of tables/trees is 130 pixels by default, and the height is 70 pixels. The base size of the property panel is determined in the same way as if the panel was a container\xa0(horizontal if the caption is on the left, vertical if it is at the top) consisting of the caption and the value cell. The base size of the remaining base components (as well as the caption in the property panel) is determined in such a way as to enclose all the text contained in them."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Property value cell dimensions")),Object(r.b)("p",null,"The following formulas are used by default to determine the width of a property value cell:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property value class"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Width unit"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Width/Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Strings"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"In characters"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("div",{class:"content-wrapper"},Object(r.b)("br",null),Object(r.b)("div",{class:"code panel pdl"},Object(r.b)("br",null),Object(r.b)("div",{class:"codeContent panelContent pdl"},Object(r.b)("br",null),Object(r.b)("pre",{class:"plain","data-syntaxhighlighter-params":"brush: plain; gutter: false; theme: Confluence","data-theme":"Confluence"},Object(r.b)("code",null,"IF length <= 12",Object(r.b)("br",null),"    result = length",Object(r.b)("br",null),"ELSE IF length = INFINITE",Object(r.b)("br",null),"    result = 15",Object(r.b)("br",null),"ELSE ",Object(r.b)("br",null),"    result = 12 + (length - 12) ^ 0.7")),Object(r.b)("br",null)),Object(r.b)("br",null)),Object(r.b)("br",null)))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Numbers"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"In characters"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("div",{class:"content-wrapper"},Object(r.b)("br",null),Object(r.b)("div",{class:"code panel pdl"},Object(r.b)("br",null),Object(r.b)("div",{class:"codeContent panelContent pdl"},Object(r.b)("br",null),Object(r.b)("pre",{class:"plain","data-syntaxhighlighter-params":"brush: plain; gutter: false; theme: Confluence","data-theme":"Confluence"},Object(r.b)("code",null,"IF length <= 6",Object(r.b)("br",null),"    result = length",Object(r.b)("br",null),"ELSE IF this = DOUBLE",Object(r.b)("br",null),"    result = 10",Object(r.b)("br",null),"ELSE ",Object(r.b)("br",null),"    result = MIN(6 + (length - 6) ^ 0.7, 10)")),Object(r.b)("br",null)),Object(r.b)("br",null)),Object(r.b)("br",null),Object(r.b)("p",null,"Where length = integerPart + precision"),Object(r.b)("br",null)))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",null,"COLOR")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"In pixels"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"40")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Files and file links"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"In pixels"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"18")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",null,"BOOLEAN")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"In pixels"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"25")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",null,"DATE")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sample value"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1991_11_21")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",null,"DATETIME")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sample value"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1991_11_21_10:55:55")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",null,"TIME")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Sample value"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"10:55:55")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"User classes"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"In characters"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"7")))),Object(r.b)("p",null,"The default height of a property value cell\xa0is equal to the height of the font used, except properties whose values belong to the ",Object(r.b)("strong",{parentName:"p"},"TEXT")," class (in this case, the height is four times the font height)."),Object(r.b)("h3",{id:"window-size"},"Window size"),Object(r.b)("p",null,"If the form opens in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG#form-location"}),"window")," mode it does not have an upper container, so you need to determine this window's initial size. This size is determined similarly to the default base size,\xa0the only difference is that for tables/trees the default size is determined not as a constant (the default is 130.70) but in such a way that it contains their whole contents (similar to the automatic sizing mechanism), but no less than 130 in width and 140 in height."),Object(r.b)("h3",{id:"default-design"},Object(r.b)("strong",{parentName:"h3"},"Default design")),Object(r.b)("p",null,"An automatic design can be created for each form, based on the\xa0form's structure. The developer can modify the automatic design or create a design from scratch."),Object(r.b)("p",null,"The automatic design is generated as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"BOX"),": contains all the components of this form.\xa0Vertical container. Extension coefficient: 1, alignment: STRETCH.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"PANEL"),":\xa0contains components of the properties that are displayed in\xa0PANEL\xa0view\xa0\xa0and ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/Form_structure#drawgroup-broken"}),"display group"),"\xa0of which is undefined (the property has no parameters). The internal structure and layout are similar to the internal structure and layout of the object group container.\xa0",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"GROUP...")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"OBJECTS"),": contains all the components that are created for object groups/trees on this form.\xa0Vertical container.\xa0Extension coefficient: 1, alignment:\xa0STRETCH.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"BOX")," (<object group/tree",">","): \xa0contains all the components of this group of objects. Vertical container.\xa0Extension coefficient: 1, alignment:\xa0STRETCH.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"GRIDBOX")," (<group of objects / tree",">","): \xa0contains\xa0table\xa0/ tree. Horizontal container. Extension coefficient: 1, alignment: STRETCH.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"GRID (): the base component of a Table."))),Object(r.b)("li",{parentName:"ul"},"TOOLBARBOX (\n):\xa0contains all the components of a toolbar (responsible for layout inside the toolbar). Horizontal container.\xa0Alignment: STRETCH",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"TOOLBARLEFT (): the left side of a toolbar. Horizontal container.\xa0Alignment: CENTER.  ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"TOOLBARSYSTEM (): the base component of the System toolbar.\xa0Alignment: CENTER."))),Object(r.b)("li",{parentName:"ul"},"TOOLBARRIGHT (): the right side of a toolbar.\xa0Horizontal container.\xa0Extension coefficient: 1, alignment:\xa0CENTER.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"FILTERGROUPS ():\xa0contains all the components that are created for\xa0filter groups\xa0corresponding to a\xa0object group.\xa0Horizontal container.\xa0Alignment: CENTER.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"FILTERGROUP: base component of a Filter group.\xa0Alignment: CENTER."))),Object(r.b)("li",{parentName:"ul"},"TOOLBAR (\n): \xa0contains the components of the properties displayed in the\xa0TOOLBAR view and display group equal to the specified one.\xa0Horizontal container.\xa0Alignment: CENTER.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"PROPERTY (): base component of the Property Panel."))))))),Object(r.b)("li",{parentName:"ul"},"USERFILTER (): \xa0base component of the User filter.\xa0Alignment: STRETCH."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"PANEL")," (tree>):\xa0contains the components of the properties displayed in the\xa0PANEL view. Vertical container. Alignment: STRETCH. If several\xa0properties\xa0belong to\xa0",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/Groups_of_properties_and_actions"}),"groups")," for which it is necessary to create separate containers, then a\xa0corresponding hierarchy of containers is created for them and the components of these properties are placed in it:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"GROUP")," (<property group",">",", tree",">","): contains components of properties that belong to the specified object group and property group\xa0(or do not belong to any property group: in this case the property group is not specified, for example GROUP(,a)). Column container.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"PROPERTY (): base component of the Property Panel."))))))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"TOOLBARBOX"),": contains property components that are displayed in\xa0TOOLBARview\xa0and have no display group\xa0(for example, the property has no parameters).\xa0The internal structure and layout are similar to the corresponding\xa0internal structure and layout of an object group (except for ",Object(r.b)("strong",{parentName:"li"},"FILTERGROUPS"),", which does not make sense when there is no object group, and therefore is not present in this container).",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"TOOLBARLEFT, TOOLBARRIGHT, TOOLBAR..."))))))),Object(r.b)("h3",{id:"default-design-example"},"Default design example"),Object(r.b)(o.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=FormDesignSample",mdxType:"CodeSample"}),Object(r.b)("p",null,"The hierarchy\xa0of containers\xa0and\xa0components\xa0in the default design will look like this:"),Object(r.b)("p",null,Object(r.b)("img",{src:n(500).default})),Object(r.b)("h3",{id:"language"},"Language"),Object(r.b)("p",null,"To set up the design of the form, use the\xa0",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/DESIGN_instruction"}),"*",Object(r.b)("strong",{parentName:"a"},"*DESIGN**")," instruction"),"."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)(o.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=FormSample&block=design",mdxType:"CodeSample"}),Object(r.b)("p",null,"The output is the following form:"),Object(r.b)("p",null,Object(r.b)("img",{src:n(501).default})))}p.isMDXComponent=!0},500:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/57738024-6ecfe5a9355a0ffec21981bab1728b77.png"},501:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/57738025-7364b4b4c703078e55a694077d5ce2f7.jpg"}}]);