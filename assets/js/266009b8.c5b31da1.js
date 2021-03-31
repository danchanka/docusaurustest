(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(749)),i={title:"How-to: Data entry"},s={unversionedId:"How-to_Data_entry",id:"How-to_Data_entry",isDocsHomePage:!1,title:"How-to: Data entry",description:"Example 1",source:"@site/docs/How-to_Data_entry.md",slug:"/How-to_Data_entry",permalink:"/docusaurustest/docs/next/How-to_Data_entry",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_Data_entry.md",version:"current",sidebar:"docs",previous:{title:"How-to: Trees",permalink:"/docusaurustest/docs/next/How-to_Trees"},next:{title:"How-to: Navigator",permalink:"/docusaurustest/docs/next/How-to_Navigator"}},l=[{value:"Example 1",id:"example-1",children:[{value:"Condition",id:"condition",children:[]},{value:"Solution",id:"solution",children:[]}]},{value:"Example 2",id:"example-2",children:[{value:"Condition",id:"condition-1",children:[]},{value:"Solution",id:"solution-1",children:[]}]}],c={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"example-1"},"Example 1"),Object(a.b)("h3",{id:"condition"},"Condition"),Object(a.b)("p",null,"We have a form that displays a list of books. We need to implement an option for entering a name only in upper case. Group change, copy&paste, and similar features must also be supported."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book 'Book';\nname 'Name' = DATA ISTRING[100] (Book);\n\nFORM books\n     OBJECTS b = Book\n;\n\nNAVIGATOR {\n    NEW books;\n}\n")),Object(a.b)("h3",{id:"solution"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},'changeName(Book b)  {\n     INPUT s = ISTRING[100] // inputting ISTRING[100] "to parameter" s (automatically wrapped in REQUEST, that is, group adjustments, PASTE, etc. are available)\n                     DO // checking for requestCanceled\n                          name(b) <- s;\n}\n\nEXTEND FORM books\n    PROPERTIES (b) name ON CHANGE changeName(b)\n;\n')),Object(a.b)("h2",{id:"example-2"},"Example 2"),Object(a.b)("h3",{id:"condition-1"},"Condition"),Object(a.b)("p",null,"We have a form that displays a list of books. In this form, the user can specify a genre, so that only\xa0books of this genre will be displayed. We also have a form containing the list of orders where you can also apply a filter by genre. Each book has a restricted/allowed flag, and the order may contain only allowed books."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Genre 'Genre';\nname 'Name' = DATA ISTRING[100] (Genre);\n\ngenre 'Genre' = DATA Genre (Book);\nisForbidden 'Prohibition' = DATA BOOLEAN (Book);\n\nCLASS Order 'Order';\nbook 'Book' = DATA Book (Order);\nnameBook 'Book name' (Order o) = name(book(o));\n\ndate 'Date' = DATA DATE (Order);\nnumber 'Number' = DATA STRING[100] (Order);\n\nCONSTRAINT isForbidden(book(Order o))\n    CHECKED BY book MESSAGE 'It is forbidden to choose this book';\n\nFORM booksByGenre\n     OBJECTS g = Genre PANEL\n     PROPERTIES (g) name\n     OBJECTS b = Book\n     PROPERTIES (b) name\n;\n\n\nFORM orders 'Orders'\n    OBJECTS g = Genre PANEL\n    PROPERTIES (g) name\n\n    OBJECTS o = Order\n    PROPERTIES(o) READONLY date, number\n    FILTERS g == genre(book(o))\n;\n\nNAVIGATOR {\n    NEW orders;\n}\n")),Object(a.b)("p",null,"We need to replace the book selection mechanism on the order form so that the genre selection form is called. Additional requirements:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The genre specified in the order form must be set as default value for the filter by genre"),Object(a.b)("li",{parentName:"ul"},"The current book from the order must be set as default value (if it has been selected)"),Object(a.b)("li",{parentName:"ul"},'The book in the order must be resettable (i. e. it must be possible to set the "Undefined" value)'),Object(a.b)("li",{parentName:"ul"},"Only allowed books can be selected"),Object(a.b)("li",{parentName:"ul"},"Group change, copy&paste, and similar features must also be supported for the field.")),Object(a.b)("h3",{id:"solution-1"},"Solution"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},'changeNameBook(Genre g, Order o)  {\n          DIALOG booksByGenre OBJECTS // (automatically wrapped in REQUEST, that is, group adjustments, PASTE, etc. are available)\n                g = g NULL, // NULL input allowed\n                b = book(o) NULL INPUT bk NULL CONSTRAINTFILTER\n                    // book(o) NULL - substituting book(o) to the input (if necessary, the input can be omitted, that is, the user can simply write b INPUT ..., which in turn is equivalent to b=NULL NULL INPUT ...)\n                    // INPUT b NULL - returning the value of this object "to parameter" bk (return NULL is allowed, that is, there will be a reset button). Since the TO option is not specified, the result will be written to the requestedObject\n                    // CONSTRAINTFILTER - taking into account the constraints for object b on the assumption that the result will be written to the property passed to the input (in this case book(o),\n                    // if necessary, another expression can be specified in the form CONSTRAINTFILTER = dataBook(o)\n    DO // checking for requestCanceled\n        book(o) <- bk;\n}\n\nEXTEND FORM orders\n    PROPERTIES (o) nameBook ON CHANGE changeNameBook(g, o)\n;\n')))}u.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=o,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||a;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);