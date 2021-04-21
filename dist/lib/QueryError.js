"use strict";
var _json;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryError = void 0;
const tslib_1 = require("tslib");
/**
 * The QueryError class which is thrown by the `fetch` method
 */
class QueryError extends Error {
    constructor(url, code, response, body) {
        super(`Failed to request '${url}' with code ${code}.`);
        /** The requested url. */
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The HTTP status code. */
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The returned response body as a string */
        Object.defineProperty(this, "body", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The original {@link Response} object */
        Object.defineProperty(this, "response", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
        _json.set(this, void 0);
        this.url = typeof url === 'string' ? url : url.href;
        this.code = code;
        this.body = body;
        this.response = response;
        tslib_1.__classPrivateFieldSet(this, _json, null);
    }
    toJSON() {
        var _a;
        return (_a = tslib_1.__classPrivateFieldGet(this, _json)) !== null && _a !== void 0 ? _a : (tslib_1.__classPrivateFieldSet(this, _json, JSON.parse(this.body)));
    }
}
exports.QueryError = QueryError;
_json = new WeakMap();
//# sourceMappingURL=QueryError.js.map