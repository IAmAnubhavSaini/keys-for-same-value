"use strict";
exports.__esModule = true;
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
        if (inObject[key] === forValue) {
            keys.push(key);
        }
    }
    return keys;
}
exports.getAllKeys = getAllKeys;
