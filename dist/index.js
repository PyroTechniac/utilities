"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.AsyncQueue=class AsyncQueue{constructor(){Object.defineProperty(this,"promises",{enumerable:!0,configurable:!0,writable:!0,value:[]})}get remaining(){return this.promises.length}wait(){const e=this.promises.length?this.promises[this.promises.length-1].promise:Promise.resolve();let s;const r=new Promise((e=>{s=e}));return this.promises.push({resolve:s,promise:r}),e}shift(){const e=this.promises.shift();void 0!==e&&e.resolve()}};
//# sourceMappingURL=index.js.map
