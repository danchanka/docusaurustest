(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(424)),c={},s={unversionedId:"LSFUS/lsFusionInstruction=_",id:"LSFUS/lsFusionInstruction=_",isDocsHomePage:!1,title:"lsFusionInstruction=_",description:"lsFusionInstruction=&gt;",source:"@site/docs\\LSFUS\\lsFusionInstruction=_.md",slug:"/LSFUS/lsFusionInstruction=_",permalink:"/docusaurustest/docs/LSFUS/lsFusionInstruction=_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionInstruction=_.md",version:"current"},p=[],i={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusioninstruction"},"lsFusionInstruction=",">"),Object(o.b)("h1",{id:"instruction"},"Instruction=",">"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"=",">")," instruction\xa0creates a\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionSimple_constraints"}),"consequence"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"leftPropertyId(param1, ..., paramN) => eventClause rightExpr [RESOLVE resolveType];\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"=",">","\xa0")," instruction creates a consequence.\xa0This operator **\xa0** can declare its own local parameters when specifying the property of the consequence premise. These parameters can then be used in the expression of the consequence."),Object(o.b)("p",null,"When creating a consequence a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionConstraints"}),"constraint")," will be created, which is pretty similar to the following instruction"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"CONSTRAINT eventClause leftPropertyId(param1, ..., paramN) AND NOT rightExpr MESSAGE 'Consequence violated';\n")),Object(o.b)("p",null,"but it allows you to automatically resolve situations where this constraint is violated. So using type\xa0",Object(o.b)("strong",{parentName:"p"},"RESOLVE LEFT"),"\xa0is similar to creating ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionSimple_event"}),"a simple event"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"WHEN eventClause SET(leftPropertyId(param1, ..., paramN)) DO\xa0\n    SETACTION(rightExpr);\n")),Object(o.b)("p",null,"\xa0",Object(o.b)("strong",{parentName:"p"},"RESOLVE RIGHT"),", similarly:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"WHEN eventClause DROPPED(leftPropertyId(param1, ..., paramN)) DO\n    DROPACTION(rightExpr);\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"leftPropertyId")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"ID of the property")," specifying the consequence premise."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(o.b)("p",null,"List of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-paramid"}),"parameters")," of the property that defines the premise of the consequence. The number of these parameters must be equal to the number of parameters of the property."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"rightExpr")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionExpression"}),"Expression")," whose value determines the consequence."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"resolveType")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionSimple_event"}),"Auto resolution")," type in case of violation of the consequence. Specified by one of the following options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LEFT"),": if the premise (the left part of the instruction) is changed to non-",Object(o.b)("strong",{parentName:"li"},"NULL"),", then the consequence changes to non",Object(o.b)("strong",{parentName:"li"},"NULL"),".**\xa0**"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"RIGHT"),":\xa0if the consequence (the right part of the instruction) changes to ",Object(o.b)("strong",{parentName:"li"},"NULL"),", then the premise changes to ",Object(o.b)("strong",{parentName:"li"},"NULL"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LEFT RIGHT"),": similar to ",Object(o.b)("strong",{parentName:"li"},"LEFT")," and ",Object(o.b)("strong",{parentName:"li"},"RIGHT")," together.\xa0")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"eventClause")),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionEvent_description_block"}),"Event description block"),". Describes an\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionEvents"}),"event")," upon the occurrence of which the created consequence will be checked and automatic resolution operations will be performed."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null),Object(o.b)("p",null,"**",Object(o.b)("br",{parentName:"p"}),"\n","**"))}b.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,O=u["".concat(c,".").concat(m)]||u[m]||l[m]||o;return n?a.a.createElement(O,s(s({ref:t},i),{},{components:n})):a.a.createElement(O,s({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);