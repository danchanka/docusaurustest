(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{202:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),o=(r(0),r(749)),c={title:"AGGR operator"},i={unversionedId:"AGGR_operator",id:"AGGR_operator",isDocsHomePage:!1,title:"AGGR operator",description:"The\xa0AGGR\xa0operator creates an aggregation.",source:"@site/docs/AGGR_operator.md",slug:"/AGGR_operator",permalink:"/docusaurustest/docs/next/AGGR_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/AGGR_operator.md",version:"current",sidebar:"docs",previous:{title:"ACTIVE TAB operator",permalink:"/docusaurustest/docs/next/ACTIVE_TAB_operator"},next:{title:"CASE operator",permalink:"/docusaurustest/docs/next/CASE_operator"}},s=[{value:"<strong>Description</strong>",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:s};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"AGGR"),"\xa0operator creates an ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Aggregations"},"aggregation"),"."),Object(o.b)("p",null,"*",Object(o.b)("strong",{parentName:"p"},"*Syntax\xa0"),Object(o.b)("br",{parentName:"p"}),"\n","**"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"AGGR aggrClass WHERE aggrExpr\n")),Object(o.b)("h3",{id:"description"},Object(o.b)("strong",{parentName:"h3"},"Description")),Object(o.b)("p",null,"In addition to the property that is the result of this operator and contains the value of the aggregated object, for each parameter the ",Object(o.b)("strong",{parentName:"p"},"AGGR")," operator also creates a data property with one parameter, whose ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/User_classes"},"class")," is equal to the class of the aggregated object. The value class and name of this property are equal to the class and name of the parameter for which this property is created. Accordingly, when creating an aggregated object, the value of the parameter for which the aggregated object is created is automatically written to this property."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Creating an aggregation is in many ways similar to the following instructions (example for 2 parameters):"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre"},"prm1 = DATA class1 (aggrClass);\nprm2 = DATA class2 (aggrClass);\nresult = GROUP AGGR aggrClass aggrObject BY prm1(aggrObject), prm2(aggrObject);\n\n// if aggrExpr becomes non-null, create an object of class aggrClass (equivalent to whereExpr => result (prm1, prm2) RESOLVE LEFT)\nWHEN SET(aggrExpr) AND NOT result(prm1, prm2)\n    NEW aggrObject = aggrClass {\n        prm1(aggrObject) <- prm1;\n        prm2(aggrObject) <- prm2;\n    }\n\n// if aggrExpr becomes null, remove an object (equivalent to aggrClass aggrObject IS aggrClass => result(prm1(aggrObject),prm2(aggrObject)) RESOLVE RIGHT)\nWHEN aggrClass aggrObject IS aggrClass AND DROPPED(result(prm1(aggrObject),prm2(aggrObject))) DO\n    DELETE aggrObject;\n")),Object(o.b)("p",{parentName:"div"},"but it is a more declarative and readable instruction, and therefore using it is recommended"))),Object(o.b)("p",null,"Unlike other context-dependent operators, the ",Object(o.b)("strong",{parentName:"p"},"AGGR")," operator cannot be used in\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Expression"},"expressions")," inside other operators (in this sense it is more like context-independent operators), or in the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/JOIN_operator"},Object(o.b)("strong",{parentName:"a"},"JOIN")," operator"),"\xa0(inside\xa0","[","=\xa0","]",")"),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"aggrClass")),Object(o.b)("p",null,"The value class of the aggregated object."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"aggrExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Expression"},"expression"),"\xa0whose value defines an aggregated property."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS A; CLASS B; CLASS C;\nf = DATA INTEGER (A, B);\nc = AGGR C WHERE f(A a, B b) MATERIALIZED INDEXED;\n\nCLASS AB;\nab = AGGR AB WHERE A a IS A AND B b IS B; // for each A B pair creates an object AB\n\nCLASS Shipment 'Delivery';\ndate = ABSTRACT DATE (Shipment);\nCLASS Invoice 'Invoice';\ncreateShipment 'Create delivery' = DATA BOOLEAN (Invoice);\ndate 'Shipment date' = DATA DATE (Invoice);\nCLASS ShipmentInvoice 'Delivery by invoice' : Shipment;\nshipment(Invoice invoice) = AGGR ShipmentInvoice WHERE createShipment(invoice); // creating a delivery by invoice, if the option for delivery creation is defined for the invoice\ndate(ShipmentInvoice si) += sum(date(invoice(si)),1); // delivery date = invoice date + 1\n")))}l.isMDXComponent=!0},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(r),u=a,d=b["".concat(c,".").concat(u)]||b[u]||m[u]||o;return r?n.a.createElement(d,i(i({ref:t},p),{},{components:r})):n.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);