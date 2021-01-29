(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{244:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),a=(r(0),r(424));const o={},c={unversionedId:"LSFUS/Static_view",id:"LSFUS/Static_view",isDocsHomePage:!1,title:"Static_view",description:"lsFusionStatic view",source:"@site/docs\\LSFUS\\Static_view.md",slug:"/LSFUS/Static_view",permalink:"/docusaurustest/docs/LSFUS/Static_view",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/Static_view.md",version:"current"},i=[],p={toc:i};function b({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusionstatic-view"},"lsFusionStatic view"),Object(a.b)("h1",{id:"static-view"},"Static view"),Object(a.b)("p",null,"In ",Object(a.b)("em",{parentName:"p"},"static")," view, all form data is read at the time the form is ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Open_form"}),"opened"),", after which the obtained data is converted:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"either to ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/Print_view"}),"print"),"\xa0view - image or excel.\xa0Print view is also often referred to as\xa0a ",Object(a.b)("em",{parentName:"li"},"report")),Object(a.b)("li",{parentName:"ul"},"or to ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/Structured_view"}),"structured"),"\xa0view - one of the corresponding data formats (e.g.\xa0",Object(a.b)("strong",{parentName:"li"},"XML"),",\xa0",Object(a.b)("strong",{parentName:"li"},"JSON"),",\xa0",Object(a.b)("strong",{parentName:"li"},"CSV"),",\xa0",Object(a.b)("strong",{parentName:"li"},"DBF"),")")),Object(a.b)("p",null,"As a rule, structured view is used to load data into other information systems, while print view is used to view data by a user and print to a printer."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Empty object group")),Object(a.b)("p",null,"In static view, any form has a predefined\xa0",Object(a.b)("em",{parentName:"p"},"empty")," object\xa0group, which is considered to be the first object group on the form, does not contain any objects and is considered to be the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"Form-structure_1573069.html#Formstructure-drawgroup"}),"display group")," for properties/filters without parameters. Accordingly, in this display group there is always a maximum of one empty object collection (exactly one, if there are no filters without parameters)."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Object group hierarchy")),Object(a.b)("p",null,"To display information in static view\xa0, the form's ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Form_structure"}),"object groups")," must be organized in a ",Object(a.b)("em",{parentName:"p"},"hierarchy"),' in which data for object groups will be a kind of "nested" in each other. For example, if we have object groups ',Object(a.b)("strong",{parentName:"p"},"A")," and\xa0",Object(a.b)("strong",{parentName:"p"},"B,\xa0")," and ",Object(a.b)("strong",{parentName:"p"},"A\xa0"),"is\xa0the ",Object(a.b)("em",{parentName:"p"},"parent"),"\xa0of",Object(a.b)("strong",{parentName:"p"},"B"),", then in static view all properties of ",Object(a.b)("strong",{parentName:"p"},"A")," will be displayed first for the first object collection from ",Object(a.b)("strong",{parentName:"p"},"A"),", then all the properties of ",Object(a.b)("strong",{parentName:"p"},"B")," and of the pair (",Object(a.b)("strong",{parentName:"p"},"A"),", ",Object(a.b)("strong",{parentName:"p"},"B"),")\xa0for all object collections from ",Object(a.b)("strong",{parentName:"p"},"B"),", then similar information will be displayed for the second object collection from ",Object(a.b)("strong",{parentName:"p"},"A")," and all sets of objects from ",Object(a.b)("strong",{parentName:"p"},"B")," and so on."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Building "),"object group",Object(a.b)("strong",{parentName:"p"},"\xa0hierarchy")),Object(a.b)("p",null,"The platform builds object group hierarchy based on the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Form_structure"}),"form structure"),"\xa0as follows:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"First, relations between object groups are built according to the following rules:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"object group\xa0",Object(a.b)("strong",{parentName:"li"},"A"),"\xa0",Object(a.b)("em",{parentName:"li"},"depends"),"\xa0on object group ",Object(a.b)("strong",{parentName:"li"},"B")," if\xa0",Object(a.b)("strong",{parentName:"li"},"A"),"\xa0appears in the list of object groups later than\xa0",Object(a.b)("strong",{parentName:"li"},"B")," and the form has a property or filter that takes objects from\xa0",Object(a.b)("strong",{parentName:"li"},"A"),"\xa0and\xa0",Object(a.b)("strong",{parentName:"li"},"B"),"\xa0as input arguments (",Object(a.b)("strong",{parentName:"li"},"B")," should not be a ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"Form-structure_1573069.html#Formstructure-groupcolumns"}),"group-in-column")," of this property)."),Object(a.b)("li",{parentName:"ul"},"any object group\xa0",Object(a.b)("strong",{parentName:"li"},"A"),"\xa0depends on the empty object group"),Object(a.b)("li",{parentName:"ul"},"group\xa0",Object(a.b)("strong",{parentName:"li"},"A"),"\xa0",Object(a.b)("em",{parentName:"li"},"indirectly\xa0depends"),"\xa0on group\xa0",Object(a.b)("strong",{parentName:"li"},"B")," if, again,\xa0",Object(a.b)("strong",{parentName:"li"},"A"),"\xa0appears later\xa0than ",Object(a.b)("strong",{parentName:"li"},"B")," and there is an object group\xa0",Object(a.b)("strong",{parentName:"li"},"C")," which depends on\xa0both ",Object(a.b)("strong",{parentName:"li"},"A"),"\xa0and ",Object(a.b)("strong",{parentName:"li"},"B")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"After the relations are built, the hierarchy is constructed in such a way that the parent of object group\xa0",Object(a.b)("strong",{parentName:"p"},"A"),"\xa0is the group\xa0",Object(a.b)("strong",{parentName:"p"},"B")," that is latest in the object group list on which\xa0",Object(a.b)("strong",{parentName:"p"},"A"),"\xa0depends (directly or indirectly)."))),Object(a.b)("p",null,"As follows from the algorithm, the empty object group is always the only root group of the constructed hierarchy"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"An example of constructing **"),"object group*",Object(a.b)("strong",{parentName:"p"},"*\xa0hierarchy")),Object(a.b)("p",null,"The hierarchy of groups of objects for this form will be constructed as follows:"),Object(a.b)("img",{src:"download/temp/svgout1901998409715343268.png",width:"653",height:"421"}))}b.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return j}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),l=s(r),m=n,j=l["".concat(c,".").concat(m)]||l[m]||u[m]||o;return r?a.a.createElement(j,i(i({ref:t},b),{},{components:r})):a.a.createElement(j,i({ref:t},b))}));function j(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);