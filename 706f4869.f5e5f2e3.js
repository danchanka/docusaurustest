(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{227:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(419)),s={title:"Simple constraints"},i={unversionedId:"Simple_constraints",id:"Simple_constraints",isDocsHomePage:!1,title:"Simple constraints",description:"The platform currently supports four types of simple constraints: consequence, exception, equality, and definiteness. For all simple constraints, an automatic resolution mechanism is supported. When this is enabled, instead of throwing an error the platform itself restores system integrity.",source:"@site/docs\\Simple_constraints.md",slug:"/Simple_constraints",permalink:"/docusaurustest/docs/Simple_constraints",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Simple_constraints.md",version:"current",sidebar:"docs",previous:{title:"Constraints",permalink:"/docusaurustest/docs/Constraints"},next:{title:"Classes",permalink:"/docusaurustest/docs/Classes"}},c=[],p={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The platform currently supports four types of ",Object(o.b)("em",{parentName:"p"},"simple constraints"),": ",Object(o.b)("em",{parentName:"p"},"consequence"),", ",Object(o.b)("em",{parentName:"p"},"exception"),", ",Object(o.b)("em",{parentName:"p"},"equality"),", and ",Object(o.b)("em",{parentName:"p"},"definiteness"),". For all simple constraints, an ",Object(o.b)("em",{parentName:"p"},"automatic resolution")," mechanism is supported. When this is enabled, instead of throwing an error the platform itself restores system integrity."),Object(o.b)("p",null,"*","\xa0A change to ",Object(o.b)("strong",{parentName:"p"},"NULL"),"/non-",Object(o.b)("strong",{parentName:"p"},"NULL")," is the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docusaurustest/docs/Data_properties_DATA_"}),"data")," properties - ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docusaurustest/docs/Property_change_CHANGE_"}),"input")," ",Object(o.b)("strong",{parentName:"li"},"NULL")," or the default value for this property value class."),Object(o.b)("li",{parentName:"ul"},"For ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docusaurustest/docs/Classification_IS_AS_"}),"membership")," to a class - deleting an object ","\\","\\"," adding an object of a class for which belonging to the class is checked."),Object(o.b)("li",{parentName:"ul"},"For an ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docusaurustest/docs/Grouping_GROUP_"}),"aggregation")," constraint - (only if changing to non-",Object(o.b)("strong",{parentName:"li"},"NULL"),") create an object of the base class (",Object(o.b)("strong",{parentName:"li"},"System"),".",Object(o.b)("strong",{parentName:"li"},"Object"),"), change to non-",Object(o.b)("strong",{parentName:"li"},"NULL")," conditions of the aggregation constraint, write the values of the corresponding parameters to all grouping values.")),Object(o.b)("p",null,"Just as for a basic ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Constraints"}),"constraint"),", for each simple constraint, a base\xa0event must be defined, which determines when the specified constraint will be checked.\xa0"),Object(o.b)("p",null,"Note that the definiteness constraint is a special case of the consequence, in which the consequence is a property that must be defined, and the premise is its signature (a property obtained from it using the corresponding ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Property_signature_CLASS_"}),"operator"),")."),Object(o.b)("p",null,"There is also an implicit fifth kind of simple constraint, ",Object(o.b)("em",{parentName:"p"},"uniqueness"),", but it is combined with an aggregation operator (which returns this most unique value), and therefore it is not considered here. Together with consequences, this type of constraint allows to implement the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docusaurustest/docs/Aggregations"}),"aggregation")," mechanism.\xa0"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")))}u.isMDXComponent=!0},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,d=l["".concat(s,".").concat(m)]||l[m]||b[m]||o;return n?a.a.createElement(d,i(i({ref:t},p),{},{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);