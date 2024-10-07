"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[6998],{3179:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var i=a(4848),s=a(8453);const n={title:"React Native Database",slug:"react-native-database.html",description:"Explore React Native database solutions for cross-platform apps - AsyncStorage, SQLite, RxDB, and more. Tailored for iOS, Android, and Windows, ensuring seamless data storage and sync."},r="React Native Database",o={id:"react-native-database",title:"React Native Database",description:"Explore React Native database solutions for cross-platform apps - AsyncStorage, SQLite, RxDB, and more. Tailored for iOS, Android, and Windows, ensuring seamless data storage and sync.",source:"@site/docs/react-native-database.md",sourceDirName:".",slug:"/react-native-database.html",permalink:"/react-native-database.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"React Native Database",slug:"react-native-database.html",description:"Explore React Native database solutions for cross-platform apps - AsyncStorage, SQLite, RxDB, and more. Tailored for iOS, Android, and Windows, ensuring seamless data storage and sync."},sidebar:"tutorialSidebar",previous:{title:"Alternatives for realtime offline-first JavaScript applications and local databases",permalink:"/alternatives.html"},next:{title:"JavaScript Vector Database",permalink:"/articles/javascript-vector-database.html"}},c={},l=[{value:"Database Solutions for React-Native",id:"database-solutions-for-react-native",level:2},{value:"AsyncStorage",id:"asyncstorage",level:3},{value:"SQLite",id:"sqlite",level:3},{value:"PouchDB",id:"pouchdb",level:3},{value:"RxDB",id:"rxdb",level:3},{value:"WatermelonDB",id:"watermelondb",level:3},{value:"Firebase / Firestore",id:"firebase--firestore",level:3},{value:"Follow up",id:"follow-up",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"react-native-database",children:"React Native Database"}),"\n",(0,i.jsx)(t.p,{children:"React Native provides a cross-platform JavaScript runtime that runs on different operating systems like Android, iOS, Windows and others. Mostly it is used to create hybrid Apps that run on mobile devices at Android (google) and iOS (apple)."}),"\n",(0,i.jsx)(t.p,{children:"In difference to the JavaScript runtime of browsers, React Native does not support all HTML5 APIs and so it is not possible to use browser storage possibilities like localstorage, cookies, WebSQL or IndexedDB.\nInstead a different storage solution must be chosen that does not come directly with React Native itself but has to be installed as a library or plugin."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["You are reading this inside of the ",(0,i.jsx)(t.a,{href:"https://rxdb.info/",children:"RxDB"})," documentation, so everything might be opinionated."]})}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"./files/icons/react-native.png",alt:"React Native",width:"20"})}),"\n",(0,i.jsx)(t.h2,{id:"database-solutions-for-react-native",children:"Database Solutions for React-Native"}),"\n",(0,i.jsxs)(t.p,{children:["There are multiple database solutions that can be used with React Native. While I would recommend to use ",(0,i.jsx)(t.a,{href:"./",children:"RxDB"})," for most use cases, it is still helpful to learn about other alternatives."]}),"\n",(0,i.jsx)(t.h3,{id:"asyncstorage",children:"AsyncStorage"}),"\n",(0,i.jsxs)(t.p,{children:["AsyncStorage is a key->value storage solution that works similar to the browsers ",(0,i.jsx)(t.a,{href:"/articles/localstorage.html",children:"localstorage API"}),". The big difference is that access to the AsyncStorage is not a blocking operation but instead everything is ",(0,i.jsx)(t.code,{children:"Promise"})," based. This is a big benefit because long running writes and reads will not block your JavaScript process which would cause a laggy user interface."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"/**\n * Because it is Promise-based,\n * you have to 'await' the call to getItem()\n */\nawait setItem('myKey', 'myValue');\nconst value = await AsyncStorage.getItem('myKey');\n"})}),"\n",(0,i.jsxs)(t.p,{children:["AsyncStorage was originally included in ",(0,i.jsx)(t.a,{href:"https://reactnative.dev/docs/asyncstorage",children:"React Native itself"}),". But it was deprecated by the React Native Team which recommends to use a community based package instead. There is a ",(0,i.jsx)(t.a,{href:"https://github.com/react-native-async-storage/async-storage",children:"community fork of AsyncStorage"})," that is actively maintained and open source."]}),"\n",(0,i.jsx)(t.p,{children:"AsyncStorage is fine when only a small amount of data needs to be stored and when no query capabilities besides the key-access are required. Complex queries or features are not supported which makes AsyncStorage not suitable for anything more then storing simple user settings data."}),"\n",(0,i.jsx)(t.h3,{id:"sqlite",children:"SQLite"}),"\n",(0,i.jsx)(t.p,{children:"SQLite is a SQL based relational database written in C that was crafted to be embed inside of applications. Operations are written in the SQL query language and SQLite generally follows the PostgreSQL syntax."}),"\n",(0,i.jsxs)(t.p,{children:["To use SQLite in React Native, you first have to include the SQLite library itself as a plugin. There a different project out there that can be used, but I would recommend to use the ",(0,i.jsx)(t.a,{href:"https://github.com/ospfranco/react-native-quick-sqlite",children:"react-native-quick-sqlite"})," project."]}),"\n",(0,i.jsxs)(t.p,{children:["First you have to install the library into your React Native project via ",(0,i.jsx)(t.code,{children:"npm install react-native-quick-sqlite"}),".\nIn your code you can then import the library and create a database connection:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import {open} from 'react-native-quick-sqlite';\nconst db = open('myDb.sqlite');\n"})}),"\n",(0,i.jsx)(t.p,{children:"Notice that SQLite is a file based database where all data is stored directly in the filesystem of the OS. Therefore to create a connection, you have to provide a filename."}),"\n",(0,i.jsx)(t.p,{children:"With the open connection you can then run SQL queries:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"let { rows } = db.execute('SELECT somevalue FROM sometable');\n"})}),"\n",(0,i.jsxs)(t.p,{children:["If that does not work for you, you might want to try the ",(0,i.jsx)(t.a,{href:"https://github.com/andpor/react-native-sqlite-storage",children:"react-native-sqlite-storage"})," project instead which is also very popular."]}),"\n",(0,i.jsx)(t.p,{children:"The downside of SQLite is that it is lacking many features that are handful when using a database together with an UI based application. For example it is not possible to observe queries or document fields.\nAlso there is no replication method. This makes SQLite a good solution when you want to solely store data on the client, but not when you want to sync data with a server or other clients."}),"\n",(0,i.jsx)(t.h3,{id:"pouchdb",children:"PouchDB"}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"./files/icons/pouchdb.png",alt:"PouchDB",width:"40"})}),"\n",(0,i.jsxs)(t.p,{children:["PouchDB is a JavaScript NoSQL database that follows the API of the ",(0,i.jsx)(t.a,{href:"https://couchdb.apache.org/",children:"Apache CouchDB"})," server database.\nThe core feature of PouchDB is the ability to do a two-way replication with any CouchDB compliant endpoint.\nWhile PouchDB is pretty mature, it has some drawbacks that blocks it from being used in a client-side React Native application. For example it has to store all documents states over time which is required to replicate with CouchDB. Also it is not easily possible to fully purge documents and so it will fill up disc space over time. A big problem is also that PouchDB is not really maintained and major bugs like wrong query results are not fixed anymore. The performance of PouchDB is a general bottleneck which is caused by how it has to store and fetch documents while being compliant to CouchDB. The only real reason to use PouchDB in React Native, is when you want to replicate with a CouchDB or Couchbase server."]}),"\n",(0,i.jsx)(t.p,{children:"Because PouchDB is based on an adapter system for storage, there are two options to use it with React Native:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Either use the ",(0,i.jsx)(t.a,{href:"https://github.com/craftzdog/pouchdb-react-native",children:"pouchdb-adapter-react-native-sqlite"})," adapter"]}),"\n",(0,i.jsxs)(t.li,{children:["or the ",(0,i.jsx)(t.a,{href:"https://github.com/seigel/pouchdb-react-native",children:"pouchdb-adapter-asyncstorage"})," adapter."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Because the ",(0,i.jsx)(t.code,{children:"asyncstorage"})," adapter is no longer maintained, it is recommended to use the ",(0,i.jsx)(t.code,{children:"native-sqlite"})," adapter:"]}),"\n",(0,i.jsxs)(t.p,{children:["First you have to install the adapter and other dependencies via ",(0,i.jsx)(t.code,{children:"npm install pouchdb-adapter-react-native-sqlite react-native-quick-sqlite react-native-quick-websql"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Then you have to craft a custom PouchDB class that combines these plugins:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import 'react-native-get-random-values';\nimport PouchDB from 'pouchdb-core';\nimport HttpPouch from 'pouchdb-adapter-http';\nimport replication from 'pouchdb-replication';\nimport mapreduce from 'pouchdb-mapreduce';\nimport SQLiteAdapterFactory from 'pouchdb-adapter-react-native-sqlite';\nimport WebSQLite from 'react-native-quick-websql';\n\nconst SQLiteAdapter = SQLiteAdapterFactory(WebSQLite);\nexport default PouchDB.plugin(HttpPouch)\n  .plugin(replication)\n  .plugin(mapreduce)\n  .plugin(SQLiteAdapter);\n"})}),"\n",(0,i.jsx)(t.p,{children:"This can then be used to create a PouchDB database instance which can store and query documents:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"const db = new PouchDB('mydb.db', {\n  adapter: 'react-native-sqlite'\n});\n"})}),"\n",(0,i.jsx)(t.h3,{id:"rxdb",children:"RxDB"}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"./files/logo/rxdb_javascript_database.svg",alt:"RxDB",width:"170"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://rxdb.info/",children:"RxDB"})," is an local-first, NoSQL-database for JavaScript applications. It is reactive which means that you can not only query the current state, but subscribe to all state changes like the result of a query or even a single field of a document. This is great for UI-based realtime applications in a way that makes it easy to develop realtime applications like what you need in React Native."]}),"\n",(0,i.jsx)(t.p,{children:"There are multiple ways to use RxDB in React Native:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Use the ",(0,i.jsx)(t.a,{href:"/rx-storage-memory.html",children:"memory RxStorage"})," that stores the data inside of the JavaScript memory without persistence"]}),"\n",(0,i.jsxs)(t.li,{children:["Use the ",(0,i.jsx)(t.a,{href:"/rx-storage-lokijs.html",children:"LokiJS RxStorage"})," with the ",(0,i.jsx)(t.a,{href:"https://github.com/cawfree/react-native-lokijs",children:"react-native-lokijs"})," plugin or the ",(0,i.jsx)(t.a,{href:"https://github.com/jonnyreeves/loki-async-reference-adapter",children:"loki-async-reference-adapter"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Use the ",(0,i.jsx)(t.a,{href:"/rx-storage-sqlite.html",children:"SQLite RxStorage"})," with the ",(0,i.jsx)(t.a,{href:"https://github.com/ospfranco/react-native-quick-sqlite",children:"react-native-quick-sqlite"})," plugin."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["It is recommended to use the ",(0,i.jsx)(t.a,{href:"/rx-storage-sqlite.html",children:"SQLite RxStorage"})," because it has the best performance and is the easiest to set up. However it is part of the ",(0,i.jsx)(t.a,{href:"/premium",children:"\ud83d\udc51 Premium Plugins"})," which must be purchased, so to try out RxDB with React Native, you might want to use one of the other three options."]}),"\n",(0,i.jsxs)(t.p,{children:["First you have to install all dependencies via ",(0,i.jsx)(t.code,{children:"npm install rxdb rxjs rxdb-premium react-native-quick-sqlite"}),".\nThen you can assemble the RxStorage and create a database with it:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import {\n    createRxDatabase\n} from 'rxdb';\nimport {\n    getRxStorageSQLite,\n    getSQLiteBasicsQuickSQLite\n} from 'rxdb-premium/plugins/storage-sqlite';\nimport { open } from 'react-native-quick-sqlite';\n\n// create database\nconst myRxDatabase = await createRxDatabase({\n    // Instead of a simple name, you can use a folder path to determine the database location \n    name: 'exampledb',\n    multiInstance: false, // <- Set this to false when using RxDB in React Native\n    storage: getRxStorageSQLite({\n        sqliteBasics: getSQLiteBasicsQuickSQLite(open)\n    })\n});\n\n// create collections\nconst collections = await myRxDatabase.addCollections({\n    humans: {\n        /* ... */\n    }\n});\n\n// insert document\nawait collections.humans.insert({id: 'foo', name: 'bar'});\n\n// run a query\nconst result = await collections.humans.find({\n    selector: {\n        name: 'bar'\n    }\n}).exec();\n\n// observe a query\nawait collections.humans.find({\n    selector: {\n        name: 'bar'\n    }\n}).$.subscribe(result => {/* ... */});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Using the SQLite RxStorage is pretty fast, which is shown in the ",(0,i.jsx)(t.a,{href:"/rx-storage.html#performance-comparison",children:"performance comparison"}),".\nTo learn more about using RxDB with React Native, you might want to check out ",(0,i.jsx)(t.a,{href:"https://github.com/pubkey/rxdb/tree/master/examples/react-native",children:"this example project"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Also RxDB provides many other features like ",(0,i.jsx)(t.a,{href:"/encryption.html",children:"encryption"})," or ",(0,i.jsx)(t.a,{href:"/key-compression.html",children:"compression"}),". You can even store binary data as ",(0,i.jsx)(t.a,{href:"/rx-attachment.html",children:"attachments"})," or use RxDB as an ORM in React Native."]}),"\n",(0,i.jsx)(t.h3,{id:"watermelondb",children:"WatermelonDB"}),"\n",(0,i.jsx)(t.p,{children:"WatermelonDB is a reactive and asynchronous database for React and React Native apps. It is based on SQLite in React Native and LokiJS when it is used in the browser. It supports schemas, observable queries, migrations and relations.\nThe schema layout is handled by TypeScript decorators and looks like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"class Post extends Model {\n  @field('name') name;\n  @field('body') body;\n  @children('comments') comments;\n\n  // a relation to another table\n  @relation('users', 'author_id') author;\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["WatermelonDB also supports replication but the sync protocol is pretty complex because on how it resolves conflicts. I recommend to watch ",(0,i.jsx)(t.a,{href:"https://www.youtube.com/watch?v=uFvHURTRLxQ",children:"this video"})," to learn how the replication works."]}),"\n",(0,i.jsxs)(t.p,{children:["According to the roadmap, despite being essentially feature-complete, WatermelonDB is still on the ",(0,i.jsx)(t.code,{children:"0.xx"})," version and intends to switch to a ",(0,i.jsx)(t.code,{children:"1.x.x"})," version as once it reaches a long-term stable API."]}),"\n",(0,i.jsx)(t.h3,{id:"firebase--firestore",children:"Firebase / Firestore"}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"./files/alternatives/firebase.svg",alt:"Firebase",width:"80"})}),"\n",(0,i.jsx)(t.p,{children:"Firestore is a cloud based database technology that stores data on clients devices and replicates it with the Firebase cloud service that is run by google. It has many features like observability and authentication.\nThe main feature lacking is the non-complete offline first support because clients cannot start the application while being offline because then the authentication does not work. After they are authenticated, being offline is no longer a problem.\nAlso using firestore creates a vendor lock-in because it is not possible to replicate with a custom self hosted backend."}),"\n",(0,i.jsxs)(t.p,{children:["To get started with Firestore in React Native, it is recommended to use the ",(0,i.jsx)(t.a,{href:"https://github.com/invertase/react-native-firebase",children:"React Native Firebase"})," open-source project."]}),"\n",(0,i.jsx)(t.h2,{id:"follow-up",children:"Follow up"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A good way to learn using RxDB database with React Native is to check out the ",(0,i.jsx)(t.a,{href:"https://github.com/pubkey/rxdb/tree/master/examples/react-native",children:"RxDB React Native example"})," and use that as a tutorial."]}),"\n",(0,i.jsxs)(t.li,{children:["If you haven't done so yet, you should start learning about RxDB with the ",(0,i.jsx)(t.a,{href:"/quickstart.html",children:"Quickstart Tutorial"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["There is a followup list of other ",(0,i.jsx)(t.a,{href:"/alternatives.html",children:"client side database alternatives"})," that might work with React Native."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>o});var i=a(6540);const s={},n=i.createContext(s);function r(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);