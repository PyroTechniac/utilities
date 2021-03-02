import type { CollectorFilter, DMChannel, EmojiIdentifierResolvable, Message, NewsChannel, TextChannel, User } from 'discord.js';
import type { Awaited, MessagePrompterMessage } from '../constants';
import type { IMessagePrompterExplicitReturnBase } from '../ExplicitReturnTypes';
import type { IMessagePrompterStrategyOptions } from '../strategyOptions';
export declare abstract class MessagePrompterBaseStrategy {
    /**
     * The type of strategy that was used
     */
    type: string;
    /**
     * The timeout that was used in the collector
     */
    timeout: number;
    /**
     * Wether to return an explicit object with data, or the strategies' default
     */
    explicitReturn: boolean;
    /**
     * The message that has been sent in [[MessagePrompter.run]]
     */
    appliedMessage: Message | null;
    /**
     * The message that will be sent in [[MessagePrompter.run]]
     */
    message: MessagePrompterMessage;
    /**
     * Constructor for the [[MessagePrompterBaseStrategy]] class
     * @param messagePrompter The used instance of [[MessagePrompter]]
     * @param options Overrideable options if needed.
     */
    constructor(type: string, message: MessagePrompterMessage, options?: IMessagePrompterStrategyOptions);
    abstract run(channel: TextChannel | NewsChannel | DMChannel, authorOrFilter: User | CollectorFilter): Awaited<unknown>;
    protected collectReactions(channel: TextChannel | NewsChannel | DMChannel, authorOrFilter: User | CollectorFilter, reactions: string[] | EmojiIdentifierResolvable[]): Promise<IMessagePrompterExplicitReturnBase>;
    /**
     * Creates a filter for the collector to filter on
     * @return The filter for awaitReactions function
     */
    protected createReactionPromptFilter(reactions: string[] | EmojiIdentifierResolvable[], authorOrFilter: User | CollectorFilter): CollectorFilter;
    /**
     * The default strategy options
     */
    static defaultStrategyOptions: Required<IMessagePrompterStrategyOptions>;
}
//# sourceMappingURL=MessagePrompterBaseStrategy.d.ts.map