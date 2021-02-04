(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{376:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(419)),i={title:"Filters and sortings block"},c={unversionedId:"Filters_and_sortings_block",id:"Filters_and_sortings_block",isDocsHomePage:!1,title:"Filters and sortings block",description:"The filter and order block of the\xa0FORM instruction\xa0\u2013 add filters and orderings to the form structure; add\xa0filter groups\xa0to the interactive form view.",source:"@site/docs\\Filters_and_sortings_block.md",slug:"/Filters_and_sortings_block",permalink:"/docusaurustest/docs/Filters_and_sortings_block",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Filters_and_sortings_block.md",version:"current",sidebar:"docs",previous:{title:"Properties and actions block",permalink:"/docusaurustest/docs/Properties_and_actions_block"},next:{title:"Event block",permalink:"/docusaurustest/docs/Event_block"}},s=[{value:"Filter group block",id:"filter-group-block",children:[]},{value:"Order block",id:"order-block",children:[]}],l={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The filter and order block of the\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/FORM_instruction"}),"FORM instruction"),"\xa0\u2013 add ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Form-structure_1573069.html#Formstructure-filters"}),"filters")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Form-structure_1573069.html#Formstructure-sort"}),"orderings")," to the form structure; add\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Interactive-view_1573071.html#Interactiveview-filtergroup"}),"filter groups"),"\xa0to the interactive form view."),Object(o.b)("p",null,"Fixed filter block"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"FILTERS expression1, ..., expressionN\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"The fixed filters block adds filters that will be automatically applied when any form data is read. One block can list an arbitrary number of filters separated by a comma\xa0."),Object(o.b)("p",null,"Each filter is defined with an \xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expression")," that defines the filtering condition. In all expressions and context-dependent action operators you can use the names of the objects already declared on the form as parameters."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expression1, ..., expressionN")),Object(o.b)("p",null,"List of filter expressions."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"filter-group-block"},"Filter group block"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"[EXTEND] FILTERGROUP groupName\n    FILTER caption1 expression1 [keystroke1] [DEFAULT]\n    ...\n    FILTER captionN expressionN [keystrokeN] [DEFAULT]\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"The filter group block adds a set of filters to the form. A special UI component is then created for them, making it possible to apply one filter at a time. If the keyword ",Object(o.b)("strong",{parentName:"p"},"EXTEND")," is specified\xa0, the component is not created, but used for extension. In one block, you can define a single group of filters consisting of an arbitrary number of filters that will be shown to the user in the order of listing.\xa0"),Object(o.b)("p",null,"Each filter is defined with an\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expression")," that defines the filtering condition. In all expressions and context-dependent action operators you can use the names of the objects already declared on the form as parameters."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"groupName")),Object(o.b)("p",null,"Internal name of a filter group ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id"}),"Simple ID"),". If the ",Object(o.b)("strong",{parentName:"p"},"EXTEND")," keyword is specified, the platform will search the form for the created filter group with the specified name \u2014 otherwise a new filter group with the specified name will be created."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"caption1, ..., captionN")),Object(o.b)("p",null,"Captions that will be shown in the user interface for the corresponding filter being added. Each caption is defined with a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-strliteral"}),"string literal"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expression1, ..., expressionN")),Object(o.b)("p",null,"Expressions describing filters."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"keystroke1, ..., keystrokeN")),Object(o.b)("p",null,"Keyboard shortcuts that, when pressed by the\xa0user, will select a corresponding filter in the group. Each keyboard shortcut is defined with a string literal and the definition method is similar to that for a parameter in the Java class method\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://docs.oracle.com/javase/7/docs/api/javax/swing/KeyStroke.html#getKeyStroke(java.lang.String)"}),"Keystroke.getKeystroke(String)"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"DEFAULT")),Object(o.b)("p",null,"A keyword specifying that the filter being added must be selected automatically when the form is added. Can be specified for one filter in the group only."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"order-block"},"Order block"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"ORDER formPropertyName1 [DESC] \n      ...\n      formPropertyNameN [DESC]\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"An order block adds orderings to the form that will be automatically applied when any data are read on it. One block can list an arbitrary number of properties on the\xa0form separated by a comma in any sequence. These properties must be added to the form in advance."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"formPropertyName1, ..., formPropertyNameN")),Object(o.b)("p",null,"Names of properties or form actions specifying the order."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"DESC")),Object(o.b)("p",null,"Keyword. Specifies reverse order. By default, ascending order is used."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null))}p.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);