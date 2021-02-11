(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),i=(n(0),n(419)),r={title:"Navigator design"},s={unversionedId:"Navigator_design",id:"Navigator_design",isDocsHomePage:!1,title:"Navigator design",description:"Navigator design\xa0determines how the navigator\xa0 is displayed to the user on the screen of his device (we will call the screen space on which the navigator is displayed the\xa0desktop).",source:"@site/docs\\Navigator_design.md",slug:"/Navigator_design",permalink:"/docusaurustest/docs/Navigator_design",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Navigator_design.md",version:"current",sidebar:"docs",previous:{title:"Navigator",permalink:"/docusaurustest/docs/Navigator"},next:{title:"Physical model",permalink:"/docusaurustest/docs/Physical_model"}},l=[{value:"Navigator elements layout in windows",id:"navigator-elements-layout-in-windows",children:[]},{value:"Window layout on the desktop",id:"window-layout-on-the-desktop",children:[]},{value:"Selected folder",id:"selected-folder",children:[]},{value:"Types",id:"types",children:[]},{value:"System windows",id:"system-windows",children:[]},{value:"Default layout",id:"default-layout",children:[]},{value:"Language",id:"language",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Navigator design"),"\xa0determines how the navigator\xa0 is displayed to the user on the screen of his device (we will call the screen space on which the navigator is displayed the\xa0",Object(i.b)("em",{parentName:"p"},"desktop"),")."),Object(i.b)("p",null,"The navigator design consists of multiple ",Object(i.b)("em",{parentName:"p"},"windows"),", desktop components,*\xa0*each of which\xa0displays certain ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Navigator"}),"navigator","\xa0"),"elements.\xa0"),Object(i.b)("p",null,"Each window must have a\xa0",Object(i.b)("em",{parentName:"p"},"caption")," which will be used when displaying the window in the user interface."),Object(i.b)("h3",{id:"navigator-elements-layout-in-windows"},"Navigator elements layout in windows"),Object(i.b)("p",null,"For each navigator element, you can specify the window in which its descendants should be displayed. If necessary, the element itself can be displayed there. Thus, the set of\xa0",Object(i.b)("em",{parentName:"p"},"subtrees")," (navigator ",Object(i.b)("em",{parentName:"p"},"elements"),") that is displayed in each window is uniquely determined. Graphically, this can be represented as follows:"),Object(i.b)("p",null,Object(i.b)("img",{src:n(480).default})),Object(i.b)("h3",{id:"window-layout-on-the-desktop"},"Window layout on the desktop"),Object(i.b)("p",null,"Each window occupies a predefined section of the desktop. Graphically, this can be represented as follows:"),Object(i.b)("p",null,"The entire desktop is 100x100 ",Object(i.b)("em",{parentName:"p"},"pixels")," in size. When creating a window, you must specify the window's upper left coordinate, width and height, expressed in ",Object(i.b)("em",{parentName:"p"},"pixels"),'. It is desirable that windows should "cover" the entire area of the desktop. If this does not happen, then the free area will be given to one of the windows (there is no guarantee as to which one). Two windows are allowed to have absolutely identical coordinates and sizes. In this case they will be displayed in the same place, but switching between them will be possible using tabs.'),Object(i.b)("h3",{id:"selected-folder"},"Selected folder"),Object(i.b)("p",null,"At any moment in time in each window there can be one current user-",Object(i.b)("em",{parentName:"p"},"selected\xa0"),"navigator folder. Accordingly, if the element item belongs to a window other than the window of its parent folder, then this element is shown in its window if and only if its parent folder is selected in its window. The predefined ",Object(i.b)("strong",{parentName:"p"},"System.root")," folder is always considered to be selected. If at some point a window does not display any navigator element, then that window is automatically hidden."),Object(i.b)("h3",{id:"types"},"Types"),Object(i.b)("p",null,"There are several\xa0window\xa0",Object(i.b)("em",{parentName:"p"},"types")," that determine which component in the interface will be used to display\xa0navigator elements."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Toolbar"),": a container consisting of buttons, each of which corresponds to one element of the navigator. The vertical toolbar places all buttons from top to bottom, indenting each element from the left depending on its position in the tree. The horizontal toolbar shows the buttons from left to right, without indentation."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Panel"),": a container in which the hierarchy of components corresponds to navigator elements, where for\xa0",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/Forms"}),"forms"),"\xa0and ",Object(i.b)("em",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"/docusaurustest/docs/Actions"}),"actions")),"\xa0buttons are created, and for navigator folders \u2013 nested containers with the corresponding caption. The vertical panel places all the nested containers and their buttons from top to bottom, and the horizontal panel places them from left to right."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Tree"),": a tree in which each node corresponds to a navigator element."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Menu"),": a menu in which a popup menu corresponds to each navigator folder, and the items on that menu correspond to the forms and actions.")),Object(i.b)("p",null,"By default, a UI component that displays navigator\xa0elements is wrapped into scrollbars. They appear when the component does not fit in the window. If necessary, this behavior can be disabled."),Object(i.b)("h3",{id:"system-windows"},"System windows"),Object(i.b)("p",null,"There are several predefined system windows that are necessary for the client application to work:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"forms"),": a window in which user forms open."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"log"),": a window in which messages to the user are displayed. If this window is invisible, messages will be shown to the user in the form of system dialog forms."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"status"),":\xa0a window in which various system information is displayed.")),Object(i.b)("p",null,"Also, three additional windows are automatically created for ease of development:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"root"),": a horizontal toolbar in which it is recommended to display navigator element*\xa0",Object(i.b)("strong",{parentName:"li"},"*root")," children. The navigator folder ",Object(i.b)("strong",{parentName:"li"},"System.root")," is displayed here by default."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"toolbar"),":\xa0a\xa0vertical\xa0toolbar\xa0in which it is recommended to display some of the descendants of the navigator elements that are displayed in the ",Object(i.b)("strong",{parentName:"li"},"root")," window."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"tree"),": a tree in\xa0which it is recommended to display some of the descendants\xa0of the navigator elements displayed in the*\xa0",Object(i.b)("strong",{parentName:"li"},"*root")," window")),Object(i.b)("h3",{id:"default-layout"},"Default layout"),Object(i.b)("p",null,"By default, the desktop has the following layout (the left coordinate, upper coordinate, width, and height are indicated in brackets):"),Object(i.b)("h3",{id:"language"},"Language"),Object(i.b)("p",null,"To manage windows, use the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/WINDOW_instruction"}),Object(i.b)("strong",{parentName:"a"},"WINDOW")," instruction"),"."),Object(i.b)("h3",{id:"examples"},"Examples"))}d.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,u=p["".concat(r,".").concat(h)]||p[h]||b[h]||i;return n?o.a.createElement(u,s(s({ref:t},c),{},{components:n})):o.a.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},480:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/86476284-b994267f287942113b1bef8fdf69aedf.png"}}]);