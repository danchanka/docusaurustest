(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{168:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),o=(r(0),r(419)),c={title:"DELETE operator"},s={unversionedId:"DELETE_operator",id:"DELETE_operator",isDocsHomePage:!1,title:"DELETE operator",description:"The DELETE operator creates an action that deletes objects.",source:"@site/docs\\DELETE_operator.md",slug:"/DELETE_operator",permalink:"/docusaurustest/docs/DELETE_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/DELETE_operator.md",version:"current",sidebar:"docs",previous:{title:"INTERNAL operator",permalink:"/docusaurustest/docs/INTERNAL_operator"},next:{title:"DIALOG operator",permalink:"/docusaurustest/docs/DIALOG_operator"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:p};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"DELETE")," operator creates an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Class_change_CHANGECLASS_DELETE"}),"deletes objects"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"DELETE expr [WHERE whereExpr]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"DELETE")," operator creates an action that deletes objects for which a certain condition is met. This operator can add its local ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"parameter"),", which will correspond to the objects being iterated. In this case, the ",Object(o.b)("strong",{parentName:"p"},"WHERE")," block is mandatory.\xa0"),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expr")),Object(o.b)("p",null,"An ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expression"),"\xa0or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#IDs-paramid"}),"typed parameter"),".\xa0You can either use an already declared parameter as a typed parameter, or declare a new local parameter. When using an expression, new local parameters cannot be added."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"whereExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expression")," whose value is for the action being created.\xa0If not set, it is considered as equal to\xa0",Object(o.b)("strong",{parentName:"p"},"TRUE"),"."),Object(o.b)("h3",{id:"examples"},"Examples"))}u.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),u=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=u(r),d=a,m=l["".concat(c,".").concat(d)]||l[d]||b[d]||o;return r?n.a.createElement(m,s(s({ref:t},i),{},{components:r})):n.a.createElement(m,s({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);