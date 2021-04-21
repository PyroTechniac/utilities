/// <reference types="node" />
import type { Response } from 'node-fetch';
import type { URL } from 'url';
/**
 * The QueryError class which is thrown by the `fetch` method
 */
export declare class QueryError extends Error {
    #private;
    /** The requested url. */
    readonly url: string;
    /** The HTTP status code. */
    readonly code: number;
    /** The returned response body as a string */
    readonly body: string;
    /** The original {@link Response} object */
    readonly response: Response;
    constructor(url: string | URL, code: number, response: Response, body: string);
    toJSON(): any;
}
//# sourceMappingURL=QueryError.d.ts.map