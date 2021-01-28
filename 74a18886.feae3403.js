(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{246:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(424)),s={},c={unversionedId:"LSFUS/lsFusionOpen_form",id:"LSFUS/lsFusionOpen_form",isDocsHomePage:!1,title:"lsFusionOpen_form",description:"lsFusionOpen form",source:"@site/docs\\LSFUS\\lsFusionOpen_form.md",slug:"/LSFUS/lsFusionOpen_form",permalink:"/docusaurustest/docs/LSFUS/lsFusionOpen_form",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionOpen_form.md",version:"current"},i=[],l={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionopen-form"},"lsFusionOpen form"),Object(o.b)("h1",{id:"open-form"},"Open form"),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"open form")," operator creates an ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionActions"}),"action")," that opens the specified ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionForms"}),"form"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Form selection")),Object(o.b)("p",null,"In addition to explicitly specifying the form to be opened, the platform also allows to open the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Interactive-view_1573071.html#Interactiveview-edtClass"}),"list/edit")," form for objects of the specified class.\xa0In this case, you only need to specify the corresponding option and specify the custom class whose list/edit form needs to be opened instead of a form."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"View type")),Object(o.b)("p",null,"When a form is opened, the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionForm_views"}),"view"),"\xa0type which will be used to display the form needs to be specified:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/lsFusionIn_an_interactive_view_SHOW_DIALOG_"}),"In an interactive view (SHOW, DIALOG)")),Object(o.b)("li",{parentName:"ul"},"In a static view:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/lsFusionIn_a_print_view_PRINT_"}),"In a print view (PRINT)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/lsFusionIn_a_structured_view_EXPORT_IMPORT_"}),"In a structured view (EXPORT, IMPORT)"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Passing objects")),Object(o.b)("p",null,"When you open a form, you can pass a value for each of its objects from the calling context, which will be used as follows depending on the view:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In interactive view: the passed value is set as the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"Form-structure_1573069.html#Formstructure-currentObject"}),"current")," object."),Object(o.b)("li",{parentName:"ul"},"In a static view: an additional ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"Form-structure_1573069.html#Formstructure-filters"}),"filter")," will be set so that the object must be ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/lsFusionComparison_operators_=_..._"}),"equal")," to the passed value.")),Object(o.b)("p",null,"By default, all passed values of objects must be defined (not ",Object(o.b)("strong",{parentName:"p"},"NULL"),");**\xa0",Object(o.b)("strong",{parentName:"p"},"otherwise the action will not be executed and will simply transfer control to the next action. However, in the interactive view, the developer can change this behavior using the corresponding option (that is, allowing\xa0"),"NULL** values). In this case (as in the case when no object is passed at all), the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Interactive-view_1573071.html#Interactiveview-defaultobject"}),"default object")," will be selected as the current object.\xa0"),Object(o.b)("p",null,"It is worth noting that passing objects in the interactive view is basically the same as the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionSearch_SEEK_"}),"object seek")," operation after the form is opened. In this case, the passed objects are the seek objects, and the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"5832724.html#Search(SEEK)-direction"}),"seek direction")," is determined by the default object type (",Object(o.b)("strong",{parentName:"p"},"PREV")," here is equivalent to ",Object(o.b)("strong",{parentName:"p"},"FIRST"),")."))}u.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||b[f]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);