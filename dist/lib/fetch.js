"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch = void 0;
const tslib_1 = require("tslib");
const node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
const QueryError_1 = require("./QueryError");
require("./types");
async function fetch(url, options, type) {
    if (typeof options === 'undefined') {
        options = {};
        type = "json" /* JSON */;
    }
    else if (typeof options === 'string') {
        type = options;
        options = {};
    }
    else if (typeof type === 'undefined') {
        type = "json" /* JSON */;
    }
    const result = await node_fetch_1.default(url, options);
    if (!result.ok)
        throw new QueryError_1.QueryError(url, result.status, result, await result.text());
    switch (type) {
        case "result" /* Result */:
            return result;
        case "buffer" /* Buffer */:
            return result.buffer();
        case "json" /* JSON */:
            return result.json();
        case "text" /* Text */:
            return result.text();
        default:
            throw new Error(`Unknown type "${type}"`);
    }
}
exports.fetch = fetch;
//# sourceMappingURL=fetch.js.map