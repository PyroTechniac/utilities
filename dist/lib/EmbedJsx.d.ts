import { MessageEmbed, ColorResolvable } from 'discord.js';
declare const EMBED_TYPES: readonly ["embed", "title", "field", "timestamp", "footer", "description", "image", "thumbnail", "author"];
declare type EmbedInformation = TitleInformation | FieldInformation | TimestampInformation | FooterInformation | DescriptionInformation | ThumbnailInformation | ImageInformation | AuthorInformation;
declare type EmbedData = TitleData | FieldData | TimestampData | FooterData | DescriptionData | ImageData | EmptyData | ThumbnailData | AuthorData;
declare const enum TsxTypes {
    Title = 0,
    Description = 1,
    Thumbnail = 2,
    Field = 3,
    Timestamp = 4,
    Footer = 5,
    Image = 6,
    Empty = 7,
    Author = 8
}
export declare type TitleInformation = [{
    url: string;
} | null, string];
export declare type DescriptionInformation = [null, string];
export declare type FieldInformation = [{
    name?: string;
    inline?: boolean;
} | null, string];
export declare type TimestampInformation = [null, number | string | Date | null];
export declare type FooterInformation = [null | {
    iconURL?: string;
}, string];
export declare type EmbedInitialInformation = [{
    color: ColorResolvable;
} | null, ...EmbedData[]];
export declare type ImageInformation = [{
    url: string;
}, null];
export declare type ThumbnailInformation = [{
    url: string;
}, null];
export declare type AuthorInformation = [{
    url?: string;
    iconURL?: string;
} | null, string];
declare type TitleData = [TsxTypes.Title, string, string?];
declare type DescriptionData = [TsxTypes.Description, string];
declare type FieldData = [TsxTypes.Field, string, string, boolean];
declare type TimestampData = [TsxTypes.Timestamp, Date];
declare type FooterData = [TsxTypes.Footer, string, string?];
declare type ImageData = [TsxTypes.Image, string];
declare type ThumbnailData = [TsxTypes.Thumbnail, string];
declare type EmptyData = [TsxTypes.Empty];
declare type AuthorData = [TsxTypes.Author, string, string?, string?];
/**
 * The namespace to import for embed-jsx
 *
 * @example
 * ```tsx
 * import { EmbedJsx } from '@sapphire/embed-jsx';
 *
 * const embed = (
 *   <embed color="RED">
 * 	   <title>New Embed</title>
 * 	   <description>Hello!</description>
 *   </embed>
 * )
 * ```
 */
export declare namespace EmbedJsx {
    /**
     * The behind the scenes function that TS uses to turn JSX into proper JS
     * @param type The embed type being created
     * @param data The data emitted along with
     * @returns The embed defined with jsx
     */
    function make(type: typeof EMBED_TYPES[number], ...data: EmbedInformation | EmbedInitialInformation): EmbedData | MessageEmbed;
}
export {};
//# sourceMappingURL=EmbedJsx.d.ts.map