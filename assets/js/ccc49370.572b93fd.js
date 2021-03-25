(window.webpackJsonp=window.webpackJsonp||[]).push([[549],{749:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(758),i=t(764),c=t(754),s=t(755);var o=function(e){const{nextItem:a,prevItem:t}=e;return l.a.createElement("nav",{className:"pagination-nav","aria-label":Object(c.b)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.a.createElement("div",{className:"pagination-nav__item"},t&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},l.a.createElement(c.a,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&l.a.createElement(s.a,{className:"pagination-nav__link",to:a.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},l.a.createElement(c.a,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),l.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))},m=t(759),d=t(766),u=t(767);a.default=function(e){const{content:a,sidebar:t}=e,{frontMatter:n,metadata:c}=a,{title:s,description:g,nextItem:h,prevItem:p,editUrl:E}=c,{hide_table_of_contents:v}=n;return l.a.createElement(r.a,{title:s,description:g,wrapperClassName:"blog-wrapper"},a&&l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--3"},l.a.createElement(m.a,{sidebar:t})),l.a.createElement("main",{className:"col col--7"},l.a.createElement(i.a,{frontMatter:n,metadata:c,isBlogPostPage:!0},l.a.createElement(a,null)),l.a.createElement("div",null,E&&l.a.createElement(u.a,{editUrl:E})),(h||p)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement(o,{nextItem:h,prevItem:p}))),!v&&a.toc&&l.a.createElement("div",{className:"col col--2"},l.a.createElement(d.a,{toc:a.toc})))))}},759:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(0),l=t.n(n),r=t(753),i=t(755),c=t(59),s=t.n(c);function o({sidebar:e}){return 0===e.items.length?null:l.a.createElement("div",{className:Object(r.a)(s.a.sidebar,"thin-scrollbar")},l.a.createElement("h3",{className:s.a.sidebarItemTitle},e.title),l.a.createElement("ul",{className:s.a.sidebarItemList},e.items.map((e=>l.a.createElement("li",{key:e.permalink,className:s.a.sidebarItem},l.a.createElement(i.a,{isNavLink:!0,to:e.permalink,className:s.a.sidebarItemLink,activeClassName:s.a.sidebarItemLinkActive},e.title))))))}},760:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(755),i=t(751),c=t(753),s=t(754),o=t(752),m=(t(60),t(61)),d=t.n(m);var u=e=>function({id:a,...t}){const{navbar:{hideOnScroll:n}}=Object(o.useThemeConfig)();return a?l.a.createElement(e,t,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(c.a)("anchor",{[d.a.enhancedAnchor]:!n}),id:a}),t.children,l.a.createElement("a",{className:"hash-link",href:`#${a}`,title:Object(s.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.a.createElement(e,t)};const g={code:e=>{const{children:a}=e;return"string"==typeof a?a.includes("\n")?l.a.createElement(i.a,e):l.a.createElement("code",e):a},a:e=>l.a.createElement(r.a,e),pre:e=>{const{children:a}=e;return l.a.createElement(i.a,null==a?void 0:a.props)},h1:u("h1"),h2:u("h2"),h3:u("h3"),h4:u("h4"),h5:u("h5"),h6:u("h6")};a.a=g},764:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(753),i=t(750),c=t(754),s=t(755),o=t(760),m=t(762),d=t(62),u=t.n(d),g=t(752);a.a=function(e){const a=function(){const{selectMessage:e}=Object(g.usePluralForm)();return a=>{const t=Math.ceil(a);return e(t,Object(c.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}}(),{children:t,frontMatter:n,metadata:d,truncated:h,isBlogPostPage:p=!1}=e,{date:E,formattedDate:v,permalink:b,tags:f,readingTime:N}=d,{author:_,title:k,image:w,keywords:T}=n,O=n.author_url||n.authorURL,L=n.author_title||n.authorTitle,I=n.author_image_url||n.authorImageURL;return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{keywords:T,image:w}),l.a.createElement("article",{className:p?void 0:"margin-bottom--xl"},(()=>{const e=p?"h1":"h2";return l.a.createElement("header",null,l.a.createElement(e,{className:Object(r.a)("margin-bottom--sm",u.a.blogPostTitle)},p?k:l.a.createElement(s.a,{to:b},k)),l.a.createElement("div",{className:"margin-vert--md"},l.a.createElement("time",{dateTime:E,className:u.a.blogPostDate},v,N&&l.a.createElement(l.a.Fragment,null," \xb7 ",a(N)))),l.a.createElement("div",{className:"avatar margin-vert--md"},I&&l.a.createElement(s.a,{className:"avatar__photo-link avatar__photo",href:O},l.a.createElement("img",{src:I,alt:_})),l.a.createElement("div",{className:"avatar__intro"},_&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",{className:"avatar__name"},l.a.createElement(s.a,{href:O},_)),l.a.createElement("small",{className:"avatar__subtitle"},L)))))})(),l.a.createElement("div",{className:"markdown"},l.a.createElement(i.a,{components:o.a},t)),(f.length>0||h)&&l.a.createElement("footer",{className:"row margin-vert--lg"},f.length>0&&l.a.createElement("div",{className:"col"},l.a.createElement("strong",null,l.a.createElement(c.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),f.map((({label:e,permalink:a})=>l.a.createElement(s.a,{key:a,className:"margin-horiz--sm",to:a},e)))),h&&l.a.createElement("div",{className:"col text--right"},l.a.createElement(s.a,{to:d.permalink,"aria-label":`Read more about ${k}`},l.a.createElement("strong",null,l.a.createElement(c.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},766:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(753);var i=function(e,a,t){const[l,r]=Object(n.useState)(void 0);Object(n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),a=e.find((e=>{const{top:a}=e.getBoundingClientRect();return a>=t}));if(a){if(a.getBoundingClientRect().top>=t){const t=e[e.indexOf(a)-1];return null!=t?t:a}return a}return e[e.length-1]}();if(n){let t=0,i=!1;const c=document.getElementsByClassName(e);for(;t<c.length&&!i;){const e=c[t],{href:s}=e,o=decodeURIComponent(s.substring(s.indexOf("#")+1));n.id===o&&(l&&l.classList.remove(a),e.classList.add(a),r(e),i=!0),t+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},c=t(63),s=t.n(c);const o="table-of-contents__link";function m({toc:e,isChild:a}){return e.length?l.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},e.map((e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:`#${e.id}`,className:o,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(m,{isChild:!0,toc:e.children}))))):null}a.a=function({toc:e}){return i(o,"table-of-contents__link--active",100),l.a.createElement("div",{className:Object(r.a)(s.a.tableOfContents,"thin-scrollbar")},l.a.createElement(m,{toc:e}))}},767:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(0),l=t.n(n),r=t(754),i=t(3),c=t(753),s=t(64),o=t.n(s);var m=({className:e,...a})=>l.a.createElement("svg",Object(i.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(c.a)(o.a.iconEdit,e),"aria-label":"Edit page"},a),l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));function d({editUrl:e}){return l.a.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(m,null),l.a.createElement(r.a,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}}}]);