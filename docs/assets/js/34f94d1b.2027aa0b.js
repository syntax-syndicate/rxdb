"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[5832],{7746:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=s(4848),a=s(8453);const n={title:"Electron Database - Storage adapters for SQLite, Filesystem and In-Memory",slug:"electron-database.html",description:"SQLite, Filesystem, IndexedDB and In-Memory database with RxDB for creating fast local-first Electron apps. Perfect for complex, real-time client-side applications"},o="Electron Database - RxDB with different storage for SQLite, Filesystem and In-Memory",i={id:"electron-database",title:"Electron Database - Storage adapters for SQLite, Filesystem and In-Memory",description:"SQLite, Filesystem, IndexedDB and In-Memory database with RxDB for creating fast local-first Electron apps. Perfect for complex, real-time client-side applications",source:"@site/docs/electron-database.md",sourceDirName:".",slug:"/electron-database.html",permalink:"/electron-database.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Electron Database - Storage adapters for SQLite, Filesystem and In-Memory",slug:"electron-database.html",description:"SQLite, Filesystem, IndexedDB and In-Memory database with RxDB for creating fast local-first Electron apps. Perfect for complex, real-time client-side applications"},sidebar:"tutorialSidebar",previous:{title:"Capacitor Database - SQLite, RxDB and others",permalink:"/capacitor-database.html"}},l={},c=[{value:"Databases for Electron",id:"databases-for-electron",level:2},{value:"Server Side Databases in Electron.js",id:"server-side-databases-in-electronjs",level:3},{value:"Localstorage / IndexedDB / WebSQL as alternatives to SQLite in Electron",id:"localstorage--indexeddb--websql-as-alternatives-to-sqlite-in-electron",level:3},{value:"RxDB",id:"rxdb",level:3},{value:"SQLite in Electron.js without RxDB",id:"sqlite-in-electronjs-without-rxdb",level:3},{value:"Follow up",id:"follow-up",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"electron-database---rxdb-with-different-storage-for-sqlite-filesystem-and-in-memory",children:"Electron Database - RxDB with different storage for SQLite, Filesystem and In-Memory"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://www.electronjs.org/",children:"Electron"})," (aka Electron.js) is a framework developed by github that is designed to create desktop applications with the Web technology stack consisting of HTML, CSS and JavaScript.\nBecause the desktop application runs on the client's device, it is suitable to use a database that can store and query data locally. This allows you to create so-called ",(0,r.jsx)(t.a,{href:"/offline-first.html",children:"local first"})," apps that store data locally and even work when the user has no internet connection.\nWhile there are many options to store data in Electron, for complex realtime apps using ",(0,r.jsx)(t.a,{href:"https://rxdb.info/",children:"RxDB"})," is recommended because it is a database made for UI-based client-side application, not a server-side database."]}),"\n",(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{src:"./files/icons/electron.svg",alt:"Electron",width:"70"})}),"\n",(0,r.jsx)(t.h2,{id:"databases-for-electron",children:"Databases for Electron"}),"\n",(0,r.jsx)(t.p,{children:"An Electron runtime can be divided into two parts:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'The "main" process which is a Node.js JavaScript process that runs without a UI in the background.'}),"\n",(0,r.jsx)(t.li,{children:'One or multiple "renderer" processes that consist of a Chrome browser engine and runs the user interface. Each renderer process represents one "browser tab".'}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This is important to understand because choosing the right database depends on your use case and on which of these JavaScript runtimes you want to keep the data."}),"\n",(0,r.jsx)(t.h3,{id:"server-side-databases-in-electronjs",children:"Server Side Databases in Electron.js"}),"\n",(0,r.jsxs)(t.p,{children:['Because Electron runs on a desktop computer, you might think that it should be possible to use a common "server" database like MySQL, PostgreSQL or MongoDB. In theory, you could ship the correct database server binaries with your electron application and start a process on the client\'s device that exposes a port to the database that can be consumed by Electron. In practice, this is not a viable way to go because shipping the correct binaries and opening ports is way to complicated and troublesome. Instead you should use a database that can be bundled and run ',(0,r.jsx)(t.strong,{children:"inside"})," of Electron, either in the ",(0,r.jsx)(t.em,{children:"main"})," or in the ",(0,r.jsx)(t.em,{children:"renderer"})," process."]}),"\n",(0,r.jsx)(t.h3,{id:"localstorage--indexeddb--websql-as-alternatives-to-sqlite-in-electron",children:"Localstorage / IndexedDB / WebSQL as alternatives to SQLite in Electron"}),"\n",(0,r.jsxs)(t.p,{children:["Because Electron uses a common Chrome web browser in the renderer process, you can access the common Web Storage APIs like ",(0,r.jsx)(t.a,{href:"/articles/localstorage.html",children:"Localstorage"}),", IndexedDB and WebSQL. This is easy to set up and storing small sets of data can be achieved in a short span of time."]}),"\n",(0,r.jsxs)(t.p,{children:["But as soon as your application goes beyond a simple TODO-app, there are multiple obstacles that come in your way. One thing is the bad multi-tab support. If you have more than one ",(0,r.jsx)(t.em,{children:"renderer"})," process, it becomes hard to manage database writes between them. Each ",(0,r.jsx)(t.em,{children:"browser tab"})," could modify the database state while the others do not know of the changes and keep an outdated UI."]}),"\n",(0,r.jsxs)(t.p,{children:["Another thing is performance. ",(0,r.jsx)(t.a,{href:"/slow-indexeddb.html",children:"IndexedDB is slow"}),", mostly because it has to go through layers of browser security and abstractions. Storing and querying a lot of data might become your performance bottleneck. Localstorage and WebSQL are even slower, by the way. Using these Web Storage APIs is generally only recommended when you know for sure that there will be always only ",(0,r.jsx)(t.strong,{children:"one rendering process"}),' and performance is not that relevant. The main reason for that is the security- and abstraction layers that write- and read operations have to go through when using the browsers IndexedDB API. So instead of using IndexedDB in Electron in the renderer process, you should use something that runs in the "main" process in Node.js like the ',(0,r.jsx)(t.a,{href:"/rx-storage-filesystem-node.html",children:"Filesystem RxStorage"})," or the ",(0,r.jsx)(t.a,{href:"/rx-storage-memory.html",children:"In Memory RxStorage"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"rxdb",children:"RxDB"}),"\n",(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{src:"./files/logo/rxdb_javascript_database.svg",alt:"RxDB",width:"170"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://rxdb.info/",children:"RxDB"})," is a NoSQL database for JavaScript applications. It has many features that come in handy when RxDB is used with UI based applications like your Electron app. For example, it is able to subscribe to query results of single fields of documents. It has encryption and compression features and most important it has a battle tested ",(0,r.jsx)(t.a,{href:"https://rxdb.info/replication.html",children:"replication protocol"})," that can be used to do a realtime sync with your backend."]}),"\n",(0,r.jsxs)(t.p,{children:["Because of the ",(0,r.jsx)(t.a,{href:"https://rxdb.info/rx-storage.html",children:"flexible storage"})," layer of RxDB, there are many options on how to use it with Electron:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.a,{href:"/rx-storage-memory.html",children:"memory RxStorage"})," that stores the data inside of the JavaScript memory without persistence"]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.a,{href:"/rx-storage-sqlite.html",children:"SQLite RxStorage"})]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB RxStorage"})]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.a,{href:"/rx-storage-dexie.html",children:"Dexie.js RxStorage"})]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.a,{href:"/rx-storage-filesystem-node.html",children:"Node.js Filesystem"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["It is recommended to use the ",(0,r.jsx)(t.a,{href:"/rx-storage-sqlite.html",children:"SQLite RxStorage"})," because it has the best performance and is the easiest to set up. However it is part of the ",(0,r.jsx)(t.a,{href:"/premium",children:"\ud83d\udc51 Premium Plugins"})," which must be purchased, so to try out RxDB with Electron, you might want to use one of the other options. To start with RxDB, I would recommend using the Dexie.js RxStorage in the renderer processes. Because RxDB is able to broadcast the database state between browser tabs, having multiple renderer processes is not a problem like it would be when you use plain IndexedDB without RxDB.\nIn production, you would always run the RxStorage in the main process with the ",(0,r.jsx)(t.a,{href:"/electron.html#rxstorage-electron-ipcrenderer--ipcmain",children:"RxStorage Electron IpcRenderer & IpcMain"})," plugins."]}),"\n",(0,r.jsxs)(t.p,{children:["First, you have to install all dependencies via ",(0,r.jsx)(t.code,{children:"npm install rxdb rxjs"}),".\nThen you can assemble the RxStorage and create a database with it:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { createRxDatabase } from 'rxdb';\nimport { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';\n\n// create database\nconst db = await createRxDatabase({\n    name: 'exampledb',\n    storage: getRxStorageDexie()\n});\n\n// create collections\nconst collections = await myRxDatabase.addCollections({\n    humans: {\n        /* ... */\n    }\n});\n\n// insert document\nawait collections.humans.insert({id: 'foo', name: 'bar'});\n\n// run a query\nconst result = await collections.humans.find({\n    selector: {\n        name: 'bar'\n    }\n}).exec();\n\n// observe a query\nawait collections.humans.find({\n    selector: {\n        name: 'bar'\n    }\n}).$.subscribe(result => {/* ... */});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["For better performance in the renderer tab, you can later switch to the ",(0,r.jsx)(t.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB RxStorage"}),". But in production, it is recommended to use the ",(0,r.jsx)(t.a,{href:"/rx-storage-sqlite.html",children:"SQLite RxStorage"})," or the ",(0,r.jsx)(t.a,{href:"/rx-storage-filesystem-node.html",children:"Filesystem RxStorage"})," in the main process so that database operations do not block the rendering of the UI.\nTo learn more about using RxDB with Electron, you might want to check out ",(0,r.jsx)(t.a,{href:"https://github.com/pubkey/rxdb/tree/master/examples/electron",children:"this example project"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"sqlite-in-electronjs-without-rxdb",children:"SQLite in Electron.js without RxDB"}),"\n",(0,r.jsx)(t.p,{children:"SQLite is a SQL based relational database written in the C programming language that was crafted to be embedded inside of applications and stores data locally. Operations are written in the SQL query language similar to the PostgreSQL syntax."}),"\n",(0,r.jsxs)(t.p,{children:["Using SQLite in Electron is not possible in the ",(0,r.jsx)(t.em,{children:"renderer process"}),", only in the ",(0,r.jsx)(t.em,{children:"main process"}),". To communicate data operations between your main and your renderer processes, you have to use either ",(0,r.jsx)(t.a,{href:"https://github.com/electron/remote",children:"@electron/remote"})," (not recommended) or the ",(0,r.jsx)(t.a,{href:"https://www.electronjs.org/de/docs/latest/api/ipc-renderer",children:"ipcRenderer"})," (recommended). So you start up SQLite in your main process and whenever you want to read or write data, you send the SQL queries to the main process and retrieve the result back as JSON data."]}),"\n",(0,r.jsxs)(t.p,{children:["To install SQLite, use the ",(0,r.jsx)(t.a,{href:"https://github.com/TryGhost/node-sqlite3",children:"SQLite3"})," package which is a native Node.js module. You also need the ",(0,r.jsx)(t.a,{href:"https://github.com/electron/rebuild",children:"@electron/rebuild"})," package to rebuild the SQLite module against the currently installed Electron version."]}),"\n",(0,r.jsxs)(t.p,{children:["Install them with ",(0,r.jsx)(t.code,{children:"npm install sqlite3 @electron/rebuild"}),".\nThen you can rebuild SQLite with ",(0,r.jsx)(t.code,{children:"./node_modules/.bin/electron-rebuild  -f -w sqlite3"}),"\nIn the JavaScript code of your main process you can now create a database:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const sqlite3 = require('sqlite3');\nconst db = new sqlite3.Database('/path/to/database/file.db');\n// create a table and insert a row\ndb.serialize(() => {\n  db.run(\"CREATE TABLE Users (name, lastName)\");\n  db.run(\"INSERT INTO Users VALUES (?, ?)\", ['foo', 'bar']);\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"Also you have to set up the ipcRenderer so that message from the renderer process are handled:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"ipcMain.handle('db-query', async (event, sqlQuery) => {\n  return new Promise(res => {\n      db.all(sqlQuery, (err, rows) => {\n        res(rows);\n      });\n  });\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"In your renderer process, you can now call the ipcHandler and fetch data from SQLite:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const rows = await ipcRenderer.invoke('db-query', \"SELECT * FROM Users\");\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The downside of SQLite (or SQL in general) is that it is lacking many features that are handful when using a database together with ",(0,r.jsx)(t.strong,{children:"UI based"})," applications. It is not possible to observe queries or document fields and there is no replication method to sync data with a server. This makes SQLite a good solution when you just want to store data on the client or process expensive SQL queries on the server, but it is not suitable for more complex operations like two-way replication, encryption, compression and so on. Also developer helpers like TypeScript type safety are totally out of reach."]}),"\n",(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{src:"./files/logo/rxdb_javascript_database.svg",alt:"RxDB Electron Database",width:"170"})}),"\n",(0,r.jsx)(t.h2,{id:"follow-up",children:"Follow up"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Learn how to use RxDB as database in electron with the ",(0,r.jsx)(t.a,{href:"/quickstart.html",children:"Quickstart Tutorial"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Check out the ",(0,r.jsx)(t.a,{href:"https://github.com/pubkey/rxdb/tree/master/examples/electron",children:"RxDB Electron example"})]}),"\n",(0,r.jsxs)(t.li,{children:["There is a followup list of other ",(0,r.jsx)(t.a,{href:"/alternatives.html",children:"client side database alternatives"})," that you can try to use with Electron."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>i});var r=s(6540);const a={},n=r.createContext(a);function o(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);