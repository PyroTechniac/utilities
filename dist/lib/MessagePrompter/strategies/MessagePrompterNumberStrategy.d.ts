import type { CollectorFilter, DMChannel, EmojiResolvable, NewsChannel, TextChannel, User } from 'discord.js';
import type { MessagePrompterMessage } from '../constants';
import type { IMessagePrompterExplicitNumberReturn } from '../ExplicitReturnTypes';
import type { IMessagePrompterNumberStrategyOptions } from '../strategyOptions';
import { MessagePrompterBaseStrategy } from './MessagePrompterBaseStrategy';
export declare class MessagePrompterNumberStrategy extends MessagePrompterBaseStrategy implements IMessagePrompterNumberStrategyOptions {
    /**
     * The available number emojis
     */
    numberEmojis: string[] | EmojiResolvable[];
    /**
     * The available number emojis
     */
    start: number;
    /**
     * The available number emojis
     */
    end: number;
    /**
     * Constructor for the [[MessagePrompterBaseStrategy]] class
     * @param messagePrompter The used instance of [[MessagePrompter]]
     * @param options Overrideable options if needed.
     */
    constructor(message: MessagePrompterMessage, options: IMessagePrompterNumberStrategyOptions);
    /**
     * This executes the [[MessagePrompter]] and sends the message if [[IMessagePrompterOptions.type]] equals number.
     * The handler will wait for one (1) reaction.
     * @param channel The channel to use.
     * @param authorOrFilter An author object to validate or a {@link https://discord.js.org/#/docs/main/stable/typedef/CollectorFilter CollectorFilter} predicate callback.
     * @returns A promise that resolves to the selected number within the range.
     */
    run(channel: TextChannel | NewsChannel | DMChannel, authorOrFilter: User | CollectorFilter): Promise<IMessagePrompterExplicitNumberReturn | number>;
    /**
     * The default available number emojis
     */
    static numberEmojis: string[];
}
//# sourceMappingURL=MessagePrompterNumberStrategy.d.ts.map