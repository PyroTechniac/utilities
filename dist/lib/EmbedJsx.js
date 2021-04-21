"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedJsx = void 0;
const discord_js_1 = require("discord.js");
const utils_1 = require("./utils");
const EMBED_TYPES = ['embed', 'title', 'field', 'timestamp', 'footer', 'description', 'image', 'thumbnail', 'author'];
var TsxTypes;
(function (TsxTypes) {
    TsxTypes[TsxTypes["Title"] = 0] = "Title";
    TsxTypes[TsxTypes["Description"] = 1] = "Description";
    TsxTypes[TsxTypes["Thumbnail"] = 2] = "Thumbnail";
    TsxTypes[TsxTypes["Field"] = 3] = "Field";
    TsxTypes[TsxTypes["Timestamp"] = 4] = "Timestamp";
    TsxTypes[TsxTypes["Footer"] = 5] = "Footer";
    TsxTypes[TsxTypes["Image"] = 6] = "Image";
    TsxTypes[TsxTypes["Empty"] = 7] = "Empty";
    TsxTypes[TsxTypes["Author"] = 8] = "Author";
})(TsxTypes || (TsxTypes = {}));
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
// eslint-disable-next-line @typescript-eslint/no-namespace
var EmbedJsx;
(function (EmbedJsx) {
    /**
     * The behind the scenes function that TS uses to turn JSX into proper JS
     * @param type The embed type being created
     * @param data The data emitted along with
     * @returns The embed defined with jsx
     */
    function make(type, ...data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        type = type.toLowerCase();
        if (!EMBED_TYPES.includes(type))
            throw new TypeError(`Invalid type passed, expected one of ${EMBED_TYPES.join(', ')}; got: ${type}`);
        switch (type) {
            case 'embed': {
                const info = data;
                let embed = new discord_js_1.MessageEmbed((_a = info.shift()) !== null && _a !== void 0 ? _a : {});
                for (const value of info) {
                    embed = resolveData((_b = value) !== null && _b !== void 0 ? _b : [7 /* Empty */], embed);
                }
                return embed;
            }
            case 'title': {
                utils_1.validateTitleData(data);
                return [0 /* Title */, data[1], (_c = data[0]) === null || _c === void 0 ? void 0 : _c.url];
            }
            case 'field': {
                utils_1.validateFieldData(data);
                return [3 /* Field */, (_e = (_d = data[0]) === null || _d === void 0 ? void 0 : _d.name) !== null && _e !== void 0 ? _e : '\u200B', data[1], (_g = (_f = data[0]) === null || _f === void 0 ? void 0 : _f.inline) !== null && _g !== void 0 ? _g : false];
            }
            case 'footer': {
                utils_1.validateFooterData(data);
                return [5 /* Footer */, data[1], (_h = data[0]) === null || _h === void 0 ? void 0 : _h.iconURL];
            }
            case 'timestamp': {
                utils_1.validateTimestampData(data);
                return [4 /* Timestamp */, new Date((_j = data[1]) !== null && _j !== void 0 ? _j : Date.now())];
            }
            case 'description': {
                utils_1.validateDescriptionData(data);
                return [1 /* Description */, data[1]];
            }
            case 'image': {
                utils_1.validateImageData(data, 'image');
                return [6 /* Image */, data[0].url];
            }
            case 'thumbnail': {
                utils_1.validateImageData(data, 'thumbnail');
                return [2 /* Thumbnail */, data[0].url];
            }
            case 'author': {
                utils_1.validateAuthorData(data);
                return [8 /* Author */, data[1], (_k = data[0]) === null || _k === void 0 ? void 0 : _k.iconURL, (_l = data[0]) === null || _l === void 0 ? void 0 : _l.url];
            }
        }
    }
    EmbedJsx.make = make;
    function resolveData(data, embed) {
        switch (data[0]) {
            case 0 /* Title */: {
                embed.setTitle(data[1]);
                if (typeof data[2] !== 'undefined')
                    embed.setURL(data[2]);
                return embed;
            }
            case 1 /* Description */: {
                return embed.setDescription(data[1]);
            }
            case 3 /* Field */: {
                return embed.addField(data[1], data[2], data[3]);
            }
            case 5 /* Footer */: {
                return embed.setFooter(data[1], data[2]);
            }
            case 4 /* Timestamp */: {
                return embed.setTimestamp(data[1]);
            }
            case 6 /* Image */: {
                return embed.setImage(data[1]);
            }
            case 2 /* Thumbnail */: {
                return embed.setThumbnail(data[1]);
            }
            case 8 /* Author */: {
                return embed.setAuthor(data[1], data[2], data[3]);
            }
            case 7 /* Empty */: {
                /* istanbul ignore next */
                return embed;
            }
        }
    }
})(EmbedJsx = exports.EmbedJsx || (exports.EmbedJsx = {}));
//# sourceMappingURL=EmbedJsx.js.map