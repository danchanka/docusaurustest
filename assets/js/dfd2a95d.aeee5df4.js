(window.webpackJsonp=window.webpackJsonp||[]).push([[596],{667:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),r=(n(0),n(749)),i={title:"Action extension"},c={unversionedId:"Action_extension",id:"Action_extension",isDocsHomePage:!1,title:"Action extension",description:'The\xa0actions\xa0extension\xa0technique allows the developer to declare an abstract action in one\xa0module\xa0and add to it an implementation in other modules. This technique is essentially a "postponed definition"\xa0of a branch operator, where the operator\u2019s title is defined when the property is declared, and branching conditions are added as new functionality (of classes\xa0or static objects) is added to the system. Furthermore, branching conditions (if branching is not mutually exclusive) can be added both to the beginning and to the end of the abstract action created. Similarly, this technique works with a sequence operator.',source:"@site/docs/Action_extension.md",slug:"/Action_extension",permalink:"/docusaurustest/docs/next/Action_extension",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Action_extension.md",version:"current",sidebar:"docs",previous:{title:"Property extension",permalink:"/docusaurustest/docs/next/Property_extension"},next:{title:"Form extension",permalink:"/docusaurustest/docs/next/Form_extension"}},s=[{value:"Polymorphic form",id:"poly",children:[]},{value:"Mutual exclusion of conditions",id:"exclusive",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Actions"},"actions"),"\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Extensions"},"extension"),"\xa0technique allows the developer to declare an abstract action in one\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Modules"},"module"),'\xa0and add to it an implementation in other modules. This technique is essentially a "postponed definition"\xa0of a ',Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Branching_CASE_IF_MULTI_"},"branch operator"),", where the operator\u2019s title is defined when the property is declared, and branching conditions are added as new functionality (of ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Classes"},"classes"),"\xa0or ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Static_objects"},"static objects"),") is added to the system. Furthermore, branching conditions (if branching is not mutually exclusive) can be added both to the beginning and to the end of the abstract action created. Similarly, this technique works with a ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Sequence_..._"},"sequence operator"),"."),Object(r.b)("p",null,"For abstract actions, the expected classes of parameters must be specified. Then the platform will automatically check that the added implementations match these classes. Also, if necessary, you can check that for all descendants of the parameter classes at least one implementation is specified (or exactly one, if the conditions\xa0are ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"},"mutually exclusive"),")."),Object(r.b)("p",null,"Actions extension allows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Implement the concept of action polymorphism by analogy with certain object-oriented programming languages."),Object(r.b)("li",{parentName:"ul"},'Remove dependency between modules by adding specific "entry points," to which new behavior can be added later.')),Object(r.b)("h3",{id:"poly"},"Polymorphic form"),Object(r.b)("p",null,"As with a\xa0branching operator, for an abstract action there is\xa0a ",Object(r.b)("em",{parentName:"p"},"polymorphic form"),", where it is possible not to define a condition explicitly, but to use as a condition\xa0matching the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Property_signature_CLASS_"},"signature"),"\xa0of the action that corresponds to this condition."),Object(r.b)("h3",{id:"exclusive"},"Mutual exclusion of conditions"),Object(r.b)("p",null,"As\xa0for\xa0a branch operator, you can specify that all conditions of an abstract action must be\xa0",Object(r.b)("em",{parentName:"p"},"mutually exclusive"),". If this option is specified, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."),Object(r.b)("p",null,"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows to make the code more transparent and readable (especially in a polymorphic form of the abstract action)."),Object(r.b)("h3",{id:"language"},"Language"),Object(r.b)("p",null,"The key instructions that implement the extension technique are the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/ABSTRACT_operator_action_"},Object(r.b)("strong",{parentName:"a"},"ABSTRACT")," operator"),",\xa0for declaring an abstract action, and the\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/ACTION+_instruction"},Object(r.b)("strong",{parentName:"a"},"ACTION+")," instruction"),",\xa0for adding an implementation to it."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"exportXls 'Export to Excel'  ABSTRACT CASE ( Order);         // In this case, ABSTRACT CASE OVERRIDE LAST is created\nexportXls (Order o) + WHEN name(currency(o)) == 'USD' THEN {\n    MESSAGE 'Export USD not implemented';\n}\n\nCLASS Task;\nrun 'Execute'  ABSTRACT ( Task);                           // ABSTRACT MULTI EXCLUSIVE\n\nCLASS Task1 : Task;\nname = DATA STRING[100] (Task);\nrun (Task1 t) + {\n    MESSAGE 'Run Task1 ' + name(t);\n}\n\n\nCLASS OrderDetail;\nprice = DATA NUMERIC[14,2] (OrderDetail);\n\nCLASS InvoiceDetail;\nprice = DATA NUMERIC[14,2] (InvoiceDetail);\nfill  ABSTRACT LIST ( OrderDetail, InvoiceDetail);   // ABSTRACT LIST LAST\n\nfill (OrderDetail od, InvoiceDetail id) + {\n    price(id) <- price(od);\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT Animal;\nwhoAmI  ABSTRACT ( Animal);\n\nCLASS Dog : Animal;\nwhoAmI (Dog d) + {  MESSAGE 'I am a dog!'; }\n\nCLASS Cat : Animal;\nwhoAmI (Cat c) + {  MESSAGE 'I am a \u0441at!'; }\n\nask ()  {\n    FOR Animal a IS Animal DO\n        whoAmI(a); // a corresponding message will be shown for each object\n}\n\nonStarted  ABSTRACT LIST ( );\nonStarted () + {\n    name(Sku s) <- '1';\n}\nonStarted () + {\n    name(Sku s) <- '2';\n}\n// first, the 1st action is executed, then the 2nd action\n\nCLASS Human;\nname = DATA STRING[100] (Human);\n\ntestName  ABSTRACT CASE ( Human);\n\ntestName (Human h) + WHEN name(h) == 'John' THEN {  MESSAGE 'I am John'; }\ntestName (Human h) + WHEN name(h) == 'Bob' THEN {  MESSAGE 'I am Bob'; }\n")))}u.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return n?o.a.createElement(h,c(c({ref:t},l),{},{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);