(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{414:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),c=(n(0),n(419)),o={title:"Calculated events"},s={unversionedId:"Calculated_events",id:"Calculated_events",isDocsHomePage:!1,title:"Calculated events",description:"Calculated events are events that change the value of a property when the value of some other property (condition) changes to a non-NULL value. Moreover, unlike simple events, this change is not made at the moment the condition is changed but is calculated each time the changed property is accessed. If the property has already been changed in the same session, this change is considered higher priority than the change in the calculated event.",source:"@site/docs\\Calculated_events.md",slug:"/Calculated_events",permalink:"/docusaurustest/docs/Calculated_events",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Calculated_events.md",version:"current",sidebar:"docs",previous:{title:"Simple event",permalink:"/docusaurustest/docs/Simple_event"},next:{title:"Constraints",permalink:"/docusaurustest/docs/Constraints"}},i=[],u={toc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Calculated")," events are events that change the value of a property when the value of some other property (",Object(c.b)("em",{parentName:"p"},"condition"),") changes to a non-",Object(c.b)("strong",{parentName:"p"},"NULL")," value. Moreover, unlike ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Simple_event"}),"simple")," events, this change is not made at the moment the condition is changed but is calculated each time the changed property is accessed. If the property has already been ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Property_change_CHANGE_"}),"changed")," in the same session, this change is considered higher priority than the change in the calculated event."),Object(c.b)("p",null,"For each property, there can only be one calculated event that changes this property. \xa0"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Language")),Object(c.b)("p",null,"To define calculated events, use ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Instruction_-_WHEN"}),"the ",Object(c.b)("strong",{parentName:"a"},"<- WHEN")," instruction"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Examples")))}l.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,b=p["".concat(o,".").concat(h)]||p[h]||d[h]||c;return n?a.a.createElement(b,s(s({ref:t},u),{},{components:n})):a.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<c;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);