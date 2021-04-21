import type { TitleInformation, FieldInformation, FooterInformation, TimestampInformation, DescriptionInformation, ImageInformation, AuthorInformation } from './EmbedJsx';
export declare function validateTitleData(data: unknown): asserts data is TitleInformation;
export declare function validateFieldData(data: unknown): asserts data is FieldInformation;
export declare function validateFooterData(data: unknown): asserts data is FooterInformation;
export declare function validateTimestampData(data: unknown): asserts data is TimestampInformation;
export declare function validateDescriptionData(data: unknown): asserts data is DescriptionInformation;
export declare function validateImageData(data: unknown, type: 'image' | 'thumbnail'): asserts data is ImageInformation;
export declare function validateAuthorData(data: unknown): asserts data is AuthorInformation;
//# sourceMappingURL=utils.d.ts.map