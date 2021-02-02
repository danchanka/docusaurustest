(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{356:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(419)),o={title:"Event block"},b={unversionedId:"Event_block",id:"Event_block",isDocsHomePage:!1,title:"Event block",description:"The event block of the \xa0FORM instruction\xa0- a set of constructions controlling events in an interactive form view.",source:"@site/docs\\Event_block.md",slug:"/Event_block",permalink:"/docusaurustest/docs/Event_block",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Event_block.md",version:"current",sidebar:"docs",previous:{title:"Filters and sortings block",permalink:"/docusaurustest/docs/Filters_and_sortings_block"},next:{title:"DESIGN instruction",permalink:"/docusaurustest/docs/DESIGN_instruction"}},l=[],i={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The event block of the \xa0",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/FORM_instruction"}),"FORM instruction"),"\xa0- a set of constructions controlling ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Form_events"}),"events")," in an interactive form view."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Syntax")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"EVENTS\xa0formEventDecl1, ..., formEventDeclN\n")),Object(c.b)("p",null,"Where each ",Object(c.b)("em",{parentName:"p"},"formEventDecli")," has the following syntax:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"ON eventType eventActionId(param1, ..., paramK) | { eventActionOperator }\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Description")),Object(c.b)("p",null,"The event block allows to define handlers for ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Form_events"}),"form events")," that occur as the result of certain user actions. Each block can have an arbitrary number of comma-separated event handlers. If several handlers\xa0are defined for an event, they are guaranteed to be executed in the order they are defined.\xa0"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters\xa0")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"eventType")),Object(c.b)("p",null,"Type of form event. It is specified with one of the following keywords:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"INIT"),"\xa0"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"OK")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"OK BEFORE")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"OK AFTER")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"APPLY")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"APPLY BEFORE"),"\xa0"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"APPLY AFTER"),"\xa0"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"CANCEL")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"CLOSE")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"DROP")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"CHANGE")," objName \u2013 specifies that the action will be executed when the object\xa0",Object(c.b)("em",{parentName:"li"},"objName")," is changed."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"QUERYOK")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"QUERYCANCEL"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"eventActionId")),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-propertyid"}),"ID of the action"),",\xa0that will be the event handler."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"param1, ..., paramK")),Object(c.b)("p",null,"List of action parameters. Each parameter is specified with the\xa0object name on the form.\xa0The object\xa0name, in turn, is specified with a\xa0",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id-%D0%98%D0%B4%D0%B5%D0%BD%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80%D1%8B-id"}),"simple ID"),"."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"actionOperator")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-id-%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B-%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F-contextdependent"}),"Context-dependent action operator"),". You can use the names of already declared objects on the form as parameters."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Examples")),Object(c.b)("hr",null),Object(c.b)("hr",null),Object(c.b)("hr",null),Object(c.b)("hr",null),Object(c.b)("hr",null))}p.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,O=s["".concat(o,".").concat(m)]||s[m]||u[m]||c;return n?a.a.createElement(O,b(b({ref:t},i),{},{components:n})):a.a.createElement(O,b({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var i=2;i<c;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);