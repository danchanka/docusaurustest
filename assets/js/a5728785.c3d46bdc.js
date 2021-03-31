(window.webpackJsonp=window.webpackJsonp||[]).push([[443],{516:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return c}));var n=r(3),a=r(7),o=(r(0),r(749)),s={title:"Expression: Overview",sidebar_label:"Overview"},i={unversionedId:"Expression",id:"Expression",isDocsHomePage:!1,title:"Expression: Overview",description:"An expression is a combination of property operators and parameters. When an expression is evaluated sequentially in priority\xa0 order, all the operators are executed.",source:"@site/docs/Expression.md",slug:"/Expression",permalink:"/docusaurustest/docs/next/Expression",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Expression.md",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Instruction =: Overview",permalink:"/docusaurustest/docs/next/Instruction_="},next:{title:"Operator priority",permalink:"/docusaurustest/docs/next/Operator_priority"}},p=[{value:"Examples",id:"examples",children:[]}],l={toc:p};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"An ",Object(o.b)("em",{parentName:"p"},"expression")," is a combination of ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Property_operators"},"property operators")," and ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"parameters"),". When an expression is evaluated sequentially in ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Operator_priority"},"priority"),"\xa0 order, all the operators are executed."),Object(o.b)("p",null,"The result of that execution will be either a ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"property")," or a parameter (in the case of single-parameter expression). Their value shall be called the ",Object(o.b)("em",{parentName:"p"},"value")," of the expression."),Object(o.b)("p",null,"An expression can be described by the following set of recursive rules:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("strong",null,"Rule")),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("strong",null,"Description")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("pre",null,Object(o.b)("code",null,"expression := parameter ","|"," constant ","|"," prefixOperator"))),Object(o.b)("td",{parentName:"tr",align:null},"A single parameter, ",Object(o.b)("a",{parentName:"td",href:"/docusaurustest/docs/next/Constant"},"constant"),", or non-arithmetic prefix operator")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("pre",null,Object(o.b)("code",null,"expression := prefixArithmOp expression"))),Object(o.b)("td",{parentName:"tr",align:null},"A unary arithmetic prefix operator, with the expression passed to it as an operand")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("pre",null,Object(o.b)("code",null,"expression := expression postfixOp"))),Object(o.b)("td",{parentName:"tr",align:null},"A unary postfix operator, with the expression passed to it as an operand")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("pre",null,Object(o.b)("code",null,"expression := expression binaryOp expression"))),Object(o.b)("td",{parentName:"tr",align:null},"A binary operator with the expressions passed to it as operands")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("pre",null,Object(o.b)("code",null,"expression := ( expression )"))),Object(o.b)("td",{parentName:"tr",align:null},"Expression in parentheses")))),Object(o.b)("p",null,"An expression cannot include ",Object(o.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Property_operators#contextindependent"},"context-independent")," property operators."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Team;\n\nwins(team) = DATA INTEGER(Team);\nties(team) = DATA INTEGER(Team);\n\npoints(Team team) = wins(team) * 3 + ties(team); // The number of points received by the team for the matches played\n// In this case, the expression is written to the right of the equal sign. It defines a new property called points.\n// When calculating the expression, two JOIN operators are first executed: wins(team) and ties(team), substituting the team parameter in the wins and ties properties\n// Then the multiplication operator will be executed, which will build a property that returns a number equal to the product of the return value of wins(team) and the number 3\n// Then the addition operator will be executed, which will create a property that sums the return values (wins(team) * 3) and ties(team)\n// The resulting property will be the result of the expression\n\nCLASS Game;\nCLASS BonusGame : Game;\n\ngamePoints(Game game) = 2 (+) (1 IF game IS BonusGame); // The number of points per game. If the game is bonus, then 3, otherwise 2.\n// In this example, the order of execution of the operators will be as follows: IS, IF, (+)\n")))}c.isMDXComponent=!0},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),c=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);