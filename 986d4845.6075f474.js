(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{281:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var o=r(3),n=r(7),a=(r(0),r(419)),i={title:"How-to: Overriding values"},c={unversionedId:"How-to_Overriding_values",id:"How-to_Overriding_values",isDocsHomePage:!1,title:"How-to: Overriding values",description:"Often there are tasks when it is necessary to give the user opportunity to enter the value of some attribute for some general object and then override it for some specific object.",source:"@site/docs\\How-to_Overriding_values.md",slug:"/How-to_Overriding_values",permalink:"/docusaurustest/docs/How-to_Overriding_values",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_Overriding_values.md",version:"current",sidebar:"docs",previous:{title:"How-to: Using objects as templates",permalink:"/docusaurustest/docs/How-to_Using_objects_as_templates"},next:{title:"How-to: Binding properties",permalink:"/docusaurustest/docs/How-to_Binding_properties"}},s=[],l={toc:s};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Often there are tasks when it is necessary to give the user opportunity to enter the value of some attribute for some general object and then override it for some specific object."),Object(a.b)("p",null,"Let's take a look when you need to define a trade mark-up for a book. At the same time, we have the logic of categories defined. These categories form a tree by specifying a parent for each category. The user should be able to set a mark-up for any product and category at any level."),Object(a.b)("p",null,"Let's define the logic of categories and the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_properties_DATA_"}),"data property")," of this category's markup."),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/RECURSION_operator"}),"RECURSION")," operator is used to calculate the ",Object(a.b)("em",{parentName:"p"},"level")," property for given two categories. This property will be equal to two to the power of N, where N is the distance between these categories."),Object(a.b)("p",null,"Let's create a property that will determine the corresponding parent by category and level."),Object(a.b)("p",null,'Let\'s find the minimal level of a category for which the a mark-up is defined. It will also be the level of "closest upper" category with a set mark-up.'),Object(a.b)("p",null,"We use this level to determine the category and its mark-up."),Object(a.b)("p",null,"Thus, the ",Object(a.b)("strong",{parentName:"p"},"overMarkup")," property will contain the required markup value for this category with its hierarchy taken into account."),Object(a.b)("p",null,"Let's now define the logic for books. Each of them is associated with a certain category that may be located at any level of the category hierarchy."),Object(a.b)("p",null,"Let's define the data property of a product markup. After that, let's construct an overridden property that will return a product markup if it's not ",Object(a.b)("strong",{parentName:"p"},"NULL")," and a previously created property with a category markup."),Object(a.b)("p",null,"Finally, let's design a form that will allow the user to enter the markup for categories and products at the same time. Let's output both the data and the overridden markup for the category and the product. Note that changes in overridden properties on the form will be displayed immediately, but saved only when the corresponding button is clicked."),Object(a.b)("p",null,"As a result, the form with the filled data will look like this:"),Object(a.b)("img",{src:"attachments/46367603/46367612.png",height:"250"}))}u.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return r?n.a.createElement(b,c(c({ref:t},l),{},{components:r})):n.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);