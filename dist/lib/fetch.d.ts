/// <reference types="node" />
import { RequestInit, Response } from 'node-fetch';
import type { URL } from 'url';
import { FetchResultTypes } from './types';
/**
 * Performs an HTTP(S) fetch
 * @param url The URL to send the request to. Can be either a `string` or an `URL` object.
 * `url` should be an absolute url, such as `https://example.com/`. A path-relative URL (`/file/under/root`) or protocol-relative URL (`//can-be-http-or-https.com/`) will result in a rejected `Promise`.
 * @param optionsOrType Either the [node-fetch options](https://github.com/node-fetch/node-fetch#options) or one of the {@link FetchResultTypes}
 * @param type Only needs to be provided if the second parameter are [node-fetch options](https://github.com/node-fetch/node-fetch#options). One of the {@link FetchResultTypes} that will determine how the result is returned.
 * @returns The return type is determined by the provided `type`.
 * - When using `FetchResultTypes.JSON` then the return type is `unknown` by default. The type should be specified by filling in the generic type of the function, or casting the result.
 * - When using `FetchResultTypes.Buffer` the return type is always [`Buffer`](https://nodejs.org/api/buffer.html)
 * - When using `FetchResultTypes.Text` the return type is always `string`
 * - When using `FetchResultTypes.Result` the return type is always [`Response`](https://github.com/node-fetch/node-fetch#class-response)
 */
export declare function fetch<R>(url: URL | string, type?: FetchResultTypes.JSON): Promise<R>;
export declare function fetch<R>(url: URL | string, options: RequestInit, type?: FetchResultTypes.JSON): Promise<R>;
export declare function fetch(url: URL | string, type: FetchResultTypes.Buffer): Promise<Buffer>;
export declare function fetch(url: URL | string, options: RequestInit, type: FetchResultTypes.Buffer): Promise<Buffer>;
export declare function fetch(url: URL | string, type: FetchResultTypes.Text): Promise<string>;
export declare function fetch(url: URL | string, options: RequestInit, type: FetchResultTypes.Text): Promise<string>;
export declare function fetch(url: URL | string, type: FetchResultTypes.Result): Promise<Response>;
export declare function fetch(url: URL | string, options: RequestInit, type: FetchResultTypes.Result): Promise<Response>;
export declare function fetch<R>(url: URL | string, options: RequestInit, type: FetchResultTypes): Promise<Response | Buffer | string | R>;
//# sourceMappingURL=fetch.d.ts.map