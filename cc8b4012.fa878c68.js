(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{346:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(419)),c={title:"CONSTRAINT instruction"},s={unversionedId:"CONSTRAINT_instruction",id:"CONSTRAINT_instruction",isDocsHomePage:!1,title:"CONSTRAINT instruction",description:"The CONSTRAINT instruction creates a constraint.",source:"@site/docs\\CONSTRAINT_instruction.md",slug:"/CONSTRAINT_instruction",permalink:"/docusaurustest/docs/CONSTRAINT_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CONSTRAINT_instruction.md",version:"current",sidebar:"docs",previous:{title:"Instruction&lt;- WHEN",permalink:"/docusaurustest/docs/Instruction_-_WHEN"},next:{title:"Instruction=&gt;",permalink:"/docusaurustest/docs/Instruction=_"}},i=[],p={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"CONSTRAINT")," instruction creates a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Constraints"}),"constraint"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"CONSTRAINT eventClause constraintExpr [CHECKED [BY propertyId1, ..., propertyIdN]] MESSAGE messageExpr;\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"CONSTRAINT")," instruction creates a constraint. If the constraint is violated, the user will be shown the message defined in the instruction."),Object(o.b)("p",null,"Also, by using the ",Object(o.b)("strong",{parentName:"p"},"CHECKED")," option you can use the constraint when showing dialogs for changing properties whose values may violate the constraint if changed. In this instance an additional filter will be set in the dialog so that, when the property value changes, the constraint is not violated. If it is necessary to limit the set of properties for which the above filtering will be performed, the list of properties can be specified after the keyword ",Object(o.b)("strong",{parentName:"p"},"BY")," ."),Object(o.b)("p",null,"Creating a constraint is pretty similar to the following instruction:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"constraintProperty = constraintExpr;\nWHEN eventClause [=GROUP MAX constraintProperty()]() DO {\n    PRINT outConstraintPropertyForm MESSAGE NOWAIT;\n    CANCEL;\n}\n")),Object(o.b)("p",null,"but it also has ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Constraints"}),"a number of advantages"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventClause")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Event_description_block"}),"Event description block"),".\xa0Describes\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Events"}),"the event")," upon occurrence of which the created constraint will be checked."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"constraintExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expression")," whose value is a condition for the constraint being created.\xa0If the obtained property does not contain the\xa0",Object(o.b)("strong",{parentName:"p"},"PREV")," operator, the platform automatically wraps it into the\xa0",Object(o.b)("strong",{parentName:"p"},"SET"),"operator."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"propertyId1, ..., propertyIdN")),Object(o.b)("p",null,"List of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"property IDs"),". When showing change dialog for each property in that list, options that violate the created constraint will be filtered."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"messageExpr")),Object(o.b)("p",null,"An expression whose value is shown as a message to the user when the set constraint is violated. It may be either a\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-strliteral"}),"string literal"),"\xa0or a property without parameters."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null),Object(o.b)("p",null,"**",Object(o.b)("br",{parentName:"p"}),"\n","**"))}u.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=u(n),O=r,d=b["".concat(c,".").concat(O)]||b[O]||l[O]||o;return n?a.a.createElement(d,s(s({ref:t},p),{},{components:n})):a.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=O;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);