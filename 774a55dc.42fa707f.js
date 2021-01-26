(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{247:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return l}));var r=o(3),n=o(7),a=(o(0),o(423)),i={},s={unversionedId:"LSFUS/lsFusionSelection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_",id:"LSFUS/lsFusionSelection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_",isDocsHomePage:!1,title:"lsFusionSelection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_",description:"lsFusionSelection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)",source:"@site/docs\\LSFUS\\lsFusionSelection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_.md",slug:"/LSFUS/lsFusionSelection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_",permalink:"/docusaurustest/docs/LSFUS/lsFusionSelection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/LSFUS/lsFusionSelection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_.md",version:"current"},c=[],p={toc:c};function l(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusionselection-case-if-multi-override-exclusive"},"lsFusionSelection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)"),Object(a.b)("h1",{id:"selection-case-if-multi-override-exclusive"},"Selection (CASE, IF, MULTI, OVERRIDE, EXCLUSIVE)"),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"selection")," operator creates a property that determines for a set of\xa0",Object(a.b)("em",{parentName:"p"},"conditions\xa0"),"which condition is met, and returns the value of the ",Object(a.b)("em",{parentName:"p"},"result")," corresponding to that condition. If none of the conditions is met, then the value of the created property will be ",Object(a.b)("strong",{parentName:"p"},"NULL"),".\xa0"),Object(a.b)("p",null,"All conditions and results are defined as some properties and/or parameters. Accordingly, a condition ",Object(a.b)("em",{parentName:"p"},"is satisfied")," if the value of the property or parameter by which this condition is set is not equal to ",Object(a.b)("strong",{parentName:"p"},"NULL"),".\xa0"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Polymorphic form")),Object(a.b)("p",null,"The platform also allows you to define a condition and the corresponding result with one property. In this case, the condition may be either matching the property's ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperty_signature_CLASS_"}),"signature"),",\xa0or the property itself. We will call this the",Object(a.b)("em",{parentName:"p"},"polymorphic")," form of the operator."),Object(a.b)("p",null,"Note that the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionExtremum_MAX_MIN_"}),"extremum operator")," and logical operators basically are also varieties of the selection operator (and of\xa0its polymorphic form, i.e. the conditions and result are defined by one property)"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Mutual exclusion of conditions")),Object(a.b)("p",null,"The selection operator lets you specify that all its conditions are ",Object(a.b)("em",{parentName:"p"},"mutually exclusive"),". If this option is specified, and the conditions are not in fact mutually exclusive, the platform will throw the corresponding error."),Object(a.b)("p",null,"It is worth noting that this check is no more than a hint to the platform (for better optimization), and also a kind of self-checking on the part of the developer. However, in many cases it allows you to make the code more transparent and readable (especially with the polymorphic form of the selection operator)."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Implicit definition")),Object(a.b)("p",null,"This operator supports\xa0",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperty_extension"}),"implicit definition"),"\xa0using the technique of extensions, which allows, in particular, to implement polymorphism in the form that is common practice in OOP."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Single form")),Object(a.b)("p",null,"The\xa0",Object(a.b)("em",{parentName:"p"},"single\xa0"),"form of the selection operator checks exactly one condition. If this condition is met, the value of the specified result is returned. It is also possible to specify an\xa0",Object(a.b)("em",{parentName:"p"},"alternative result\xa0"),"which value is returned if the condition is not met."),Object(a.b)("p",null,"Type of mutual exclusion and implicit definition do not make sense/are not supported for this form of the operator"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Determining the result class")),Object(a.b)("p",null,"The result class of the selection operator is the common ancestor (builtin or ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"User-classes_2228341.html#Userclasses-commonparentclass"}),"user-defined"),") of its operands."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Language")),Object(a.b)("p",null,"To create a property implementing a general form of selection, the\xa0",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"/docusaurustest/docs/LSFUS/lsFusionCASE_operator"}),"CASE"))," operator is used. The polymorphic form of the selection operator is implemented using the ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"/docusaurustest/docs/LSFUS/lsFusionMULTI_operator"}),"MULTI")),",\xa0",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"/docusaurustest/docs/LSFUS/lsFusionOVERRIDE_operator"}),"OVERRIDE"),"\xa0and ",Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"/docusaurustest/docs/LSFUS/lsFusionEXCLUSIVE_operator"}),"EXCLUSIVE")),",",Object(a.b)("strong",{parentName:"p"},"\xa0operators; the"),"single form using the ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"/docusaurustest/docs/LSFUS/lsFusionIF_operator"}),"IF")),"\xa0and ",Object(a.b)("strong",{parentName:"p"},"IF ... THEN")," operator (the only operator that allows the specification of an alternative result)."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples")))}l.isMDXComponent=!0},423:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return f}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(o),m=r,f=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return o?n.a.createElement(f,s(s({ref:t},p),{},{components:o})):n.a.createElement(f,s({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);