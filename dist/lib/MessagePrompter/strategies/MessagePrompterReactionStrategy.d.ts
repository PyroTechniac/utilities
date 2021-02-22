import type { CollectorFilter, DMChannel, EmojiResolvable, NewsChannel, TextChannel, User } from 'discord.js';
import type { MessagePrompterMessage } from '../constants';
import type { IMessagePrompterExplicitReturnBase } from '../ExplicitReturnTypes';
import type { IMessagePrompterReactionStrategyOptions } from '../strategyOptions';
import { MessagePrompterBaseStrategy } from './MessagePrompterBaseStrategy';
export declare class MessagePrompterReactionStrategy extends MessagePrompterBaseStrategy implements MessagePrompterReactionStrategy {
    /**
     * The emojis used
     */
    reactions: string[] | EmojiResolvable[];
    /**
     * Constructor for the [[MessagePrompterReactionStrategy]] class
     * @param messagePrompter The used instance of [[MessagePrompter]]
     * @param options Overrideable options if needed.
     */
    constructor(message: MessagePrompterMessage, options: IMessagePrompterReactionStrategyOptions);
    /**
     * This executes the [[MessagePrompterReactionStrategy]] and sends the message.
     * The handler will wait for one (1) reaction.
     * @param channel The channel to use.
     * @param authorOrFilter An author object to validate or a {@link https://discord.js.org/#/docs/main/stable/typedef/CollectorFilter CollectorFilter} predicate callback.
     * @returns A promise that resolves to the reaction object.
     */
    run(channel: TextChannel | NewsChannel | DMChannel, authorOrFilter: User | CollectorFilter): Promise<IMessagePrompterExplicitReturnBase | string | EmojiResolvable>;
}
//# sourceMappingURL=MessagePrompterReactionStrategy.d.ts.map