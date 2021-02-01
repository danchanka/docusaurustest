(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{329:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var s=n(3),a=n(7),r=(n(0),n(424)),c={title:"Classes"},i={unversionedId:"LSFUS/Classes",id:"LSFUS/Classes",isDocsHomePage:!1,title:"Classes",description:"The base element in lsFusion is the object. Each object is an instance of some\xa0class, which determines the qualities of all its instances. Classes in turn can be divided into built-in classes, which are responsible for primitive data types, and user classes.",source:"@site/docs\\LSFUS\\Classes.md",slug:"/LSFUS/Classes",permalink:"/docusaurustest/docs/LSFUS/Classes",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/Classes.md",version:"current",sidebar:"docs",previous:{title:"Simple constraints",permalink:"/docusaurustest/docs/LSFUS/Simple_constraints"},next:{title:"Built-in classes",permalink:"/docusaurustest/docs/LSFUS/Built-in_classes"}},o=[],l={toc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(s.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The base element in ",Object(r.b)("strong",{parentName:"p"},"lsFusion")," is the object. Each object is an ",Object(r.b)("em",{parentName:"p"},"instance")," of some\xa0",Object(r.b)("em",{parentName:"p"},"class"),", which determines the qualities of all its instances. Classes in turn can be divided into ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Built-in_classes"}),"built-in classes"),", which are responsible for primitive data types, and ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/User_classes"}),"user classes"),".\xa0"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Inheritance")),Object(r.b)("p",null,"Classes can ",Object(r.b)("em",{parentName:"p"},"inherit")," from each other.\xa0When class\xa0",Object(r.b)("strong",{parentName:"p"},"B"),"\xa0inherits from class\xa0",Object(r.b)("strong",{parentName:"p"},"A"),",\xa0class\xa0",Object(r.b)("strong",{parentName:"p"},"A")," shall be called the\xa0",Object(r.b)("em",{parentName:"p"},"parent"),", and class\xa0",Object(r.b)("strong",{parentName:"p"},"B"),"\xa0shall be called the ",Object(r.b)("em",{parentName:"p"},"child"),"."),Object(r.b)("p",null,"The idea of inheritance is as follows: if class\xa0",Object(r.b)("strong",{parentName:"p"},"B"),"\xa0inherits from class\xa0",Object(r.b)("strong",{parentName:"p"},"A"),", then all instances of class\xa0",Object(r.b)("strong",{parentName:"p"},"B\xa0"),"will have all the qualities of class\xa0",Object(r.b)("strong",{parentName:"p"},"A"),".\xa0Thus, with inheritance, each class determines the qualities not only of all instances of this class but also of all instances of this class descendants. \xa0"),Object(r.b)("p",null,"Let's say that an object ",Object(r.b)("em",{parentName:"p"},"belongs to"),"\xa0class\xa0",Object(r.b)("strong",{parentName:"p"},"A")," if that object is either an instance of class ",Object(r.b)("strong",{parentName:"p"},"A")," or an instance of a class ",Object(r.b)("strong",{parentName:"p"},"A")," descendant. \xa0"),Object(r.b)("p",null,"To implement polymorphism, inheritance is usually used together with properties and actions extension mechanism.\xa0"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Class limitations")),Object(r.b)("p",null,"The class mechanism has several limitations:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Belonging to a class cannot be calculated (only set explicitly when\xa0creating\xa0and\xa0changing the class) of an object."),Object(r.b)("li",{parentName:"ol"},"A class is set for only one object (not for an object collection)."),Object(r.b)("li",{parentName:"ol"},"It is not possible to inherit the same class multiple times.")),Object(r.b)("p",null,"Accordingly, if the class mechanism is not sufficient,\xa0the platform also supports the\xa0aggregation mechanism, which together with inheritance allows implementing almost any polymorphic logic."))}p.isMDXComponent=!0},424:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var s=n(0),a=n.n(s);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=p(n),m=s,h=b["".concat(c,".").concat(m)]||b[m]||u[m]||r;return n?a.a.createElement(h,i(i({ref:t},l),{},{components:n})):a.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,c=new Array(r);c[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);