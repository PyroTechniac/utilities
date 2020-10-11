!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).SapphireUtilities={})}(this,(function(e){"use strict";const t=String.fromCharCode(8203);function n(e,t,n=" "){const r=e.substring(0,t).lastIndexOf(n),o=-1===r?t:r;return e.substring(0,o)}function r(e){return!("object"!=typeof e||!e)&&e.constructor===Object}const o=["string","bigint","number","boolean"];function c(e){return o.includes(typeof e)}function u(e){if(null===e||c(e))return e;if(Array.isArray(e)){const t=[];for(const n of e)t.push(u(n));return t}if(r(e)){const t={};for(const[n,r]of Object.entries(e))t[n]=u(r);return t}if(e instanceof Map){const t=new e.constructor;for(const[n,r]of e.entries())t.set(n,u(r));return t}if(e instanceof Set){const t=new e.constructor;for(const n of e.values())t.add(u(n));return t}return e}const i=String.fromCharCode(8203);function s(e){return"function"==typeof e}const f=/[-/\\^$*+?.()|[\]{}]/g;const l=/[A-Za-zÀ-ÖØ-öø-ÿ]\S*/g,a={textchannel:"TextChannel",voicechannel:"VoiceChannel",categorychannel:"CategoryChannel",guildmember:"GuildMember"};e.arrayStrictEquals=function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n]||typeof e[n]!=typeof t[n])return!1;return!0},e.chunk=function(e,t){if(!Array.isArray(e))throw new TypeError("entries must be an array.");if(!Number.isInteger(t))throw new TypeError("chunkSize must be an integer.");if(t<1)throw new RangeError("chunkSize must be 1 or greater.");const n=e.slice(),r=[];for(;n.length;)r.push(n.splice(0,t));return r},e.classExtends=function(e,t){let n=e;for(;null!==n;){if(n===t)return!0;n=Object.getPrototypeOf(n)}return!1},e.codeBlock=function(e,n){return"string"==typeof n?0===n.length?`\`\`\`${t}\`\`\``:`\`\`\`${e}\n${n.replace(/```/,`\`${t}\`\``).replace(/`$/g,"`"+t)}\`\`\``:`\`\`\`${e}\n${n||t}\`\`\``},e.cutText=function(e,t){if(e.length<t)return e;const r=n(e,t-3);return r.length<t-3?r+"...":r.slice(0,t-3)+"..."},e.deepClone=u,e.inlineCodeBlock=function(e){return`\`${e.replace(/ /g," ").replace(/`/g,"`"+i)}\``},e.isClass=function(e){return"function"==typeof e&&"object"==typeof e.prototype},e.isFunction=s,e.isNullOrUndefined=function(e){return null==e},e.isNumber=function(e){return"number"==typeof e&&!isNaN(e)&&Number.isFinite(e)},e.isObject=r,e.isPrimitive=c,e.isThenable=function(e){return"object"==typeof e&&null!==e&&(e instanceof Promise||e!==Promise.prototype&&function(e){return Reflect.has(e,"then")&&s(e.then)}(e)&&function(e){return Reflect.has(e,"catch")&&s(e.catch)}(e))},e.makeObject=function(e,t,n={}){if(e.includes(".")){const r=e.split("."),o=r.pop();let c=n;for(const e of r)c[e]||(c[e]={}),c=c[e];c[o]=t}else n[e]=t;return n},e.mergeDefault=function e(t,n){if(!n)return u(t);for(const[o,c]of Object.entries(t)){const t=Reflect.get(n,o);void 0===t?Reflect.set(n,o,u(c)):r(t)&&Reflect.set(n,o,e(null!=c?c:{},t))}return n},e.mergeObjects=function e(t,n){for(const[o,c]of Object.entries(n)){const n=Reflect.get(t,o);r(c)?Reflect.set(t,o,r(n)?e(n,c):c):r(n)||Reflect.set(t,o,c)}return t},e.noop=function(){},e.objectToTuples=function e(t,n=""){const o=[];for(const[c,u]of Object.entries(t))r(u)?o.push(...e(u,`${n}${c}.`)):o.push([`${n}${c}`,u]);return o},e.parseURL=function(e){try{return new URL(e)}catch{return null}},e.regExpEsc=function(e){return e.replace(f,"\\$&")},e.roundNumber=function(e,t=0){if(!e.toString().includes("e"))return Number(`${Math.round(Number(`${e}e+${t}`))}e-${t}`);const n=(""+e).split("e");let r="";return Number(n[1])+t>0&&(r="+"),Number(`${Math.round(Number(`${Number(n[0])}e${r}${Number(n[1])+t}`))}e-${t}`)},e.splitText=n,e.toTitleCase=function(e){return e.replace(l,e=>a[e]||e.charAt(0).toUpperCase()+e.substr(1).toLowerCase())},e.tryParse=function(e){try{return JSON.parse(e)}catch(t){return e}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map
