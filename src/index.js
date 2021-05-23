"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllKeys = void 0;
/** function getAllKeys
 *
 * @param {*} forValue The value that has multiple keys
 * @param {Object} inObject The object under inspection
 * @returns {Array} Returns keys in an array
 *
 * @example
 *
 * getAllKeysFor('faf', { 'f':'faf', 'fa': 'faf', 'faf': 'faf', 'fafa':'fafa'})
 * returns: ["f", "fa", "faf"]
 */
function getAllKeys(forValue, inObject) {
    var keys = [];
    for (var _i = 0, _a = Object.entries(inObject); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        console.log({ value: value, key: key });
        if (value === forValue) {
            keys.push(key);
        }
        if (typeof value === typeof {}) {
            keys = __spreadArray(__spreadArray([], keys), getAllKeys(forValue, value));
        }
    }
    return keys;
}
exports.getAllKeys = getAllKeys;
//# sourceMappingURL=index.js.map