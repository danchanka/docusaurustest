(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{287:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),c=r(7),o=(r(0),r(424)),a={},l={unversionedId:"LSFUS/lsFusionSearch_SEEK_",id:"LSFUS/lsFusionSearch_SEEK_",isDocsHomePage:!1,title:"lsFusionSearch_SEEK_",description:"lsFusionSearch (SEEK)",source:"@site/docs\\LSFUS\\lsFusionSearch_SEEK_.md",slug:"/LSFUS/lsFusionSearch_SEEK_",permalink:"/docusaurustest/docs/LSFUS/lsFusionSearch_SEEK_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionSearch_SEEK_.md",version:"current"},i=[],s={toc:i};function b(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionsearch-seek"},"lsFusionSearch (SEEK)"),Object(o.b)("h1",{id:"search-seek"},"Search (SEEK)"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Search")," operator tries to make the specified object collection ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"Form-structure_1573069.html#Formstructure-currentObject"}),"current")," for the specified form object group. The objects from the specified object collection shall be called ",Object(o.b)("em",{parentName:"p"},"seek objects"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Seek direction")),Object(o.b)("p",null,"If the object group for which the search is performed contains objects other than search objects, for these objects (which we will call\xa0",Object(o.b)("em",{parentName:"p"},"additional"),") the collection of objects that will be selected as current is determined by special options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"FIRST")," - the\xa0",Object(o.b)("u",null,"first"),"\xa0matching collection according to the specified order will be selected.\xa0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LAST"),"\xa0- the\xa0",Object(o.b)("u",null,"last"),"\xa0matching collection according to the specified order will be selected.\xa0")),Object(o.b)("p",null,"If the required object collection is not found for the seek objects, the current object collection will be the closest to the desired one. The direction in which this closest object collection will be selected is also determined by the above options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"FIRST")," -\xa0the\xa0",Object(o.b)("u",null,"next"),"\xa0closest collection according to the specified order will be selected.\xa0"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LAST")," -\xa0the\xa0",Object(o.b)("u",null,"previous"),"\xa0closest collection according to the specified order will be selected.\xa0")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Setting NULL Values")),Object(o.b)("p",null,"Also, this operator allows resetting all objects of the specified group to ",Object(o.b)("strong",{parentName:"p"},"NULL"),". In this case, the seek direction is not applicable/not specified."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Language")),Object(o.b)("p",null,"To declare an action that implements an object change, use the\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionSEEK_operator"}),Object(o.b)("strong",{parentName:"a"},"SEEK")," operator"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")))}b.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=c.a.createContext({}),b=function(e){var t=c.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=b(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=b(r),d=n,h=u["".concat(a,".").concat(d)]||u[d]||p[d]||o;return r?c.a.createElement(h,l(l({ref:t},s),{},{components:r})):c.a.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);