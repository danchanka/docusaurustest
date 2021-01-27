(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{416:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(424)),s={},c={unversionedId:"LSFUS/lsFusionCustom_formula_FORMULA_",id:"LSFUS/lsFusionCustom_formula_FORMULA_",isDocsHomePage:!1,title:"lsFusionCustom_formula_FORMULA_",description:"lsFusionCustom formula (FORMULA)",source:"@site/docs\\LSFUS\\lsFusionCustom_formula_FORMULA_.md",slug:"/LSFUS/lsFusionCustom_formula_FORMULA_",permalink:"/docusaurustest/docs/LSFUS/lsFusionCustom_formula_FORMULA_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/website/docs/LSFUS/lsFusionCustom_formula_FORMULA_.md",version:"current"},u=[],i={toc:u};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusioncustom-formula-formula"},"lsFusionCustom formula (FORMULA)"),Object(a.b)("h1",{id:"custom-formula-formula"},"Custom formula (FORMULA)"),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"custom formula")," operator allows you to create a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperties"}),"property")," that calculates defined formula in SQL. You can specify different implementations of the formula for different SQL servers.\xa0The formula is defined as a string, within which the special character $ and the number of this parameter (starting from 1) are used to access the parameter. Accordingly, the number of parameters of the result property will be equal to the greatest of the numbers of the parameters used.\xa0"),Object(a.b)("p",null,"Using this operator is recommended only if the task cannot be accomplished using other operators, and only if it is known for certain which specific SQL servers can be used, or if the syntax constructs used comply with one of the latest SQL standards."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Determining the result class")),Object(a.b)("p",null,"By default, the result class of the custom operator is a\xa0",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"Built-in-classes_2031657.html#Built-inclasses-commonparentclass"}),"common ancestor"),"\xa0of all its operands. If necessary, the developer can specify this class explicitly."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Language")),Object(a.b)("p",null,"To declare a property using a custom formula, use the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionFORMULA_operator"}),Object(a.b)("strong",{parentName:"a"},"FORMULA")," operator"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples")))}l.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),l=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,b=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return r?o.a.createElement(b,c(c({ref:t},i),{},{components:r})):o.a.createElement(b,c({ref:t},i))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var i=2;i<a;i++)s[i]=r[i];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);