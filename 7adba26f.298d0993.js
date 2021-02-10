(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{250:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(419)),c={title:"ABSTRACT operator (action)"},i={unversionedId:"ABSTRACT_operator_action",id:"ABSTRACT_operator_action",isDocsHomePage:!1,title:"ABSTRACT operator (action)",description:"The\xa0ABSTRACT operator -\xa0creating an\xa0abstract action.",source:"@site/docs\\ABSTRACT_operator_action.md",slug:"/ABSTRACT_operator_action",permalink:"/docusaurustest/docs/ABSTRACT_operator_action",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/ABSTRACT_operator_action.md",version:"current",sidebar:"docs",previous:{title:"Operator{...}",permalink:"/docusaurustest/docs/Operator_..."},next:{title:"ACTIVATE operator",permalink:"/docusaurustest/docs/ACTIVATE_operator"}},s=[{value:"Syntax",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"ABSTRACT")," operator -\xa0creating an\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Action_extension"}),"abstract action"),".\xa0"),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"ABSTRACT [type [exclusionType]] [FIRST | LAST] [CHECKED] (argClassName1, ..., argClassNameN) \n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"ABSTRACT"),"\xa0operator creates an abstract action, the implementation of which can be defined later (for example, in other\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Modules"}),"modules")," dependent on the module containing the\xa0",Object(o.b)("strong",{parentName:"p"},"ABSTRACT"),"\xa0action). Implementations are added to the action using the\xa0",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/ACTION+_instruction"}),"instruction + ="),". When executing ",Object(o.b)("strong",{parentName:"p"},"MULTI")," or ",Object(o.b)("strong",{parentName:"p"},"CASE")," type abstract actions, their\xa0matching\xa0implementation is selected and executed. The selection of the matching implementation depends on the\xa0selection conditions that are defined when adding implementations, and on the\xa0",Object(o.b)("strong",{parentName:"p"},"ABSTRACT")," operator type."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CASE")," - a general case.**\xa0",Object(o.b)("strong",{parentName:"li"},"The selection condition will be explicitly specified in the implementation using the\xa0["),"WHEN**\xa0block](/docusaurustest/docs/ACTION+_instruction)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"MULTI"),"\xa0- ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/Branching_CASE_IF_MULTI#polymorphic-form"}),"a polymorphic form"),".\xa0The selection condition is that the parameters\xa0match the implementation\xa0",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/CLASS_operator"}),"signature"),". This type is the default type and need not be explicitly specified.")),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Branching_CASE_IF_MULTI#mutual-exclusion-of-conditions"}),"type of mutual exclusion"),"\xa0of an operator determines whether several conditions for the implementation of an abstract action can simultaneously be met with a certain set of parameters. The\xa0",Object(o.b)("strong",{parentName:"p"},"EXCLUSIVE\xa0"),"type indicates that implementation conditions cannot be met simultaneously. The\xa0",Object(o.b)("strong",{parentName:"p"},"OVERRIDE"),"\xa0type allows several simultaneously fulfilled conditions, while which implementation is ultimately selected is determined by the keywords\xa0",Object(o.b)("strong",{parentName:"p"},"FIRST"),"\xa0and\xa0",Object(o.b)("strong",{parentName:"p"},"LAST"),"."),Object(o.b)("p",null,"When performing a\xa0",Object(o.b)("strong",{parentName:"p"},"LIST"),"\xa0abstract action, all implementations are executed sequentially.**\xa0",Object(o.b)("strong",{parentName:"p"},"The implementation order is determined by the keywords "),"FIRST",Object(o.b)("strong",{parentName:"p"}," and "),"LAST**."),Object(o.b)("p",null,"The\xa0",Object(o.b)("strong",{parentName:"p"},"ABSTRACT"),"\xa0operator cannot be used inside the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Operator_..."}),Object(o.b)("strong",{parentName:"a"},"{...}")," operator"),"."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"type")),Object(o.b)("p",null,"Type of abstract action. It is specified by one of these keywords:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CASE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"MULTI")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"LIST"))),Object(o.b)("p",null,"The default value is ",Object(o.b)("strong",{parentName:"p"},"MULTI"),"."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"exclusionType")),Object(o.b)("p",null,"Type of mutual exclusion. One of these keywords:\xa0",Object(o.b)("strong",{parentName:"p"},"EXCLUSIVE"),"\xa0or\xa0",Object(o.b)("strong",{parentName:"p"},"OVERRIDE"),". Unless explicitly specified, in a\xa0",Object(o.b)("strong",{parentName:"p"},"MULTI"),"\xa0abstract action the default type of mutual exclusion is\xa0",Object(o.b)("strong",{parentName:"p"},"EXCLUSIVE"),",\xa0and in a ",Object(o.b)("strong",{parentName:"p"},"CASE")," action\xa0the default type is\xa0",Object(o.b)("strong",{parentName:"p"},"OVERRIDE"),". For a ",Object(o.b)("strong",{parentName:"p"},"LIST")," abstract action the type of mutual exclusion is not specified."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"FIRST")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"LAST")),Object(o.b)("p",null,"Keywords. When the word\xa0",Object(o.b)("strong",{parentName:"p"},"FIRST")," is specified, implementations will be added to the top of the implementations list; when ",Object(o.b)("strong",{parentName:"p"},"LAST"),"\xa0is specified, implementations will be added to the end of the implementations list.\xa0Unless specified, the default is\xa0",Object(o.b)("strong",{parentName:"p"},"FIRST")," (except ",Object(o.b)("strong",{parentName:"p"},"LIST"),", where the default is ",Object(o.b)("strong",{parentName:"p"},"LAST"),")"),Object(o.b)("p",null,"For abstract actions such as ",Object(o.b)("strong",{parentName:"p"},"CASE"),"\xa0and ",Object(o.b)("strong",{parentName:"p"},"MULTI")," with the type of mutual exclusion ",Object(o.b)("strong",{parentName:"p"},"OVERRIDE"),", specifying ",Object(o.b)("strong",{parentName:"p"},"FIRST")," will mean that of the matching implementations, the last one added will be executed. For actions such as ",Object(o.b)("strong",{parentName:"p"},"LIST"),", specifying ",Object(o.b)("strong",{parentName:"p"},"FIRST"),"\xa0will mean that implementations will be executed in the reverse order of their addition.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"CHECKED")),Object(o.b)("p",null,"Keyword. If specified, the platform will automatically check\xa0that at least one implementation is defined for all descendants of the argument classes (or exactly one, if the conditions are mutually exclusive)."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"argClassName1, ..., argClassNameN")),Object(o.b)("p",null,"List of class names of property arguments. Each name is defined by a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/IDs#classid-broken"}),"class ID"),"."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("p",null,"**",Object(o.b)("br",{parentName:"p"}),"\n","**"))}l.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=a,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||o;return n?r.a.createElement(d,i(i({ref:t},p),{},{components:n})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);