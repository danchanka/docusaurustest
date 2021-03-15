(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{155:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return n})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var o=r(3),a=r(7),s=(r(0),r(423)),i={title:"Report design"},n={unversionedId:"Report_design",id:"Report_design",isDocsHomePage:!1,title:"Report design",description:"For each report you need to specify a special file (template) which will be used to build the result document. The name of the template for a specific\xa0report is \\*. Anempty\xa0object group is considered to have no name, so if the first object group is empty, the name of the template is simply\xa0equal to the name of the form (without the \\_ postfix).",source:"@site/docs/Report_design.md",slug:"/Report_design",permalink:"/docusaurustest/ru/docs/Report_design",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Report_design.md",version:"current",sidebar:"docs",previous:{title:"Print view",permalink:"/docusaurustest/ru/docs/Print_view"},next:{title:"Structured view",permalink:"/docusaurustest/ru/docs/Structured_view"}},p=[],c={toc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"For each report you need to specify a special file (",Object(s.b)("em",{parentName:"p"},"template)")," which will be used to build the result document. The name of the template for a specific\xa0report is <name\xa0",Object(s.b)("em",{parentName:"p"},"of form",">","_"),"<name of the first\xa0",Object(s.b)("em",{parentName:"p"},"group of objects"),">",". An",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/Static_view#empty"},"empty"),"\xa0object group is considered to have no name, so if the first object group is empty, the name of the template is simply\xa0equal to the name of the form (without the ","_"," postfix)."),Object(s.b)("p",null,"When developing a template, the developer can use the object group properties that are included in the corresponding report or ancestor reports as fields. The names and types of fields will be equal to the names and types of properties on the form.\xa0If one report is a child of another report, then it should be inserted into the template as a subreport. In this case, the properties and filters in it will use the current values of the objects of the upper report as the values of their upper objects."),Object(s.b)("p",null,"If at least one of the templates cannot be found when generating reports, an automatic template generation mechanism\xa0starts based on the current hierarchy: it creates a separate template for each report and adds all the necessary properties and subreports to it. At the same time, if several object groups are included in one report\xa0then the lowest group in the list will be used for detail, and a separate report group will be created with its own block for each upper group in the template, to which all the properties from this group will be added."),Object(s.b)("p",null,"The LGPL technology\xa0",Object(s.b)("a",{parentName:"p",href:"https://community.jaspersoft.com/project/jasperreports-library"},"JasperReports")," is used as a specific implementation of the document generation mechanism. Accordingly, templates are jrxml format files, which can be edited using the ",Object(s.b)("a",{parentName:"p",href:"https://community.jaspersoft.com/project/jaspersoft-studio"},"JasperSoft Studio")," application. At the time of generating the report, template files with the name <template name",">",".jrxml are searched for in the server's current\xa0",Object(s.b)("a",{parentName:"p",href:"https://docs.oracle.com/javase/8/docs/technotes/tools/windows/classpath.html"},"classpath")," (including all subdirectories). If no template file is found, the platform will generate an automatic design. When starting the server from the IDE and generating a report in\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/ru/docs/In_a_print_view_PRINT#interactive"},"preview mode"),", you can use the corresponding buttons\xa0to save this design to the launch directory (and the source directory), and then edit it in line with the requirements of the task (in this case, the platform will automatically sync files in the launch directory and source directory)."))}u.isMDXComponent=!0}}]);