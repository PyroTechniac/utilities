import type { APIMessageContentResolvable, MessageAdditions, MessageOptions } from 'discord.js';
export declare type Constructor<A extends readonly any[] = readonly any[], R = any> = new (...args: A) => R;
export declare type Awaited<T> = PromiseLike<T> | T;
/**
 * A type to extend multiple discord types and simplify usage in [[MessagePrompter]]
 */
export declare type MessagePrompterMessage = APIMessageContentResolvable | (MessageOptions & {
    split?: false;
}) | MessageAdditions;
export declare const enum MessagePrompterStrategies {
    Confirm = "confirm",
    Number = "number",
    Message = "message",
    Reaction = "reaction"
}
//# sourceMappingURL=constants.d.ts.map