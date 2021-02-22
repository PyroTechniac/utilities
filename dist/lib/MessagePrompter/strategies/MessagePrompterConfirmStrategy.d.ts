import type { CollectorFilter, DMChannel, EmojiResolvable, NewsChannel, TextChannel, User } from 'discord.js';
import type { MessagePrompterMessage } from '../constants';
import type { IMessagePrompterExplicitConfirmReturn } from '../ExplicitReturnTypes';
import type { IMessagePrompterConfirmStrategyOptions } from '../strategyOptions';
import { MessagePrompterBaseStrategy } from './MessagePrompterBaseStrategy';
export declare class MessagePrompterConfirmStrategy extends MessagePrompterBaseStrategy implements IMessagePrompterConfirmStrategyOptions {
    /**
     * The cancel emoji used
     */
    confirmEmoji: string | EmojiResolvable;
    /**
     * The confirm emoji used
     */
    cancelEmoji: string | EmojiResolvable;
    /**
     * Constructor for the [[MessagePrompterBaseStrategy]] class
     * @param message The message to be sent [[MessagePrompter]]
     * @param options Overrideable options if needed.
     */
    constructor(message: MessagePrompterMessage, options?: IMessagePrompterConfirmStrategyOptions);
    /**
     * This executes the [[MessagePrompter]] and sends the message if [[IMessagePrompterOptions.type]] equals confirm.
     * The handler will wait for one (1) reaction.
     * @param channel The channel to use.
     * @param authorOrFilter An author object to validate or a {@link https://discord.js.org/#/docs/main/stable/typedef/CollectorFilter CollectorFilter} predicate callback.
     * @returns A promise that resolves to a boolean denoting the value of the input (`true` for yes, `false` for no).
     */
    run(channel: TextChannel | NewsChannel | DMChannel, authorOrFilter: User | CollectorFilter): Promise<IMessagePrompterExplicitConfirmReturn | boolean>;
    /**
     * The default confirm emoji used for [[MessagePrompterConfirmStrategy]]
     */
    static confirmEmoji: string | EmojiResolvable;
    /**
     * The default cancel emoji used for [[MessagePrompterConfirmStrategy]]
     */
    static cancelEmoji: string | EmojiResolvable;
}
//# sourceMappingURL=MessagePrompterConfirmStrategy.d.ts.map