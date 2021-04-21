export declare class ValidationError extends Error {
    key: ValidationKeys;
    constructor(key: ValidationKeys, message: string);
    private static resolveMessage;
}
export declare const enum ValidationKeys {
    Title = 0,
    Field = 1,
    Footer = 2,
    Timestamp = 3,
    Description = 4,
    Image = 5,
    Thumbnail = 6,
    Author = 7
}
//# sourceMappingURL=ValidationError.d.ts.map