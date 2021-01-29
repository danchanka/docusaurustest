(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{253:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),o=(r(0),r(424));const a={},c={unversionedId:"LSFUS/Property_\u0441hange_CHANGE_",id:"LSFUS/Property_\u0441hange_CHANGE_",isDocsHomePage:!1,title:"Property_\u0441hange_CHANGE_",description:"lsFusionProperty \u0441hange (CHANGE)",source:"@site/docs\\LSFUS\\Property_\u0441hange_CHANGE_.md",slug:"/LSFUS/Property_\u0441hange_CHANGE_",permalink:"/docusaurustest/docs/LSFUS/Property_\u0441hange_CHANGE_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs\\LSFUS\\Property_\u0441hange_CHANGE_.md",version:"current"},p=[],i={toc:p};function s({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionproperty-\u0441hange-change"},"lsFusionProperty \u0441hange (CHANGE)"),Object(o.b)("h1",{id:"property-\u0441hange-change"},"Property \u0441hange (CHANGE)"),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"property change")," operator allows you to change the values of one property (",Object(o.b)("em",{parentName:"p"},"write"),") to the value of another property (",Object(o.b)("em",{parentName:"p"},"read"),") for all object collections for which the value of a third property (",Object(o.b)("em",{parentName:"p"},"condition"),") is not ",Object(o.b)("strong",{parentName:"p"},"NULL"),". The condition can be omitted (in which case it is considered to be equal to ",Object(o.b)("strong",{parentName:"p"},"TRUE"),")."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Changeable properties")),Object(o.b)("p",null,"In general, the property to be written should be ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Data_properties_DATA_"}),"data"),", but the platform also allows writing to properties created using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"}),"selection")," operator. In this case, the platform determines the condition that is met in this selection operator for the created property; the property corresponding to that condition is written to. Accordingly, all properties that can be written to we'll call ",Object(o.b)("em",{parentName:"p"},"mutable"),"."),Object(o.b)("p",null,"In addition to the above, mutable properties are also properties created using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Extremum_MAX_MIN_"}),"extremum operator"),"\xa0and\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Logical_operators_AND_OR_NOT_XOR_"}),"logical operators")," (which are basically varieties of the selection operator)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Language")),Object(o.b)("p",null,"To declare an action that implements property change, use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/CHANGE_operator"}),Object(o.b)("strong",{parentName:"a"},"CHANGE")," operator"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")))}s.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,m=l["".concat(c,".").concat(d)]||l[d]||b[d]||a;return r?o.a.createElement(m,p(p({ref:t},s),{},{components:r})):o.a.createElement(m,p({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);