(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{366:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),i=(n(0),n(423)),r={},c={unversionedId:"LSFUS/lsFusionForm_design",id:"LSFUS/lsFusionForm_design",isDocsHomePage:!1,title:"lsFusionForm_design",description:"lsFusionForm design",source:"@site/docs\\LSFUS\\lsFusionForm_design.md",slug:"/LSFUS/lsFusionForm_design",permalink:"/docusaurustest/docs/LSFUS/lsFusionForm_design",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/LSFUS/lsFusionForm_design.md",version:"current"},s=[],l={toc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"lsfusionform-design"},"lsFusionForm design"),Object(i.b)("h1",{id:"form-design"},"Form design"),Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"form design")," defines how a\xa0",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionForms"}),"form"),"\xa0is displayed in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionInteractive_view"}),"interactive"),"\xa0view."),Object(i.b)("p",null,"As with any GUI, form\xa0design is a hierarchy whose nodes are ",Object(i.b)("em",{parentName:"p"},"components"),". Components, in turn, can be:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"containers"),": components that contain other components."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"base components"),": graphical vews of the elements described in the\xa0",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/lsFusionForm_structure"}),"form structure"),"\xa0and the form",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/lsFusionInteractive_view"}),"interactive view"),".")),Object(i.b)("p",null,"Each\xa0component must have its own unique name within\xa0",Object(i.b)("em",{parentName:"p"},"the form"),".\xa0"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Containers")),Object(i.b)("p",null,"All children of any\xa0container\xa0make an ordered list. It is necessary to determine how the child components of each\xa0container\xa0on the form should be placed. To do this, one of the following\xa0",Object(i.b)("em",{parentName:"p"},"types"),"\xa0can be specified for a\xa0container:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Vertical container"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"CONTAINERV"),"): children are placed from top to bottom."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Horizontal container"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"CONTAINERH"),"): children are placed from left to right."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Tabbed panel"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"TABBED"),"): at any given time exactly one child component is shown. This component is determined by user via selecting the corresponding tab."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Column container"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"COLUMNS"),"): components are placed in a fixed number of columns. When a child component is added, it is placed in the first column with the minimum number of components. In fact, columns are filled first from left to right and then, when the number of columns reaches the specified one, a new row begins, which is located relative to the previous ones from top to bottom; the layout then goes again from left to right and so on.\xa0"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Vertical splitter"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"SPLITV"),"): can be used only if the container has exactly two child components. In this case they are arranged from top to bottom, and the user can change how much space is given to each of them."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Horizontal splitter"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"SPLITH"),"): similar to a\xa0vertical splitter, but the child components are placed from left to right."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Scrollable container"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"SCROLL"),"): can be used only if the container has exactly one child component. This single component occupies all the space it needs in the container, and if there is not enough a scroll bar appears.")),Object(i.b)("p",null,"In future versions, the last three types of containers (",Object(i.b)("strong",{parentName:"p"},"SPLITV"),", ",Object(i.b)("strong",{parentName:"p"},"SPLITH"),", ",Object(i.b)("strong",{parentName:"p"},"SCROLL"),") will be deprecated and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/lsfusion/platform/issues/22"}),"replaced")," with the corresponding split and scroll options in vertical and horizontal containers."),Object(i.b)("p",null,"The default container type\xa0is\xa0vertical container (CONTAINERV)",Object(i.b)("em",{parentName:"p"},".")),Object(i.b)("p",null,"If at some point a\xa0container\xa0has no child components\xa0, or they are invisible, it is automatically hidden. In turn, if a\xa0component\xa0is not a child of any\xa0container, then it will not be shown on the form."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Base components")),Object(i.b)("p",null,"When defining the form design, the developer can use the following base components, which are created automatically based on the form structure:"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Object groups / trees"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Table/Tree"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"GRID"),"): a component consisting of rows and columns in which the rows correspond to object collections of the corresponding\xa0",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/lsFusionForm_structure"}),"group of objects")," and columns correspond to\xa0",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperties"}),"properties"),"\xa0and\xa0",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/lsFusionActions"}),"actions"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"System toolbar"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"TOOLBARSYSTEM"),"): a panel consisting of buttons with which the user can execute various system actions on the rows in the table. Automatically hidden if the\xa0table\xa0becomes invisible."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"User filter"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"USERFILTER"),"): a component with which the user can create and apply their own filters to a\xa0table.")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Filter groups")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Filter group"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"FILTERGROUP"),"): a component with which the user can activate the filters they need in a form's ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"Interactive-view_1573071.html#Interactiveview-filtergroup"}),"filter groups"),".")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Properties / Actions")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Property panel"),"\xa0(",Object(i.b)("strong",{parentName:"li"},"PROPERTY"),"): a component that displays the title and current value of a\xa0property. The caption can be either to the left of the value cell or at the top. Not shown if the\xa0property\xa0is displayed in the\xa0table.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Dimensions and components layout")),Object(i.b)("p",null,"The developer can control how the platform distributes the available container sizes between its internal components, as well as how these components will be located relative to each other."),Object(i.b)("p",null,"First of all, for each component you can specify the ",Object(i.b)("em",{parentName:"p"},"base")," size that this component will receive in any case, regardless of the algorithm for placing its container."),Object(i.b)("p",null,"To determine the final size of the components and their location inside the container, the following algorithm is used:"),Object(i.b)("p",null,"For each container, one of the directions is considered to be\xa0",Object(i.b)("em",{parentName:"p"},"dynamic"),", and the other ",Object(i.b)("em",{parentName:"p"},"static"),". The dynamic direction is determined from the name of the container, for example, for a vertical container, the dynamic direction will be vertical; for a horizontal splitter it will be horizontal. For a columned or scrollable container, as well as a tab panel, the dynamic direction is considered to be the vertical. Further, depending on the direction:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Dynamic: all components are placed one after another, in the order they are added to the container. Also, ",Object(i.b)("em",{parentName:"p"},"extension coefficient")," (",Object(i.b)("strong",{parentName:"p"},"flex"),") can be specified for each component. In this case, the space remaining in the container (that is, minus the basic dimensions of all internal components) is divided between all components in proportion to their extension coefficients.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Static: ",Object(i.b)("em",{parentName:"p"},"alignment")," can be specified for each component (",Object(i.b)("strong",{parentName:"p"},"alignment"),"). Its values can be ",Object(i.b)("em",{parentName:"p"},"At the start")," (",Object(i.b)("strong",{parentName:"p"},"START"),"), ",Object(i.b)("em",{parentName:"p"},"Center")," (",Object(i.b)("strong",{parentName:"p"},"CENTER"),"), ",Object(i.b)("em",{parentName:"p"},"At the end")," (",Object(i.b)("strong",{parentName:"p"},"END"),"), or ",Object(i.b)("em",{parentName:"p"},"Stretch")," (",Object(i.b)("strong",{parentName:"p"},"STRETCH"),"). In the first three cases, the component gets its base size as the final size, and is positioned in accordance with the specified type of alignment (that is, at the beginning, center, or end). If Stretch is used as the type of alignment, the final size of the component will be the size of the top container (but not less than the base size), and it will be located exactly in the center.\xa0"),Object(i.b)("p",{parentName:"li"},"For example, in the case of a vertical upper container, if the component is set to align at the start then it will be located on the maximum left of the container; if it is set to Stretch, the component will occupy all the space from the left to the right border."))),Object(i.b)("p",null,"This component layout algorithm is a special case of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/TR/css-flexbox-1/"}),"CSS Flexible Box Layout")," (and is implemented using it in the web client). For example, the CSS flex-grow property corresponds to the extension coefficient, and flex-basis corresponds to the base size."),Object(i.b)("p",null,"The column container breaks its static (horizontal) direction into ",Object(i.b)("strong",{parentName:"p"},"N")," identical parts (where ",Object(i.b)("strong",{parentName:"p"},"N")," is the number of columns): each part then has its own components, as if this part were a separate vertical container."),Object(i.b)("p",null,"For base components, you can specify the ",Object(i.b)("em",{parentName:"p"},"automatic size")," option (",Object(i.b)("strong",{parentName:"p"},"autoSize"),"): in this case, the base size will change automatically in to enclose exactly the entire contents of this base component (for example, for a table: all its records plus a title)."),Object(i.b)("p",null,"The properties\xa0layout in a table\xa0(or rather, the columns that display their values) is done the same way as if the table were a horizontal container, and the columns of the table were internal components of this container.\xa0"),Object(i.b)("p",null,"Since the current implementation uses the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3schools.com/cssref/pr_tab_table-layout.asp"}),"CSS Table Layout Fixed")," mechanism to place columns inside the table in the Web client, and its capabilities are significantly limited, the extension coefficient for properties displayed in the table can be equal either to 0 or to the base size."),Object(i.b)("p",null,"The caption and the value cell are placed inside the property panel in the same way as if the panel were a container (horizontal if the caption is on the left, vertical if at the top), in which the cell has an extension coefficient of 1, the caption is 0 and the alignment of both is set to \xa0STRETCH\xa0"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Property value cell sizes")),Object(i.b)("p",null,"When displaying properties, you can explicitly specify\xa0dimensions of the entire container (together with the caption, if the property is in a panel) and also the dimensions of the ",Object(i.b)("em",{parentName:"p"},"value cell")," itself. To do this, add the prefix\xa0",Object(i.b)("strong",{parentName:"p"},"value"),"\xa0to the size name,\xa0e.g. ",Object(i.b)("strong",{parentName:"p"},"valueWidth"),"). Also, it is worth noting that these dimensions (those of the value cells, and not the entire container) are also used to determine the column widths if the property is displayed in a table."),Object(i.b)("p",null,"For property value cells, it is also possible to specify the base width not in pixels, but using a\xa0",Object(i.b)("em",{parentName:"p"},"sample value")," (",Object(i.b)("strong",{parentName:"p"},"widthValue"),")\xa0In this case, the platform\xa0takes into account the user's font/mask/locale to calculate and set the width in pixels so that the user can see exactly the specified sample value (no more, no less). It is assumed that the sample value must be either a string or of a class equal to the class of the property value."),Object(i.b)("p",null,"In addition, cell widths can be specified in ",Object(i.b)("em",{parentName:"p"},"characters")," (",Object(i.b)("strong",{parentName:"p"},"charWidth")," ), which is equivalent to giving a string sample value consisting of the given number of zeros."),Object(i.b)("p",null,"In the last two cases (that is, when specifying the width as a sample value or in characters), if the property value class implies the presence of\xa0buttons on the right during\xa0",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionPrimitive_input_INPUT_"}),"input"),"\xa0(for example, ",Object(i.b)("strong",{parentName:"p"},"DATE"),"\xa0class), then the width of this button (21 pixels) is added to the width of the property value cell."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Default dimensions and layout")),Object(i.b)("p",null,"By default, the extension coefficient and alignment for components are determined as follows:"),Object(i.b)("p",null,"The output is the following form:"),Object(i.b)("p",null,Object(i.b)("img",{src:n(471).default})))}p.isMDXComponent=!0},423:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),h=a,u=b["".concat(r,".").concat(h)]||b[h]||m[h]||i;return n?o.a.createElement(u,c(c({ref:t},l),{},{components:n})):o.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},471:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/57738025-7364b4b4c703078e55a694077d5ce2f7.jpg"}}]);