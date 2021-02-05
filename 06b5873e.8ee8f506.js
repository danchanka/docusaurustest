(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{419:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,d=b["".concat(c,".").concat(m)]||b[m]||l[m]||a;return r?o.a.createElement(d,p(p({ref:t},s),{},{components:r})):o.a.createElement(d,p({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(419)),c={title:"ACTIVATE operator"},p={unversionedId:"ACTIVATE_operator",id:"ACTIVATE_operator",isDocsHomePage:!1,title:"ACTIVATE operator",description:"The\xa0ACTIVATE\xa0operator creates an action that activates a specified form, tab, property, or action on a form",source:"@site/docs\\ACTIVATE_operator.md",slug:"/ACTIVATE_operator",permalink:"/docusaurustest/docs/ACTIVATE_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/ACTIVATE_operator.md",version:"current",sidebar:"docs",previous:{title:"ABSTRACT operator (action)",permalink:"/docusaurustest/docs/ABSTRACT_operator_action"},next:{title:"ACTIVE FORM operator",permalink:"/docusaurustest/docs/ACTIVE_FORM_operator"}},i=[{value:"Syntax\xa0",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:i};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"ACTIVATE"),"\xa0operator creates an ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Actions"}),"action")," that ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Activation_ACTIVATE"}),"activates")," a specified ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Forms"}),"form"),", tab, property, or action on a form"),Object(a.b)("h3",{id:"syntax"},"Syntax\xa0"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"ACTIVATE FORM formName\nACTIVATE TAB formName.componentSelector\nACTIVATE PROPERTY formPropertyId\n")),Object(a.b)("h3",{id:"description"},"Description"),Object(a.b)("p",null,"The\xa0",Object(a.b)("strong",{parentName:"p"},"ACTIVATE")," operator creates an action that activates a form, a tab, a property or an action on a form.\xa0"),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"formName")),Object(a.b)("p",null,"Form name. ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#IDs-cid"}),"Composite ID"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"componentSelector")),Object(a.b)("p",null,"Design component ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/DESIGN_instruction#DESIGNinstruction-selector"}),"selector"),".\xa0The component must be a tab in the tab panel."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"formPropertyId")),Object(a.b)("p",null,"The global\xa0",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#IDs-formpropertyid"}),"ID of a property or action on a form")," which should get focus."),Object(a.b)("h3",{id:"examples"},"Examples"))}u.isMDXComponent=!0}}]);