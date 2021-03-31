(window.webpackJsonp=window.webpackJsonp||[]).push([[618],{689:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(749)),c={title:"\u0420\u0435\u043a\u0443\u0440\u0441\u0438\u044f (RECURSION)"},i={unversionedId:"Recursion_RECURSION_",id:"Recursion_RECURSION_",isDocsHomePage:!1,title:"\u0420\u0435\u043a\u0443\u0440\u0441\u0438\u044f (RECURSION)",description:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u0438 - \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440, \u0441\u043e\u0437\u0434\u0430\u044e\u0449\u0438\u0439 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0434\u0432\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438:",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Recursion_RECURSION_.md",slug:"/Recursion_RECURSION_",permalink:"/docusaurustest/ru/docs/next/Recursion_RECURSION_",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/Recursion_RECURSION_.md",version:"current",sidebar:"docs",previous:{title:"\u0420\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0435 / \u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0432\u0430\u043d\u0438\u0435 (PARTITION ... ORDER)",permalink:"/docusaurustest/ru/docs/next/Partitioning_sorting_PARTITION_..._ORDER_"},next:{title:"\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 (UNGROUP)",permalink:"/docusaurustest/ru/docs/next/Distribution_UNGROUP_"}},u=[{value:"\u042f\u0437\u044b\u043a",id:"\u044f\u0437\u044b\u043a",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],p={toc:u};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",Object(a.b)("em",{parentName:"p"},"\u0440\u0435\u043a\u0443\u0440\u0441\u0438\u0438")," - \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440, \u0441\u043e\u0437\u0434\u0430\u044e\u0449\u0438\u0439 ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/next/Properties"},"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"),", \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0434\u0432\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u0420\u0435\u043a\u0443\u0440\u0441\u0438\u0432\u043d\u043e \u0441\u0442\u0440\u043e\u0438\u0442 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e (result) \u0441 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u043f\u0435\u0440\u0432\u044b\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c (\u043d\u043e\u043c\u0435\u0440\u043e\u043c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438) \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"result(0, o1, o2, ..., oN) = initial(o1, ..., oN), \u0433\u0434\u0435 initial - ",Object(a.b)("em",{parentName:"li"},"\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435")," \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e."),Object(a.b)("li",{parentName:"ol"},"result(i+1, o1, o2, ..., oN) = step(o1, ..., oN, $o1, $o2, ..., $oN) IF result(i, $o1, $o2, ..., $oN), \u0433\u0434\u0435 step - \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",Object(a.b)("em",{parentName:"li"},"\u0448\u0430\u0433\u0430"),"."))),Object(a.b)("li",{parentName:"ol"},"\u0414\u043b\u044f \u0432\u0441\u0435\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0437\u0430\u0434\u0430\u043d\u043d\u0443\u044e\xa0",Object(a.b)("a",{parentName:"li",href:"/docusaurustest/ru/docs/next/Set_operations#func"},"\u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e"),"\xa0\u0432 \u0440\u0430\u0437\u0440\u0435\u0437\u0435 \u0432\u0441\u0435\u0445 \u0435\u0433\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432, \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u043d\u043e\u043c\u0435\u0440\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438.")),Object(a.b)("p",null,"\u041d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u0432\u0430 \u0432\u0438\u0434\u0430 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u044e\u0449\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 - ",Object(a.b)("strong",{parentName:"p"},"SUM")," \u0438\xa0",Object(a.b)("strong",{parentName:"p"},"OR"),". \u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u0441\u043b\u0443\u0447\u0430\u0435, \u043a\u043e\u0433\u0434\u0430 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438 \u0448\u0430\u0433 \u043a\u043b\u0430\u0441\u0441\u0430 ",Object(a.b)("strong",{parentName:"p"},"BOOLEAN."),"\xa0",Object(a.b)("strong",{parentName:"p"},"SUM")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432\u043e \u0432\u0441\u0435\u0445 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445."),Object(a.b)("p",null,"\u041e\u0442\u043c\u0435\u0442\u0438\u043c, \u0447\u0442\u043e \u043d\u0430 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u0430\u0431\u043e\u0440\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043c\u043e\u0433\u0443\u0442 \u043d\u0430\u0447\u0430\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c\u0441\u044f. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0431\u0443\u0434\u0435\u043c \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c \u0447\u0442\u043e \u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044f \u0446\u0438\u043a\u043b. \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u0440\u0438 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0438 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0446\u0438\u043a\u043b\u0430\u043c\u0438:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"CYCLES YES")," - \u0446\u0438\u043a\u043b\u044b \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u044e\u0442\u0441\u044f. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u0440\u0438 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u0438 \u0446\u0438\u043a\u043b\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0432\u043d\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u043c\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e \u0434\u043b\u044f \u043a\u043b\u0430\u0441\u0441\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u044d\u0442\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430. \u0422\u0430\u043a\u0430\u044f \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f, \u043a\u043e\u0433\u0434\u0430 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438 \u0448\u0430\u0433 \u043a\u043b\u0430\u0441\u0441\u0430 ",Object(a.b)("strong",{parentName:"li"},"BOOLEAN"),"."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"CYCLES NO")," (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e) - \u0446\u0438\u043a\u043b\u044b \u043d\u0435 \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u044e\u0442\u0441\u044f. \u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0439 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0435, \u043d\u043e \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435, \u0447\u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0440\u0430\u0432\u043d\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e (\u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043a\u0430\u043a \u0440\u0430\u0437 \u0438 \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0434\u043b\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043d\u0430\u0431\u043e\u0440\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043b\u0441\u044f \u0446\u0438\u043a\u043b)."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"CYCLES IMPOSSIBLE")," - \u0446\u0438\u043a\u043b\u044b \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b. \u041a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f, \u0435\u0441\u043b\u0438 \u0441\u0440\u0435\u0434\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0435\u0441\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u0447\u0435\u0442\u0447\u0438\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u0439 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0438, \u043a\u0430\u043a \u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0438\u0435, \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c\u0441\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442.")),Object(a.b)("p",null,"\u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u0438 \u0432\u0430\u0436\u043d\u043e \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0438\u0442\u044c\u0441\u044f \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u0432\u043d\u043e\u0435 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438 \u0431\u0443\u0434\u0435\u0442 \u043a\u043e\u043d\u0435\u0447\u043d\u043e, \u0442\u043e \u0435\u0441\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0448\u0430\u0433\u0430 \u0440\u0430\u043d\u043e \u0438\u043b\u0438 \u043f\u043e\u0437\u0434\u043d\u043e \u0441\u0442\u0430\u043d\u0435\u0442 ",Object(a.b)("strong",{parentName:"p"},"NULL")," (\u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u0440\u0435\u0447\u044c \u0438\u0434\u0435\u0442 \u043e \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0435 ",Object(a.b)("strong",{parentName:"p"},"CYCLES IMPOSSIBLE"),", \u0442\u0430\u043a \u043a\u0430\u043a \u0432 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u044f \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u043c \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u043e\u043c \u0446\u0438\u043a\u043b\u0435). \u0415\u0441\u043b\u0438 \u044d\u0442\u043e \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e, \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a SQL \u0441\u0435\u0440\u0432\u0435\u0440\u0430."),Object(a.b)("h3",{id:"\u044f\u0437\u044b\u043a"},"\u042f\u0437\u044b\u043a"),Object(a.b)("p",null,"\u0414\u043b\u044f \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u044e\u0449\u0435\u0433\u043e \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u044e, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/next/RECURSION_operator"},"\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",Object(a.b)("strong",{parentName:"a"},"RECURSION")),"."),Object(a.b)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-lsf"},"CLASS Node;\nedge = DATA BOOLEAN (Node, Node);\n\n// \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u043e integer \u043e\u0442 from \u043a to (\u044d\u0442\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0432\u0445\u043e\u0434\u0438\u0442 \u0432 \u043c\u043e\u0434\u0443\u043b\u044c System)\niterate(i, from, to) = RECURSION i==from AND from IS INTEGER AND to IS INTEGER STEP i==$i+1 AND i<=to CYCLES IMPOSSIBLE;\n\n// \u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043f\u0443\u0442\u0435\u0439 \u043e\u0442 a \u0434\u043e b \u0432 \u0433\u0440\u0430\u0444\u0435\npathes '\u041a\u043e\u043b-\u0432\u043e \u043f\u0443\u0442\u0435\u0439' (a, b) = RECURSION 1 AND a IS Node AND b==a STEP 1 IF edge(b, $b);\n\n// \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u043d\u0430 \u043a\u0430\u043a\u043e\u043c \u0443\u0440\u043e\u0432\u043d\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f child \u043e\u0442 parent, \u0438 null \u0435\u0441\u043b\u0438 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u0442\u043e\u043c\u043a\u043e\u043c (\u0442\u0435\u043c \u0441\u0430\u043c\u044b\u043c \u044d\u0442\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 child'\u043e\u0432)\nparent = DATA Group (Group);\nlevel '\u0423\u0440\u043e\u0432\u0435\u043d\u044c' (Group child, Group parent) = RECURSION 1 IF child IS Group AND parent == child\n                                                                  STEP 1 IF parent == parent($parent);\n\n// \u0447\u0438\u0441\u043b\u0430 \u0424\u0438\u0431\u043e\u043d\u0430\u0447\u0447\u0438, \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0432\u044b\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u0447\u0438\u0441\u043b\u0430 \u0424\u0438\u0431\u043e\u043d\u0430\u0447\u0438 \u0434\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f to, (\u043f\u043e\u0441\u043b\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c null)\nfib(i, to) = RECURSION 1 IF (i==0 OR i==1) AND to IS INTEGER STEP 1 IF (i==$i+1 OR i==$i+2) AND i<to CYCLES IMPOSSIBLE;\n")))}l.isMDXComponent=!0},749:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},O=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),b=l(r),O=n,m=b["".concat(c,".").concat(O)]||b[O]||s[O]||a;return r?o.a.createElement(m,i(i({ref:t},p),{},{components:r})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=O;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);