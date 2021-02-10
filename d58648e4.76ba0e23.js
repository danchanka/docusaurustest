(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{365:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),c=(n(0),n(419)),s={title:"EXTEND CLASS instruction"},o={unversionedId:"EXTEND_CLASS_instruction",id:"EXTEND_CLASS_instruction",isDocsHomePage:!1,title:"EXTEND CLASS instruction",description:"The EXTEND\xa0CLASS instruction extends\xa0an existing class.",source:"@site/docs\\EXTEND_CLASS_instruction.md",slug:"/EXTEND_CLASS_instruction",permalink:"/docusaurustest/docs/EXTEND_CLASS_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/EXTEND_CLASS_instruction.md",version:"current",sidebar:"docs",previous:{title:"WINDOW instruction",permalink:"/docusaurustest/docs/WINDOW_instruction"},next:{title:"EXTEND FORM instruction",permalink:"/docusaurustest/docs/EXTEND_FORM_instruction"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"EXTEND\xa0CLASS")," instruction ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Class_extension"}),"extends"),"\xa0an existing class."),Object(c.b)("h3",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"EXTEND CLASS name \n[{\n    objectName1 [objectCaption1],\n    ...\n    objectNameM [objectCaptionM]\n}]\xa0\n[: parent1, ..., parentN];\n")),Object(c.b)("h3",{id:"description"},"Description"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"EXTEND\xa0CLASS")," instruction extends an existing ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/User_classes"}),"custom class"),"\xa0with additional parent classes and new",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Static_objects"}),"static objects"),". You can also extend ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/User_classes#abstract-classes"}),"abstract classes")," by adding parent classes to them."),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"name\xa0")),Object(c.b)("p",null,"Class name.\xa0A ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#cid-broken"}),"Composite ID"),".\xa0"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"objectName1, ..., objectNameM")),Object(c.b)("p",null,"Names of new static objects of the specified class. Each name is defined ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#id-broken"}),"by a simple ID"),". Name values are stored in the ",Object(c.b)("strong",{parentName:"p"},"System.staticName")," system property."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"objectCaption1, ..., objectCaptionM")),Object(c.b)("p",null,"Captions of new static objects of the specified class. Each caption is a ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#strliteral-broken"}),"string literal"),". If the caption is not defined, the name of the static object will be its caption. Caption values are stored\xa0in the ",Object(c.b)("strong",{parentName:"p"},"System.staticCaption")," system property."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"parent1, ..., parentN")),Object(c.b)("p",null,"A list of names of new parent classes. Each name is defined\xa0by a composite ID.\xa0"),Object(c.b)("h3",{id:"examples"},"Examples"))}u.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(s,".").concat(d)]||b[d]||l[d]||c;return n?a.a.createElement(m,o(o({ref:t},p),{},{components:n})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,s=new Array(c);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<c;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);