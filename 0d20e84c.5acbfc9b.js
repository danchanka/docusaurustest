(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{424:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),i=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=i(n),b=r,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||c;return n?a.a.createElement(f,s(s({ref:t},l),{},{components:n})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return i}));var r=n(3),a=n(7),c=(n(0),n(424)),o={},s={unversionedId:"LSFUS/Calculated_events",id:"LSFUS/Calculated_events",isDocsHomePage:!1,title:"Calculated_events",description:"lsFusionCalculated events",source:"@site/docs\\LSFUS\\Calculated_events.md",slug:"/LSFUS/Calculated_events",permalink:"/docusaurustest/docs/LSFUS/Calculated_events",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/Calculated_events.md",version:"current"},u=[],l={toc:u};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"lsfusioncalculated-events"},"lsFusionCalculated events"),Object(c.b)("h1",{id:"calculated-events"},"Calculated events"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Calculated")," events are events that change the value of a property when the value of some other property (",Object(c.b)("em",{parentName:"p"},"condition"),") changes to a non-",Object(c.b)("strong",{parentName:"p"},"NULL")," value. Moreover, unlike ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Simple_event"}),"simple")," events, this change is not made at the moment the condition is changed but is calculated each time the changed property is accessed. If the property has already been ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Property_%D1%81hange_CHANGE_"}),"changed")," in the same session, this change is considered higher priority than the change in the calculated event."),Object(c.b)("p",null,"For each property, there can only be one calculated event that changes this property. \xa0"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Language")),Object(c.b)("p",null,"To define calculated events, use ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Instruction_-_WHEN"}),"the ",Object(c.b)("strong",{parentName:"a"},"<","- WHEN")," instruction"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Examples")))}i.isMDXComponent=!0}}]);