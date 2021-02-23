(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{238:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return i})),s.d(t,"metadata",(function(){return c})),s.d(t,"toc",(function(){return p})),s.d(t,"default",(function(){return u}));var n=s(3),a=s(7),o=(s(0),s(421)),r=s(56),i={title:"Simple constraints"},c={unversionedId:"Simple_constraints",id:"Simple_constraints",isDocsHomePage:!1,title:"Simple constraints",description:"The platform currently supports four types of simple constraints: consequence, exception, equality, and definiteness. For all simple constraints, an automatic resolution mechanism is supported. When this is enabled, instead of throwing an error the platform itself restores system integrity.",source:"@site/docs\\Simple_constraints.md",slug:"/Simple_constraints",permalink:"/docusaurustest/docs/Simple_constraints",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Simple_constraints.md",version:"current",sidebar:"docs",previous:{title:"Constraints",permalink:"/docusaurustest/docs/Constraints"},next:{title:"Classes",permalink:"/docusaurustest/docs/Classes"}},p=[{value:"Examples",id:"examples",children:[]}],l={toc:p};function u(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The platform currently supports four types of ",Object(o.b)("em",{parentName:"p"},"simple constraints"),": ",Object(o.b)("em",{parentName:"p"},"consequence"),", ",Object(o.b)("em",{parentName:"p"},"exception"),", ",Object(o.b)("em",{parentName:"p"},"equality"),", and ",Object(o.b)("em",{parentName:"p"},"definiteness"),". For all simple constraints, an ",Object(o.b)("em",{parentName:"p"},"automatic resolution")," mechanism is supported. When this is enabled, instead of throwing an error the platform itself restores system integrity."),Object(o.b)("p",null,"[table was removed]"),Object(o.b)("p",null,"*","\xa0A change to ",Object(o.b)("strong",{parentName:"p"},"NULL"),"/non-",Object(o.b)("strong",{parentName:"p"},"NULL")," is the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/Data_properties_DATA"}),"data")," properties - ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/Property_change_CHANGE"}),"input")," ",Object(o.b)("strong",{parentName:"li"},"NULL")," or the default value for this property value class."),Object(o.b)("li",{parentName:"ul"},"For ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/Classification_IS_AS"}),"membership")," to a class - deleting an object ","\\","\\"," adding an object of a class for which belonging to the class is checked."),Object(o.b)("li",{parentName:"ul"},"For an ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docusaurustest/docs/Grouping_GROUP"}),"aggregation")," constraint - (only if changing to non-",Object(o.b)("strong",{parentName:"li"},"NULL"),") create an object of the base class (",Object(o.b)("strong",{parentName:"li"},"System"),".",Object(o.b)("strong",{parentName:"li"},"Object"),"), change to non-",Object(o.b)("strong",{parentName:"li"},"NULL")," conditions of the aggregation constraint, write the values of the corresponding parameters to all grouping values.")),Object(o.b)("p",null,"Just as for a basic ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Constraints"}),"constraint"),", for each simple constraint, a base\xa0event must be defined, which determines when the specified constraint will be checked.\xa0"),Object(o.b)("p",null,"Note that the definiteness constraint is a special case of the consequence, in which the consequence is a property that must be defined, and the premise is its signature (a property obtained from it using the corresponding ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Property_signature_CLASS"}),"operator"),")."),Object(o.b)("p",null,"There is also an implicit fifth kind of simple constraint, ",Object(o.b)("em",{parentName:"p"},"uniqueness"),", but it is combined with an aggregation operator (which returns this most unique value), and therefore it is not considered here. Together with consequences, this type of constraint allows to implement the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docusaurustest/docs/Aggregations"}),"aggregation")," mechanism.\xa0"),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=means",mdxType:"CodeSample"}))}u.isMDXComponent=!0}}]);