(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{235:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(424)),c={},p={unversionedId:"LSFUS/lsFusionEMAIL_operator",id:"LSFUS/lsFusionEMAIL_operator",isDocsHomePage:!1,title:"lsFusionEMAIL_operator",description:"lsFusionEMAIL operator",source:"@site/docs\\LSFUS\\lsFusionEMAIL_operator.md",slug:"/LSFUS/lsFusionEMAIL_operator",permalink:"/docusaurustest/docs/LSFUS/lsFusionEMAIL_operator",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionEMAIL_operator.md",version:"current"},i=[],s={toc:i};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionemail-operator"},"lsFusionEMAIL operator"),Object(o.b)("h1",{id:"email-operator"},"EMAIL operator"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"EMAIL")," operator creates an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionActions"}),"action")," that ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionSend_mail_EMAIL_"}),"sends email"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Syntax")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"EMAIL [FROM fromExpr]\xa0\n[SUBJECT subjExpr]\nrecipientType1 recipientExpr1\n...\nrecipientTypeN recipientExprN\n[BODY bodyExpr]\nATTACH attachFileExpr1 [NAME attachNameExpr1]\n...\nATTACH attachFileExprM [NAME attachNameExprM]\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Description")),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"EMAIL")," operator creates an action that sends emails.\xa0"),Object(o.b)("p",null,"It is assumed that the file extension\xa0is not specified in the attachment name, i.e. period (.) is also considered part of the file name. This extension is automatically determined\xa0similar to the\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"WRITE-operator_34439654.html#WRITEoperator-extension"}),Object(o.b)("strong",{parentName:"a"},"WRITE"),"\xa0operator"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"fromExpr")),Object(o.b)("p",null,"An ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/LSFUS/lsFusionExpression"}),"expression")," which value determines the sender address.\xa0"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"subjExpr")),Object(o.b)("p",null,"An expression which value determines the email subject."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"recipientType1 ... recipientTypeN")),Object(o.b)("p",null,"Recipient types. N",">","=1. Each of them is specified by one of the keywords:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"TO")," - message recipient"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"\u0421\u0421")," - secondary message recipient to whom a copy is sent"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"BCC")," - message recipient whose address is not shown to other recipients")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"recipientExpr1 ... recipientExprN")),Object(o.b)("p",null,"Expressions which values determine the addresses of the message recipients."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"bodyExpr")),Object(o.b)("p",null,"An expression which value is the mail body. Can be either a string or file type."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"attachFileExpr1 ....\xa0"),"attachFileExprM**"),Object(o.b)("p",null,"Expressions which values are files attached to the message."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"attachNameExpr1 ...\xa0"),"attachNameExprM**"),Object(o.b)("p",null,"An expression which values determine the names of the attachments."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("hr",null))}l.isMDXComponent=!0},424:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,O=b["".concat(c,".").concat(m)]||b[m]||u[m]||o;return r?a.a.createElement(O,p(p({ref:t},s),{},{components:r})):a.a.createElement(O,p({ref:t},s))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);