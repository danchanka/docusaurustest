(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{749:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||s;return n?a.a.createElement(d,i(i({ref:t},c),{},{components:n})):a.a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),s=(n(0),n(749)),o={title:"Instruction +="},i={unversionedId:"Instruction_+=",id:"Instruction_+=",isDocsHomePage:!1,title:"Instruction +=",description:"The += instruction adds an implementation (selection option) to an abstract property.",source:"@site/docs/Instruction_+=.md",slug:"/Instruction_+=",permalink:"/docusaurustest/docs/next/Instruction_+=",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Instruction_+=.md",version:"current",sidebar:"docs",previous:{title:"EXTEND FORM instruction",permalink:"/docusaurustest/docs/next/EXTEND_FORM_instruction"},next:{title:"ACTION+ instruction",permalink:"/docusaurustest/docs/next/ACTION+_instruction"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The += instruction adds an implementation (selection option) to an ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Property_extension"},"abstract property"),"."),Object(s.b)("h3",{id:"syntax"},"Syntax"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"propertyId (param1, ..., paramN) += implExpr;\npropertyId (param1, ..., paramN) += WHEN whenExpr THEN implExpr;\n")),Object(s.b)("h3",{id:"description"},"Description"),Object(s.b)("p",null,"The += instruction adds an implementation to an abstract property. The syntax for adding an implementation depends on the type of abstract property. If the abstract property is of type ",Object(s.b)("strong",{parentName:"p"},"CASE"),", then the implementation should be described using ",Object(s.b)("strong",{parentName:"p"},"WHEN ... THEN ...")," otherwise, the implementation should be described simply as a property.\xa0"),Object(s.b)("h3",{id:"parameters"},"Parameters"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"propertyId")),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#propertyid-broken"},"ID")," of the abstract property.\xa0"),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"param1, ..., paramN")),Object(s.b)("p",null,"List of parameters that will be used to define the implementation. Each element is a ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IDs#paramid-broken"},"typed parameter"),". The number of these parameters must be equal to the number of parameters of the abstract property. These parameters can then be used in expressions of the implementation of the abstract property and the selection condition of this implementation."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"implExpr")),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Expression"},"Expression")," whose value determines the implementation of an abstract property."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"whenExpr")),Object(s.b)("p",null,"An expression whose value determines the selection condition of the implementation of an abstract property (action) that has type ",Object(s.b)("strong",{parentName:"p"},"CASE"),".\xa0"),Object(s.b)("h3",{id:"examples"},"Examples"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS ABSTRACT AClass;\nCLASS BClass : AClass;\nCLASS CClass : AClass;\nCLASS DClass : AClass;\n\nname(AClass a) = ABSTRACT BPSTRING[50] (AClass);\ninnerName(BClass b) = DATA BPSTRING[50] (BClass);\ninnerName(CClass c) = DATA BPSTRING[50] (CClass);\ninnerName(DClass d) = DATA BPSTRING[50] (DClass);\n\nname(BClass b) = 'B' + innerName(b);\nname(CClass c) = 'C' + innerName(c);\n\nname[AClass](BClass b) += name(b);\nname(CClass c) += name(c); // Here name[AClass] will be found on the left, because the search goes only among abstract properties, and on the right name[CClass] will be found\nname(DClass d) += 'DClass' + innerName(d) IF d IS DClass;\n")))}l.isMDXComponent=!0}}]);