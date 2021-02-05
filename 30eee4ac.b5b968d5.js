(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(419)),c={title:"Open form"},i={unversionedId:"Open_form",id:"Open_form",isDocsHomePage:!1,title:"Open form",description:"The open form operator creates an action that opens the specified form.",source:"@site/docs\\Open_form.md",slug:"/Open_form",permalink:"/docusaurustest/docs/Open_form",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Open_form.md",version:"current",sidebar:"docs",previous:{title:"Structured view",permalink:"/docusaurustest/docs/Structured_view"},next:{title:"In an interactive view (SHOW, DIALOG)",permalink:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG"}},s=[{value:"Form selection",id:"form-selection",children:[]},{value:"View type",id:"view-type",children:[]},{value:"Passing objects",id:"passing-objects",children:[]}],l={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"open form")," operator creates an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that opens the specified ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Forms"}),"form"),"."),Object(o.b)("h3",{id:"form-selection"},"Form selection"),Object(o.b)("p",null,"In addition to explicitly specifying the form to be opened, the platform also allows to open the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Interactive-view_1573071.html#Interactiveview-edtClass"}),"list/edit")," form for objects of the specified class.\xa0In this case, you only need to specify the corresponding option and specify the custom class whose list/edit form needs to be opened instead of a form."),Object(o.b)("h3",{id:"view-type"},"View type"),Object(o.b)("p",null,"When a form is opened, the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Form_views"}),"view"),"\xa0type which will be used to display the form needs to be specified:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/In_an_interactive_view_SHOW_DIALOG"}),"In an interactive view (SHOW, DIALOG)")),Object(o.b)("li",{parentName:"ul"},"In a static view:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/In_a_print_view_PRINT"}),"In a print view (PRINT)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/In_a_structured_view_EXPORT_IMPORT"}),"In a structured view (EXPORT, IMPORT)"))))),Object(o.b)("h3",{id:"passing-objects"},"Passing objects"),Object(o.b)("p",null,"When you open a form, you can pass a value for each of its objects from the calling context, which will be used as follows depending on the view:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In interactive view: the passed value is set as the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"Form-structure_1573069.html#Formstructure-currentObject"}),"current")," object."),Object(o.b)("li",{parentName:"ul"},"In a static view: an additional ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"Form-structure_1573069.html#Formstructure-filters"}),"filter")," will be set so that the object must be ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/Comparison_operators_=_..."}),"equal")," to the passed value.")),Object(o.b)("p",null,"By default, all passed values of objects must be defined (not ",Object(o.b)("strong",{parentName:"p"},"NULL"),");**\xa0",Object(o.b)("strong",{parentName:"p"},"otherwise the action will not be executed and will simply transfer control to the next action. However, in the interactive view, the developer can change this behavior using the corresponding option (that is, allowing\xa0"),"NULL** values). In this case (as in the case when no object is passed at all), the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Interactive-view_1573071.html#Interactiveview-defaultobject"}),"default object")," will be selected as the current object.\xa0"),Object(o.b)("p",null,"It is worth noting that passing objects in the interactive view is basically the same as the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Search_SEEK"}),"object seek")," operation after the form is opened. In this case, the passed objects are the seek objects, and the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"5832724.html#Search(SEEK)-direction"}),"seek direction")," is determined by the default object type (",Object(o.b)("strong",{parentName:"p"},"PREV")," here is equivalent to ",Object(o.b)("strong",{parentName:"p"},"FIRST"),")."))}p.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(f,i(i({ref:t},l),{},{components:r})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);