(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(423)),c=a(57),s={title:"Search"},b={unversionedId:"Search",id:"Search",isDocsHomePage:!1,title:"Search",description:"Each element in the system contains certain information that allows it\xa0to be uniquely identified\xa0among other elements of the system. However, providing all the information about the element in each place it is used is rather cumbersome; so the platform has a special\xa0search algorithm, which allows you to find the desired element with only part of the information about it (for example, only a short\xa0name\xa0and\xa0the module which uses the item you are searching for).",source:"@site/docs/Search.md",slug:"/Search",permalink:"/docusaurustest/docs/Search",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Search.md",version:"current",sidebar:"docs",previous:{title:"Naming",permalink:"/docusaurustest/docs/Naming"},next:{title:"Modularity",permalink:"/docusaurustest/docs/Modularity"}},i=[{value:"Additional operations to search for properties / actions",id:"additional-operations-to-search-for-properties--actions",children:[]},{value:"Examples",id:"examples",children:[]}],o={toc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Each element in the system contains certain information that allows it\xa0",Object(l.b)("a",{parentName:"p",href:"/docusaurustest/docs/Element_identification"},"to be uniquely identified"),"\xa0among other elements of the system. However, providing all the information about the element in each place it is used is rather cumbersome; so the platform has a special\xa0",Object(l.b)("em",{parentName:"p"},"search")," algorithm, which allows you to find the desired element with only part of the information about it (for example, only a short\xa0",Object(l.b)("a",{parentName:"p",href:"/docusaurustest/docs/Naming"},"name"),"\xa0and\xa0the ",Object(l.b)("a",{parentName:"p",href:"/docusaurustest/docs/Modules"},"module")," which uses the item you are searching for)."),Object(l.b)("p",null,"In general, a search algorithm consists of one or more\xa0",Object(l.b)("em",{parentName:"p"},"search steps.\xa0"),"The steps are executed one after another so that if the required element is not found in the first step, the second step is executed, then the next and so on until either the required element is found or the steps are completed (in the latter case, the platform will throw an error that the element was not found)."),Object(l.b)("p",null,"Each search step, in turn, consists of several substeps:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Step conditions"),"\xa0- a set of conditions, each of which must be met in order for the step to make sense at all. This check is done before any elements of the system are examined, and depends entirely on the context of the call."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Selection conditions"),"\xa0- a set of conditions, each of which must be met for any element that is potentially the required element. In this step, the elements are independent of each other, and the result of this step is a selected\xa0",Object(l.b)("em",{parentName:"li"},"set of candidates,\xa0"),"to be the required element."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"Selection operations"),'\xa0- a list of operations each of which filters a set of candidates, depending on which of the candidates in this set is potentially "better"\xa0(that is, with a higher probability)\xa0suited for the role of the required element.')),Object(l.b)("p",null,"If, after performing the last selection operation, there remains:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"exactly one element - it is considered to be the required element.\xa0"),Object(l.b)("li",{parentName:"ul"},"more than one element - the platform will throw an error that it is not possible to unambiguously determine the required element"),Object(l.b)("li",{parentName:"ul"},"zero elements - the platform will either go to the next search step (if one exists) or it will throw an error that the element was not found.")),Object(l.b)("p",null,"Below are the steps, conditions and operations of the search algorithm, depending on the type of the required element:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Element type"),Object(l.b)("th",{parentName:"tr",align:null},"Search step"),Object(l.b)("th",{parentName:"tr",align:null},"Step conditions"),Object(l.b)("th",{parentName:"tr",align:null},"Selection conditions"),Object(l.b)("th",{parentName:"tr",align:null},"Selection operations"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docusaurustest/docs/Modules"},"Modules")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("br",null),Object(l.b)("br",null)),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,Object(l.b)("br",null),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Name equals",Object(l.b)("a",{parentName:"td",href:"#name-matches"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("br",null),Object(l.b)("br",null))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docusaurustest/docs/Forms"},"Forms"),", ",Object(l.b)("a",{parentName:"td",href:"/docusaurustest/docs/User_classes"},"Classes"),", ",Object(l.b)("a",{parentName:"td",href:"/docusaurustest/docs/Navigator"},"Navigator Elements"),", ",Object(l.b)("a",{parentName:"td",href:"/docusaurustest/docs/Groups_of_properties_and_actions"},"Property and action groups")," , ",Object(l.b)("a",{parentName:"td",href:"/docusaurustest/docs/Tables"},"Tables"),", ",Object(l.b)("a",{parentName:"td",href:"/docusaurustest/docs/Navigator_design"},"Navigator Design")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("br",null),Object(l.b)("br",null)),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,Object(l.b)("br",null),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Name matches",Object(l.b)("a",{parentName:"td",href:"#name-matches"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Located in dependent module",Object(l.b)("a",{parentName:"td",href:"#located-in-dependent-module"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Located in specified namespace (if explicitly specified)",Object(l.b)("a",{parentName:"td",href:"#located-in-specified-namespace-if-explicitly-specified"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Selection of a priority namespace (if the namespace is not explicitly specified)",Object(l.b)("a",{parentName:"td",href:"#selection-of-a-priority-namespace-if-the-namespace-is-not-explicitly-specified"},"...")),Object(l.b)("br",null)))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,Object(l.b)("a",{parentName:"td",href:"/docusaurustest/docs/Metaprogramming"},"Metacodes"))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("br",null),Object(l.b)("br",null)),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,Object(l.b)("br",null),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Name matches",Object(l.b)("a",{parentName:"td",href:"#name-matches"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Located in dependent module",Object(l.b)("a",{parentName:"td",href:"#located-in-dependent-module"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Located in specified namespace (if explicitly specified)",Object(l.b)("a",{parentName:"td",href:"#located-in-specified-namespace-if-explicitly-specified"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Number of parameters matches",Object(l.b)("a",{parentName:"td",href:"#number-of-parameters-matches"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Selection of a priority namespace (if the namespace is not explicitly specified)",Object(l.b)("a",{parentName:"td",href:"#selection-of-a-priority-namespace-if-the-namespace-is-not-explicitly-specified"},"...")),Object(l.b)("br",null)))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docusaurustest/docs/Properties"},"Properties"),", ",Object(l.b)("a",{parentName:"td",href:"/docusaurustest/docs/Actions"},"Actions")),Object(l.b)("td",{parentName:"tr",align:null},"Local"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Search for property inside action",Object(l.b)("a",{parentName:"td",href:"#search-for-property-inside-action"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Namespace not specified explicitly",Object(l.b)("a",{parentName:"td",href:"#namespace-not-specified-explicitly"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Name matches",Object(l.b)("a",{parentName:"td",href:"#name-matches"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Located upper in the stack",Object(l.b)("a",{parentName:"td",href:"#located-upper-in-the-stack"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Parameters classes match",Object(l.b)("a",{parentName:"td",href:"#suitable-classes-of-parameters"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Selection of more specific classes of parameters",Object(l.b)("a",{parentName:"td",href:"#selection-of-more-specific-classes-of-parameters"},"...")),Object(l.b)("br",null)))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Local common"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Search for property inside action",Object(l.b)("a",{parentName:"td",href:"#search-for-property-inside-action"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Namespace not specified explicitly",Object(l.b)("a",{parentName:"td",href:"#namespace-not-specified-explicitly"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Name matches",Object(l.b)("a",{parentName:"td",href:"#name-matches"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Located upper in the stack",Object(l.b)("a",{parentName:"td",href:"#located-upper-in-the-stack"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Parameters classes intersect",Object(l.b)("a",{parentName:"td",href:"#classes-of-parameters-intersect"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("p",null,Object(l.b)("br",null),Object(l.b)("br",null)),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("br",null),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Global"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("br",null),Object(l.b)("br",null)),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Name matches",Object(l.b)("a",{parentName:"td",href:"#name-matches"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Located in dependent module",Object(l.b)("a",{parentName:"td",href:"#located-in-dependent-module"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Located in specified namespace (if explicitly specified)",Object(l.b)("a",{parentName:"td",href:"#located-in-specified-namespace-if-explicitly-specified"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Parameters classes match",Object(l.b)("a",{parentName:"td",href:"#suitable-classes-of-parameters"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Abstract property (if an abstract property is being searched for)",Object(l.b)("a",{parentName:"td",href:"#abstract-property-if-an-abstract-property-is-being-searched-for"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Selection of a priority namespace (if the namespace is not explicitly specified)",Object(l.b)("a",{parentName:"td",href:"#selection-of-a-priority-namespace-if-the-namespace-is-not-explicitly-specified"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Selection of non-matching classes of parameters (if an abstract property is being searched for)",Object(l.b)("a",{parentName:"td",href:"#selection-of-non-matching-classes-of-parameters-if-an-abstract-property-is-being-searched-for"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Selection of more specific classes of parameters",Object(l.b)("a",{parentName:"td",href:"#selection-of-more-specific-classes-of-parameters"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Global common"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Not searching for an abstract property",Object(l.b)("a",{parentName:"td",href:"#not-searching-for-an-abstract-property"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Name matches",Object(l.b)("a",{parentName:"td",href:"#name-matches"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Located in dependent module",Object(l.b)("a",{parentName:"td",href:"#located-in-dependent-module"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Located in specified namespace (if explicitly specified)",Object(l.b)("a",{parentName:"td",href:"#located-in-specified-namespace-if-explicitly-specified"},"...")),Object(l.b)("br",null),Object(l.b)("li",null,"Parameters classes intersect",Object(l.b)("a",{parentName:"td",href:"#classes-of-parameters-intersect"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("ul",null,Object(l.b)("br",null),Object(l.b)("li",null,"Selection of a priority namespace (if the namespace is not explicitly specified)",Object(l.b)("a",{parentName:"td",href:"#selection-of-a-priority-namespace-if-the-namespace-is-not-explicitly-specified"},"...")),Object(l.b)("br",null))),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("p",null,"Description of\xa0steps, conditions and operations of the search algorithm:"),Object(l.b)("h5",{id:"name-matches"},"Name matches"),Object(l.b)("p",null,"The name of the candidate matches the search name (must always be specified explicitly when searching). The comparison is case-sensitive (i.e. aA != AA)."),Object(l.b)("h5",{id:"located-in-dependent-module"},"Located in dependent module"),Object(l.b)("p",null,"Candidate module\xa0",Object(l.b)("a",{parentName:"p",href:"/docusaurustest/docs/Modules#dependencies-between-modules"},"depends on")," the module in which the search is performed."),Object(l.b)("h5",{id:"located-in-specified-namespace-if-explicitly-specified"},"Located in specified namespace (if explicitly specified)"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/docusaurustest/docs/Naming#namespaces"},"Namespace"),"\xa0of the candidate equals the namespace of the search (if this namespace is specified explicitly)."),Object(l.b)("h5",{id:"selection-of-a-priority-namespace-if-the-namespace-is-not-explicitly-specified"},"Selection of a priority namespace (if the namespace is not explicitly specified)"),Object(l.b)("p",null,"If the current set contains candidates from the namespace in which the search is performed, all other candidates are deleted from the set of candidates, and the selection operation is completed. If not,\xa0a similar action is repeated for\xa0",Object(l.b)("em",{parentName:"p"},"priority"),"\xa0namespaces of the module in which\xa0the search is being performed (in the order in which these priority namespaces were set). If nothing is found for them either, the set of candidates remains unchanged."),Object(l.b)("h5",{id:"number-of-parameters-matches"},"Number of parameters matches"),Object(l.b)("p",null,"The number of parameters of the candidate is equal to the number of parameters of the call."),Object(l.b)("h5",{id:"search-for-property-inside-action"},"Search for property inside action"),Object(l.b)("p",null,"This step is only executed to search for a property, and only if this search is inside some action (and not, for example, in a form declaration)."),Object(l.b)("h6",{id:"namespace-not-specified-explicitly"},"Namespace not specified explicitly"),Object(l.b)("p",null,"This step is only executed if no search namespace is specified."),Object(l.b)("h5",{id:"located-upper-in-the-stack"},"Located upper in the stack"),Object(l.b)("p",null,"The candidate is a\xa0",Object(l.b)("a",{parentName:"p",href:"/docusaurustest/docs/Data_properties_DATA#local-data-properties"},"local property"),"\xa0and:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"is declared inside an operator\xa0of a ",Object(l.b)("a",{parentName:"li",href:"/docusaurustest/docs/Sequence_..."},"sequence")," that executes an action that refers to the required element."),Object(l.b)("li",{parentName:"ul"},"is declared earlier than the action that directly refers to the required element.")),Object(l.b)("h5",{id:"suitable-classes-of-parameters"},"Suitable classes of parameters"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"#call-broken"},"Classes of call parameters"),"\xa0",Object(l.b)("a",{parentName:"p",href:"#directclasses-broken"},"match"),"\xa0",Object(l.b)("a",{parentName:"p",href:"#decl-broken"},"the classes of the candidate's parameters"),"\xa0or classes of the referring parameters are unknown."),Object(l.b)("h5",{id:"classes-of-parameters-intersect"},"Classes of parameters intersect"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"#call-broken"},"Classes of the referring parameters"),"\xa0",Object(l.b)("a",{parentName:"p",href:"#indirectclasses-broken"},"intersect"),"\xa0with\xa0",Object(l.b)("a",{parentName:"p",href:"#decl-broken"},"classes of the candidate's parameters"),"."),Object(l.b)("h5",{id:"selection-of-more-specific-classes-of-parameters"},"Selection of more specific classes of parameters"),Object(l.b)("p",null,"If the set of candidates includes properties\xa0",Object(l.b)("strong",{parentName:"p"},"A"),"\xa0and\xa0",Object(l.b)("strong",{parentName:"p"},"B")," such that ",Object(l.b)("strong",{parentName:"p"},"A"),"'s parameter classes match ",Object(l.b)("strong",{parentName:"p"},"B"),"'s, then property\xa0",Object(l.b)("strong",{parentName:"p"},"B"),"\xa0is removed from the set of candidates."),Object(l.b)("h5",{id:"not-searching-for-an-abstract-property"},"Not searching for an abstract property"),Object(l.b)("p",null,"This step is not executed if a property (action) is searched in the ",Object(l.b)("a",{parentName:"p",href:"/docusaurustest/docs/Property_extension"},"extension")," operator\xa0of the property (action), and the searched property\xa0is an extensible (abstract) property (when searching for properties in the right one part of extension operator implementation the common search mechanism is used)."),Object(l.b)("h5",{id:"abstract-property-if-an-abstract-property-is-being-searched-for"},"Abstract property (if an abstract property is being searched for)"),Object(l.b)("p",null,"The candidate is an\xa0",Object(l.b)("a",{parentName:"p",href:"/docusaurustest/docs/Property_extension"},"abstract"),"\xa0property (action)."),Object(l.b)("h5",{id:"selection-of-non-matching-classes-of-parameters-if-an-abstract-property-is-being-searched-for"},"Selection of non-matching classes of parameters (if an abstract property is being searched for)"),Object(l.b)("p",null,"If:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"the search is for an abstract property (action)"),Object(l.b)("li",{parentName:"ul"},"the referring parameter classes are not explicitly specified"),Object(l.b)("li",{parentName:"ul"},"the set of candidates includes properties (actions) whose parameter classes are equal to the classes of the call's parameters"),Object(l.b)("li",{parentName:"ul"},"the set of candidates includes properties (actions) whose parameter classes are not equal to the classes of the call's parameters")),Object(l.b)("p",null,"Then: properties (actions) from the third section are deleted from the set of candidates (i.e., those for which the parameter classes are equal to the classes of the referring parameters)"),Object(l.b)("h3",{id:"additional-operations-to-search-for-properties--actions"},"Additional operations to search for properties / actions"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Matching parameter classes")),Object(l.b)("p",null,"Let's say that the classes of parameters (A1, ..., An)\xa0",Object(l.b)("em",{parentName:"p"},"match")," the classes of parameters (B1, ..., Bm) if:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"n = m, i.e. the number of parameters is the same"),Object(l.b)("li",{parentName:"ul"},"for each parameter\xa0",Object(l.b)("strong",{parentName:"li"},"i"),", one of the following is true:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Ai is unknown (equal to\xa0",Object(l.b)("strong",{parentName:"li"},"?"),")"),Object(l.b)("li",{parentName:"ul"},"Bi is unknown (equal to\xa0",Object(l.b)("strong",{parentName:"li"},"?"),")"),Object(l.b)("li",{parentName:"ul"},"Ai\xa0",Object(l.b)("a",{parentName:"li",href:"/docusaurustest/docs/User_classes#inheritance"},"inherits"),"\xa0from Bi (more specifically, the set of descendant classes of Bi includes the set of descendant classes of Ai)")))),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Intersection of parameter classes")),Object(l.b)("p",null,"Let's say that the classes of parameters (A1, ..., An)\xa0",Object(l.b)("em",{parentName:"p"},"intersect with")," the classes of parameters (B1, ..., Bm) if:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"n = m, i.e. the number of parameters is the same"),Object(l.b)("li",{parentName:"ul"},"for each parameter\xa0",Object(l.b)("strong",{parentName:"li"},"i"),", one of the following is true:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Ai is unknown (equal to\xa0",Object(l.b)("strong",{parentName:"li"},"?"),")"),Object(l.b)("li",{parentName:"ul"},"Bi is unknown (equal to\xa0",Object(l.b)("strong",{parentName:"li"},"?"),")"),Object(l.b)("li",{parentName:"ul"},"Ai and Bi have a common descendant\xa0(more specifically, the set of descendant classes of Bi intersects with the set of descendant classes of Ai)")))),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Defining the classes of the referring parameters")),Object(l.b)("p",null,"When a call is made a property (action), if the parameter classes are not explicitly set, the platform tries to automatically determine them\xa0from the reference context. The following is an (incomplete) list of possible contexts, and how the platform determines the referring parameter classes in these cases:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Context"),Object(l.b)("th",{parentName:"tr",align:null},"Call parameter classes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Composition / Call"),Object(l.b)("td",{parentName:"tr",align:null},"Classes of the values of argument properties")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Use on the form"),Object(l.b)("td",{parentName:"tr",align:null},"Classes of objects taken by the required property/action")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Add actions to the navigator"),Object(l.b)("td",{parentName:"tr",align:null},"Empty list")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Results of input, external access"),Object(l.b)("td",{parentName:"tr",align:null},"Empty list")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Simple partitioning"),Object(l.b)("td",{parentName:"tr",align:null},"Classes of the values of group properties (",Object(l.b)("strong",null,"BY")," block)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Nested local properties in session operators"),Object(l.b)("td",{parentName:"tr",align:null},"Unknown")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Data import"),Object(l.b)("td",{parentName:"tr",align:null},"If a list of values is imported (",Object(l.b)("strong",null,"LIST"),"), the empty list, otherwise a list of a single ",Object(l.b)("strong",null,"INTEGER")," element")))),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Determining parameter classes of a property (action)")),Object(l.b)("p",null,"If the parameter classes of a property (action) are not explicitly specified, the platform tries to automatically determine them\xa0from the property (action) implementation. The following is an (incomplete) list of possible implementations, and how the platform determines property (action) parameter classes in these cases:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Context"),Object(l.b)("th",{parentName:"tr",align:null},"Call parameter classes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Expressions"),Object(l.b)("td",{parentName:"tr",align:null},"Classes of the parameters (in the order of their use)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Primary, Abstract"),Object(l.b)("td",{parentName:"tr",align:null},"Classes are specified explicitly in the operator itself")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Formula, Internal Call"),Object(l.b)("td",{parentName:"tr",align:null},"The classes can be specified explicitly in the operator itself; if not specified, all parameter classes are considered unknown (",Object(l.b)("strong",null,"?"),") and the number is determined by the specifics of the particular operator")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Grouping"),Object(l.b)("td",{parentName:"tr",align:null},"Classes of the values of group properties (",Object(l.b)("strong",null,"BY")," block)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Operations with object groups"),Object(l.b)("td",{parentName:"tr",align:null},"Classes of objects belonging to the used objects group")))),Object(l.b)("h3",{id:"examples"},"Examples"),Object(l.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ResolveASample",mdxType:"CodeSample"}),Object(l.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ResolveBSample",mdxType:"CodeSample"}),Object(l.b)(c.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=ResolveCSample",mdxType:"CodeSample"}),Object(l.b)("p",null,"**",Object(l.b)("br",{parentName:"p"}),"\n","**"))}p.isMDXComponent=!0}}]);