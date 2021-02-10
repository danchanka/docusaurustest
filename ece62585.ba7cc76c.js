(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{387:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),c=(n(0),n(419)),o={title:"Instruction=>"},s={unversionedId:"Instruction=",id:"Instruction=",isDocsHomePage:!1,title:"Instruction=>",description:"The => instruction\xa0creates a\xa0consequence.",source:"@site/docs\\Instruction=.md",slug:"/Instruction=",permalink:"/docusaurustest/docs/Instruction=",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Instruction=.md",version:"current",sidebar:"docs",previous:{title:"CONSTRAINT instruction",permalink:"/docusaurustest/docs/CONSTRAINT_instruction"},next:{title:"CLASS instruction",permalink:"/docusaurustest/docs/CLASS_instruction"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"=>")," instruction\xa0creates a\xa0",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Simple_constraints"}),"consequence"),"."),Object(c.b)("h3",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"leftPropertyId(param1, ..., paramN) => eventClause rightExpr [RESOLVE resolveType];\n")),Object(c.b)("h3",{id:"description"},"Description"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"=>\xa0")," instruction creates a consequence.\xa0This operator **\xa0** can declare its own local parameters when specifying the property of the consequence premise. These parameters can then be used in the expression of the consequence."),Object(c.b)("p",null,"When creating a consequence a ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Constraints"}),"constraint")," will be created, which is pretty similar to the following instruction"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"CONSTRAINT eventClause leftPropertyId(param1, ..., paramN) AND NOT rightExpr MESSAGE 'Consequence violated';\n")),Object(c.b)("p",null,"but it allows you to automatically resolve situations where this constraint is violated. So using type\xa0",Object(c.b)("strong",{parentName:"p"},"RESOLVE LEFT"),"\xa0is similar to creating ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Simple_event"}),"a simple event"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"WHEN eventClause SET(leftPropertyId(param1, ..., paramN)) DO\xa0\n    SETACTION(rightExpr);\n")),Object(c.b)("p",null,"\xa0",Object(c.b)("strong",{parentName:"p"},"RESOLVE RIGHT"),", similarly:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"WHEN eventClause DROPPED(leftPropertyId(param1, ..., paramN)) DO\n    DROPACTION(rightExpr);\n")),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"leftPropertyId")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#propertyid-broken"}),"ID of the property")," specifying the consequence premise."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(c.b)("p",null,"List of ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#paramid-broken"}),"parameters")," of the property that defines the premise of the consequence. The number of these parameters must be equal to the number of parameters of the property."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"rightExpr")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"Expression")," whose value determines the consequence."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"resolveType")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Simple_event"}),"Auto resolution")," type in case of violation of the consequence. Specified by one of the following options:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"LEFT"),": if the premise (the left part of the instruction) is changed to non-",Object(c.b)("strong",{parentName:"li"},"NULL"),", then the consequence changes to non",Object(c.b)("strong",{parentName:"li"},"NULL"),".**\xa0**"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"RIGHT"),":\xa0if the consequence (the right part of the instruction) changes to ",Object(c.b)("strong",{parentName:"li"},"NULL"),", then the premise changes to ",Object(c.b)("strong",{parentName:"li"},"NULL"),"."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"LEFT RIGHT"),": similar to ",Object(c.b)("strong",{parentName:"li"},"LEFT")," and ",Object(c.b)("strong",{parentName:"li"},"RIGHT")," together.\xa0")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"eventClause")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Event_description_block"}),"Event description block"),". Describes an\xa0",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Events"}),"event")," upon the occurrence of which the created consequence will be checked and automatic resolution operations will be performed."),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("p",null,"**",Object(c.b)("br",{parentName:"p"}),"\n","**"))}u.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,O=b["".concat(o,".").concat(m)]||b[m]||l[m]||c;return n?a.a.createElement(O,s(s({ref:t},p),{},{components:n})):a.a.createElement(O,s({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);