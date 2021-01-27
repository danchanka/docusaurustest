(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{378:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(424)),s={},i={unversionedId:"LSFUS/lsFusionCONSTRAINT_instruction",id:"LSFUS/lsFusionCONSTRAINT_instruction",isDocsHomePage:!1,title:"lsFusionCONSTRAINT_instruction",description:"lsFusionCONSTRAINT instruction",source:"@site/docs\\LSFUS\\lsFusionCONSTRAINT_instruction.md",slug:"/LSFUS/lsFusionCONSTRAINT_instruction",permalink:"/docusaurustest/docs/LSFUS/lsFusionCONSTRAINT_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/website/docs/LSFUS/lsFusionCONSTRAINT_instruction.md",version:"current"},c=[],p={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusionconstraint-instruction"},"lsFusionCONSTRAINT instruction"),Object(a.b)("h1",{id:"constraint-instruction"},"CONSTRAINT instruction"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"CONSTRAINT")," instruction creates a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionConstraints"}),"constraint"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"CONSTRAINT eventClause constraintExpr [CHECKED [BY propertyId1, ..., propertyIdN]] MESSAGE messageExpr;\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description")),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"CONSTRAINT")," instruction creates a constraint. If the constraint is violated, the user will be shown the message defined in the instruction."),Object(a.b)("p",null,"Also, by using the ",Object(a.b)("strong",{parentName:"p"},"CHECKED")," option you can use the constraint when showing dialogs for changing properties whose values may violate the constraint if changed. In this instance an additional filter will be set in the dialog so that, when the property value changes, the constraint is not violated. If it is necessary to limit the set of properties for which the above filtering will be performed, the list of properties can be specified after the keyword ",Object(a.b)("strong",{parentName:"p"},"BY")," ."),Object(a.b)("p",null,"Creating a constraint is pretty similar to the following instruction:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"constraintProperty = constraintExpr;\nWHEN eventClause [=GROUP MAX constraintProperty()]() DO {\n    PRINT outConstraintPropertyForm MESSAGE NOWAIT;\n    CANCEL;\n}\n")),Object(a.b)("p",null,"but it also has ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionConstraints"}),"a number of advantages"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"eventClause")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionEvent_description_block"}),"Event description block"),".\xa0Describes\xa0",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionEvents"}),"the event")," upon occurrence of which the created constraint will be checked."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"constraintExpr")),Object(a.b)("p",null,"An ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionExpression"}),"expression")," whose value is a condition for the constraint being created.\xa0If the obtained property does not contain the\xa0",Object(a.b)("strong",{parentName:"p"},"PREV")," operator, the platform automatically wraps it into the\xa0",Object(a.b)("strong",{parentName:"p"},"SET"),"operator."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"propertyId1, ..., propertyIdN")),Object(a.b)("p",null,"List of ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"property IDs"),". When showing change dialog for each property in that list, options that violate the created constraint will be filtered."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"messageExpr")),Object(a.b)("p",null,"An expression whose value is shown as a message to the user when the set constraint is violated. It may be either a\xa0",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-strliteral"}),"string literal"),"\xa0or a property without parameters."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples")),Object(a.b)("hr",null),Object(a.b)("p",null,"**",Object(a.b)("br",{parentName:"p"}),"\n","**"))}u.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},O=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),O=r,d=l["".concat(s,".").concat(O)]||l[O]||b[O]||a;return n?o.a.createElement(d,i(i({ref:t},p),{},{components:n})):o.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);