(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(424)),c={},p={unversionedId:"LSFUS/lsFusionIF_..._THEN_operator",id:"LSFUS/lsFusionIF_..._THEN_operator",isDocsHomePage:!1,title:"lsFusionIF_..._THEN_operator",description:"lsFusionIF ... THEN operator",source:"@site/docs\\LSFUS\\lsFusionIF_..._THEN_operator.md",slug:"/LSFUS/lsFusionIF_..._THEN_operator",permalink:"/docusaurustest/docs/LSFUS/lsFusionIF_..._THEN_operator",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/LSFUS/lsFusionIF_..._THEN_operator.md",version:"current"},i=[],s={toc:i};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lsfusionif--then-operator"},"lsFusionIF ... THEN operator"),Object(a.b)("h1",{id:"if--then-operator"},"IF ... THEN operator"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"IF ... THEN")," operator creates a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionProperties"}),"property")," that implements ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionSelection_CASE_IF_MULTI_OVERRIDE_EXCLUSIVE_"}),"selection"),"\xa0with one condition (single form)."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"IF condition \n    THEN value\n    [ELSE alternativeValue]\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description")),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"IF ... THEN")," operator creates an action that implements conditional selection. The condition is defined using a property. If this condition is met, that is, the value of the property does not equal\xa0",Object(a.b)("strong",{parentName:"p"},"NULL"),", then the value of the created property will be the value of the property specified in the ",Object(a.b)("strong",{parentName:"p"},"THEN")," block; otherwise, the value will be the value of the property in the ",Object(a.b)("strong",{parentName:"p"},"ELSE")," block, or ",Object(a.b)("strong",{parentName:"p"},"NULL")," if no ",Object(a.b)("strong",{parentName:"p"},"ELSE")," block was specified.**\xa0**"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"condition")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionExpression"}),"Expression")," defining a condition.\xa0"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"value")),Object(a.b)("p",null,"An expression whose value will be the value of the created property if the condition is met."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"alternativeValue")),Object(a.b)("p",null,"An expression whose value will be the value of the created property if the condition is not met."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples")),Object(a.b)("hr",null),Object(a.b)("p",null,"**",Object(a.b)("br",{parentName:"p"}),"\n","**"))}l.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,O=u["".concat(c,".").concat(f)]||u[f]||b[f]||a;return n?o.a.createElement(O,p(p({ref:t},s),{},{components:n})):o.a.createElement(O,p({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);