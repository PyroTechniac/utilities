"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@sapphire/discord-utilities"),t=require("discord.js");class MessageBuilder{constructor(e){var t,s,i,n,a,r,l,o;Object.defineProperty(this,"tts",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"nonce",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"content",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"embed",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"allowedMentions",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"files",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"split",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.tts=null!==(t=null==e?void 0:e.tts)&&void 0!==t?t:MessageBuilder.defaults.tts,this.nonce=null!==(s=null==e?void 0:e.nonce)&&void 0!==s?s:MessageBuilder.defaults.nonce,this.content=null!==(i=null==e?void 0:e.content)&&void 0!==i?i:MessageBuilder.defaults.content,this.embed=null!==(n=null==e?void 0:e.embed)&&void 0!==n?n:MessageBuilder.defaults.embed,this.allowedMentions=null!==(a=null==e?void 0:e.allowedMentions)&&void 0!==a?a:MessageBuilder.defaults.allowedMentions,this.files=null!==(r=null==e?void 0:e.files)&&void 0!==r?r:MessageBuilder.defaults.files,this.code=null!==(l=null==e?void 0:e.code)&&void 0!==l?l:MessageBuilder.defaults.code,this.split=null!==(o=null==e?void 0:e.split)&&void 0!==o?o:MessageBuilder.defaults.split}setTTS(e){return this.tts=e,this}setNonce(e){return this.nonce=e,this}setContent(e){return this.content=e,this}setEmbed(e){return this.embed=e,this}setAllowedMentions(e){return this.allowedMentions=e,this}addFile(e){var t,s;return this.files=null!==(s=null===(t=this.files)||void 0===t?void 0:t.concat(e))&&void 0!==s?s:[e],this}setFile(e){return this.files=[e],this}setFiles(e){return this.files=e,this}setCode(e){return this.code=e,this}setSplit(e){return this.split=e,this}}Object.defineProperty(MessageBuilder,"defaults",{enumerable:!0,configurable:!0,writable:!0,value:{}});class PaginatedMessage{constructor({pages:e,actions:s}={}){Object.defineProperty(this,"pages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"response",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"collector",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"messages",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"actions",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"index",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"idle",{enumerable:!0,configurable:!0,writable:!0,value:2e4}),this.pages=null!=e?e:[];for(const e of this.pages)this.messages.push(e instanceof t.APIMessage?e:null);for(const e of null!=s?s:this.constructor.defaultActions)this.actions.set(e.id,e)}setIndex(e){return this.index=e,this}setIdle(e){return this.idle=e,this}setActions(e){return this.actions.clear(),this.addActions(e)}addActions(e){for(const t of e)this.addAction(t);return this}addAction(e){return this.actions.set(e.id,e),this}hasPage(e){return e>=0&&e<this.pages.length}setPages(e){return this.pages=[],this.messages=[],this.addPages(e),this}addPage(e){return this.pages.push(e),this.messages.push(e instanceof t.APIMessage?e:null),this}addPages(e){for(const t of e)this.addPage(t);return this}async run(e,t){if(await this.resolvePagesOnRun(t),!this.messages.length)throw new Error("There are no messages.");if(!this.actions.size)throw new Error("There are no messages.");return await this.setUpMessage(t,e),await this.setUpReactions(t,e),this}async resolvePagesOnRun(e){for(let t=0;t<this.pages.length;t++)await this.resolvePage(e,t)}async resolvePage(e,t){const s=this.messages[t];if(null!==s)return s;const i=await this.handlePageLoad(this.pages[t],e,t);return this.messages[t]=i,i}clone(){const e=new this.constructor({pages:this.pages,actions:[]}).setIndex(this.index).setIdle(this.idle);return e.actions=this.actions,e.response=this.response,e}async setUpMessage(e){const t=this.messages[this.index];this.response?await this.response.edit(t):this.response=await e.send(t)}async setUpReactions(e,t){this.collector=this.response.createReactionCollector(((e,s)=>s.id===t.id&&(this.actions.has(e.emoji.identifier)||this.actions.has(e.emoji.name))),{idle:this.idle}).on("collect",this.handleCollect.bind(this,t,e)).on("end",this.handleEnd.bind(this));for(const e of this.actions.keys()){if(this.collector.ended)break;await this.response.react(e)}}async handlePageLoad(e,s,i){const n="function"==typeof e?await e(i,this.pages,this):e;return(n instanceof t.APIMessage?n:new t.APIMessage(s,n)).resolveData()}async handleCollect(e,t,s,i){var n,a;await s.users.remove(i);const r=null!==(n=this.actions.get(s.emoji.identifier))&&void 0!==n?n:this.actions.get(s.emoji.name),l=this.index;await r.run({handler:this,author:e,channel:t,response:this.response,collector:this.collector}),l!==this.index&&await(null===(a=this.response)||void 0===a?void 0:a.edit(await this.resolvePage(t,this.index)))}async handleEnd(e){var t;null===(t=this.collector)||void 0===t||t.removeAllListeners(),this.response&&!PaginatedMessage.deletionStopReasons.includes(e)&&await this.response.reactions.removeAll()}}Object.defineProperty(PaginatedMessage,"defaultActions",{enumerable:!0,configurable:!0,writable:!0,value:[{id:"🔢",run:async({handler:e,author:t,channel:s})=>{const i=await s.send("What page would you like to jump to?"),n=await s.awaitMessages((e=>e.author.id===t.id),{max:1,idle:15e3}).catch((()=>null));if(n){const t=n.first();if(i.deletable&&await i.delete(),t){t.deletable&&await t.delete();const s=Number(t.content)-1;!Number.isNaN(s)&&e.hasPage(s)&&(e.index=s)}}}},{id:"⏪",run:({handler:e})=>e.index=0},{id:"◀️",run:({handler:e})=>{0===e.index?e.index=e.pages.length-1:--e.index}},{id:"▶️",run:({handler:e})=>{e.index===e.pages.length-1?e.index=0:++e.index}},{id:"⏩",run:({handler:e})=>e.index=e.pages.length-1},{id:"⏹️",run:async({response:e,collector:t})=>{await e.reactions.removeAll(),t.stop()}}]}),Object.defineProperty(PaginatedMessage,"deletionStopReasons",{enumerable:!0,configurable:!0,writable:!0,value:["messageDelete","channelDelete","guildDelete"]});exports.LazyPaginatedMessage=class LazyPaginatedMessage extends PaginatedMessage{async resolvePagesOnRun(e){await this.resolvePage(e,this.index)}async resolvePage(e,t){const s=[super.resolvePage(e,t)];this.hasPage(t-1)&&s.push(super.resolvePage(e,t-1)),this.hasPage(t+1)&&s.push(super.resolvePage(e,t+1));const[i]=await Promise.all(s);return i}},exports.MessageBuilder=MessageBuilder,exports.PaginatedMessage=PaginatedMessage,exports.isCategoryChannel=function isCategoryChannel(e){return"category"===e.type},exports.isDMChannel=function isDMChannel(e){return"dm"===e.type},exports.isGroupChannel=function isGroupChannel(e){return"group"===e.type},exports.isGuildBasedChannel=function isGuildBasedChannel(e){return"dm"!==e.type&&"group"!==e.type&&"unknown"!==e.type},exports.isNewsChannel=function isNewsChannel(e){return"news"===e.type},exports.isStoreChannel=function isStoreChannel(e){return"store"===e.type},exports.isTextChannel=function isTextChannel(e){return"text"===e.type},exports.isVoiceChannel=function isVoiceChannel(e){return"voice"===e.type},Object.keys(e).forEach((function(t){"default"===t||exports.hasOwnProperty(t)||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return e[t]}})}));
//# sourceMappingURL=index.js.map
