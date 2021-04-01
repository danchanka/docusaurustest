(window.webpackJsonp=window.webpackJsonp||[]).push([[213,460],{285:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(3),i=n(7),a=(n(0),n(749)),l=n(57),r={title:"Materials management"},s={unversionedId:"Materials_management",id:"version-1.0.0/Materials_management",isDocsHomePage:!1,title:"Materials management",description:'Description of the "Materials management" task',source:"@site/versioned_docs/version-1.0.0/Materials_management.md",slug:"/Materials_management",permalink:"/docusaurustest/docs/Materials_management",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/Materials_management.md",version:"1.0.0",sidebar:"version-1.0.0/docs",previous:{title:"Score table",permalink:"/docusaurustest/docs/Score_table"},next:{title:"How-to: Overview",permalink:"/docusaurustest/docs/How-to"}},c=[{value:"Description of the &quot;Materials management&quot; task",id:"description-of-the-materials-management-task",children:[]},{value:"Defining domain logic",id:"defining-domain-logic",children:[{value:"Defining a stock",id:"defining-a-stock",children:[]},{value:"Defining an item",id:"defining-an-item",children:[]},{value:"Defining a legal entity",id:"defining-a-legal-entity",children:[]},{value:"Defining a receipt",id:"defining-a-receipt",children:[]},{value:"Defining a shipment",id:"defining-a-shipment",children:[]},{value:"Defining current item balance",id:"defining-current-item-balance",children:[]}]},{value:"Defining view logic",id:"defining-view-logic",children:[]},{value:"The complete source code (on Github)",id:"the-complete-source-code-on-github",children:[]}],m={toc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description-of-the-materials-management-task"},'Description of the "Materials management" task'),Object(a.b)("p",null,"The information system being created using the ",Object(a.b)("strong",{parentName:"p"},"lsFusion"),"\xa0 platform must support very basic supply chain execution capabilities."),Object(a.b)("p",null,"For simplicity, let's define one type of document in our system that increases the stock balance \u2014 a receipt from the supplier; and one type of document that does the opposite \u2014 a shipment for a wholesale to a customer."),Object(a.b)("h2",{id:"defining-domain-logic"},"Defining domain logic"),Object(a.b)("p",null,"The information system will consist of a set of ",Object(a.b)("a",{parentName:"p",href:"/docusaurustest/docs/Modules"},"modules"),", each implementing a logically isolated piece of functionality. Each module can use the functionality of other modules, which involves special syntax constructions for defining module dependencies."),Object(a.b)("p",null,"Based on our task, let's define the list of modules to be implemented: stock module, item module, legal entity module, receipt module, shipment module, current balance module. We will separately define the main module that will be executed and will basically be a compound solution. The composition of modules can be different and is determined by the developer depending on the need to re-use the functionality elsewhere."),Object(a.b)("h3",{id:"defining-a-stock"},"Defining a stock"),Object(a.b)("p",null,"Let's create a module where we will define a stock instance and its attributes."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Stock&original=1&block=module",mdxType:"CodeSample"}),Object(a.b)("p",null,"Let's define the concept of a stock and its attributes: name, address."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Stock&original=1&block=class",mdxType:"CodeSample"}),Object(a.b)("h3",{id:"defining-an-item"},"Defining an item"),Object(a.b)("p",null,"Let's create a module in which we'll define the concept of an item and its attributes."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Item&original=1&block=module",mdxType:"CodeSample"}),Object(a.b)("p",null,"Let's define the concept of an item and its attributes: name, barcode."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Item&original=1&block=class",mdxType:"CodeSample"}),Object(a.b)("p",null,"Let's set the wholesale price for an item."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Item&original=1&block=price",mdxType:"CodeSample"}),Object(a.b)("h3",{id:"defining-a-legal-entity"},"Defining a legal entity"),Object(a.b)("p",null,"Let's create a module where we will define a legal entity instance and its attributes. In the system, legal entities will act as suppliers and customers."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/LegalEntity&original=1&block=module",mdxType:"CodeSample"}),Object(a.b)("p",null,"Let's define the concept of a legal entity and its attributes: name, legal address, Tax ID."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/LegalEntity&original=1&block=class",mdxType:"CodeSample"}),Object(a.b)("p",null,"We define the uniqueness of the Tax ID for the legal entity."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/LegalEntity&original=1&block=inn",mdxType:"CodeSample"}),Object(a.b)("p",null,"The legalEntityINN property binds an organization and a Tax ID one-to-one and allows to find a legal entity by a Tax ID. The expression of the property can be interpreted as follows: when grouping legal entities by Tax ID (innLegalEntity property), each group must contain a non-repeating legal entity."),Object(a.b)("h3",{id:"defining-a-receipt"},"Defining a receipt"),Object(a.b)("p",null,"Let's create a module where we'll define all instances and attributes required for defining the logic of a supplier receipt."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Receipt&original=1&block=module",mdxType:"CodeSample"}),Object(a.b)("p",null,"Let's define the use of functionality from other modules in the Receipt module."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Receipt&original=1&block=require",mdxType:"CodeSample"}),Object(a.b)("p",null,"We define the concepts that determine the logic of a supplier receipt. Let's work on the premise that all documents (both receipts and shipments) in the system consist of a header and an item specification. Accordingly, let's define the concepts of a receipt header and receipt line."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Receipt&original=1&block=class",mdxType:"CodeSample"}),Object(a.b)("p",null,"Each receipt line contains a link to the document header, so in the end, the header and the subset of lines with links to this document together define the receipt from the user perspective. The \xa0NONULL parameter indicates that the link must be defined. The \xa0DELETE\xa0 parameter specifies that if the main Receipt object is deleted, all ReceiptDetail lines linking to it will also be deleted. By default, when an object is deleted, all links to it are nullified. This way, without the DELETE\xa0 parameter, the system will show an error message about an undefined link."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Receipt&original=1&block=documentref",mdxType:"CodeSample"}),Object(a.b)("p",null,"Let's define the line number in a receipt."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Receipt&original=1&block=index",mdxType:"CodeSample"}),Object(a.b)("p",null,"The use of the name of an object class in expressions is similar to using its identification number (id) created by the system for all objects by an automatic counter. In this case, the use of the ORDER receiptDetail construct helps sort the lines of the receipt by the order of ascension of their id, i.e. basically in the order of their creation."),Object(a.b)("p",null,"Here, the PARTITION instruction uses the BY block that groups objects by a certain attribute. The calculation of the expression cumulative total is performed in each group. In this case, the line number is determined only within this line's document (receipt(d) property)."),Object(a.b)("p",null,"We define a set of key attributes of a receipt header: number, date, supplier and its name, the stock where the product is received and its name. The name of the supplier and the stock will be needed in the future for displaying them on the form."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Receipt&original=1&block=headerattributes",mdxType:"CodeSample"}),Object(a.b)("p",null,"We define a set of key attributes of a receipt line: item and its name, quantity, supplier price, supplier amount (price multiplied by quantity)."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Receipt&original=1&block=detailattributes",mdxType:"CodeSample"}),Object(a.b)("h3",{id:"defining-a-shipment"},"Defining a shipment"),Object(a.b)("p",null,"Let's create a module where we will define all instances and attributes required for a wholesale shipment."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Shipment&original=1&block=module",mdxType:"CodeSample"}),Object(a.b)("p",null,"\xa0We define the use of functionality from other modules in the Shipment module."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Shipment&original=1&block=require",mdxType:"CodeSample"}),Object(a.b)("p",null,"Similarly to the receipt, we define the shipment header and lines, as well as a link in the line to the header and its number."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Shipment&original=1&block=class",mdxType:"CodeSample"}),Object(a.b)("p",null,"We define a set of attributes for the shipment: number, date, customer and its name, the stock from which the item is shipped, and its name."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Shipment&original=1&block=headerattributes",mdxType:"CodeSample"}),Object(a.b)("p",null,"We define a set of key attributes of a shipment: item and its name, quantity, sale price, sale amount (price multiplied by quantity)."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Shipment&original=1&block=detailattributes",mdxType:"CodeSample"}),Object(a.b)("p",null,"We implement the auto filling of the item sale price in the shipment with the value of the wholesale price defined by the user for item (salePrice property). Auto filling for the shipment line should work when the item is changed (WHEN CHANGED instruction)."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Shipment&original=1&block=priceset",mdxType:"CodeSample"}),Object(a.b)("h3",{id:"defining-current-item-balance"},"Defining current item balance"),Object(a.b)("p",null,"The current item balance is defined as a difference between all item receipts and all its shipments."),Object(a.b)("p",null,"Let's create a separate module."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/StockItem&original=1&block=module",mdxType:"CodeSample"}),Object(a.b)("p",null,"\xa0We define the use of functionality from other modules in the StockItem module."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/StockItem&original=1&block=require",mdxType:"CodeSample"}),Object(a.b)("p",null,"Let's define the calculated property of the current item balance at the stock in quantitative terms."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/StockItem&original=1&block=properties",mdxType:"CodeSample"}),Object(a.b)("p",null,"Let's prohibit the negative item balance. The prohibition will work for any user action resulting in a negative balance. In this case, the user will see a specified message on the screen."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/StockItem&original=1&block=constraint",mdxType:"CodeSample"}),Object(a.b)("h2",{id:"defining-view-logic"},"Defining view logic"),Object(a.b)("p",null,"In order to be able to work with the created solution, let's add directory forms and a current balances form, and also a set of paired forms for working with documents: a form for listing receipts and a form for editing them, a form for listing shipments and a form for editing them."),Object(a.b)("p",null,"First, let's create directory forms."),Object(a.b)("p",null,"In the Stock module, we add a form that provides the user with the functionality of creating and deleting stocks, as well as changing their attributes."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Stock&original=1&block=form",mdxType:"CodeSample"}),Object(a.b)("p",null,"In a similar manner, we'll create an item form in the Item module, and a legal entity form in the LegalEntity module."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Item&original=1&block=class",mdxType:"CodeSample"}),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/LegalEntity&original=1&block=class",mdxType:"CodeSample"}),Object(a.b)("p",null,"Let's create edit forms for a receipt and a shipment. These forms will be used for creating new documents or editing existing ones. The layout of the forms will be similar: two vertical blocks, the top one containing a panel with the header attributes of the document being created/edited, and the lower one containing the document lines in a grid view and their attributes."),Object(a.b)("p",null,"In the Receipt module, we should create a receipt edit form. For the form we are building, we specify that it will be used as a default form for creating/editing receipts (the EDIT instruction)."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Receipt&original=1&block=formedit",mdxType:"CodeSample"}),Object(a.b)("p",null,'Line filtering for the current receipt is performed with the help of the FILTERS receipt(d) == r expression. The FILTERS construct displays an object of a corresponding class on the form if the filter expression returns a value different from NULL. In this case, the receipt line will be displayed on the form if the header of the document to which the line is linked ("receipt" property) equals to the current object of the top block. In other words, only the lines of the created/edited document will be displayed.'),Object(a.b)("p",null,'In addition, if a filter is specified for objects of this class on the form, then when the user presses the NEW button, the property of the newly added object will be automatically filled in a way that will make this object meet the filter conditions. In this case, when a new receipt line is created, the "receipt" property of this line will be automatically filled with a link to the current header of the receipt.'),Object(a.b)("p",null,"Let's create an edit form for the shipment in the Shipment module. For the form we are creating, we specify that it will be used as the default form for creating/editing shipments (EDIT instruction)."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Shipment&original=1&block=formedit",mdxType:"CodeSample"}),Object(a.b)("p",null,"Visually, supplier receipt and shipment forms will look almost identical and consist of two vertical blocks: one with a table for document headers and one with a table of document lines. Document lines should support visual filtering by documents and their subsets displayed on the form will change when navigating in the top block."),Object(a.b)("p",null,"Let's create a receipt form. On this form, we will display all the properties defined above for document headers and their lines. Additionally, we will place automatically defined buttons for creating/editing a receipt using the edit form created above. All properties of document headers and their lines, except the buttons for creating/editing a receipt, should be read-only for editing directly on the form (READONLY operator)."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Receipt&original=1&block=formlist",mdxType:"CodeSample"}),Object(a.b)("p",null,"Let's create the shipment form in a similar manner."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Shipment&original=1&block=formlist",mdxType:"CodeSample"}),Object(a.b)("p",null,"Next, in the\xa0StockItem module, let's create a form for displaying current balances. A form should be a table whose lines contain information about the item (its name and barcode), the name of the stock, and the current balance for this item at this stock. The count of lines on the form will be equal to the count of items entered into the system multiplied by the count of entered stocks. To display only relevant data (i.e. only those items and stocks, for whose intersection the current balance is not NULL), let's add a filter to the form."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/StockItem&original=1&block=form",mdxType:"CodeSample"}),Object(a.b)("p",null,"The OBJECTS si = (s = Stock, i = Item) construct adds an object group with the name si, which is a Cartesian product of Stock and Item class objects."),Object(a.b)("p",null,"Finally, let's declare the head module and specify what functionality from other modules will be used in it."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/StockAccounting&original=1&block=module",mdxType:"CodeSample"}),Object(a.b)("p",null,"In the StockAccounting module, we compose the system menu. Directories should be added to the predefined ",Object(a.b)("strong",{parentName:"p"},"masterData")," folder of the navigator that we show immediately after the directories. We place the current balance form to the main menu (horizontal window ",Object(a.b)("strong",{parentName:"p"},"root"),"). Links to directory and document forms will be shown on the vertical ",Object(a.b)("strong",{parentName:"p"},"toolbar")," when the user selects a corresponding ",Object(a.b)("strong",{parentName:"p"},"root")," folder."),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/StockAccounting&original=1&block=navigator",mdxType:"CodeSample"}),Object(a.b)("p",null,"The process of creating an information system is completed."),Object(a.b)("h2",{id:"the-complete-source-code-on-github"},"The complete source code (on ",Object(a.b)("a",{parentName:"h2",href:"https://github.com/lsfusion/samples/tree/master/mm"},"Github"),")"),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Stock",mdxType:"CodeSample"}),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Item",mdxType:"CodeSample"}),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/LegalEntity",mdxType:"CodeSample"}),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Receipt",mdxType:"CodeSample"}),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/Shipment",mdxType:"CodeSample"}),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/StockItem",mdxType:"CodeSample"}),Object(a.b)(l.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=mm/StockAccounting",mdxType:"CodeSample"}))}d.isMDXComponent=!0},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return m})),n.d(t,"toc",(function(){return d})),n.d(t,"CodeSample",(function(){return p})),n.d(t,"default",(function(){return h}));var o=n(3),i=n(7),a=n(0),l=n.n(a),r=n(749),s=n(753),c={},m={unversionedId:"CodeSample",id:"version-1.0.0/CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/versioned_docs/version-1.0.0/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/versioned_docs/version-1.0.0/CodeSample.mdx",version:"1.0.0"},d=[],p=function(e){var t=e.url,n=e.lines,o=Object(a.useState)(""),i=o[0],c=o[1];return Object(a.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return c(e)}))}),[t,c]),i?n?Object(r.b)(l.a.Fragment,null,Object(r.b)(s.a,{className:"lsf",metastring:n,mdxType:"CodeBlock"},i),Object(r.b)("br",null)):Object(r.b)(l.a.Fragment,null,Object(r.b)(s.a,{className:"lsf",mdxType:"CodeBlock"},i),Object(r.b)("br",null)):Object(r.b)(s.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},u={toc:d,CodeSample:p};function h(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}))}h.isMDXComponent=!0},749:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),m=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=m(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||a;return n?i.a.createElement(h,r(r({ref:t},c),{},{components:n})):i.a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<a;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},751:function(e,t,n){"use strict";var o=n(0),i=n(754);t.a=function(){var e=Object(o.useContext)(i.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},752:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,i,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==i&&".."!==i&&"\u2025"!==i||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},753:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var o=n(3),i=n(0),a=n.n(i),l=n(755),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s={Prism:n(23).a,theme:r};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var d=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,o=Object.create(null),i=e.styles.reduce((function(e,n){var o=n.languages,i=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=m({},e[t],i);e[t]=n})),e}),o);return i.root=n,i.plain=m({},n,{backgroundColor:null}),i};function f(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var b=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,o=e.className,i=e.style,a=m({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==i&&(a.style=void 0!==a.style?m({},a.style,i):i),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),c(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,i=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===i&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===i&&!o)return a[n[0]];var l=o?{display:"inline-block"}:{},r=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(r))}})),c(this,"getTokenProps",(function(e){var n=e.key,o=e.className,i=e.style,a=e.token,l=m({},f(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==i&&(l.style=void 0!==l.style?m({},l.style,i):i),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,i=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return i({tokens:function(e){for(var t=[[]],n=[e],o=[0],i=[e.length],a=0,l=0,r=[],s=[r];l>-1;){for(;(a=o[l]++)<i[l];){var c=void 0,m=t[l],h=n[l][a];if("string"==typeof h?(m=l>0?m:["plain"],c=h):(m=u(m,h.type),h.alias&&(m=u(m,h.alias)),c=h.content),"string"==typeof c){var f=c.split(d),b=f.length;r.push({types:m,content:f[0]});for(var g=1;g<b;g++)p(r),s.push(r=[]),r.push({types:m,content:f[g]})}else l++,t.push(m),n.push(c),o.push(0),i.push(c.length)}l--,t.pop(),n.pop(),o.pop(),i.pop()}return p(r),s}(void 0!==l?t.tokenize(o,l,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(i.Component);var g=n(752),y=n.n(g),j={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=n(751),k=n(750),v=function(){var e=Object(k.useThemeConfig)().prism,t=Object(O.a)().isDarkTheme,n=e.theme||j,o=e.darkTheme||n;return t?o:n},S=n(756),w=n(58),C=n.n(w),T=/{([\d,-]+)}/,x=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),o=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+o+")\\s*$")},D=/(?:title=")(.*)(?:")/;function E(e){var t=e.children,n=e.className,r=e.metastring,c=Object(k.useThemeConfig)().prism,m=Object(i.useState)(!1),d=m[0],p=m[1],u=Object(i.useState)(!1),h=u[0],f=u[1];Object(i.useEffect)((function(){f(!0)}),[]);var g=Object(i.useRef)(null),j=[],O="",w=v(),E=Array.isArray(t)?t.join(""):t;if(r&&T.test(r)){var L=r.match(T)[1];j=y()(L).filter((function(e){return e>0}))}r&&D.test(r)&&(O=r.match(D)[1]);var I=n&&n.replace(/language-/,"");!I&&c.defaultLanguage&&(I=c.defaultLanguage);var N=E.replace(/\n$/,"");if(0===j.length&&void 0!==I){for(var P,R="",B=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"]);case"jsx":case"tsx":return x(["js","jsBlock","jsx"]);case"html":return x(["js","jsBlock","html"]);case"python":case"py":return x(["python"]);default:return x()}}(I),A=E.replace(/\n$/,"").split("\n"),M=0;M<A.length;){var q=M+1,W=A[M].match(B);if(null!==W){switch(W.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":R+=q+",";break;case"highlight-start":P=q;break;case"highlight-end":R+=P+"-"+(q-1)+","}A.splice(M,1)}else M+=1}j=y()(R),N=A.join("\n")}var _=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const i=document.getSelection();let a=!1;i.rangeCount>0&&(a=i.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),a&&(i.removeAllRanges(),i.addRange(a)),o&&o.focus()}(N),p(!0),setTimeout((function(){return p(!1)}),2e3)};return a.a.createElement(b,Object(o.a)({},s,{key:String(h),theme:w,code:N,language:I}),(function(e){var t,n=e.className,i=e.style,r=e.tokens,s=e.getLineProps,c=e.getTokenProps;return a.a.createElement("div",{className:C.a.codeBlockContainer},O&&a.a.createElement("div",{style:i,className:C.a.codeBlockTitle},O),a.a.createElement("div",{className:Object(l.a)(C.a.codeBlockContent,I)},a.a.createElement("div",{tabIndex:0,className:Object(l.a)(n,C.a.codeBlock,"thin-scrollbar",(t={},t[C.a.codeBlockWithTitle]=O,t))},a.a.createElement("div",{className:C.a.codeBlockLines,style:i},r.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=s({line:e,key:t});return j.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(o.a)({key:t},n),e.map((function(e,t){return a.a.createElement("span",Object(o.a)({key:t},c({token:e,key:t})))})))})))),a.a.createElement("button",{ref:g,type:"button","aria-label":Object(S.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(l.a)(C.a.copyButton),onClick:_},d?a.a.createElement(S.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.a.createElement(S.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},754:function(e,t,n){"use strict";var o=n(0),i=n.n(o).a.createContext(void 0);t.a=i}}]);