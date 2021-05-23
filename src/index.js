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
    for (var _i = 0, _a = Object.keys(inObject); _i < _a.length; _i++) {
        var key = _a[_i];
        var o = inObject[key];
        if (o === forValue) {
            keys.push(key);
        }
        if (typeof o === 'object') {
            keys.concat(__spreadArray([], getAllKeys(forValue, o)));
        }
    }
    return keys;
}
exports.getAllKeys = getAllKeys;
//# sourceMappingURL=index.js.map