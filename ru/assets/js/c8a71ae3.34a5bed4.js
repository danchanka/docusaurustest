(window.webpackJsonp=window.webpackJsonp||[]).push([[531],{603:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(749)),c={title:"How-to: GROUP CONCAT"},u={unversionedId:"How-to_GROUP_CONCAT",id:"How-to_GROUP_CONCAT",isDocsHomePage:!1,title:"How-to: GROUP CONCAT",description:"\u041f\u0440\u0438\u043c\u0435\u0440 1",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/How-to_GROUP_CONCAT.md",slug:"/How-to_GROUP_CONCAT",permalink:"/docusaurustest/ru/docs/next/How-to_GROUP_CONCAT",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/How-to_GROUP_CONCAT.md",version:"current",sidebar:"docs",previous:{title:"How-to: GROUP LAST",permalink:"/docusaurustest/ru/docs/next/How-to_GROUP_LAST"},next:{title:"How-to: PARTITION",permalink:"/docusaurustest/ru/docs/next/How-to_PARTITION"}},i=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",children:[]}]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:[{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:[]},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1",children:[]}]}],l={toc:i};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1"},"\u041f\u0440\u0438\u043c\u0435\u0440 1"),Object(a.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u0415\u0441\u0442\u044c \u043d\u0430\u0431\u043e\u0440 \u043a\u043d\u0438\u0433, \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0439 \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u0442\u0435\u0433\u0430\u043c \u0441 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u0430\u043c\u0438."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Book '\u041a\u043d\u0438\u0433\u0430';\nCLASS Tag '\u0422\u044d\u0433';\nname '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435' = DATA ISTRING[10] (Tag);\n\nin '\u0412\u043a\u043b' = DATA BOOLEAN (Tag, Book);\n")),Object(a.b)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u044d\u0433\u043e\u0432 \u043a\u043d\u0438\u0433\u0438 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e \u0432 \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435."),Object(a.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"tags '\u0422\u044d\u0433\u0438' (Book b) = GROUP CONCAT name(Tag t) IF in(t, b), ',' ORDER name(t), t CHARWIDTH 10;\n")),Object(a.b)("p",null,"\u0416\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u0442\u0440\u043e\u044f\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 ",Object(a.b)("strong",{parentName:"p"},"GROUP CONCAT"),', \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0432\u044b\u0432\u043e\u0434\u0430 \u0438\u0445 \u043d\u0430 \u0444\u043e\u0440\u043c\u0443. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043f\u043e "\u043f\u0435\u0441\u0441\u0438\u043c\u0438\u0441\u0442\u0438\u0447\u043d\u043e\u043c\u0443" \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044e \u0438 \u0432\u044b\u0434\u0430\u0435\u0442 \u043e\u0447\u0435\u043d\u044c \u043c\u043d\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430 \u0442\u0430\u043a\u0438\u043c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c.'),Object(a.b)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2"},"\u041f\u0440\u0438\u043c\u0435\u0440 2"),Object(a.b)("h3",{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1"},"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"),Object(a.b)("p",null,"\u0415\u0441\u0442\u044c \u043d\u0430\u0431\u043e\u0440 \u043a\u043d\u0438\u0433, \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0439 \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043c \u0438 \u0430\u0432\u0442\u043e\u0440\u0430\u043c."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Category '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f';\n\nCLASS Author '\u0410\u0432\u0442\u043e\u0440';\nname '\u0410\u0432\u0442\u043e\u0440' = DATA ISTRING[20] (Author);\n\ncategory '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f' = DATA Category (Book);\nauthor '\u0410\u0432\u0442\u043e\u0440' = DATA Author (Book);\n")),Object(a.b)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0432\u0441\u0435\u0445 \u0430\u0432\u0442\u043e\u0440\u043e\u0432 \u043f\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u043a\u043d\u0438\u0433."),Object(a.b)("h3",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435-1"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"countBooks '\u041a\u043e\u043b-\u0432\u043e \u043a\u043d\u0438\u0433' (Author a, Category c) = GROUP SUM 1 BY author(Book b), category(b);\n\nauthors '\u0410\u0432\u0442\u043e\u0440\u044b' (Category c) = GROUP CONCAT name(Author a) IF countBooks(a, c) ORDER DESC countBooks(a, c), a;\n")))}s.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,d=p["".concat(c,".").concat(b)]||p[b]||O[b]||a;return n?o.a.createElement(d,u(u({ref:t},l),{},{components:n})):o.a.createElement(d,u({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);