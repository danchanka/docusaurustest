(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(419)),i={title:"Navigator design"},s={unversionedId:"Navigator_design",id:"Navigator_design",isDocsHomePage:!1,title:"Navigator design",description:"Navigator design\xa0determines how the navigator\xa0 is displayed to the user on the screen of his device (we will call the screen space on which the navigator is displayed the\xa0desktop).",source:"@site/docs\\Navigator_design.md",slug:"/Navigator_design",permalink:"/docusaurustest/docs/Navigator_design",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Navigator_design.md",version:"current",sidebar:"docs",previous:{title:"Navigator",permalink:"/docusaurustest/docs/Navigator"},next:{title:"Physical model",permalink:"/docusaurustest/docs/Physical_model"}},c=[],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Navigator design"),"\xa0determines how the navigator\xa0 is displayed to the user on the screen of his device (we will call the screen space on which the navigator is displayed the\xa0",Object(r.b)("em",{parentName:"p"},"desktop"),")."),Object(r.b)("p",null,"The navigator design consists of multiple ",Object(r.b)("em",{parentName:"p"},"windows"),", desktop components,*\xa0*each of which\xa0displays certain ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/Navigator"}),"navigator","\xa0"),"elements.\xa0"),Object(r.b)("p",null,"Each window must have a\xa0",Object(r.b)("em",{parentName:"p"},"caption")," which will be used when displaying the window in the user interface."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Navigator elements layout in windows")),Object(r.b)("p",null,"For each navigator element, you can specify the window in which its descendants should be displayed. If necessary, the element itself can be displayed there. Thus, the set of\xa0",Object(r.b)("em",{parentName:"p"},"subtrees")," (navigator ",Object(r.b)("em",{parentName:"p"},"elements"),") that is displayed in each window is uniquely determined. Graphically, this can be represented as follows:"),Object(r.b)("img",{src:"attachments/1310742/86476284.png",height:"400"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Window layout on the desktop")),Object(r.b)("p",null,"Each window occupies a predefined section of the desktop. Graphically, this can be represented as follows:"),Object(r.b)("p",null,"The entire desktop is 100x100 ",Object(r.b)("em",{parentName:"p"},"pixels")," in size. When creating a window, you must specify the window's upper left coordinate, width and height, expressed in ",Object(r.b)("em",{parentName:"p"},"pixels"),'. It is desirable that windows should "cover" the entire area of the desktop. If this does not happen, then the free area will be given to one of the windows (there is no guarantee as to which one). Two windows are allowed to have absolutely identical coordinates and sizes. In this case they will be displayed in the same place, but switching between them will be possible using tabs.'),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Selected folder")),Object(r.b)("p",null,"At any moment in time in each window there can be one current user-",Object(r.b)("em",{parentName:"p"},"selected\xa0"),"navigator folder. Accordingly, if the element item belongs to a window other than the window of its parent folder, then this element is shown in its window if and only if its parent folder is selected in its window. The predefined ",Object(r.b)("strong",{parentName:"p"},"System.root")," folder is always considered to be selected. If at some point a window does not display any navigator element, then that window is automatically hidden."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Types")),Object(r.b)("p",null,"There are several\xa0window\xa0",Object(r.b)("em",{parentName:"p"},"types")," that determine which component in the interface will be used to display\xa0navigator elements."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Toolbar"),": a container consisting of buttons, each of which corresponds to one element of the navigator. The vertical toolbar places all buttons from top to bottom, indenting each element from the left depending on its position in the tree. The horizontal toolbar shows the buttons from left to right, without indentation."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Panel"),": a container in which the hierarchy of components corresponds to navigator elements, where for\xa0",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docusaurustest/docs/Forms"}),"forms"),"\xa0and ",Object(r.b)("em",{parentName:"li"},Object(r.b)("a",Object(a.a)({parentName:"em"},{href:"/docusaurustest/docs/Actions"}),"actions")),"\xa0buttons are created, and for navigator folders \u2013 nested containers with the corresponding caption. The vertical panel places all the nested containers and their buttons from top to bottom, and the horizontal panel places them from left to right."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Tree"),": a tree in which each node corresponds to a navigator element."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Menu"),": a menu in which a popup menu corresponds to each navigator folder, and the items on that menu correspond to the forms and actions.")),Object(r.b)("p",null,"By default, a UI component that displays navigator\xa0elements is wrapped into scrollbars. They appear when the component does not fit in the window. If necessary, this behavior can be disabled."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"System windows")),Object(r.b)("p",null,"There are several predefined system windows that are necessary for the client application to work:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"forms"),": a window in which user forms open."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"log"),": a window in which messages to the user are displayed. If this window is invisible, messages will be shown to the user in the form of system dialog forms."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"status"),":\xa0a window in which various system information is displayed.")),Object(r.b)("p",null,"Also, three additional windows are automatically created for ease of development:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"root"),": a horizontal toolbar in which it is recommended to display navigator element*\xa0",Object(r.b)("strong",{parentName:"li"},"*root")," children. The navigator folder ",Object(r.b)("strong",{parentName:"li"},"System.root")," is displayed here by default."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"toolbar"),":\xa0a\xa0vertical\xa0toolbar\xa0in which it is recommended to display some of the descendants of the navigator elements that are displayed in the ",Object(r.b)("strong",{parentName:"li"},"root")," window."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"tree"),": a tree in\xa0which it is recommended to display some of the descendants\xa0of the navigator elements displayed in the*\xa0",Object(r.b)("strong",{parentName:"li"},"*root")," window")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Default layout")),Object(r.b)("p",null,"By default, the desktop has the following layout (the left coordinate, upper coordinate, width, and height are indicated in brackets):"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Language")),Object(r.b)("p",null,"To manage windows, use the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docusaurustest/docs/WINDOW_instruction"}),Object(r.b)("strong",{parentName:"a"},"WINDOW")," instruction"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Examples")))}p.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(i,".").concat(h)]||d[h]||b[h]||r;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);