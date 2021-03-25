(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{216:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return m})),a.d(t,"default",(function(){return d}));var o=a(3),n=a(7),s=(a(0),a(424)),r=a(57),i={title:"Metaprogramming"},c={unversionedId:"Metaprogramming",id:"Metaprogramming",isDocsHomePage:!1,title:"Metaprogramming",description:"Metaprogramming is a type of programming associated with writing software code that results in the generation of more software code. Metaprogramming is used for code reusability and to speed up development.",source:"@site/docs/Metaprogramming.md",slug:"/Metaprogramming",permalink:"/docusaurustest/docs/Metaprogramming",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/Metaprogramming.md",version:"current",sidebar:"docs",previous:{title:"Form extension",permalink:"/docusaurustest/docs/Form_extension"},next:{title:"Integration: Overview",permalink:"/docusaurustest/docs/Integration"}},m=[{value:"Metacode",id:"metacode",children:[]},{value:"Lexeme concatenation",id:"concat",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:m};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Metaprogramming")," is a type of programming associated with writing software code that results in the generation of more software code. Metaprogramming is used for code reusability and to speed up development. \xa0"),Object(s.b)("h3",{id:"metacode"},"Metacode"),Object(s.b)("p",null,"In l",Object(s.b)("strong",{parentName:"p"},"sFusion\xa0"),"the metaprogramming tool used is ",Object(s.b)("em",{parentName:"p"},"metacode"),", which is\xa0described by the\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/META_instruction"},Object(s.b)("strong",{parentName:"a"},"META")," instruction"),".\xa0Metacode consists of a header and an ",Object(s.b)("strong",{parentName:"p"},"lsFusion")," code block describing the\xa0",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Instructions"},"instruction")," sequence.**\xa0",Object(s.b)("strong",{parentName:"p"},"This code block must end with the keyword "),"END**.\xa0Let us consider an example of metacode that allows you to add two ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Actions"},"actions")," to an arbitrary ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Forms"},"form"),":"),Object(s.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=MetaSample&block=definemeta1",mdxType:"CodeSample"}),Object(s.b)("p",null,"The first line of the example contains the metacode header. It consists of the keyword ",Object(s.b)("strong",{parentName:"p"},"META"),", metacode name, and parameter list. In this example, the metacode ",Object(s.b)("strong",{parentName:"p"},"addActions")," has one parameter: ",Object(s.b)("strong",{parentName:"p"},"formName"),". This is the name of the form to which the actions will be added. Let's consider the possible uses for this metacode, which are described by the ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Instruction_"},"instruction @"),".\xa0"),Object(s.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=MetaSample&block=implementmeta1",mdxType:"CodeSample"}),Object(s.b)("p",null,"The instruction to use metacode starts with the special symbol @, followed by the name of the metacode and the parameters passed. When generating the code, each metacode parameter is replaced by the value passed as a parameter of the @ instruction in all places where the metacode parameter is used. In this example, the metacode parameter\xa0",Object(s.b)("strong",{parentName:"p"},"formName")," will be replaced with ",Object(s.b)("strong",{parentName:"p"},"documentForm")," and ",Object(s.b)("strong",{parentName:"p"},"orderForm"),". The above metacode uses generate the following code block:"),Object(s.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=MetaSampleResult&block=resultmeta1",mdxType:"CodeSample"}),Object(s.b)("h3",{id:"concat"},"Lexeme concatenation"),Object(s.b)("p",null,"Simply substituting an ID for a metacode parameter is often not enough. For example, when creating a large number of new ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Element_identification"},"system elements"),"\xa0inside the metacode, you must be able to specify these new names. Passing all the names as metacode parameters can be inconvenient. For this reason the metacode contains the special operation ","#","#",", which operates at the ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Tokens"},"tokens")," level. This operation can concatenate two adjacent lexemes into one. If one of the concatenated lexemes is a ",Object(s.b)("a",{parentName:"p",href:"/docusaurustest/docs/Literals#strliteral-broken"},"string literal"),", the concatenation will result in a single string literal."),Object(s.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=MetaSample&block=definemeta2",mdxType:"CodeSample"}),Object(s.b)("p",null,"Using the metacode ",Object(s.b)("strong",{parentName:"p"},"objectProperties")," produces the following code:"),Object(s.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=MetaSampleResult&block=resultmeta2",mdxType:"CodeSample"}),Object(s.b)("p",null,"There is also the special operation ","#","#","#",". It is equivalent to operation ","#","#",", except that in the second of the concatenated literals, the first character, if a letter, is converted to uppercase."),Object(s.b)("h3",{id:"examples"},"Examples"),Object(s.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=InstructionSample&block=meta",mdxType:"CodeSample"}))}d.isMDXComponent=!0}}]);