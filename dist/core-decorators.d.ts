import type { PieceContext, PieceOptions } from '@sapphire/framework';
/**
 * Decorator function that applies given options to any Sapphire piece
 * @example
 * ```ts
 *	ApplyOptions<CommandOptions>({
 *		name: 'test',
 *		cooldown: 10
 *	})
 *	export default class extends Command {}
 * ```
 * @param options The options to pass to the piece constructor
 */
export declare function ApplyOptions<T extends PieceOptions>(optionsOrFn: T | ((context: PieceContext) => T)): ClassDecorator;
/**
 * Decorator that sets the enumerable property of a class field to the desired value.
 * @param value Whether the property should be enumerable or not
 */
export declare function enumerable(value: boolean): (target: unknown, key: string) => void;
/**
 * Decorator that sets the enumerable property of a class method to the desired value.
 * @param value Whether the metthod should be enumerable or not
 */
export declare function enumerableMethod(value: boolean): MethodDecorator;
//# sourceMappingURL=core-decorators.d.ts.map