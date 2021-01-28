(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{281:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return s})),i.d(t,"metadata",(function(){return a})),i.d(t,"toc",(function(){return l})),i.d(t,"default",(function(){return u}));var n=i(3),r=i(7),o=(i(0),i(424)),s={},a={unversionedId:"LSFUS/lsFusionSecurity_policy",id:"LSFUS/lsFusionSecurity_policy",isDocsHomePage:!1,title:"lsFusionSecurity_policy",description:"lsFusionSecurity policy",source:"@site/docs\\LSFUS\\lsFusionSecurity_policy.md",slug:"/LSFUS/lsFusionSecurity_policy",permalink:"/docusaurustest/docs/LSFUS/lsFusionSecurity_policy",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/LSFUS/lsFusionSecurity_policy.md",version:"current"},l=[{value:"Customizing user roles",id:"customizing-user-roles",children:[]},{value:"Setting access to system elements",id:"setting-access-to-system-elements",children:[]}],c={toc:l};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"lsfusionsecurity-policy"},"lsFusionSecurity policy"),Object(o.b)("h1",{id:"security-policy"},"Security policy"),Object(o.b)("h3",{id:"customizing-user-roles"},"Customizing user roles"),Object(o.b)("p",null,"The system uses the concept of User. A user is an object that contains information about one person working in the system. The system can store information about both its own employees and employees of other organizations."),Object(o.b)("p",null,"The functionality available to a User is determined by their Role or list of\xa0 Roles. The Role determines which forms, fields, and buttons are available."),Object(o.b)("p",null,"The User\u2019s card (Admin ","\\","\\"," Access ","\\","\\"," Users) indicates the Main role; if necessary, Additional roles are assigned (Fig. 1.)."),Object(o.b)("img",{src:"attachments/60555484/65241092.png",height:"250"}),Object(o.b)("p",null,"Fig. 1. Assigning Employee Roles"),Object(o.b)("h3",{id:"setting-access-to-system-elements"},"Setting access to system elements"),Object(o.b)("p",null,"The security policy for each Role is configured in the Admin ","\\","\\"," Access ","\\","\\"," Security Policy ","\\","\\"," Roles tab.\xa0This is where the makeup of the Roles is determined, using the \xabAdd\xbb, \xabDelete\xbb, and \xabCopy\xbb buttons. When a Role\xa0is copied, all rights are copied too. If \xabdefault main role\xbb is specified, then when a new employee is saved without a primary role they will be assigned a role from this field."),Object(o.b)("img",{src:"attachments/60555484/65241093.png",height:"250"}),Object(o.b)("p",null,"Fig. 2. Configuring security policy by role"),Object(o.b)("p",null,"For each Role, you can define some initial rights:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Enable / disable all elements of the navigator")," \u2013 serves for initial installation of access rights to all forms. For Roles with limited access to functionality, it is recommended that you set ",Object(o.b)("em",{parentName:"li"},"\xabDisable all navigation elements\xbb"),". This facilitates further customization of access to specific forms: you only need to list the forms to which the user has access."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Enable / disable viewing of all properties")," \u2013 serves for initial setting of rights to view all form elements: buttons, fields, \xabbirds\xbb , etc."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Enable / disable changing all properties")," \u2013 serves for initial installation of rights to use all form elements."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Prevent viewing / editing security policies")," \u2013 restricts access to security policy settings, i.e. an employee with this role will not be able to independently change access to form elements."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Disable password changes")," \u2013 employees with this role are not allowed to change their passwords. This restriction can be set for a specific user in the \xabUsers\xbb tab."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Disable profile editing")," \u2013 employees with this role are not allowed to change their Login, First Name, Last Name, Email, or font size. This restriction can be set for a specific user in the \xabUsers\xbb tab."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Open form once")," \u2013 if the user repeatedly opens an already open form (usually by accident), an additional window for the form is not created. If you do need to open the same form again, then hold down the Ctrl key when calling the form. This restriction can be set for a specific user in the \xabUsers\xbb tab."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Forms when opened")," \u2013 for each role, you can define the Forms that will be opened immediately when the employee enters the program. To do this, use the \xabDisplay forms by default\xbb field; the number is then indicated for the forms in the \xab, Default number\xbb field in the \xabNavigator\xbb tab. Usually used for a cashier's workstation.")),Object(o.b)("p",null,"Tabs on the \xabSecurity policy\xbb","\\","\\"," tab \xabRoles\xbb form:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The \xabNavigator\xbb tab displays all Forms that exist in the system. They are displayed either as a tree or as a table. In the tree view, the list of forms reflects the structure of existing modules and is most convenient for controlling access to them. In addition, a deeper the tree branch, the higher the priority set to ",Object(o.b)("em",{parentName:"li"},"Allow / Deny"),". For example, on the \xabDesktop\xbb, set the ",Object(o.b)("em",{parentName:"li"},"Deny")," flag for the entire Sales section but the ",Object(o.b)("em",{parentName:"li"},"Allow")," flag for the \xabInvoice\xbb form. (fig. 3.)")),Object(o.b)("img",{src:"attachments/60555484/65241094.png",height:"250"}),Object(o.b)("p",null,"Fig. 3. Example of configuring access to forms"),Object(o.b)("p",null,"As a result, when a user logs in with this role, they will be able to access the \xabInvoice\xbb form but they will not see the \xabProcessing internal orders\xbb form. (fig. 4.)"),Object(o.b)("img",{src:"attachments/60555484/65241095.png",height:"186"}),Object(o.b)("p",null,"Fig. 4. Result of setting access to forms"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The \xabProperties\xbb tab displays all the form elements available in the system: fields, buttons, \xabbirds\xbb, etc. Like the Forms themselves, Properties are presented in tree and table form. The functional content of the forms used can be set for a role by setting permissions / prohibitions on viewing and changing properties. As practice shows, using this tab is justified for setting access to the upper branches of the property tree, i.e. for whole property groups. To configure access by specific properties (on a specific form), it is better to use the context menu (right-click) on the form element of interest. For example, on the ",Object(o.b)("em",{parentName:"li"},"\xabInvoice (purchase)\xbb")," form we need to set constraints on closing documents for some roles. To do this, hover the mouse over the \xabClose\xbb button and right-click on ",Object(o.b)("em",{parentName:"li"},"\xabSecurity policy settings\xbb")," (fig. 5).")),Object(o.b)("img",{src:"attachments/60555484/65241096.png",height:"250"}),Object(o.b)("p",null,"Fig. 5. How to configure access to an individual property"),Object(o.b)("p",null,"In the window that opens, check \xabDisable view\xbb. in the \xabAccess\xbb section. This means that for all roles, by default, this button in this form will not be visible. And further, by checking permit against certain roles, we enable employees of only these roles to use this button (Fig.7.7.)."),Object(o.b)("img",{src:"attachments/60555484/65241097.png",height:"239"}),Object(o.b)("p",null,"Fig. 6. Option for configuring access to an individual property"),Object(o.b)("p",null,"In the same way, you can organize access to fields and columns on any form. All changes made when configuring access to an individual element of the Form are transmitted to the \xabProperties\xbb tab on the \xabSecurity policy\xbb form."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"On the tab \xabAdditional Security Policy\xbb, you can set the highest priority rights (bypassing those previously described) for some features in the program. This is done by entering the number 1 in the \xabOrder\xbb field (Fig. 7.).")),Object(o.b)("img",{src:"attachments/60555484/65241098.png",height:"250"}),Object(o.b)("p",null,"Fig. 7. Setting an additional security policy"),Object(o.b)("p",null,"For Forms and Properties for which access rights have not been set (the enable / disable flags are not specified) at the role level, the rights specified in the \xabDefault\xbb are applied (Fig. 8.)."),Object(o.b)("img",{src:"attachments/60555484/65241099.png",height:"250"}),Object(o.b)("p",null,"Fig. 8. Setting a default security policy"),Object(o.b)("p",null,"All changes made on the \xabSecurity policy\xbb form are activated after the next user login."))}u.isMDXComponent=!0},424:function(e,t,i){"use strict";i.d(t,"a",(function(){return b})),i.d(t,"b",(function(){return m}));var n=i(0),r=i.n(n);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(i),p=n,m=b["".concat(s,".").concat(p)]||b[p]||h[p]||o;return i?r.a.createElement(m,a(a({ref:t},c),{},{components:i})):r.a.createElement(m,a({ref:t},c))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,s=new Array(o);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var c=2;c<o;c++)s[c]=i[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,i)}p.displayName="MDXCreateElement"}}]);