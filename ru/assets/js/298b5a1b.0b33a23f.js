(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{175:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(7),a=(r(0),r(749)),c={title:"How-to: DELETE"},u={unversionedId:"How-to_DELETE",id:"How-to_DELETE",isDocsHomePage:!1,title:"How-to: DELETE",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/How-to_DELETE.md",slug:"/How-to_DELETE",permalink:"/docusaurustest/ru/docs/next/How-to_DELETE",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/How-to_DELETE.md",version:"current",sidebar:"docs",previous:{title:"How-to: NEW",permalink:"/docusaurustest/ru/docs/next/How-to_NEW"},next:{title:"How-to: FOR",permalink:"/docusaurustest/ru/docs/next/How-to_FOR"}},i=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:[]}]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:[]}]}],l={toc:i};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 1"),Object(a.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u0415\u0441\u0442\u044c \u0437\u0430\u043a\u0430\u0437, \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u0434\u0430\u0442\u043e\u0439 \u0438 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u0435\u043c \u0438 \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438 \u0437\u0430\u043a\u0430\u0437\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u0441\u044b\u043b\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u043a\u043d\u0438\u0433\u0438."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Order '\u0417\u0430\u043a\u0430\u0437';\n\nCLASS Book '\u041a\u043d\u0438\u0433\u0430';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[50] (Book);\n\nCLASS OrderDetail '\u0421\u0442\u0440\u043e\u043a\u0430 \u0437\u0430\u043a\u0430\u0437\u0430';\norder '\u0417\u0430\u043a\u0430\u0437' = DATA Order (OrderDetail) NONULL DELETE;\nbook '\u041a\u043d\u0438\u0433\u0430' = DATA Book (OrderDetail);\nnameBook '\u041a\u043d\u0438\u0433\u0430' (OrderDetail d) = name(book(d));\n")),Object(a.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0443\u0434\u0430\u043b\u0438\u0442 \u043a\u043d\u0438\u0433\u0443, \u0435\u0441\u043b\u0438 \u043f\u043e \u043d\u0435\u0439 \u043d\u0435\u0442\u0443 \u0437\u0430\u043a\u0430\u0437\u043e\u0432."),Object(a.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"delete (Book b)  {\n    IF NOT [ GROUP SUM 1 BY book(OrderDetail d)](b) THEN\n        DELETE b;\n    ELSE\n        MESSAGE '\u0417\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u043a\u043d\u0438\u0433\u0443, \u0442\u0430\u043a \u043a\u0430\u043a \u043f\u043e \u043d\u0435\u0439 \u0435\u0441\u0442\u044c \u0437\u0430\u043a\u0430\u0437';\n}\n")),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2"},"\u041f\u0440\u0438\u043c\u0435\u0440 2"),Object(a.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e\xa0",Object(a.b)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u0443 1"),"."),Object(a.b)("p",null,"\u041d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043e\u0447\u0438\u0441\u0442\u0438\u0442 \u0437\u0430\u043a\u0430\u0437, \u0443\u0434\u0430\u043b\u0438\u0432 \u0432\u0441\u0435 \u0435\u0433\u043e \u0441\u0442\u0440\u043e\u043a\u0438."),Object(a.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"clear (Order o)  {\n\n    // \u0412\u0430\u0440\u0438\u0430\u043d\u0442 1\n    DELETE OrderDetail d WHERE order(d) == o;\n\n    // \u0412\u0430\u0440\u0438\u0430\u043d\u0442 2\n    FOR order(OrderDetail d) == o DO\n        DELETE d;\n}\n")),Object(a.b)("p",null,"\u041e\u0431\u0430 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430 \u0440\u0430\u0432\u043d\u043e\u0441\u0438\u043b\u044c\u043d\u044b \u0441 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f."))}d.isMDXComponent=!0},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return O}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(r),b=n,O=p["".concat(c,".").concat(b)]||p[b]||s[b]||a;return r?o.a.createElement(O,u(u({ref:t},l),{},{components:r})):o.a.createElement(O,u({ref:t},l))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);