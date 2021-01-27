(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(424)),c={},s={unversionedId:"LSFUS/lsFusionType_conversion",id:"LSFUS/lsFusionType_conversion",isDocsHomePage:!1,title:"lsFusionType_conversion",description:"lsFusionType conversion",source:"@site/docs\\LSFUS\\lsFusionType_conversion.md",slug:"/LSFUS/lsFusionType_conversion",permalink:"/docusaurustest/docs/LSFUS/lsFusionType_conversion",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionType_conversion.md",version:"current"},i=[],p={toc:i};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusiontype-conversion"},"lsFusionType conversion"),Object(a.b)("h1",{id:"type-conversion"},"Type conversion"),Object(a.b)("p",null,"The ",Object(a.b)("em",{parentName:"p"},"type conversion")," operator creates a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperties"}),"property")," that converts an object of one\xa0",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionBuilt-in_classes"}),"built-in class"),"\xa0to an object of another built-in class. If type conversion is not possible, the property value will be ",Object(a.b)("strong",{parentName:"p"},"NULL"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"String and file types")),Object(a.b)("p",null,"String types can be converted to human-readable file types (",Object(a.b)("strong",{parentName:"p"},"CSVFILE"),", ",Object(a.b)("strong",{parentName:"p"},"XMLFILE"),", ",Object(a.b)("strong",{parentName:"p"},"JSONFILE"),", ",Object(a.b)("strong",{parentName:"p"},"HTMLFILE"),", etc.), and vice versa - human-readable file types can be converted to string types."),Object(a.b)("p",null,"Converting dynamic-type files (",Object(a.b)("strong",{parentName:"p"},"FILE"),") to strings and vice versa is prohibited in the current implementation, but if necessary this can be done via an intermediate human-readable type - for example, by first converting to ",Object(a.b)("strong",{parentName:"p"},"CSVFILE"),", and only then to ",Object(a.b)("strong",{parentName:"p"},"FILE")," (the resulting file ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"Built-in-classes_2031657.html#Built-inclasses-csv"}),"will have the extension")," CSV)"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Language")),Object(a.b)("p",null,"To implement conversion, the\xa0",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionType_conversion_operator"}),"type conversion operator")," is used."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples")))}u.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(n),f=r,m=l["".concat(c,".").concat(f)]||l[f]||b[f]||a;return n?o.a.createElement(m,s(s({ref:t},p),{},{components:n})):o.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);