(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{321:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(419)),p={title:"ABSTRACT operator"},c={unversionedId:"ABSTRACT_operator",id:"ABSTRACT_operator",isDocsHomePage:!1,title:"ABSTRACT operator",description:"The ABSTRACT\xa0operator\xa0creates an abstract\xa0property.",source:"@site/docs\\ABSTRACT_operator.md",slug:"/ABSTRACT_operator",permalink:"/docusaurustest/docs/ABSTRACT_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/ABSTRACT_operator.md",version:"current",sidebar:"docs",previous:{title:"Operator \\[\\]",permalink:"/docusaurustest/docs/Operator_"},next:{title:"ABSTRACT operator",permalink:"/docusaurustest/docs/ABSTRACT_operator"}},s=[],i={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ABSTRACT"),"\xa0operator\xa0creates an ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Property_extension"}),"abstract\xa0property"),".\xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"ABSTRACT [type [exclusionType]] [CHECKED] returnClassName(argClassName1, ..., argClassNameN)\n")),Object(o.b)("p",null,"Where ",Object(o.b)("em",{parentName:"p"},"exclusionType"),"\xa0is of two types:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"EXCLUSIVE\nOVERRIDE [FIRST | LAST]\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ABSTRACT"),"\xa0operator creates an abstract property, the implementations of which can be defined later (for example, in other\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Modules"}),"modules")," dependent on the module containing the\xa0",Object(o.b)("strong",{parentName:"p"},"ABSTRACT"),"\xa0property). Implementations are added to the property using the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Instruction_+="}),"instruction + ="),". When calculating an abstract property, its ",Object(o.b)("em",{parentName:"p"},"matching")," implementation is selected and calculated. The selection of the matching implementation depends on the ",Object(o.b)("em",{parentName:"p"},"selection conditions")," that are defined when adding implementations, and on the ",Object(o.b)("strong",{parentName:"p"},"ABSTRACT")," operator type."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CASE")," -\xa0a general case.**\xa0",Object(o.b)("strong",{parentName:"li"},"The selection condition will be explicitly specified in the implementation using\xa0the ["),"WHEN**\xa0block](/docusaurustest/docs/Instruction_+=)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"MULTI"),"\xa0\u2013 a ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"Property-extension_1146897.html#Propertyextension-poly"}),"polymorphic form"),". The selection condition is that the parameters match the implementation ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docusaurustest/docs/CLASS_operator"}),"signature"),". This type is the default type and need not to be explicitly specified."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"VALUE")," - a polymorphic form",Object(o.b)("strong",{parentName:"li"},".\xa0"),"The selection condition will be definiteness (a none-",Object(o.b)("strong",{parentName:"li"},"NULL")," value) of the implementation value (essentially, the implementation itself).**\xa0**")),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Property-extension_1146897.html#Propertyextension-exclusive"}),"type of mutual exclusion")," of an operator determines whether several conditions for the implementation of an abstract property can simultaneously be met with a certain set of parameters. The\xa0",Object(o.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0type indicates that implementation conditions cannot be met simultaneously. The ",Object(o.b)("strong",{parentName:"p"},"OVERRIDE")," type allows several simultaneously met conditions. In this case, the implementation to be selected is determined by the keywords ",Object(o.b)("strong",{parentName:"p"},"FIRST")," and ",Object(o.b)("strong",{parentName:"p"},"LAST"),"."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ABSTRACT")," operator cannot be used inside ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expressions"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"type")),Object(o.b)("p",null,"Type of abstract*\xa0*property. It is specified by one of the keywords:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CASE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"MULTI")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"VALUE",Object(o.b)("br",{parentName:"strong"})))),Object(o.b)("p",null,"The default value is\xa0",Object(o.b)("strong",{parentName:"p"},"MULTI"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"ex\u0441lusionType")),Object(o.b)("p",null,"Type of mutual exclusion. One of these keywords:\xa0",Object(o.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0or\xa0",Object(o.b)("strong",{parentName:"p"},"OVERRIDE"),". Unless explicitly specified, in a ",Object(o.b)("strong",{parentName:"p"},"MULTI")," abstract property the default type of mutual exclusion is ",Object(o.b)("strong",{parentName:"p"},"EXCLUSIVE"),", and in all other cases the default mutual exclusion type is ",Object(o.b)("strong",{parentName:"p"},"OVERRIDE"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"FIRST")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"LAST")),Object(o.b)("p",null,"Keywords. Determine which of the matching implementations will be selected. When the word\xa0",Object(o.b)("strong",{parentName:"p"},"FIRST")," is specified, implementations will be added to the top of the implementations list, so that the last added implementation will be selected. When the word\xa0",Object(o.b)("strong",{parentName:"p"},"LAST")," is specified, implementations will be added to the end of the implementations list, so that the implementation added first will be selected.\xa0If not specified, the default is\xa0",Object(o.b)("strong",{parentName:"p"},"FIRST"),".\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"FULL")),Object(o.b)("p",null,"Keyword. If specified, the platform will automatically check\xa0that at least one implementation is specified for all child objects of the argument classes (or exactly one if the conditions are mutually exclusive)."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"returnClassName")),Object(o.b)("p",null,"Class of the return value of the property. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-classid"}),"Class ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"argClassName1, ..., argClassNameN")),Object(o.b)("p",null,"List of class names of property arguments. Each name is defined by a class ID."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null),Object(o.b)("p",null,"**",Object(o.b)("br",{parentName:"p"}),"\n","**"))}l.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,d=b["".concat(p,".").concat(u)]||b[u]||m[u]||o;return n?a.a.createElement(d,c(c({ref:t},i),{},{components:n})):a.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<o;i++)p[i]=n[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);