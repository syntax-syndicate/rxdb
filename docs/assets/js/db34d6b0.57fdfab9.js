"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[7320],{9891:(e,i,s)=>{s.r(i),s.d(i,{default:()=>d});var t=s(4586),c=s(8465),n=s(6540),r=s(2303),l=s(9961),o=s(4848);const a="premium_license_opened";function d(){const{siteConfig:e}=(0,t.A)(),[i,s]=(0,n.useState)(null),d=(0,r.A)();return(0,n.useEffect)((()=>{console.log("use effect"),d&&(0,l.IA)()&&(async()=>{try{const e=await(0,l.C3)();if(await e.getLocal(a))console.log("# file opening already tracked");else{const i=new URLSearchParams(window.location.search).get("v"),s=i?parseInt(i,10):300;window.trigger(a,Math.floor(s/3)),await e.upsertLocal(a,{})}}catch(t){console.log(t)}const e="https://rxdb.pipedrive.com/documents/p/"+new URLSearchParams(window.location.search).get("f");i!==e&&(s(e),setTimeout((()=>window.location.href=e),1e3))})()})),(0,o.jsx)(c.A,{title:`License Preview - ${e.title}`,description:"License Preview",children:(0,o.jsx)("main",{children:(0,o.jsxs)("div",{className:"redirectBox",style:{textAlign:"center"},children:[(0,o.jsx)("a",{href:"/",children:(0,o.jsx)("div",{className:"logo",children:(0,o.jsx)("img",{src:"/files/logo/logo_text.svg",alt:"RxDB",width:160})})}),(0,o.jsx)("h1",{children:"RxDB License Preview"}),(0,o.jsx)("p",{children:(0,o.jsx)("b",{children:"You will be redirected in a few seconds."})}),!!i&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("p",{children:(0,o.jsx)("a",{href:i,children:"Click here to open the license agreement directly."})})})]})})})}}}]);