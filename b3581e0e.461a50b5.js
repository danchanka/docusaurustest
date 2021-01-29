(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{318:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(424)),s={title:"Constraints"},c={unversionedId:"LSFUS/Constraints",id:"LSFUS/Constraints",isDocsHomePage:!1,title:"Constraints",description:"Constraints in the platform determine which values the dataproperties can have and which cannot. In general, a constraint is defined as a property which value should always be NULL.",source:"@site/docs\\LSFUS\\Constraints.md",slug:"/LSFUS/Constraints",permalink:"/docusaurustest/docs/LSFUS/Constraints",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/Constraints.md",version:"current"},i=[],p={toc:i};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Constraints in the platform determine which values the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Data_properties_DATA_"}),"data"),Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Properties"}),"properties")," can have and which cannot. In general, a constraint is defined as a property which value should always be ",Object(o.b)("strong",{parentName:"p"},"NULL"),"."),Object(o.b)("p",null,"In fact, a constraint is a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Simple_event"}),"simple event"),", where condition\xa0is the constrained property and handling is ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#Constraints-message"}),"showing")," all the non-",Object(o.b)("strong",{parentName:"p"},"NULL")," values (in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"57737722.html#Inaprintview(PRINT)-interactive"}),"asynchronous message")," mode) and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Cancel_changes_CANCEL_"}),"canceling"),"\xa0all the changes. As well as for a simple event, you need to specify a base\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Events"}),"event"),", which determines when the defined constraint is checked.\xa0"),Object(o.b)("p",null,"Compared to implementation via simple events, constraints have a set of additional advantages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'There is a global checking procedure upon a working database for constraints (similarly to "recalculation" technique in simple events which is not applicable here as long as the handler\xa0contains\xa0the cancel changes operator)'),Object(o.b)("li",{parentName:"ul"},"Constraints are more understandable and readable since, unlike simple events, they emphasize the static/declarative nature of these rules, i.e. their independence from the moment in time."),Object(o.b)("li",{parentName:"ul"},"You can use the created constraint when showing dialogs for changing properties used in this constraint. In this case, an additional filter will be set in the dialog so that, when the property value changes to the selected one, the constraint is not violated.")),Object(o.b)("p",null,"Note that in some cases, instead of showing a message to the user and canceling the transaction, it is necessary, for example, to automatically resolve the violated constraint. In that case, it is recommended to use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Simple_constraints"}),"simple constraints"),", or, if it is impossible, simple events."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Show message")),Object(o.b)("p",null,"For any non-",Object(o.b)("strong",{parentName:"p"},"NULL")," value\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/In_a_print_view_PRINT_"}),"output")," the platform uses an\xa0automatically generated\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Forms"}),"form"),", consisting of:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"one\xa0",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"Form-structure_1573069.html#Formstructure-objects"}),"group of objects")," with the objects corresponding to the parameters of the constrained property."),Object(o.b)("li",{parentName:"ul"},"properties with the matching classes belonging to the ",Object(o.b)("strong",{parentName:"li"},"System.recognize")," ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/LSFUS/Groups_of_properties_and_actions"}),"property group"),"."),Object(o.b)("li",{parentName:"ul"},"a ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"Form-structure_1573069.html#Formstructure-filters"}),"filter")," equal to the constrained property."),Object(o.b)("li",{parentName:"ul"},"a global message defined by the developer when creating the constraint.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Language")),Object(o.b)("p",null,"Constraints are created using the\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/CONSTRAINT_instruction"}),Object(o.b)("strong",{parentName:"a"},"CONSTRAINT")," instruction"),".\xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")))}l.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);