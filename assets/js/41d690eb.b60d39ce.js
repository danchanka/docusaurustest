(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{249:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return a})),i.d(t,"toc",(function(){return l})),i.d(t,"default",(function(){return b}));var s=i(3),o=i(7),n=(i(0),i(750)),r={title:"Security policy"},a={unversionedId:"Security_policy",id:"version-1.0.0/Security_policy",isDocsHomePage:!1,title:"Security policy",description:"Customizing user roles",source:"@site/versioned_docs/version-1.0.0/Security_policy.md",slug:"/Security_policy",permalink:"/docusaurustest/docs/Security_policy",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/Security_policy.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Interpreter",permalink:"/docusaurustest/docs/Interpreter"},next:{title:"Process monitor",permalink:"/docusaurustest/docs/Process_monitor"}},l=[{value:"Customizing user roles",id:"customizing-user-roles",children:[]},{value:"Setting access to system elements",id:"setting-access-to-system-elements",children:[]}],c={toc:l};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(s.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"customizing-user-roles"},"Customizing user roles"),Object(n.b)("p",null,"The system uses the concept of User. A user is an object that contains information about one person working in the system. The system can store information about both its own employees and employees of other organizations."),Object(n.b)("p",null,"The functionality available to a User is determined by their Role or list of\xa0 Roles. The Role determines which forms, fields, and buttons are available."),Object(n.b)("p",null,"The User\u2019s card (Admin ","\\","\\"," Access ","\\","\\"," Users) indicates the Main role; if necessary, Additional roles are assigned (Fig. 1.)."),Object(n.b)("p",null,Object(n.b)("img",{src:i(838).default})),Object(n.b)("p",null,"Fig. 1. Assigning Employee Roles"),Object(n.b)("h3",{id:"setting-access-to-system-elements"},"Setting access to system elements"),Object(n.b)("p",null,"The security policy for each Role is configured in the Admin ","\\","\\"," Access ","\\","\\"," Security Policy ","\\","\\"," Roles tab.\xa0This is where the makeup of the Roles is determined, using the \xabAdd\xbb, \xabDelete\xbb, and \xabCopy\xbb buttons. When a Role\xa0is copied, all rights are copied too. If \xabdefault main role\xbb is specified, then when a new employee is saved without a primary role they will be assigned a role from this field."),Object(n.b)("p",null,Object(n.b)("img",{src:i(839).default})),Object(n.b)("p",null,"Fig. 2. Configuring security policy by role"),Object(n.b)("p",null,"For each Role, you can define some initial rights:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Enable / disable all elements of the navigator")," \u2013 serves for initial installation of access rights to all forms. For Roles with limited access to functionality, it is recommended that you set ",Object(n.b)("em",{parentName:"li"},"\xabDisable all navigation elements\xbb"),". This facilitates further customization of access to specific forms: you only need to list the forms to which the user has access."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Enable / disable viewing of all properties")," \u2013 serves for initial setting of rights to view all form elements: buttons, fields, \xabbirds\xbb , etc."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Enable / disable changing all properties")," \u2013 serves for initial installation of rights to use all form elements."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Prevent viewing / editing security policies")," \u2013 restricts access to security policy settings, i.e. an employee with this role will not be able to independently change access to form elements."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Disable password changes")," \u2013 employees with this role are not allowed to change their passwords. This restriction can be set for a specific user in the \xabUsers\xbb tab."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Disable profile editing")," \u2013 employees with this role are not allowed to change their Login, First Name, Last Name, Email, or font size. This restriction can be set for a specific user in the \xabUsers\xbb tab."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Open form once")," \u2013 if the user repeatedly opens an already open form (usually by accident), an additional window for the form is not created. If you do need to open the same form again, then hold down the Ctrl key when calling the form. This restriction can be set for a specific user in the \xabUsers\xbb tab."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Forms when opened")," \u2013 for each role, you can define the Forms that will be opened immediately when the employee enters the program. To do this, use the \xabDisplay forms by default\xbb field; the number is then indicated for the forms in the \xab, Default number\xbb field in the \xabNavigator\xbb tab. Usually used for a cashier's workstation.")),Object(n.b)("p",null,"Tabs on the \xabSecurity policy\xbb","\\","\\"," tab \xabRoles\xbb form:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The \xabNavigator\xbb tab displays all Forms that exist in the system. They are displayed either as a tree or as a table. In the tree view, the list of forms reflects the structure of existing modules and is most convenient for controlling access to them. In addition, a deeper the tree branch, the higher the priority set to ",Object(n.b)("em",{parentName:"li"},"Allow / Deny"),". For example, on the \xabDesktop\xbb, set the ",Object(n.b)("em",{parentName:"li"},"Deny")," flag for the entire Sales section but the ",Object(n.b)("em",{parentName:"li"},"Allow")," flag for the \xabInvoice\xbb form. (fig. 3.)")),Object(n.b)("p",null,Object(n.b)("img",{src:i(840).default})),Object(n.b)("p",null,"Fig. 3. Example of configuring access to forms"),Object(n.b)("p",null,"As a result, when a user logs in with this role, they will be able to access the \xabInvoice\xbb form but they will not see the \xabProcessing internal orders\xbb form. (fig. 4.)"),Object(n.b)("p",null,Object(n.b)("img",{src:i(841).default})),Object(n.b)("p",null,"Fig. 4. Result of setting access to forms"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The \xabProperties\xbb tab displays all the form elements available in the system: fields, buttons, \xabbirds\xbb, etc. Like the Forms themselves, Properties are presented in tree and table form. The functional content of the forms used can be set for a role by setting permissions / prohibitions on viewing and changing properties. As practice shows, using this tab is justified for setting access to the upper branches of the property tree, i.e. for whole property groups. To configure access by specific properties (on a specific form), it is better to use the context menu (right-click) on the form element of interest. For example, on the ",Object(n.b)("em",{parentName:"li"},"\xabInvoice (purchase)\xbb")," form we need to set constraints on closing documents for some roles. To do this, hover the mouse over the \xabClose\xbb button and right-click on ",Object(n.b)("em",{parentName:"li"},"\xabSecurity policy settings\xbb")," (fig. 5).")),Object(n.b)("p",null,Object(n.b)("img",{src:i(842).default})),Object(n.b)("p",null,"Fig. 5. How to configure access to an individual property"),Object(n.b)("p",null,"In the window that opens, check \xabDisable view\xbb. in the \xabAccess\xbb section. This means that for all roles, by default, this button in this form will not be visible. And further, by checking permit against certain roles, we enable employees of only these roles to use this button (Fig.7.7.)."),Object(n.b)("p",null,Object(n.b)("img",{src:i(843).default})),Object(n.b)("p",null,"Fig. 6. Option for configuring access to an individual property"),Object(n.b)("p",null,"In the same way, you can organize access to fields and columns on any form. All changes made when configuring access to an individual element of the Form are transmitted to the \xabProperties\xbb tab on the \xabSecurity policy\xbb form."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"On the tab \xabAdditional Security Policy\xbb, you can set the highest priority rights (bypassing those previously described) for some features in the program. This is done by entering the number 1 in the \xabOrder\xbb field (Fig. 7.).")),Object(n.b)("p",null,Object(n.b)("img",{src:i(844).default})),Object(n.b)("p",null,"Fig. 7. Setting an additional security policy"),Object(n.b)("p",null,"For Forms and Properties for which access rights have not been set (the enable / disable flags are not specified) at the role level, the rights specified in the \xabDefault\xbb are applied (Fig. 8.)."),Object(n.b)("p",null,Object(n.b)("img",{src:i(845).default})),Object(n.b)("p",null,"Fig. 8. Setting a default security policy"),Object(n.b)("p",null,"All changes made on the \xabSecurity policy\xbb form are activated after the next user login."))}b.isMDXComponent=!0},838:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/65241092-c7a8f222d016b37246b80cbc2fc97e79.png"},839:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/65241093-07098bf16173e36043cfe86de4f098b5.png"},840:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/65241094-e22bfbc68ece6dbd097d4531d4503ea3.png"},841:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/65241095-e15960935673dd130913e5accf46b72e.png"},842:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/65241096-18953e9ac8febe5161c3ca0ea999014e.png"},843:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/65241097-5223bf8bbcb749143a1fae8edc88169e.png"},844:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/65241098-0c86de253ab4738e0978cb4787b4856a.png"},845:function(e,t,i){"use strict";i.r(t),t.default=i.p+"assets/images/65241099-6e498f3567b3d2ae8ff5518704fc1a6f.png"}}]);