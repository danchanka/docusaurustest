(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{219:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),o=(r(0),r(419)),i={title:"Materializations"},c={unversionedId:"Materializations",id:"Materializations",isDocsHomePage:!1,title:"Materializations",description:"Almost any aggregated\xa0property\xa0in the platform can be materialized. In this case, the property will be stored in the database permanently and automatically updated when the data on which this property depends is changed. At the same time, when reading the values of the materialized property, these values will be read directly from the database, as if the property was data (and not calculated every time). Accordingly, all data properties are materialized by definition.",source:"@site/docs\\Materializations.md",slug:"/Materializations",permalink:"/docusaurustest/docs/Materializations",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Materializations.md",version:"current",sidebar:"docs",previous:{title:"Execution",permalink:"/docusaurustest/docs/Execution"},next:{title:"Indexes",permalink:"/docusaurustest/docs/Indexes"}},s=[{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:s};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Almost any aggregated\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Properties"}),"property"),"\xa0in the platform can be ",Object(o.b)("em",{parentName:"p"},"materialized"),". In this case, the property will be stored in the database permanently and automatically updated when the data on which this property depends is changed. At the same time, when reading the values of the materialized property, these values will be read directly from the database, as if the property was ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Data_properties_DATA"}),"data")," (and not calculated every time). Accordingly, all data properties are materialized by definition."),Object(o.b)("p",null,"A property can be materialized if and only if for it there is a finite number of object collections for which the value of this property is not ",Object(o.b)("strong",{parentName:"p"},"NULL")," (that is, the iteration operation for all of its non-",Object(o.b)("strong",{parentName:"p"},"NULL")," values is\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Set_operations#Setoperations-correct"}),"correct"),")"),Object(o.b)("h3",{id:"language"},"Language"),Object(o.b)("p",null,"To materialize a property, use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Property_options#Propertyoptions-persistent"}),Object(o.b)("strong",{parentName:"a"},"MATERIALIZED")," option"),"\xa0in the property options."),Object(o.b)("h3",{id:"examples"},"Examples"))}l.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=a,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?n.a.createElement(m,c(c({ref:t},p),{},{components:r})):n.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);