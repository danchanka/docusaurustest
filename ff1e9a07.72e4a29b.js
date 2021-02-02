(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{414:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(419)),c={title:"Calculated events"},s={unversionedId:"Calculated_events",id:"Calculated_events",isDocsHomePage:!1,title:"Calculated events",description:"Calculated events are events that change the value of a property when the value of some other property (condition) changes to a non-NULL value. Moreover, unlike simple events, this change is not made at the moment the condition is changed but is calculated each time the changed property is accessed. If the property has already been changed in the same session, this change is considered higher priority than the change in the calculated event.",source:"@site/docs\\Calculated_events.md",slug:"/Calculated_events",permalink:"/docusaurustest/docs/Calculated_events",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Calculated_events.md",version:"current",sidebar:"docs",previous:{title:"Simple event",permalink:"/docusaurustest/docs/Simple_event"},next:{title:"Constraints",permalink:"/docusaurustest/docs/Constraints"}},i=[],u={toc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Calculated")," events are events that change the value of a property when the value of some other property (",Object(o.b)("em",{parentName:"p"},"condition"),") changes to a non-",Object(o.b)("strong",{parentName:"p"},"NULL")," value. Moreover, unlike ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Simple_event"}),"simple")," events, this change is not made at the moment the condition is changed but is calculated each time the changed property is accessed. If the property has already been ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Property_%D1%81hange_CHANGE_"}),"changed")," in the same session, this change is considered higher priority than the change in the calculated event."),Object(o.b)("p",null,"For each property, there can only be one calculated event that changes this property. \xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Language")),Object(o.b)("p",null,"To define calculated events, use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Instruction_-_WHEN"}),"the ",Object(o.b)("strong",{parentName:"a"},"<","- WHEN")," instruction"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")))}l.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,b=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?a.a.createElement(b,s(s({ref:t},u),{},{components:n})):a.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);