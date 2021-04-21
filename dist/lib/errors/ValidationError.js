"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationKeys = exports.ValidationError = void 0;
class ValidationError extends Error {
    constructor(key, message) {
        super(ValidationError.resolveMessage(key, message));
        Object.defineProperty(this, "key", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: key
        });
    }
    static resolveMessage(key, extraMessage) {
        switch (key) {
            case 0 /* Title */:
                return `Title Validation Error: ${extraMessage}`;
            case 1 /* Field */:
                return `Field Validation Error: ${extraMessage}`;
            case 2 /* Footer */:
                return `Footer Validation Error: ${extraMessage}`;
            case 3 /* Timestamp */:
                return `Timestamp Validation Error: ${extraMessage}`;
            case 4 /* Description */:
                return `Description Validation Error: ${extraMessage}`;
            case 5 /* Image */:
                return `Image Validation Error: ${extraMessage}`;
            case 6 /* Thumbnail */:
                return `Thumbnail Validation Error: ${extraMessage}`;
            case 7 /* Author */:
                return `Author Validation Error: ${extraMessage}`;
        }
    }
}
exports.ValidationError = ValidationError;
var ValidationKeys;
(function (ValidationKeys) {
    ValidationKeys[ValidationKeys["Title"] = 0] = "Title";
    ValidationKeys[ValidationKeys["Field"] = 1] = "Field";
    ValidationKeys[ValidationKeys["Footer"] = 2] = "Footer";
    ValidationKeys[ValidationKeys["Timestamp"] = 3] = "Timestamp";
    ValidationKeys[ValidationKeys["Description"] = 4] = "Description";
    ValidationKeys[ValidationKeys["Image"] = 5] = "Image";
    ValidationKeys[ValidationKeys["Thumbnail"] = 6] = "Thumbnail";
    ValidationKeys[ValidationKeys["Author"] = 7] = "Author";
})(ValidationKeys = exports.ValidationKeys || (exports.ValidationKeys = {}));
//# sourceMappingURL=ValidationError.js.map