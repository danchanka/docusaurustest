(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{347:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var o=r(3),n=r(7),a=(r(0),r(424)),c={title:"Object group operator"},p={unversionedId:"LSFUS/Object_group_operator",id:"LSFUS/Object_group_operator",isDocsHomePage:!1,title:"Object group operator",description:"Object group operators are used for creating properties working with the current state of the object group on the form.",source:"@site/docs\\LSFUS\\Object_group_operator.md",slug:"/LSFUS/Object_group_operator",permalink:"/docusaurustest/docs/LSFUS/Object_group_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/Object_group_operator.md",version:"current"},s=[],b={toc:s};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Form_structure"}),"Object group")," operators are used for creating ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Properties"}),"properties")," working with the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Object_group_operations"}),"current state")," of the object group on the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Forms"}),"form"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Syntax")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"FILTER groupObjectId\nVIEW groupObjectId\nORDER groupObjectId\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description")),Object(a.b)("p",null,"Object group operators create properties that accept the same number of parameters as the number of objects in the object group. These operators cannot be used inside ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/Expression"}),"expressions"),"."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"FILTER")," operator creates a property which value is\xa0",Object(a.b)("strong",{parentName:"p"},"TRUE")," when the object collection passed as parameters meets all the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"Form-structure_1573069.html#Formstructure-filters"}),"filtering")," conditions on the form, otherwise the property value will be ",Object(a.b)("strong",{parentName:"p"},"NULL"),"."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"VIEW"),"\xa0operator creates a property which value is ",Object(a.b)("strong",{parentName:"p"},"TRUE")," if the object collection passed as parameters is currently displayed on the form, otherwise, the property value will be ",Object(a.b)("strong",{parentName:"p"},"NULL"),"."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"ORDER")," operator creates a property which value determines the relative order of the object collection on the form passed as a parameter. The value of this property is usually used in ",Object(a.b)("strong",{parentName:"p"},"ORDER")," blocks of the other properties, for example, ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(o.a)({parentName:"strong"},{href:"/docusaurustest/docs/LSFUS/PARTITION_operator"}),"PARTITION")),", ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(o.a)({parentName:"strong"},{href:"/docusaurustest/docs/LSFUS/FOR_operator"}),"FOR")),", etc."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"groupObjectId")),Object(a.b)("p",null,"Global ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"IDs_1573053.html#IDs-groupobjectid"}),"object group ID"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples")),Object(a.b)("hr",null),Object(a.b)("p",null,"**",Object(a.b)("br",{parentName:"p"}),"\n","**"))}u.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return j}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),u=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=u(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),i=u(r),O=o,j=i["".concat(c,".").concat(O)]||i[O]||l[O]||a;return r?n.a.createElement(j,p(p({ref:t},b),{},{components:r})):n.a.createElement(j,p({ref:t},b))}));function j(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=O;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var b=2;b<a;b++)c[b]=r[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);