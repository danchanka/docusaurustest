(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{147:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var o=r(3),n=(r(0),r(419));const a={title:"Property \u0441hange (CHANGE)"},c={unversionedId:"Property_\u0441hange_CHANGE_",id:"Property_\u0441hange_CHANGE_",isDocsHomePage:!1,title:"Property \u0441hange (CHANGE)",description:"The property change operator allows you to change the values of one property (write) to the value of another property (read) for all object collections for which the value of a third property (condition) is not NULL. The condition can be omitted (in which case it is considered to be equal to TRUE).",source:"@site/docs\\Property_\u0441hange_CHANGE_.md",slug:"/Property_\u0441hange_CHANGE_",permalink:"/docusaurustest/docs/Property_\u0441hange_CHANGE_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs\\Property_\u0441hange_CHANGE_.md",version:"current",sidebar:"docs",previous:{title:"State change",permalink:"/docusaurustest/docs/State_change"},next:{title:"New object (NEW)",permalink:"/docusaurustest/docs/New_object_NEW_"}},p=[],i={toc:p};function s({components:e,...t}){return Object(n.b)("wrapper",Object(o.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The ",Object(n.b)("em",{parentName:"p"},"property change")," operator allows you to change the values of one property (",Object(n.b)("em",{parentName:"p"},"write"),") to the value of another property (",Object(n.b)("em",{parentName:"p"},"read"),") for all object collections for which the value of a third property (",Object(n.b)("em",{parentName:"p"},"condition"),") is not ",Object(n.b)("strong",{parentName:"p"},"NULL"),". The condition can be omitted (in which case it is considered to be equal to ",Object(n.b)("strong",{parentName:"p"},"TRUE"),")."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Changeable properties")),Object(n.b)("p",null,"In general, the property to be written should be ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_properties_DATA_"}),"data"),", but the platform also allows writing to properties created using the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Selection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"}),"selection")," operator. In this case, the platform determines the condition that is met in this selection operator for the created property; the property corresponding to that condition is written to. Accordingly, all properties that can be written to we'll call ",Object(n.b)("em",{parentName:"p"},"mutable"),"."),Object(n.b)("p",null,"In addition to the above, mutable properties are also properties created using the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Extremum_MAX_MIN_"}),"extremum operator"),"\xa0and\xa0",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/Logical_operators_AND_OR_NOT_XOR_"}),"logical operators")," (which are basically varieties of the selection operator)"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Language")),Object(n.b)("p",null,"To declare an action that implements property change, use the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/CHANGE_operator"}),Object(n.b)("strong",{parentName:"a"},"CHANGE")," operator"),"."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Examples")))}s.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return h}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=u(r),d=o,h=l["".concat(c,".").concat(d)]||l[d]||b[d]||a;return r?n.a.createElement(h,p(p({ref:t},s),{},{components:r})):n.a.createElement(h,p({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var s=2;s<a;s++)c[s]=r[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);