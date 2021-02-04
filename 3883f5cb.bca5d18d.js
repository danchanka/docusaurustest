(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{151:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return m}));var a=r(3),n=r(7),o=(r(0),r(419)),s={title:"Metaprogramming"},c={unversionedId:"Metaprogramming",id:"Metaprogramming",isDocsHomePage:!1,title:"Metaprogramming",description:"Metaprogramming is a type of programming associated with writing software code that results in the generation of more software code. Metaprogramming is used for code reusability and to speed up development.",source:"@site/docs\\Metaprogramming.md",slug:"/Metaprogramming",permalink:"/docusaurustest/docs/Metaprogramming",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Metaprogramming.md",version:"current",sidebar:"docs",previous:{title:"Form extension",permalink:"/docusaurustest/docs/Form_extension"},next:{title:"Integration",permalink:"/docusaurustest/docs/Integration"}},i=[],p={toc:i};function m(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Metaprogramming")," is a type of programming associated with writing software code that results in the generation of more software code. Metaprogramming is used for code reusability and to speed up development. \xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Metacode")),Object(o.b)("p",null,"In l",Object(o.b)("strong",{parentName:"p"},"sFusion\xa0"),"the metaprogramming tool used is ",Object(o.b)("em",{parentName:"p"},"metacode"),", which is\xa0described by the\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/META_instruction"}),Object(o.b)("strong",{parentName:"a"},"META")," instruction"),".\xa0Metacode consists of a header and an ",Object(o.b)("strong",{parentName:"p"},"lsFusion")," code block describing the\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Instructions"}),"instruction")," sequence.**\xa0",Object(o.b)("strong",{parentName:"p"},"This code block must end with the keyword "),"END**.\xa0Let us consider an example of metacode that allows you to add two ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"actions")," to an arbitrary ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Forms"}),"form"),":"),Object(o.b)("p",null,"The first line of the example contains the metacode header. It consists of the keyword ",Object(o.b)("strong",{parentName:"p"},"META"),", metacode name, and parameter list. In this example, the metacode ",Object(o.b)("strong",{parentName:"p"},"addActions")," has one parameter: ",Object(o.b)("strong",{parentName:"p"},"formName"),". This is the name of the form to which the actions will be added. Let's consider the possible uses for this metacode, which are described by the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Instruction_"}),"instruction @"),".\xa0"),Object(o.b)("p",null,"The instruction to use metacode starts with the special symbol @, followed by the name of the metacode and the parameters passed. When generating the code, each metacode parameter is replaced by the value passed as a parameter of the @ instruction in all places where the metacode parameter is used. In this example, the metacode parameter\xa0",Object(o.b)("strong",{parentName:"p"},"formName")," will be replaced with ",Object(o.b)("strong",{parentName:"p"},"documentForm")," and ",Object(o.b)("strong",{parentName:"p"},"orderForm"),". The above metacode uses generate the following code block:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Lexeme concatenation\xa0")),Object(o.b)("p",null,"Simply substituting an ID for a metacode parameter is often not enough. For example, when creating a large number of new ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Element_identification"}),"system elements"),"\xa0inside the metacode, you must be able to specify these new names. Passing all the names as metacode parameters can be inconvenient. For this reason the metacode contains the special operation ","#","#",", which operates at the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Tokens"}),"tokens")," level. This operation can concatenate two adjacent lexemes into one. If one of the concatenated lexemes is a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"Literals_35521071.html#Literals-strliteral"}),"string literal"),", the concatenation will result in a single string literal."),Object(o.b)("p",null,"Using the metacode ",Object(o.b)("strong",{parentName:"p"},"objectProperties")," produces the following code:"),Object(o.b)("p",null,"There is also the special operation ","#","#","#",". It is equivalent to operation ","#","#",", except that in the second of the concatenated literals, the first character, if a letter, is converted to uppercase."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")))}m.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),m=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=m(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,b=u["".concat(s,".").concat(d)]||u[d]||l[d]||o;return r?n.a.createElement(b,c(c({ref:t},p),{},{components:r})):n.a.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=r[p];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);