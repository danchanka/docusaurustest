(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{384:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(419)),s={title:"CLASS instruction"},o={unversionedId:"CLASS_instruction",id:"CLASS_instruction",isDocsHomePage:!1,title:"CLASS instruction",description:"CLASS\xa0instruction creates a new custom class.",source:"@site/docs\\CLASS_instruction.md",slug:"/CLASS_instruction",permalink:"/docusaurustest/docs/CLASS_instruction",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CLASS_instruction.md",version:"current",sidebar:"docs",previous:{title:"Instruction=>",permalink:"/docusaurustest/docs/Instruction="},next:{title:"FORM instruction",permalink:"/docusaurustest/docs/FORM_instruction"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:i};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"CLASS\xa0"),"instruction creates a new ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/User_classes"}),"custom class"),"."),Object(c.b)("h3",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"CLASS ABSTRACT name [caption] [: parent1, ..., parentN];\n\xa0\nCLASS name [caption]\xa0\n[{\n    objectName1 [objectCaption1],\n    ...\n    objectNameM [objectCaptionM]\n}]\xa0\n[: parent1, ..., parentN];\n")),Object(c.b)("h3",{id:"description"},"Description"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"CLASS")," instruction declares a new class and adds it to the current ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Modules"}),"module"),".\xa0"),Object(c.b)("p",null,"The instruction has two forms: \xa0",Object(c.b)("strong",{parentName:"p"},"CLASS ABSTRACT")," for declaring an ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"User-classes_2228341.html#Userclasses-abstract"}),"abstract class")," and just\xa0",Object(c.b)("strong",{parentName:"p"},"CLASS"),"\xa0for declaring a concrete class. In the latter case, during declaration, you can declare the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Static_objects"}),"static objects"),"\xa0 of this class and specify their names and captions in a curly brackets block. \xa0\xa0"),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"name\xa0")),Object(c.b)("p",null,"Class name. ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-id"}),"Simple ID"),".\xa0The name must be unique within the current\xa0",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"Naming_35521066.html#Naming-namespace"}),"namespace"),"."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"caption")),Object(c.b)("p",null,"Class header. ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"Literals_35521071.html#Literals-strliteral"}),"String literal"),". If the caption is not defined, the name of the class will be its caption. \xa0"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"objectName1, ..., objectNameM")),Object(c.b)("p",null,"The names of ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Static_objects"}),"static")," objects of this class. Each name is defined by a simple ID. Name values are stored in the ",Object(c.b)("strong",{parentName:"p"},"System.staticName")," system property."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"objectCaption1, ..., objectCaptionM")),Object(c.b)("p",null,"Captions of static objects of this class. Each caption is a string literal. If the caption is not defined, the name of the static object will be its caption. Caption values are stored\xa0in the ",Object(c.b)("strong",{parentName:"p"},"System.staticCaption")," system property."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"parent1, ..., parentN")),Object(c.b)("p",null,"List of parent class names. Each name is defined by a\xa0",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-cid"}),"composite ID"),".\xa0If the list of parent classes is not specified, the class is inherited from the ",Object(c.b)("strong",{parentName:"p"},"System.Object")," class.\xa0\xa0"),Object(c.b)("h3",{id:"examples"},"Examples"),Object(c.b)("p",null,"**",Object(c.b)("br",{parentName:"p"}),"\n","**"))}b.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=b(n),m=a,d=l["".concat(s,".").concat(m)]||l[m]||u[m]||c;return n?r.a.createElement(d,o(o({ref:t},p),{},{components:n})):r.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,s=new Array(c);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<c;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);