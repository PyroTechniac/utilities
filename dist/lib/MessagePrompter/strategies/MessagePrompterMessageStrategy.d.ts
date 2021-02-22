import type { CollectorFilter, DMChannel, Message, NewsChannel, TextChannel, User } from 'discord.js';
import type { MessagePrompterMessage } from '../constants';
import type { IMessagePrompterExplicitMessageReturn } from '../ExplicitReturnTypes';
import type { IMessagePrompterStrategyOptions } from '../strategyOptions';
import { MessagePrompterBaseStrategy } from './MessagePrompterBaseStrategy';
export declare class MessagePrompterMessageStrategy extends MessagePrompterBaseStrategy implements IMessagePrompterStrategyOptions {
    /**
     * Constructor for the [[MessagePrompterBaseStrategy]] class
     * @param messagePrompter The used instance of [[MessagePrompter]]
     * @param options Overrideable options if needed.
     */
    constructor(message: MessagePrompterMessage, options: IMessagePrompterStrategyOptions);
    /**
     * This executes the [[MessagePrompter]] and sends the message if [[IMessagePrompterOptions.type]] equals message.
     * The handler will wait for one (1) message.
     * @param channel The channel to use.
     * @param authorOrFilter An author object to validate or a {@link https://discord.js.org/#/docs/main/stable/typedef/CollectorFilter CollectorFilter} predicate callback.
     * @returns A promise that resolves to the message object received.
     */
    run(channel: TextChannel | NewsChannel | DMChannel, authorOrFilter: User | CollectorFilter): Promise<IMessagePrompterExplicitMessageReturn | Message>;
    /**
     * Creates a filter for the collector to filter on
     * @return The filter for awaitMessages function
     */
    private createMessagePromptFilter;
}
//# sourceMappingURL=MessagePrompterMessageStrategy.d.ts.map