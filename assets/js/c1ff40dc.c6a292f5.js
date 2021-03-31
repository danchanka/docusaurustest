(window.webpackJsonp=window.webpackJsonp||[]).push([[515],{586:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(749)),s={title:"GROUP operator"},p={unversionedId:"GROUP_operator",id:"GROUP_operator",isDocsHomePage:!1,title:"GROUP operator",description:"The GROUP operator creates a property implementing\xa0grouping.",source:"@site/docs/GROUP_operator.md",slug:"/GROUP_operator",permalink:"/docusaurustest/docs/next/GROUP_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/GROUP_operator.md",version:"current",sidebar:"docs",previous:{title:"FORMULA operator",permalink:"/docusaurustest/docs/next/FORMULA_operator"},next:{title:"IF operator",permalink:"/docusaurustest/docs/next/IF_operator"}},i=[{value:"Syntax\xa0",id:"syntax",children:[]},{value:"Description",id:"description",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:i};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"GROUP")," operator creates a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"property")," implementing\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Grouping_GROUP_"},"grouping"),"."),Object(o.b)("h3",{id:"syntax"},"Syntax\xa0"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"GROUP \ntype expr1, ..., exprN\n[ORDER [DESC] orderExpr1, ..., orderExprK]\n[WHERE whereExpr]\n[BY groupExpr1, ..., groupExprM]\n")),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"GROUP")," operator creates a property implementing grouping. The type of grouping is determined by the type of the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Set_operations"},"aggregate function"),". This operator differs from others in that it can implicitly declare its parameters in the expressions used (by analogy with the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Instruction_="},Object(o.b)("strong",{parentName:"a"},"=")," instruction"),' when the parameters are not defined explicitly). At the same time, it is important to understand that these "implicitly declared" parameters are not parameters of the created property (which are actually determined by the ',Object(o.b)("strong",{parentName:"p"},"BY")," block\xa0and / or the upper parameters used)"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"BY")," block describes group expressions. Each expression corresponds to a parameter of the property being created. As in other operators, upper parameters can be used in this operator, and the used parameters also implicitly\xa0become groups of the created property. Accordingly, when using the operator in the ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Instruction_="},Object(o.b)("strong",{parentName:"a"},"=")," instruction"),"\xa0and explicitly defining the parameters on the left, the expressions from the ",Object(o.b)("strong",{parentName:"p"},"BY")," block are mapped only for unused parameters. Moreover, if the classes or the number of these parameters do not match the number / classes of ",Object(o.b)("strong",{parentName:"p"},"BY")," expressions then the platform will throw an error.\xa0"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If a ",Object(o.b)("strong",{parentName:"p"},"BY")," block\xa0is defined, this operator cannot be used inside\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Expression"},"expressions"),"."))),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ORDER")," block defines the order in which the aggregate function will be calculated. Can only be used for ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Set_operations"},"non-commutative")," aggregate functions (",Object(o.b)("strong",{parentName:"p"},"CONCAT, LAST")," ) and must be uniquely defined. If a new parameter is declared in the expressions specifying the order (i.e. parameter is not used in the remaining blocks**\xa0",Object(o.b)("strong",{parentName:"p"},"or in the upper context), the condition of non-\xa0"),"NULLness** of all these expressions is automatically added."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"WHERE")," block defines the condition under which object collections will participate in the group operation. Can only be used for the aggregate\xa0functions\xa0",Object(o.b)("strong",{parentName:"p"},"AGGR"),", ",Object(o.b)("strong",{parentName:"p"},"NAGGR"),", ",Object(o.b)("strong",{parentName:"p"},"LAST"),"."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"For ",Object(o.b)("strong",{parentName:"p"},"AGGR")," and\xa0",Object(o.b)("strong",{parentName:"p"},"NAGGR"),"\xa0using this block explicitly (and not, say, an\xa0",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/IF_operator"},Object(o.b)("strong",{parentName:"a"},"IF")," operator")," in ",Object(o.b)("strong",{parentName:"p"},"GROUP")," and ",Object(o.b)("strong",{parentName:"p"},"BY")," blocks) only makes sense from the perspective of being able to change the created property to non-",Object(o.b)("strong",{parentName:"p"},"NULL"),"\xa0in some automatic mechanisms of the platform (for example, ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Simple_constraints"},"automatic resolution")," of simple constraints)."))),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"type")),Object(o.b)("p",null,"Type of aggregate function. Can be one of the following: ",Object(o.b)("strong",{parentName:"p"},"SUM"),", ",Object(o.b)("strong",{parentName:"p"},"MAX"),", ",Object(o.b)("strong",{parentName:"p"},"MIN"),", ",Object(o.b)("strong",{parentName:"p"},"CONCAT"),", ",Object(o.b)("strong",{parentName:"p"},"EQUAL"),", *",Object(o.b)("strong",{parentName:"p"},"*AGGR, NAGGR, LAST**"),".\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"expr1, ..., exprN\xa0")),Object(o.b)("p",null,"A list of expressions whose values are passed to the aggregate function as operands. The number of expressions should correspond to the number of operands of the function used.\xa0"),Object(o.b)("p",null,"groupExpr1, ..., groupExprN\xa0\xa0"),Object(o.b)("p",null,"\xa0List of group expressions.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"DESC")),Object(o.b)("p",null,"Keyword. Specifies a reverse iteration order for object collections.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"orderExpr1, ..., orderExprM")),Object(o.b)("p",null,"A list of expressions that define the order in which object collections will be iterated over when calculating the aggregate function. To determine the order, first the value of the first expression is used; then, if equal, the value of the second is used, etc.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"whereExpr")),Object(o.b)("p",null,"Filtering expression. Only object groups for which the value of the filtering expression is not\xa0",Object(o.b)("strong",{parentName:"p"},"NULL")," will participate in the grouping."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Game;\nCLASS Team;\nhostGoals = DATA INTEGER (Game);\nhostTeam = DATA Team (Game);\nhostGoalsScored(team) = GROUP SUM hostGoals(Game game) BY hostTeam(game);\n\nname = DATA STRING[100] (Country);\ncountryName = GROUP AGGR Country country WHERE country IS Country BY name(country); // property (STRING[100]) -> Country is obtained\n\nCLASS Book;\nCLASS Tag;\nname = DATA STRING[100] (Tag);\nin = DATA BOOLEAN (Book, Tag);\n\ntags(Book b) = GROUP CONCAT name(Tag t) IF in(b, t), ', ' ORDER name(t), t;\n")))}b.isMDXComponent=!0},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=b(r),m=n,d=l["".concat(s,".").concat(m)]||l[m]||u[m]||o;return r?a.a.createElement(d,p(p({ref:t},c),{},{components:r})):a.a.createElement(d,p({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var c=2;c<o;c++)s[c]=r[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);