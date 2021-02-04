(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(419)),c={title:"How-to: Property extension"},s={unversionedId:"How-to_Property_extension",id:"How-to_Property_extension",isDocsHomePage:!1,title:"How-to: Property extension",description:"The classic approach for implementing polymorphism can look as follows:",source:"@site/docs\\How-to_Property_extension.md",slug:"/How-to_Property_extension",permalink:"/docusaurustest/docs/How-to_Property_extension",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_Property_extension.md",version:"current",sidebar:"docs",previous:{title:"How-to: Class extension",permalink:"/docusaurustest/docs/How-to_Class_extension"},next:{title:"How-to: Action extension",permalink:"/docusaurustest/docs/How-to_Action_extension"}},i=[],p={toc:i};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The classic approach for implementing polymorphism can look as follows:"),Object(a.b)("p",null,"Let's create an abstract class ",Object(a.b)("strong",{parentName:"p"},"Shape")," with an abstract property ",Object(a.b)("strong",{parentName:"p"},"square"),":"),Object(a.b)("p",null,"Now, let's create classes ",Object(a.b)("strong",{parentName:"p"},"Rectangle\xa0"),"and ",Object(a.b)("strong",{parentName:"p"},"Circle")," inherited from ",Object(a.b)("strong",{parentName:"p"},"Shape"),":"),Object(a.b)("p",null,"Define the implementation of the abstract property ",Object(a.b)("strong",{parentName:"p"},"square\xa0")," for the created classes:"),Object(a.b)("p",null,"Let's assume that we need to make it so that in certain cases we can override the method of calculating the area for the ",Object(a.b)("strong",{parentName:"p"},"Circle"),' class. In this case, we can use an abstract property, whose implementation can be changed in a different module, to add a kind of "entry point" to the line defining the implementation of area for a circle :'),Object(a.b)("p",null,"If the ",Object(a.b)("strong",{parentName:"p"},"overSquareCircle")," property is not implemented in any module, its value will always be ",Object(a.b)("strong",{parentName:"p"},"NULL")," and the base area calculation mechanism will be used. To change the calculation method to be used, you can define a different implementation in a certain ",Object(a.b)("strong",{parentName:"p"},"MyShape")," module."),Object(a.b)("p",null,"Note that you can use any other expressions instead of the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/OVERRIDE_operator"}),"OVERRIDE operator"),". In particular, ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Arithmetic_operators_+_-_..._"}),"(+) and (-)")," may be the most frequently used operators."))}l.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||a;return n?o.a.createElement(d,s(s({ref:t},p),{},{components:n})):o.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);