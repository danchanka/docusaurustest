(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(424)),c={title:"Class change (CHANGECLASS, DELETE)"},s={unversionedId:"LSFUS/Class_change_CHANGECLASS_DELETE_",id:"LSFUS/Class_change_CHANGECLASS_DELETE_",isDocsHomePage:!1,title:"Class change (CHANGECLASS, DELETE)",description:"The\xa0class change\xa0operator creates an action that assigns the given\xa0class to all objects where value of a particular\xa0property\xa0(condition) is not equal to\xa0NULL. The condition can be omitted, in which case it is considered to be equal to TRUE.",source:"@site/docs\\LSFUS\\Class_change_CHANGECLASS_DELETE_.md",slug:"/LSFUS/Class_change_CHANGECLASS_DELETE_",permalink:"/docusaurustest/docs/LSFUS/Class_change_CHANGECLASS_DELETE_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/Class_change_CHANGECLASS_DELETE_.md",version:"current"},i=[],p={toc:i};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The\xa0",Object(o.b)("em",{parentName:"p"},"class change"),"\xa0operator creates an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Actions"}),"action")," that assigns the given\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Classes"}),"class")," to all objects where value of a particular\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Properties"}),"property"),"\xa0(",Object(o.b)("em",{parentName:"p"},"condition"),") is not equal to\xa0",Object(o.b)("strong",{parentName:"p"},"NULL"),". The condition can be omitted, in which case it is considered to be equal to ",Object(o.b)("strong",{parentName:"p"},"TRUE"),". \xa0"),Object(o.b)("p",null,"The platform also has a builtin\xa0changeClass\xa0action with two parameters: the first defines the object for which you want to change the class, and the second defines an object of the new class. Since it is much more difficult to determine the possible values of a new class when using the builtin action than in the case of an operator (for which the new class is specified explicitly), it is recommended that you use the operator (and not the builtin action)"),Object(o.b)("p",null,"If there is a non-",Object(o.b)("strong",{parentName:"p"},"NULL")," value of some ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Data_properties_DATA_"}),"data property"),' for which the "changed" object is either its parameter or the value itserf, then this value is automatically changed to ',Object(o.b)("strong",{parentName:"p"},"NULL"),"."),Object(o.b)("p",null,"This behavior is implemented by analogy with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Calculated_events"}),"computed")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Simple_event"}),"simple")," events."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Language")),Object(o.b)("p",null,"To declare an action that implements a change of object classes, use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/CHANGECLASS_operator"}),Object(o.b)("strong",{parentName:"a"},"CHANGECLASS")," operator")," or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/DELETE_operator"}),"the ",Object(o.b)("strong",{parentName:"a"},"DELETE")," operator"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")))}u.isMDXComponent=!0},424:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(a),h=n,d=l["".concat(c,".").concat(h)]||l[h]||b[h]||o;return a?r.a.createElement(d,s(s({ref:t},p),{},{components:a})):r.a.createElement(d,s({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var p=2;p<o;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);