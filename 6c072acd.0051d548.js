(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{218:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(424)),i={title:"Report design"},s={unversionedId:"LSFUS/Report_design",id:"LSFUS/Report_design",isDocsHomePage:!1,title:"Report design",description:"For each report you need to specify a special file (template) which will be used to build the result document. The name of the template for a specific\xa0report is &lt;name\xa0of form&gt;\\_&lt;name of the first\xa0group of objects&gt;. Anempty\xa0object group is considered to have no name, so if the first object group is empty, the name of the template is simply\xa0equal to the name of the form (without the \\ postfix).",source:"@site/docs\\LSFUS\\Report_design.md",slug:"/LSFUS/Report_design",permalink:"/docusaurustest/docs/LSFUS/Report_design",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/Report_design.md",version:"current"},c=[],p={toc:c};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"For each report you need to specify a special file (",Object(a.b)("em",{parentName:"p"},"template)")," which will be used to build the result document. The name of the template for a specific\xa0report is ","<","name\xa0",Object(a.b)("em",{parentName:"p"},"of form",">","_"),"<","name of the first\xa0",Object(a.b)("em",{parentName:"p"},"group of objects"),">",". An",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"Static-view_29884533.html#Staticview-empty"}),"empty"),"\xa0object group is considered to have no name, so if the first object group is empty, the name of the template is simply\xa0equal to the name of the form (without the ","_"," postfix)."),Object(a.b)("p",null,"When developing a template, the developer can use the object group properties that are included in the corresponding report or ancestor reports as fields. The names and types of fields will be equal to the names and types of properties on the form.\xa0If one report is a child of another report, then it should be inserted into the template as a subreport. In this case, the properties and filters in it will use the current values of the objects of the upper report as the values of their upper objects."),Object(a.b)("p",null,"If at least one of the templates cannot be found when generating reports, an automatic template generation mechanism\xa0starts based on the current hierarchy: it creates a separate template for each report and adds all the necessary properties and subreports to it. At the same time, if several object groups are included in one report\xa0then the lowest group in the list will be used for detail, and a separate report group will be created with its own block for each upper group in the template, to which all the properties from this group will be added."),Object(a.b)("p",null,"The LGPL technology\xa0",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://community.jaspersoft.com/project/jasperreports-library"}),"JasperReports")," is used as a specific implementation of the document generation mechanism. Accordingly, templates are jrxml format files, which can be edited using the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://community.jaspersoft.com/project/jaspersoft-studio"}),"JasperSoft Studio")," application. At the time of generating the report, template files with the name ","<","template name",">",".jrxml are searched for in the server's current\xa0",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/8/docs/technotes/tools/windows/classpath.html"}),"classpath")," (including all subdirectories). If no template file is found, the platform will generate an automatic design. When starting the server from the IDE and generating a report in\xa0",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"57737722.html#Inaprintview(PRINT)-interactive"}),"preview mode"),", you can use the corresponding buttons\xa0to save this design to the launch directory (and the source directory), and then edit it in line with the requirements of the task (in this case, the platform will automatically sync files in the launch directory and source directory)."))}l.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(i,".").concat(m)]||u[m]||h[m]||a;return r?o.a.createElement(f,s(s({ref:t},p),{},{components:r})):o.a.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);