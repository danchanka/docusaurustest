(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{350:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(423)),s={},c={unversionedId:"LSFUS/lsFusionConstant",id:"LSFUS/lsFusionConstant",isDocsHomePage:!1,title:"lsFusionConstant",description:"lsFusionConstant",source:"@site/docs\\LSFUS\\lsFusionConstant.md",slug:"/LSFUS/lsFusionConstant",permalink:"/docusaurustest/docs/LSFUS/lsFusionConstant",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/LSFUS/lsFusionConstant.md",version:"current"},i=[],u={toc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionconstant"},"lsFusionConstant"),Object(o.b)("h1",{id:"constant"},"Constant"),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"constant"),"\xa0operator is used to create properties without parameters which always return the same value. This value can be\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionStatic_objects"}),"static objects"),"\xa0of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionUser_classes"}),"custom"),"\xa0and\xa0built-in\xa0classes as well as the special\xa0",Object(o.b)("strong",{parentName:"p"},"NULL")," value.\xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Language")),Object(o.b)("p",null,"Static objects of custom classes are specified as\xa0",Object(o.b)("strong",{parentName:"p"},"<","class name",">",".","<","object name",">"),"."),Object(o.b)("p",null,"Static objects of built-in classes are specified by special ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionLiterals"}),"literals"),Object(o.b)("em",{parentName:"p"},".\xa0")),Object(o.b)("p",null,"Examples"),Object(o.b)("p",null,"1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11CLASS Direction {\nnorth, east, south, west // declaring static objects\n}\nisNorth (Direction d) = d == Direction.north; // here a constant property is created from a Direction.north object which is then used by the comparison operator to construct the isNorth property\ndefaultDate() = 1982","_","07","_","13; // here a constant property is created from a literal describing the date\nCLASS Man;\nage 'Age' = DATA INTEGER (Man);\nisChild (Man m) = age(m) ","<"," 17; // here a constant property is used created from an integer (integer literal)"))}l.isMDXComponent=!0},423:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,d=p["".concat(s,".").concat(f)]||p[f]||b[f]||o;return n?a.a.createElement(d,c(c({ref:t},u),{},{components:n})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var u=2;u<o;u++)s[u]=n[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);