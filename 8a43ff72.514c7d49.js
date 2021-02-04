(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{263:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),c=(n(0),n(419)),o={title:"GROUP instruction"},p={unversionedId:"GROUP_instruction",id:"GROUP_instruction",isDocsHomePage:!1,title:"GROUP instruction",description:"The\xa0GROUP\xa0instruction creates a new property group.",source:"@site/docs\\GROUP_instruction.md",slug:"/GROUP_instruction",permalink:"/docusaurustest/docs/GROUP_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/GROUP_instruction.md",version:"current",sidebar:"docs",previous:{title:"Action options",permalink:"/docusaurustest/docs/Action_options"},next:{title:"ON instruction",permalink:"/docusaurustest/docs/ON_instruction"}},i=[],u={toc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The\xa0",Object(c.b)("strong",{parentName:"p"},"GROUP"),"\xa0instruction creates a new ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Groups_of_properties_and_actions"}),"property group"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Syntax")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"GROUP name [caption] [EXTID extID] [: parentName];\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Description")),Object(c.b)("p",null,"The \xa0",Object(c.b)("strong",{parentName:"p"},"GROUP\xa0"),"instruction declares a new property group and adds it to the current\xa0",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Modules"}),"module"),". \xa0"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"name\xa0")),Object(c.b)("p",null,"Group name.\xa0",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id"}),"Simple ID"),".\xa0The name must be unique within the current\xa0",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"Naming_35521066.html#Naming-namespace"}),"namespace"),"."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"caption")),Object(c.b)("p",null,"Group caption.\xa0",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"Literals_35521071.html#Literals-strliteral"}),"String literal"),". If the caption is not defined, the name of the group will be its caption. \xa0"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"EXTID extID")),Object(c.b)("p",null,"Specifying the name to be used\xa0to\xa0",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"Structured-view_29884537.html#Structuredview-extid"}),"export/import"),"\xa0this property group. Used only\xa0in\xa0the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Structured_view"}),"structured"),"\xa0view."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"extId")),Object(c.b)("p",null,"String\xa0literal."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"parentName")),Object(c.b)("p",null,"Name of the parent group. ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-cid"}),"\u0421omposite ID"),".\xa0If the name of the parent group is not defined, the ",Object(c.b)("strong",{parentName:"p"},"System.private")," group becomes the parent. \xa0"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Examples")),Object(c.b)("p",null,"**",Object(c.b)("br",{parentName:"p"}),"\n","**"))}s.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,O=b["".concat(o,".").concat(m)]||b[m]||l[m]||c;return n?a.a.createElement(O,p(p({ref:t},u),{},{components:n})):a.a.createElement(O,p({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var u=2;u<c;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);