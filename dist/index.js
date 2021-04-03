'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var discordUtilities = require('@sapphire/discord-utilities');
var discord_js = require('discord.js');

/**
 * A message builder class, it implements the {@link https://discord.js.org/#/docs/main/stable/typedef/MessageOptions MessageOptions}
 * interface.
 */
class MessageBuilder {
    constructor(options) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        /**
         * Whether or not the message should be spoken aloud.
         * @default false
         */
        Object.defineProperty(this, "tts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The nonce for the message.
         * @default ''
         */
        Object.defineProperty(this, "nonce", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The content for the message. If set to undefined and the builder is used to edit, the content will not be
         * replaced.
         */
        Object.defineProperty(this, "content", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * An embed for the message. If set to undefined and the builder is used to edit, the embed will not be replaced.
         */
        Object.defineProperty(this, "embed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Which mentions should be parsed from the message content.
         */
        Object.defineProperty(this, "allowedMentions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Files to send with the message. This should not be set when editing a message, as Discord does not support
         * editing file attachments.
         */
        Object.defineProperty(this, "files", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Language for optional codeblock formatting to apply.
         */
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Whether or not the message should be split into multiple messages if it exceeds the character limit. If an object
         * is provided, these are the options for splitting the message.
         */
        Object.defineProperty(this, "split", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.tts = (_a = options === null || options === void 0 ? void 0 : options.tts) !== null && _a !== void 0 ? _a : MessageBuilder.defaults.tts;
        this.nonce = (_b = options === null || options === void 0 ? void 0 : options.nonce) !== null && _b !== void 0 ? _b : MessageBuilder.defaults.nonce;
        this.content = (_c = options === null || options === void 0 ? void 0 : options.content) !== null && _c !== void 0 ? _c : MessageBuilder.defaults.content;
        this.embed = (_d = options === null || options === void 0 ? void 0 : options.embed) !== null && _d !== void 0 ? _d : MessageBuilder.defaults.embed;
        this.allowedMentions = (_e = options === null || options === void 0 ? void 0 : options.allowedMentions) !== null && _e !== void 0 ? _e : MessageBuilder.defaults.allowedMentions;
        this.files = (_f = options === null || options === void 0 ? void 0 : options.files) !== null && _f !== void 0 ? _f : MessageBuilder.defaults.files;
        this.code = (_g = options === null || options === void 0 ? void 0 : options.code) !== null && _g !== void 0 ? _g : MessageBuilder.defaults.code;
        this.split = (_h = options === null || options === void 0 ? void 0 : options.split) !== null && _h !== void 0 ? _h : MessageBuilder.defaults.split;
    }
    /**
     * Sets the value for the [[MessageBuilder.tts]] field.
     * @param tts Whether or not the message should be spoken aloud.
     */
    setTTS(tts) {
        this.tts = tts;
        return this;
    }
    /**
     * Sets the value for the [[MessageBuilder.nonce]] field.
     * @param nonce The nonce for the message.
     */
    setNonce(nonce) {
        this.nonce = nonce;
        return this;
    }
    /**
     * Sets the value for the [[MessageBuilder.content]] field.
     * @param content The content for the message. If set to undefined and the builder is used to edit, the content will
     * not be replaced.
     */
    setContent(content) {
        this.content = content;
        return this;
    }
    /**
     * Sets the value for the [[MessageBuilder.embed]] field.
     * @param embed An embed for the message. If set to undefined and the builder is used to edit, the embed will not be
     * replaced.
     */
    setEmbed(embed) {
        this.embed = embed;
        return this;
    }
    /**
     * Sets the value for the [[MessageBuilder.allowedMentions]] field.
     * @param allowedMentions Which mentions should be parsed from the message content.
     */
    setAllowedMentions(allowedMentions) {
        this.allowedMentions = allowedMentions;
        return this;
    }
    /**
     * Adds a new value for the [[MessageBuilder.files]] field array.
     * @param file The file to add to the [[MessageBuilder.files]] field array.
     */
    addFile(file) {
        var _a, _b;
        this.files = (_b = (_a = this.files) === null || _a === void 0 ? void 0 : _a.concat(file)) !== null && _b !== void 0 ? _b : [file];
        return this;
    }
    /**
     * Sets a single value for the [[MessageBuilder.files]] field array.
     * @param file The file to send with the message. This should not be set when editing a message, as Discord does not
     * support editing file attachments.
     */
    setFile(file) {
        this.files = [file];
        return this;
    }
    /**
     * Sets the value for the [[MessageBuilder.files]] field.
     * @param files The files to send with the message. This should not be set when editing a message, as Discord does
     * not support editing file attachments.
     */
    setFiles(files) {
        this.files = files;
        return this;
    }
    /**
     * Sets the value for the [[MessageBuilder.code]] field.
     * @param code Language for optional codeblock formatting to apply.
     */
    setCode(code) {
        this.code = code;
        return this;
    }
    /**
     * Sets the value for the [[MessageBuilder.split]] field.
     * @param split Whether or not the message should be split into multiple messages if it exceeds the character limit.
     * If an object is provided, these are the options for splitting the message.
     */
    setSplit(split) {
        this.split = split;
        return this;
    }
}
/**
 * The default values for all MessageBuilder instances.
 */
Object.defineProperty(MessageBuilder, "defaults", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {}
});

/**
 * This is a [[PaginatedMessage]], a utility to paginate messages (usually embeds).
 * You must either use this class directly or extend it.
 *
 * [[PaginatedMessage]] uses actions, these are essentially reaction emojis, when triggered run the said action.
 * You can utilize your own actions, or you can use the [[PaginatedMessage.defaultActions]].
 * [[PaginatedMessage.defaultActions]] is also static so you can modify these directly.
 *
 * [[PaginatedMessage]] also uses pages, these are simply {@link https://discord.js.org/#/docs/main/stable/class/APIMessage APIMessages}.
 *
 * @example
 * ```typescript
 * const handler = new PaginatedMessage();
 * ```
 *
 * @example
 * ```typescript
 * // To utilize actions you can use the IPaginatedMessageAction by implementing it into a class.
 * // [[PaginatedMessage]] requires you to have the class initialized using `new`.
 *
 * class ForwardAction implements IPaginatedMessageAction {
 *   public id = '▶️';
 *
 *   public run({ handler }) {
 *     if (handler.index !== handler.pages.length - 1) ++handler.index;
 *   }
 * }
 *
 * // You can also give the object directly.
 *
 * const StopAction: IPaginatedMessageAction = {
 *   id: '⏹️',
 *   disableResponseEdit: true,
 *   run: ({ response, collector }) => {
 *     await response.reactions.removeAll();
 *     collector!.stop();
 *   }
 * }```
 *
 */
class PaginatedMessage {
    /**
     * Constructor for the [[PaginatedMessage]] class
     * @param __namedParameters The [[PaginatedMessageOptions]] for this instance of the [[PaginatedMessage]] class
     */
    constructor({ pages, actions } = {}) {
        /**
         * The pages to be converted to [[PaginatedMessage.messages]]
         */
        Object.defineProperty(this, "pages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The response message used to edit on page changes.
         */
        Object.defineProperty(this, "response", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        /**
         * The collector used for handling reactions.
         */
        Object.defineProperty(this, "collector", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        /**
         * The pages which were converted from [[PaginatedMessage.pages]]
         */
        Object.defineProperty(this, "messages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        /**
         * The actions which are to be used.
         */
        Object.defineProperty(this, "actions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        /**
         * The handler's current page/message index.
         */
        Object.defineProperty(this, "index", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        /**
         * The amount of time to idle before the paginator is closed. Defaults to `20 * 1000`.
         */
        Object.defineProperty(this, "idle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 20 * 1000
        });
        this.pages = pages !== null && pages !== void 0 ? pages : [];
        for (const page of this.pages)
            this.messages.push(page instanceof discord_js.APIMessage ? page : null);
        for (const action of actions !== null && actions !== void 0 ? actions : this.constructor.defaultActions)
            this.actions.set(action.id, action);
    }
    /**
     * Sets the handler's current page/message index.
     * @param index The number to set the index to.
     */
    setIndex(index) {
        this.index = index;
        return this;
    }
    /**
     * Sets the amount of time to idle before the paginator is closed.
     * @param idle The number to set the idle to.
     */
    setIdle(idle) {
        this.idle = idle;
        return this;
    }
    /**
     * Clears all current actions and sets them. The order given is the order they will be used.
     * @param actions The actions to set.
     */
    setActions(actions) {
        this.actions.clear();
        return this.addActions(actions);
    }
    /**
     * Adds actions to the existing ones. The order given is the order they will be used.
     * @param actions The actions to add.
     */
    addActions(actions) {
        for (const action of actions)
            this.addAction(action);
        return this;
    }
    /**
     * Adds an action to the existing ones. This will be added as the last action.
     * @param action The action to add.
     */
    addAction(action) {
        this.actions.set(action.id, action);
        return this;
    }
    /**
     * Checks whether or not the handler has a specific page.
     * @param index The index to check.
     */
    hasPage(index) {
        return index >= 0 && index < this.pages.length;
    }
    /**
     * Clears all current pages and messages and sets them. The order given is the order they will be used.
     * @param pages The pages to set.
     */
    setPages(pages) {
        this.pages = [];
        this.messages = [];
        this.addPages(pages);
        return this;
    }
    /**
     * Adds a page to the existing ones. This will be added as the last page.
     * @param page The page to add.
     */
    addPage(page) {
        this.pages.push(page);
        this.messages.push(page instanceof discord_js.APIMessage ? page : null);
        return this;
    }
    /**
     * Add pages to the existing ones. The order given is the order they will be used.
     * @param pages The pages to add.
     */
    addPages(pages) {
        for (const page of pages)
            this.addPage(page);
        return this;
    }
    /**
     * Executes the [[PaginatedMessage]] and sends the pages corresponding with [[PaginatedMessage.index]].
     * The handler will start collecting reactions and running actions once all actions have been reacted to the message.
     * @param author The author to validate.
     * @param channel The channel to use.
     */
    async run(author, channel) {
        await this.resolvePagesOnRun(channel);
        // Sanity checks to handle
        if (!this.messages.length)
            throw new Error('There are no messages.');
        if (!this.actions.size)
            throw new Error('There are no messages.');
        await this.setUpMessage(channel, author);
        await this.setUpReactions(channel, author);
        return this;
    }
    /**
     * Executed whenever [[PaginatedMessage.run]] is called.
     */
    async resolvePagesOnRun(channel) {
        for (let i = 0; i < this.pages.length; i++)
            await this.resolvePage(channel, i);
    }
    /**
     * Executed whenever an action is triggered and resolved.
     * @param index The index to resolve.
     */
    async resolvePage(channel, index) {
        // If the message was already processed, do not load it again:
        const message = this.messages[index];
        if (message !== null)
            return message;
        // Load the page and return it:
        const resolved = await this.handlePageLoad(this.pages[index], channel, index);
        this.messages[index] = resolved;
        return resolved;
    }
    /**
     * Clones the current handler into a new instance.
     */
    clone() {
        const clone = new this.constructor({ pages: this.pages, actions: [] }).setIndex(this.index).setIdle(this.idle);
        clone.actions = this.actions;
        clone.response = this.response;
        return clone;
    }
    async setUpMessage(channel) {
        const firstPage = this.messages[this.index];
        if (this.response)
            await this.response.edit(firstPage);
        else
            this.response = (await channel.send(firstPage));
    }
    /**
     * Sets up the message's reactions and the collector.
     * @param channel The channel the handler is running at.
     * @param author The author the handler is for.
     */
    async setUpReactions(channel, author) {
        this.collector = this.response.createReactionCollector((reaction, user) => user.id === author.id && (this.actions.has(reaction.emoji.identifier) || this.actions.has(reaction.emoji.name)), { idle: this.idle })
            .on('collect', this.handleCollect.bind(this, author, channel))
            .on('end', this.handleEnd.bind(this));
        for (const id of this.actions.keys()) {
            if (this.collector.ended)
                break;
            await this.response.react(id);
        }
    }
    /**
     * Handles the load of a page.
     * @param page The page to be loaded.
     * @param channel The channel the paginated message runs at.
     * @param index The index of the current page.
     */
    async handlePageLoad(page, channel, index) {
        const options = typeof page === 'function' ? await page(index, this.pages, this) : page;
        return (options instanceof discord_js.APIMessage ? options : new discord_js.APIMessage(channel, options)).resolveData();
    }
    /**
     * Handles the `collect` event from the collector.
     * @param author The the handler is for.
     * @param channel The channel the handler is running at.
     * @param reaction The reaction that was received.
     * @param user The user that reacted to the message.
     */
    async handleCollect(author, channel, reaction, user) {
        var _a, _b;
        await reaction.users.remove(user);
        const action = ((_a = this.actions.get(reaction.emoji.identifier)) !== null && _a !== void 0 ? _a : this.actions.get(reaction.emoji.name));
        const previousIndex = this.index;
        await action.run({
            handler: this,
            author,
            channel,
            response: this.response,
            collector: this.collector
        });
        if (previousIndex !== this.index) {
            await ((_b = this.response) === null || _b === void 0 ? void 0 : _b.edit(await this.resolvePage(channel, this.index)));
        }
    }
    /**
     * Handles the `end` event from the collector.
     * @param reason The reason for which the collector was ended.
     */
    async handleEnd(reason) {
        var _a;
        // Remove all listeners from the collector:
        (_a = this.collector) === null || _a === void 0 ? void 0 : _a.removeAllListeners();
        // Do not remove reactions if the message, channel, or guild, was deleted:
        if (this.response && !PaginatedMessage.deletionStopReasons.includes(reason)) {
            await this.response.reactions.removeAll();
        }
    }
}
/**
 * The default actions of this handler.
 */
Object.defineProperty(PaginatedMessage, "defaultActions", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: [
        {
            id: '🔢',
            run: async ({ handler, author, channel }) => {
                const questionMessage = await channel.send('What page would you like to jump to?');
                const collected = await channel
                    .awaitMessages((message) => message.author.id === author.id, { max: 1, idle: 15 * 1000 })
                    .catch(() => null);
                if (collected) {
                    const responseMessage = collected.first();
                    if (questionMessage.deletable)
                        await questionMessage.delete();
                    if (responseMessage) {
                        if (responseMessage.deletable)
                            await responseMessage.delete();
                        const i = Number(responseMessage.content) - 1;
                        if (!Number.isNaN(i) && handler.hasPage(i))
                            handler.index = i;
                    }
                }
            }
        },
        {
            id: '⏪',
            run: ({ handler }) => (handler.index = 0)
        },
        {
            id: '◀️',
            run: ({ handler }) => {
                if (handler.index === 0)
                    handler.index = handler.pages.length - 1;
                else
                    --handler.index;
            }
        },
        {
            id: '▶️',
            run: ({ handler }) => {
                if (handler.index === handler.pages.length - 1)
                    handler.index = 0;
                else
                    ++handler.index;
            }
        },
        {
            id: '⏩',
            run: ({ handler }) => (handler.index = handler.pages.length - 1)
        },
        {
            id: '⏹️',
            run: async ({ response, collector }) => {
                await response.reactions.removeAll();
                collector.stop();
            }
        }
    ]
});
/**
 * The reasons sent by {@link https://discord.js.org/#/docs/main/stable/class/ReactionCollector?scrollTo=e-end ReactionCollector#end}
 * event when the message (or its owner) has been deleted.
 */
Object.defineProperty(PaginatedMessage, "deletionStopReasons", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: ['messageDelete', 'channelDelete', 'guildDelete']
});

/**
 * This is a LazyPaginatedMessage. Instead of resolving all pages that are functions on [[PaginatedMessage.run]] will resolve when requested.
 */
class LazyPaginatedMessage extends PaginatedMessage {
    /**
     * Only resolves the page corresponding with the handler's current index.
     */
    async resolvePagesOnRun(channel) {
        await this.resolvePage(channel, this.index);
    }
    /**
     * Resolves the page corresponding with the given index. This also resolves the index's before and after the given index.
     * @param index The index to resolve. Defaults to handler's current index.
     */
    async resolvePage(channel, index) {
        const promises = [super.resolvePage(channel, index)];
        if (this.hasPage(index - 1))
            promises.push(super.resolvePage(channel, index - 1));
        if (this.hasPage(index + 1))
            promises.push(super.resolvePage(channel, index + 1));
        const [result] = await Promise.all(promises);
        return result;
    }
}

exports.MessagePrompterStrategies = void 0;
(function (MessagePrompterStrategies) {
    MessagePrompterStrategies["Confirm"] = "confirm";
    MessagePrompterStrategies["Number"] = "number";
    MessagePrompterStrategies["Message"] = "message";
    MessagePrompterStrategies["Reaction"] = "reaction";
})(exports.MessagePrompterStrategies || (exports.MessagePrompterStrategies = {}));

class MessagePrompterBaseStrategy {
    /**
     * Constructor for the [[MessagePrompterBaseStrategy]] class
     * @param messagePrompter The used instance of [[MessagePrompter]]
     * @param options Overrideable options if needed.
     */
    constructor(type, message, options) {
        var _a, _b;
        /**
         * The type of strategy that was used
         */
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The timeout that was used in the collector
         */
        Object.defineProperty(this, "timeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Wether to return an explicit object with data, or the strategies' default
         */
        Object.defineProperty(this, "explicitReturn", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The message that has been sent in [[MessagePrompter.run]]
         */
        Object.defineProperty(this, "appliedMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        /**
         * The message that will be sent in [[MessagePrompter.run]]
         */
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.type = type;
        this.timeout = (_a = options === null || options === void 0 ? void 0 : options.timeout) !== null && _a !== void 0 ? _a : MessagePrompterBaseStrategy.defaultStrategyOptions.timeout;
        this.explicitReturn = (_b = options === null || options === void 0 ? void 0 : options.explicitReturn) !== null && _b !== void 0 ? _b : MessagePrompterBaseStrategy.defaultStrategyOptions.explicitReturn;
        this.message = message;
    }
    async collectReactions(channel, authorOrFilter, reactions) {
        this.appliedMessage = await channel.send(this.message);
        const collector = this.appliedMessage.createReactionCollector(this.createReactionPromptFilter(reactions, authorOrFilter), {
            max: 1,
            time: this.timeout
        });
        let resolved = false;
        const collected = new Promise((resolve, reject) => {
            collector.on('collect', (r) => {
                resolve(r);
                resolved = true;
                collector.stop();
            });
            collector.on('end', (collected) => {
                resolved = true;
                if (!collected.size)
                    reject(new Error('Collector has ended'));
            });
        });
        for (const reaction of reactions) {
            if (resolved)
                break;
            await this.appliedMessage.react(reaction);
        }
        const firstReaction = await collected;
        const emoji = firstReaction === null || firstReaction === void 0 ? void 0 : firstReaction.emoji;
        const reaction = reactions.find((r) => { var _a; return ((_a = emoji === null || emoji === void 0 ? void 0 : emoji.id) !== null && _a !== void 0 ? _a : emoji === null || emoji === void 0 ? void 0 : emoji.name) === r; });
        return {
            emoji,
            reaction,
            strategy: this,
            appliedMessage: this.appliedMessage,
            message: this.message
        };
    }
    /**
     * Creates a filter for the collector to filter on
     * @return The filter for awaitReactions function
     */
    createReactionPromptFilter(reactions, authorOrFilter) {
        return async (reaction, user) => {
            var _a;
            return reactions.includes((_a = reaction.emoji.id) !== null && _a !== void 0 ? _a : reaction.emoji.name) &&
                (typeof authorOrFilter === 'function' ? await authorOrFilter(reaction, user) : user.id === authorOrFilter.id) &&
                !user.bot;
        };
    }
}
/**
 * The default strategy options
 */
Object.defineProperty(MessagePrompterBaseStrategy, "defaultStrategyOptions", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {
        timeout: 10 * 1000,
        explicitReturn: false
    }
});

class MessagePrompterConfirmStrategy extends MessagePrompterBaseStrategy {
    /**
     * Constructor for the [[MessagePrompterBaseStrategy]] class
     * @param message The message to be sent [[MessagePrompter]]
     * @param options Overrideable options if needed.
     */
    constructor(message, options) {
        var _a, _b;
        super('confirm', message, options);
        /**
         * The confirm emoji used
         */
        Object.defineProperty(this, "confirmEmoji", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The cancel emoji used
         */
        Object.defineProperty(this, "cancelEmoji", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.confirmEmoji = (_a = options === null || options === void 0 ? void 0 : options.confirmEmoji) !== null && _a !== void 0 ? _a : MessagePrompterConfirmStrategy.confirmEmoji;
        this.cancelEmoji = (_b = options === null || options === void 0 ? void 0 : options.cancelEmoji) !== null && _b !== void 0 ? _b : MessagePrompterConfirmStrategy.cancelEmoji;
    }
    /**
     * This executes the [[MessagePrompter]] and sends the message if [[IMessagePrompterOptions.type]] equals confirm.
     * The handler will wait for one (1) reaction.
     * @param channel The channel to use.
     * @param authorOrFilter An author object to validate or a {@link https://discord.js.org/#/docs/main/stable/typedef/CollectorFilter CollectorFilter} predicate callback.
     * @returns A promise that resolves to a boolean denoting the value of the input (`true` for yes, `false` for no).
     */
    async run(channel, authorOrFilter) {
        var _a, _b, _c;
        const response = await this.collectReactions(channel, authorOrFilter, [this.confirmEmoji, this.cancelEmoji]);
        const confirmed = ((_b = (_a = response === null || response === void 0 ? void 0 : response.emoji) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : (_c = response === null || response === void 0 ? void 0 : response.emoji) === null || _c === void 0 ? void 0 : _c.name) === this.confirmEmoji;
        // prettier-ignore
        return this.explicitReturn ? { ...response, confirmed } : confirmed;
    }
}
/**
 * The default confirm emoji used for [[MessagePrompterConfirmStrategy]]
 */
Object.defineProperty(MessagePrompterConfirmStrategy, "confirmEmoji", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: '🇾'
});
/**
 * The default cancel emoji used for [[MessagePrompterConfirmStrategy]]
 */
Object.defineProperty(MessagePrompterConfirmStrategy, "cancelEmoji", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: '🇳'
});

class MessagePrompterMessageStrategy extends MessagePrompterBaseStrategy {
    /**
     * Constructor for the [[MessagePrompterBaseStrategy]] class
     * @param messagePrompter The used instance of [[MessagePrompter]]
     * @param options Overrideable options if needed.
     */
    constructor(message, options) {
        super('message', message, options);
    }
    /**
     * This executes the [[MessagePrompter]] and sends the message if [[IMessagePrompterOptions.type]] equals message.
     * The handler will wait for one (1) message.
     * @param channel The channel to use.
     * @param authorOrFilter An author object to validate or a {@link https://discord.js.org/#/docs/main/stable/typedef/CollectorFilter CollectorFilter} predicate callback.
     * @returns A promise that resolves to the message object received.
     */
    async run(channel, authorOrFilter) {
        this.appliedMessage = await channel.send(this.message);
        const collector = await channel.awaitMessages(this.createMessagePromptFilter(authorOrFilter), {
            max: 1,
            time: this.timeout,
            errors: ['time']
        });
        const response = collector.first();
        if (!response) {
            throw new Error('No messages received');
        }
        return this.explicitReturn
            ? {
                response,
                strategy: this,
                appliedMessage: this.appliedMessage,
                message: this.message
            }
            : response;
    }
    /**
     * Creates a filter for the collector to filter on
     * @return The filter for awaitMessages function
     */
    createMessagePromptFilter(authorOrFilter) {
        return async (message) => (typeof authorOrFilter === 'function' ? await authorOrFilter(message) : message.author.id === authorOrFilter.id) && !message.author.bot;
    }
}

class MessagePrompterNumberStrategy extends MessagePrompterBaseStrategy {
    /**
     * Constructor for the [[MessagePrompterBaseStrategy]] class
     * @param messagePrompter The used instance of [[MessagePrompter]]
     * @param options Overrideable options if needed.
     */
    constructor(message, options) {
        var _a, _b, _c;
        super('number', message, options);
        /**
         * The available number emojis
         */
        Object.defineProperty(this, "numberEmojis", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The available number emojis
         */
        Object.defineProperty(this, "start", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The available number emojis
         */
        Object.defineProperty(this, "end", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.numberEmojis = (_a = options === null || options === void 0 ? void 0 : options.numberEmojis) !== null && _a !== void 0 ? _a : MessagePrompterNumberStrategy.numberEmojis;
        this.start = (_b = options === null || options === void 0 ? void 0 : options.start) !== null && _b !== void 0 ? _b : 0;
        this.end = (_c = options === null || options === void 0 ? void 0 : options.end) !== null && _c !== void 0 ? _c : 10;
    }
    /**
     * This executes the [[MessagePrompter]] and sends the message if [[IMessagePrompterOptions.type]] equals number.
     * The handler will wait for one (1) reaction.
     * @param channel The channel to use.
     * @param authorOrFilter An author object to validate or a {@link https://discord.js.org/#/docs/main/stable/typedef/CollectorFilter CollectorFilter} predicate callback.
     * @returns A promise that resolves to the selected number within the range.
     */
    async run(channel, authorOrFilter) {
        // 0 and 10 are the maximum available emojis as a number
        if (this.start < 0)
            throw new TypeError('Starting number cannot be less than 0.');
        if (this.end > 10)
            throw new TypeError('Ending number cannot be more than 10.');
        const numbers = Array.from({ length: this.end - this.start + 1 }, (_, n) => n + this.start);
        const emojis = this.numberEmojis.slice(this.start, this.end);
        const response = await this.collectReactions(channel, authorOrFilter, emojis);
        const emojiIndex = emojis.findIndex((emoji) => { var _a, _b, _c; return ((_b = (_a = response === null || response === void 0 ? void 0 : response.emoji) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : (_c = response === null || response === void 0 ? void 0 : response.emoji) === null || _c === void 0 ? void 0 : _c.name) === emoji; });
        const number = numbers[emojiIndex];
        // prettier-ignore
        return this.explicitReturn ? { ...response, number } : number;
    }
}
/**
 * The default available number emojis
 */
Object.defineProperty(MessagePrompterNumberStrategy, "numberEmojis", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟']
});

class MessagePrompterReactionStrategy extends MessagePrompterBaseStrategy {
    /**
     * Constructor for the [[MessagePrompterReactionStrategy]] class
     * @param messagePrompter The used instance of [[MessagePrompter]]
     * @param options Overrideable options if needed.
     */
    constructor(message, options) {
        super('reactions', message, options);
        /**
         * The emojis used
         */
        Object.defineProperty(this, "reactions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.reactions = options === null || options === void 0 ? void 0 : options.reactions;
    }
    /**
     * This executes the [[MessagePrompterReactionStrategy]] and sends the message.
     * The handler will wait for one (1) reaction.
     * @param channel The channel to use.
     * @param authorOrFilter An author object to validate or a {@link https://discord.js.org/#/docs/main/stable/typedef/CollectorFilter CollectorFilter} predicate callback.
     * @returns A promise that resolves to the reaction object.
     */
    async run(channel, authorOrFilter) {
        var _a, _b;
        if (!((_a = this.reactions) === null || _a === void 0 ? void 0 : _a.length))
            throw new TypeError('There are no reactions provided.');
        const response = await this.collectReactions(channel, authorOrFilter, this.reactions);
        return this.explicitReturn ? response : (_b = response.reaction) !== null && _b !== void 0 ? _b : response;
    }
}

/**
 * This is a [[MessagePrompter]], a utility that sends a message, prompting for user input. The prompt can resolve to any kind of input.
 * There are several specifiable types to prompt for user input, and they are as follows:
 * - Confirm
 *   This will send a simple Yes/No prompt, using reactions.
 * - Number
 *   This will prompt for an integer. By default it will be a number between 0 and 10 (inclusive), however you can also specify your own custom range (inclusive).
 * - Reactions
 *   This can be any kind of reaction emoji that Discord supports, and as many as you want. This type will return that reaction instead of a boolean.
 * - Message
 *   This will prompt the user and require a response in the form of a message. This can be helpful if you require a user to upload an image for example, or give text input.
 *
 * You must either use this class directly or extend it.
 *
 * [[MessagePrompter]] uses reactions to prompt for a yes/no answer and returns it.
 * You can modify the confirm and cancel reaction used for each message, or use the [[MessagePrompter.defaultPrompts]].
 * [[MessagePrompter.defaultPrompts]] is also static so you can modify these directly.
 *
 * @example
 * ```typescript
 * const handler = new MessagePrompter('Are you sure you want to continue?');
 * const result = await handler.run(channel, author);
 * ```
 *
 * @example
 * ```typescript
 * const handler = new MessagePrompter('Choose a number between 5 and 10?', 'number', {
 * 		start: 5,
 * 		end: 10
 * });
 * const result = await handler.run(channel, author);
 * ```
 *
 * @example
 * ```typescript
 * const handler = new MessagePrompter('Are you happy or sad?', 'reaction', {
 * 		reactions: ['🙂', '🙁']
 * });
 * const result = await handler.run(channel, author);
 * ```
 *
 * @example
 * ```typescript
 * const handler = new MessagePrompter('Do you love me?', 'message');
 * const result = await handler.run(channel, author);
 * ```
 */
class MessagePrompter {
    /**
     * Constructor for the [[MessagePrompter]] class
     * @param message The message to send.
     * @param strategy The strategy name or Instance to use
     * @param strategyOptions The options that are passed to the strategy
     */
    constructor(message, strategy, strategyOptions) {
        /**
         * The strategy used in [[MessagePrompter.run]]
         */
        Object.defineProperty(this, "strategy", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        let strategyToRun = undefined;
        if (message instanceof MessagePrompterBaseStrategy) {
            strategyToRun = message;
        }
        else {
            const mapStrategy = MessagePrompter.strategies.get(strategy !== null && strategy !== void 0 ? strategy : MessagePrompter.defaultStrategy);
            if (!mapStrategy) {
                throw new Error('No strategy provided');
            }
            strategyToRun = new mapStrategy(message, strategyOptions);
        }
        this.strategy = strategyToRun;
    }
    /**
     * This executes the [[MessagePrompter]] and sends the message.
     * @param channel The channel to use.
     * @param authorOrFilter An author object to validate or a {@link https://discord.js.org/#/docs/main/stable/typedef/CollectorFilter CollectorFilter} predicate callback.
     */
    run(channel, authorOrFilter) {
        return this.strategy.run(channel, authorOrFilter);
    }
}
/**
 * The available strategies
 */
Object.defineProperty(MessagePrompter, "strategies", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: new Map([
        ["confirm" /* Confirm */, MessagePrompterConfirmStrategy],
        ["number" /* Number */, MessagePrompterNumberStrategy],
        ["reaction" /* Reaction */, MessagePrompterReactionStrategy],
        ["message" /* Message */, MessagePrompterMessageStrategy]
    ])
});
/**
 * The default strategy to use
 */
Object.defineProperty(MessagePrompter, "defaultStrategy", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "confirm" /* Confirm */
});

/**
 * Checks whether a given channel is a {@link https://discord.js.org/#/docs/main/stable/class/CategoryChannel CategoryChannel}
 * @param channel The channel to check
 */
function isCategoryChannel(channel) {
    return channel.type === 'category';
}
/**
 * Checks whether a given channel is a {@link https://discord.js.org/#/docs/main/stable/class/DMChannel DMChannel}
 * @param channel The channel to check
 */
function isDMChannel(channel) {
    return channel.type === 'dm';
}
/**
 * Checks whether a given channel is a {@link https://discord.js.org/#/docs/main/stable/class/PartialGroupDMChannel PartialGroupDMChannel}
 * @param channel The channel to check
 */
function isGroupChannel(channel) {
    return channel.type === 'group';
}
/**
 * Checks whether a given channel is a {@link https://discord.js.org/#/docs/main/stable/class/GuildChannel GuildChannel}
 * @param channel The channel to check
 */
function isGuildBasedChannel(channel) {
    return channel.type !== 'dm' && channel.type !== 'group' && channel.type !== 'unknown';
}
/**
 * Checks whether a given channel is a {@link https://discord.js.org/#/docs/main/stable/class/NewsChannel NewsChannel}
 * @param channel The channel to check
 */
function isNewsChannel(channel) {
    return channel.type === 'news';
}
/**
 * Checks whether a given channel is a {@link https://discord.js.org/#/docs/main/stable/class/StoreChannel StoreChannel}
 * @param channel The channel to check
 */
function isStoreChannel(channel) {
    return channel.type === 'store';
}
/**
 * Checks whether a given channel is a {@link https://discord.js.org/#/docs/main/stable/class/TextChannel TextChannel}
 * @param channel The channel to check
 */
function isTextChannel(channel) {
    return channel.type === 'text';
}
/**
 * Checks whether a given channel is a {@link https://discord.js.org/#/docs/main/stable/class/VoiceChannel VoiceChannel}
 * @param channel The channel to check
 */
function isVoiceChannel(channel) {
    return channel.type === 'voice';
}

exports.LazyPaginatedMessage = LazyPaginatedMessage;
exports.MessageBuilder = MessageBuilder;
exports.MessagePrompter = MessagePrompter;
exports.MessagePrompterBaseStrategy = MessagePrompterBaseStrategy;
exports.MessagePrompterConfirmStrategy = MessagePrompterConfirmStrategy;
exports.MessagePrompterMessageStrategy = MessagePrompterMessageStrategy;
exports.MessagePrompterNumberStrategy = MessagePrompterNumberStrategy;
exports.MessagePrompterReactionStrategy = MessagePrompterReactionStrategy;
exports.PaginatedMessage = PaginatedMessage;
exports.isCategoryChannel = isCategoryChannel;
exports.isDMChannel = isDMChannel;
exports.isGroupChannel = isGroupChannel;
exports.isGuildBasedChannel = isGuildBasedChannel;
exports.isNewsChannel = isNewsChannel;
exports.isStoreChannel = isStoreChannel;
exports.isTextChannel = isTextChannel;
exports.isVoiceChannel = isVoiceChannel;
Object.keys(discordUtilities).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return discordUtilities[k];
		}
	});
});
//# sourceMappingURL=index.js.map
