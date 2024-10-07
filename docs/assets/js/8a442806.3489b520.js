"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[1054],{2019:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=t(4848),a=t(8453);const r={title:"Fulltext Search \ud83d\udc51",slug:"fulltext-search.html"},s="Fulltext Search (beta)",l={id:"fulltext-search",title:"Fulltext Search \ud83d\udc51",description:"To run fulltext search queries on the local data, RxDB has a fulltext search plugin based on flexsearch and RxPipeline. On each write to a given source RxCollection, an indexer is running to map the written document data into a fulltext search index.",source:"@site/docs/fulltext-search.md",sourceDirName:".",slug:"/fulltext-search.html",permalink:"/fulltext-search.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Fulltext Search \ud83d\udc51",slug:"fulltext-search.html"},sidebar:"tutorialSidebar",previous:{title:"ORM",permalink:"/orm.html"},next:{title:"Query Optimizer \ud83d\udc51",permalink:"/query-optimizer.html"}},c={},o=[{value:"Benefits of using a local fulltext search",id:"benefits-of-using-a-local-fulltext-search",level:2},{value:"Using the RxDB Fulltext Search",id:"using-the-rxdb-fulltext-search",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"fulltext-search-beta",children:"Fulltext Search (beta)"}),"\n",(0,i.jsxs)(n.p,{children:["To run fulltext search queries on the local data, RxDB has a fulltext search plugin based on ",(0,i.jsx)(n.a,{href:"https://github.com/nextapps-de/flexsearch",children:"flexsearch"})," and ",(0,i.jsx)(n.a,{href:"/rx-pipeline.html",children:"RxPipeline"}),". On each write to a given source ",(0,i.jsx)(n.a,{href:"/rx-collection.html",children:"RxCollection"}),", an indexer is running to map the written document data into a fulltext search index.\nThe index can then be queried efficiently with complex fulltext search operations."]}),"\n",(0,i.jsx)(n.h2,{id:"benefits-of-using-a-local-fulltext-search",children:"Benefits of using a local fulltext search"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Efficient Search and Indexing"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The plugin utilizes the ",(0,i.jsx)(n.a,{href:"https://github.com/nextapps-de/flexsearch",children:"FlexSearch library"}),", known for its speed and memory efficiency. This ensures that search operations are performed quickly, even with large datasets. The search engine can handle multi-field queries, partial matching, and complex search operations, providing users with highly relevant results."]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Local Data Indexing"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["With the plugin, all search operations are performed on the local data stored within the RxDB collections. This means that users can execute fulltext search queries without the need for an external server or database, which is especially beneficial for offline-first applications. The local indexing ensures that search queries are executed quickly, reducing the latency typically associated with remote database queries. Also when used in multiple browser tabs, it is ensured that through ",(0,i.jsx)(n.a,{href:"/leader-election.html",children:"Leader Election"}),", only exactly one tabs is doing the work of indexing without having an overhead in the other browser tabs."]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Real-time Indexing"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The plugin integrates seamlessly with RxDB's reactive nature. Every time a document is written to an ",(0,i.jsx)(n.a,{href:"/rx-collection.html",children:"RxCollection"}),", an indexer updates the fulltext search index in real-time. This ensures that search results are always up-to-date, reflecting the most current state of the data without requiring manual reindexing."]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Persistent indexing"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The fulltext search index is efficiently persisted within the ",(0,i.jsx)(n.a,{href:"/rx-collection.html",children:"RxCollection"}),", ensuring that the index remains intact across app restarts. When documents are added or updated in the collection, the index is incrementally updated in real-time, meaning only the changes are processed rather than reindexing the entire dataset. This incremental approach not only optimizes performance but also ensures that subsequent app launches are quick, as there's no need to reindex all the data from scratch, making the search feature both reliable and fast from the moment the app starts. When using an ",(0,i.jsx)(n.a,{href:"/encryption.html",children:"encrypted storage"})," the index itself and incremental updates to it are stored fully encrypted and are only decrypted in-memory."]}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Complex Query Support"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The FlexSearch-based plugin allows for ",(0,i.jsx)(n.a,{href:"https://github.com/nextapps-de/flexsearch?tab=readme-ov-file#index.search",children:"sophisticated search queries"}),", including multi-term and contextual searches. Users can perform complex searches that go beyond simple keyword matching, enabling more advanced use cases like searching for documents with specific phrases, relevance-based sorting, or even phonetic matching."]}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"Offline-First Support and Privacy"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["As RxDB is designed with ",(0,i.jsx)(n.a,{href:"/offline-first.html",children:"offline-first applications"})," in mind, the fulltext search plugin supports this paradigm by ensuring that all search operations can be performed offline. This is crucial for applications that need to function in environments with intermittent or no internet connectivity, offering users a consistent and reliable search experience with zero latency."]}),"\n",(0,i.jsx)(n.admonition,{title:"beta",type:"warning",children:(0,i.jsxs)(n.p,{children:["The flexsearch plugin is in ",(0,i.jsx)(n.strong,{children:"beta"})," mode and the API might be changed without a major RxDB release."]})}),"\n",(0,i.jsx)(n.h2,{id:"using-the-rxdb-fulltext-search",children:"Using the RxDB Fulltext Search"}),"\n",(0,i.jsxs)(n.p,{children:["The flexsearch search is a ",(0,i.jsx)(n.a,{href:"/premium",children:"RxDB Premium Package \ud83d\udc51"})," which must be purchased and imported from the ",(0,i.jsx)(n.code,{children:"rxdb-premium"})," npm package."]}),"\n",(0,i.jsxs)(n.p,{children:["Step 1: Add the ",(0,i.jsx)(n.code,{children:"RxDBFlexSearchPlugin"})," to RxDB."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { RxDBFlexSearchPlugin } from 'rxdb-premium/plugins/flexsearch';\nimport { addRxPlugin } from 'rxdb/plugins/core';\naddRxPlugin(RxDBFlexSearchPlugin);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Step 2: Create a ",(0,i.jsx)(n.code,{children:"RxFulltextSearch"})," instance on top of a collection with the ",(0,i.jsx)(n.code,{children:"addFulltextSearch()"})," function."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { addFulltextSearch } from 'rxdb-premium/plugins/flexsearch';\nconst flexSearch = await addFulltextSearch({\n    // unique identifier. Used to store metadata and continue indexing on restarts/reloads.\n    identifier: 'my-search',\n    // The source collection on whose documents the search is based on\n    collection: myRxCollection,\n    /**\n     * Transforms the document data to a given searchable string.\n     * This can be done by returning a single string property of the document\n     * or even by concatenating and transforming multiple fields like:\n     * doc => doc.firstName + ' ' + doc.lastName\n     */\n    docToString: doc => doc.firstName,\n    /**\n     * (Optional)\n     * Amount of documents to index at once.\n     * See https://rxdb.info/rx-pipeline.html\n     */\n    batchSize: number;\n    /**\n     * (Optional)\n     * lazy: Initialize the in memory fulltext index at the first search query.\n     * instant: Directly initialize so that the index is already there on the first query.\n     * Default: 'instant'\n     */\n    initialization: 'instant',\n    /**\n     * (Optional)\n     * @link https://github.com/nextapps-de/flexsearch#index-options\n     */\n    indexOptions: {},\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"Step 3: Run a search operation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// find all documents whose searchstring contains \"foobar\"\nconst foundDocuments = await flexSearch.find('foobar');\n\n/**\n * You can also use search options as second parameter\n * @link https://github.com/nextapps-de/flexsearch#search-options\n */\nconst foundDocuments = await flexSearch.find('foobar', { limit: 10 });\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var i=t(6540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);