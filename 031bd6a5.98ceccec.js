(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{424:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(n),m=r,O=l["".concat(c,".").concat(m)]||l[m]||u[m]||a;return n?o.a.createElement(O,i(i({ref:t},p),{},{components:n})):o.a.createElement(O,i({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(424)),c={},i={unversionedId:"LSFUS/lsFusionDESIGN_instruction",id:"LSFUS/lsFusionDESIGN_instruction",isDocsHomePage:!1,title:"lsFusionDESIGN_instruction",description:"lsFusionDESIGN instruction",source:"@site/docs\\LSFUS\\lsFusionDESIGN_instruction.md",slug:"/LSFUS/lsFusionDESIGN_instruction",permalink:"/docusaurustest/docs/LSFUS/lsFusionDESIGN_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionDESIGN_instruction.md",version:"current"},s=[],p={toc:s};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusiondesign-instruction"},"lsFusionDESIGN instruction"),Object(a.b)("h1",{id:"design-instruction"},"DESIGN instruction"),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"DESIGN"),"\xa0instruction changes\xa0",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionForm_design"}),"form design"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Syntax")),Object(a.b)("p",null,"The syntax consists of nested blocks of ",Object(a.b)("em",{parentName:"p"},"design instructions.")," The outer block, beginning with the keyword ",Object(a.b)("strong",{parentName:"p"},"DESIGN"),", defines a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionForms"}),"form")," whose design will change:\xa0"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"DESIGN formName [caption] [CUSTOM] {\n    designStatement1\n    ...\n    designStatementN\n}\n")),Object(a.b)("p",null,"Each\xa0 ",Object(a.b)("em",{parentName:"p"},"designStatement\xa0")," describes one design instruction. Design instructions are of the following types:\xa0"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"NEW name [insertPos] [{...}];\nMOVE selector [insertPos] [{...}];  \nselector [{...}];   \nREMOVE selector;\npropertyName = value;\n")),Object(a.b)("p",null,"The first three instructions \u2013 ",Object(a.b)("em",{parentName:"p"},"create"),"\xa0(",Object(a.b)("strong",{parentName:"p"},"NEW"),"), ",Object(a.b)("em",{parentName:"p"},"move"),"\xa0(",Object(a.b)("strong",{parentName:"p"},"MOVE"),"), and ",Object(a.b)("em",{parentName:"p"},"modify\xa0"),"\u2013 may in turn contain nested blocks of design instructions. The design instructions ",Object(a.b)("em",{parentName:"p"},"remove")," (",Object(a.b)("strong",{parentName:"p"},"REMOVE"),") and ",Object(a.b)("em",{parentName:"p"},"change property value"),"\xa0(",Object(a.b)("strong",{parentName:"p"},"="),") are simple single instructions. Each navigator instruction must end with a semicolon if it does not contain a nested instruction block."),Object(a.b)("p",null,"Each ",Object(a.b)("em",{parentName:"p"},"selector")," can be one of the following types:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"componentName\nPROPERTY(formPropertyName)\nFILTERGROUP(filterGroupName)\nPARENT(selector)\nGROUP([propertyGroupSelector][,groupObjectTreeSelector])\nnoGroupObjectTreeContainerType\ngroupObjectTreeContainerType(groupObjectTreeSelector)\n")),Object(a.b)("p",null,"In turn, ",Object(a.b)("em",{parentName:"p"},"groupObjectTreeSelector")," can be one of two types:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"groupObjectSelector\nTREE treeSelector\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description")),Object(a.b)("p",null,"Using the ",Object(a.b)("strong",{parentName:"p"},"DESIGN")," instruction the developer can manage the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionForm_design"}),"design")," ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionInteractive_view"}),"of the")," interactive form view\xa0by creating, moving, and deleting containers and components, as well as changing their certain properties. By default, a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"Form-design_29884443.html#Formdesign-defaultDesign"}),"default design"),"\xa0 is created for each form, along with appropriate containers. If necessary, you can recreate the design without the default containers and previously configured settings. This is done using the keyword ",Object(a.b)("strong",{parentName:"p"},"CUSTOM"),".\xa0\xa0"),Object(a.b)("p",null,"Each block of design instructions enclosed in braces alows to modify a particular component and its descendants. Let's call this component the\xa0",Object(a.b)("em",{parentName:"p"},"current component")," or the\xa0",Object(a.b)("em",{parentName:"p"},"current container")," if we know that the component should be a container in our case. In the external block following the \xa0",Object(a.b)("strong",{parentName:"p"},"DESIGN\xa0"),"keyword, the ",Object(a.b)("strong",{parentName:"p"},"main")," container is the current component. There are the following design instructions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("em",{parentName:"li"},"create instruction")," (",Object(a.b)("strong",{parentName:"li"},"NEW"),") allows to create a new container, making it a descendant of the current one. The newly-created container will be the current component in the design instructions block contained in this instruction."),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("em",{parentName:"li"},"move instruction")," (",Object(a.b)("strong",{parentName:"li"},"MOVE"),")\xa0 allows to make an existing component a direct descendant of the current container. This component is first removed from the previous parent container. The component being moved becomes the current component in the design instructions block contained in this instruction.\xa0"),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("em",{parentName:"li"},"modify"),"\xa0instruction allows to modify the specified component which must be a descendant (not necessarily a child) of the current container. The specified element will be the current component in the design instructions block contained in this instruction."),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("em",{parentName:"li"},"remove instruction"),"(",Object(a.b)("strong",{parentName:"li"},"REMOVE"),") allows to remove a specified component from the component hierarchy. The component to be removed has to be a descendant of the current container.\xa0"),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("em",{parentName:"li"},"change property value instruction"),"(",Object(a.b)("strong",{parentName:"li"},"="),") allows to change the value of the specified property of the current component.")),Object(a.b)("p",null,"The component hierarchy described in this instruction can have an arbitrary number of nesting levels and describe any number of components and their properties at each level."),Object(a.b)("p",null,"To access design components, you can use their names\xa0or address property components on the form (",Object(a.b)("strong",{parentName:"p"},"PROPERTY"),"), the parent component (",Object(a.b)("strong",{parentName:"p"},"PARENT"),"), property group components (",Object(a.b)("strong",{parentName:"p"},"GROUP"),"), and other base components/default design components."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Common parameters"))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"formName")),Object(a.b)("p",null,"The name of the form being changed. ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-cid"}),"Composite ID"),".*\xa0*"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"caption")),Object(a.b)("p",null,"The new form caption in the interactive view mode. ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"Literals_35521071.html#Literals-strliteral"}),"String literal"),". The form caption doesn't change in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionNavigator"}),"navigator"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"name")),Object(a.b)("p",null,"The name of the container being created. ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id"}),"Simple ID"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"insertPos")),Object(a.b)("p",null,"Component insertion or moving position. Specified with one of the following options:*  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"})),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"BEFORE"),"\xa0selector"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"AFTER"),"\xa0selector\xa0"),Object(a.b)("p",null,"Specifies that the component should be added or moved before (",Object(a.b)("strong",{parentName:"p"},"BEFORE"),") or after (",Object(a.b)("strong",{parentName:"p"},"AFTER"),") the specified components. The specified component must be a child of the current container.\xa0"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"FIRST")),Object(a.b)("p",null,"A keyword specifying that the component should be added or moved to the first position in the list of the current container's children.\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"propertyName")),Object(a.b)("p",null,"The name of the component property. The list of existing properties is provided in the tables\xa0below."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"value")),Object(a.b)("p",null,"The value assigned to the corresponding container property. Acceptable value types are provided in the tables below."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Component properties"))),Object(a.b)("p",null,"The output is the following form:"),Object(a.b)("img",{src:"attachments/4718609/43648025.png",height:"250"}))}b.isMDXComponent=!0}}]);