(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return l}));var a=n(3),s=n(7),u=(n(0),n(424)),r={title:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0435\u0441\u0441\u0438\u044f\u043c\u0438"},c={unversionedId:"Session_management",id:"Session_management",isDocsHomePage:!1,title:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0435\u0441\u0441\u0438\u044f\u043c\u0438",description:"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0441\u0435\u0441\u0441\u0438\u044f\u043c\u0438:",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/Session_management.md",slug:"/Session_management",permalink:"/docusaurustest/ru/docs/Session_management",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/Session_management.md",version:"current",sidebar:"docs",previous:{title:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u0430 (CHANGECLASS, DELETE)",permalink:"/docusaurustest/ru/docs/Class_change_CHANGECLASS_DELETE_"},next:{title:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 (APPLY)",permalink:"/docusaurustest/ru/docs/Apply_changes_APPLY_"}},o=[{value:"\u0412\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430",id:"nested",children:[]}],i={toc:o};function l(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(u.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0441\u0435\u0441\u0441\u0438\u044f\u043c\u0438:"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",{parentName:"li",href:"/docusaurustest/ru/docs/Apply_changes_APPLY_"},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 (APPLY)")),Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",{parentName:"li",href:"/docusaurustest/ru/docs/Cancel_changes_CANCEL_"},"\u041e\u0442\u043c\u0435\u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 (CANCEL)")),Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",{parentName:"li",href:"/docusaurustest/ru/docs/New_session_NEWSESSION_NESTEDSESSION_"},"\u041d\u043e\u0432\u0430\u044f \u0441\u0435\u0441\u0441\u0438\u044f (NEWSESSION, NESTEDSESSION)")),Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",{parentName:"li",href:"/docusaurustest/ru/docs/Previous_value_PREV_"},"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 (PREV)")),Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",{parentName:"li",href:"/docusaurustest/ru/docs/Change_operators_SET_CHANGED_..._"},"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 (SET, CHANGED, ...)"))),Object(u.b)("p",null,"\u041e\u0442\u043c\u0435\u0442\u0438\u043c, \u0447\u0442\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u0434\u0432\u0430 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0441\u043e\u0437\u0434\u0430\u044e\u0442 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u0430 \u043d\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f."),Object(u.b)("h3",{id:"nested"},"\u0412\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"),Object(u.b)("p",null,"\u041f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u043f\u0435\u0440\u0432\u044b\u0445 \u0442\u0440\u0435\u0445 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0435\u0441\u0441\u0438\u044f\u043c\u0438, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0441\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0432 ",Object(u.b)("strong",{parentName:"p"},"NULL"),'. \u042d\u0442\u043e \u043d\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0443\u0434\u043e\u0431\u043d\u043e, \u0438, \u043a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u0447\u0430\u0441\u0442\u043e \u0431\u044b\u0432\u0430\u0435\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u0435\u0436\u0434\u0443 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u0441\u0435\u0441\u0441\u0438\u044f\u043c\u0438 / "\u0446\u0438\u043a\u043b\u0430\u043c\u0438 \u0436\u0438\u0437\u043d\u0438" \u043e\u0434\u043d\u043e\u0439 \u0441\u0435\u0441\u0441\u0438\u0438. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0432 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435 \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\xa0\u043f\u043e\u043c\u0435\u0447\u0430\u0442\u044c \u043a\u0430\u043a ',Object(u.b)("em",{parentName:"p"},"\u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435"),". \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435:"),Object(u.b)("ol",null,Object(u.b)("li",{parentName:"ol"},"\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043d\u043e\u0432\u043e\u0439 \u0441\u0435\u0441\u0441\u0438\u0438 - \u0432\u0441\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0441\u043a\u043e\u043f\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0432 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0435\u043c\u0443\u044e \u0441\u0435\u0441\u0441\u0438\u044e, \u0430 \u043f\u0440\u0438 \u0435\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u0438\u0438 \u0441\u043a\u043e\u043f\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043d\u0430\u0437\u0430\u0434."),Object(u.b)("li",{parentName:"ol"},"\u041f\u0440\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 - \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u0432\u0441\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u043f\u043e\u0441\u043b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439, \u0441\u0435\u0441\u0441\u0438\u044f \u043e\u0447\u0438\u0449\u0430\u0435\u0442\u0441\u044f \u0432\u043c\u0435\u0441\u0442\u0435 \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u0432\u0441\u0435\u0445 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432)."),Object(u.b)("li",{parentName:"ol"},"\u041f\u0440\u0438 \u043e\u0442\u043c\u0435\u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 - \u0432\u0441\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0442\u0430\u043a\u0438\u043c\u0438 \u0436\u0435 \u043a\u0430\u043a\u0438\u043c\u0438 \u0431\u044b\u043b\u0438 \u043f\u0435\u0440\u0435\u0434 \u043e\u0442\u043c\u0435\u043d\u043e\u0439 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439.")),Object(u.b)("p",null,"\u041f\u043e\u043c\u0435\u0442\u043a\u0443 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043c\u043e\u0436\u043d\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0430\u043a \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 (\u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0439), \u0442\u0430\u043a \u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0435\u0441\u0441\u0438\u044f\u043c\u0438. \u0422\u0430\u043a\u0436\u0435 \u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0439 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0435\u0441\u0441\u0438\u044f\u043c\u0438 \u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c, \u0447\u0442\u043e \u0432\u0441\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u043c\u0438."))}l.isMDXComponent=!0}}]);