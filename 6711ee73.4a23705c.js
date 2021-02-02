(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{213:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(419)),c={title:"NESTEDSESSION operator"},s={unversionedId:"NESTEDSESSION_operator",id:"NESTEDSESSION_operator",isDocsHomePage:!1,title:"NESTEDSESSION operator",description:"The NESTEDSESSION\xa0operator creates an\xa0action that executes the other action in a nested session-nested).",source:"@site/docs\\NESTEDSESSION_operator.md",slug:"/NESTEDSESSION_operator",permalink:"/docusaurustest/docs/NESTEDSESSION_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/NESTEDSESSION_operator.md",version:"current",sidebar:"docs",previous:{title:"NEW operator",permalink:"/docusaurustest/docs/NEW_operator"},next:{title:"NEWEXECUTOR operator",permalink:"/docusaurustest/docs/NEWEXECUTOR_operator"}},p=[],i={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"NESTEDSESSION"),"\xa0operator creates an\xa0",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that executes the other action in a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"30769225.html#Newsession(NEWSESSION,NESTEDSESSION)-nested"}),"nested session"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"NESTEDSESSION action \n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"NESTEDSESSION"),"\xa0operator creates an action which executes the other action in a nested session. With that, all changes that have already been made in the current session get into the created nested session. Also, all changes that are made in the nested session will get into the current session when ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Apply_changes_APPLY_"}),"the changes are applied")," in the nested session."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"action\xa0")),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Action-operator_36307157.html#Actionoperator-contextdependent"}),"context-dependent action operator")," that defines an action to be executed in the nested session."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("hr",null))}u.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=u(n),O=r,d=l["".concat(c,".").concat(O)]||l[O]||b[O]||o;return n?a.a.createElement(d,s(s({ref:t},i),{},{components:n})):a.a.createElement(d,s({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=O;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);