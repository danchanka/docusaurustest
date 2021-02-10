(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{196:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(419)),c={title:"INPUT operator"},p={unversionedId:"INPUT_operator",id:"INPUT_operator",isDocsHomePage:!1,title:"INPUT operator",description:"The\xa0INPUT\xa0operator creates an\xa0action that inputs a primitive.",source:"@site/docs\\INPUT_operator.md",slug:"/INPUT_operator",permalink:"/docusaurustest/docs/INPUT_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/INPUT_operator.md",version:"current",sidebar:"docs",previous:{title:"IMPORT operator",permalink:"/docusaurustest/docs/IMPORT_operator"},next:{title:"MESSAGE operator",permalink:"/docusaurustest/docs/MESSAGE_operator"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"INPUT"),"\xa0operator creates an\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Primitive_input_INPUT"}),"inputs a primitive"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"INPUT inputOptions \n[CHANGE [= changeExpr]]\n[DO actionOperator [ELSE elseActionOperator]]\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"inputOptions")," - input options. Specified\xa0by one of the following syntaxes:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"[alias =] builtInClassName\n[alias] = expr\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"INPUT"),"\xa0operator creates an action which allows to request the value of one of the\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Built-in_classes"}),"built-in classes")," from the user."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"builtInClassName")),Object(o.b)("p",null,"The name of one of the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Built-in_classes"}),"built-in classes"),".\xa0"),Object(o.b)("p",null,"expr"),Object(o.b)("p",null,"\xa0 \xa0 \xa0 \xa0\xa0An ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expression"),", which value determines the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Value_input#initial-values-and-automatic-change"}),"initial value")," of the input."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"alias")),Object(o.b)("p",null,"The name of the local parameter to which the input result is written.\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#id-broken"}),"Simple ID"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CHANGE")),Object(o.b)("p",null,"A keyword specifying that in addition to the value input the result needs to be written to the specified property."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"changeExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expression")," that determines the property to which the input result is written.\xa0By default, the property specified as the initial input value is used."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"actionOperator")),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Action_operator#context-dependent-operators"}),"context-dependent action operator")," that is executed if the input was completed successfully."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"elseActionOperator")),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Action_operator#context-dependent-operators"}),"context-dependent action operator")," that is executed if the input was cancelled. The input result parameter cannot be used as parameters."),Object(o.b)("h3",{id:"examples"},"Examples"))}u.isMDXComponent=!0},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,O=l["".concat(c,".").concat(d)]||l[d]||b[d]||o;return r?a.a.createElement(O,p(p({ref:t},s),{},{components:r})):a.a.createElement(O,p({ref:t},s))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);