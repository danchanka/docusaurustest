(window.webpackJsonp=window.webpackJsonp||[]).push([[458],{529:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(749)),c={title:"\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f (JOIN)"},u={unversionedId:"Composition_JOIN_",id:"Composition_JOIN_",isDocsHomePage:!1,title:"\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f (JOIN)",description:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043e\u0434\u043d\u043e\u0433\u043e (\u0433\u043b\u0430\u0432\u043d\u043e\u0433\u043e)\xa0\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Composition_JOIN_.md",slug:"/Composition_JOIN_",permalink:"/docusaurustest/ru/docs/next/Composition_JOIN_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/Composition_JOIN_.md",version:"current",sidebar:"docs",previous:{title:"\u041f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 (DATA)",permalink:"/docusaurustest/ru/docs/next/Data_properties_DATA_"},next:{title:"\u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0430",permalink:"/docusaurustest/ru/docs/next/Constant"}},i=[{value:"\u042f\u0437\u044b\u043a",id:"\u044f\u0437\u044b\u043a",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],s={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 ",Object(o.b)("em",{parentName:"p"},"\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432")," \u043e\u0434\u043d\u043e\u0433\u043e (",Object(o.b)("em",{parentName:"p"},"\u0433\u043b\u0430\u0432\u043d\u043e\u0433\u043e"),")\xa0\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432."),Object(o.b)("h3",{id:"\u044f\u0437\u044b\u043a"},"\u042f\u0437\u044b\u043a"),Object(o.b)("p",null,"\u0414\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/next/JOIN_operator"},"\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",Object(o.b)("strong",{parentName:"a"},"JOIN")),"."),Object(o.b)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"f = DATA INTEGER (INTEGER, INTEGER, INTEGER);\ng = DATA INTEGER (INTEGER, INTEGER);\nh = DATA INTEGER (INTEGER, INTEGER);\nc(a, b) = f(g(a, b), h(b, 3), a);\n\ncount = DATA BPSTRING[255] (INTEGER);\nname = DATA BPSTRING[255] (INTEGER);\nformatted(INTEGER a, INTEGER b) = [FORMULA BPSTRING[255] ' CAST($1 AS TEXT) || \\' / \\' || CAST($2 AS TEXT)'](count(a), name(b));\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Triangle;\ncathetus1 = DATA DOUBLE(Triangle);\ncathetus2 = DATA DOUBLE(Triangle);\n\nhypotenuseSq(triangle) = cathetus1(triangle)*cathetus1(triangle) + cathetus2(triangle)*cathetus2(triangle);\n\nhypotenuseSq2(triangle) = [ x*x + y*y](cathetus1(triangle), cathetus2(triangle)); // \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e, \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u0438\n")))}p.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,m=l["".concat(c,".").concat(d)]||l[d]||b[d]||o;return n?a.a.createElement(m,u(u({ref:t},s),{},{components:n})):a.a.createElement(m,u({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);