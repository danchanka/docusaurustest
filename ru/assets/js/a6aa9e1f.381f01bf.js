(window.webpackJsonp=window.webpackJsonp||[]).push([[445],{748:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),i=t(758),s=t(764),m=t(755),c=t(754);var o=function(e){const{metadata:a}=e,{previousPage:t,nextPage:n}=a;return r.a.createElement("nav",{className:"pagination-nav","aria-label":Object(c.b)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(m.a,{className:"pagination-nav__link",to:t},r.a.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.a.createElement(c.a,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(m.a,{className:"pagination-nav__link",to:n},r.a.createElement("div",{className:"pagination-nav__label"},r.a.createElement(c.a,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},d=t(759);a.default=function(e){const{metadata:a,items:t,sidebar:n}=e,{siteConfig:{title:m}}=Object(l.default)(),{blogDescription:c,blogTitle:g,permalink:u}=a,h="/"===u?m:g;return r.a.createElement(i.a,{title:h,description:c,wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_posts_list"}},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(d.a,{sidebar:n})),r.a.createElement("main",{className:"col col--7"},t.map((({content:e})=>r.a.createElement(s.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},r.a.createElement(e,null)))),r.a.createElement(o,{metadata:a})))))}},759:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),r=t.n(n),l=t(753),i=t(755),s=t(59),m=t.n(s);function c({sidebar:e}){return 0===e.items.length?null:r.a.createElement("div",{className:Object(l.a)(m.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:m.a.sidebarItemTitle},e.title),r.a.createElement("ul",{className:m.a.sidebarItemList},e.items.map((e=>r.a.createElement("li",{key:e.permalink,className:m.a.sidebarItem},r.a.createElement(i.a,{isNavLink:!0,to:e.permalink,className:m.a.sidebarItemLink,activeClassName:m.a.sidebarItemLinkActive},e.title))))))}},760:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(755),i=t(751),s=t(753),m=t(754),c=t(752),o=(t(60),t(61)),d=t.n(o);var g=e=>function({id:a,...t}){const{navbar:{hideOnScroll:n}}=Object(c.useThemeConfig)();return a?r.a.createElement(e,t,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",{[d.a.enhancedAnchor]:!n}),id:a}),t.children,r.a.createElement("a",{className:"hash-link",href:`#${a}`,title:Object(m.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.a.createElement(e,t)};const u={code:e=>{const{children:a}=e;return"string"==typeof a?a.includes("\n")?r.a.createElement(i.a,e):r.a.createElement("code",e):a},a:e=>r.a.createElement(l.a,e),pre:e=>{const{children:a}=e;return r.a.createElement(i.a,null==a?void 0:a.props)},h1:g("h1"),h2:g("h2"),h3:g("h3"),h4:g("h4"),h5:g("h5"),h6:g("h6")};a.a=u},764:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(753),i=t(750),s=t(754),m=t(755),c=t(760),o=t(762),d=t(62),g=t.n(d),u=t(752);a.a=function(e){const a=function(){const{selectMessage:e}=Object(u.usePluralForm)();return a=>{const t=Math.ceil(a);return e(t,Object(s.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}}(),{children:t,frontMatter:n,metadata:d,truncated:h,isBlogPostPage:p=!1}=e,{date:E,formattedDate:b,permalink:v,tags:N,readingTime:_}=d,{author:f,title:k,image:w,keywords:T}=n,O=n.author_url||n.authorURL,L=n.author_title||n.authorTitle,j=n.author_image_url||n.authorImageURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{keywords:T,image:w}),r.a.createElement("article",{className:p?void 0:"margin-bottom--xl"},(()=>{const e=p?"h1":"h2";return r.a.createElement("header",null,r.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",g.a.blogPostTitle)},p?k:r.a.createElement(m.a,{to:v},k)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:E,className:g.a.blogPostDate},b,_&&r.a.createElement(r.a.Fragment,null," \xb7 ",a(_)))),r.a.createElement("div",{className:"avatar margin-vert--md"},j&&r.a.createElement(m.a,{className:"avatar__photo-link avatar__photo",href:O},r.a.createElement("img",{src:j,alt:f})),r.a.createElement("div",{className:"avatar__intro"},f&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement(m.a,{href:O},f)),r.a.createElement("small",{className:"avatar__subtitle"},L)))))})(),r.a.createElement("div",{className:"markdown"},r.a.createElement(i.a,{components:c.a},t)),(N.length>0||h)&&r.a.createElement("footer",{className:"row margin-vert--lg"},N.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,r.a.createElement(s.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),N.map((({label:e,permalink:a})=>r.a.createElement(m.a,{key:a,className:"margin-horiz--sm",to:a},e)))),h&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(m.a,{to:d.permalink,"aria-label":`Read more about ${k}`},r.a.createElement("strong",null,r.a.createElement(s.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}}}]);