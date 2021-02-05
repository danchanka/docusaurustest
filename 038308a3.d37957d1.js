(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{419:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=b(r),d=n,m=u["".concat(p,".").concat(d)]||u[d]||l[d]||o;return r?a.a.createElement(m,s(s({ref:t},i),{},{components:r})):a.a.createElement(m,s({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var i=2;i<o;i++)p[i]=r[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(419)),p={title:"GROUP operator"},s={unversionedId:"GROUP_operator",id:"GROUP_operator",isDocsHomePage:!1,title:"GROUP operator",description:"The GROUP operator creates a property implementing\xa0grouping.",source:"@site/docs\\GROUP_operator.md",slug:"/GROUP_operator",permalink:"/docusaurustest/docs/GROUP_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/GROUP_operator.md",version:"current",sidebar:"docs",previous:{title:"FORMULA operator",permalink:"/docusaurustest/docs/FORMULA_operator"},next:{title:"IF operator",permalink:"/docusaurustest/docs/IF_operator"}},c=[{value:"Syntax\xa0",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"GROUP")," operator creates a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Properties"}),"property")," implementing\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Grouping_GROUP"}),"grouping"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax\xa0"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"GROUP \ntype expr1, ..., exprN\n[ORDER [DESC] orderExpr1, ..., orderExprK]\n[WHERE whereExpr]\n[BY groupExpr1, ..., groupExprM]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"GROUP")," operator creates a property implementing grouping. The type of grouping is determined by the type of the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Set_operations"}),"aggregate function"),". This operator differs from others in that it can implicitly declare its parameters in the expressions used (by analogy with the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Instruction_="}),Object(o.b)("strong",{parentName:"a"},"=")," instruction"),' when the parameters are not defined explicitly). At the same time, it is important to understand that these "implicitly declared" parameters are not parameters of the created property (which are actually determined by the ',Object(o.b)("strong",{parentName:"p"},"BY")," block\xa0and / or the upper parameters used)"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"BY")," block describes group expressions. Each expression corresponds to a parameter of the property being created. As in other operators, upper parameters can be used in this operator, and the used parameters also implicitly\xa0become groups of the created property. Accordingly, when using the operator in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Instruction_="}),Object(o.b)("strong",{parentName:"a"},"=")," instruction"),"\xa0and explicitly defining the parameters on the left, the expressions from the ",Object(o.b)("strong",{parentName:"p"},"BY")," block are mapped only for unused parameters. Moreover, if the classes or the number of these parameters do not match the number / classes of ",Object(o.b)("strong",{parentName:"p"},"BY")," expressions then the platform will throw an error.\xa0"),Object(o.b)("p",null,"If a ",Object(o.b)("strong",{parentName:"p"},"BY")," block\xa0is defined, this operator cannot be used inside\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Expression"}),"expressions"),"."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ORDER")," block defines the order in which the aggregate function will be calculated. Can only be used for ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Set_operations"}),"non-commutative")," aggregate functions (",Object(o.b)("strong",{parentName:"p"},"CONCAT, LAST")," ) and must be uniquely defined. If a new parameter is declared in the expressions specifying the order (i.e. parameter is not used in the remaining blocks**\xa0",Object(o.b)("strong",{parentName:"p"},"or in the upper context), the condition of non-\xa0"),"NULLness** of all these expressions is automatically added."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"WHERE")," block defines the condition under which object collections will participate in the group operation. Can only be used for the aggregate\xa0functions\xa0",Object(o.b)("strong",{parentName:"p"},"AGGR"),", ",Object(o.b)("strong",{parentName:"p"},"NAGGR"),", ",Object(o.b)("strong",{parentName:"p"},"LAST"),"."),Object(o.b)("p",null,"For ",Object(o.b)("strong",{parentName:"p"},"AGGR")," and\xa0",Object(o.b)("strong",{parentName:"p"},"NAGGR"),"\xa0using this block explicitly (and not, say, an\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/IF_operator"}),Object(o.b)("strong",{parentName:"a"},"IF")," operator")," in ",Object(o.b)("strong",{parentName:"p"},"GROUP")," and ",Object(o.b)("strong",{parentName:"p"},"BY")," blocks) only makes sense from the perspective of being able to change the created property to non-",Object(o.b)("strong",{parentName:"p"},"NULL"),"\xa0in some automatic mechanisms of the platform (for example, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Simple_constraints"}),"automatic resolution")," of simple constraints)."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"type")),Object(o.b)("p",null,"Type of aggregate function. Can be one of the following: ",Object(o.b)("strong",{parentName:"p"},"SUM"),", ",Object(o.b)("strong",{parentName:"p"},"MAX"),", ",Object(o.b)("strong",{parentName:"p"},"MIN"),", ",Object(o.b)("strong",{parentName:"p"},"CONCAT"),", ",Object(o.b)("strong",{parentName:"p"},"EQUAL"),", *",Object(o.b)("strong",{parentName:"p"},"*AGGR, NAGGR, LAST**"),".\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expr1, ..., exprN\xa0")),Object(o.b)("p",null,"A list of expressions whose values are passed to the aggregate function as operands. The number of expressions should correspond to the number of operands of the function used.\xa0"),Object(o.b)("p",null,"groupExpr1, ..., groupExprN\xa0\xa0"),Object(o.b)("p",null,"\xa0List of group expressions.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"DESC")),Object(o.b)("p",null,"Keyword. Specifies a reverse iteration order for object collections.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"orderExpr1, ..., orderExprM")),Object(o.b)("p",null,"A list of expressions that define the order in which object collections will be iterated over when calculating the aggregate function. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"whereExpr")),Object(o.b)("p",null,"Filtering expression. Only object groups for which the value of the filtering expression is not\xa0",Object(o.b)("strong",{parentName:"p"},"NULL")," will participate in the grouping."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("p",null,"**",Object(o.b)("br",{parentName:"p"}),"\n","**"))}b.isMDXComponent=!0}}]);