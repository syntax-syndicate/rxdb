"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[8401],{4279:(e,t,n)=>{n.r(t),n.d(t,{default:()=>he});var s=n(6540),a=n(1769),i=n(6849),l=n(4848);const o=s.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(o.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,l.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var h=n(4164),u=n(6682),m=n(539),b=n(6289);function g(e){const{permalink:t,title:n,subLabel:s,isNext:a}=e;return(0,l.jsxs)(b.A,{className:(0,h.A)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,l.jsx)("div",{className:"pagination-nav__label",children:n})]})}function p(e){const{previous:t,next:n}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(g,{...t,subLabel:(0,l.jsx)(m.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,l.jsx)(g,{...n,subLabel:(0,l.jsx)(m.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function x(){const{metadata:e}=c();return(0,l.jsx)(p,{previous:e.previous,next:e.next})}var v=n(797),j=n(9493),f=n(204),_=n(6351),A=n(1858);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(m.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(m.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function N(e){const t=C[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function T(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,l.jsx)(m.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(b.A,{to:n,onClick:s,children:(0,l.jsx)(m.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function L(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,v.A)(),{pluginId:a}=(0,j.vT)({failfast:!0}),{savePreferredVersionName:i}=(0,_.g1)(a),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,j.HW)(a),c=o??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,l.jsxs)("div",{className:(0,h.A)(t,f.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(N,{siteTitle:s,versionMetadata:n})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(T,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})}function y(e){let{className:t}=e;const n=(0,A.r)();return n.banner?(0,l.jsx)(L,{className:t,versionMetadata:n}):null}function k(e){let{className:t}=e;const n=(0,A.r)();return n.badge?(0,l.jsx)("span",{className:(0,h.A)(t,f.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(m.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}const M={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function w(e){let{permalink:t,label:n,count:s,description:a}=e;return(0,l.jsxs)(b.A,{href:t,title:a,className:(0,h.A)(M.tag,s?M.tagWithCount:M.tagRegular),children:[n,s&&(0,l.jsx)("span",{children:s})]})}const B={tags:"tags_jXut",tag:"tag_QGVx"};function H(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(m.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,h.A)(B.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:B.tag,children:(0,l.jsx)(w,{...e})},e.permalink)))})]})}var I=n(1708);function V(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,i=a.length>0,o=!!(t||n||s);return i||o?(0,l.jsxs)("footer",{className:(0,h.A)(f.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)("div",{className:(0,h.A)("row margin-top--sm",f.G.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(H,{tags:a})})}),o&&(0,l.jsx)(I.A,{className:(0,h.A)("margin-top--sm",f.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var G=n(3535),E=n(1021);const R={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function P(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,h.A)("clean-btn",R.tocCollapsibleButton,!t&&R.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(m.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const S={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function F(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:o}=(0,G.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,h.A)(S.tocCollapsible,!i&&S.tocCollapsibleExpanded,n),children:[(0,l.jsx)(P,{collapsed:i,onClick:o}),(0,l.jsx)(G.N,{lazy:!0,className:S.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(E.A,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const D={tocMobile:"tocMobile_ITEo"};function U(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(F,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,h.A)(f.G.docs.docTocMobile,D.tocMobile)})}var z=n(7959);function O(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(z.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.G.docs.docTocDesktop})}var W=n(9303),q=n(900);function Q(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,h.A)(f.G.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(W.A,{as:"h1",children:n})}),(0,l.jsx)(q.A,{children:t})]})}var X=n(102),Y=n(214),Z=n(9030);function $(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const J={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function K(){const e=(0,Z.Ay)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(b.A,{"aria-label":(0,m.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)($,{className:J.breadcrumbHomeIcon})})})}const ee={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function te(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,l.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,l.jsx)(b.A,{className:a,href:n,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:a,children:t})}function ne(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,l.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,h.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function se(){const e=(0,X.OF)(),t=(0,Y.Dt)();return e?(0,l.jsx)("nav",{className:(0,h.A)(f.G.docs.docBreadcrumbs,ee.breadcrumbsContainer),"aria-label":(0,m.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(K,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(ne,{active:s,index:n,addMicrodata:!!a,children:(0,l.jsx)(te,{href:a,isLast:s,children:t.label})},n)}))]})}):null}var ae=n(8467);const ie={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function le(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,u.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,l.jsx)(U,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(O,{})}}(),{metadata:s}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,h.A)("col",!n.hidden&&ie.docItemCol),children:[(0,l.jsx)(ae.A,{metadata:s}),(0,l.jsx)(y,{}),(0,l.jsxs)("div",{className:ie.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(se,{}),(0,l.jsx)(k,{}),n.mobile,(0,l.jsx)(Q,{children:t}),(0,l.jsx)(V,{})]}),(0,l.jsx)(x,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}var oe=n(106),re=n(8653);function ce(e){const[t,n]=(0,s.useState)(!1),a={ul:{marginTop:25,listStyleType:"none"},li:{lineHeight:4,color:"var(--expo-theme-text-secondary)"},a:{color:"var(--fontColor-offwhite)"},img:{paddingRight:16,height:18,verticalAlign:"middle"},vote:{borderRadius:3,borderColor:"var(--fontColor-offwhite)",borderStyle:"solid",borderWidth:1,verticalAlign:"middle",padding:5,paddingLeft:8,paddingRight:8,textAlign:"center",justifyContent:"center",display:"inline-flex",marginLeft:20,cursor:"pointer"},down:{transform:"scale(1, -1)"},heart:{color:"var(--color-top)",display:"inline-block",transform:"scale(2)",paddingLeft:10}};let i=e.children.type.frontMatter.title?e.children.type.frontMatter.title:"";e.children.type.contentTitle&&e.children.type.contentTitle.length<i.length&&(i=e.children.type.contentTitle);if(i.length>23){i=i.slice(0,23);const e=i.split(" ");console.dir(e),e.pop(),i=e.join(" ")+"..."}function o(t){const s=e.children.type.metadata.slug,a="vote_"+(0,re.dG)(s.split("/"))+"_"+t;console.log("vote: "+a),(0,oe.c)(a,.1,!0),n(!0)}return(0,l.jsxs)("ul",{style:a.ul,children:[t?(0,l.jsxs)("li",{style:a.li,children:["Thank you for your vote! ",(0,l.jsx)("div",{style:a.heart,children:"\u2665"})]}):(0,l.jsxs)("li",{style:a.li,children:["Was this page helpful?",(0,l.jsx)("div",{style:a.vote,children:(0,l.jsx)("img",{src:"/img/thumbs-up-white.svg",loading:"lazy",height:"14",onClick:()=>o("up")})}),(0,l.jsx)("div",{style:{...a.vote,...a.down},children:(0,l.jsx)("img",{src:"/img/thumbs-up-white.svg",loading:"lazy",height:"14",onClick:()=>o("down")})})]}),(0,l.jsx)("li",{children:(0,l.jsxs)("a",{href:"/chat/",target:"_blank",style:a.a,children:[(0,l.jsx)("img",{src:"/img/community-links/discord-logo.svg",style:a.img,loading:"lazy"}),"Ask a question on the forums about ",i]})})]})}function de(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(le,{...e}),(0,l.jsx)(ce,{...e})]})}function he(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(a.e3,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(de,{children:(0,l.jsx)(n,{})})]})})}}}]);