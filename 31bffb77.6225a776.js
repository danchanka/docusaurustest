(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(424)),p={},c={unversionedId:"LSFUS/READ_operator",id:"LSFUS/READ_operator",isDocsHomePage:!1,title:"READ_operator",description:"lsFusionREAD operator",source:"@site/docs\\LSFUS\\READ_operator.md",slug:"/LSFUS/READ_operator",permalink:"/docusaurustest/docs/LSFUS/READ_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/READ_operator.md",version:"current"},s=[],i={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionread-operator"},"lsFusionREAD operator"),Object(o.b)("h1",{id:"read-operator"},"READ operator"),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"READ"),"\xa0operator creates an\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Actions"}),"action")," that ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Read_file_READ_"}),"reads a file"),"\xa0to a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Properties"}),"property")," from an external resource.**\xa0**"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"READ [CLIENT [DIALOG]] urlExpr [TO propertyId]\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"READ"),"\xa0operator creates an action that reads a file from an external resource at the URL specified, and then writes the result file to the specified property."),Object(o.b)("p",null,"The following URL types are supported:\xa0"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"[file://]path_to_file\n[s]ftp://username:password[;charset]@host:port[/path_to_file][?passivemode=true|false]\n")),Object(o.b)("p",null,"If the value of the property to which the file is written belongs to the ",Object(o.b)("strong",{parentName:"p"},"FILE")," class, the file extension from the URL is also written to its value along with the file."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CLIENT")),Object(o.b)("p",null,"Keyword. If specified, the action will be executed on the client side. By default, the action is executed on the server."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"DIALOG")),Object(o.b)("p",null,"Keyword. If specified, before writing the file a dialog will be shown in which the user can change the specified URL",Object(o.b)("em",{parentName:"p"},"."),"\xa0This can be used only when writing to the disk (the URL type is file).*\xa0* By default, the dialog is not shown.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"urlExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Expression"}),"expression")," whose value is the URL from which to read. The value of the expression must be a string type."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId")),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"ID of the property")," to which read data\xa0should be written.\xa0This property\xa0must not have parameters and its value must be of a file class (",Object(o.b)("strong",{parentName:"p"},"FILE"),",\xa0",Object(o.b)("strong",{parentName:"p"},"RAWFILE"),",\xa0",Object(o.b)("strong",{parentName:"p"},"JSONFILE"),",\xa0etc.).\xa0If this property is not specified, the\xa0",Object(o.b)("strong",{parentName:"p"},"System.exportFile")," property is used by default."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null))}l.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=l(r),f=n,d=b["".concat(p,".").concat(f)]||b[f]||u[f]||o;return r?a.a.createElement(d,c(c({ref:t},i),{},{components:r})):a.a.createElement(d,c({ref:t},i))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var i=2;i<o;i++)p[i]=r[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);