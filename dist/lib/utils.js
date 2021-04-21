"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAuthorData = exports.validateImageData = exports.validateDescriptionData = exports.validateTimestampData = exports.validateFooterData = exports.validateFieldData = exports.validateTitleData = void 0;
const ValidationError_1 = require("./errors/ValidationError");
function validateTitleData(data) {
    var _a, _b;
    /* istanbul ignore next */
    if (!Array.isArray(data))
        throw new ValidationError_1.ValidationError(0 /* Title */, 'Expected an array');
    if (typeof data[0] !== 'object')
        throw new ValidationError_1.ValidationError(0 /* Title */, 'Expected first entry to be an object or null');
    if (data[0] !== null && !Reflect.has(data[0], 'url'))
        throw new ValidationError_1.ValidationError(0 /* Title */, "Invalid properties were passed, expected props are 'url'");
    if (!['undefined', 'string'].includes(typeof ((_a = data[0]) === null || _a === void 0 ? void 0 : _a.url)))
        throw new ValidationError_1.ValidationError(0 /* Title */, `URL should be of type string, got: ${typeof ((_b = data[0]) === null || _b === void 0 ? void 0 : _b.url)}`);
    if (typeof data[1] !== 'string')
        throw new ValidationError_1.ValidationError(0 /* Title */, `Title should be a string, got: ${typeof data[1]}`);
}
exports.validateTitleData = validateTitleData;
function validateFieldData(data) {
    var _a, _b, _c, _d;
    /* istanbul ignore next */
    if (!Array.isArray(data))
        throw new ValidationError_1.ValidationError(1 /* Field */, 'Expected an array');
    if (typeof data[0] !== 'object')
        throw new ValidationError_1.ValidationError(1 /* Field */, 'Expected first entry to be an object or null');
    if (data[0] !== null && !Reflect.has(data[0], 'name') && !Reflect.has(data[0], 'inline'))
        throw new ValidationError_1.ValidationError(1 /* Field */, "Invalid properties were passed, expected props are 'name', 'inline'");
    if (!['undefined', 'string'].includes(typeof ((_a = data[0]) === null || _a === void 0 ? void 0 : _a.name)))
        throw new ValidationError_1.ValidationError(1 /* Field */, `Name should be of type string, got: ${typeof ((_b = data[0]) === null || _b === void 0 ? void 0 : _b.name)}`);
    if (!['undefined', 'boolean'].includes(typeof ((_c = data[0]) === null || _c === void 0 ? void 0 : _c.inline)))
        throw new ValidationError_1.ValidationError(1 /* Field */, `Inline should be of type boolean, got: ${typeof ((_d = data[0]) === null || _d === void 0 ? void 0 : _d.inline)}`);
    if (typeof data[1] !== 'string')
        throw new ValidationError_1.ValidationError(1 /* Field */, `Field value should be of type string, got: ${typeof data[1]}`);
}
exports.validateFieldData = validateFieldData;
function validateFooterData(data) {
    var _a, _b;
    /* istanbul ignore next */
    if (!Array.isArray(data))
        throw new ValidationError_1.ValidationError(2 /* Footer */, 'Expected an array');
    if (typeof data[0] !== 'object')
        throw new ValidationError_1.ValidationError(2 /* Footer */, 'Expected first entry to be an object or null');
    if (data[0] !== null && !Reflect.has(data[0], 'iconURL'))
        throw new ValidationError_1.ValidationError(2 /* Footer */, "Invalid properties were passed, expected props are 'iconURL'");
    if (!['undefined', 'string'].includes(typeof ((_a = data[0]) === null || _a === void 0 ? void 0 : _a.iconURL)))
        throw new ValidationError_1.ValidationError(2 /* Footer */, `iconURL should be of type string, got: ${typeof ((_b = data[0]) === null || _b === void 0 ? void 0 : _b.iconURL)}`);
    if (typeof data[1] !== 'string')
        throw new ValidationError_1.ValidationError(2 /* Footer */, `Footer value should be of type string, got: ${typeof data[1]}`);
}
exports.validateFooterData = validateFooterData;
/* istanbul ignore next */
function validateTimestampData(data) {
    /* istanbul ignore next */
    if (!Array.isArray(data))
        throw new ValidationError_1.ValidationError(3 /* Timestamp */, 'Expected an array');
    if (data[0] !== null)
        throw new ValidationError_1.ValidationError(3 /* Timestamp */, 'Invalid properties were passed, no properties were expected');
    if (data[1] !== null && !['string', 'number'].includes(typeof data[1]) && !(data[1] instanceof Date))
        throw new ValidationError_1.ValidationError(3 /* Timestamp */, `Data passed should be a string, number, or Date, got: ${typeof data[1]}`);
}
exports.validateTimestampData = validateTimestampData;
function validateDescriptionData(data) {
    /* istanbul ignore next */
    if (!Array.isArray(data))
        throw new ValidationError_1.ValidationError(4 /* Description */, 'Expected an array');
    if (data[0] !== null)
        throw new ValidationError_1.ValidationError(4 /* Description */, 'Invalid properties were passed, no properties were expected');
    if (typeof data[1] !== 'string')
        throw new ValidationError_1.ValidationError(4 /* Description */, `Data passed should be a string, got: ${typeof data[1]}`);
}
exports.validateDescriptionData = validateDescriptionData;
function validateImageData(data, type) {
    const key = type === 'thumbnail' ? 6 /* Thumbnail */ : 5 /* Image */;
    /* istanbul ignore next */
    if (!Array.isArray(data))
        throw new ValidationError_1.ValidationError(key, 'Expected an array');
    if (typeof data[0] !== 'object' || data[0] === null || !Reflect.has(data[0], 'url'))
        throw new ValidationError_1.ValidationError(key, "Invalid properties were passed, expected props are 'url'");
    if (typeof data[0].url !== 'string')
        throw new ValidationError_1.ValidationError(key, `URL should be of type string, got: ${typeof data[0].url}`);
    if (data[1] !== null && typeof data[1] !== 'undefined')
        throw new ValidationError_1.ValidationError(key, 'Value passed was invalid, no value expected');
}
exports.validateImageData = validateImageData;
function validateAuthorData(data) {
    var _a, _b, _c, _d;
    if (!Array.isArray(data))
        throw new ValidationError_1.ValidationError(7 /* Author */, 'Expected an array');
    if (typeof data[0] !== 'object')
        throw new ValidationError_1.ValidationError(7 /* Author */, 'Expected first entry to be an object or null');
    if (data[0] !== null && !Reflect.has(data[0], 'url') && !Reflect.has(data[0], 'iconURL'))
        throw new ValidationError_1.ValidationError(7 /* Author */, "Invalid properties were passed, expected props are 'url', 'iconURL'");
    if (!['undefined', 'string'].includes(typeof ((_a = data[0]) === null || _a === void 0 ? void 0 : _a.url)))
        throw new ValidationError_1.ValidationError(7 /* Author */, `URL should be of type string, got: ${typeof ((_b = data[0]) === null || _b === void 0 ? void 0 : _b.url)}`);
    if (!['undefined', 'string'].includes(typeof ((_c = data[0]) === null || _c === void 0 ? void 0 : _c.iconURL)))
        throw new ValidationError_1.ValidationError(7 /* Author */, `Icon URL should be of type string, got: ${typeof ((_d = data[0]) === null || _d === void 0 ? void 0 : _d.iconURL)}`);
    if (typeof data[1] !== 'string')
        throw new ValidationError_1.ValidationError(7 /* Author */, `Author value should be of type string, got: ${typeof data[1]}`);
}
exports.validateAuthorData = validateAuthorData;
//# sourceMappingURL=utils.js.map