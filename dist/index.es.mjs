function t(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n]||typeof t[n]!=typeof e[n])return!1;return!0}function e(t,e){if(!Array.isArray(t))throw new TypeError("entries must be an array.");if(!Number.isInteger(e))throw new TypeError("chunkSize must be an integer.");if(e<1)throw new RangeError("chunkSize must be 1 or greater.");const n=t.slice(),r=[];for(;n.length;)r.push(n.splice(0,e));return r}function n(t,e){let n=t;for(;null!==n;){if(n===e)return!0;n=Object.getPrototypeOf(n)}return!1}const r=String.fromCharCode(8203);function o(t,e){return"string"==typeof e?0===e.length?`\`\`\`${r}\`\`\``:`\`\`\`${t}\n${e.replace(/```/,`\`${r}\`\``).replace(/`$/g,"`"+r)}\`\`\``:`\`\`\`${t}\n${e||r}\`\`\``}function c(t,e,n=" "){const r=t.substring(0,e).lastIndexOf(n),o=-1===r?e:r;return t.substring(0,o)}function u(t,e){if(t.length<e)return t;const n=c(t,e-3);return n.length<e-3?n+"...":n.slice(0,e-3)+"..."}function f(t){return!("object"!=typeof t||!t)&&t.constructor===Object}const i=["string","bigint","number","boolean"];function s(t){return i.includes(typeof t)}function l(t){if(null===t||s(t))return t;if(Array.isArray(t)){const e=[];for(const n of t)e.push(l(n));return e}if(f(t)){const e={};for(const[n,r]of Object.entries(t))e[n]=l(r);return e}if(t instanceof Map){const e=new t.constructor;for(const[n,r]of t.entries())e.set(n,l(r));return e}if(t instanceof Set){const e=new t.constructor;for(const n of t.values())e.add(l(n));return e}return t}const a=String.fromCharCode(8203);function p(t){return`\`${t.replace(/ /g," ").replace(/`/g,"`"+a)}\``}function h(t){return"function"==typeof t&&"object"==typeof t.prototype}function b(t){return"function"==typeof t}function g(t){return null==t}function y(t){return"number"==typeof t&&!isNaN(t)&&Number.isFinite(t)}function $(t){return"object"==typeof t&&null!==t&&(t instanceof Promise||t!==Promise.prototype&&function(t){return Reflect.has(t,"then")&&b(t.then)}(t)&&function(t){return Reflect.has(t,"catch")&&b(t.catch)}(t))}function m(t,e,n={}){if(t.includes(".")){const r=t.split("."),o=r.pop();let c=n;for(const t of r)c[t]||(c[t]={}),c=c[t];c[o]=e}else n[t]=e;return n}function d(t,e){if(!e)return l(t);for(const[n,r]of Object.entries(t)){const t=Reflect.get(e,n);void 0===t?Reflect.set(e,n,l(r)):f(t)&&Reflect.set(e,n,d(r,t))}return e}function N(t,e){for(const[n,r]of Object.entries(e)){const e=Reflect.get(t,n);f(r)?Reflect.set(t,n,f(e)?N(e,r):r):f(e)||Reflect.set(t,n,r)}return t}function w(){}function C(t,e=""){const n=[];for(const[r,o]of Object.entries(t))f(o)?n.push(...C(o,`${e}${r}.`)):n.push([`${e}${r}`,o]);return n}function R(t){try{return new URL(t)}catch{return null}}const j=/[-/\\^$*+?.()|[\]{}]/g;function O(t){return t.replace(j,"\\$&")}function S(t,e=0){if(!t.toString().includes("e"))return Number(`${Math.round(Number(`${t}e+${e}`))}e-${e}`);const n=(""+t).split("e");let r="";return Number(n[1])+e>0&&(r="+"),Number(`${Math.round(Number(`${Number(n[0])}e${r}${Number(n[1])+e}`))}e-${e}`)}const A=/[A-Za-zÀ-ÖØ-öø-ÿ]\S*/g,x={textchannel:"TextChannel",voicechannel:"VoiceChannel",categorychannel:"CategoryChannel",guildmember:"GuildMember"};function M(t){return t.replace(A,t=>x[t]||t.charAt(0).toUpperCase()+t.substr(1).toLowerCase())}function v(t){try{return JSON.parse(t)}catch(e){return t}}export{t as arrayStrictEquals,e as chunk,n as classExtends,o as codeBlock,u as cutText,l as deepClone,p as inlineCodeBlock,h as isClass,b as isFunction,g as isNullOrUndefined,y as isNumber,f as isObject,s as isPrimitive,$ as isThenable,m as makeObject,d as mergeDefault,N as mergeObjects,w as noop,C as objectToTuples,R as parseURL,O as regExpEsc,S as roundNumber,c as splitText,M as toTitleCase,v as tryParse};
//# sourceMappingURL=index.es.mjs.map
