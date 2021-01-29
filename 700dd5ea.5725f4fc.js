(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{224:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=(r(0),r(424));const i={},a={unversionedId:"LSFUS/Print_view",id:"LSFUS/Print_view",isDocsHomePage:!1,title:"Print_view",description:"lsFusionPrint view",source:"@site/docs\\LSFUS\\Print_view.md",slug:"/LSFUS/Print_view",permalink:"/docusaurustest/docs/LSFUS/Print_view",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/Print_view.md",version:"current"},c=[],s={toc:c};function p({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionprint-view"},"lsFusionPrint view"),Object(o.b)("h1",{id:"print-view"},"Print view"),Object(o.b)("p",null,"Print view of the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Forms"}),"form"),"\xa0consists of a set of templates (",Object(o.b)("em",{parentName:"p"},"reports"),"). When data is substituted in these templates, a ",Object(o.b)("em",{parentName:"p"},"document")," is formed in graphic (with pixel positioning) or pseudographic (with cell positioning) format. This document is displayed to the user using a\xa0special graphic component, inside which the user can navigate through pages, zoom in/out within pages and print the contents of the component or export it to various formats (for example, PDF or Excel). If necessary, it is possible to skip the display of the component to the user and send the document for printing or save it into a selected file in the specified format."),Object(o.b)("p",null,"For each report, a set of the form ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Form-structure_1573069.html#Formstructure-objects"}),"object groups")," that it will display is determined."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Report hierarchy")),Object(o.b)("p",null,"Similar to an object group, each report has a ",Object(o.b)("em",{parentName:"p"},"parent")," report, so all reports form a hierarchy. The report hierarchy should:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"include ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/Static_view"}),"the hierarchy of object groups"),", i.e. if a group of objects of one report is a child of a group of objects of the other report,\xa0then the first report must match the second one or be its child as well"),Object(o.b)("li",{parentName:"ul"},"within one report, each group of objects must have exactly one child.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Building report hierarchy")),Object(o.b)("p",null,'Based on the report hierarchy restrictions, only "chains" of object groups can be included in one report (i.e., G1, G2, G3, ... Gn,\xa0where G2 is the only linear child object of G1, G3 is the only child of G2, etc.). Thus, the decision on how to break object groups into reports comes down to whether to merge an object group with its only child (if there is one)\xa0or not. By default, such a merge is performed, however, if necessary, the developer can disable it by specifying the corresponding option (',Object(o.b)("strong",{parentName:"p"},"SUBREPORT"),") for a child object group."),Object(o.b)("p",null,"Using this option comes down to whether to display data for a parent object group when the child object group has no data."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Report hierarchy example")),Object(o.b)("p",null,"The form is similar to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Static-view_29884533.html#Staticview-hierarchysample"}),"example of building an object group hierarchy"),":"))}p.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),b=n,f=l["".concat(a,".").concat(b)]||l[b]||h[b]||i;return r?o.a.createElement(f,c(c({ref:t},p),{},{components:r})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);