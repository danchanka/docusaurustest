(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{293:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(749)),c={title:"How-to: IF/CASE"},i={unversionedId:"How-to_IF_CASE",id:"How-to_IF_CASE",isDocsHomePage:!1,title:"How-to: IF/CASE",description:"Example 1",source:"@site/docs/How-to_IF_CASE.md",slug:"/How-to_IF_CASE",permalink:"/docusaurustest/docs/next/How-to_IF_CASE",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_IF_CASE.md",version:"current",sidebar:"docs",previous:{title:"How-to: FOR",permalink:"/docusaurustest/docs/next/How-to_FOR"},next:{title:"How-to: WHILE",permalink:"/docusaurustest/docs/next/How-to_WHILE"}},l=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have a list of books associated with certain categories. Each book is assigned a price."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[50] (Book);\n\nCLASS Category 'Category' {\n    novel 'Novel',\n    thriller 'Thriller',\n    fiction 'Fiction'\n}\n\ncategory 'Category' = DATA Category (Book);\nprice 'Price' = DATA NUMERIC[14,2] (Book);\n")),Object(a.b)("p",null,"We need to create an action that sets a given price for books associated with the specific category and a fixed price for all other books. When no category is selected, the error message must appear."),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"setPriceIf 'Set price' (Book b)  {\n    IF NOT category(b) THEN\n        MESSAGE 'No category selected for the book';\n    ELSE\n        IF category(b) == Category.novel THEN\n            price(b) <- 50.0;\n        ELSE\n            price(b) <- 100.0;\n}\n")),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"Similar to\xa0",Object(a.b)("strong",{parentName:"p"},"Example 1"),"."),Object(a.b)("p",null,"We need to create an action that sets pre-defined prices for books associated with any of the three categories and sets zero price for all other books."),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"setPriceCase 'Set price' (Book b)  {\n    CASE\n        WHEN category(b) == Category.novel THEN\n            price(b) <- 50.0;\n        WHEN category(b) == Category.thriller THEN\n            price(b) <- 100.0;\n        WHEN category(b) == Category.fiction THEN\n            price(b) <- 150.0;\n    ELSE\n        price(b) <- 0.0;\n}\n")))}p.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return n?r.a.createElement(f,i(i({ref:t},s),{},{components:n})):r.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);