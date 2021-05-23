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
    const keys = [];
    for (let key of Object.keys(inObject)) {
        if (inObject[key] === forValue) {
            keys.push(key);
        }
    }
    return keys;
}

module.exports = {
    getAllKeys
};
