(window.webpackJsonp=window.webpackJsonp||[]).push([[235,436],{309:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var o=a(3),n=a(7),c=(a(0),a(750)),r=a(57),s={title:"How-to: Inheritance and aggregation"},i={unversionedId:"How-to_Inheritance_and_aggregation",id:"How-to_Inheritance_and_aggregation",isDocsHomePage:!1,title:"How-to: Inheritance and aggregation",description:"In order to demonstrate the principles of object inheritance and aggregation, let's implement the logic of creating batches based on receipts and production documents. Let's make it so that each new document with a Posted property will automatically generate exactly one new product batch.",source:"@site/docs/How-to_Inheritance_and_aggregation.md",slug:"/How-to_Inheritance_and_aggregation",permalink:"/docusaurustest/docs/next/How-to_Inheritance_and_aggregation",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/How-to_Inheritance_and_aggregation.md",version:"current",sidebar:"docs",previous:{title:"How-to: Constraints",permalink:"/docusaurustest/docs/next/How-to_Constraints"},next:{title:"How-to: Searching for elements: Overview",permalink:"/docusaurustest/docs/next/How-to_Searching_for_elements"}},l=[],p={toc:l};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"In order to demonstrate the principles of object inheritance and aggregation, let's implement the logic of creating batches based on receipts and production documents. Let's make it so that each new document with a Posted property will automatically generate exactly one new product batch."),Object(c.b)("p",null,"Let's update our logic with the notion of a product whose batches will be accounted for:"),Object(c.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseInheritance&block=item",mdxType:"CodeSample"}),Object(c.b)("p",null,"Let's create a ",Object(c.b)("strong",{parentName:"p"},"Receipt")," ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/User_classes"},"class")," with objects that will indicate the receipt of products:"),Object(c.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseInheritance&block=receipt",mdxType:"CodeSample"}),Object(c.b)("p",null,"For the purposes of this example, let's use a simplified scheme with a single class. In reality, you would be using two classes: ",Object(c.b)("strong",{parentName:"p"},"Receipt"),"\xa0(for documents) and ",Object(c.b)("strong",{parentName:"p"},"ReceiptDetail\xa0"),"(for document lines)."),Object(c.b)("p",null,"In a similar way, let's create a Production class to be used for manufactured products:"),Object(c.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseInheritance&block=production",mdxType:"CodeSample"}),Object(c.b)("p",null,"So far, we've been only creating regular classes without any inheritance. To implement the batch logic, let's create an abstract class called ",Object(c.b)("strong",{parentName:"p"},"Batch"),":"),Object(c.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseInheritance&block=batch",mdxType:"CodeSample"}),Object(c.b)("p",null,"Each object of this class will correspond to one batch of a particular product. All of its ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/Properties"},"properties")," will be declared abstract \u2014 that is, their implementation will differ depending on the class of a particular batch."),Object(c.b)("p",null,"You cannot directly create objects of the abstract ",Object(c.b)("strong",{parentName:"p"},"Batch")," class in the system. To do that, you need to declare specific classes that will be inherited from it. In particular, let's create a class for batches formed from the receipt of products:"),Object(c.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseInheritance&block=receiptbatch",mdxType:"CodeSample"}),Object(c.b)("p",null,"Use the ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/AGGR_operator"},"AGGR")," operator for each object of the ",Object(c.b)("strong",{parentName:"p"},"Receipt"),",\xa0 class with a defined ",Object(c.b)("strong",{parentName:"p"},"posted")," property to automatically create (and delete) an object of the ",Object(c.b)("strong",{parentName:"p"},"ReceiptBatch")," class. At this time, the system creates two properties with reciprocal object links: ",Object(c.b)("strong",{parentName:"p"},"batch(Receipt r)")," and ",Object(c.b)("strong",{parentName:"p"},"receipt(ReceiptBatch b)"),"."),Object(c.b)("p",null,"Now we need to inherit the ",Object(c.b)("strong",{parentName:"p"},"ReceiptBatch")," class from ",Object(c.b)("strong",{parentName:"p"},"Batch")," to make sure that all batches created by the receipt document also become objects of the abstract class (that is, previously declared batches):"),Object(c.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseInheritance&block=receiptbatchextend",mdxType:"CodeSample"}),Object(c.b)("p",null,"Inheritance is implemented with the help of the ",Object(c.b)("a",{parentName:"p",href:"/docusaurustest/docs/next/EXTEND_CLASS_instruction"},"EXTEND CLASS")," operator.\xa0After that, for each abstract property of ",Object(c.b)("strong",{parentName:"p"},"Batch"),", we define how exactly it should be calculated for a specific ",Object(c.b)("strong",{parentName:"p"},"ReceiptBatch")," class. Date and product values are retrieved from the receipt document through the ",Object(c.b)("strong",{parentName:"p"},"receipt(ReceiptBatch b)")," link. The necessary string is substituted into the batch type under the condition that the object belongs to the right class (otherwise, the expression will be defined for objects of any class, and the system will generate a signature mismatch error)."),Object(c.b)("p",null,"Note that you could inherit a class directly while declaring the ",Object(c.b)("strong",{parentName:"p"},"ReceiptBatch")," class."),Object(c.b)("p",null,"In a similar fashion, let's create batches for manufacturing documents:"),Object(c.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseInheritance&block=productionbatch",mdxType:"CodeSample"}),Object(c.b)("p",null,"If necessary, you can create a class for manual batch entry by the user:"),Object(c.b)(r.CodeSample,{url:"https://documentation.lsfusion.org/sample?file=UseCaseInheritance&block=userbatch",mdxType:"CodeSample"}))}d.isMDXComponent=!0},57:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return d})),a.d(t,"CodeSample",(function(){return u})),a.d(t,"default",(function(){return m}));var o=a(3),n=a(7),c=a(0),r=a.n(c),s=a(750),i=a(751),l={},p={unversionedId:"CodeSample",id:"CodeSample",isDocsHomePage:!1,title:"CodeSample",description:"const [content, setContent] = useState('')",source:"@site/docs/CodeSample.mdx",slug:"/CodeSample",permalink:"/docusaurustest/docs/next/CodeSample",editUrl:"https://github.com/danchanka/docusaurustest/edit/master/docs/CodeSample.mdx",version:"current"},d=[],u=function(e){var t=e.url,a=e.lines,o=Object(c.useState)(""),n=o[0],l=o[1];return Object(c.useEffect)((function(){fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t,l]),n?a?Object(s.b)(r.a.Fragment,null,Object(s.b)(i.a,{className:"lsf",metastring:a,mdxType:"CodeBlock"},n),Object(s.b)("br",null)):Object(s.b)(r.a.Fragment,null,Object(s.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},n),Object(s.b)("br",null)):Object(s.b)(i.a,{className:"lsf",mdxType:"CodeBlock"},"loading...")},b={toc:d,CodeSample:u};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},b,a,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0}}]);