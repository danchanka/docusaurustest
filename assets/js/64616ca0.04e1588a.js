(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{349:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return m}));var a=n(3),o=n(7),r=(n(0),n(749)),c={title:"Metaprogramming"},s={unversionedId:"Metaprogramming",id:"Metaprogramming",isDocsHomePage:!1,title:"Metaprogramming",description:"Metaprogramming is a type of programming associated with writing software code that results in the generation of more software code. Metaprogramming is used for code reusability and to speed up development.",source:"@site/docs/Metaprogramming.md",slug:"/Metaprogramming",permalink:"/docusaurustest/docs/next/Metaprogramming",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Metaprogramming.md",version:"current",sidebar:"docs",previous:{title:"Form extension",permalink:"/docusaurustest/docs/next/Form_extension"},next:{title:"Integration: Overview",permalink:"/docusaurustest/docs/next/Integration"}},i=[{value:"Metacode",id:"metacode",children:[]},{value:"Lexeme concatenation",id:"concat",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:i};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Metaprogramming")," is a type of programming associated with writing software code that results in the generation of more software code. Metaprogramming is used for code reusability and to speed up development. \xa0"),Object(r.b)("h3",{id:"metacode"},"Metacode"),Object(r.b)("p",null,"In l",Object(r.b)("strong",{parentName:"p"},"sFusion\xa0"),"the metaprogramming tool used is ",Object(r.b)("em",{parentName:"p"},"metacode"),", which is\xa0described by the\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/META_instruction"},Object(r.b)("strong",{parentName:"a"},"META")," instruction"),".\xa0Metacode consists of a header and an ",Object(r.b)("strong",{parentName:"p"},"lsFusion")," code block describing the\xa0",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Instructions"},"instruction")," sequence.**\xa0",Object(r.b)("strong",{parentName:"p"},"This code block must end with the keyword "),"END**.\xa0Let us consider an example of metacode that allows you to add two ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Actions"},"actions")," to an arbitrary ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Forms"},"form"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"META addActions(formName)\n    EXTEND FORM formName\n        PROPERTIES() showMessage, closeForm\n    ;\nEND\n")),Object(r.b)("p",null,"The first line of the example contains the metacode header. It consists of the keyword ",Object(r.b)("strong",{parentName:"p"},"META"),", metacode name, and parameter list. In this example, the metacode ",Object(r.b)("strong",{parentName:"p"},"addActions")," has one parameter: ",Object(r.b)("strong",{parentName:"p"},"formName"),". This is the name of the form to which the actions will be added. Let's consider the possible uses for this metacode, which are described by the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Instruction_"},"instruction @"),".\xa0"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"@addActions(documentForm);\n@addActions(orderForm);\n")),Object(r.b)("p",null,"The instruction to use metacode starts with the special symbol @, followed by the name of the metacode and the parameters passed. When generating the code, each metacode parameter is replaced by the value passed as a parameter of the @ instruction in all places where the metacode parameter is used. In this example, the metacode parameter\xa0",Object(r.b)("strong",{parentName:"p"},"formName")," will be replaced with ",Object(r.b)("strong",{parentName:"p"},"documentForm")," and ",Object(r.b)("strong",{parentName:"p"},"orderForm"),". The above metacode uses generate the following code block:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"EXTEND FORM documentForm\n    PROPERTIES() showMessage, closeForm\n;\n\nEXTEND FORM orderForm\n    PROPERTIES() showMessage, closeForm\n;\n")),Object(r.b)("h3",{id:"concat"},"Lexeme concatenation"),Object(r.b)("p",null,"Simply substituting an ID for a metacode parameter is often not enough. For example, when creating a large number of new ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Element_identification"},"system elements"),"\xa0inside the metacode, you must be able to specify these new names. Passing all the names as metacode parameters can be inconvenient. For this reason the metacode contains the special operation ","#","#",", which operates at the ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Tokens"},"tokens")," level. This operation can concatenate two adjacent lexemes into one. If one of the concatenated lexemes is a ",Object(r.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Literals#strliteral-broken"},"string literal"),", the concatenation will result in a single string literal."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"META objectProperties(object, caption)\n    object##Name 'Name '##caption = DATA BPSTRING[100](object);\n    object##Type 'Type '##caption = DATA Type (object);\n    object##Value 'Cost '##caption = DATA INTEGER (object);\nEND\n\n@objectProperties(Document, 'of the document');\n")),Object(r.b)("p",null,"Using the metacode ",Object(r.b)("strong",{parentName:"p"},"objectProperties")," produces the following code:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"DocumentName 'Document name' = DATA BPSTRING[100](Document);\nDocumentType 'Document type' = DATA Type (Document);\nDocumentValue 'Document cost' = DATA INTEGER (Document);\n")),Object(r.b)("p",null,"There is also the special operation ","#","#","#",". It is equivalent to operation ","#","#",", except that in the second of the concatenated literals, the first character, if a letter, is converted to uppercase."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lsf"},"META objectProperties(object, type, caption)\n    object##Name 'Name'##caption = DATA BPSTRING[100](###object-broken); // capitalizing the first letter\n    object##Type 'Type'##caption = DATA type (###object-broken);\n    object##Value 'Cost'##caption = DATA INTEGER (###object-broken);\nEND\n\nMETA objectProperties(object, type)\n    @objectProperties(object, type, '');\nEND\n")))}m.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),m=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=m(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=m(n),d=a,b=l["".concat(c,".").concat(d)]||l[d]||u[d]||r;return n?o.a.createElement(b,s(s({ref:t},p),{},{components:n})):o.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var p=2;p<r;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);